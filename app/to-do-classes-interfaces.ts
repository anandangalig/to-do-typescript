module ToDoList {
  export interface ITask {
    description: string;
    done: boolean;
    priority: string;
    markDone(): void; //void is entered here to signify this method does not take values and does not return anything.
    assignedTo?: IPerson;
  }
  export interface IPerson { // export keyword is here to export these interfaces and classes to other files, such as to-do-people.ts
    name: string;
    email: string;
    phone?: string;
  }


  export class Task implements ITask {
    done: boolean = false;
    constructor(public description: string, public priority: string, public assignedTo?: IPerson){} //nothing the curly braces? may be used later?
    markDone(){
      this.done = true;
    }
  }

  export class HomeTask extends Task {
    constructor(public description:string, public priority: string, public assignedTo?: IPerson){
      super(description, priority);
    }
  }

  export class WorkTask extends Task {
    constructor(public dueDate: Date, public description: string, public priority: string, public assignedTo: IPerson){
      super(description, priority, assignedTo);
    }
  }

  export class HobbyTask extends Task {
    constructor(public description: string){
      super(description, "low");
    }
  }
}
