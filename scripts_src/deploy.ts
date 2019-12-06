#!/usr/bin/env node

import { join } from "path";
import ghpages from "gh-pages";

const [, , input] = process.argv;

if (!input) {
  process.exit(1);
}

ghpages.publish(
  join(process.cwd(), input, "dist"),
  {
    dest: input.split("/").slice(-1)[0]
  },
  err => {
    if (err) {
      process.stderr.write(`${JSON.stringify(err)}\n`);
    }
    process.stdout.write("published");
  }
);
