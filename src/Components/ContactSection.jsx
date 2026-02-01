import { useState } from "react";
import toast from "react-hot-toast";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending (replace with EmailJS / API later)
    await new Promise((r) => setTimeout(r, 700));

    setLoading(false);
    e.target.reset();

    toast.success("Message sent! I’ll get back to you soon ✅");
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Contact <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT: Details */}
          <div className="rounded-2xl border border-border/60 bg-background/60 backdrop-blur p-8 shadow-sm text-left">
            <h3 className="text-2xl font-semibold mb-3">
              Let’s build something great
            </h3>
            <p className="text-muted-foreground mb-8">
              Feel free to reach out for collaborations, opportunities, or just
              to say hi. I usually reply within 24–48 hours.
            </p>

            <div className="space-y-5">
              <DetailRow
                icon={<Mail className="h-5 w-5 text-primary" />}
                label="Email"
                value="sumit.khatry@outlook.com"
                href="sumit.khatry@outlook.com"
              />
              <DetailRow
                icon={<Phone className="h-5 w-5 text-primary" />}
                label="Phone"
                value="+1 (778) 788 9477"
                href="tel:+16040000000"
              />
              <DetailRow
                icon={<MapPin className="h-5 w-5 text-primary" />}
                label="Location"
                value="Vancouver, BC, Canada"
              />
            </div>

            <div className="mt-10 text-left">
              <p className="text-sm text-muted-foreground mb-4">
                Find me online
              </p>

              <div className="flex gap-3 justify-start flex-wrap">
                <IconLink
                  href="https://linkedin.com"
                  label="LinkedIn"
                  icon={<Linkedin className="h-5 w-5" />}
                />
                <IconLink
                  href="https://github.com"
                  label="GitHub"
                  icon={<Github className="h-5 w-5" />}
                />
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="rounded-2xl border border-border/60 bg-background/60 backdrop-blur p-8 shadow-sm text-left">
            <h3 className="text-2xl font-semibold mb-6">Send a message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field
                  label="First name"
                  name="firstName"
                  placeholder="Sumit"
                  required
                />
                <Field
                  label="Last name"
                  name="lastName"
                  placeholder="Khatri"
                  required
                />
              </div>

              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="you@email.com"
                required
              />

              <Field
                label="Subject"
                name="subject"
                placeholder="Project inquiry"
                required
              />

              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-primary text-primary-foreground px-5 py-3 font-medium
                           hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed
                           flex items-center justify-center gap-2"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4" />
              </button>

              <p className="text-xs text-muted-foreground">
                By sending this message, you agree to be contacted back.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function DetailRow({ icon, label, value, href }) {
  const content = (
    <div className="flex items-center gap-4">
      <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">{icon}</div>

      <div className="flex flex-col">
        <span className="text-sm text-muted-foreground">{label}</span>
        <span className="font-medium leading-tight">{value}</span>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block hover:opacity-90 transition">
      {content}
    </a>
  ) : (
    <div>{content}</div>
  );
}

function IconLink({ href, label, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2
                 hover:bg-primary/10 transition text-sm"
      aria-label={label}
      title={label}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}

function Field({ label, name, type = "text", placeholder, required }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/40"
      />
    </div>
  );
}
