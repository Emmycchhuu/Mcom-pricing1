'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

interface GaugeProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  value: number // 0-100
  size?: number
}

export function Gauge({ label, value, size = 120, className, ...rest }: GaugeProps) {
  const radius = (size - 16) / 2
  const circumference = 2 * Math.PI * radius
  const clamped = Math.max(0, Math.min(100, value))
  const progress = circumference * (1 - clamped / 100)

  return (
    <div className={cn('inline-flex flex-col items-center', className)} {...rest}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="drop-shadow-sm">
        <defs>
          <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--color-primary)" />
            <stop offset="100%" stopColor="color-mix(in oklch, var(--color-primary) 70%, black)" />
          </linearGradient>
        </defs>
        <g transform={`translate(${size / 2}, ${size / 2})`}>
          <circle
            r={radius}
            fill="none"
            stroke="color-mix(in oklch, var(--color-primary) 10%, transparent)"
            strokeWidth={12}
          />
          <circle
            r={radius}
            fill="none"
            stroke="url(#gaugeGradient)"
            strokeWidth={12}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={progress}
            transform="rotate(-90)"
            style={{ transition: 'stroke-dashoffset 800ms ease' }}
          />
          <text
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={18}
            className="fill-foreground font-semibold"
          >
            {Math.round(clamped)}%
          </text>
        </g>
      </svg>
      <div className="mt-2 text-sm text-foreground/70">{label}</div>
    </div>
  )
}


