package com.demomongo.service;

import com.demomongo.dto.CustomerDto;

import java.util.List;

public interface ICustomerService {
    CustomerDto create(CustomerDto customerDto);

    CustomerDto update(String id, CustomerDto customerDto);

    CustomerDto getById(String id);

    List<CustomerDto> getAll();

    void delete(String id);
}
