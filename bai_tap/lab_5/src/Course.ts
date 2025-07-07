class Course {
  constructor(
    private id: number = 0,
    private name: string = "JavaScripts",
    private tutor: string = "Nguyen Van A",
    private duration: number = 4
  ) {
    this.id = id;
    this.name = name;
    this.tutor = tutor;
    this.duration = duration;
  }

  get getId() {
    return this.id;
  }

  get getName() {
    return this.name;
  }

  get getTutor() {
    return this.tutor;
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

  set setTutor(tutor: string) {
    this.tutor = tutor;
  }

  set setDuration(duration: number) {
    this.duration = duration;
  }
}

export default Course;
