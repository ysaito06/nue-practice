#!/usr/bin/env node

import { parse, render } from "nuejs-core";
import { promises as fs } from "node:fs";

// read() function for reading assets
const read = async (name, dir = "src") =>
  await fs.readFile(dir + "/" + name, "utf-8");

// define a component
const component = await read("foo.nue");

// render the component with some data
const html =
  "<!DOCTYPE html>\n\n" +
  render(component, {
    title: "鵺サンプル",
    desc: "Hello 鵺！",
    img: "<鵺画像のパス>",
    img_width: "20%",
    img_height: "20%",
    type: "banner",
  });

// write index.html
await fs.writeFile("./index.html", html);

console.log("wrote", "index.html");
