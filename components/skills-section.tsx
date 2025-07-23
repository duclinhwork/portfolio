import { Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function SkillsSection() {
  const skills = {
    "Programming & Databases": ["Python", "SQL (BigQuery, SQL Server)"],
    "Data Tools & Platforms": [
      "Airflow",
      "SSIS",
      "Looker",
      "Power BI",
      "Google Cloud Storage",
      "Cloud Functions",
      "GitLab",
    ],
    "Machine Learning & AI": [
      "Linear Regression",
      "Logistic Regression",
      "Decision Tree",
      "Random Forest",
      "XGBoost",
      "K-Means",
      "KNN",
      "DBSCAN",
      "LSTM",
      "Large Language Models (LLM)",
      "RAG",
      "Prompt Engineering",
    ],
    "Data Architecture & Processing": ["Change Data Capture (CDC)", "Data Warehousing", "Lakehouse Architecture"],
    "Analytics & Visualization": [
      "Data Wrangling",
      "A/B Testing",
      "Business Intelligence (BI) Reporting",
      "Dashboard Development",
    ],
    "Soft Skills": [
      "Analytical Thinking",
      "Cross-Functional Collaboration",
      "Problem-Solving",
      "Effective Communication",
      "Presentation",
      "Data Storytelling",
    ],
  }

  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-montserrat font-bold text-navy dark:text-white mb-10 text-center flex items-center justify-center">
          <Sparkles className="mr-3 h-9 w-9 text-yellow-600" /> Skills
        </h2>
        <div className="grid gap-10">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category}>
              <h3 className="text-2xl font-montserrat font-semibold text-navy dark:text-white mb-4">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillList.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-4 py-2 text-base bg-teal/20 text-teal dark:bg-teal/30 dark:text-white hover:scale-105 transition-transform duration-200 font-inter"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
