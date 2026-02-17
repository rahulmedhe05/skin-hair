import { Crown, Users, Award, Heart, Clock, Shield, Stethoscope, CheckCircle, Sparkles, Zap } from "lucide-react"

const features = [
  {
    icon: Stethoscope,
    title: "Expert Dermatologists",
    description: "Board-certified dermatologists and trichologists with years of specialized experience",
  },
  {
    icon: Zap,
    title: "US FDA Approved Equipment",
    description: "Latest US FDA approved laser machines and treatment equipment for safe, effective results",
  },
  {
    icon: Users,
    title: "10,000+ Happy Patients",
    description: "Trusted by thousands of patients across Vadodara for their skin and hair care needs",
  },
  {
    icon: Sparkles,
    title: "Advanced Treatments",
    description: "PRP, GFC, HydraFacial, Chemical Peels, Laser and more under one roof",
  },
  {
    icon: CheckCircle,
    title: "Personalized Care",
    description: "Customized treatment plans tailored to your unique skin and hair concerns",
  },
  {
    icon: Shield,
    title: "Safe & Transparent",
    description: "No hidden costs, transparent pricing, and complete safety protocols for every procedure",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-accent font-mono uppercase tracking-wider mb-4">About Our Clinic</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Vadodara's Premier Skin & Hair Care Destination
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-mono mb-6">
            {
              "Welcome to Prime One Hair & Skin Clinic, Vadodara's most trusted destination for advanced dermatology and trichology solutions. Our team of expert dermatologists and trichologists are dedicated to providing personalized care using the latest medical technologies and treatments."
            }
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed font-mono">
            {
              "From common skin conditions to advanced cosmetic treatments, from hair fall solutions to complete hair transplantation – we offer comprehensive care under one roof with a focus on safety, efficacy, and patient satisfaction."
            }
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-background rounded-lg p-8 border border-border hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
              <Crown className="w-8 h-8 text-primary" />
              Our Vision
            </h3>
            <p className="text-muted-foreground font-mono leading-relaxed">
              To be the most trusted and advanced skin & hair clinic in Vadodara, delivering world-class dermatological treatments that transform lives and boost confidence.
            </p>
          </div>
          <div className="bg-background rounded-lg p-8 border border-border hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
              <Heart className="w-8 h-8 text-primary" />
              Our Mission
            </h3>
            <p className="text-muted-foreground font-mono leading-relaxed">
              To provide safe, effective, and affordable skin and hair care solutions using the latest medical advancements, ensuring every patient receives personalized treatment and achieves visible, lasting results.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-12">
          <p className="text-accent font-mono uppercase tracking-wider mb-4">Why Choose Us</p>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Why Choose Prime One Hair & Skin Clinic?
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-8 text-center hover:shadow-xl transition-shadow border border-border"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground font-mono leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Our Process Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <p className="text-accent font-mono uppercase tracking-wider mb-4">Our Process</p>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              Your Treatment Journey
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative bg-background rounded-lg p-6 border border-border hover:shadow-xl transition-shadow text-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
              <h4 className="text-lg font-bold text-foreground mt-4 mb-3">Book Consultation</h4>
              <p className="text-muted-foreground font-mono text-sm">Schedule your appointment with our expert dermatologist or trichologist for a thorough consultation.</p>
            </div>
            <div className="relative bg-background rounded-lg p-6 border border-border hover:shadow-xl transition-shadow text-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</div>
              <h4 className="text-lg font-bold text-foreground mt-4 mb-3">Diagnosis & Analysis</h4>
              <p className="text-muted-foreground font-mono text-sm">Advanced skin/hair analysis using the latest diagnostic tools to identify your exact condition.</p>
            </div>
            <div className="relative bg-background rounded-lg p-6 border border-border hover:shadow-xl transition-shadow text-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</div>
              <h4 className="text-lg font-bold text-foreground mt-4 mb-3">Personalized Treatment</h4>
              <p className="text-muted-foreground font-mono text-sm">Customized treatment plan designed specifically for your skin/hair type and condition.</p>
            </div>
            <div className="relative bg-background rounded-lg p-6 border border-border hover:shadow-xl transition-shadow text-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">4</div>
              <h4 className="text-lg font-bold text-foreground mt-4 mb-3">Visible Results</h4>
              <p className="text-muted-foreground font-mono text-sm">Experience visible transformation with regular follow-ups and ongoing care for lasting results.</p>
            </div>
          </div>
        </div>

        {/* Additional About Content */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/gallery/dermatology/01.webp"
              alt="Prime One Hair & Skin Clinic"
              className="rounded-lg w-full object-cover aspect-square"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Transform Your Look With Prime One</h3>
            <p className="text-muted-foreground font-mono leading-relaxed text-lg">
              {
                "At Prime One Hair & Skin Clinic, we believe everyone deserves to feel confident in their own skin. Our expert team combines cutting-edge medical technology with personalized care to deliver treatments that truly transform."
              }
            </p>
            <p className="text-muted-foreground font-mono leading-relaxed text-lg">
              {
                "From advanced laser treatments to hair transplant procedures, from HydraFacials to PRP therapy – Prime One delivers premium quality, proven results, and exceptional patient care across Vadodara."
              }
            </p>
            <ul className="space-y-3">
              {[
                "Advanced skin analysis & consultation",
                "Hair transplant (FUE & FUT)",
                "Laser hair removal & skin treatments",
                "PRP & GFC hair growth therapy",
                "Acne, pigmentation & scar treatment",
                "Anti-aging & skin rejuvenation",
                "HydraFacial & chemical peels",
                "Botox & dermal fillers",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground font-mono">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
