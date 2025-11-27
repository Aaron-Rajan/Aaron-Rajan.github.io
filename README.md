# 🌐 Personal Portfolio – React Frontend & Spring Boot JSON Backend

This project is a personal developer portfolio built with a **React** frontend and a lightweight **Spring Boot** backend that stores data in simple **JSON files**.

The backend exposes REST endpoints for managing **Experiences** and **Projects**, which the frontend then renders.

---

## 🛠 Tech Stack

**Frontend**
- React
- JavaScript / JSX
- CSS3

**Backend**
- Java (Spring Boot)
- Spring Web
- Jackson (`ObjectMapper`)
- Maven

**Storage**
- JSON files on disk (no database)
  - `frontend/public/data/experiences.json`
  - `frontend/public/data/projects.json`

---

## ✨ Features

### Frontend
- Responsive **About** section with animated greeting and social icons.
- **Experience** section (timeline/cards) driven by JSON data.
- **Projects** section showcasing key projects and links.
- Dark themed UI with a yellow accent color.

### Backend
- File-based JSON storage for:
  - `Experience` entities  
  - `Project` entities  
- Full CRUD for both:
  - Create new experience / project  
  - Read all experiences / projects  
  - Update an item by `id`  
  - Delete an item by `id`  
- Automatic numeric `id` generation.
- `JsonFileService` encapsulates JSON read/write logic.

---

## 📁 Project Structure (simplified)

    project-root/
    ├── backend/
    │   ├── src/main/java/com/aaronrajan/backend/
    │   │   ├── model/
    │   │   │   ├── Experience.java
    │   │   │   └── Project.java
    │   │   ├── service/
    │   │   │   └── JsonFileService.java
    │   │   └── controller/
    │   │       ├── ExperienceController.java
    │   │       └── ProjectController.java
    │   └── pom.xml
    └── frontend/
        ├── public/
        │   └── data/
        │       ├── experiences.json
        │       └── projects.json
        ├── src/
        │   ├── components/
        │   │   ├── About.jsx
        │   │   ├── Experience.jsx
        │   │   └── Projects.jsx
        │   └── styles/
        │       ├── About.css
        │       ├── Navbar.css
        │       └── Experience.css
        └── package.json

> Exact names/paths can differ slightly depending on your setup.

---

## ▶️ Running the Backend

### 1. Prerequisites

- Java 17+ (or your configured Java version)
- Maven

### 2. Start the Spring Boot backend

From the `backend` root (where `pom.xml` is):

    # Using Maven
    mvn spring-boot:run

    # Or using Maven Wrapper
    ./mvnw spring-boot:run

By default, the backend runs at:

    http://localhost:8080

---

## 💾 JSON Storage Overview

The `JsonFileService` reads and writes JSON arrays from:

- `frontend/public/data/experiences.json`
- `frontend/public/data/projects.json`

Each operation:

1. Reads the file into a `List<T>` using Jackson.  
2. Modifies the list (add / update / delete).  
3. Writes the full list back with pretty-printed JSON.

This keeps the stack simple (no database) while still providing persistent data and a REST API.

---

## 🔌 Backend API – Experiences

> Adjust the base path if your controller uses a different prefix (for example `/api`).

### Get all experiences

    GET /api/experiences

Returns a JSON array of `Experience` objects.

---

### Add a new experience

    POST /api/experiences
    Content-Type: application/json

Example body:

    {
      "title": "Teaching Assistant – Python & Simulation",
      "company": "McMaster University",
      "location": "Hamilton, ON",
      "startDate": "2024-09",
      "endDate": "2024-12",
      "description": "Instructed students in Python to simulate traffic intersections and coached them on software best practices.",
      "techStack": ["Python", "Simulation", "Git"]
    }

The backend:

- Assigns the next numeric `id`.  
- Appends to `experiences.json`.  
- Returns the created experience (with `id`).  

---

### Update an experience by ID

    PUT /api/experiences/{id}
    Content-Type: application/json

Example:

    PUT /api/experiences/3

Body:

    {
      "title": "Teaching Assistant – Python & Traffic Simulation",
      "company": "McMaster University",
      "location": "Hamilton, ON",
      "startDate": "2024-09",
      "endDate": "2024-12",
      "description": "Instructed students in Python, guided them through traffic simulation projects, and provided detailed feedback.",
      "techStack": ["Python", "OOP", "Git"]
    }

The service keeps the ID from the path and replaces the stored object.

---

### Delete an experience by ID

    DELETE /api/experiences/{id}

Example:

    DELETE /api/experiences/3

Removes the matching experience from `experiences.json`.

---

## 🔌 Backend API – Projects

### Get all projects

    GET /api/projects

Returns a JSON array of `Project` objects.

---

### Add a new project

    POST /api/projects
    Content-Type: application/json

Example body:

    {
      "name": "Personal Portfolio",
      "description": "React + Spring Boot portfolio site with JSON-backed experience and projects sections.",
      "link": "https://aaron-rajan.github.io/",
      "techStack": ["React", "Spring Boot", "JSON", "CSS"]
    }

---

### Update a project by ID

    PUT /api/projects/{id}
    Content-Type: application/json

Example:

    PUT /api/projects/2

Body:

    {
      "name": "Personal Portfolio v2",
      "description": "Updated, responsive portfolio with JSON-backed data for experiences and projects.",
      "link": "https://aaron-rajan.github.io/",
      "techStack": ["React", "Spring Boot", "CSS", "JSON"]
    }

---

### Delete a project by ID

    DELETE /api/projects/{id}

Example:

    DELETE /api/projects/2

---

## 🌍 Running the Frontend

From the `frontend` directory:

    npm install
    npm run dev

Common dev URLs:

- Vite: `http://localhost:5173`  
- CRA: `http://localhost:3000`  

The frontend renders:

- **About** section with your intro and social links.  
- **Experience** cards populated from JSON/backend data.  
- **Projects** list populated from JSON/backend data.  

---

## ✅ Typical Dev Workflow

1. Start the backend:

       cd backend
       mvn spring-boot:run

2. Start the frontend:

       cd frontend
       npm install
       npm run dev

3. Open the frontend in the browser (for example `http://localhost:5173`).  

4. Use REST tools (Postman/Thunder Client) or a future admin UI to:
   - `POST` new experiences/projects  
   - `PUT` updates by `id`  
   - `DELETE` outdated entries  

5. Confirm the changes in the UI and in the JSON files under `frontend/public/data/`.

---

## 🚀 Future Improvements

- Add a simple **admin dashboard** in React to manage experiences/projects from the browser.  
- Replace JSON file storage with a database (PostgreSQL, MongoDB, etc.).  
- Add validation and centralized error handling.  
- Write unit tests for `JsonFileService` and controller endpoints.  
