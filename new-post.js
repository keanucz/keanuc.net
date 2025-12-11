#!/usr/bin/env node

/**
 * Node.js script to scaffold a new Zola blog post under content/blog/.
 * Uses built-in modules only. Prompts interactively, creates directory + index.md,
 * fills in frontmatter (with extra metadata), then tries to open in VS Code or default editor.
 */

const fs = require("fs");
const path = require("path");
const readline = require("readline");
const { spawn } = require("child_process");

function slugify(s) {
  return s
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function question(prompt) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise(resolve => {
    rl.question(prompt, answer => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

async function main() {
  const title = await question("Post title: ");
  if (!title) {
    console.error("Error: title cannot be empty.");
    process.exit(1);
  }

  let slug = await question("Slug (leave empty to auto-generate): ");
  if (!slug) slug = slugify(title);

  const now = new Date();
  const date = now.toISOString().split("T")[0];
  const timestamp = now.toISOString();  // full timestamp with timezone info

  const dir = path.join("content", "blog", `${date}-${slug}`);
  const file = path.join(dir, "index.md");

  if (fs.existsSync(dir)) {
    console.error(`Error: directory '${dir}' already exists.`);
    process.exit(1);
  }

  fs.mkdirSync(dir, { recursive: true });

  const description = await question("Description (short summary, optional): ");
  const tagsRaw = await question("Tags (comma-separated, optional): ");
  const catsRaw = await question("Categories (comma-separated, optional): ");

  const tags = tagsRaw.split(",").map(s => s.trim()).filter(s => s);
  const cats = catsRaw.split(",").map(s => s.trim()).filter(s => s);

  const lines = [];
  lines.push("+++");
  lines.push(`title = "${title.replace(/"/g, '\\"')}"`);
  if (description) {
    lines.push(`description = "${description.replace(/"/g, '\\"')}"`);
  }
  lines.push(`date = ${timestamp}`);
  lines.push(`draft = true`);

  if (tags.length > 0 || cats.length > 0) {
    lines.push("");
    lines.push("[taxonomies]");
    if (tags.length > 0) {
      lines.push(`tags = [${tags.map(t => `"${t}"`).join(", ")}]`);
    }
    if (cats.length > 0) {
      lines.push(`categories = [${cats.map(c => `"${c}"`).join(", ")}]`);
    }
  }

  lines.push("");
  lines.push("[extra]");
  lines.push('copy_button = true');
  lines.push('stylesheets = ["css/comments.css"]');
  lines.push("");
  lines.push("[extra.social_media_image]");
  lines.push('# path = "image.png"');
  lines.push('# alt_text = "Alternative alt-text for the image"');
  lines.push("+++");
  lines.push("");
  lines.push("Write your blog post here…");
  lines.push("");

  fs.writeFileSync(file, lines.join("\n"), { encoding: "utf-8" });

  console.log(`Created new post: ${file}`);

  // Try to open in VS Code, or fallback to default OS opener
  const tryEditor = () => {
    const code = spawn("code", [file], { stdio: "ignore", detached: true });
    code.on("error", _ => {
      // fallback
      if (process.platform === "win32") {
        spawn("cmd", ["/c", "start", "", file], { detached: true }).unref();
      } else if (process.platform === "darwin") {
        spawn("open", [file], { detached: true }).unref();
      } else {
        spawn("xdg-open", [file], { detached: true }).unref();
      }
    });
    code.unref();
  };

  tryEditor();
}

main();