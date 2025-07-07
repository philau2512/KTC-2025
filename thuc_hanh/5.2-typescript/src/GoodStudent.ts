import Student from "./Student";

class GoodStudent extends Student {
  level: string;
  constructor(id: number, name: string, age: number, level: string) {
    super(id, name, age);
    this.level = level;
  }

  get getLevel() {
    return this.level;
  }
  set setLevel(level: string) {
    this.level = level;
  }
}

export default GoodStudent;
