import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-ocean-deep">SMM ВОЛНА</div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#courses" className="hover:text-primary transition-colors">Тарифы</a>
            <a href="#teacher" className="hover:text-primary transition-colors">О преподавателе</a>
            <a href="#students" className="hover:text-primary transition-colors">Ученики</a>
            <a href="#support" className="hover:text-primary transition-colors">Служба заботы</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with water effect */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(https://cdn.poehali.dev/files/03c94076-56ba-440f-8c5d-a0b21a3004d0.JPG)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        {/* Main Shell Container */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="relative">
            {/* Large decorative shell with iridescent effect */}
            <div 
              className="w-96 h-96 mx-auto rounded-full relative animate-float"
              style={{
                background: `
                  radial-gradient(ellipse at center, 
                    rgba(255, 215, 0, 0.3) 0%, 
                    rgba(64, 224, 208, 0.2) 40%, 
                    rgba(240, 248, 255, 0.1) 100%
                  ),
                  url(https://cdn.poehali.dev/files/74cc300d-34c5-472c-8140-2a9060b18584.JPG)
                `,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backdropFilter: 'blur(1px)',
                border: '3px solid rgba(255, 215, 0, 0.5)',
                boxShadow: `
                  0 0 30px rgba(64, 224, 208, 0.3),
                  inset 0 0 50px rgba(255, 255, 255, 0.2)
                `
              }}
            >
              {/* Profile photo in center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-shell/50 bg-white/90 relative">
                  <img 
                    src="https://cdn.poehali.dev/files/5591a788-2f17-4a9d-830e-d5a88c1e806b.jpg" 
                    alt="Преподаватель SMM"
                    className="w-full h-full object-cover"
                    style={{
                      filter: `
                        contrast(1.2) 
                        saturate(1.3) 
                        sepia(0.1) 
                        hue-rotate(10deg) 
                        brightness(1.1)
                        drop-shadow(0 0 10px rgba(64, 224, 208, 0.5))
                      `
                    }}
                  />
                  {/* Fantasy magical overlay */}
                  <div 
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `
                        radial-gradient(circle at 30% 30%, rgba(255, 215, 0, 0.15) 0%, transparent 40%),
                        radial-gradient(circle at 70% 70%, rgba(64, 224, 208, 0.1) 0%, transparent 40%),
                        linear-gradient(45deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
                      `,
                      mixBlendMode: 'overlay'
                    }}
                  />
                  {/* Sparkle effects */}
                  <div className="absolute top-2 right-4 w-2 h-2 bg-shell rounded-full animate-pulse opacity-70"></div>
                  <div className="absolute bottom-6 left-3 w-1 h-1 bg-ocean-cyan rounded-full animate-pulse opacity-80" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute top-8 left-6 w-1.5 h-1.5 bg-white rounded-full animate-pulse opacity-60" style={{ animationDelay: '2s' }}></div>
                </div>
              </div>
            </div>

            {/* Floating sea elements */}
            <div className="absolute -top-10 -left-20 animate-wave">
              <div className="w-16 h-16 opacity-70">
                <Icon name="Shell" size={64} className="text-shell" />
              </div>
            </div>
            <div className="absolute top-20 -right-16 animate-wave" style={{ animationDelay: '1s' }}>
              <Icon name="Anchor" size={48} className="text-ocean" />
            </div>
            <div className="absolute -bottom-10 left-16 animate-wave" style={{ animationDelay: '2s' }}>
              <Icon name="Fish" size={40} className="text-ocean-cyan" />
            </div>

            {/* Main text */}
            <div className="mt-8 space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-ocean-deep mb-4">
                SMM ВОЛНА
              </h1>
              <p className="text-2xl md:text-3xl text-ocean font-semibold mb-6">
                Профессия с нуля
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Погрузитесь в мир социальных медиа с нашей онлайн-школой. 
                Изучайте SMM в интерактивном формате с видеоуроками и практическими заданиями.
              </p>
              <Button size="lg" className="text-lg px-8 py-4 animate-shimmer">
                Начать обучение
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute bottom-10 left-10 opacity-30 animate-float">
          <img src="https://cdn.poehali.dev/files/c11e5b98-439e-4156-a21d-786ebcb50df7.JPG" alt="" className="w-24 h-24 rounded-full" />
        </div>
        <div className="absolute top-1/3 right-10 opacity-30 animate-float" style={{ animationDelay: '3s' }}>
          <img src="https://cdn.poehali.dev/files/519dd07f-2ea5-489e-80ab-cea8c1da3b28.JPG" alt="" className="w-32 h-32 rounded-full" />
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-gradient-to-b from-ocean-light to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-ocean-deep">Тарифы обучения</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Базовый",
                price: "15,000₽",
                features: ["20 видеоуроков", "Базовые практические задания", "Доступ на 3 месяца", "Сертификат о прохождении"],
                popular: false
              },
              {
                name: "Продвинутый",
                price: "25,000₽",
                features: ["40 видеоуроков", "Расширенные практические задания", "Доступ на 6 месяцев", "Индивидуальная обратная связь", "Портфолио проектов"],
                popular: true
              },
              {
                name: "Профессиональный",
                price: "45,000₽",
                features: ["60+ видеоуроков", "Реальные проекты", "Доступ на 12 месяцев", "Персональный наставник", "Помощь в трудоустройстве", "Премиум сообщество"],
                popular: false
              }
            ].map((plan, index) => (
              <Card key={index} className={`relative overflow-hidden ${plan.popular ? 'border-shell shadow-xl scale-105' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute top-4 right-4 bg-shell text-shell-foreground">
                    Популярный
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl text-ocean-deep">{plan.name}</CardTitle>
                  <CardDescription className="text-3xl font-bold text-primary">{plan.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Icon name="Check" size={16} className="text-ocean mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Online Learning System */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-ocean-deep">Система онлайн-обучения</h2>
          
          <Tabs defaultValue="videos" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="videos">Видеоуроки</TabsTrigger>
              <TabsTrigger value="assignments">Задания</TabsTrigger>
              <TabsTrigger value="progress">Прогресс</TabsTrigger>
            </TabsList>
            
            <TabsContent value="videos" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Play" size={24} className="mr-2 text-ocean" />
                    Интерактивные видеоуроки
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Особенности видеообучения:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Icon name="CheckCircle" size={16} className="mr-2 text-ocean" />
                          HD качество записи
                        </li>
                        <li className="flex items-center">
                          <Icon name="CheckCircle" size={16} className="mr-2 text-ocean" />
                          Субтитры и транскрипции
                        </li>
                        <li className="flex items-center">
                          <Icon name="CheckCircle" size={16} className="mr-2 text-ocean" />
                          Возможность замедления/ускорения
                        </li>
                        <li className="flex items-center">
                          <Icon name="CheckCircle" size={16} className="mr-2 text-ocean" />
                          Закладки и заметки
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-ocean-light to-ocean-cyan/20 p-6 rounded-lg">
                      <div className="flex items-center justify-center h-40">
                        <Icon name="Monitor" size={64} className="text-ocean-deep opacity-50" />
                      </div>
                      <p className="text-center text-sm text-muted-foreground mt-4">
                        Современная видеоплатформа с адаптивным плеером
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="assignments" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="FileText" size={24} className="mr-2 text-ocean" />
                    Практические задания
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {[
                      { title: "Анализ конкурентов", difficulty: "Начальный", time: "2 часа" },
                      { title: "Создание контент-плана", difficulty: "Средний", time: "4 часа" },
                      { title: "Настройка рекламных кампаний", difficulty: "Продвинутый", time: "6 часов" },
                      { title: "Аналитика и отчетность", difficulty: "Профессиональный", time: "8 часов" }
                    ].map((assignment, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h5 className="font-semibold">{assignment.title}</h5>
                          <p className="text-sm text-muted-foreground">Время: {assignment.time}</p>
                        </div>
                        <Badge variant="outline">{assignment.difficulty}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="progress" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="TrendingUp" size={24} className="mr-2 text-ocean" />
                    Отслеживание прогресса
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Общий прогресс</span>
                        <span className="text-ocean font-bold">73%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-ocean h-3 rounded-full" style={{ width: '73%' }}></div>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-ocean-light/20 rounded-lg">
                        <Icon name="BookOpen" size={32} className="mx-auto mb-2 text-ocean" />
                        <div className="text-2xl font-bold text-ocean-deep">24</div>
                        <div className="text-sm text-muted-foreground">Уроков пройдено</div>
                      </div>
                      <div className="text-center p-4 bg-shell-light/20 rounded-lg">
                        <Icon name="Award" size={32} className="mx-auto mb-2 text-shell" />
                        <div className="text-2xl font-bold text-ocean-deep">12</div>
                        <div className="text-sm text-muted-foreground">Заданий выполнено</div>
                      </div>
                      <div className="text-center p-4 bg-ocean-cyan/20 rounded-lg">
                        <Icon name="Clock" size={32} className="mx-auto mb-2 text-ocean-cyan" />
                        <div className="text-2xl font-bold text-ocean-deep">48ч</div>
                        <div className="text-sm text-muted-foreground">Времени изучено</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Teacher Section */}
      <section id="teacher" className="py-20 bg-gradient-to-b from-background to-ocean-light">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-ocean-deep">О преподавателе</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-shell shadow-2xl">
                  <img 
                    src="https://cdn.poehali.dev/files/5591a788-2f17-4a9d-830e-d5a88c1e806b.jpg" 
                    alt="Преподаватель"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-shell text-ocean-deep p-4 rounded-full shadow-lg">
                  <Icon name="Star" size={32} />
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-ocean-deep">Анна Морская</h3>
                <p className="text-lg text-muted-foreground">
                  Эксперт в области социальных медиа с 8-летним опытом. 
                  Помогла более чем 500 студентам освоить профессию SMM-менеджера.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: "Users", label: "500+ учеников", value: "обучено" },
                    { icon: "Award", label: "8 лет", value: "опыта" },
                    { icon: "TrendingUp", label: "95%", value: "трудоустройство" },
                    { icon: "Heart", label: "4.9/5", value: "рейтинг" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-white/70 rounded-lg">
                      <Icon name={stat.icon as any} size={24} className="mx-auto mb-2 text-ocean" />
                      <div className="font-bold text-ocean-deep">{stat.label}</div>
                      <div className="text-sm text-muted-foreground">{stat.value}</div>
                    </div>
                  ))}
                </div>
                
                <Button size="lg" className="w-full md:w-auto">
                  Связаться с преподавателем
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Students Section */}
      <section id="students" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-ocean-deep">Наши ученики</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Елена К.", role: "SMM-менеджер в IT компании", review: "Курс полностью изменил мою карьеру. За 6 месяцев освоила профессию с нуля!", avatar: "👩‍💻" },
              { name: "Михаил Р.", role: "Фрилансер SMM", review: "Отличная подача материала, много практики. Рекомендую всем!", avatar: "👨‍💼" },
              { name: "София В.", role: "Digital-маркетолог", review: "Теперь веду социальные сети для крупных брендов. Спасибо за знания!", avatar: "👩‍🎨" }
            ].map((student, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">{student.avatar}</div>
                    <h4 className="font-semibold text-ocean-deep">{student.name}</h4>
                    <p className="text-sm text-muted-foreground">{student.role}</p>
                  </div>
                  <p className="text-center text-gray-600">"{student.review}"</p>
                  <div className="flex justify-center mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-shell fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-20 bg-gradient-to-b from-background to-ocean-light">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-ocean-deep">Служба заботы</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="MessageCircle" size={24} className="mr-2 text-ocean" />
                    Онлайн поддержка
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Получайте ответы на вопросы в режиме реального времени</p>
                  <ul className="space-y-2 text-sm">
                    <li>• Чат с преподавателями</li>
                    <li>• Техническая поддержка</li>
                    <li>• Помощь с заданиями</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Users" size={24} className="mr-2 text-ocean" />
                    Сообщество
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Общайтесь с единомышленниками и делитесь опытом</p>
                  <ul className="space-y-2 text-sm">
                    <li>• Форум студентов</li>
                    <li>• Еженедельные встречи</li>
                    <li>• Обмен портфолио</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-ocean-deep">Контакты</h2>
          
          <div className="max-w-2xl mx-auto text-center">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <Icon name="Mail" size={32} className="mx-auto mb-4 text-ocean" />
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-muted-foreground">info@smm-volna.ru</p>
              </div>
              <div>
                <Icon name="Phone" size={32} className="mx-auto mb-4 text-ocean" />
                <h4 className="font-semibold mb-2">Телефон</h4>
                <p className="text-muted-foreground">+7 (999) 123-45-67</p>
              </div>
              <div>
                <Icon name="MessageSquare" size={32} className="mx-auto mb-4 text-ocean" />
                <h4 className="font-semibold mb-2">Telegram</h4>
                <p className="text-muted-foreground">@smm_volna</p>
              </div>
            </div>
            
            <Button size="lg">
              Записаться на консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ocean-deep text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-3xl font-bold mb-4">SMM ВОЛНА</div>
            <p className="text-ocean-light mb-6">Твоя профессия начинается здесь</p>
            <div className="flex justify-center space-x-4">
              <Button variant="ghost" size="sm">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Youtube" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}