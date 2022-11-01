# ZTAP Bookmarklets

## 1. Exclude "Experimental" Alerts (CAT 11)

```javascript
javascript:void((function(){
  function uEnc(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g,(c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`)
    }
  var uE = location.href
  var uD = decodeURIComponent(location.href)
  var qStr = 'portal.threatanalytics.io/#/incidents?'
  var param = ['cat 11 - experimental ioc']
  var paramN = param.length
  if (uE.indexOf(qStr) == -1) {
    alert('This is not a ZTAP queue (URL: \''+uE+'\').')
    return
  }
  for (var i = 0; i < paramN; i++) {
    oc = uD.indexOf(param[i])
    if (oc >= 0) {
      alert('Experimental IOC (CAT 11) alerts are already excluded (' + oc + ' : \'' + param[i] + '\').')
      return
    }
  }
  nU = uE + '&' + uEnc('-Incident Category') + '=' + uEnc(param[0])
  location.href = nU
})());
```

* * *

## 2. Exclude "Tuning" Alerts

```javascript
javascript:void((function(){
  function uEnc(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g,(c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`)
  }
  var uE = location.href
  var uD = decodeURIComponent(location.href)
  var qStr = 'portal.threatanalytics.io/#/incidents?'
  var param = ['product tuning %28criticalstart mdr%29', 'product tuning (criticalstart mdr)']
  var paramN = param.length
  if (uE.indexOf(qStr) == -1) {
    alert('This is not a ZTAP queue (URL: \''+uE+'\').')
    return
  }
  for (var i = 0; i < paramN; i++) {
    oc = uD.indexOf(param[i])
    if (oc >= 0) {
      alert('Tuning events are already excluded (' + oc + ' : \'' + param[i] + '\').')
      return 
    }
  }
  nU = uE + '&' + uEnc('-~Assigned Escalation Path') + '=' + uEnc(param[0]);location.href = nU
})());
```

* * *

## X. Cyberchef One-Liner Recipe

* Snippets were converted to one-line using this *Cyberchef* recipe.

```json
[
  { "op": "Find / Replace",
    "args": [{ "option": "Regex", "string": "(\\s+)?[{]\\n\\s+" }, " { ", true, false, true, false] },
  { "op": "Find / Replace",
    "args": [{ "option": "Regex", "string": "(\\s+)?\\n\\s+}" }, " ;}", true, false, true, false] },
  { "op": "Find / Replace",
    "args": [{ "option": "Regex", "string": "(\\s+)?\\n(\\s+)?" }, "; ", true, false, true, false] }
]
```
