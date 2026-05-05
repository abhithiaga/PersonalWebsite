import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-sm font-medium tracking-widest text-muted-foreground">
            CONTACT
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              {"Let's work together"}
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              {"I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!"}
            </p>
          </div>

          <div className="space-y-6">
            <ContactLink
              label="Email"
              value="abhi.thiaga@utexas.edu"
              href="mailto:abhi.thiaga@utexas.edu"
            />
            <ContactLink
              label="LinkedIn"
              value="linkedin.com/in/AbhiThiagarajan"
              href="https://linkedin.com/in/AbhiThiagarajan"
            />
            <ContactLink
              label="Phone"
              value="(972) 859-9048"
              href="tel:+19728599048"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactLink({
  label,
  value,
  href,
}: {
  label: string
  value: string
  href: string
}) {
  return (
    <div className="group">
      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
        {label}
      </p>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
      >
        <span className="text-lg">{value}</span>
        <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
      </Link>
    </div>
  )
}
