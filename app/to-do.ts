interface IPerson { //interface#1
  name: string;
  email: string;
}

interface ITask { //interface#2 that includes interface#1 as a property
  description: string;
  done: boolean;
  priority: string;
  markDone(): void; //void is entered here to signify this method does not take values and does not return anything.
  assignedTo?: IPerson; // ? makes it optional and the inherited interface forces ITask to inlcude "name" and "email" if it was used to assign a person.
}

class Task implements ITask {
  done: boolean = false;
  constructor(public description: string, public priority: string, public assignedTo?: IPerson){} //nothing the curly braces? may be used later?
  markDone(){
    this.done = true;
  }
}

class HomeTask extends Task {
  constructor(public description:string, public priority: string, public assignedTo?: IPerson){
    super(description, priority);
  }
}

class WorkTask extends Task {
  constructor(public dueDate: Date, public description: string, public priority: string, public assignedTo: IPerson){
    super(description, priority, assignedTo);
  }
}

class HobbyTask extends Task {
  constructor(public description: string){
    super(description, "low");
  }
}

var anand: IPerson = {
  name: "Anand Angalig",
  email: "anandangalig@gmail.com"
}

var wentz: IPerson = {
  name: "Carson Wentz",
  email: "carson@wentz.com"
}

var newton: IPerson = {
  name: "Cam Newton",
  email: "cam@newton.com"
}

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
