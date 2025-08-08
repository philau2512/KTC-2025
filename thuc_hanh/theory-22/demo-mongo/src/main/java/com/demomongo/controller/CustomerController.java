package com.demomongo.controller;

import com.demomongo.dto.CustomerDto;
import com.demomongo.service.ICustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customers")
@RequiredArgsConstructor
public class CustomerController {

    private final ICustomerService customerService;

    @GetMapping
    public List<CustomerDto> getAll() {
        return customerService.getAll();
    }

    @GetMapping("/{id}")
    public CustomerDto getById(@PathVariable String id) {
        return customerService.getById(id);
    }

    @PostMapping
    public CustomerDto create(@RequestBody CustomerDto dto) {
        return customerService.create(dto);
    }

    @PutMapping("/{id}")
    public CustomerDto update(@PathVariable String id, @RequestBody CustomerDto dto) {
        return customerService.update(id, dto);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id) {
        customerService.delete(id);
    }
}
