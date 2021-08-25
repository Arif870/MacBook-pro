class Inherit {
  name;
  degisnation = "web developer";
  address = "BD";
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
}

class Student extends Inherit {
  food;
  constructor(name, address, food) {
    super(name, address);
    this.food = food;
  }

  startSession = () => this.name + " start a support session";
}

let a = new Student("Arif", "BD", "jackfruits");
console.log(a);

class StudentCare {
  name;
  degisnation = "web design";
  address = "BD";
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  buildRoutine = student => this.name + " build a routine for " + student;
}

class NaptuneVersion {
  name;
  degisnation = "Student care App";
  address = "BD";
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  appVersion = version => this.name + " Release App version " + version;
}
