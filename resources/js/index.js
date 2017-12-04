
// create new process list
var processList = [];
var blockList = [];
var processCounter = 0;
var blockedProcessCounter = 0;
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

function current_process_status() {
	if (processList[0] == null) return;
	processList[0].status = "Current Process";
	processList[0].priority = "N/A";
	for(var i = 1; i > processList.length; i++) {
		processList[i].status = "ready";
	}
}


function main() {
	// sort the array by priority 
	processList.sort(function (a, b) {
		return a.priority - b.priority;
	});

	current_process_status();

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



	current_process_status();
	buildTable(Headerlabels, processList, document.getElementById("content-table"));
});

$('.kill-row').on('click', function() {
	var pid_input = document.getElementById("pid_input").value;
	var check_pid = false;
	for (var j = processList.length - 1; j >= 0; --j) {
		if (processList[j].pid == pid_input) {
			processList.splice(j,1);
			processCounter--;
			check_pid = true;
		}
	}

	if(check_pid == false) {
		alert('please enter a pid from the table');
		return;
	}


	var entire_table = document.getElementById("content-table");
	entire_table.removeChild(entire_table.childNodes[3]);

	current_process_status();

	buildTable(Headerlabels, processList, document.getElementById("content-table"));

});

$('.reset').on('click', function() {
	var forceGet = true;
	location.reload(forceGet);
});

$('.block-row').on('click', function() {
	var check_pid = false;
	var block_input = document.getElementById("block_input").value;

	if (block_input == processList[0].pid) {
		alert ('cannot block current process');
		return;
	}

	for (var j = processList.length - 1; j >= 0; --j) {
		if (processList[j].status === "blocked") {
			alert('cannot block already blocked process');
		}
	}

	// check if pid is in the ready process list
	for (var j = processList.length - 1; j >= 0; --j) {
		if (processList[j].pid == block_input) {
			
			blockList.push({
				pid: block_input,
				status: "blocked",
				priority: processList[j].priority,
				state: "blocked"
			})

			processList.push({
				pid: block_input,
				status: "blocked",
				priority: processList[j].priority,
				state: "blocked"
			})

			processList.splice(j,1);

			processCounter--;
			blockedProcessCounter++;
			check_pid = true;
		}
	}

	if(check_pid == false) {
		alert('please enter a pid from the table');
		return;
	}


	var entire_table = document.getElementById("content-table");
	entire_table.removeChild(entire_table.childNodes[3]);

	current_process_status();

	buildTable(Headerlabels, processList, document.getElementById("content-table"));

});

$('.context-switch').on('click', function() {
	console.log('context switch');

	// removes the first node in the array
	processList.shift();

	var entire_table = document.getElementById("content-table");
	entire_table.removeChild(entire_table.childNodes[3]);

	current_process_status();

	buildTable(Headerlabels, processList, document.getElementById("content-table"));
});


