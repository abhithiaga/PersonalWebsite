import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Mail, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Profile Image - Mobile */}
            <div className="lg:hidden flex justify-center mb-6">
              <div className="relative w-48 h-48 rounded-full overflow-hidden ring-4 ring-primary/20">
                <Image
                  src="/images/profile.jpg"
                  alt="Abhi Thiagarajan"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Abhi Thiagarajan
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mt-3 font-medium">
                Biomedical Engineering + CS
              </p>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              Building at the intersection of <span className="text-foreground font-medium">healthcare</span> and <span className="text-foreground font-medium">technology</span>. Passionate about full-stack development, ML systems, and creating software that makes a real impact.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/Abhirami Thiagarajan Resume.pdf" target="_blank">
                  <FileText className="w-4 h-4 mr-2" />
                  Resume
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#contact">
                  Get in Touch
                </Link>
              </Button>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-3 pt-4">
              <NavLink href="#about" label="ABOUT" />
              <NavLink href="#skills" label="SKILLS" />
              <NavLink href="#projects" label="PROJECTS" />
              <NavLink href="#contact" label="CONTACT" />
            </nav>

            {/* Social Links */}
            <div className="flex items-center gap-5 pt-2">
              <SocialLink href="https://github.com/abhithiaga" icon={<Github className="w-5 h-5" />} label="GitHub" />
              <SocialLink href="https://linkedin.com/in/AbhiThiagarajan" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
              <SocialLink href="mailto:abhi.thiaga@utexas.edu" icon={<Mail className="w-5 h-5" />} label="Email" />
            </div>
          </div>

          {/* Right Column - Profile Image & About */}
          <div className="space-y-8">
            {/* Profile Image - Desktop */}
            <div className="hidden lg:flex justify-center">
              <div className="relative w-72 h-72 rounded-2xl overflow-hidden ring-4 ring-primary/20 shadow-xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Abhi Thiagarajan"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            {/* About Content */}
            <div id="about" className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                {"I'm a Biomedical Engineering student at "}
                <span className="text-foreground font-medium">UT Austin</span>
                {" with a minor in Programming and Computation, maintaining a perfect 4.0 GPA. I love building software that bridges the gap between complex technical systems and real-world impact."}
              </p>
              <p>
                {"I’ve worked across research and industry building scalable backend systems, data pipelines, and machine learning applications for high-volume and real-time use cases. My experience includes developing distributed systems at scale, optimizing performance with GPU acceleration and parallel processing, and deploying full-stack platforms with cloud infrastructure. I’ve also built data visualization tools and automation systems that improve efficiency, reduce latency, and enable better decision-making across engineering and applied domains."}
              </p>
              <p>
                {"When I'm not coding, you'll find me watching F1, exploring national parks, hunting for the best food trucks, or playing volleyball."}
              </p>
            </div>
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
