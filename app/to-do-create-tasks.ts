/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" /> // this 3rd file is referencing both of the other "backend" files to use and create objects.
/// <reference path="to-do-listing-functions.ts" />

var people = ToDoList.people; //ToDoList is basically a giant object!!!
var tasks = [];

tasks.push(new ToDoList.HomeTask("Take trash out.", "High"));
tasks.push(new ToDoList.HomeTask("But groceries.", "Medium", people.anand)); //people is referenced since it is an imported object that was created on line 4.
tasks.push(new ToDoList.HomeTask("Do laundry.", "Low"));

tasks.push(new ToDoList.HobbyTask("Take more woodworking classes."));
tasks.push(new ToDoList.HobbyTask("Sign up for rowing classes."));

var today = new Date(); //where is the Date() class coming from?
console.log(today);
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);

tasks.push(new ToDoList.WorkTask(today, "Beat Redskins.", "High", people.wentz));
tasks.push(new ToDoList.WorkTask(today, "Score 2 passing TD's.", "Medium", people.wentz));
tasks.push(new ToDoList.WorkTask(today, "Cancel T-Mobile.", "Low", people.wentz));
tasks.push(new ToDoList.WorkTask(tomorrow, "Attend stand-up.", "Medium", people.anand));
tasks.push(new ToDoList.WorkTask(nextDay, "Order supplies.", "Low", people.newton));

console.log(tasks);
var wentzTasks = ToDoList.describeTasksForPerson(people.wentz, tasks);
console.log("Here are Wentz's tasks: ");
for(var task of wentzTasks){
  console.log("* " + task);
}
