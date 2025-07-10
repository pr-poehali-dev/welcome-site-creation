import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [currentSection, setCurrentSection] = useState("welcome");
  const [completedSteps, setCompletedSteps] = useState(2);
  const totalSteps = 8;

  const navigationItems = [
    { id: "welcome", title: "Главная", icon: "Home" },
    { id: "company", title: "О компании", icon: "Building" },
    { id: "firstday", title: "Первый день", icon: "Calendar" },
    { id: "training", title: "Обучение", icon: "GraduationCap" },
    { id: "certification", title: "Аттестация", icon: "Award" },
    { id: "documents", title: "Документы", icon: "FileText" },
    { id: "procedures", title: "Процедуры", icon: "Clipboard" },
    { id: "ideas", title: "Банк идей", icon: "Lightbulb" },
    { id: "contacts", title: "Контакты", icon: "Phone" },
  ];

  const progressPercentage = (completedSteps / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Icon name="Factory" size={32} className="text-blue-600" />
              <h1 className="text-xl font-semibold text-slate-900">
                Адаптация новых сотрудников
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Badge
                variant="outline"
                className="text-blue-600 border-blue-200"
              >
                Прогресс: {completedSteps}/{totalSteps}
              </Badge>
              <Button variant="outline" size="sm">
                <Icon name="User" size={16} className="mr-2" />
                Профиль
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto py-4">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentSection(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  currentSection === item.id
                    ? "bg-blue-50 text-blue-600 border border-blue-200"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <Icon name={item.icon} size={16} />
                <span className="text-sm font-medium">{item.title}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentSection === "welcome" && (
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="relative">
              <div className="absolute inset-0 z-0">
                <img
                  src="/img/5aca831f-4e94-48cb-bebb-cc44131f5995.jpg"
                  alt="Производственная среда"
                  className="w-full h-96 object-cover rounded-2xl opacity-10"
                />
              </div>
              <div className="relative z-10 text-center space-y-6 py-16">
                <h2 className="text-4xl font-bold text-slate-900">
                  Добро пожаловать в команду!
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Мы рады видеть вас в нашей производственной компании. Этот
                  портал поможет вам быстро адаптироваться и стать частью нашей
                  команды.
                </p>
              </div>
            </div>

            <div className="text-center space-y-6">
              {/* Progress Card */}
              <Card className="max-w-md mx-auto">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Прогресс адаптации</span>
                    <Icon
                      name="TrendingUp"
                      size={20}
                      className="text-green-600"
                    />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Progress value={progressPercentage} className="w-full" />
                    <p className="text-sm text-slate-600">
                      Выполнено {completedSteps} из {totalSteps} этапов
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Icon
                    name="Users"
                    size={32}
                    className="mx-auto text-blue-600 mb-2"
                  />
                  <h3 className="text-2xl font-bold text-slate-900">1,200+</h3>
                  <p className="text-slate-600">Сотрудников</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Icon
                    name="MapPin"
                    size={32}
                    className="mx-auto text-green-600 mb-2"
                  />
                  <h3 className="text-2xl font-bold text-slate-900">15</h3>
                  <p className="text-slate-600">Производственных цехов</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Icon
                    name="Award"
                    size={32}
                    className="mx-auto text-purple-600 mb-2"
                  />
                  <h3 className="text-2xl font-bold text-slate-900">25</h3>
                  <p className="text-slate-600">Лет на рынке</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Icon
                    name="Shield"
                    size={32}
                    className="mx-auto text-orange-600 mb-2"
                  />
                  <h3 className="text-2xl font-bold text-slate-900">99.8%</h3>
                  <p className="text-slate-600">Безопасность</p>
                </CardContent>
              </Card>
            </div>

            {/* Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setCurrentSection("firstday")}
              >
                <CardHeader>
                  <Icon name="Calendar" size={24} className="text-blue-600" />
                  <CardTitle>Первый день</CardTitle>
                  <CardDescription>
                    Узнайте, что вас ждет в первый рабочий день
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Начать
                  </Button>
                </CardContent>
              </Card>

              <Card
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setCurrentSection("training")}
              >
                <CardHeader>
                  <Icon
                    name="GraduationCap"
                    size={24}
                    className="text-green-600"
                  />
                  <CardTitle>Обучение</CardTitle>
                  <CardDescription>
                    Программы обучения и развития навыков
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Изучить
                  </Button>
                </CardContent>
              </Card>

              <Card
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setCurrentSection("procedures")}
              >
                <CardHeader>
                  <Icon
                    name="Clipboard"
                    size={24}
                    className="text-purple-600"
                  />
                  <CardTitle>Процедуры</CardTitle>
                  <CardDescription>
                    Важные рабочие процедуры и инструкции
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Ознакомиться
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {currentSection === "company" && (
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute inset-0 z-0">
                <img
                  src="/img/8ec3b587-1292-4271-967f-0957506c4f25.jpg"
                  alt="Команда сотрудников"
                  className="w-full h-64 object-cover rounded-xl opacity-15"
                />
              </div>
              <div className="relative z-10 text-center py-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  О нашей компании
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  Мы - ведущая производственная компания с многолетним опытом и
                  традициями качества.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Target" size={20} className="text-blue-600" />
                    <span>Наша миссия</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Производить качественную продукцию, обеспечивая безопасные
                    условия труда и развитие сотрудников.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Eye" size={20} className="text-green-600" />
                    <span>Наше видение</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Быть лидером отрасли, устанавливая стандарты качества и
                    инноваций в производстве.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Heart" size={20} className="text-red-600" />
                    <span>Наши ценности</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Качество во всем</li>
                    <li>• Безопасность превыше всего</li>
                    <li>• Уважение к людям</li>
                    <li>• Непрерывное развитие</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon
                      name="History"
                      size={20}
                      className="text-purple-600"
                    />
                    <span>Наша история</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Основанная в 1999 году, компания прошла путь от небольшого
                    производства до крупного промышленного предприятия.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {currentSection === "firstday" && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Ваш первый день
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Подробный план действий на первый рабочий день
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  time: "08:00",
                  title: "Встреча с HR-менеджером",
                  desc: "Оформление документов и знакомство с командой",
                  icon: "Users",
                },
                {
                  time: "09:00",
                  title: "Экскурсия по предприятию",
                  desc: "Знакомство с производственными цехами",
                  icon: "MapPin",
                },
                {
                  time: "10:30",
                  title: "Инструктаж по безопасности",
                  desc: "Обязательный курс по технике безопасности",
                  icon: "Shield",
                },
                {
                  time: "12:00",
                  title: "Обеденный перерыв",
                  desc: "Знакомство с коллегами в столовой",
                  icon: "Coffee",
                },
                {
                  time: "13:00",
                  title: "Встреча с наставником",
                  desc: "Знакомство с вашим ментором",
                  icon: "UserCheck",
                },
                {
                  time: "14:00",
                  title: "Рабочее место",
                  desc: "Настройка рабочего места и знакомство с инструментами",
                  icon: "Settings",
                },
                {
                  time: "16:00",
                  title: "Планирование обучения",
                  desc: "Составление индивидуального плана развития",
                  icon: "Calendar",
                },
              ].map((item, index) => (
                <Card key={index} className="transition-all hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <Badge
                          variant="outline"
                          className="text-blue-600 border-blue-200"
                        >
                          {item.time}
                        </Badge>
                      </div>
                      <div className="flex-shrink-0 mt-1">
                        <Icon
                          name={item.icon}
                          size={20}
                          className="text-slate-600"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-slate-600">{item.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {currentSection === "training" && (
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute inset-0 z-0">
                <img
                  src="/img/4fe062b7-1b41-48d8-a170-ce1484b6183c.jpg"
                  alt="Обучение сотрудников"
                  className="w-full h-64 object-cover rounded-xl opacity-15"
                />
              </div>
              <div className="relative z-10 text-center py-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Программы обучения
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  Структурированное обучение для вашего профессионального
                  развития
                </p>
              </div>
            </div>

            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="basic">Базовый курс</TabsTrigger>
                <TabsTrigger value="safety">Безопасность</TabsTrigger>
                <TabsTrigger value="skills">
                  Профессиональные навыки
                </TabsTrigger>
              </TabsList>

              <TabsContent value="basic" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Icon
                          name="BookOpen"
                          size={20}
                          className="text-blue-600"
                        />
                        <span>Введение в производство</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 mb-4">
                        Основы производственного процесса и структура компании
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge>4 часа</Badge>
                        <Button size="sm">Начать</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Icon
                          name="Users"
                          size={20}
                          className="text-green-600"
                        />
                        <span>Корпоративная культура</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 mb-4">
                        Ценности, принципы и традиции компании
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge>2 часа</Badge>
                        <Button size="sm" variant="outline">
                          Запланировать
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="safety" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Icon
                          name="Shield"
                          size={20}
                          className="text-red-600"
                        />
                        <span>Техника безопасности</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 mb-4">
                        Обязательный курс по безопасности труда
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge variant="destructive">Обязательно</Badge>
                        <Button size="sm">Пройти тест</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Icon
                          name="AlertTriangle"
                          size={20}
                          className="text-orange-600"
                        />
                        <span>Действия в ЧС</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 mb-4">
                        Процедуры при чрезвычайных ситуациях
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge>1 час</Badge>
                        <Button size="sm" variant="outline">
                          Изучить
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="skills" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Icon
                          name="Settings"
                          size={20}
                          className="text-purple-600"
                        />
                        <span>Работа с оборудованием</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 mb-4">
                        Практические навыки работы с производственным
                        оборудованием
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge>8 часов</Badge>
                        <Button size="sm" variant="outline">
                          Записаться
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Icon
                          name="BarChart"
                          size={20}
                          className="text-blue-600"
                        />
                        <span>Контроль качества</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 mb-4">
                        Методы контроля качества продукции
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge>6 часов</Badge>
                        <Button size="sm" variant="outline">
                          Записаться
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {/* Other sections with placeholder content */}
        {["certification", "documents", "procedures", "ideas", "contacts"].map(
          (section) => {
            if (currentSection !== section) return null;

            const sectionData = {
              certification: {
                title: "Аттестация",
                desc: "Система оценки и сертификации сотрудников",
              },
              documents: {
                title: "Документы",
                desc: "Необходимые документы и формы",
              },
              procedures: {
                title: "Процедуры",
                desc: "Рабочие процедуры и инструкции",
              },
              ideas: {
                title: "Банк идей",
                desc: "Платформа для предложений по улучшению",
              },
              contacts: {
                title: "Контакты",
                desc: "Контактная информация и поддержка",
              },
            };

            return (
              <div key={section} className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    {sectionData[section].title}
                  </h2>
                  <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                    {sectionData[section].desc}
                  </p>
                </div>

                <Card>
                  <CardContent className="p-8 text-center">
                    <Icon
                      name="Construction"
                      size={48}
                      className="mx-auto text-slate-400 mb-4"
                    />
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      Раздел в разработке
                    </h3>
                    <p className="text-slate-600 mb-4">
                      Этот раздел будет доступен в ближайшее время
                    </p>
                    <Button variant="outline">Уведомить о готовности</Button>
                  </CardContent>
                </Card>
              </div>
            );
          },
        )}
      </main>
    </div>
  );
};

export default Index;
