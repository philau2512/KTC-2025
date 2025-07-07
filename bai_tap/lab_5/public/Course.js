"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Course = /** @class */ (function () {
    function Course(id, name, tutor, duration) {
        if (id === void 0) { id = 0; }
        if (name === void 0) { name = "JavaScripts"; }
        if (tutor === void 0) { tutor = "Nguyen Van A"; }
        if (duration === void 0) { duration = 4; }
        this.id = id;
        this.name = name;
        this.tutor = tutor;
        this.duration = duration;
        this.id = id;
        this.name = name;
        this.tutor = tutor;
        this.duration = duration;
    }
    Object.defineProperty(Course.prototype, "getId", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "getTutor", {
        get: function () {
            return this.tutor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "getDuration", {
        get: function () {
            return this.duration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "setId", {
        set: function (id) {
            this.id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "setName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "setTutor", {
        set: function (tutor) {
            this.tutor = tutor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "setDuration", {
        set: function (duration) {
            this.duration = duration;
        },
        enumerable: false,
        configurable: true
    });
    return Course;
}());
exports.default = Course;
