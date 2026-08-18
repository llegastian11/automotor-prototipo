export interface Vehicle {
  id: string;
  name: string;
  year: number;
  km: string;
  transmission: string;
  location: string;
  price: string;
  type: 'suv' | 'sedan' | 'pickup' | 'hatchback';
  verifiedLabel: string;
  image: string;
  imageAlt: string;
}

/**
 * Único listado de vehículos del sitio (home y /vehiculos/ comparten esta
 * fuente). Antes existían dos catálogos independientes con datos distintos —
 * ver Fase 4, ítem 04 de la auditoría. Fotos de stock hasta contar con
 * fotografías reales; por eso cada vista que las use debe mostrar la
 * etiqueta "Ejemplo" (ver ExampleBadge.astro).
 */
export const vehicles: Vehicle[] = [
  {
    id: 'toyota-rav4',
    name: 'Toyota RAV4',
    year: 2021,
    km: '42,300 km',
    transmission: 'Automática',
    location: 'Miraflores, Lima',
    price: 'US$ 24,900',
    type: 'suv',
    verifiedLabel: 'Reporte disponible',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'SUV gris en carretera',
  },
  {
    id: 'mazda-3',
    name: 'Mazda 3',
    year: 2020,
    km: '38,100 km',
    transmission: 'Automática',
    location: 'San Borja, Lima',
    price: 'US$ 18,500',
    type: 'sedan',
    verifiedLabel: 'Identidad validada',
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Sedán moderno color plata',
  },
  {
    id: 'toyota-hilux',
    name: 'Toyota Hilux',
    year: 2022,
    km: '55,700 km',
    transmission: '4x4',
    location: 'Arequipa, Arequipa',
    price: 'US$ 31,800',
    type: 'pickup',
    verifiedLabel: 'Reporte disponible',
    image: 'https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Camioneta pick-up en exterior',
  },
  {
    id: 'volkswagen-golf',
    name: 'Volkswagen Golf',
    year: 2019,
    km: '48,900 km',
    transmission: 'Automática',
    location: 'Surco, Lima',
    price: 'US$ 16,900',
    type: 'hatchback',
    verifiedLabel: 'Identidad validada',
    image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Auto compacto rojo',
  },
  {
    id: 'hyundai-tucson',
    name: 'Hyundai Tucson',
    year: 2021,
    km: '31,600 km',
    transmission: 'Automática',
    location: 'Trujillo, La Libertad',
    price: 'US$ 22,400',
    type: 'suv',
    verifiedLabel: 'Reporte disponible',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'SUV negra en paisaje natural',
  },
  {
    id: 'kia-cerato',
    name: 'Kia Cerato',
    year: 2019,
    km: '61,200 km',
    transmission: 'Mecánica',
    location: 'Jesús María, Lima',
    price: 'US$ 15,700',
    type: 'sedan',
    verifiedLabel: 'Identidad validada',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Sedán deportivo oscuro',
  },
];

export interface Testimonial {
  initial: string;
  name: string;
  location: string;
  text: string;
}

/** Ejemplos ilustrativos — no son reseñas reales de usuarios. */
export const testimonials: Testimonial[] = [
  { initial: 'MR', name: 'María R.', location: 'Lima', text: 'La demostración permite entender rápidamente qué revisar antes de avanzar con una compra.' },
  { initial: 'JC', name: 'Jorge C.', location: 'Arequipa', text: 'El resumen por estados hace que la información del vehículo sea mucho más fácil de leer.' },
  { initial: 'AL', name: 'Andrea L.', location: 'Trujillo', text: 'La consulta desde celular se siente directa: placa, acción y resultados en el mismo flujo.' },
];
