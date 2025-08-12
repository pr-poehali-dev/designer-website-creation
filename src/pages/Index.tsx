import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const portfolioProjects = [
    {
      title: "Минималистичный Логотип",
      description: "Создание чистого геометрического логотипа для технологического стартапа",
      image: "/img/fa4add26-8723-48ad-8f14-e2b50e52ed62.jpg",
      category: "Логотип"
    },
    {
      title: "Фирменный Стиль",
      description: "Комплексная разработка корпоративного стиля включая визитки и фирменные бланки",
      image: "/img/ce2c7fc3-b024-4c50-8134-8075bbab1396.jpg",
      category: "Брендинг"
    },
    {
      title: "Коллекция Логотипов",
      description: "Серия современных геометрических логотипов для различных брендов",
      image: "/img/888f870e-781e-46d9-bb11-293bb68c53e7.jpg",
      category: "Портфолио"
    }
  ];

  const services = [
    {
      icon: "PenTool",
      title: "Дизайн Логотипов",
      description: "Создание уникальных и запоминающихся логотипов, которые отражают суть вашего бренда"
    },
    {
      icon: "Palette",
      title: "Фирменный Стиль",
      description: "Разработка полного комплекса фирменного стиля от визиток до брендбука"
    },
    {
      icon: "Layout",
      title: "Брендинг",
      description: "Создание цельной визуальной концепции для вашего бизнеса"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-black mb-6 tracking-tight">
            ГРАФИЧЕСКИЙ
            <br />
            ДИЗАЙНЕР
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-sans">
            Создаю минималистичные логотипы и фирменные стили, которые выделяют ваш бренд среди конкурентов
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg font-medium">
              Посмотреть работы
            </Button>
            <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-3 text-lg font-medium">
              Связаться
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-black mb-4">
              Портфолио
            </h2>
            <p className="text-gray-600 text-lg font-sans">
              Избранные проекты по созданию логотипов и фирменного стиля
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-0 bg-white">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gray-100 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2 font-sans uppercase tracking-wide">
                      {project.category}
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-black mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 font-sans text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-black mb-4">
              Услуги
            </h2>
            <p className="text-gray-600 text-lg font-sans">
              Специализируюсь на создании логотипов и фирменного стиля
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-black transition-colors duration-300">
                  <Icon 
                    name={service.icon} 
                    size={32} 
                    className="text-black group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="font-heading text-xl font-semibold text-black mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-sans leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Готов к сотрудничеству
          </h2>
          <p className="text-gray-300 text-lg mb-8 font-sans">
            Обсудим ваш проект и создадим что-то выдающееся
          </p>
          <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-medium">
            Начать проект
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;