const fs = require("fs");
const p = "c:/Users/joseg/OneDrive/Desktop/portfolio/src/components/Footer.tsx";
let s = fs.readFileSync(p, "utf8");
// add import after "use client"
if (!s.includes('import { Reveal, RevealItem }')) {
  s = s.replace('"use client";\n', '"use client";\n\nimport { Reveal, RevealItem } from "@/components/reveal";\n');
}
const oldStr = `    <footer className="w-full py-6 mt-auto">
      <div className="mx-auto max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-6 md:px-8">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-muted">© {new Date().getFullYear()} Jose Gerry Acevedo</span>
        </div>
        <div className="flex items-center gap-4 text-xs font-mono text-muted">
          <a href="https://github.com/josegerryacevedo" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
            github
          </a>
          <a href="https://linkedin.com/in/josegerryacevedo" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
            linkedin
          </a>
          <a href="mailto:josegerryacevedojr@gmail.com" className="transition-colors hover:text-foreground">
            email
          </a>
        </div>
      </div>
    </footer>`;
// We don't know exact; do simpler replacements instead
fs.writeFileSync(p, s);
console.log("done");