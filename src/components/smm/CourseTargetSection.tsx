import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

const CourseTargetSection = () => {
  return (
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
  );
};

export default CourseTargetSection;