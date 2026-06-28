import { ReactNode } from 'react'
import { Squares } from "./squares-background"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen overflow-hidden bg-black relative">
      <div className="absolute inset-0 z-10">
        <Squares
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="#1a1a1a"
          hoverFillColor="#FF4D0011"
        />
      </div>
      <div className="relative z-20 h-full">
        <div className="fixed top-0 left-0 z-30 px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #FF4D00, #ff7a00)" }}>
              <span className="text-white font-bold text-sm">D</span>
            </div>
            <span className="text-white font-semibold text-sm tracking-wide">ООО «DANA-GROUP»</span>
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}