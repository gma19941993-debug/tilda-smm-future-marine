import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function PrivacyPolicy() {
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
                ПОЛИТИКА ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ
              </h1>
              
              <div className="prose prose-ocean max-w-none space-y-6">
                <section>
                  <h2 className="text-xl font-bold text-ocean-700 mb-4">1. ОБЩИЕ ПОЛОЖЕНИЯ</h2>
                  <p className="text-ocean-600 leading-relaxed">
                    Настоящая Политика обработки персональных данных (далее - Политика) 
                    действует в отношении всех персональных данных, которые могут быть 
                    получены во время использования сайта и сервисов.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-ocean-700 mb-4">2. КОНТАКТНАЯ ИНФОРМАЦИЯ</h2>
                  <div className="bg-ocean-50 p-6 rounded-lg">
                    <p className="text-ocean-700 font-semibold mb-4">
                      По всем вопросам обработки персональных данных обращайтесь:
                    </p>
                    <ul className="text-ocean-600 space-y-2">
                      <li className="flex items-center gap-2">
                        <Icon name="Phone" size={16} />
                        <strong>Телефон:</strong> +7 (XXX) XXX-XX-XX
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Mail" size={16} />
                        <strong>Email:</strong> info@example.com
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="MessageCircle" size={16} />
                        <strong>Telegram:</strong> @username
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Instagram" size={16} />
                        <strong>Instagram:</strong> @username
                      </li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-ocean-700 mb-4">3. КАКИЕ ДАННЫЕ МЫ СОБИРАЕМ</h2>
                  <div className="bg-coral-50 p-6 rounded-lg">
                    <p className="text-ocean-600 mb-4">Мы можем собирать следующие персональные данные:</p>
                    <ul className="list-disc pl-6 text-ocean-600 space-y-2">
                      <li>Имя и фамилия</li>
                      <li>Адрес электронной почты</li>
                      <li>Номер телефона</li>
                      <li>Данные социальных сетей (при регистрации через соцсети)</li>
                      <li>IP-адрес и информация о браузере</li>
                      <li>Данные об использовании сайта</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-ocean-700 mb-4">4. ЦЕЛИ ОБРАБОТКИ ДАННЫХ</h2>
                  <p className="text-ocean-600 leading-relaxed mb-4">
                    Мы используем ваши персональные данные для:
                  </p>
                  <ul className="list-disc pl-6 text-ocean-600 space-y-2">
                    <li>Предоставления образовательных услуг</li>
                    <li>Связи с вами по вопросам обучения</li>
                    <li>Отправки важной информации о курсах</li>
                    <li>Улучшения качества наших услуг</li>
                    <li>Выполнения договорных обязательств</li>
                    <li>Соблюдения требований законодательства</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-ocean-700 mb-4">5. ПРАВОВЫЕ ОСНОВАНИЯ</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-ocean-50 p-6 rounded-lg">
                      <h3 className="font-bold text-ocean-600 mb-3">Согласие субъекта</h3>
                      <p className="text-ocean-600 text-sm">
                        На обработку данных для маркетинговых целей и улучшения сервиса
                      </p>
                    </div>
                    <div className="bg-coral-50 p-6 rounded-lg">
                      <h3 className="font-bold text-coral mb-3">Исполнение договора</h3>
                      <p className="text-ocean-600 text-sm">
                        Для предоставления образовательных услуг и поддержки
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-ocean-700 mb-4">6. ПЕРЕДАЧА ДАННЫХ ТРЕТЬИМ ЛИЦАМ</h2>
                  <p className="text-ocean-600 leading-relaxed">
                    Мы не передаем ваши персональные данные третьим лицам, за исключением случаев:
                  </p>
                  <ul className="list-disc pl-6 text-ocean-600 space-y-2 mt-4">
                    <li>Получения вашего явного согласия</li>
                    <li>Требования законодательства</li>
                    <li>Использования технических сервисов (платежные системы, почтовые сервисы)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-ocean-700 mb-4">7. СРОКИ ХРАНЕНИЯ ДАННЫХ</h2>
                  <p className="text-ocean-600 leading-relaxed">
                    Персональные данные хранятся не дольше, чем это необходимо для 
                    достижения целей их обработки, но не более 5 лет с момента 
                    последнего взаимодействия.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-ocean-700 mb-4">8. ВАШИ ПРАВА</h2>
                  <div className="bg-ocean-50 p-6 rounded-lg">
                    <p className="text-ocean-600 mb-4">Вы имеете право:</p>
                    <ul className="list-disc pl-6 text-ocean-600 space-y-2">
                      <li>Получать информацию о ваших персональных данных</li>
                      <li>Требовать исправления неточных данных</li>
                      <li>Требовать удаления ваших данных</li>
                      <li>Ограничить обработку данных</li>
                      <li>Отозвать согласие на обработку</li>
                      <li>Обратиться в надзорные органы</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-ocean-700 mb-4">9. БЕЗОПАСНОСТЬ ДАННЫХ</h2>
                  <p className="text-ocean-600 leading-relaxed">
                    Мы применяем технические и организационные меры для защиты 
                    персональных данных от несанкционированного доступа, изменения, 
                    раскрытия или уничтожения.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-ocean-700 mb-4">10. ФАЙЛЫ COOKIES</h2>
                  <p className="text-ocean-600 leading-relaxed">
                    Сайт использует файлы cookie для улучшения функциональности и 
                    анализа использования. Вы можете настроить использование cookie 
                    в настройках вашего браузера.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-ocean-700 mb-4">11. ИЗМЕНЕНИЯ ПОЛИТИКИ</h2>
                  <p className="text-ocean-600 leading-relaxed">
                    Мы можем обновлять данную Политику. О существенных изменениях 
                    вы будете уведомлены по электронной почте или через сайт.
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