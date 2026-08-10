window.PLAQUEALO_DATA = Object.freeze({
  services: {
    soat: {
      route: 'servicios/soat',
      name: 'SOAT',
      short: 'Cotiza tu SOAT.',
      title: 'Tu SOAT, simple y acompañado.',
      description: 'Solicita una cotización y recibe orientación para continuar por WhatsApp.',
      benefits: ['Atención guiada', 'Solicitud desde celular', 'Datos claros antes de continuar']
    },
    seguro: {
      route: 'servicios/seguro-vehicular',
      name: 'Seguro Vehicular',
      short: 'Protege tu vehículo.',
      title: 'Protección para tu vehículo y tu camino.',
      description: 'Cuéntanos dónde y cómo usas tu vehículo para orientarte hacia una alternativa adecuada.',
      benefits: ['Cotización personalizada', 'Opciones según tipo de uso', 'Asesoría por WhatsApp']
    },
    gps: {
      route: 'servicios/gps',
      name: 'GPS Vehicular',
      short: 'Seguridad y monitoreo.',
      title: 'Ubicación y control cuando más importa.',
      description: 'Solicita información para proteger un vehículo particular o preparar una solución de monitoreo.',
      benefits: ['Monitoreo vehicular', 'Orientación para instalación', 'Escalable a soluciones de flota']
    }
  },
  vehicleCatalog: {
    Toyota: ['Corolla', 'Yaris', 'RAV4', 'Hilux'],
    Hyundai: ['Accent', 'Elantra', 'Tucson', 'Santa Fe'],
    Kia: ['Rio', 'Cerato', 'Sportage', 'Seltos'],
    Mazda: ['Mazda 2', 'Mazda 3', 'CX-3', 'CX-5'],
    Volkswagen: ['Polo', 'Golf', 'T-Cross', 'Tiguan']
  },
  demoVehicles: [
    {name:'Toyota RAV4',year:2021,km:'42,300 km',transmission:'Automática',location:'Miraflores, Lima',price:'US$ 24,900',type:'suv',status:'verified',image:'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=80'},
    {name:'Mazda 3',year:2020,km:'38,100 km',transmission:'Automática',location:'San Borja, Lima',price:'US$ 18,500',type:'sedan',status:'verified',image:'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=900&q=80'},
    {name:'Toyota Hilux',year:2022,km:'55,700 km',transmission:'4x4',location:'Arequipa, Arequipa',price:'US$ 31,800',type:'pickup',status:'sold',image:'https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=900&q=80'}
  ],
  demoTestimonials: [
    {initial:'MR',name:'María R.',location:'Lima',text:'La demostración permite entender rápidamente qué revisar antes de avanzar con una compra.'},
    {initial:'JC',name:'Jorge C.',location:'Arequipa',text:'El resumen por estados hace que la información del vehículo sea mucho más fácil de leer.'},
    {initial:'AL',name:'Andrea L.',location:'Trujillo',text:'La consulta desde celular se siente directa: placa, acción y resultados en el mismo flujo.'}
  ]
});

