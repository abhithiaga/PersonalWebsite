const skillCategories = [
  {
    name: "Languages",
    skills: ["Python", "Java", "SQL", "C++", "JavaScript", "HTML/CSS", "Wolfram"],
  },
  {
    name: "ML & Data",
    skills: ["TensorFlow", "Scikit-learn", "NumPy", "Pandas", "Plotly", "Dash"],
  },
  {
    name: "Backend & APIs",
    skills: ["FastAPI", "Flask", "REST APIs", "ETL Pipelines", "Power BI"],
  },
  {
    name: "Cloud & Tools",
    skills: ["AWS", "Azure", "Git", "Docker", "Linux", "Wolfram Cloud"],
  },
  {
    name: "Certifications",
    skills: ["AWS CCP", "Azure Fundamentals", "Power BI"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-sm font-medium tracking-widest text-muted-foreground">
            SKILLS
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.name} className="space-y-4">
              <h3 className="text-foreground font-semibold">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-md bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
