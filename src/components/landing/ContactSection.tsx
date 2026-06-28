import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"
import { Button } from "@/components/ui/button"

interface ContactSectionProps {
  isActive: boolean
  onButtonClick?: () => void
}

const contacts = [
  {
    icon: "Phone",
    label: "Телефон",
    value: "+7 938 075-44-24",
    href: "tel:+79380754424",
  },
  {
    icon: "Mail",
    label: "Email",
    value: "narzan2006@yandex.ru",
    href: "mailto:narzan2006@yandex.ru",
  },
  {
    icon: "MessageCircle",
    label: "WhatsApp",
    value: "+7 938 075-44-24",
    href: "https://wa.me/79380754424",
  },
]

export default function ContactSection({ isActive, onButtonClick }: ContactSectionProps) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(135deg, #000000 50%, #FF4D0022 100%)" }} />
      <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: "linear-gradient(to bottom, transparent, #FF4D00, transparent)" }} />

      <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-4xl">
        <motion.p
          className="text-sm font-semibold uppercase tracking-widest mb-4"
          style={{ color: "#FF4D00" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Связаться с нами
        </motion.p>

        <motion.h2
          className="text-4xl md:text-5xl lg:text-[5rem] font-bold leading-[1.1] tracking-tight text-white mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span style={{ color: "#FF4D00" }}>Готовы</span> обсудить вашу рекламу?
        </motion.h2>

        <motion.p
          className="text-lg text-neutral-300 max-w-xl mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Напишите или позвоните — разберём вашу нишу и скажем, сколько заявок можно получать.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {contacts.map((c) => (
            <a
              key={c.href}
              href={c.href}
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 hover:border-[#FF4D00]/50 hover:bg-white/8 transition-all group"
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#FF4D0022" }}>
                <Icon name={c.icon} size={20} style={{ color: "#FF4D00" }} />
              </div>
              <div>
                <div className="text-xs text-neutral-500 mb-0.5">{c.label}</div>
                <div className="text-white font-medium group-hover:text-[#FF4D00] transition-colors">{c.value}</div>
              </div>
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <Button
            size="lg"
            className="text-white border-0 font-semibold px-8 py-6 text-base"
            style={{ background: "linear-gradient(135deg, #FF4D00, #ff7a00)" }}
            onClick={onButtonClick}
          >
            Оставить заявку
          </Button>
        </motion.div>
      </div>
    </section>
  )
}