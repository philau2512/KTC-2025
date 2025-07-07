"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Course_1 = require("./Course");
var CourseManager = /** @class */ (function () {
    function CourseManager() {
        this.courseLists = [];
        this.courseLists.push(new Course_1.default(1, "Java", "Nguyễn Văn A", 4));
        this.courseLists.push(new Course_1.default(2, "SQL", "Nguyễn Văn B", 3));
        this.courseLists.push(new Course_1.default(3, "AI", "Nguyễn Văn C", 3));
        this.courseLists.push(new Course_1.default(4, "HTML", "Nguyễn Văn D", 3));
    }
    // Add a new course
    CourseManager.prototype.addCourse = function (course) {
        this.courseLists.push(course);
    };
    // List all courses
    CourseManager.prototype.listCourses = function () {
        var result = "";
        for (var i = 0; i < this.courseLists.length; i++) {
            var course = this.courseLists[i];
            result += "Course ID: ".concat(course.getId, ", Name: ").concat(course.getName, ", Instructor: ").concat(course.getInstructor, ", Duration: ").concat(course.getDuration, " hours\n");
        }
        return result;
    };
    // Update a course by ID
    CourseManager.prototype.updateCourse = function (id, updatedInfo) {
        var course = this.courseLists[id];
        if (course) {
            if (updatedInfo.name !== undefined)
                course.setName = updatedInfo.name;
            if (updatedInfo.instructor !== undefined)
                course.setInstructor = updatedInfo.instructor;
            if (updatedInfo.duration !== undefined)
                course.setDuration = updatedInfo.duration;
            return true;
        }
        else {
            console.log("Course not found");
            return false;
        }
    };
    // Delete a course by ID
    CourseManager.prototype.deleteCourse = function (id) {
        var initialLength = this.courseLists.length; // Store the initial length
        this.courseLists = this.courseLists.filter(function (course) { return course.getId !== id; });
        var isDeleted = this.courseLists.length < initialLength; // Check if a course was deleted
        if (!isDeleted) {
            console.log("Course not found");
        }
        return isDeleted;
    };
    return CourseManager;
}());
exports.default = CourseManager;
