export const company = {
  brand: 'Automotor.pe',
  product: 'PLAQUÉALO',
  tagline: 'Información vehicular para tomar mejores decisiones.',
  legalName: 'AUTOMOTOR PERU',
  ruc: '20615465012',
  contact: {
    /** digits only, with country code — for wa.me links */
    whatsapp: '51923804533',
    whatsappDisplay: '+51 923 804 533',
    email: 'camayapadilla@gmail.com',
  },
  socialLinks: {
    instagram: '',
    facebook: '',
    linkedin: '',
    tiktok: '',
    youtube: '',
  } as Record<string, string>,
  metrics: {
    totalQueries: null as number | null,
    monthlyQueries: null as number | null,
    availableSources: 25,
  },
  /** Set once the site moves off GitHub Pages, so canonicals switch centrally. */
  productionDomain: 'https://automotor.pe',
};
