class Student {
  id: number;
  name: string;
  age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  get getId() {
    return this.id;
  }

  get getName() {
    return this.name;
  }

  get getAge() {
    return this.age;
  }
  set setAge(age: number) {
    this.age = age;
  }
  set setName(name: string) {
    this.name = name;
  }

  set setId(id: number) {
    this.id = id;
  }
}

export default Student;
