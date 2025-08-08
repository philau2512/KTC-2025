package com.lab22.service;

import com.lab22.dto.StudentDto;

import java.util.List;

public interface IStudentService {
    StudentDto createStudent(StudentDto studentDto);
    StudentDto updateStudent(Long id, StudentDto studentDto);
    void deleteStudent(Long id);
    StudentDto getStudentById(Long id);
    List<StudentDto> getAllStudents();
}
