import type { ReactNode } from "react"

export interface Section {
  id: string
  title: string
  subtitle?: ReactNode
  content?: string
  showButton?: boolean
  buttonText?: string
  image?: string
  accent?: string
  stats?: { value: string; label: string }[]
}

export interface SectionProps extends Section {
  isActive: boolean
  onButtonClick?: () => void
}