package com.demomongo.service.impl;

import com.demomongo.dto.CustomerDto;
import com.demomongo.exception.ResourceNotFoundException;
import com.demomongo.mapper.ICustomerMapper;
import com.demomongo.repository.ICustomerRepository;
import com.demomongo.service.ICustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements ICustomerService {

    private final ICustomerRepository customerRepository;
    private final ICustomerMapper mapper;

    @Override
    public CustomerDto create(CustomerDto dto) {
        return mapper.toDto(customerRepository.save(mapper.toEntity(dto)));
    }

    @Override
    public CustomerDto update(String id, CustomerDto dto) {
        return customerRepository.findById(id)
                .map(existing -> {
                    mapper.updateEntityFromDto(dto, existing);
                    return mapper.toDto(customerRepository.save(existing));
                })
                .orElseThrow(() -> new ResourceNotFoundException("Not found: " + id));
    }

    @Override
    public CustomerDto getById(String id) {
        return customerRepository.findById(id)
                .map(mapper::toDto)
                .orElseThrow(() -> new ResourceNotFoundException("Not found: " + id));
    }

    @Override
    public List<CustomerDto> getAll() {
        return mapper.toDtoList(customerRepository.findAll());
    }

    @Override
    public void delete(String id) {
        customerRepository.findById(id)
                .ifPresentOrElse(
                        customerRepository::delete,
                        () -> {
                            throw new ResourceNotFoundException("Not found: " + id);
                        });
    }
}
