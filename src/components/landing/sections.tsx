import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white/50 bg-white/10 backdrop-blur-sm">Реклама в Яндекс.Директ</Badge>,
    title: "Клиенты из Яндекса — уже завтра.",
    content: 'Настраиваем контекстную рекламу, которая приносит заявки, а не сливает бюджет.',
    showButton: true,
    buttonText: 'Получить заявки',
    image: 'https://cdn.poehali.dev/projects/3ee7dd44-2af7-4386-85d7-f18328f27510/files/cdcb5688-de67-475f-a71a-d04084e39052.jpg',
    accent: '#FF4D00',
    stats: [
      { value: '×3', label: 'больше заявок' },
      { value: '-60%', label: 'цена лида' },
      { value: '7 дней', label: 'до запуска' },
    ]
  },
  {
    id: 'about',
    title: 'Почему мы?',
    content: 'Настраиваем и ведём рекламу в Яндекс.Директ так, чтобы каждый рубль приносил заявки, а не сливался в пустоту.',
    showButton: true,
    buttonText: 'Оставить заявку',
    image: 'https://cdn.poehali.dev/projects/3ee7dd44-2af7-4386-85d7-f18328f27510/files/7d2e3016-4528-4a42-b434-ea53c6c05433.jpg',
    accent: '#FF6B35',
    bullets: [
      'Применяем комплексный подход для достижения целей клиента',
      'Привлекаем новых клиентов и увеличиваем продажи',
      'Повышаем узнаваемость бренда',
      'Используем ИИ технологии',
    ],
    stats: [
      { value: '5 лет', label: 'на рынке' },
    ]
  },
  {
    id: 'features',
    title: 'Что мы делаем',
    content: 'Аудит, сбор семантики, настройку кампаний, A/B-тесты объявлений и ежедневную оптимизацию ставок ради низкой цены заявки.',
    showButton: true,
    buttonText: 'Оставить заявку',
    image: 'https://cdn.poehali.dev/projects/3ee7dd44-2af7-4386-85d7-f18328f27510/files/ebee9f51-85ff-4121-a92a-73f65bbbd9b9.jpg',
    accent: '#FF4D00',
    stats: [
      { value: 'Аудит', label: 'бесплатно' },
      { value: 'A/B', label: 'тесты объявлений' },
      { value: '24/7', label: 'мониторинг' },
    ]
  },
  {
    id: 'testimonials',
    title: 'Результаты клиентов',
    content: 'Снижаем стоимость заявки в 2–3 раза и масштабируем поток обращений — от первых лидов до стабильного потока продаж.',
    showButton: true,
    buttonText: 'Оставить заявку',
    image: 'https://cdn.poehali.dev/projects/3ee7dd44-2af7-4386-85d7-f18328f27510/files/687baf27-562c-4b8e-8a8d-22a6c2583905.jpg',
    accent: '#FF6B35',
    stats: [
      { value: '×2.5', label: 'рост заявок' },
      { value: '-55%', label: 'стоимость лида' },
      { value: '+180%', label: 'ROI рекламы' },
    ]
  },
  {
    id: 'join',
    title: 'Запустим рекламу',
    content: 'Оставьте заявку — проведём бесплатный аудит вашей ниши и составим прогноз заявок и бюджета на Яндекс.Директ.',
    showButton: true,
    buttonText: 'Заказать аудит',
    image: 'https://cdn.poehali.dev/projects/3ee7dd44-2af7-4386-85d7-f18328f27510/files/588a27b2-bade-40cc-b8f6-4904d4ecedfc.jpg',
    accent: '#FF4D00',
    stats: [
      { value: '0 ₽', label: 'стоимость аудита' },
      { value: '1 день', label: 'готовность прогноза' },
      { value: 'Без', label: 'обязательств' },
    ]
  },
]