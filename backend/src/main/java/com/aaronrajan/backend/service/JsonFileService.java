package com.aaronrajan.backend.service;

import com.aaronrajan.backend.model.Experience;
import com.aaronrajan.backend.model.Project;
import com.fasterxml.jackson.databind.exc.MismatchedInputException;
import org.springframework.stereotype.Service;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class JsonFileService {
    private final ObjectMapper mapper;
    private final ObjectWriter writer;

    public JsonFileService(ObjectMapper mapper) {
        this.mapper = mapper;
        this.writer = mapper.writerWithDefaultPrettyPrinter();
    }

    private static final Path PROJECTS_PATH =
            Paths.get("frontend", "public", "data", "projects.json");

    private static final Path EXPERIENCE_PATH =
            Paths.get("frontend", "public", "data", "experiences.json");

    private <T> List<T> readList(Path path, Class<T[]> type) {
        try {
            // If file doesn't exist or is empty -> treat as "no data yet"
            if (!Files.exists(path) || Files.size(path) == 0) {
                return new ArrayList<>();
            }

            T[] array = mapper.readValue(path.toFile(), type);
            return new ArrayList<>(Arrays.asList(array));

        } catch (MismatchedInputException e) {
            // File exists but contains no JSON / not a valid array -> also treat as empty
            return new ArrayList<>();
        } catch (IOException e) {
            throw new RuntimeException("Failed to read " + path, e);
        }
    }

    private void writeList(Path path, List<?> data) {
        try {
            Files.createDirectories(path.getParent());
            writer.writeValue(path.toFile(), data);
        } catch (IOException e) {
            throw new RuntimeException("Failed to write " + path, e);
        }
    }

    public List<Experience> getExperiences() {
        return readList(EXPERIENCE_PATH, Experience[].class);
    }

    public void saveExperiences(List<Experience> experiences) {
        writeList(EXPERIENCE_PATH, experiences);
    }

    public Experience addExperience(Experience experience) {
        List<Experience> experiences = getExperiences();

        // Generate the next ID (handles empty file case too)
        long nextId = experiences.stream()
                .mapToLong(e -> e.getId() == null ? 0L : e.getId())
                .max()
                .orElse(0L) + 1;

        // Set ID on the new experience
        experience.setId(nextId);

        // Add to the list
        experiences.add(experience);

        // Save updated list back to the JSON file
        saveExperiences(experiences);

        // Return the newly added experience (now with an ID)
        return experience;
    }

    // ===== PROJECTS =====

    public List<Project> getProjects() {
        return readList(PROJECTS_PATH, Project[].class);
    }

    public void saveProjects(List<Project> projects) {
        writeList(PROJECTS_PATH, projects);
    }

    public Project addProject(Project project) {
        List<Project> projects = getProjects();

        long nextId = projects.stream()
                .mapToLong(p -> p.getId() == null ? 0L : p.getId())
                .max()
                .orElse(0L) + 1;

        project.setId(nextId);
        projects.add(project);
        saveProjects(projects);

        return project;
    }
}
