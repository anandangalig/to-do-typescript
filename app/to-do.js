var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var HobbyTask = (function (_super) {
    __extends(HobbyTask, _super);
    function HobbyTask(description) {
        _super.call(this, description, "low");
        this.description = description;
    }
    return HobbyTask;
}(Task));
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
    email: "cam@newton.com"
};
var tasks = [];
tasks.push(new HomeTask("Take trash out.", "High"));
tasks.push(new HomeTask("But groceries.", "Medium", anand));
tasks.push(new HomeTask("Do laundry.", "Low"));
tasks.push(new HobbyTask("Take more woodworking classes."));
tasks.push(new HobbyTask("Sign up for rowing classes."));
var today = new Date(); //where is the Date() class coming from?
console.log(today);
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);
tasks.push(new WorkTask(today, "Cancel T-Mobile.", "High", wentz));
tasks.push(new WorkTask(tomorrow, "Attend stand-up.", "Medium", anand));
tasks.push(new WorkTask(nextDay, "Order supplies.", "Low", newton));
console.log(tasks);
