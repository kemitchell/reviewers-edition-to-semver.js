module.exports = reviewersEditionToSemVer

var numbers = require('reviewers-edition-parse/numbers')
var parse = require('reviewers-edition-parse')

function reviewersEditionToSemVer(reved) {
  var parsed = parse(reved)
  if (parsed === false) {
    throw new Error('Invalid Reviewers Edition: "' + reved + '"') }
  return numbers
    .reduce(
      function(semver, number, index) {
        if (number === 'draft') {
          return (
            ( 'draft' in parsed ) ?
              ( semver + '-' + parsed.draft ) :
              semver ) }
        else {
          return (
            semver +
            ( ( index === 0 ) ? '' : '.' ) +
            ( ( number in parsed ) ? parsed[number] : '0' ) ) } },
      '') }
