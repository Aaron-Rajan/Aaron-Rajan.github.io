import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Experience.css";
import Footer from "./Footer";

type ExperienceItem = {
  id?: number;        // backend will add this, but keep optional
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  tech: string;
  link?: string;      // optional link for more details / company / project
};

// Helper to convert endDate string into a comparable number
const parseEndDate = (value: string): number => {
  if (!value) return 0;

  const trimmed = value.trim();
  const lower = trimmed.toLowerCase();

  // Treat these as "ongoing" -> should appear at the top
  if (["present", "current", "ongoing"].includes(lower)) {
    return Number.MAX_SAFE_INTEGER;
  }

  // Try native Date parsing first (handles ISO + many text formats)
  const parsed = Date.parse(trimmed);
  if (!Number.isNaN(parsed)) {
    return parsed;
  }

  // Fallback for formats like "Sept 2025", "Sep 2025", "September 2025"
  const parts = trimmed.split(" ");
  if (parts.length === 2) {
    const [monthStrRaw, yearStr] = parts;
    const monthStr = monthStrRaw.toLowerCase().replace(".", "");

    const monthMap: Record<string, number> = {
      jan: 0,
      january: 0,
      feb: 1,
      february: 1,
      mar: 2,
      march: 2,
      apr: 3,
      april: 3,
      may: 4,
      jun: 5,
      june: 5,
      jul: 6,
      july: 6,
      aug: 7,
      august: 7,
      sep: 8,
      sept: 8,
      september: 8,
      oct: 9,
      october: 9,
      nov: 10,
      november: 10,
      dec: 11,
      december: 11,
    };

    const monthIndex = monthMap[monthStr];
    const yearNum = Number(yearStr);

    if (!Number.isNaN(yearNum) && monthIndex !== undefined) {
      return new Date(yearNum, monthIndex, 1).getTime();
    }
  }

  // If all else fails, push it to the bottom
  return 0;
};

const Experience = () => {
  const [experiences, setExperiences] = useState<ExperienceItem[]>([]);

  useEffect(() => {
    getExperiences();
  }, []);

  const getExperiences = async () => {
    try {
      const resp = await axios.get<ExperienceItem[]>("/data/experiences.json");

      // Sort by endDate descending: most recent end date first
      const sorted = [...resp.data].sort(
        (a, b) => parseEndDate(b.endDate) - parseEndDate(a.endDate)
      );

      setExperiences(sorted);
    } catch (error) {
      console.log("Error retrieving data: ", error);
    }
  };

  return (
    <div>
      <section className="experience-section">
        <h1 className="experience-heading">Experience</h1>

        <div className="timeline">
          {experiences.map((exp, index) => {
            const dates = `${exp.startDate} - ${exp.endDate}`;

            return (
              <div
                className="timeline-item"
                key={exp.id ?? `${exp.company}-${dates}-${index}`}
              >
                <div className="timeline-icon">
                  <i className="fas fa-briefcase" />
                </div>

                <article className="timeline-card">
                  <h2 className="exp-role">{exp.role}</h2>
                  <h3 className="exp-company">{exp.company}</h3>

                  <p className="exp-location">{exp.location}</p>
                  <p className="exp-dates">{dates}</p>

                  <p className="exp-description">{exp.description}</p>
                  <p className="exp-tech">
                    <strong>Skills:</strong> {exp.tech}
                  </p>

                  {/* Optional spinning link icon at bottom of card */}
                  {exp.link && exp.link.trim() !== "" && (
                    <div className="exp-links">
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Experience link"
                      >
                        <i className="fas fa-link" />
                      </a>
                    </div>
                  )}
                </article>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Experience;
