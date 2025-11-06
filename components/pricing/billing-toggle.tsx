"use client"

interface BillingToggleProps {
  billingCycle: "monthly" | "annual"
  setBillingCycle: (cycle: "monthly" | "annual") => void
}

export default function BillingToggle({ billingCycle, setBillingCycle }: BillingToggleProps) {
  return (
    <div className="flex items-center justify-center gap-4">
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
  )
}
