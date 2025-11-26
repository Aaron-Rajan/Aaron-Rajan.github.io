package com.aaronrajan.backend.controller;

import com.aaronrajan.backend.model.Project;
import com.aaronrajan.backend.service.JsonFileService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin/projects")
public class ProjectController {
    private final JsonFileService jsonFileService;

    public ProjectController(JsonFileService jsonFileService) {
        super();
        this.jsonFileService = jsonFileService;
    }

    @GetMapping
    public ResponseEntity<List<Project>> getProjects() {
        return ResponseEntity.ok(jsonFileService.getProjects());
    }

    @PostMapping
    public ResponseEntity<Project> addProject(@RequestBody Project project) {
        return ResponseEntity.ok(jsonFileService.addProject(project));
    }
}
