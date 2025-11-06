import { Reveal } from "@/components/ui/reveal"

export default function Header() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-b from-background to-background/40 p-8 sm:p-12">
      <div className="pointer-events-none absolute inset-0 animated-gradient opacity-60" />
      <div className="relative text-center">
        <Reveal animationClass="text-reveal" delayMs={60}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance bg-gradient-to-b from-primary to-primary/70 bg-clip-text text-transparent">
            Choose your membership — grow your business and reward your customers.
          </h1>
        </Reveal>
        <Reveal animationClass="text-reveal" delayMs={140}>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto text-balance">
            Bronze, Silver, Gold, Platinum — pick the one that fits your business or your life.
          </p>
        </Reveal>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/checkout?plan=Trial&billing=monthly" className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg glow">
            Start Free Trial
          </a>
          <a href="#plans" className="px-6 py-3 rounded-full border border-primary text-primary font-semibold transition-all hover:bg-primary/10">
            View Plans
          </a>
        </div>
      </div>
    </div>
  )
}
