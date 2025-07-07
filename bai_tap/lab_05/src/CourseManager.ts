import Course from "./Course";

class CourseManager {
  public courseLists: Course[] = [];

  constructor() {
    this.courseLists.push(new Course(1, "Java", "Nguyễn Văn A", 4));
    this.courseLists.push(new Course(2, "SQL", "Nguyễn Văn B", 3));
    this.courseLists.push(new Course(3, "AI", "Nguyễn Văn C", 3));
    this.courseLists.push(new Course(4, "HTML", "Nguyễn Văn D", 3));
  }
  // Add a new course
  addCourse(course: Course) {
    this.courseLists.push(course);
  }

  // List all courses
  listCourses() {
    let result = "";
    for (let i = 0; i < this.courseLists.length; i++) {
      const course = this.courseLists[i];
      result += `Course ID: ${course.getId}, Name: ${course.getName}, Instructor: ${course.getInstructor}, Duration: ${course.getDuration} hours\n`;
    }
    return result;
  }

  // Update a course by ID
  updateCourse(
    id: number,
    updatedInfo: { name?: string; instructor?: string; duration?: number }
  ): boolean {
    const course = this.courseLists[id];
    if (course) {
      if (updatedInfo.name !== undefined) course.setName = updatedInfo.name;
      if (updatedInfo.instructor !== undefined)
        course.setInstructor = updatedInfo.instructor;
      if (updatedInfo.duration !== undefined)
        course.setDuration = updatedInfo.duration;
      return true;
    } else {
      console.log("Course not found");
      return false;
    }
  }

  // Delete a course by ID
  deleteCourse(id: number): boolean {
    const initialLength = this.courseLists.length; // Store the initial length
    this.courseLists = this.courseLists.filter((course) => course.getId !== id);
    const isDeleted = this.courseLists.length < initialLength; // Check if a course was deleted
    if (!isDeleted) {
      console.log("Course not found");
    }
    return isDeleted; 
  }
}

export default CourseManager;