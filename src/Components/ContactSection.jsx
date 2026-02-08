import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";

export default function ContactSection() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    const toastId = toast.loading("Sending message...");

    // ✅ Debug: confirm fields are present (remove later)
    const fd = new FormData(formRef.current);
    console.log("FORM DATA:", Object.fromEntries(fd.entries()));

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      toast.success("Message sent! I’ll get back to you soon ✅", {
        id: toastId,
      });
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      toast.error("Failed to send message ❌", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <Toaster position="top-right" />

      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Contact <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT */}
          <div className="rounded-2xl border border-border/60 bg-background/60 backdrop-blur p-8 shadow-sm text-left">
            <h3 className="text-2xl font-semibold mb-3">
              Let’s build something great
            </h3>

            <p className="text-muted-foreground mb-8">
              Reach out for collaborations, freelance work, or opportunities.
            </p>

            <div className="space-y-5">
              <InfoRow
                icon={<Mail className="h-5 w-5 text-primary" />}
                label="Email"
                value="sumit.khatry@outlook.com"
                href="mailto:sumit.khatry@outlook.com"
              />
              <InfoRow
                icon={<Phone className="h-5 w-5 text-primary" />}
                label="Phone"
                value="+1 (778) 788-9477"
                href="tel:+17787889477"
              />
              <InfoRow
                icon={<MapPin className="h-5 w-5 text-primary" />}
                label="Location"
                value="Vancouver, BC, Canada"
              />
            </div>

            <div className="mt-10">
              <p className="text-sm text-muted-foreground mb-4">
                Find me online
              </p>
              <div className="flex gap-3 flex-wrap">
                <SocialLink
                  href="https://www.linkedin.com/in/sumit-khatry/"
                  icon={<Linkedin className="h-5 w-5" />}
                  label="LinkedIn"
                />
                <SocialLink
                  href="https://github.com/sumit-khatry"
                  icon={<Github className="h-5 w-5" />}
                  label="GitHub"
                />
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="rounded-2xl border border-border/60 bg-background/60 backdrop-blur p-8 shadow-sm text-left">
            <h3 className="text-2xl font-semibold mb-6">Send a message</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="First Name"
                  name="firstName"
                  id="firstName"
                  placeholder="Sumit"
                  required
                />
                <Input
                  label="Last Name"
                  name="lastName"
                  id="lastName"
                  placeholder="Khatri"
                  required
                />
              </div>

              <Input
                label="Email"
                name="email"
                id="email"
                type="email"
                placeholder="you@email.com"
                required
              />
              <Input
                label="Subject"
                name="subject"
                id="subject"
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
                  rows={6}
                  required
                  placeholder="Tell me about your project..."
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-primary text-primary-foreground px-5 py-3 font-medium
                           flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4" />
              </button>

              <p className="text-xs text-muted-foreground">
                Tip: check your spam folder the first time!
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- helpers ---------- */

function InfoRow({ icon, label, value, href }) {
  const content = (
    <div className="flex items-center gap-4">
      <div className="p-3 rounded-xl bg-primary/10">{icon}</div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="hover:opacity-90 transition">
      {content}
    </a>
  ) : (
    content
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 hover:bg-primary/10 transition text-sm"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}

function Input({ label, name, id, type = "text", placeholder, required }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/40"
      />
    </div>
  );
}
