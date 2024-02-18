#!/usr/bin/env node

import { compileFile } from "nuejs-core";

const target_js = "foo.js";

// compile nue source code for browser execution
await compileFile("src/foo.nue", target_js);
console.info("compiled", target_js);
