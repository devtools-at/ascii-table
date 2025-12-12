/**
 * ASCII Table
 * ASCII character reference
 *
 * Online tool: https://devtools.at/tools/ascii-table
 *
 * @packageDocumentation
 */

function generateAsciiTable(): AsciiChar[] {
  const table: AsciiChar[] = [];

  for (let i = 0; i <= 127; i++) {
    const category = i <= 31 || i === 127 ? "control" : "printable";
    const description = controlChars[i] || (i >= 33 && i <= 126 ? String.fromCharCode(i) : "");

    table.push({
      decimal: i,
      hex: i.toString(16).toUpperCase().padStart(2, "0"),
      octal: i.toString(8).padStart(3, "0"),
      binary: i.toString(2).padStart(8, "0"),
      char: i >= 33 && i <= 126 ? String.fromCharCode(i) : "",
      description,
      category
    });
  }

  return table;
}

// Export for convenience
export default { encode, decode };
