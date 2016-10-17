/// <reference path="to-do-classes-interfaces.ts" /> //this connects this file to interfaces file. But, 'classes' is extra in the path. Why?

module ToDoList { // the same module created earlier in the other file: putting in one container
  var anand: ToDoList.IPerson = {
    name: "Anand Angalig",
    email: "anandangalig@gmail.com"
  }

  var wentz: ToDoList.IPerson = {
    name: "Carson Wentz",
    email: "carson@wentz.com"
  }

  var newton: ToDoList.IPerson = {
    name: "Cam Newton",
    email: "cam@newton.com",
    phone: "215-555-6677"
  }

  export var people = { //putting the people in an object and exporting as well to be used elsewhere.
    "anand": anand,
    "wentz": wentz,
    "newton": newton
  };
}
