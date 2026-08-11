import fs from "fs";
import path from "path";

export function getProcedure(
  category: string,
  slug: string
) {
  const filePath = path.join(
    process.cwd(),
    "docs",
    "procedures",
    category,
    `${slug}.md`
  );

  if (!fs.existsSync(filePath)) {
    return null;
  }

  return fs.readFileSync(filePath, "utf8");
}