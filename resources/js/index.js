
// create new process list
var processList = [];
var blockList = [];
var processCounter = 0;
var Headerlabels = ['PID', 'Status', 'Priority', 'State']; 

// Create 5 random inital processes
for (var i = 0; i < 5; i++) {
    processList.push({
        pid: i,
        status: "ready",
        priority: Math.floor(Math.random() * 10),
        state: "running"
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

    buildTable(Headerlabels, processList, document.getElementById("content-table"));
 
}

main();

$('.new-row').on('click', function() {
    var input_priority = document.getElementById("priority_input").value;

    processCounter++;

    processList.push({
        pid: processCounter,
        status: "ready",
        priority: input_priority,
        state: "running"
    })

    // sort the array by priority 
    processList.sort(function (a, b) {
        return a.priority - b.priority;
    });

    var entire_table = document.getElementById("content-table");
    entire_table.removeChild(entire_table.childNodes[3]);

    buildTable(Headerlabels, processList, document.getElementById("content-table"));
});

$('.kill-row').on('click', function() {
    var pid_input = document.getElementById("pid_input").value;
    if(pid_input >= processCounter) {
        alert("please enter a PID that is in the table");
        return;
    }
    
    processCounter--;

    for (var i = processList.length - 1; i >= 0; --i) {
        if (processList[i].pid == pid_input) {
            processList.splice(i,1);
        }
    }

    var entire_table = document.getElementById("content-table");
    entire_table.removeChild(entire_table.childNodes[3]);

    buildTable(Headerlabels, processList, document.getElementById("content-table"));

});


