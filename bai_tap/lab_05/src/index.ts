import CourseManager from "./CourseManager";
import Course from "./Course";
import { getInput } from "./utils";

const courseManager = new CourseManager();

function displayMenu() {
    console.log("1. Add Course");
    console.log("2. List Courses");
    console.log("3. Update Course");
    console.log("4. Delete Course");
    console.log("5. Exit");
};

async function main() {
    let choice: number;
    do {
        displayMenu();
        choice = parseInt(await getInput("Choose an option: "));

        switch (choice) {
            case 1:
                // Add course
                const name = await getInput("Enter course name: ");
                const instructor = await getInput("Enter instructor name: ");
                const duration = parseInt(await getInput("Enter duration: "));
                const id = courseManager.courseLists.length + 1;
                const course = new Course(id, name, instructor, duration);
                courseManager.addCourse(course);
                console.log("Course added successfully");
                break;
            case 2:
                // List courses
                console.log(courseManager.listCourses());
                break;
            case 3:
                // Update course
                const idToUpdate = parseInt(await getInput("Enter course ID: "));
                const newName = await getInput("Enter new course name: ");
                const newInstructor = await getInput("Enter new instructor name: ");
                const newDuration = parseInt(await getInput("Enter new duration: "));
                const isUpdate = courseManager.updateCourse(idToUpdate, { name: newName, instructor: newInstructor, duration: newDuration });
                if (isUpdate) {
                    console.log("Course updated successfully");
                } else {    
                    console.log("Failed to update course");
                }
                break;
            case 4:
                // Delete course
                const idToDelete = parseInt(await getInput("Enter course ID: "));
                const isDeleted = courseManager.deleteCourse(idToDelete);
                if (isDeleted) {
                    console.log("Course deleted successfully");
                } else {
                    console.log("Failed to delete course");
                }
                break;
            case 5:
                console.log("Exiting program...");
                break;
            default:
                console.log("Invalid option. Please try again.");
                break;
        }
    } while (choice !== 5)

}

main();