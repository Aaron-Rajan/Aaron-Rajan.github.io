package com.aaronrajan.backend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Experience {
    private Long id;
    private String company;
    private String role;
    private String location;
    private String startDate;
    private String endDate;
    private String description;
    private String tech;
    private String link;
}
