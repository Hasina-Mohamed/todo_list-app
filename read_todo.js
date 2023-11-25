const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function read_todo() {

    //sure if file exist or not exist
    if (fs.existsSync('./data.json')) {

        //reading file as non-blocking
        fs.readFile('./data.json', 'utf8', (err, data) => {

            // error handling
            if (err) {
                console.log('Error From Reading File  : ' + err);
            } else {
                if (!data) {
                    console.log('Data Not Found !  ');
                } else {
                    rl.question("Enter taskId ? : ", (taskId) => {

                        const todos = JSON.parse(data);
                        const todo = todos.find(todo => {
                            return todo.id == Number(taskId);
                        })
                        console.log('task', todo);
                    })
                }
            }

        })


    } else {
        console.log('Opps 404  ');
    }
}

module.exports = {
    read_todo
}