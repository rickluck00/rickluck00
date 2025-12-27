import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, MapPin, Phone, Utensils, Coffee, Wine, Zap, ArrowLeft, MessageCircle, Menu as MenuIcon, Calendar, Users, ChefHat, Mail, Navigation, Award, Heart, Camera } from "lucide-react";
import { useState } from "react";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
}

interface GalleryImage {
  url: string;
  alt: string;
}

interface Testimonial {
  name: string;
  rating: number;
  comment: string;
  date: string;
}

interface RestaurantData {
  id: string;
  name: string;
  type: string;
  description: string;
  image: string;
  story: string;
  chef: string;
  chefDescription: string;
  gallery: GalleryImage[];
  testimonials: Testimonial[];
  address: string;
  phone: string;
  email: string;
  colors: {
    bg: string;
    text: string;
    accent: string;
    button: string;
  };
  whatsappNumber: string;
  whatsappMessage: string;
  menuItems: MenuItem[];
  rating: number;
  price: string;
  location: string;
  hours: string;
}

const restaurantsData: RestaurantData[] = [
  {
    id: "aurora",
    name: "AURORA",
    type: "Moderno Minimalista",
    description: "El diseño minimalista se encuentra con la gastronomía excepcional",
    story: "Aurora nació de la pasión por crear experiencias gastronómicas únicas en un ambiente sereno y elegante. Desde 2018, hemos redefinido la cocina moderna con ingredientes de primera calidad y técnicas innovadoras.",
    chef: "Chef Elena Martínez",
    chefDescription: "Con 15 años de experiencia en restaurantes michelin, Elena combina tradición e innovación en cada plato.",
    image: "https://images.pexels.com/photos/2566037/pexels-photo-2566037.jpeg",
    gallery: [
      { url: "https://images.pexels.com/photos/4577179/pexels-photo-4577179.jpeg", alt: "Interior elegante con ambiente acogedor" },
      { url: "https://images.pexels.com/photos/33618534/pexels-photo-33618534.jpeg", alt: "Chef preparando platos" },
      { url: "https://images.pexels.com/photos/2146546/pexels-photo-2146546.jpeg", alt: "Terraza moderna al atardecer" },
      { url: "https://images.pexels.com/photos/2566037/pexels-photo-2566037.jpeg", alt: "Plato gourmet elegante" }
    ],
    testimonials: [
      { name: "María García", rating: 5, comment: "Una experiencia gastronómica excepcional. El ambiente es perfecto y cada plato es una obra de arte.", date: "15 Enero 2024" },
      { name: "Carlos López", rating: 5, comment: "El mejor restaurante de Madrid. La atención al detalle es impresionante.", date: "22 Diciembre 2023" },
      { name: "Ana Rodríguez", rating: 5, comment: "Celebramos nuestro aniversario aquí y fue inolvidable. Muy recomendado.", date: "8 Febrero 2024" }
    ],
    address: "Calle Serrano 45, 28001 Madrid",
    phone: "+34 91 123 4567",
    email: "reservas@aurora-madrid.com",
    colors: {
      bg: "bg-white",
      text: "text-gray-800",
      accent: "text-gray-600",
      button: "border-gray-300 text-gray-800 hover:bg-gray-50"
    },
    whatsappNumber: "34612345678",
    whatsappMessage: "Hola, me gustaría reservar una mesa en Aurora",
    menuItems: [
      {
        name: "Salmón Glaseado",
        description: "Salmón fresco con glaseado de miel y especias, acompañado de lentejas y espárragos",
        price: "€28",
        image: "https://images.pexels.com/photos/16729168/pexels-photo-16729168.jpeg"
      },
      {
        name: "Risotto de Trufa",
        description: "Cremoso risotto italiano con trufa negra y parmesano envejecido",
        price: "€32",
        image: "https://images.pexels.com/photos/783153/pexels-photo-783153.jpeg"
      },
      {
        name: "Filete de Ternera",
        description: "Corte premium con vegetales de temporada y salsa de vino tinto",
        price: "€42",
        image: "https://images.pexels.com/photos/299348/pexels-photo-299348.jpeg"
      },
      {
        name: "Pasta Artesanal",
        description: "Pasta fresca con pesto de albahaca y queso parmesano",
        price: "€24",
        image: "https://images.pexels.com/photos/1256875/pexels-photo-1256875.jpeg"
      },
      {
        name: "Tarta de Chocolate",
        description: "Decadente postre de chocolate con avellanas y decoración artística",
        price: "€16",
        image: "https://images.pexels.com/photos/12872903/pexels-photo-12872903.jpeg"
      },
      {
        name: "Selección de Vinos",
        description: "Cuidada selección de vinos nacionales e internacionales",
        price: "€8-45",
        image: "https://images.pexels.com/photos/2566037/pexels-photo-2566037.jpeg"
      }
    ],
    rating: 5,
    price: "€€€€",
    location: "Centro, Madrid",
    hours: "19:00 - 00:00"
  },
  {
    id: "rustic",
    name: "🍞 Mesa Rústica",
    type: "Tradicional Rústico",
    description: "Sabores auténticos, recetas tradicionales",
    story: "Mesa Rústica es un homenaje a las tradiciones culinarias españolas. Fundado en 1995 por la familia Hernández, mantenemos vivas las recetas que han pasado de generación en generación.",
    chef: "Chef Antonio Hernández",
    chefDescription: "Tercera generación de cocineros, Antonio preserva las tradiciones familiares con un toque contemporáneo.",
    image: "https://images.pexels.com/photos/33610262/pexels-photo-33610262.jpeg",
    gallery: [
      { url: "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg", alt: "Interior rústico con mesas de madera" },
      { url: "https://images.pexels.com/photos/33618534/pexels-photo-33618534.jpeg", alt: "Cocina tradicional en acción" },
      { url: "https://images.pexels.com/photos/6205763/pexels-photo-6205763.jpeg", alt: "Equipo familiar trabajando" },
      { url: "https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg", alt: "Pan casero recién horneado" }
    ],
    testimonials: [
      { name: "José Fernández", rating: 5, comment: "Como en casa de la abuela. Los sabores tradicionales están perfectamente conservados.", date: "10 Febrero 2024" },
      { name: "Carmen Ruiz", rating: 5, comment: "El cocido madrileño está espectacular. Un lugar auténtico en el corazón de Madrid.", date: "5 Enero 2024" },
      { name: "Pedro Martín", rating: 5, comment: "Vengo desde hace 20 años y la calidad nunca decepciona. Un tesoro gastronómico.", date: "18 Diciembre 2023" }
    ],
    address: "Plaza Mayor 12, 28012 Madrid",
    phone: "+34 91 234 5678",
    email: "info@mesarustica.es",
    colors: {
      bg: "bg-gradient-to-br from-amber-50 to-orange-50",
      text: "text-amber-800",
      accent: "text-amber-700",
      button: "bg-amber-600 text-white hover:bg-amber-700"
    },
    whatsappNumber: "34612345679",
    whatsappMessage: "Hola, quiero reservar en Mesa Rústica para almorzar",
    menuItems: [
      {
        name: "Cordero Asado",
        description: "Tierno cordero asado con hierbas mediterráneas y vegetales de la huerta",
        price: "€35",
        image: "https://images.pexels.com/photos/5191846/pexels-photo-5191846.jpeg"
      },
      {
        name: "Cocido Madrileño",
        description: "Tradicional cocido con garbanzos, chorizo, morcilla y verduras frescas",
        price: "€22",
        image: "https://images.pexels.com/photos/33610262/pexels-photo-33610262.jpeg"
      },
      {
        name: "Pan Casero",
        description: "Pan artesanal horneado diariamente con masa madre tradicional",
        price: "€4",
        image: "https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg"
      },
      {
        name: "Paella Valenciana",
        description: "Auténtica paella con pollo, conejo, verduras y azafrán de La Mancha",
        price: "€18",
        image: "https://images.pexels.com/photos/1256875/pexels-photo-1256875.jpeg"
      },
      {
        name: "Tortilla Española",
        description: "Clásica tortilla de patatas con huevos camperos y cebolla caramelizada",
        price: "€12",
        image: "https://images.pexels.com/photos/783153/pexels-photo-783153.jpeg"
      },
      {
        name: "Vino de la Casa",
        description: "Selección de vinos locales de bodegas familiares",
        price: "€5-20",
        image: "https://images.pexels.com/photos/2566037/pexels-photo-2566037.jpeg"
      }
    ],
    rating: 5,
    price: "€€€",
    location: "Barrio de Salamanca",
    hours: "12:00 - 16:00 / 20:00 - 00:00"
  },
  {
    id: "lumiere",
    name: "LUMIÈRE",
    type: "Alta Gastronomía de Lujo",
    description: "Donde el arte se encuentra con la gastronomía",
    story: "Lumière representa la vanguardia culinaria en Madrid. Inaugurado en 2020, hemos obtenido reconocimientos internacionales por nuestra propuesta gastronómica innovadora y experiencias sensoriales únicas.",
    chef: "Chef Julien Dubois",
    chefDescription: "Formado en los mejores restaurantes de Francia, Julien aporta técnicas de vanguardia y creatividad sin límites.",
    image: "https://images.pexels.com/photos/4226869/pexels-photo-4226869.jpeg",
    gallery: [
      { url: "https://images.pexels.com/photos/4694292/pexels-photo-4694292.jpeg", alt: "Bar íntimo con ambiente sofisticado" },
      { url: "https://images.pexels.com/photos/33618534/pexels-photo-33618534.jpeg", alt: "Chef en cocina de vanguardia" },
      { url: "https://images.pexels.com/photos/4577179/pexels-photo-4577179.jpeg", alt: "Comedor elegante con velas" },
      { url: "https://images.pexels.com/photos/6466301/pexels-photo-6466301.jpeg", alt: "Presentación gourmet exquisita" }
    ],
    testimonials: [
      { name: "Isabella Marchetti", rating: 5, comment: "Una experiencia gastronómica que trasciende lo culinario. Cada plato es una obra de arte.", date: "25 Enero 2024" },
      { name: "Robert Johnson", rating: 5, comment: "Finest dining experience in Madrid. The 12-course tasting menu was absolutely phenomenal.", date: "12 Febrero 2024" },
      { name: "Sofia Andersson", rating: 5, comment: "Lumière sets a new standard for fine dining. Impeccable service and extraordinary flavors.", date: "3 Febrero 2024" }
    ],
    address: "Paseo de la Castellana 89, 28046 Madrid",
    phone: "+34 91 345 6789",
    email: "concierge@lumiere-madrid.com",
    colors: {
      bg: "bg-gradient-to-br from-gray-900 to-black",
      text: "text-white",
      accent: "text-gray-300",
      button: "border-gold text-gold hover:bg-gold hover:text-black"
    },
    whatsappNumber: "34612345680",
    whatsappMessage: "Buenos días, me gustaría reservar una experiencia gastronómica en Lumière",
    menuItems: [
      {
        name: "Menú Degustación 12 Tiempos",
        description: "Experiencia culinaria única con 12 platos de autor y técnicas vanguardistas",
        price: "€180",
        image: "https://images.pexels.com/photos/6466301/pexels-photo-6466301.jpeg"
      },
      {
        name: "Foie Gras de Pato",
        description: "Foie gras de pato con reducción de oporto y microgreens",
        price: "€45",
        image: "https://images.pexels.com/photos/2566037/pexels-photo-2566037.jpeg"
      },
      {
        name: "Caviar Ossetra",
        description: "Caviar Ossetra servido con blinis tradicionales y crème fraîche",
        price: "€85",
        image: "https://images.pexels.com/photos/6466301/pexels-photo-6466301.jpeg"
      },
      {
        name: "Lubina en Costra de Sal",
        description: "Lubina salvaje en costra de sal con aceite de oliva virgen extra",
        price: "€65",
        image: "https://images.pexels.com/photos/16729168/pexels-photo-16729168.jpeg"
      },
      {
        name: "Wagyu A5",
        description: "Wagyu japonés A5 con trufa negra y puré de patata violeta",
        price: "€120",
        image: "https://images.pexels.com/photos/299348/pexels-photo-299348.jpeg"
      },
      {
        name: "Maridaje Premium",
        description: "Selección de vinos y champagnes para acompañar cada plato",
        price: "€95",
        image: "https://images.pexels.com/photos/2566037/pexels-photo-2566037.jpeg"
      }
    ],
    rating: 5,
    price: "€€€€€",
    location: "Chamberí, Madrid",
    hours: "20:00 - 01:00"
  },
  {
    id: "fresh",
    name: "🌮 BOCADOS FRESCOS",
    type: "Casual Moderno",
    description: "Servicio rápido, sabor increíble",
    story: "Bocados Frescos revoluciona la comida rápida con ingredientes frescos y opciones saludables. Desde 2021, somos la opción favorita para quienes buscan comida nutritiva sin sacrificar el sabor.",
    chef: "Chef Lucía Vega",
    chefDescription: "Especialista en cocina saludable y sostenible, Lucía crea menús que nutren cuerpo y alma.",
    image: "https://images.pexels.com/photos/8229884/pexels-photo-8229884.jpeg",
    gallery: [
      { url: "https://images.pexels.com/photos/6151957/pexels-photo-6151957.jpeg", alt: "Café colorido con decoración vibrante" },
      { url: "https://images.pexels.com/photos/6205763/pexels-photo-6205763.jpeg", alt: "Equipo joven y dinámico" },
      { url: "https://images.pexels.com/photos/2146546/pexels-photo-2146546.jpeg", alt: "Terraza moderna y fresca" },
      { url: "https://images.pexels.com/photos/6978186/pexels-photo-6978186.jpeg", alt: "Buddha bowl colorido y saludable" }
    ],
    testimonials: [
      { name: "Andrea Silva", rating: 5, comment: "El mejor lugar para comer sano y rico en Malasaña. Los bowls son increíbles.", date: "20 Febrero 2024" },
      { name: "Miguel Torres", rating: 5, comment: "Comida fresca, rápida y deliciosa. Perfecto para el almuerzo de trabajo.", date: "15 Enero 2024" },
      { name: "Laura Gómez", rating: 5, comment: "Me encanta venir aquí después del gym. Opciones súper saludables y sabrosas.", date: "28 Enero 2024" }
    ],
    address: "Calle Fuencarral 85, 28004 Madrid",
    phone: "+34 91 456 7890",
    email: "hola@bocadosfrescos.com",
    colors: {
      bg: "bg-gradient-to-br from-green-400 to-blue-500",
      text: "text-white",
      accent: "text-green-100",
      button: "bg-yellow-400 text-gray-800 hover:bg-yellow-500"
    },
    whatsappNumber: "34612345681",
    whatsappMessage: "¡Hola! Quiero hacer un pedido en Bocados Frescos",
    menuItems: [
      {
        name: "Tacos de Pescado",
        description: "Tacos de salmón fresco con salsa de lima y hierbas aromáticas",
        price: "€14",
        image: "https://images.pexels.com/photos/29910997/pexels-photo-29910997.jpeg"
      },
      {
        name: "Buddha Bowl",
        description: "Bowl saludable con quinoa, frutas frescas y vegetales de temporada",
        price: "€16",
        image: "https://images.pexels.com/photos/6978186/pexels-photo-6978186.jpeg"
      },
      {
        name: "Smoothie Natural",
        description: "Batido de frutas tropicales con superalimentos y proteína vegetal",
        price: "€8",
        image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg"
      },
      {
        name: "Wrap Vegano",
        description: "Wrap integral con hummus, vegetales frescos y aguacate",
        price: "€12",
        image: "https://images.pexels.com/photos/8229884/pexels-photo-8229884.jpeg"
      },
      {
        name: "Poke Bowl de Atún",
        description: "Atún fresco con arroz integral, edamame y salsa ponzu",
        price: "€18",
        image: "https://images.pexels.com/photos/6978186/pexels-photo-6978186.jpeg"
      },
      {
        name: "Kombucha Artesanal",
        description: "Bebida probiótica fermentada con sabores naturales",
        price: "€6",
        image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg"
      }
    ],
    rating: 5,
    price: "€€",
    location: "Malasaña, Madrid",
    hours: "11:00 - 23:00"
  }
];

