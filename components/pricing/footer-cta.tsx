"use client"

import { useState } from "react"
import Link from "next/link"
import { Reveal } from "@/components/ui/reveal"

export default function FooterCTA() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly")

  return (
    <section className="bg-gradient-to-b from-background to-background/50 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal animationClass="text-reveal" delayMs={60}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">Ready to get started?</h2>
        </Reveal>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link
            href={`/checkout?plan=Trial&billing=${billingCycle}`}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out bg-primary text-primary-foreground hover:shadow-lg hover:-translate-y-1`}
          >
            Start Free Trial
          </Link>
          <Link
            href={`/learn-more`}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out border border-primary text-primary hover:bg-primary/10`}
          >
            Learn More
          </Link>
        </div>
        <div className="flex items-center justify-center gap-4 mb-12">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out ${
              billingCycle === "monthly"
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-muted text-foreground hover:bg-muted/80"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("annual")}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out ${
              billingCycle === "annual"
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-muted text-foreground hover:bg-muted/80"
            }`}
          >
            Annual
          </button>
        </div>
        <div className="space-y-4 mb-12">
          <p className="text-foreground/70">
            All plans include Done-For-You Services, Marketing Assets and Automation Support.
          </p>
          <p className="text-sm text-foreground/60">
            Have a promo code? Enter it at checkout or click through from a special offer page to apply a discount.
          </p>
        </div>
        <Reveal animationClass="card-reveal" delayMs={80}>
          <Link href={`/checkout?plan=Bronze&billing=${billingCycle}`} className="px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-bold transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 shadow-lg">
            Start Your Membership Now
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
