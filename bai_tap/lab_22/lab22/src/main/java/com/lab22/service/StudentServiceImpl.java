package com.lab22.service;

import com.lab22.dto.StudentDto;
import com.lab22.exception.ResourceNotFoundException;
import com.lab22.mapper.IStudentMapper;
import com.lab22.repository.IStudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StudentServiceImpl implements IStudentService {
    private final IStudentRepository studentRepository;

    private final IStudentMapper studentMapper;

    @Override
    public StudentDto createStudent(StudentDto studentDto) {
        return studentMapper.toDto(studentRepository.save(studentMapper.toEntity(studentDto)));
    }

    @Override
    public StudentDto updateStudent(Long id, StudentDto studentDto) {
        return studentRepository.findById(id)
                .map(existing -> {
                    studentMapper.updateEntityFromDto(studentDto, existing);
                    return studentMapper.toDto(studentRepository.save(existing));
                })
                .orElseThrow(() -> new ResourceNotFoundException("Not found: " + id));
    }

    @Override
    public void deleteStudent(Long id) {
        studentRepository.findById(id)
                .ifPresentOrElse(
                        studentRepository::delete,
                        () -> {
                            throw new ResourceNotFoundException("Not found: " + id);
                        });
    }

    @Override
    public StudentDto getStudentById(Long id) {
        return studentRepository.findById(id)
                .map(studentMapper::toDto)
                .orElseThrow(() -> new ResourceNotFoundException("Not found: " + id));
    }

    @Override
    public List<StudentDto> getAllStudents() {
        return studentMapper.toDtoList(studentRepository.findAll());
    }
}
