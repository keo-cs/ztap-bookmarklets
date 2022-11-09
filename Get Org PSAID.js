javascript:void((function(){
  var uE = location.href
  var qStr = 'portal.threatanalytics.io/#/incidents/'
  if (uE.indexOf(qStr) == -1) {
    alert('This is not a ZTAP alert (URL: \''+uE+'\').')
    return
  }
  var content = document.querySelectorAll('a[href*="Created=7days&Organization="]')
  var link = content[0].getAttribute('href') + '\n'
  var regexp = /(?<=Created=7days\&Organization\=)[a-zA-Z]+/g
  var match = link.match(regexp)
  var psaid = match['0']
  alert(psaid)
})());
