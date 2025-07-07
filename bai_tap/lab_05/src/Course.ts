class Course {
  constructor(
    private id: number = 0,
    private name: string = "JavaScripts",
    private instructor: string = "Nguyen Van A",
    private duration: number = 4
  ) {
    this.id = id;
    this.name = name;
    this.instructor = instructor;
    this.duration = duration;
  }

  get getId() {
    return this.id;
  }

  get getName() {
    return this.name;
  }

  get getInstructor() {
    return this.instructor;
  }

  get getDuration() {
    return this.duration;
  }

  set setId(id: number) {
    this.id = id;
  }

  set setName(name: string) {
    this.name = name;
  }

  set setInstructor(instructor: string) {
    this.instructor = instructor;
  }

  set setDuration(duration: number) {
    this.duration = duration;
  }
}

export default Course;
