package com.demomongo.repository;

import com.demomongo.entity.Customer;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ICustomerRepository extends MongoRepository<Customer, String> {
}
