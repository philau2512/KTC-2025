package com.lab22.controller;

import com.lab22.dto.StudentDto;
import com.lab22.service.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/students")
public class RestStudentController {
    @Autowired
    private IStudentService studentService;

    // Get all students
    @GetMapping("")
    public ResponseEntity<List<StudentDto>> getStudent() {
        List<StudentDto> students = studentService.getAllStudents();
        if (students.isEmpty()) {
            return new ResponseEntity<>(students, HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(students, HttpStatus.OK);
    }

    // Get student by id
    @GetMapping("/{id}")
    public ResponseEntity<StudentDto> getStudentById(@PathVariable("id") Long id) {
        StudentDto student = studentService.getStudentById(id);
        if (student == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(student, HttpStatus.OK);
    }

    // Thêm học sinh
    @PostMapping("/add")
    public ResponseEntity<StudentDto> addStudent(@RequestBody StudentDto studentDto) {
        StudentDto addedStudent = studentService.createStudent(studentDto);
        if (addedStudent == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(addedStudent, HttpStatus.CREATED);
    }

    // Xóa học sinh
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStudent(@PathVariable("id") Long id) {
        studentService.deleteStudent(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // Cập nhật học sinh
    @PatchMapping("/{id}")
    public ResponseEntity<StudentDto> updateStudent(@PathVariable("id") Long id, @RequestBody StudentDto studentDto) {
        StudentDto existStudent = studentService.getStudentById(id);
        if (existStudent == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        studentDto.setId(id);
        StudentDto updatedStudent = studentService.updateStudent(id, studentDto);

        return new ResponseEntity<>(updatedStudent, HttpStatus.OK);
    }
}
