
var isEditing = false,
    tempNameValue = "",
    tempDateValue = "";

// create new process list
var processList = [];
var processCounter = 0;

function main() {
    // Create 5 random inital processes
    for (var i = 0; i < 5; i++) {
        processList.push({
            pid: i,
            status: "ready",
            priority: Math.floor(Math.random() * 5)
        })
        processCounter++;
    }
    // sort the array by priority 
    processList.sort(function (a, b) {
        return a.priority - b.priority;
    });

    console.log(processList);

    isEditing = true;
}

main();

$('.new-row').on('click', function() {
    var tableBody = $(this).closest('tbody'),
    trNew = '<tr><td class="pid"><input type="text" name="name" value=""></td><td class="status"><input type="text" name="status" value=""></td><td class="priority"><input type="text" name="priority" value=""></td><td class="state"><input type="text" name="state" value=""></td><td class="trash"><i class="fa fa-ban" aria-hidden="true"></i></td></tr>';

    if (isEditing) {
        var pidInput = tableBodyh
    }
});