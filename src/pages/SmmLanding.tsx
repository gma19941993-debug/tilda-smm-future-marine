import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

const SmmLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean-50 to-pearl-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/img/34debb3d-c088-4635-87b6-c4b5f0d3e9b5.jpg')",
            filter: 'blur(2px)',
            transform: 'scale(1.1)',
          }}
        ></div>
        
        {/* Animated background with marine elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-32 h-32 bg-ocean-200 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-seafoam rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-ocean-300 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        {/* Moving marine elements with social icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating hearts/likes */}
          <div className="absolute top-20 left-10 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
            <div className="w-8 h-8 bg-coral/70 rounded-full flex items-center justify-center shadow-lg">
              <Icon name="Heart" size={16} className="text-white" />
            </div>
          </div>
          <div className="absolute top-60 right-32 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>
            <div className="w-6 h-6 bg-coral/60 rounded-full flex items-center justify-center shadow-lg">
              <Icon name="Heart" size={12} className="text-white" />
            </div>
          </div>
          <div className="absolute bottom-40 left-20 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}>
            <div className="w-10 h-10 bg-coral/80 rounded-full flex items-center justify-center shadow-lg">
              <Icon name="Heart" size={18} className="text-white" />
            </div>
          </div>

          {/* Floating repost/share icons */}
          <div className="absolute top-32 right-10 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}>
            <div className="w-8 h-8 bg-ocean-400/70 rounded-full flex items-center justify-center shadow-lg">
              <Icon name="Share2" size={16} className="text-white" />
            </div>
          </div>
          <div className="absolute bottom-60 right-40 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4s' }}>
            <div className="w-7 h-7 bg-ocean-500/60 rounded-full flex items-center justify-center shadow-lg">
              <Icon name="Share2" size={14} className="text-white" />
            </div>
          </div>

          {/* Floating starfish */}
          <div className="absolute top-40 left-1/4 animate-spin" style={{ animationDuration: '8s' }}>
            <div className="w-12 h-12 text-seafoam/40">
              <Icon name="Star" size={48} />
            </div>
          </div>
          <div className="absolute bottom-32 right-1/4 animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }}>
            <div className="w-8 h-8 text-ocean-300/50">
              <Icon name="Star" size={32} />
            </div>
          </div>

          {/* Floating waves */}
          <div className="absolute top-1/3 left-5 animate-pulse" style={{ animationDuration: '4s' }}>
            <div className="w-16 h-16 text-wave/30">
              <Icon name="Waves" size={64} />
            </div>
          </div>
          <div className="absolute bottom-1/4 right-10 animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}>
            <div className="w-12 h-12 text-seafoam/40">
              <Icon name="Waves" size={48} />
            </div>
          </div>

          {/* Swimming fish (using arrow icons as fish) */}
          <div className="absolute top-1/2 left-0 animate-ping" style={{ animationDuration: '6s' }}>
            <div className="w-10 h-10 text-ocean-400/30 transform rotate-45">
              <Icon name="ArrowRight" size={40} />
            </div>
          </div>
          <div className="absolute bottom-1/3 right-0 animate-ping" style={{ animationDuration: '7s', animationDelay: '2s' }}>
            <div className="w-8 h-8 text-ocean-300/40 transform rotate-180">
              <Icon name="ArrowRight" size={32} />
            </div>
          </div>

          {/* Floating bubbles with likes count */}
          <div className="absolute top-24 left-1/3 animate-bounce" style={{ animationDelay: '3s', animationDuration: '5s' }}>
            <div className="bg-white/70 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg border border-ocean-200">
              <span className="text-ocean-600 text-xs font-semibold flex items-center gap-1">
                <Icon name="Heart" size={12} className="text-coral" />
                127
              </span>
            </div>
          </div>
          <div className="absolute bottom-40 right-1/3 animate-bounce" style={{ animationDelay: '4s', animationDuration: '4.5s' }}>
            <div className="bg-white/70 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg border border-ocean-200">
              <span className="text-ocean-600 text-xs font-semibold flex items-center gap-1">
                <Icon name="Share2" size={12} className="text-ocean-500" />
                89
              </span>
            </div>
          </div>
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
                onClick={() => {
                  // Скролл к секции с тарифами
                  document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                }}
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
                <div className="relative w-96 h-96 lg:w-[28rem] lg:h-[28rem]">
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
            <Dialog>
              <DialogTrigger asChild>
                <Card className="bg-white/70 backdrop-blur-sm border-ocean-200 hover:shadow-xl transition-all duration-300 group cursor-pointer">
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
                    <div className="text-center mt-4">
                      <Button variant="outline" size="sm">
                        Смотреть кейсы
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh]">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-ocean-800">Кейсы мам в декрете</DialogTitle>
                  <DialogDescription>
                    Истории успеха мам, которые освоили SMM и начали зарабатывать
                  </DialogDescription>
                </DialogHeader>
                <ScrollArea className="h-[60vh]">
                  <div className="space-y-6 p-4">
                    {/* Аня Белых */}
                    <div className="bg-gradient-to-r from-coral/10 to-starfish/10 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-coral mb-3">Аня Белых</h3>
                      <p className="text-ocean-700 leading-relaxed">
                        Аня мама в декрете как и я, одна из первый учениц кто мне доверилась. За это ей отдельная благодарность. 
                        Вечерами и ночами совмещая материнство и обучение Аня выполняла все задания и мы перешли к поиску заказчиков. 
                        Тогда у меня еще не было возможности дать заказчика сразу, но я знала как искать их и где. 
                        Поэтому размещая свое предложение нашолся первый заказчик довольно быстро и это была <strong>школа развития для детей</strong>. 
                        Как раз то что нужно для мамы в декрете.
                      </p>
                    </div>
                    
                    {/* Настя Кибанова */}
                    <div className="bg-gradient-to-r from-ocean/10 to-seafoam/10 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-ocean-600 mb-3">Настя Кибанова</h3>
                      <p className="text-ocean-700 leading-relaxed">
                        Настя очень разносторонняя у неё много интересов и она постоянно что-то изучает. 
                        Ко мне в работу она пришла именно освоить профессию смм и увеличить свой доход. 
                        И очень часто так бывает, что когда на курсе доходят до урока упаковки среди подписчиков находятся первые заказчики. 
                        Так было и с Настей. Ей написала её знакомая подписчица что ей нужен смм специалист. 
                        <strong>Ниша бьюти сферы депиляция и обучающие курсы</strong>. Настя успешно начала развиваться и получать обратную связь о своей работе. 
                        Кстати Настя мама и все это она делала с сыном.
                      </p>
                    </div>

                    {/* Алена Серебрякова */}
                    <div className="bg-gradient-to-r from-coral/10 to-wave/10 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-coral mb-3">Алена Серебрякова</h3>
                      <p className="text-ocean-700 leading-relaxed">
                        Алена из маленького города Куртамыш работала в найме и пришла ко мне по рекомендации. Нужен был дополнительный доход. 
                        И как только Алена перестала думать что найти в её городе это не возможно и просто выполняла все мои рекомендации получила первого заказчика это была <strong>доставка еды</strong>. 
                        Потом фотограф потом фитнес клуб и строительная база и вакансия в моём агентстве. 
                        Как вы понимаете Алена ушла из найма и теперь развивается в смм. 
                        Она кстати тоже мама прекрасной девчонки, которая ходит в садик. 
                        Поэтому она легко совмещает материнство и работу в смм.
                      </p>
                    </div>

                    {/* Настя Кремлева */}
                    <div className="bg-gradient-to-r from-ocean/10 to-coral/10 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-ocean-600 mb-3">Настя Кремлева</h3>
                      <p className="text-ocean-700 leading-relaxed">
                        Настя мама в декрете, точнее декрет уже закончился пора работать и поэтому она начала искать чем же заниматься. 
                        Главный страх и вопрос для неё был это точно ли будет клиент и где их искать. 
                        Как не остаться с новыми знаниями которые никому не нужны. 
                        <strong>Первые заявки пошли еще на этапе упаковки аккаунта</strong>, а по завершению я предлагала ей разные ниши для работы. 
                        Но Настя нашла своего первого заказчика сама. Поэтому от предложений отказалась, 
                        это кстати большой плюс в смм что ты можешь выбирать с кем тебе работать.
                      </p>
                    </div>

                    {/* Таня Максименко */}
                    <div className="bg-gradient-to-r from-starfish/10 to-coral/10 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-coral mb-3">Таня Максименко</h3>
                      <p className="text-ocean-700 leading-relaxed">
                        Таня ученица отличница, пришла ко мне учиться после плохого опыта работы с смм. 
                        Таня пришла разобраться и в итоге освоила новую профессию. 
                        И её красным дипломом стал <strong>первый международный заказчик визовый центр и доход сразу в 40.000₽</strong>. 
                        Отзывы о работе, и поиск помощников для себя. 
                        Таня кстати многодетная мама и я иногда сама удивляюсь когда она все успевает но одно прекрасно у неё точно получается.
                      </p>
                    </div>
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>

            {/* Housewives */}
            <Dialog>
              <DialogTrigger asChild>
                <Card className="bg-white/70 backdrop-blur-sm border-ocean-200 hover:shadow-xl transition-all duration-300 group cursor-pointer">
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
                    <div className="text-center mt-4">
                      <Button variant="outline" size="sm">
                        Смотреть кейсы
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh]">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-ocean-800">Кейсы домохозяек</DialogTitle>
                  <DialogDescription>
                    Истории женщин, которые начали зарабатывать не выходя из дома
                  </DialogDescription>
                </DialogHeader>
                <ScrollArea className="h-[60vh]">
                  <div className="space-y-6 p-4">

                    {/* Светлана Белосветова */}
                    <div className="bg-gradient-to-r from-coral/10 to-starfish/10 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-coral mb-3">Светлана Белосветова</h3>
                      <p className="text-ocean-700 leading-relaxed">
                        Светлана домохозяйка с опытом продаж, но никогда не вела соцсети. Она привыкла быть мамой и домохозяйкой, но хотела внести свой вклад в семейный бюджет. 
                        После обучения она начала работать с <strong>салоном красоты и фитнес-студией</strong>. 
                        Она смогла совмещать работу с домашними обязанностями, ведь в SMM можно работать в любое время и с любого места. 
                        Сейчас у неё стабильные клиенты и хороший дополнительный доход без необходимости выходить из дома.
                      </p>
                    </div>

                    {/* Лена Теплицкая */}
                    <div className="bg-gradient-to-r from-ocean/10 to-wave/10 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-ocean-600 mb-3">Лена Теплицкая</h3>
                      <p className="text-ocean-700 leading-relaxed">
                        Лена хотела найти новое направление для себя и долго наблюдая за мной наконец-то решилась изучить смм. 
                        Ее цель выйти на стабильный доход и уйти из найма. 
                        После обучения её <strong>первым кейсом стал бильярдный клуб нашего города</strong>. 
                        Прошла успешно собеседование и меня как преподавателя даже хвалили за такого специалиста.
                      </p>
                    </div>
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>

            {/* Entrepreneurs */}
            <Dialog>
              <DialogTrigger asChild>
                <Card className="bg-white/70 backdrop-blur-sm border-ocean-200 hover:shadow-xl transition-all duration-300 group cursor-pointer">
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
                    <div className="text-center mt-4">
                      <Button variant="outline" size="sm">
                        Смотреть кейсы
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh]">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-ocean-800">Кейсы предпринимателей</DialogTitle>
                  <DialogDescription>
                    Истории владельцев бизнеса, которые освоили продвижение в социальных сетях
                  </DialogDescription>
                </DialogHeader>
                <ScrollArea className="h-[60vh]">
                  <div className="space-y-6 p-4">
                    {/* Катя Лопаткина */}
                    <div className="bg-gradient-to-r from-coral/10 to-wave/10 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-coral mb-3">Катя Лопаткина</h3>
                      <p className="text-ocean-700 leading-relaxed">
                        Катя пришла по рекомендации она <strong>мастер по наращиванию ресниц в своей студии</strong>. 
                        С большим опытом и огромным потенциалом. Катя пришла учиться для себя для развития соц.сетей студии и прокачки личного бренда. 
                        Кате не нужны заказчики ей нужны новые клиенты через новый канал соц.сети. 
                        И Катя запустила этот канал начали поступать заявки, а главное Катя начала делать. 
                        Потому что основной проблемой для неё было то что она многозадачный человек с кучей обязанностей. 
                        И соц. Сети всегда оставались на потом. Так часто бывает у тех кто работает руками.
                      </p>
                    </div>
                    
                    {/* Олег Носков */}
                    <div className="bg-gradient-to-r from-ocean/10 to-seafoam/10 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-ocean-600 mb-3">Олег Носков</h3>
                      <p className="text-ocean-700 leading-relaxed">
                        Олег <strong>риелтор и знает все о новостройках</strong> его основная цель изучить инструменты соц.сетей упаковать аккаунт и снимать регулярный работающий контент. 
                        Так как я много работаю с риелторами для них у меня отдельная программа которая работает именно для них. 
                        Для их специфики. Поэтому в минигруппе мы совместно научились работать с целевой аудиторией упаковали аккаунт и научились снимать контент. 
                        А главное разобрали много моментов в том как монтировать как что настроить какие инструменты есть как публиковать контент и многие технические моменты. 
                        <strong>Результат это клиенты которые стали приходить с соц.сетей</strong>.
                      </p>
                    </div>

                    {/* Оля Вычужанина */}
                    <div className="bg-gradient-to-r from-coral/10 to-starfish/10 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-coral mb-3">Оля Вычужанина</h3>
                      <p className="text-ocean-700 leading-relaxed">
                        Оля тоже <strong>риелтор</strong>, училась вместе с Олегом в мини группе. 
                        В начале она часто говорила, что чувствует себя глупо и даже стесняется спросить казалось бы простые вещи как прикрепить сторис или как её вообще опубликовать. 
                        Но несколько упражнений и много практики поменяли её мнение она стала больше разбираться в инструментах перестала зажиматься при виде камеры и стала вести регулярный контент. 
                        <strong>Сейчас привлекает новую аудиторию и развивает свой личный бренд в недвижимости</strong>.
                      </p>
                    </div>

                    {/* Виктория Коробицина */}
                    <div className="bg-gradient-to-r from-ocean/10 to-coral/10 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-ocean-600 mb-3">Виктория Коробицина</h3>
                      <p className="text-ocean-700 leading-relaxed">
                        Вика прошла много курсов и наставничеств, но много теории мало действий. 
                        Вика <strong>руководитель, мастер по наращиванию ресниц</strong> и мама жена дочь. Куча задач она одна. 
                        На соц.сети нет сил и времени. Пришла учиться чтобы найти инструменты которые помогут ей меньше тратить времени на соц.сети но при этом они работали. 
                        <strong>Главным результатом стало то что начали поступать заявки</strong>. И Вика стала выходить в соц.сети чаще. 
                        Обучение для себя это тоже важно и приносит свои плоды. Особенно когда ты развиваешь бьюти бизнес.
                      </p>
                    </div>

                    {/* Аня Матвеева */}
                    <div className="bg-gradient-to-r from-starfish/10 to-coral/10 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-coral mb-3">Аня Матвеева</h3>
                      <p className="text-ocean-700 leading-relaxed">
                        Аня самый яркий и позитивный человек, не зря же она <strong>занимается туризмом и проводит различные туры</strong> где еще и сама фотографирует. 
                        Аня пошла учиться для себя и прокачки личного бренда. Сделать свой контент регулярным и эффективным, чтобы приводить новых клиентов. 
                        И создавать новые туристические предложения. Много яркого интересного контента но нет понимания как правильно с помощью него приводить заявки. 
                        С Аней мы составили стратегию её продвижения упаковали аккаунт и изучили много инструментов которые освобождают ей руки от контента когда она путешествует а соц. сети продолжают работать без неё.
                      </p>
                    </div>

                    {/* Даша Заева */}
                    <div className="bg-gradient-to-r from-ocean/10 to-wave/10 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-ocean-600 mb-3">Даша Заева</h3>
                      <p className="text-ocean-700 leading-relaxed">
                        Даша <strong>риелтор</strong> с ней мы познакомились на мероприятии. 
                        Она успешно много лет работает в сфере недвижимости и обучение соц. сетям ей нужно было для прокачки личного бренда. 
                        <strong>Упаковали аккаунт провела классную съемку со стилистом. И стала выходить в соц. сети</strong>.
                      </p>
                    </div>
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>

            {/* Experts */}
            <Dialog>
              <DialogTrigger asChild>
                <Card className="bg-white/70 backdrop-blur-sm border-ocean-200 hover:shadow-xl transition-all duration-300 group cursor-pointer">
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
                    <div className="text-center mt-4">
                      <Button variant="outline" size="sm">
                        Смотреть кейсы
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh]">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-ocean-800">Кейсы экспертов</DialogTitle>
                  <DialogDescription>
                    Истории специалистов, которые развили личный бренд через социальные сети
                  </DialogDescription>
                </DialogHeader>
                <ScrollArea className="h-[60vh]">
                  <div className="space-y-6 p-4">
                    {/* Оля Лукина */}
                    <div className="bg-gradient-to-r from-ocean/10 to-seafoam/10 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-ocean-600 mb-3">Оля Лукина</h3>
                      <p className="text-ocean-700 leading-relaxed">
                        Оля пришла ко мне с запросом «научи меня смм хочу иметь дополнительный доход по мимо своей основной работы. 
                        Оля пошла в индивидуальную работу, чтобы учиться в своем темпе успевая совмещать с работой и достаточно быстро и качественно выполняла все задания. 
                        Ближе к завершению я передала ей в работу <strong>первого заказчика это был косметолог</strong>. 
                        Оля уверенно продолжает расти и развиваться. Сейчас её рекомендуют как специалиста и она уже может самостоятельно выбирать с кем ей работать. 
                        Первый заказчик кстати до сих пор с ней. И работают уже не на одной площадке. 
                        Приносит заявки ведет регулярный контент и продолжает совмещать с основной работой.
                      </p>
                    </div>
                    
                    {/* Вика Середкина */}
                    <div className="bg-gradient-to-r from-coral/10 to-starfish/10 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-coral mb-3">Вика Середкина</h3>
                      <p className="text-ocean-700 leading-relaxed">
                        Это Вика она работает в найме и её основной запрос тоже был получить новую профессию и дополнительный доход. 
                        Она выбирала между эзотерикой и Смм. Но после консультации сразу приняла решение изучать смм. 
                        Вика обучалась в мини группе. И была так сказать отличником в классе я называла её человек табличка. 
                        У неё все четко по порядку и записано. На уроке по упаковке пошли первые предложения по работе. 
                        Но так сложилось что в этот момент я открывала свое агентство и Вика откликнулась на одну из вакансий. 
                        <strong>Первый опыт и сразу два заказчика</strong> 👌
                      </p>
                    </div>

                    {/* Надя Прокопова */}
                    <div className="bg-gradient-to-r from-ocean/10 to-coral/10 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-ocean-600 mb-3">Надя Прокопова</h3>
                      <p className="text-ocean-700 leading-relaxed">
                        Надя эксперт который постоянно ищет себя с ней мы с начала моего развития в смм. Она <strong>мобильный фотограф</strong>. В смм пошла учиться для себя. И для развития своих соц.сетей. 
                        Она на столько круто снимает и фотографирует, что заказчики ей нужны только для съемок. <strong>Заказчиком для Нади стала я и моё агентство и сразу три проекта</strong>.
                      </p>
                    </div>
                    
                    {/* Арина */}
                    <div className="bg-gradient-to-r from-coral/10 to-starfish/10 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-coral mb-3">Арина</h3>
                      <p className="text-ocean-700 leading-relaxed">
                        Арина <strong>мастер который работает руками</strong>, времени на соц.сети нет. Да и желания плясать там в сторис целыми днями тоже ведь она может в это время сделать пару маникюров и заработать. 
                        Изучив всю программу Арина поняла что совсем не хочет в этом развиваться и соц. сети ей легче вести по желанию. Так тоже бывает, когда человек прислушивается к себе. 
                        Знания помогут ей взять себе в помощники смм специалиста и делегировать работу. Именно поэтому я всегда говорю обучаясь смм вы всегда в плюсе станете ли вы смм сами, будете развивать свой бизнес захотите стать блогером или же наймете себе хорошего смм.
                      </p>
                    </div>

                    {/* Наташа Сартакова */}
                    <div className="bg-gradient-to-r from-ocean/10 to-wave/10 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-ocean-600 mb-3">Наташа Сартакова</h3>
                      <p className="text-ocean-700 leading-relaxed">
                        Наташа работает в найме и решила стать смм специалистом. Чтобы со временем уйти из работы от которой уже очень устала.
                        <strong>Пошла учиться индивидуально и сразу на три площадки. Очень объемная и длительная работа в три месяца</strong>. Скоро расскажу каких результатов нам удалось достичь и как мы будем искать первого заказчика и кто он будет.
                      </p>
                    </div>
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>
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
            КТО АВТОР КУРСА?
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
      <section id="pricing" className="py-20 bg-gradient-to-b from-ocean-100 to-pearl-50">
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
                <div className="space-y-3">
                  <Button 
                    className="w-full mt-8 bg-gradient-to-r from-ocean-500 to-wave hover:from-ocean-600 hover:to-ocean-500 text-white py-6"
                    onClick={() => {
                      window.open('https://payform.ru/nr8Vfs6/', '_blank');
                    }}
                  >
                    ОПЛАТИТЬ ПОЛНОСТЬЮ
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full border-ocean-300 text-ocean-600 hover:bg-ocean-50 py-6"
                    onClick={() => {
                      window.open('https://payform.ru/7j8Vg5Q/', '_blank');
                    }}
                  >
                    ОПЛАТИТЬ В РАССРОЧКУ
                  </Button>
                </div>
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
                <CardTitle className="text-2xl font-bold text-ocean-800 mb-2">СММ ЭКСПЕРТ ГРУППА</CardTitle>
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
                <div className="space-y-3">
                  <Button 
                    className="w-full mt-8 bg-gradient-to-r from-coral to-starfish hover:from-orange-500 hover:to-coral text-white py-6"
                    onClick={() => {
                      window.open('https://payform.ru/gd8VfUp/', '_blank');
                    }}
                  >
                    ОПЛАТИТЬ ПОЛНОСТЬЮ
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full border-coral text-coral hover:bg-coral hover:text-white py-6"
                    onClick={() => {
                      window.open('https://payform.ru/su8Vg14/', '_blank');
                    }}
                  >
                    ОПЛАТИТЬ В РАССРОЧКУ
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* VIP Plan */}
            <Card className="bg-white/80 backdrop-blur-sm border-ocean-200 hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center pb-2">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-ocean-600 to-ocean-800 rounded-full flex items-center justify-center">
                  <Icon name="Crown" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-ocean-800 mb-2">СММ ЭКСПЕРТ VIP ВОЛНА</CardTitle>
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
                <div className="space-y-3">
                  <Button 
                    className="w-full mt-8 bg-gradient-to-r from-ocean-600 to-ocean-800 hover:from-ocean-700 hover:to-ocean-900 text-white py-6"
                    onClick={() => {
                      window.open('https://payform.ru/3w8Vgjt/', '_blank');
                    }}
                  >
                    ОПЛАТИТЬ ПОЛНОСТЬЮ
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full border-ocean-600 text-ocean-600 hover:bg-ocean-600 hover:text-white py-6"
                    onClick={() => {
                      window.open('https://payform.ru/6o8Vglw/', '_blank');
                    }}
                  >
                    ОПЛАТИТЬ В РАССРОЧКУ
                  </Button>
                </div>
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
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-4">
              <a 
                href="/offer-agreement" 
                className="text-white/70 hover:text-white transition-colors underline text-sm"
              >
                Договор оферты
              </a>
              <a 
                href="/privacy-policy" 
                className="text-white/70 hover:text-white transition-colors underline text-sm"
              >
                Политика конфиденциальности
              </a>
            </div>
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