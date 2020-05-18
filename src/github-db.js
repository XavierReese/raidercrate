var options = {
  protocol: 'https', // <-- http protocol 'https' or 'http'. If not passed, defaults to 'https'
  user: 'XavierReese', // <-- Your Github username
  repo: 'raiderCrateDB', // <-- Your repository to be used a db
  remoteFilename: 'database.json' // <- File with extension .json
}

// Require GithubDB
var GithubDB = require('..').default
// Initialize it with the options from above.
var githubDB = new GithubDB(options)

// Authenticate Github DB -> grab a token from here https://github.com/settings/tokens
githubDB.auth('90cd4c92b121e66bd307667fa089b9bf0186ea0d')

// Connect to repository
githubDB.connectToRepo()

// You are now authenticated with Github and you are ready to use it as your database.
githubDB.save({message: 'wooohoo'})
