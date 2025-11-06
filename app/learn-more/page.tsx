"use client"

import Link from "next/link"
import FAQ from "@/components/pricing/faq"
import { Reveal } from "@/components/ui/reveal"
import { Gauge } from "@/components/ui/gauge"
import { Award, Medal, Trophy, Crown } from "lucide-react"
import { getTiers, getPrice } from "@/lib/content"

export default function LearnMorePage() {
  return (
    <main className="min-h-screen">
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-b from-background to-background/40 p-8 sm:p-12">
          <div className="pointer-events-none absolute inset-0 animated-gradient opacity-60" />
          <div className="relative text-center">
            <Reveal animationClass="text-reveal" delayMs={60}>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-b from-primary to-primary/70 bg-clip-text text-transparent">
                Learn more about MCOM Loyalty
              </h1>
            </Reveal>
            <Reveal animationClass="text-reveal" delayMs={140}>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Memberships designed to help you grow—tools, assets and support to make marketing easy.
              </p>
            </Reveal>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Link href="/#plans" className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg">
                View Plans
              </Link>
              <Link href="/checkout?plan=Trial&billing=monthly" className="px-6 py-3 rounded-full border border-primary text-primary font-semibold transition-all hover:bg-primary/10">
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-16">
        <Reveal animationClass="text-reveal" delayMs={60}>
          <h2 className="text-3xl font-bold mb-6">What you get</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Reveal animationClass="card-reveal" delayMs={0}>
            <div className="rounded-2xl border-2 border-border bg-card p-6 hover:-translate-y-1 hover:shadow-lg transition-all">
              <h3 className="font-semibold text-lg mb-2">Done-For-You Setup</h3>
              <p className="text-foreground/70">We configure your account and assets so you can launch fast.</p>
            </div>
          </Reveal>
          <Reveal animationClass="card-reveal" delayMs={120}>
            <div className="rounded-2xl border-2 border-border bg-card p-6 hover:-translate-y-1 hover:shadow-lg transition-all">
              <h3 className="font-semibold text-lg mb-2">Marketing Assets</h3>
              <p className="text-foreground/70">Pre-made graphics, QR codes and scripts for posts and short videos.</p>
            </div>
          </Reveal>
          <Reveal animationClass="card-reveal" delayMs={240}>
            <div className="rounded-2xl border-2 border-border bg-card p-6 hover:-translate-y-1 hover:shadow-lg transition-all">
              <h3 className="font-semibold text-lg mb-2">Automation Support</h3>
              <p className="text-foreground/70">Guidance and tools to automate repeatable workflows.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-16">
        <Reveal animationClass="text-reveal" delayMs={60}>
          <h2 className="text-3xl font-bold mb-6">Badges and what they mean</h2>
        </Reveal>
        <div className="space-y-4">
          {[{ icon: Award, name: 'Bronze', desc: 'Entry-level tools to get you visible and selling.' },
            { icon: Medal, name: 'Silver', desc: 'More reach and priority support as you grow.' },
            { icon: Trophy, name: 'Gold', desc: 'Premium assets plus NFC business card included.' },
            { icon: Crown, name: 'Platinum', desc: 'Full service, dedicated manager and maximum visibility.' }].map((b, idx) => {
              const Icon = b.icon
              return (
                <Reveal key={b.name} animationClass="card-reveal" delayMs={idx * 100}>
                  <div className="flex items-start gap-4 rounded-2xl border-2 border-border bg-card p-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">{b.name}</div>
                      <p className="text-sm text-foreground/70">{b.desc}</p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
        </div>
        <p className="text-sm text-foreground/60 mt-4">Physical NFC card included for annual members.</p>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-16">
        <Reveal animationClass="text-reveal" delayMs={60}>
          <h2 className="text-3xl font-bold mb-6">Impact gauges</h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <Reveal animationClass="card-reveal" delayMs={0}><Gauge label="Visibility" value={86} /></Reveal>
          <Reveal animationClass="card-reveal" delayMs={120}><Gauge label="Rewards engagement" value={74} /></Reveal>
          <Reveal animationClass="card-reveal" delayMs={240}><Gauge label="Automation" value={68} /></Reveal>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-16">
        <Reveal animationClass="text-reveal" delayMs={60}>
          <h2 className="text-3xl font-bold mb-6">Pricing overview</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {getTiers().filter(t => ["Bronze","Silver","Gold","Platinum"].includes(t.name)).map((t, idx) => (
            <Reveal key={t.name} animationClass="card-reveal" delayMs={idx * 100}>
              <div className="rounded-2xl border-2 border-border bg-card p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-foreground/60">Monthly</div>
                </div>
                <div className="text-2xl font-bold">£{t.monthlyPrice}</div>
                <div className="mt-2 text-sm text-foreground/70">Annual: £{getPrice(t, 'annual')}</div>
                <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                  {t.features.slice(0,3).map(f => (<li key={f}>• {f}</li>))}
                </ul>
                <div className="mt-4 flex items-center gap-2">
                  <Link href={`/checkout?plan=${encodeURIComponent(t.name)}&billing=monthly`} className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold">Choose</Link>
                  <Link href={`/#plans`} className="px-4 py-2 rounded-full border border-primary text-primary text-sm font-semibold">Compare</Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="text-sm text-foreground/60 mt-3">Annual price is monthly × 12. Have a promo code? Enter it at checkout or use a special offer link.</p>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-24">
        <FAQ />
      </section>

      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-20 text-center">
        <Reveal animationClass="text-reveal" delayMs={60}>
          <h2 className="text-3xl font-bold mb-4">Ready to join?</h2>
        </Reveal>
        <div className="flex items-center justify-center gap-4">
          <Link href="/#plans" className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg">
            View Plans
          </Link>
          <Link href="/checkout?plan=Bronze&billing=monthly" className="px-6 py-3 rounded-full border border-primary text-primary font-semibold transition-all hover:bg-primary/10">
            Choose Bronze
          </Link>
        </div>
      </section>
    </main>
  )
}


