import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { SectionProps } from "@/types"

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText, onButtonClick, image, accent, stats }: SectionProps) {
  const accentColor = accent || '#FF4D00'

  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center overflow-hidden">
      {image && (
        <div className="absolute inset-0 z-0">
          <img src={image} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, rgba(0,0,0,0.95) 40%, ${accentColor}22 100%)` }} />
        </div>
      )}

      {!image && (
        <div className="absolute inset-0 z-0" style={{ background: `linear-gradient(135deg, #000000 60%, ${accentColor}18 100%)` }} />
      )}

      <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: `linear-gradient(to bottom, transparent, ${accentColor}, transparent)` }} />

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 px-8 md:px-16 lg:px-24 w-full max-w-7xl mx-auto">
        <div className="flex-1 min-w-0">
          {subtitle && (
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              {subtitle}
            </motion.div>
          )}

          <motion.h2
            className="text-4xl md:text-5xl lg:text-[4.5rem] xl:text-[5.5rem] font-bold leading-[1.1] tracking-tight text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {title.split(' ').map((word, i) => (
              <span key={i}>
                {i === 0 ? <span style={{ color: accentColor }}>{word}</span> : ` ${word}`}
              </span>
            ))}
          </motion.h2>

          {content && (
            <motion.p
              className="text-lg md:text-xl max-w-xl mt-5 text-neutral-300 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {content}
            </motion.p>
          )}

          {stats && (
            <motion.div
              className="flex flex-wrap gap-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-bold" style={{ color: accentColor }}>{stat.value}</span>
                  <span className="text-sm text-neutral-400 mt-0.5">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          )}

          {showButton && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10"
            >
              <Button
                size="lg"
                className="text-white border-0 font-semibold px-8 py-6 text-base"
                style={{ background: `linear-gradient(135deg, ${accentColor}, #ff7a00)` }}
                onClick={onButtonClick}
              >
                {buttonText}
              </Button>
            </motion.div>
          )}
        </div>

        {image && (
          <motion.div
            className="hidden lg:block flex-shrink-0 w-[420px] h-[320px] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: 60 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ boxShadow: `0 0 60px ${accentColor}44` }}
          >
            <img src={image} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 rounded-2xl" style={{ border: `1px solid ${accentColor}44` }} />
          </motion.div>
        )}
      </div>
    </section>
  )
}
