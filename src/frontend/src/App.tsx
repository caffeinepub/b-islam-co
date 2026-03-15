import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitBooking } from "@/hooks/useQueries";
import {
  BookOpen,
  Calculator,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  FileText,
  Loader2,
  Mail,
  MapPin,
  Menu,
  Phone,
  Shield,
  TrendingUp,
  X,
} from "lucide-react";
import { AnimatePresence, type Variants, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

// ── Fade-up animation variant ──────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// ── Navigation ─────────────────────────────────────────────────────────────
function NavBar({ onBooking }: { onBooking: () => void }) {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-xs">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group"
            data-ocid="nav.link"
          >
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center flex-shrink-0">
              <span className="text-primary-foreground font-display font-bold text-sm">
                B
              </span>
            </div>
            <span className="font-display font-semibold text-foreground text-lg leading-tight">
              B Islam &amp; Co.
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-ocid="nav.link"
                className="font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300 gold-line" />
              </a>
            ))}
            <Button
              size="sm"
              data-ocid="nav.primary_button"
              onClick={onBooking}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-medium px-4"
            >
              Book a Consultation
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-white"
          >
            <div className="container mx-auto max-w-6xl px-6 py-4 flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  data-ocid="nav.link"
                  onClick={() => setOpen(false)}
                  className="font-body text-sm font-medium text-foreground py-1"
                >
                  {l.label}
                </a>
              ))}
              <Button
                size="sm"
                data-ocid="nav.primary_button"
                onClick={() => {
                  setOpen(false);
                  onBooking();
                }}
                className="bg-primary text-primary-foreground mt-2 w-full font-body"
              >
                Book a Consultation
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ── Hero Section ────────────────────────────────────────────────────────────
function HeroSection({ onBooking }: { onBooking: () => void }) {
  return (
    <section
      id="home"
      data-ocid="hero.section"
      className="relative min-h-[92vh] flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/generated/hero-bg.dim_1600x900.jpg')",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.18_0.07_265/0.92)] via-[oklch(0.22_0.08_265/0.85)] to-[oklch(0.28_0.09_265/0.75)]" />

      {/* Gold accent lines */}
      <div className="absolute top-0 right-0 w-1/2 h-1 gold-line" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1 gold-line" />

      <div className="relative z-10 container mx-auto max-w-6xl px-6 pt-24 pb-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            custom={0}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-12 gold-line" />
            <span className="font-body text-sm font-medium tracking-[0.15em] uppercase text-gold">
              Est. 2005 · Trusted Professionals
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            custom={1}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6"
          >
            Trusted Accounting &amp; Tax Solutions
            <span className="block mt-2">
              <span className="text-gold">–</span> B Islam &amp; Co.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeUp}
            custom={2}
            className="font-body text-lg text-white/80 leading-relaxed max-w-2xl mb-10"
          >
            With over two decades of expertise, B Islam &amp; Co. delivers
            comprehensive accounting, tax filing, GST services, auditing, and
            financial consulting — built on a foundation of accuracy, integrity,
            and an unwavering commitment to our clients' financial success.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            custom={3}
            className="flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              data-ocid="hero.primary_button"
              onClick={onBooking}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold px-8 py-3 text-base shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Book a Consultation
              <ChevronRight className="ml-2" size={18} />
            </Button>
            <a href="#services">
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 hover:border-white font-body font-medium px-8 py-3 text-base"
              >
                Our Services
              </Button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            custom={4}
            className="mt-16 grid grid-cols-3 gap-6 max-w-xl"
          >
            {[
              { value: "20+", label: "Years of Experience" },
              { value: "1,500+", label: "Clients Served" },
              { value: "5", label: "Core Services" },
            ].map((stat) => (
              <div key={stat.label} className="border-l-2 border-gold pl-4">
                <div className="font-display text-2xl font-bold text-gold">
                  {stat.value}
                </div>
                <div className="font-body text-xs text-white/60 mt-0.5 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ── About Section ───────────────────────────────────────────────────────────
function AboutSection() {
  return (
    <section
      id="about"
      data-ocid="about.section"
      className="py-24 bg-background"
    >
      <div className="container mx-auto max-w-6xl px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Section title */}
          <motion.div variants={fadeUp} className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 gold-line" />
              <span className="font-body text-sm font-medium tracking-widest uppercase text-muted-foreground">
                About the Firm
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              A Legacy of Trust &amp; Expertise
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left — firm story */}
            <motion.div variants={fadeUp} custom={1}>
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
                Founded over two decades ago,{" "}
                <strong className="text-foreground font-semibold">
                  B Islam &amp; Co.
                </strong>{" "}
                is a full-service accounting and tax advisory firm dedicated to
                helping individuals, small businesses, and corporations navigate
                the complexities of financial compliance with confidence and
                clarity.
              </p>
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
                Our team of qualified chartered accountants and tax
                professionals brings deep knowledge of local tax laws, GST
                regulations, and international accounting standards, ensuring
                every client receives precise, timely, and strategic financial
                guidance.
              </p>

              {/* Values list */}
              <div className="space-y-3">
                {[
                  {
                    label: "Client-First Approach",
                    desc: "Your financial goals are our top priority",
                  },
                  {
                    label: "Complete Transparency",
                    desc: "Clear communication at every step",
                  },
                  {
                    label: "Proven Reliability",
                    desc: "Consistent results, year after year",
                  },
                ].map((v) => (
                  <div key={v.label} className="flex items-start gap-3">
                    <CheckCircle2
                      className="text-accent mt-0.5 flex-shrink-0"
                      size={18}
                    />
                    <div>
                      <span className="font-body font-semibold text-foreground text-sm">
                        {v.label}
                      </span>
                      <span className="font-body text-sm text-muted-foreground">
                        {" "}
                        — {v.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — Mission & Vision cards */}
            <motion.div variants={fadeUp} custom={2} className="space-y-6">
              {/* Mission */}
              <div className="bg-card rounded-lg p-8 shadow-card border border-border relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-l-lg" />
                <div className="pl-4">
                  <div className="font-body text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                    Our Mission
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    Accuracy, Integrity &amp; Excellence
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    To deliver meticulous, ethical, and forward-thinking
                    accounting and tax services that empower our clients to make
                    informed financial decisions and achieve long-term
                    stability.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="bg-card rounded-lg p-8 shadow-card border border-border relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full gold-line rounded-l-lg" />
                <div className="pl-4">
                  <div className="font-body text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                    Our Vision
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    Empowering Financial Clarity
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    To be the most trusted accounting partner for our community
                    — a firm where every client feels understood, valued, and
                    equipped to thrive in an ever-changing financial landscape.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ── Services Section ─────────────────────────────────────────────────────────
const services = [
  {
    icon: BookOpen,
    title: "Accounting & Bookkeeping",
    desc: "Precise, real-time bookkeeping and financial record management to keep your business accounts accurate and audit-ready at all times.",
  },
  {
    icon: FileText,
    title: "Tax Preparation & Filing",
    desc: "Comprehensive individual and corporate tax returns prepared with meticulous attention to detail, maximising deductions while ensuring full compliance.",
  },
  {
    icon: Calculator,
    title: "GST Services",
    desc: "End-to-end GST registration, computation, return filing, and advisory to keep your business fully compliant with all GST regulations.",
  },
  {
    icon: ClipboardCheck,
    title: "Auditing",
    desc: "Independent statutory and internal audits conducted with rigor and objectivity, providing stakeholders with reliable financial assurance.",
  },
  {
    icon: TrendingUp,
    title: "Financial Consulting",
    desc: "Strategic financial planning, forecasting, and advisory services designed to drive growth, manage risk, and optimise your financial position.",
  },
];

function ServicesSection({ onBooking }: { onBooking: () => void }) {
  return (
    <section
      id="services"
      data-ocid="services.section"
      className="py-24 bg-secondary"
    >
      <div className="container mx-auto max-w-6xl px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeUp} className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 gold-line" />
              <span className="font-body text-sm font-medium tracking-widest uppercase text-muted-foreground">
                What We Offer
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
                Our Core Services
              </h2>
              <Button
                variant="outline"
                data-ocid="services.primary_button"
                onClick={onBooking}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body font-medium shrink-0"
              >
                Book a Consultation
              </Button>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                custom={i}
                data-ocid={`services.item.${i + 1}`}
                className="bg-card rounded-lg p-7 shadow-card border border-border group hover:shadow-card-hover transition-all duration-300 cursor-default"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-md bg-primary/8 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors duration-300">
                  <service.icon className="text-primary" size={22} />
                </div>
                {/* Gold accent line */}
                <div className="h-0.5 w-8 gold-line mb-4" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}

            {/* CTA card */}
            <motion.div
              variants={fadeUp}
              custom={5}
              className="bg-navy rounded-lg p-7 shadow-card flex flex-col justify-between"
            >
              <div>
                <Shield className="text-gold mb-5" size={28} />
                <h3 className="font-display text-lg font-bold text-white mb-3">
                  Not sure where to start?
                </h3>
                <p className="font-body text-sm text-white/70 leading-relaxed">
                  Our team will assess your needs and recommend the right
                  solution for you.
                </p>
              </div>
              <Button
                className="mt-6 bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold w-full"
                data-ocid="services.secondary_button"
                onClick={onBooking}
              >
                Get Free Advice
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ── Contact Section ──────────────────────────────────────────────────────────
function ContactSection({ onBooking }: { onBooking: () => void }) {
  return (
    <section
      id="contact"
      data-ocid="contact.section"
      className="py-24 bg-background"
    >
      <div className="container mx-auto max-w-6xl px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeUp} className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 gold-line" />
              <span className="font-body text-sm font-medium tracking-widest uppercase text-muted-foreground">
                Get In Touch
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Contact B Islam &amp; Co.
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div variants={fadeUp} custom={1} className="space-y-8">
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                Ready to take control of your financial future? Reach out to our
                team for a confidential consultation. We are here to help you
                every step of the way.
              </p>

              <div className="space-y-5">
                {[
                  {
                    icon: MapPin,
                    label: "Address",
                    value: "123 Finance Street, Dhaka 1000, Bangladesh",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "contact@bislamco.com",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+880 2 9876543",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-primary/8 flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-primary" size={18} />
                    </div>
                    <div>
                      <div className="font-body text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-0.5">
                        {item.label}
                      </div>
                      <div className="font-body text-sm font-medium text-foreground">
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button
                  size="lg"
                  data-ocid="contact.primary_button"
                  onClick={onBooking}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold px-8"
                >
                  Book a Consultation
                  <ChevronRight className="ml-2" size={18} />
                </Button>
              </div>
            </motion.div>

            {/* Office hours card */}
            <motion.div
              variants={fadeUp}
              custom={2}
              className="bg-card rounded-lg border border-border shadow-card overflow-hidden"
            >
              <div className="bg-primary p-6">
                <h3 className="font-display text-lg font-bold text-primary-foreground mb-1">
                  Office Hours
                </h3>
                <p className="font-body text-sm text-primary-foreground/70">
                  We're available to serve you
                </p>
              </div>
              <div className="p-6 space-y-4">
                {[
                  { day: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
                  { day: "Saturday", time: "10:00 AM – 4:00 PM" },
                  { day: "Sunday", time: "Closed" },
                ].map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between items-center py-2 border-b border-border last:border-0"
                  >
                    <span className="font-body text-sm font-medium text-foreground">
                      {h.day}
                    </span>
                    <span className="font-body text-sm text-muted-foreground">
                      {h.time}
                    </span>
                  </div>
                ))}
                <Button
                  className="w-full mt-2 bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold"
                  data-ocid="contact.secondary_button"
                  onClick={onBooking}
                >
                  Schedule an Appointment
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-20 border-t border-border">
        <div className="container mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-xs">
                B
              </span>
            </div>
            <span className="font-body text-sm font-medium text-foreground">
              B Islam &amp; Co.
            </span>
          </div>
          <p className="font-body text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} B Islam &amp; Co. All rights reserved.
          </p>
          <p className="font-body text-xs text-muted-foreground">
            Built with ❤ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Booking Modal ────────────────────────────────────────────────────────────
function BookingModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { mutateAsync, isPending, isSuccess, reset } = useSubmitBooking();

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await mutateAsync(form);
    } catch {
      toast.error("Submission failed. Please try again.");
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      reset();
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && handleClose()}>
      <DialogContent
        data-ocid="booking.modal"
        className="sm:max-w-md font-body"
      >
        <DialogHeader>
          <div className="h-0.5 w-12 gold-line mb-3" />
          <DialogTitle className="font-display text-xl font-bold text-foreground">
            Book a Consultation
          </DialogTitle>
          <p className="font-body text-sm text-muted-foreground">
            Fill in your details and we'll get back to you within one business
            day.
          </p>
        </DialogHeader>

        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              data-ocid="booking.success_state"
              className="text-center py-10"
            >
              <CheckCircle2 className="text-accent mx-auto mb-4" size={48} />
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                Thank You!
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-6">
                Your consultation request has been received. We'll contact you
                shortly.
              </p>
              <Button
                onClick={handleClose}
                className="bg-primary text-primary-foreground font-body font-medium"
              >
                Close
              </Button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onSubmit={handleSubmit}
              className="space-y-4 mt-2"
            >
              <div className="space-y-1.5">
                <Label
                  className="font-body text-sm font-medium"
                  htmlFor="booking-name"
                >
                  Full Name
                </Label>
                <Input
                  id="booking-name"
                  data-ocid="booking.input.1"
                  placeholder="e.g. Ahmed Rahman"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                  className="font-body"
                />
              </div>
              <div className="space-y-1.5">
                <Label
                  className="font-body text-sm font-medium"
                  htmlFor="booking-email"
                >
                  Email Address
                </Label>
                <Input
                  id="booking-email"
                  type="email"
                  data-ocid="booking.input.2"
                  placeholder="e.g. ahmed@example.com"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  className="font-body"
                />
              </div>
              <div className="space-y-1.5">
                <Label
                  className="font-body text-sm font-medium"
                  htmlFor="booking-phone"
                >
                  Phone Number
                </Label>
                <Input
                  id="booking-phone"
                  type="tel"
                  data-ocid="booking.input.3"
                  placeholder="e.g. +880 1700 000000"
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  required
                  className="font-body"
                />
              </div>
              <div className="space-y-1.5">
                <Label
                  className="font-body text-sm font-medium"
                  htmlFor="booking-message"
                >
                  Service Needed / Message
                </Label>
                <Textarea
                  id="booking-message"
                  data-ocid="booking.textarea"
                  placeholder="Tell us how we can help you..."
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  rows={3}
                  className="font-body resize-none"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <Button
                  type="submit"
                  data-ocid="booking.submit_button"
                  disabled={isPending}
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      <span data-ocid="booking.loading_state">
                        Submitting...
                      </span>
                    </>
                  ) : (
                    "Submit Request"
                  )}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  data-ocid="booking.close_button"
                  onClick={handleClose}
                  className="font-body"
                >
                  Cancel
                </Button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}

// ── App Root ─────────────────────────────────────────────────────────────────
export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-body">
      <NavBar onBooking={() => setBookingOpen(true)} />
      <main>
        <HeroSection onBooking={() => setBookingOpen(true)} />
        <AboutSection />
        <ServicesSection onBooking={() => setBookingOpen(true)} />
        <ContactSection onBooking={() => setBookingOpen(true)} />
      </main>
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
      <Toaster richColors />
    </div>
  );
}
