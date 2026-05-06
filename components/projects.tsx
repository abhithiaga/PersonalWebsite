"use client"

import { useState } from "react"
import { Github, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const projects = [
  {
    title: "UT Sublease",
    description: "Building a mobile-first subleasing platform for UT Austin students to easily find and post short-term housing. Features include verified student profiles, in-app messaging, and neighborhood-based search.",
    role: "In Progress",
    tags: ["React Native", "Next.js", "Supabase", "Mobile"],
    link: "#",
    github: "https://github.com/abhithiaga/CarbonAI",
    featured: true,
  },
  {
    title: "AI Cardiovascular Diagnostics - CardioPulse",
    description: "Built a full-stack platform with FastAPI backend and Plotly/Dash frontend for real-time ECG analysis and risk prediction. Deployed on AWS Lambda, reducing model inference latency by 37% and cutting diagnostic review time by 30%.",
    role: "Full-Stack Developer",
    tags: ["FastAPI", "Plotly", "AWS Lambda", "ML"],
    github: "https://github.com/abhithiaga/CardioPulse",
    featured: true,
  },
  {
    title: "CarbonAI Platform",
    description: "Developed serverless Python backend and Dash frontend delivering real-time AI-driven carbon reduction insights. Enabled 15+ organizations to track and reduce carbon footprint by 20%.",
    role: "Full-Stack Developer",
    tags: ["Python", "Dash", "AWS", "LLM APIs"],
    github: "https://github.com/abhithiaga/CarbonAI",
    featured: true,
  },
  {
    title: "University of Texas at Dallas – High-Throughput Biomedical Image Processing Pipeline",
    description: "Built Python-based backend services for high-volume image/video processing with modular APIs and batch-processing tools. Increased system performance by 18% through GPU acceleration.",
    role: "Research Intern",
    tags: ["Python", "TensorFlow", "NumPy", "FastAPI"],
    link: "UTD Lab Internship.pdf",
    github: "#",
    featured: false,
  },
  {
    title: "Wolfram (Boston, MA) – Large-Scale GPU-Accelerated Distributed Computing Systems",
    description: "Engineered distributed backend systems across 250K+ nodes using GPU acceleration and parallel processing, cutting runtime by 42%.",
    role: "Research Intern",
    tags: ["Wolfram", "Python", "GPU", "Parallel Computing"],
    link: "https://community.wolfram.com/groups/-/m/t/3216394",
    github: "#",
    featured: false,
  },
  {
    title: "360DigiTMG (Dallas, TX) – Scalable ETL & Data Engineering Systems",
    description: "Built scalable Python/SQL APIs and ETL pipelines for 50K+ records. Developed dashboards with Plotly, Dash, and Power BI, reducing manual workflow by 40%.",
    role: "Full-Stack Intern",
    tags: ["Python", "SQL", "Power BI", "Flask"],
    link: "#",
    github: "#",
    featured: false,
  },
  {
    title: "AI Medical Imaging & Diagnostic Systems (Healthcare Applications)",
    description: "WWT Hackathon winning solution. Built an ML-powered diagnostic imaging tool for healthcare applications.",
    role: "Hackathon Winner",
    tags: ["Python", "TensorFlow", "Healthcare", "ML"],
    link: "#",
    github: "#",
    featured: false,
  },
]

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-sm font-medium tracking-widest text-muted-foreground">
            PROJECTS
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <FeaturedProjectCard
                key={project.title}
                project={project}
                isHovered={hoveredIndex === index}
                onHover={() => setHoveredIndex(index)}
                onLeave={() => setHoveredIndex(null)}
              />
            ))}
        </div>

        {/* Other Projects */}
        <div className="space-y-1">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <ProjectRow
                key={project.title}
                project={project}
                isHovered={hoveredIndex === index + 100}
                onHover={() => setHoveredIndex(index + 100)}
                onLeave={() => setHoveredIndex(null)}
              />
            ))}
        </div>
      </div>
    </section>
  )
}

interface Project {
  title: string
  description: string
  role: string
  tags: string[]
  link: string
  github: string
  featured: boolean
}

function FeaturedProjectCard({
  project,
  isHovered,
  onHover,
  onLeave,
}: {
  project: Project
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
}) {
  return (
    <div
      className={cn(
        "group relative p-6 rounded-lg border border-border bg-card/50 transition-all duration-300",
        isHovered && "border-primary/50 bg-card"
      )}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <Link
          href={project.github}
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label={`View ${project.title} on GitHub`}
        >
          <Github className="w-5 h-5" />
        </Link>
      </div>

      <p className="text-xs font-medium text-primary mb-2">{project.role}</p>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

function ProjectRow({
  project,
  isHovered,
  onHover,
  onLeave,
}: {
  project: Project
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
}) {
  return (
    <Link
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex items-center justify-between py-4 px-4 -mx-4 rounded-lg transition-all duration-200",
        isHovered && "bg-secondary/50"
      )}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="flex items-center gap-6">
        <h3 className="text-foreground font-medium group-hover:text-primary transition-colors min-w-[140px]">
          {project.title}
        </h3>
        <div className="hidden md:flex items-center gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
    </Link>
  )
}
