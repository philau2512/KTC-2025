package com.lab22.dto;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class StudentDto {
    private Long id;
    private String name;
    private String phone;
    private String email;
    private String address;
}
