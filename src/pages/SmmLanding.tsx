import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const SmmLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean-50 to-pearl-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-32 h-32 bg-ocean-200 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-seafoam rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-ocean-300 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-block bg-ocean-500/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-ocean-200">
                <span className="text-ocean-700 font-semibold text-sm tracking-wider">
                  АВТОРСКИЙ КУРС
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-ocean-600 via-wave to-ocean-800 bg-clip-text text-transparent">
                SMM ВОЛНА
              </h1>

              {/* Description */}
              <p className="text-xl md:text-2xl text-ocean-700 mb-12 leading-relaxed">
                Освой востребованную онлайн-профессию смм специалист с нуля, благодаря которой ты будешь иметь стабильный доход. 
                Перестанешь зависеть от других. Обретешь новые знакомства и исполнишь свои мечты.
              </p>

              {/* CTA Button */}
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-ocean-500 to-wave hover:from-ocean-600 hover:to-ocean-500 text-white px-12 py-6 text-lg font-semibold rounded-full shadow-2xl hover:shadow-ocean-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <Icon name="Waves" className="mr-3" size={24} />
                ХОЧУ НА КУРС
              </Button>
            </div>

            {/* Right Column - Expert Photo */}
            <div className="flex items-center justify-center lg:justify-end">
              <div className="relative">
                {/* Glowing background effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-ocean-200/30 via-seafoam/20 to-pearl-200/40 rounded-full blur-3xl scale-150"></div>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-coral/20 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-ocean-300/30 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
                
                {/* Main photo container */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  {/* Decorative rings */}
                  <div className="absolute inset-0 border-2 border-ocean-300/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                  <div className="absolute inset-4 border border-seafoam/40 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                  
                  {/* Photo */}
                  <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-white/50 shadow-2xl">
                    <img 
                      src="https://cdn.poehali.dev/files/0083e9a7-06c9-4a3c-980f-99c2bc0a91db.jpg" 
                      alt="Волкова Марина - SMM Эксперт"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-ocean-100/10 to-seafoam/20"></div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-coral to-starfish rounded-full flex items-center justify-center animate-bounce shadow-xl">
                    <Icon name="Instagram" size={24} className="text-white" />
                  </div>
                  <div className="absolute bottom-8 left-0 w-14 h-14 bg-gradient-to-br from-ocean-400 to-seafoam rounded-full flex items-center justify-center animate-bounce shadow-xl" style={{ animationDelay: '0.5s' }}>
                    <Icon name="TrendingUp" size={20} className="text-white" />
                  </div>
                  <div className="absolute top-1/3 -left-4 w-12 h-12 bg-gradient-to-br from-wave to-ocean-500 rounded-full flex items-center justify-center animate-bounce shadow-xl" style={{ animationDelay: '1s' }}>
                    <Icon name="Heart" size={16} className="text-white" />
                  </div>
                </div>

                {/* Name badge */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-ocean-200 shadow-xl">
                  <span className="text-ocean-800 font-bold text-lg">Марина Волкова</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-ocean-100/50 to-transparent"></div>
      </section>

      {/* Who is this course for */}
      <section className="py-20 bg-gradient-to-b from-pearl-50 to-ocean-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-ocean-800">
            КОМУ ПОДОЙДЕТ КУРС
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Mothers on maternity leave */}
            <Card className="bg-white/70 backdrop-blur-sm border-ocean-200 hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-coral to-starfish rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Baby" size={32} className="text-white" />
                </div>
                <CardTitle className="text-ocean-800 text-xl">МАМЫ В ДЕКРЕТЕ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-ocean-600 text-center leading-relaxed">
                  Хотите научиться зарабатывать не отходя от материнства, иметь свои деньги и не зависеть от мужа, родителей. 
                  Чувствовать свободу и уверенность.
                </p>
              </CardContent>
            </Card>

            {/* Housewives */}
            <Card className="bg-white/70 backdrop-blur-sm border-ocean-200 hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-ocean-400 to-seafoam rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Home" size={32} className="text-white" />
                </div>
                <CardTitle className="text-ocean-800 text-xl">ДОМОХОЗЯЙКИ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-ocean-600 text-center leading-relaxed">
                  Настолько привыкли находиться дома, что нет желания выходить в найм или работать в офисе. 
                  Но свой доход очень нужен, чтобы чувствовать безопасность и независимость.
                </p>
              </CardContent>
            </Card>

            {/* Entrepreneurs */}
            <Card className="bg-white/70 backdrop-blur-sm border-ocean-200 hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-coral to-wave rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Briefcase" size={32} className="text-white" />
                </div>
                <CardTitle className="text-ocean-800 text-xl">ПРЕДПРИНИМАТЕЛЬ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-ocean-600 text-center leading-relaxed">
                  Хотите вести эффективные соцсети вашего бизнеса сами, привлекать клиентов и увеличивать продажи.
                </p>
              </CardContent>
            </Card>

            {/* Experts */}
            <Card className="bg-white/70 backdrop-blur-sm border-ocean-200 hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-ocean-600 to-ocean-800 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Crown" size={32} className="text-white" />
                </div>
                <CardTitle className="text-ocean-800 text-xl">ЭКСПЕРТ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-ocean-600 text-center leading-relaxed">
                  Хотите использовать соцсети для роста узнаваемости вашего имени, чтобы клиенты находили вас сами.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="py-20 bg-gradient-to-b from-ocean-50 to-pearl-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-ocean-800">
            ПРОГРАММА
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Module 1 */}
            <Card className="bg-white/80 backdrop-blur-sm border-ocean-200 hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-ocean-400 to-wave rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <CardTitle className="text-ocean-800 text-lg">ВВОДНЫЙ УРОК</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-ocean-600 leading-relaxed">
                  Зачем нужны соцсети для карьеры и бизнеса. Как определить свои сильные стороны и демонстрировать экспертность через контент.
                </p>
              </CardContent>
            </Card>

            {/* Module 2 */}
            <Card className="bg-white/80 backdrop-blur-sm border-ocean-200 hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-seafoam to-ocean-400 rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <CardTitle className="text-ocean-800 text-lg">АНАЛИЗ РЫНКА</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-ocean-600 leading-relaxed">
                  Конкуренты и поиск целевой аудитории. Как определить свою ЦА и создать контент, который будет ей интересен.
                </p>
              </CardContent>
            </Card>

            {/* Module 3 */}
            <Card className="bg-white/80 backdrop-blur-sm border-ocean-200 hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-coral to-starfish rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <CardTitle className="text-ocean-800 text-lg">УПАКОВКА ПРОФИЛЯ</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-ocean-600 leading-relaxed">
                  Как создать запоминающийся визуал: аватар, обложка, шапка профиля. Правила создания контент-плана.
                </p>
              </CardContent>
            </Card>

            {/* Module 4 */}
            <Card className="bg-white/80 backdrop-blur-sm border-ocean-200 hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-ocean-500 to-ocean-700 rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <CardTitle className="text-ocean-800 text-lg">СТРАТЕГИЯ</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-ocean-600 leading-relaxed">
                  Пошаговый план действий который поможет привести заявки и покажет эффективность твоей работы.
                </p>
              </CardContent>
            </Card>

            {/* Module 5 */}
            <Card className="bg-white/80 backdrop-blur-sm border-ocean-200 hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-wave to-seafoam rounded-full flex items-center justify-center text-white font-bold">
                    5
                  </div>
                  <CardTitle className="text-ocean-800 text-lg">МОНЕТИЗАЦИЯ SMM</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-ocean-600 leading-relaxed">
                  Как превратить подписчиков в клиентов. Основные способы monetization: услуги, нативные посты, партнерки.
                </p>
              </CardContent>
            </Card>

            {/* Module 6 */}
            <Card className="bg-white/80 backdrop-blur-sm border-ocean-200 hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-coral to-ocean-500 rounded-full flex items-center justify-center text-white font-bold">
                    6
                  </div>
                  <CardTitle className="text-ocean-800 text-lg">ДОГОВОР И БЕЗОПАСНОСТЬ</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-ocean-600 leading-relaxed">
                  Оформление договора, оформление самозанятости. Способы обезопасить себя от недобросовестных клиентов.
                </p>
              </CardContent>
            </Card>

            {/* Module 7 */}
            <Card className="bg-white/80 backdrop-blur-sm border-ocean-200 hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-ocean-600 to-wave rounded-full flex items-center justify-center text-white font-bold">
                    7
                  </div>
                  <CardTitle className="text-ocean-800 text-lg">НАПИСАНИЕ ТЕКСТОВ</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-ocean-600 leading-relaxed">
                  Практика по написанию текстов. Как писать продающие посты и какие форматы вообще существуют.
                </p>
              </CardContent>
            </Card>

            {/* Module 8 */}
            <Card className="bg-white/80 backdrop-blur-sm border-ocean-200 hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-seafoam to-coral rounded-full flex items-center justify-center text-white font-bold">
                    8
                  </div>
                  <CardTitle className="text-ocean-800 text-lg">ПРАКТИКУМ ПО СТОРИС</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-ocean-600 leading-relaxed">
                  Создание вовлекающих историй. Инструменты и техники для эффективных Stories в социальных сетях.
                </p>
              </CardContent>
            </Card>

            {/* Module 9 */}
            <Card className="bg-white/80 backdrop-blur-sm border-ocean-200 hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-ocean-500 to-starfish rounded-full flex items-center justify-center text-white font-bold">
                    9
                  </div>
                  <CardTitle className="text-ocean-800 text-lg">АНАЛИЗ И ОТЧЕТЫ</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-ocean-600 leading-relaxed">
                  Анализ работы и отчеты. Как измерять эффективность и демонстрировать результаты клиентам.
                </p>
              </CardContent>
            </Card>

            {/* Module 10 */}
            <Card className="bg-white/80 backdrop-blur-sm border-ocean-200 hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-wave to-ocean-600 rounded-full flex items-center justify-center text-white font-bold">
                    10
                  </div>
                  <CardTitle className="text-ocean-800 text-lg">БОНУСНЫЙ УРОК</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-ocean-600 leading-relaxed">
                  Дополнительные материалы и секреты успешного SMM-специалиста.
                </p>
              </CardContent>
            </Card>

            {/* Module 11 */}
            <Card className="bg-white/80 backdrop-blur-sm border-ocean-200 hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-coral to-wave rounded-full flex items-center justify-center text-white font-bold">
                    11
                  </div>
                  <CardTitle className="text-ocean-800 text-lg">БОНУСНЫЙ УРОК</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-ocean-600 leading-relaxed">
                  Эксклюзивные техники и инсайты для профессионального роста в SMM.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-20 bg-gradient-to-b from-pearl-100 to-ocean-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-ocean-800">
            КТО АВТОР МАРАФОНА?
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-ocean-200 overflow-hidden">
              <CardContent className="p-0">
                <div className="md:flex">
                  <div className="md:w-1/2 relative">
                    <img 
                      src="https://cdn.poehali.dev/files/0083e9a7-06c9-4a3c-980f-99c2bc0a91db.jpg" 
                      alt="Волкова Марина"
                      className="w-full h-80 md:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/20 to-transparent"></div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-12">
                    <h3 className="text-3xl font-bold text-ocean-800 mb-4">Волкова Марина</h3>
                    <p className="text-lg text-ocean-600 mb-8 leading-relaxed">
                      Эксперт по SMM и личному бренду. Основатель школы SMM ВОЛНА. 
                      Более 2 лет в смм. Помогла более 50 ученикам запустить свои SMM-стратегии.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-coral to-starfish rounded-full flex items-center justify-center">
                          <Icon name="Trophy" size={24} className="text-white" />
                        </div>
                        <span className="text-ocean-700 font-semibold">Более 10 успешных проектов</span>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-ocean-500 to-wave rounded-full flex items-center justify-center">
                          <Icon name="Users" size={24} className="text-white" />
                        </div>
                        <span className="text-ocean-700 font-semibold">Обучила 50+ учеников</span>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-seafoam to-ocean-400 rounded-full flex items-center justify-center">
                          <Icon name="Calendar" size={24} className="text-white" />
                        </div>
                        <span className="text-ocean-700 font-semibold">Организовала 50+ офлайн-мероприятий</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-ocean-100 to-pearl-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-ocean-800">
            ТАРИФЫ
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Basic Plan */}
            <Card className="bg-white/80 backdrop-blur-sm border-ocean-200 hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center pb-2">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-ocean-400 to-seafoam rounded-full flex items-center justify-center">
                  <Icon name="User" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-ocean-800 mb-2">Я САМ(А)</CardTitle>
                <div className="text-4xl font-bold text-ocean-600 mb-4">20.000 ₽</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-ocean-500 mt-1 flex-shrink-0" />
                  <span className="text-ocean-700">Доступ ко всем урокам программы 6 месяцев</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-ocean-500 mt-1 flex-shrink-0" />
                  <span className="text-ocean-700">Доступ в мой ТГ канал с полезной информацией</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-ocean-500 mt-1 flex-shrink-0" />
                  <span className="text-ocean-700">1 личная консультация с автором курса (2 часа)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-ocean-500 mt-1 flex-shrink-0" />
                  <span className="text-ocean-700">Готовые шаблоны (контент-план, брифы)</span>
                </div>
                <Button className="w-full mt-8 bg-gradient-to-r from-ocean-500 to-wave hover:from-ocean-600 hover:to-ocean-500 text-white py-6">
                  ВЫБИРАЮ ЭТОТ ТАРИФ
                </Button>
              </CardContent>
            </Card>

            {/* Group Plan */}
            <Card className="bg-white/90 backdrop-blur-sm border-ocean-300 hover:shadow-2xl transition-all duration-300 relative scale-105 ring-2 ring-coral">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-coral text-white px-6 py-2 rounded-full font-bold text-sm">
                ПОПУЛЯРНЫЙ
              </div>
              <CardHeader className="text-center pb-2 pt-8">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-coral to-starfish rounded-full flex items-center justify-center">
                  <Icon name="Users" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-ocean-800 mb-2">СММ ЭКСПЕРТА ГРУППА</CardTitle>
                <div className="text-sm text-coral font-semibold mb-2">(1 месяц)</div>
                <div className="text-4xl font-bold text-ocean-600 mb-4">50.000 ₽</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-coral mt-1 flex-shrink-0" />
                  <span className="text-ocean-700">Доступ ко всем урокам программы 12 месяцев</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-coral mt-1 flex-shrink-0" />
                  <span className="text-ocean-700">Доступ в мой ТГ канал с полезной информацией</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-coral mt-1 flex-shrink-0" />
                  <span className="text-ocean-700">1 личная консультация с автором курса (2 часа)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-coral mt-1 flex-shrink-0" />
                  <span className="text-ocean-700">Созвон 1 раз в неделю с группой (разборы)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-coral mt-1 flex-shrink-0" />
                  <span className="text-ocean-700">11 модулей (2 бонусных после основных блоков)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-coral mt-1 flex-shrink-0" />
                  <span className="text-ocean-700">Готовые шаблоны (контент-план, брифы, воронки, сторитейлинги)</span>
                </div>
                <Button className="w-full mt-8 bg-gradient-to-r from-coral to-starfish hover:from-orange-500 hover:to-coral text-white py-6">
                  ВЫБИРАЮ ЭТОТ ТАРИФ
                </Button>
              </CardContent>
            </Card>

            {/* VIP Plan */}
            <Card className="bg-white/80 backdrop-blur-sm border-ocean-200 hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center pb-2">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-ocean-600 to-ocean-800 rounded-full flex items-center justify-center">
                  <Icon name="Crown" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-ocean-800 mb-2">СММ ЭКСПЕРТА VIP ВОЛНА</CardTitle>
                <div className="text-sm text-ocean-600 font-semibold mb-2">(2 месяца)</div>
                <div className="text-4xl font-bold text-ocean-600 mb-4">100.000 ₽</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-ocean-500 mt-1 flex-shrink-0" />
                  <span className="text-ocean-700">Доступ ко всем урокам программы навсегда</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-ocean-500 mt-1 flex-shrink-0" />
                  <span className="text-ocean-700">Доступ в мой платный ТГ канал с полезной информацией</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-ocean-500 mt-1 flex-shrink-0" />
                  <span className="text-ocean-700">1 личная консультация в неделю по 2 часа (8 сессий всего)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Star" size={20} className="text-coral mt-1 flex-shrink-0" />
                  <span className="text-ocean-700 font-semibold">Гарантия первого клиента</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-ocean-500 mt-1 flex-shrink-0" />
                  <span className="text-ocean-700">11 модулей (2 бонусных после основных блоков)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-ocean-500 mt-1 flex-shrink-0" />
                  <span className="text-ocean-700">Готовые шаблоны (контент-план, брифы, воронки, сторитейлинги)</span>
                </div>
                <Button className="w-full mt-8 bg-gradient-to-r from-ocean-600 to-ocean-800 hover:from-ocean-700 hover:to-ocean-900 text-white py-6">
                  ВЫБИРАЮ ЭТОТ ТАРИФ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gradient-to-r from-ocean-800 to-ocean-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            ЕСЛИ ВОЗНИКЛИ ВОПРОСЫ
          </h2>
          
          <div className="flex justify-center gap-8 mb-8">
            <a 
              href="https://t.me/volkova_marinasmm" 
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-full hover:bg-white/20 transition-colors text-white"
            >
              <Icon name="Send" size={24} />
              <span className="font-semibold">@volkova_marinasmm</span>
            </a>
            <a 
              href="mailto:gma19941993@mail.ru" 
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-full hover:bg-white/20 transition-colors text-white"
            >
              <Icon name="Mail" size={24} />
              <span className="font-semibold">gma19941993@mail.ru</span>
            </a>
          </div>
          
          <div className="border-t border-white/20 pt-8">
            <p className="text-white/80">
              © SMM Волна, 2024
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SmmLanding;