import Link from "next/link"
import { Github, Linkedin, Mail, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <p className="text-primary font-medium mb-2">Hi, my name is</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Your Name
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mt-3 font-medium">
                Computer Science Student
              </p>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              Passionate about building scalable systems and crafting elegant solutions to complex problems. Currently focused on <span className="text-foreground">full-stack development</span> and <span className="text-foreground">machine learning</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild>
                <Link href="/resume.pdf" target="_blank">
                  <FileText className="w-4 h-4 mr-2" />
                  Download Resume
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#contact">
                  Get in Touch
                </Link>
              </Button>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-4 pt-4">
              <NavLink href="#about" label="ABOUT" />
              <NavLink href="#skills" label="SKILLS" />
              <NavLink href="#projects" label="PROJECTS" />
              <NavLink href="#contact" label="CONTACT" />
            </nav>

            {/* Social Links */}
            <div className="flex items-center gap-5 pt-4">
              <SocialLink href="https://github.com/yourname" icon={<Github className="w-5 h-5" />} label="GitHub" />
              <SocialLink href="https://linkedin.com/in/yourname" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
              <SocialLink href="mailto:hello@example.com" icon={<Mail className="w-5 h-5" />} label="Email" />
            </div>
          </div>

          {/* Right Column - About Content */}
          <div id="about" className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              {"I'm a computer science student passionate about building software that makes a difference. My journey in tech started with simple scripts and has evolved into creating full-stack applications, exploring machine learning models, and contributing to open-source projects."}
            </p>
            <p>
              {"Currently, I'm pursuing my degree at "}
              <span className="text-foreground font-medium">University Name</span>
              {" where I'm deepening my knowledge in "}
              <span className="text-foreground font-medium">algorithms</span>
              {", "}
              <span className="text-foreground font-medium">distributed systems</span>
              {", and "}
              <span className="text-foreground font-medium">artificial intelligence</span>
              {"."}
            </p>
            <p>
              {"I've interned at companies where I worked on production systems, collaborated with cross-functional teams, and shipped features used by thousands of users. I'm always eager to learn, whether it's a new framework, language, or paradigm."}
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
