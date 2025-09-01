import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function AstrologyIndex() {
  return (
    <div className="min-h-screen bg-mystic text-gold">
      {/* Header */}
      <header className="p-6 text-center">
        <h1 className="text-xs uppercase tracking-widest text-gold-light mb-4">
          ДИЗАЙН САЙТА ДЛЯ ЗАПУСКА МИНИ-КУРСА
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
          ГАДАЛИК
        </h2>
        <h3 className="text-2xl md:text-3xl font-light text-gold-light">
          ДЛЯ АСТРОЛОГА
        </h3>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Course Info */}
          <div className="lg:col-span-1">
            <Card className="bg-cosmic border-gold/20 mb-6">
              <CardHeader>
                <CardTitle className="text-gold flex items-center gap-2">
                  <Icon name="Star" size={20} />
                  ТАРО РАСКЛАД
                </CardTitle>
                <CardDescription className="text-gold-light/80">
                  Раскрываю сердца через практику
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-emerald mt-0.5" />
                    <span>Определяем вашего астрологического партнёра</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-emerald mt-0.5" />
                    <span>В готовом бланке таро-карт определим совместимость</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-emerald mt-0.5" />
                    <span>Построим астрологическую карту для пары</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-emerald mt-0.5" />
                    <span>Акт построения планетарного сеанса</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-emerald mt-0.5" />
                    <span>Астрология ниже уровня планеты</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-emerald mt-0.5" />
                    <span>Медитативная работа с астрологической картой</span>
                  </div>
                </div>
                <div className="bg-gold/10 p-4 rounded-lg">
                  <p className="text-gold font-semibold text-2xl">25 000 руб</p>
                </div>
                <Button className="w-full bg-gold text-mystic hover:bg-gold-light">
                  ПРИОБРЕСТИ ТАРИФ
                </Button>
              </CardContent>
            </Card>

            <div className="text-center">
              <h3 className="text-gold text-lg font-semibold mb-2">ОТЗЫВ</h3>
              <h4 className="text-gold-light mb-4">ЕЛЕНЫ</h4>
              <Button variant="outline" className="border-gold text-gold hover:bg-gold/10">
                ЗАДАТЬ ВОПРОС
              </Button>
            </div>
          </div>

          {/* Center Column - Main Image */}
          <div className="lg:col-span-1 flex items-center justify-center relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gold/20 via-emerald/20 to-gold/20 rounded-full blur-3xl"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-gold/30">
                <img 
                  src="https://cdn.poehali.dev/files/7002d63e-20ce-4de6-ad3a-4083cb1ac368.jpg" 
                  alt="Юлия Мелес - Астролог"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Zodiac Circle Overlay */}
              <div className="absolute inset-0 border-2 border-gold/40 rounded-full animate-spin" style={{ animationDuration: '60s' }}>
                <div className="relative w-full h-full">
                  {/* Zodiac symbols would go here */}
                </div>
              </div>
            </div>
            <div className="absolute top-4 left-4 bg-cosmic/90 px-4 py-2 rounded-full">
              <span className="text-gold text-sm font-semibold">ЮЛИЯ МЕЛЕС</span>
            </div>
          </div>

          {/* Right Column - Course Details */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <h3 className="text-gold text-2xl font-bold mb-4">МИНИ-КУРС</h3>
              <h4 className="text-3xl font-bold text-emerald mb-6">
                НАЙДИ СВОЕ<br />
                ПРЕДНАЗНАЧЕНИЕ
              </h4>
              
              <div className="flex items-center gap-4 mb-6">
                <Button variant="outline" className="border-gold text-gold bg-gold/10">
                  52 ДНЕЙ
                </Button>
                <Button variant="outline" className="border-emerald text-emerald bg-emerald/10">
                  30 НОЯБРЯ
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
                    <Icon name="Sparkles" size={20} />
                    ОСНОВЫ АСТРОЛОГИИ
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Основные принципы и философия астрологии</li>
                    <li>• Устройство натальной карты и её основные элементы</li>
                    <li>• Значение планет, знаков зодиака и домов</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-cosmic/50 border-gold/20">
                <CardHeader>
                  <CardTitle className="text-emerald flex items-center gap-2">
                    <Icon name="Target" size={20} />
                    ПРЕДНАЗНАЧЕНИЕ И ЖИЗНЕННЫЙ ПУТЬ
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Все Стихии: Солнце, Луна, Асцендент</li>
                    <li>• Дома гороскопа и их значение</li>
                    <li>• Анализ сильных планет в гороскопе</li>
                    <li>• Предназначение</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-cosmic/50 border-gold/20">
                <CardHeader>
                  <CardTitle className="text-emerald flex items-center gap-2">
                    <Icon name="Heart" size={20} />
                    ТАЛАНТЫ СПОСОБНОСТИ И ПРИЗВАНИЕ
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Планеты-управители и их роль</li>
                    <li>• Карта профессий в своей реализации</li>
                    <li>• Развитие профессиональных талантов и способностей</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-cosmic/50 border-gold/20">
                <CardHeader>
                  <CardTitle className="text-emerald flex items-center gap-2">
                    <Icon name="Zap" size={20} />
                    АСТРОЛОГИЯ ВЛИЯНИЕ И РОСТ
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Транзиты и их влияние на жизненные события</li>
                    <li>• Ретроградное движение планет для трансформации</li>
                    <li>• Технки работы с ментальной картой для трансформации</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center space-y-4">
          <p className="text-gold-light">
            Для заказа сайта напишите мне<br />
            в личные сообщения
          </p>
          <div className="flex justify-center gap-6">
            <Button variant="ghost" className="text-gold hover:text-gold-light">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              @Knyazeva_alen
            </Button>
            <Button variant="ghost" className="text-gold hover:text-gold-light">
              <Icon name="Instagram" size={20} className="mr-2" />
              @alen.knyazeva
            </Button>
          </div>
        </footer>
      </div>
    </div>
  );
}