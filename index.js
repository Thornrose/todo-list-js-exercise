
// Create a new task
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    // Print the state of a task to the console in a nice readable way
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

  // Mark a task as complete
    markCompleted: function() {
      this.complete = true;
    }

  };
  return task;
}


// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the poo out of the litter box"); // task 0
const task2 = newTask("Do Laundry", "Ugh, again?!"); // task 1
const tasks = [task1, task2];


task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed

console.log(task2.title);
task2.markCompleted();
task2.logState();

console.log(tasks);
