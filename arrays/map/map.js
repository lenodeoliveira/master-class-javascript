const timeUnits = new Map();

timeUnits.set('second', 1)
timeUnits.set('minute', 60) 
timeUnits.set('hours', 3600) 
timeUnits.forEach(function(value, key) {
   // console.log(key, value)
})

console.log(timeUnits.size)
timeUnits.delete('hours')
//console.log(timeUnits.has('second'))
//console.log(timeUnits.get('second'))
console.log(timeUnits.size)
timeUnits.clear()
console.log(timeUnits.size)