#!/usr/bin/env node
var input = process.argv[2]
if (!input) {
  process.stderr.write('Usage: <edition>\n')
  process.exit(1)
}
process.stdout.write(require('./')(input))
process.stdout.write('\n')
