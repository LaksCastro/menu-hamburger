let gh = require('gh-pages')

gh.publish('lib', err => {
  if (err) throw err

  console.log('Success Publish to Github Pages')
})
