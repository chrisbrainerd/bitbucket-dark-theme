
// should load it from the setes/config.json
var settings = {}

file.load('sites/config.json', function (err, body) {
  settings = JSON.parse(body)
})

// storage and reload
// chrome.storage.sync.get(function (data) {
//   settings.data = data
//   settings.sort()
// })


// events

chrome.extension.onMessage.addListener(function (req, sender, res) {
  a[req.message](req, sender, res)
  return true
})

// action

var a = {
  inject: function (req, sender, res) {
    var config = utils.find(req.location)
    if (!config) return res({message:'error'})

    utils.load(config, function (err, code) {
      if (err) return res({message:'error'})
      res({message:'inject', code:code})
    })
  }
}
