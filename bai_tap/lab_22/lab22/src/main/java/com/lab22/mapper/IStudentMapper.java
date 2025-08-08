package com.lab22.mapper;

import com.lab22.dto.StudentDto;
import com.lab22.entity.Student;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

import java.util.List;

@Mapper(componentModel = "spring")
public interface IStudentMapper {
    StudentDto toDto(Student student);
    Student toEntity(StudentDto studentDto);
    List<StudentDto> toDtoList(List<Student> students);
    void updateEntityFromDto(StudentDto dto, @MappingTarget Student entity);
}
