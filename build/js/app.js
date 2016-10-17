var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ToDoList;
(function (ToDoList) {
    var Task = (function () {
        function Task(description, priority, assignedTo) {
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
            this.done = false;
        } //nothing the curly braces? may be used later?
        Task.prototype.markDone = function () {
            this.done = true;
        };
        return Task;
    }());
    ToDoList.Task = Task;
    var HomeTask = (function (_super) {
        __extends(HomeTask, _super);
        function HomeTask(description, priority, assignedTo) {
            _super.call(this, description, priority);
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
        }
        return HomeTask;
    }(Task));
    ToDoList.HomeTask = HomeTask;
    var WorkTask = (function (_super) {
        __extends(WorkTask, _super);
        function WorkTask(dueDate, description, priority, assignedTo) {
            _super.call(this, description, priority, assignedTo);
            this.dueDate = dueDate;
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
        }
        return WorkTask;
    }(Task));
    ToDoList.WorkTask = WorkTask;
    var HobbyTask = (function (_super) {
        __extends(HobbyTask, _super);
        function HobbyTask(description) {
            _super.call(this, description, "low");
            this.description = description;
        }
        return HobbyTask;
    }(Task));
    ToDoList.HobbyTask = HobbyTask;
})(ToDoList || (ToDoList = {}));
/// <reference path="to-do-classes-interfaces.ts" /> //this connects this file to interfaces file. But, 'classes' is extra in the path. Why?
var ToDoList;
(function (ToDoList) {
    var anand = {
        name: "Anand Angalig",
        email: "anandangalig@gmail.com"
    };
    var wentz = {
        name: "Carson Wentz",
        email: "carson@wentz.com"
    };
    var newton = {
        name: "Cam Newton",
        email: "cam@newton.com",
        phone: "215-555-6677"
    };
    ToDoList.people = {
        "anand": anand,
        "wentz": wentz,
        "newton": newton
    };
})(ToDoList || (ToDoList = {}));
/// <reference path="to-do-classes-interfaces.ts" />
var ToDoList;
(function (ToDoList) {
    ToDoList.describeTasksForPerson = function (assignee, taskCollection) {
        var descriptions = [];
        for (var _i = 0, taskCollection_1 = taskCollection; _i < taskCollection_1.length; _i++) {
            var task = taskCollection_1[_i];
            if (task.assignedTo === assignee) {
                descriptions.push(task.description);
            }
        }
        return descriptions;
    };
})(ToDoList || (ToDoList = {}));
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
for (var _i = 0, wentzTasks_1 = wentzTasks; _i < wentzTasks_1.length; _i++) {
    var task = wentzTasks_1[_i];
    console.log("* " + task);
}
