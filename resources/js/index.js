
// create new process list
var processList = [];
var processCounter = 0;

// Create 5 random inital processes
for (var i = 0; i < 5; i++) {
    processList.push({
        pid: i,
        status: "ready",
        priority: Math.floor(Math.random() * 10),
        state: "running",
        delete: "DELETE"
    })
    processCounter++;
}
// sort the array by priority 
processList.sort(function (a, b) {
    return a.priority - b.priority;
});

function buildTable(labels, objects, container) {
  var table = document.createElement('table');
  var thead = document.createElement('thead');
  var tbody = document.createElement('tbody');

  var theadTr = document.createElement('tr');
  for (var i = 0; i < labels.length; i++) {
    var theadTh = document.createElement('th');
    theadTh.innerHTML = labels[i];
    theadTr.appendChild(theadTh);
  }
  thead.appendChild(theadTr);
  table.appendChild(thead);

  for (j = 0; j < objects.length; j++) {
    var tbodyTr = document.createElement('tr');
    for (k = 0; k < labels.length; k++) {
      var tbodyTd = document.createElement('td');
      tbodyTd.innerHTML = objects[j][labels[k].toLowerCase()];
      tbodyTr.appendChild(tbodyTd);
    }
    tbody.appendChild(tbodyTr);
  }
  table.appendChild(tbody);

  container.appendChild(table);
}


function main() {
    // sort the array by priority 
    processList.sort(function (a, b) {
        return a.priority - b.priority;
    });

    var Headerlabels = ['PID', 'Status', 'Priority', 'State', 'Delete']; 
    buildTable(Headerlabels, processList, document.getElementById("content-table"));
 
}

main();

$('.new-row').on('click', function() {
    console.log('hello');
});


