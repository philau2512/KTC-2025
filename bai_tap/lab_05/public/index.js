"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var CourseManager_1 = require("./CourseManager");
var Course_1 = require("./Course");
var utils_1 = require("./utils");
var courseManager = new CourseManager_1.default();
function displayMenu() {
    console.log("1. Add Course");
    console.log("2. List Courses");
    console.log("3. Update Course");
    console.log("4. Delete Course");
    console.log("5. Exit");
}
;
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var choice, _a, _b, name_1, instructor, duration, _c, id, course, idToUpdate, _d, newName, newInstructor, newDuration, _e, isUpdate, idToDelete, _f, isDeleted;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    displayMenu();
                    _a = parseInt;
                    return [4 /*yield*/, (0, utils_1.getInput)("Choose an option: ")];
                case 1:
                    choice = _a.apply(void 0, [_g.sent()]);
                    _b = choice;
                    switch (_b) {
                        case 1: return [3 /*break*/, 2];
                        case 2: return [3 /*break*/, 6];
                        case 3: return [3 /*break*/, 7];
                        case 4: return [3 /*break*/, 12];
                        case 5: return [3 /*break*/, 14];
                    }
                    return [3 /*break*/, 15];
                case 2: return [4 /*yield*/, (0, utils_1.getInput)("Enter course name: ")];
                case 3:
                    name_1 = _g.sent();
                    return [4 /*yield*/, (0, utils_1.getInput)("Enter instructor name: ")];
                case 4:
                    instructor = _g.sent();
                    _c = parseInt;
                    return [4 /*yield*/, (0, utils_1.getInput)("Enter duration: ")];
                case 5:
                    duration = _c.apply(void 0, [_g.sent()]);
                    id = courseManager.courseLists.length + 1;
                    course = new Course_1.default(id, name_1, instructor, duration);
                    courseManager.addCourse(course);
                    console.log("Course added successfully");
                    return [3 /*break*/, 16];
                case 6:
                    // List courses
                    console.log(courseManager.listCourses());
                    return [3 /*break*/, 16];
                case 7:
                    _d = parseInt;
                    return [4 /*yield*/, (0, utils_1.getInput)("Enter course ID: ")];
                case 8:
                    idToUpdate = _d.apply(void 0, [_g.sent()]);
                    return [4 /*yield*/, (0, utils_1.getInput)("Enter new course name: ")];
                case 9:
                    newName = _g.sent();
                    return [4 /*yield*/, (0, utils_1.getInput)("Enter new instructor name: ")];
                case 10:
                    newInstructor = _g.sent();
                    _e = parseInt;
                    return [4 /*yield*/, (0, utils_1.getInput)("Enter new duration: ")];
                case 11:
                    newDuration = _e.apply(void 0, [_g.sent()]);
                    isUpdate = courseManager.updateCourse(idToUpdate, { name: newName, instructor: newInstructor, duration: newDuration });
                    if (isUpdate) {
                        console.log("Course updated successfully");
                    }
                    else {
                        console.log("Failed to update course");
                    }
                    return [3 /*break*/, 16];
                case 12:
                    _f = parseInt;
                    return [4 /*yield*/, (0, utils_1.getInput)("Enter course ID: ")];
                case 13:
                    idToDelete = _f.apply(void 0, [_g.sent()]);
                    isDeleted = courseManager.deleteCourse(idToDelete);
                    if (isDeleted) {
                        console.log("Course deleted successfully");
                    }
                    else {
                        console.log("Failed to delete course");
                    }
                    return [3 /*break*/, 16];
                case 14:
                    console.log("Exiting program...");
                    return [3 /*break*/, 16];
                case 15:
                    console.log("Invalid option. Please try again.");
                    return [3 /*break*/, 16];
                case 16:
                    if (choice !== 5) return [3 /*break*/, 0];
                    _g.label = 17;
                case 17: return [2 /*return*/];
            }
        });
    });
}
main();
