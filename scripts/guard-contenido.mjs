// Content guard: scans the BUILD OUTPUT (not the source) and fails the build
// if placeholder or debug strings are about to ship. The site once published
// [[PENDIENTE: ...]] in production because nothing stood in the way.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { extname, join, relative } from "node:path";

const DIST = new URL("../dist/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");

// [needle, case-insensitive?]
const NEEDLES = [
  ["[[PENDIENTE", false],
  ["pragmasyn.example", false],
  ["example.com", false],
  ["lorem ipsum", true],
  ["TODO:", false],
  ["FIXME", false],
];

const TEXT_EXTS = new Set([
  ".html", ".xml", ".txt", ".css", ".js", ".mjs", ".json", ".svg", ".webmanifest",
]);

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) yield* walk(path);
    else yield path;
  }
}

let dist;
try {
  dist = statSync(DIST);
} catch {
  console.error(`guard-contenido: no existe ${DIST} — corre "npm run build" primero.`);
  process.exit(1);
}
if (!dist.isDirectory()) {
  console.error(`guard-contenido: ${DIST} no es un directorio.`);
  process.exit(1);
}

const findings = [];
for (const path of walk(DIST)) {
  if (!TEXT_EXTS.has(extname(path).toLowerCase())) continue;
  const content = readFileSync(path, "utf8");
  const lower = content.toLowerCase();
  for (const [needle, ci] of NEEDLES) {
    const haystack = ci ? lower : content;
    const target = ci ? needle.toLowerCase() : needle;
    let count = 0;
    for (let i = haystack.indexOf(target); i !== -1; i = haystack.indexOf(target, i + 1)) count++;
    if (count > 0) findings.push({ file: relative(DIST, path), needle, count });
  }
}

if (findings.length > 0) {
  console.error("guard-contenido: contenido prohibido en el output del build:\n");
  for (const { file, needle, count } of findings) {
    console.error(`  ${file} — "${needle}" ×${count}`);
  }
  console.error(`\n${findings.length} hallazgo(s). El build no se publica así.`);
  process.exit(1);
}

console.log("guard-contenido: limpio.");
