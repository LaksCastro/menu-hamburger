let gh = require('gh-pages')

gh.publish('demo', err => {
  if (err) throw err

  console.log('Success Publish to Github Pages')
})
