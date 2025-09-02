import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function OfferAgreement() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean-50 via-pearl-50 to-coral-50">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/')}
              className="text-ocean-600 hover:text-ocean-800"
            >
              <Icon name="ArrowLeft" size={20} />
              Назад на главную
            </Button>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm border-ocean-200 shadow-xl">
            <CardContent className="p-12">
              <h1 className="text-3xl font-bold text-ocean-800 mb-8 text-center">
                ДОГОВОР ОФЕРТЫ
              </h1>
              
              <div className="prose prose-ocean max-w-none space-y-6">
                <section>
                  <h2 className="text-xl font-bold text-ocean-700 mb-4">1. ОБЩИЕ ПОЛОЖЕНИЯ</h2>
                  <p className="text-ocean-600 leading-relaxed">
                    Настоящий договор-оферта (далее - Договор) является публичным предложением 
                    о заключении договора на оказание образовательных услуг в сфере SMM.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-ocean-700 mb-4">2. ИСПОЛНИТЕЛЬ</h2>
                  <div className="bg-ocean-50 p-6 rounded-lg">
                    <p className="text-ocean-700 font-semibold mb-2">Контактная информация:</p>
                    <ul className="text-ocean-600 space-y-1">
                      <li><strong>Телефон:</strong> +7 9226799890</li>
                      <li><strong>Email:</strong> izvestno.volkova@yandex.com</li>
                      <li><strong>Telegram:</strong> @volkova.marinasmm</li>
                      <li><strong>Instagram:</strong> @volkova.marinasmm</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-ocean-700 mb-4">3. ПРЕДМЕТ ДОГОВОРА</h2>
                  <p className="text-ocean-600 leading-relaxed">
                    Исполнитель обязуется оказать Заказчику образовательные услуги по обучению 
                    основам SMM-деятельности, включающие:
                  </p>
                  <ul className="list-disc pl-6 text-ocean-600 space-y-2 mt-4">
                    <li>Теоретические материалы и практические задания</li>
                    <li>Индивидуальные или групповые консультации</li>
                    <li>Проверка выполненных работ</li>
                    <li>Выдача сертификата о прохождении обучения</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-ocean-700 mb-4">4. СТОИМОСТЬ И ПОРЯДОК ОПЛАТЫ</h2>
                  <p className="text-ocean-600 leading-relaxed">
                    Стоимость услуг указана на сайте и может изменяться в зависимости от 
                    выбранного тарифа обучения. Оплата производится до начала обучения.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-ocean-700 mb-4">5. ПРАВА И ОБЯЗАННОСТИ СТОРОН</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-coral-50 p-6 rounded-lg">
                      <h3 className="font-bold text-coral mb-3">Исполнитель обязуется:</h3>
                      <ul className="list-disc pl-4 text-ocean-600 space-y-1">
                        <li>Предоставить качественные образовательные материалы</li>
                        <li>Обеспечить обратную связь по заданиям</li>
                        <li>Соблюдать график обучения</li>
                      </ul>
                    </div>
                    <div className="bg-ocean-50 p-6 rounded-lg">
                      <h3 className="font-bold text-ocean-600 mb-3">Заказчик обязуется:</h3>
                      <ul className="list-disc pl-4 text-ocean-600 space-y-1">
                        <li>Своевременно оплатить услуги</li>
                        <li>Выполнять задания в срок</li>
                        <li>Соблюдать правила обучения</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-ocean-700 mb-4">6. ОТВЕТСТВЕННОСТЬ</h2>
                  <p className="text-ocean-600 leading-relaxed">
                    Исполнитель не несет ответственности за результаты применения 
                    полученных знаний в коммерческой деятельности Заказчика.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-ocean-700 mb-4">7. ЗАКЛЮЧИТЕЛЬНЫЕ ПОЛОЖЕНИЯ</h2>
                  <p className="text-ocean-600 leading-relaxed">
                    Договор вступает в силу с момента оплаты услуг Заказчиком и действует 
                    до полного исполнения обязательств сторонами.
                  </p>
                </section>

                <div className="mt-12 pt-8 border-t border-ocean-200 text-center">
                  <p className="text-ocean-500 text-sm">
                    Дата последнего обновления: {new Date().toLocaleDateString('ru-RU')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}