package com.demomongo.mapper;

import com.demomongo.dto.CustomerDto;
import com.demomongo.entity.Customer;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ICustomerMapper {
    CustomerDto toDto(Customer customer);

    Customer toEntity(CustomerDto dto);

    List<CustomerDto> toDtoList(List<Customer> customers);

    void updateEntityFromDto(CustomerDto dto, @MappingTarget Customer entity);
}