export default function Index() {
  const [selectedRestaurant, setSelectedRestaurant] = useState<RestaurantData | null>(null);

  const openWhatsApp = (number: string, message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${number}?text=${encodedMessage}`, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (selectedRestaurant) {
    return (
      <div className={`min-h-screen ${selectedRestaurant.colors.bg} ${selectedRestaurant.colors.text}`}>
        {/* Header del restaurante expandido */}
        <header className="sticky top-0 z-50 backdrop-blur-sm bg-black/20 border-b">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Button 
                variant="ghost" 
                onClick={() => setSelectedRestaurant(null)}
                className={`${selectedRestaurant.colors.text} hover:bg-white/10 flex items-center`}
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Volver
              </Button>
              <div className="flex items-center space-x-6">
                <button 
                  className={`${selectedRestaurant.colors.accent} text-sm hover:text-white transition-colors cursor-pointer`}
                  onClick={() => scrollToSection('menu-section')}
                >
                  MENÚ
                </button>
                <button 
                  className={`${selectedRestaurant.colors.accent} text-sm hover:text-white transition-colors cursor-pointer`}
                  onClick={() => scrollToSection('reservas-section')}
                >
                  RESERVAS
                </button>
                <button 
                  className={`${selectedRestaurant.colors.accent} text-sm hover:text-white transition-colors cursor-pointer`}
                  onClick={() => scrollToSection('contacto-section')}
                >
                  CONTACTO
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Hero section del restaurante */}
        <section className="relative h-screen flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${selectedRestaurant.image})` }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center text-white">
            <h1 className="text-6xl md:text-8xl font-serif mb-6">{selectedRestaurant.name}</h1>
            <p className="text-2xl mb-8 text-white/90">{selectedRestaurant.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className={`${selectedRestaurant.colors.button} px-8 py-4 text-lg flex items-center`}
                onClick={() => scrollToSection('reservas-section')}
              >
                <Calendar className="h-5 w-5 mr-2" />
                Reservar Mesa
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg flex items-center"
                onClick={() => scrollToSection('menu-section')}
              >
                <MenuIcon className="h-5 w-5 mr-2" />
                Ver Menú
              </Button>
            </div>
          </div>
        </section>

        {/* Sección Acerca de */}
        <section id="acerca-section" className="py-20 px-6">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 flex items-center">
                  <Heart className={`h-8 w-8 mr-3 ${selectedRestaurant.colors.accent}`} />
                  Nuestra Historia
                </h2>
                <p className={`text-lg ${selectedRestaurant.colors.accent} mb-6`}>
                  {selectedRestaurant.story}
                </p>
                <div className="border-l-4 border-current pl-6">
                  <h3 className="text-xl font-semibold mb-2">{selectedRestaurant.chef}</h3>
                  <p className={selectedRestaurant.colors.accent}>
                    {selectedRestaurant.chefDescription}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {selectedRestaurant.gallery.slice(0, 4).map((img, index) => (
                  <div 
                    key={index}
                    className="h-32 bg-cover bg-center rounded-lg"
                    style={{ backgroundImage: `url(${img.url})` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Galería */}
        <section id="galeria-section" className="py-20 px-6 bg-black/5">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center">
              <Camera className={`h-8 w-8 mr-3 ${selectedRestaurant.colors.accent}`} />
              Galería
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {selectedRestaurant.gallery.map((img, index) => (
                <div 
                  key={index}
                  className="h-64 bg-cover bg-center rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  style={{ backgroundImage: `url(${img.url})` }}
                  title={img.alt}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Información del restaurante */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(selectedRestaurant.rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <h3 className="font-semibold text-lg mb-2">Valoración</h3>
                <p className={selectedRestaurant.colors.accent}>Excelente</p>
              </div>
              <div className="text-center">
                <MapPin className={`h-8 w-8 mx-auto mb-4 ${selectedRestaurant.colors.accent}`} />
                <h3 className="font-semibold text-lg mb-2">Ubicación</h3>
                <p className={selectedRestaurant.colors.accent}>{selectedRestaurant.location}</p>
              </div>
              <div className="text-center">
                <Clock className={`h-8 w-8 mx-auto mb-4 ${selectedRestaurant.colors.accent}`} />
                <h3 className="font-semibold text-lg mb-2">Horario</h3>
                <p className={selectedRestaurant.colors.accent}>{selectedRestaurant.hours}</p>
              </div>
              <div className="text-center">
                <Users className={`h-8 w-8 mx-auto mb-4 ${selectedRestaurant.colors.accent}`} />
                <h3 className="font-semibold text-lg mb-2">Precio</h3>
                <p className={selectedRestaurant.colors.accent}>{selectedRestaurant.price}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Menú completo con imágenes */}
        <section id="menu-section" className="py-20 px-6 bg-black/5">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-8">
                <ChefHat className={`h-8 w-8 mr-3 ${selectedRestaurant.colors.accent}`} />
                <h2 className="text-4xl font-bold">Nuestro Menú</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {selectedRestaurant.menuItems.map((item, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div 
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <span className="text-xl font-bold text-green-600">{item.price}</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                      <Button 
                        className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center"
                        onClick={() => openWhatsApp(selectedRestaurant.whatsappNumber, `Hola, me gustaría pedir ${item.name} de ${selectedRestaurant.name}`)}
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Pedir por WhatsApp
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section id="testimonios-section" className="py-20 px-6">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center">
              <Award className={`h-8 w-8 mr-3 ${selectedRestaurant.colors.accent}`} />
              Lo que Dicen Nuestros Clientes
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {selectedRestaurant.testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 mr-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">{testimonial.date}</span>
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Sección de Reservas */}
        <section id="reservas-section" className="py-20 px-6 bg-black/5">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 flex items-center justify-center">
              <Calendar className={`h-8 w-8 mr-3 ${selectedRestaurant.colors.accent}`} />
              Reserva tu Mesa
            </h2>
            <p className={`text-xl mb-8 ${selectedRestaurant.colors.accent} max-w-2xl mx-auto`}>
              ¿Listo para una experiencia gastronómica inolvidable? Reserva tu mesa ahora y déjanos crear momentos especiales para ti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg"
                className={`${selectedRestaurant.colors.button} px-12 py-6 text-xl flex items-center`}
                onClick={() => openWhatsApp(selectedRestaurant.whatsappNumber, selectedRestaurant.whatsappMessage)}
              >
                <MessageCircle className="h-6 w-6 mr-3" />
                Reservar por WhatsApp
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="px-12 py-6 text-xl flex items-center"
                onClick={() => window.open(`tel:${selectedRestaurant.phone}`, '_blank')}
              >
                <Phone className="h-6 w-6 mr-3" />
                Llamar Directamente
              </Button>
            </div>
            <p className={`text-sm ${selectedRestaurant.colors.accent}`}>
              También puedes llamarnos al {selectedRestaurant.phone} o enviar un email a {selectedRestaurant.email}
            </p>
          </div>
        </section>

        {/* Información de Contacto */}
        <section id="contacto-section" className="py-20 px-6">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center">
              <Navigation className={`h-8 w-8 mr-3 ${selectedRestaurant.colors.accent}`} />
              Contacto y Ubicación
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className={`h-5 w-5 mr-3 ${selectedRestaurant.colors.accent}`} />
                    <span>{selectedRestaurant.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className={`h-5 w-5 mr-3 ${selectedRestaurant.colors.accent}`} />
                    <span>{selectedRestaurant.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className={`h-5 w-5 mr-3 ${selectedRestaurant.colors.accent}`} />
                    <span>{selectedRestaurant.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className={`h-5 w-5 mr-3 ${selectedRestaurant.colors.accent}`} />
                    <span>{selectedRestaurant.hours}</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6">Cómo Llegar</h3>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <p className="text-gray-600">
                    📍 {selectedRestaurant.address}
                  </p>
                </div>
                <p className={`mt-4 text-sm ${selectedRestaurant.colors.accent}`}>
                  Metro: Estaciones cercanas disponibles. Parking público en la zona.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-lg">
                <Coffee className="h-6 w-6" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                webhosterly
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#ejemplos" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                Ejemplos
              </a>
              <a href="#acerca" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                Acerca
              </a>
              <a href="#contacto" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                Contacto
              </a>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Comenzar
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Páginas Web para Restaurantes
            </span>
            <br />
            <span className="text-gray-800">Que Convierten</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Descubre 4 diseños únicos de páginas web para restaurantes, cada uno creado para mostrar diferentes estilos y enfoques. 
            Desde elegante alta cocina hasta comida casual confortable - encuentra la inspiración perfecta para la presencia digital de tu restaurante.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6"
            onClick={() => document.getElementById('ejemplos')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explorar Ejemplos
          </Button>
        </div>
      </section>

      {/* Restaurant Examples Section */}
      <section id="ejemplos" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            4 Ejemplos Únicos de Páginas Web para Restaurantes
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            
            {restaurantsData.map((restaurant) => (
              <Card 
                key={restaurant.id}
                className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedRestaurant(restaurant)}
              >
                <div className={restaurant.colors.bg}>
                  {/* Imagen del restaurante */}
                  <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: `url(${restaurant.image})` }}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <Badge variant="secondary" className="bg-black/50 text-white border-none">
                        Ver página completa →
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Mini Website Preview */}
                  <div className="p-8 border-b border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`text-2xl font-light ${restaurant.colors.text}`}>{restaurant.name}</div>
                      <div className={`flex space-x-6 text-sm ${restaurant.colors.accent}`}>
                        <span>MENÚ</span>
                        <span>RESERVAS</span>
                        <span>CONTACTO</span>
                      </div>
                    </div>
                    <div className="text-center py-12">
                      <h3 className={`text-4xl font-light ${restaurant.colors.text} mb-4`}>
                        {restaurant.id === 'aurora' && 'Cocina Moderna'}
                        {restaurant.id === 'rustic' && 'De la Granja a la Mesa'}
                        {restaurant.id === 'lumiere' && 'Excelencia Culinaria'}
                        {restaurant.id === 'fresh' && 'Rápido y Fresco'}
                      </h3>
                      <p className={`${restaurant.colors.accent} mb-6`}>{restaurant.description}</p>
                      <Button 
                        className={`inline-flex items-center border px-6 py-2 text-sm transition-colors ${restaurant.colors.button}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          openWhatsApp(restaurant.whatsappNumber, restaurant.whatsappMessage);
                        }}
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        {restaurant.id === 'aurora' && 'RESERVAR MESA'}
                        {restaurant.id === 'rustic' && 'VER MENÚ'}
                        {restaurant.id === 'lumiere' && 'RESERVAR EXPERIENCIA'}
                        {restaurant.id === 'fresh' && 'PEDIR AHORA'}
                      </Button>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary" className={
                        restaurant.id === 'aurora' ? "bg-blue-100 text-blue-700" :
                        restaurant.id === 'rustic' ? "bg-amber-100 text-amber-700" :
                        restaurant.id === 'lumiere' ? "bg-purple-900 text-purple-200" :
                        "bg-green-700 text-green-100"
                      }>
                        {restaurant.id === 'aurora' && <Utensils className="h-3 w-3 mr-1" />}
                        {restaurant.id === 'rustic' && <Coffee className="h-3 w-3 mr-1" />}
                        {restaurant.id === 'lumiere' && <Wine className="h-3 w-3 mr-1" />}
                        {restaurant.id === 'fresh' && <Zap className="h-3 w-3 mr-1" />}
                        {restaurant.type}
                      </Badge>
                      <div className="flex text-yellow-400">
                        {[...Array(restaurant.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold mb-2">
                      {restaurant.id === 'aurora' && 'Diseño Limpio y Elegante'}
                      {restaurant.id === 'rustic' && 'Ambiente Cálido y Acogedor'}
                      {restaurant.id === 'lumiere' && 'Sofisticado y Elegante'}
                      {restaurant.id === 'fresh' && 'Divertido y Energético'}
                    </h4>
                    <p className="text-gray-600 mb-4">
                      {restaurant.id === 'aurora' && 'Perfecto para restaurantes de alta gama que se centran en la estética minimalista, tipografía limpia y espacios en blanco.'}
                      {restaurant.id === 'rustic' && 'Ideal para restaurantes familiares, establecimientos de granja a mesa y cocina tradicional con tonos cálidos y terrosos.'}
                      {restaurant.id === 'lumiere' && 'Perfecto para restaurantes de alta gama, locales con estrellas Michelin y experiencias gastronómicas exclusivas.'}
                      {restaurant.id === 'fresh' && 'Genial para restaurantes casuales rápidos, food trucks y restaurantes modernos dirigidos a demografías más jóvenes.'}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {restaurant.id === 'aurora' && (
                        <>
                          <Badge variant="outline">Diseño Minimalista</Badge>
                          <Badge variant="outline">Tipografía Limpia</Badge>
                          <Badge variant="outline">Profesional</Badge>
                        </>
                      )}
                      {restaurant.id === 'rustic' && (
                        <>
                          <Badge variant="outline">Colores Cálidos</Badge>
                          <Badge variant="outline">Tradicional</Badge>
                          <Badge variant="outline">Familiar</Badge>
                        </>
                      )}
                      {restaurant.id === 'lumiere' && (
                        <>
                          <Badge variant="outline" className="border-gray-600 text-gray-300">Lujo</Badge>
                          <Badge variant="outline" className="border-gray-600 text-gray-300">Sofisticado</Badge>
                          <Badge variant="outline" className="border-gray-600 text-gray-300">Premium</Badge>
                        </>
                      )}
                      {restaurant.id === 'fresh' && (
                        <>
                          <Badge variant="outline" className="border-green-300 text-green-100">Vibrante</Badge>
                          <Badge variant="outline" className="border-green-300 text-green-100">Casual-Rápido</Badge>
                          <Badge variant="outline" className="border-green-300 text-green-100">Moderno</Badge>
                        </>
                      )}
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}

          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">¿Listo para Crear la Página Web de tu Restaurante?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Cada enfoque de diseño sirve a diferentes tipos de restaurantes y audiencias objetivo. 
            Elige el estilo que mejor represente tu marca y experiencia del cliente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white text-blue-600 hover:bg-blue-50 border-white"
              onClick={() => document.getElementById('ejemplos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Todos los Ejemplos
            </Button>
            <Button size="lg" className="bg-blue-800 hover:bg-blue-900">
              Comenzar tu Proyecto
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-lg">
                <Coffee className="h-6 w-6" />
              </div>
              <span className="text-2xl font-bold">webhosterly</span>
            </div>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors cursor-pointer">Privacidad</a>
              <a href="#" className="hover:text-white transition-colors cursor-pointer">Términos</a>
              <a href="#" className="hover:text-white transition-colors cursor-pointer">Contacto</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 webhosterly. Creando hermosas páginas web para restaurantes que convierten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
