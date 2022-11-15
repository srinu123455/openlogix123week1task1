var subjectObject = {
  "INDIA": {
    "AP": ["EAST-GODAVARI", "WEST-GODAVARI", "VISAKAPATNAM", "VIJAYAWADA"],
    "TS": ["WARANGAL", "KAMMAM", "HYDERABAD"],
    "UP": ["Variables", "Operators", "Functions", "Conditions"]    
  },
  "AUSTRALIA": {
    "VICTORIA": ["MELBOURNE", "PORTLAND", "SUNBURRY"],
    "QUEENSLAND": ["BRISBANE", "GPLD-COAST", "TOWNSVILLE"]
  }
}
window.onload = function() {
  var subjectSel = document.getElementById("country");
  var topicSel = document.getElementById("states");
  var chapterSel = document.getElementById("cities");
  for (var x in subjectObject) {
    subjectSel.options[subjectSel.options.length] = new Option(x, x);
  }
  subjectSel.onchange = function() {

                   chapterSel.length = 1;
                   topicSel.length = 1;
   
    for (var y in subjectObject[this.value]) {
      topicSel.options[topicSel.options.length] = new Option(y, y);
    }
  }
  topicSel.onchange = function() {

                       chapterSel.length = 1;
    
    var z = subjectObject[subjectSel.value][this.value];
    for (var i = 0; i < z.length; i++) {
      chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
    }
  }
}