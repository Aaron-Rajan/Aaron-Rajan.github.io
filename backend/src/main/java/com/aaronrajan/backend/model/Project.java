package com.aaronrajan.backend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Project {
    private Long id;
    private String name;
    private String link;
    private String description;
    private String imageName;
    private String demo;
}
