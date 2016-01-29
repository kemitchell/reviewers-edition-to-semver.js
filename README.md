```javascript
var toSemVer = require('reviewers-edition-to-semver')
var assert = require('assert')

assert.equal(toSemVer('1e'), '1.0.0')

assert.equal(toSemVer('1e1u'), '1.1.0')

assert.equal(toSemVer('1e1u1c'), '1.1.1')

assert.equal(toSemVer('1e1u1c1d'), '1.1.1-1')

assert.equal(toSemVer('1e1c1d'), '1.0.1-1')

assert.equal(toSemVer('1e1d'), '1.0.0-1')

assert.throws(
  function() { toSemVer('garbage') },
  /Invalid Reviewers Edition: "garbage"/)
```
