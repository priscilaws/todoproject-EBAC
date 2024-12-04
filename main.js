$(document).ready(function() {
    $('#task-form').on('submit', function(e){
        e.preventDefault();

        const yourTask = $('#your-task').val();
        if (yourTask.trim() !== '') {
            const addTask = $(`<li>${yourTask}</li>`)
            $('#task-list').append(addTask);

            $('#your-task').val('');
        } else {
        alert('Please add a task to start');
        }
});

    $('#task-list').on('click', 'li', function () {
        $(this).toggleClass('completed');
    });
});