import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Icon from "@/components/ui/icon"

interface LeadFormProps {
  open: boolean
  onClose: () => void
}

export default function LeadForm({ open, onClose }: LeadFormProps) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => {
      setSent(false)
      setName("")
      setPhone("")
    }, 300)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={handleClose} />
          <motion.div
            className="relative bg-neutral-900 border border-neutral-700 rounded-2xl p-8 w-full max-w-md"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors"
            >
              <Icon name="X" size={20} />
            </button>

            {!sent ? (
              <>
                <h3 className="text-2xl font-bold text-white mb-2">Бесплатный аудит</h3>
                <p className="text-neutral-400 mb-6">Оставьте контакты — свяжемся и расскажем, сколько заявок вы можете получать из Яндекс.Директа.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-neutral-300 mb-1 block">Ваше имя</Label>
                    <Input
                      id="name"
                      placeholder="Иван"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      required
                      className="bg-neutral-800 border-neutral-600 text-white placeholder:text-neutral-500 focus:border-[#FF4D00]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-neutral-300 mb-1 block">Телефон</Label>
                    <Input
                      id="phone"
                      placeholder="+7 (___) ___-__-__"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      required
                      type="tel"
                      className="bg-neutral-800 border-neutral-600 text-white placeholder:text-neutral-500 focus:border-[#FF4D00]"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full mt-2 bg-[#FF4D00] hover:bg-[#e64400] text-white border-0"
                    size="lg"
                  >
                    Получить аудит бесплатно
                  </Button>
                </form>
              </>
            ) : (
              <motion.div
                className="text-center py-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="w-16 h-16 rounded-full bg-[#FF4D00]/20 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Check" size={32} className="text-[#FF4D00]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Заявка принята!</h3>
                <p className="text-neutral-400">Свяжемся с вами в ближайшее время.</p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
