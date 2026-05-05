"use client"

import { useState } from "react"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const projects = [
  {
    title: "Project Alpha",
    description: "A full-stack web application built with Next.js and PostgreSQL. Features real-time collaboration, authentication, and a beautiful dashboard interface.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    title: "Design System",
    description: "A comprehensive design system with 50+ components, detailed documentation, and Figma integration for seamless designer-developer handoff.",
    tags: ["React", "Storybook", "Figma", "CSS-in-JS"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    title: "CLI Tool",
    description: "A command-line interface tool that automates common development workflows, reducing setup time by 80%.",
    tags: ["Node.js", "TypeScript", "CLI"],
    link: "#",
    github: "#",
    featured: false,
  },
  {
    title: "Mobile App",
    description: "Cross-platform mobile application for task management with offline support and cloud sync capabilities.",
    tags: ["React Native", "Firebase", "Redux"],
    link: "#",
    github: "#",
    featured: false,
  },
  {
    title: "API Gateway",
    description: "High-performance API gateway handling 10K+ requests per second with built-in rate limiting and caching.",
    tags: ["Go", "Redis", "Docker", "Kubernetes"],
    link: "#",
    github: "#",
    featured: false,
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with interactive charts, custom reports, and data export functionality.",
    tags: ["Vue.js", "D3.js", "Python", "FastAPI"],
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
        <div className="flex items-center gap-3">
          <Link
            href={project.github}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label={`View ${project.title} on GitHub`}
          >
            <Github className="w-5 h-5" />
          </Link>
          <Link
            href={project.link}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label={`Visit ${project.title}`}
          >
            <ExternalLink className="w-5 h-5" />
          </Link>
        </div>
      </div>

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
