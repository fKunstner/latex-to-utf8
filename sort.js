#!/usr/bin/env node

/**
 * This script creates a sorted version of the map object defined in map.js
 * The sorted ensures that if one key is a prefix of another, the longer key comes first,
 * such that "\neg" is probably rendered as "¬" instead of being read as ["\ne", "g"] = "≠g".
 */

const fs = require("fs");
const vm = require("vm");

/**
 * Comparison function for sorting keys. 
 * Sorting order such that if one key is a prefix of another, the longer key comes first.
 */
function compareKeys(a, b) {
    if (a === b) return 0;
    if (a.startsWith(b)) return -1;
    if (b.startsWith(a)) return 1;
    return a < b ? -1 : 1;
}

function sortMapObject(obj) {
    const out = {};
    for (const k of Object.keys(obj).sort(compareKeys)) {
        out[k] = obj[k];
    }
    return out;
}

function main() {
    const src = fs.readFileSync("map.js", "utf8");
    const sandbox = {};
    vm.createContext(sandbox);
    vm.runInContext(src, sandbox);
    const sorted = sortMapObject(sandbox.map);
    const outText = "var map = " + JSON.stringify(sorted, null, 4) + ";\n";
    fs.writeFileSync("sorted_map.js", outText, "utf8");
}

main();