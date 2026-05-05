import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Your Name
              </h1>
              <p className="text-xl md:text-2xl text-primary mt-2 font-medium">
                Full Stack Developer
              </p>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              I build accessible, pixel-perfect digital experiences for the web.
            </p>

            {/* Navigation */}
            <nav className="flex flex-col gap-4 pt-4">
              <NavLink href="#about" label="ABOUT" />
              <NavLink href="#projects" label="PROJECTS" />
              <NavLink href="#contact" label="CONTACT" />
            </nav>

            {/* Social Links */}
            <div className="flex items-center gap-5 pt-8">
              <SocialLink href="https://github.com" icon={<Github className="w-5 h-5" />} label="GitHub" />
              <SocialLink href="https://linkedin.com" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
              <SocialLink href="https://twitter.com" icon={<Twitter className="w-5 h-5" />} label="Twitter" />
              <SocialLink href="mailto:hello@example.com" icon={<Mail className="w-5 h-5" />} label="Email" />
            </div>
          </div>

          {/* Right Column - About Content */}
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              {"I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability."}
            </p>
            <p>
              {"In the past, I've had the opportunity to develop software across a variety of settings — from "}
              <span className="text-foreground font-medium">advertising agencies</span>
              {" and "}
              <span className="text-foreground font-medium">large corporations</span>
              {" to "}
              <span className="text-foreground font-medium">start-ups</span>
              {" and "}
              <span className="text-foreground font-medium">small digital product studios</span>
              {"."}
            </p>
            <p>
              {"In my spare time, I'm usually exploring new technologies, contributing to open source, reading, or playing video games."}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-4 text-sm font-medium tracking-widest text-muted-foreground hover:text-foreground transition-colors"
    >
      <span className="h-px w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all duration-300" />
      {label}
    </Link>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-primary transition-colors"
      aria-label={label}
    >
      {icon}
    </Link>
  )
}
