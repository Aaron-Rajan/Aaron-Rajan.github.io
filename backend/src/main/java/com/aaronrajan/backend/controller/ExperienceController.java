package com.aaronrajan.backend.controller;

import com.aaronrajan.backend.model.Experience;
import com.aaronrajan.backend.service.JsonFileService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin/experiences")
public class ExperienceController {
    private final JsonFileService jsonFileService;

    public ExperienceController(JsonFileService jsonFileService) {
        super();
        this.jsonFileService = jsonFileService;
    }

    @GetMapping
    public ResponseEntity<List<Experience>> getExperiences() {
        return ResponseEntity.ok(jsonFileService.getExperiences());
    }

    @PostMapping
    public ResponseEntity<Experience> addExperience(@RequestBody Experience experience) {
        return ResponseEntity.ok(jsonFileService.addExperience(experience));
    }

    @DeleteMapping("{id}")
    public void deleteExperience(@PathVariable long id) {
        jsonFileService.deleteExperience(id);
    }

    @PutMapping("{id}")
    public ResponseEntity<Experience> updateProject(@PathVariable long id, @RequestBody Experience experience) {
        return ResponseEntity.ok(jsonFileService.updateExperience(id, experience));
    }
}
