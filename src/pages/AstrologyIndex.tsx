import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function AstrologyIndex() {
  return (
    <div className="min-h-screen bg-mystic text-gold">
      {/* Header */}
      <header className="p-6 text-center">
        <h1 className="text-xs uppercase tracking-widest text-gold-light mb-4">
          ОНЛАЙН ШКОЛА СОЦИАЛЬНЫХ МЕДИА
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
          SMM ШКОЛА
        </h2>
        <h3 className="text-2xl md:text-3xl font-light text-gold-light">
          ПРОФЕССИЯ С НУЛЯ
        </h3>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Course Info */}
          <div className="lg:col-span-1">
            <Card className="bg-cosmic border-gold/20 mb-6">
              <CardHeader>
                <CardTitle className="text-gold flex items-center gap-2">
                  <Icon name="Smartphone" size={20} />
                  SMM СПЕЦИАЛИСТ
                </CardTitle>
                <CardDescription className="text-gold-light/80">
                  Освой профессию с нуля до результата
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-emerald mt-0.5" />
                    <span>Изучим основы контент-маркетинга</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-emerald mt-0.5" />
                    <span>Настроим рекламу во всех соцсетях</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-emerald mt-0.5" />
                    <span>Научимся анализировать статистику</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-emerald mt-0.5" />
                    <span>Создадим стратегию продвижения бренда</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-emerald mt-0.5" />
                    <span>Освоим визуальный контент и дизайн</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-emerald mt-0.5" />
                    <span>Получим портфолио реальных проектов</span>
                  </div>
                </div>
                <div className="bg-gold/10 p-4 rounded-lg">
                  <p className="text-gold font-semibold text-2xl">25 000 руб</p>
                </div>
                <Button className="w-full bg-gold text-mystic hover:bg-gold-light">
                  КУПИТЬ КУРС
                </Button>
              </CardContent>
            </Card>

            <div className="text-center mb-8">
              <h3 className="text-gold text-lg font-semibold mb-2">ОТЗЫВ</h3>
              <h4 className="text-gold-light mb-4">СТУДЕНТКИ</h4>
              <Button variant="outline" className="border-gold text-gold hover:bg-gold/10">
                ЗАДАТЬ ВОПРОС
              </Button>
            </div>

            {/* Additional Photos Section */}
            <div className="space-y-6">
              <div className="relative">
                <div className="w-full h-64 rounded-lg overflow-hidden border-2 border-gold/30 relative">
                  <img 
                    src="https://cdn.poehali.dev/files/5591a788-2f17-4a9d-830e-d5a88c1e806b.jpg" 
                    alt="SMM обучение"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mystic/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center gap-2 text-gold">
                      <Icon name="Users" size={20} />
                      <span className="font-semibold">НАСТАВНИК</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="w-full h-64 rounded-lg overflow-hidden border-2 border-emerald/30 relative">
                  <img 
                    src="https://cdn.poehali.dev/files/c791d3c0-0cbb-4531-be83-2406aa7a8a2d.jpg" 
                    alt="SMM стратегия"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cosmic/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center gap-2 text-emerald">
                      <Icon name="Lightbulb" size={20} />
                      <span className="font-semibold">СТРАТЕГИЯ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column - Neural Clock */}
          <div className="lg:col-span-1 flex items-center justify-center relative">
            <div className="relative w-96 h-96">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-gold/20 via-emerald/20 to-gold/20 rounded-full blur-3xl"></div>
              
              {/* Clock face */}
              <div className="relative w-full h-full">
                {/* 12 Learning blocks as clock numbers */}
                <div className="absolute inset-0">
                  {/* 12 o'clock - Content Strategy */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cosmic/80 p-3 rounded-full border-2 border-gold/40">
                      <Icon name="Target" size={20} className="text-gold" />
                    </div>
                  </div>
                  
                  {/* 1 o'clock - Analytics */}
                  <div className="absolute top-8 right-20 transform translate-x-2">
                    <div className="bg-cosmic/80 p-3 rounded-full border-2 border-emerald/40">
                      <Icon name="BarChart3" size={20} className="text-emerald" />
                    </div>
                  </div>
                  
                  {/* 2 o'clock - Design */}
                  <div className="absolute top-20 right-8">
                    <div className="bg-cosmic/80 p-3 rounded-full border-2 border-gold/40">
                      <Icon name="Palette" size={20} className="text-gold" />
                    </div>
                  </div>
                  
                  {/* 3 o'clock - Instagram */}
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                    <div className="bg-cosmic/80 p-3 rounded-full border-2 border-emerald/40">
                      <Icon name="Instagram" size={20} className="text-emerald" />
                    </div>
                  </div>
                  
                  {/* 4 o'clock - Video */}
                  <div className="absolute bottom-20 right-8">
                    <div className="bg-cosmic/80 p-3 rounded-full border-2 border-gold/40">
                      <Icon name="Video" size={20} className="text-gold" />
                    </div>
                  </div>
                  
                  {/* 5 o'clock - Trends */}
                  <div className="absolute bottom-8 right-20">
                    <div className="bg-cosmic/80 p-3 rounded-full border-2 border-emerald/40">
                      <Icon name="TrendingUp" size={20} className="text-emerald" />
                    </div>
                  </div>
                  
                  {/* 6 o'clock - Community */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cosmic/80 p-3 rounded-full border-2 border-gold/40">
                      <Icon name="Users" size={20} className="text-gold" />
                    </div>
                  </div>
                  
                  {/* 7 o'clock - Advertising */}
                  <div className="absolute bottom-8 left-20 transform -translate-x-2">
                    <div className="bg-cosmic/80 p-3 rounded-full border-2 border-emerald/40">
                      <Icon name="Megaphone" size={20} className="text-emerald" />
                    </div>
                  </div>
                  
                  {/* 8 o'clock - Email */}
                  <div className="absolute bottom-20 left-8">
                    <div className="bg-cosmic/80 p-3 rounded-full border-2 border-gold/40">
                      <Icon name="Mail" size={20} className="text-gold" />
                    </div>
                  </div>
                  
                  {/* 9 o'clock - Facebook */}
                  <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
                    <div className="bg-cosmic/80 p-3 rounded-full border-2 border-emerald/40">
                      <Icon name="Facebook" size={20} className="text-emerald" />
                    </div>
                  </div>
                  
                  {/* 10 o'clock - Content */}
                  <div className="absolute top-20 left-8">
                    <div className="bg-cosmic/80 p-3 rounded-full border-2 border-gold/40">
                      <Icon name="PenTool" size={20} className="text-gold" />
                    </div>
                  </div>
                  
                  {/* 11 o'clock - SEO */}
                  <div className="absolute top-8 left-20 transform -translate-x-2">
                    <div className="bg-cosmic/80 p-3 rounded-full border-2 border-emerald/40">
                      <Icon name="Search" size={20} className="text-emerald" />
                    </div>
                  </div>
                </div>
                
                {/* Clock border */}
                <div className="absolute inset-4 border-2 border-gold/30 rounded-full animate-pulse"></div>
                
                {/* Center photo without background */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-emerald/20 rounded-full blur-xl"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gold/50 bg-gradient-to-br from-mystic to-cosmic">
                      <img 
                        src="https://cdn.poehali.dev/files/c791d3c0-0cbb-4531-be83-2406aa7a8a2d.jpg" 
                        alt="SMM Эксперт"
                        className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                        style={{
                          filter: 'contrast(1.2) brightness(1.1) saturate(0.8)'
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gold/10 to-emerald/20"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-4 left-4 bg-cosmic/90 px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="text-gold text-sm font-semibold">12 МОДУЛЕЙ ОБУЧЕНИЯ</span>
            </div>
          </div>

          {/* Right Column - Course Details */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <h3 className="text-gold text-2xl font-bold mb-4">МИНИ-КУРС</h3>
              <h4 className="text-3xl font-bold text-emerald mb-6">
                ЗАРАБОТАЙ НА SMM<br />
                УЖЕ В ПЕРВЫЙ МЕСЯЦ
              </h4>
              
              <div className="flex items-center gap-4 mb-6">
                <Button variant="outline" className="border-gold text-gold bg-gold/10">
                  30 ДНЕЙ
                </Button>
                <Button variant="outline" className="border-emerald text-emerald bg-emerald/10">
                  СТАРТ СЕЙЧАС
                </Button>
              </div>

              <div className="bg-emerald/20 rounded-full p-6 mb-6 text-center">
                <p className="text-gold font-bold text-lg mb-2">ХОЧУ НА КУРС</p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-gold text-xl font-semibold">ЧТО БУДЕТ НА КУРСЕ?</h3>
              
              <Card className="bg-cosmic/50 border-gold/20">
                <CardHeader>
                  <CardTitle className="text-emerald flex items-center gap-2">
                    <Icon name="Target" size={20} />
                    ОСНОВЫ SMM
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Анализ целевой аудитории и конкурентов</li>
                    <li>• Создание контент-плана на месяц</li>
                    <li>• Основы визуального оформления профилей</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-cosmic/50 border-gold/20">
                <CardHeader>
                  <CardTitle className="text-emerald flex items-center gap-2">
                    <Icon name="PenTool" size={20} />
                    СОЗДАНИЕ КОНТЕНТА
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Написание продающих постов и Stories</li>
                    <li>• Работа с фото и видео контентом</li>
                    <li>• Инструменты для дизайна и обработки</li>
                    <li>• Планирование публикаций</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-cosmic/50 border-gold/20">
                <CardHeader>
                  <CardTitle className="text-emerald flex items-center gap-2">
                    <Icon name="TrendingUp" size={20} />
                    ПРОДВИЖЕНИЕ И РЕКЛАМА
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Настройка рекламы в Instagram и VK</li>
                    <li>• Работа с блогерами и коллаборации</li>
                    <li>• Органическое продвижение хэштегами</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-cosmic/50 border-gold/20">
                <CardHeader>
                  <CardTitle className="text-emerald flex items-center gap-2">
                    <Icon name="BarChart3" size={20} />
                    АНАЛИТИКА И МОНЕТИЗАЦИЯ
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Анализ эффективности и статистики</li>
                    <li>• Способы заработка: услуги, продукты, партнёрство</li>
                    <li>• Поиск клиентов и ценообразование</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center space-y-4">
          <p className="text-gold-light">
            Остались вопросы?<br />
            Напишите в личные сообщения
          </p>
          <div className="flex justify-center gap-6">
            <Button variant="ghost" className="text-gold hover:text-gold-light">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Telegram
            </Button>
            <Button variant="ghost" className="text-gold hover:text-gold-light">
              <Icon name="Instagram" size={20} className="mr-2" />
              Instagram
            </Button>
          </div>
        </footer>
      </div>
    </div>
  );
}