export type ProjectStatus = 'completado' | 'en-venta' | 'nuevo-lanzamiento';

export interface Project {
  slug: string;
  name: string;
  location: string;
  year: string;
  status: ProjectStatus;
  statusLabel: string;
  description: string;
  mapUrl: string | null;
  image: string;
}

// image paths are relative to this file, resolved via `../../Photos_Expande/...` in components
export const projects: Project[] = [
  {
    slug: 'refugio-sol-y-luna',
    name: 'Refugio Sol y Luna',
    location: 'Jayanca, Lambayeque',
    year: '2015',
    status: 'completado',
    statusLabel: 'Completado',
    description: 'Nuestro primer proyecto de lotización residencial en el valle de Jayanca.',
    mapUrl: null,
    image: 'refugio_sol_luna.webp',
  },
  {
    slug: 'villa-del-sol',
    name: 'Villa del Sol — Etapa I, II y III',
    location: 'La Victoria, Chiclayo',
    year: '2017',
    status: 'completado',
    statusLabel: 'Completado',
    description: 'Tres etapas consolidadas en el corazón de Chiclayo.',
    mapUrl: null,
    image: 'villa-del-sol.webp',
  },
  {
    slug: 'urb-sinai',
    name: 'Urb. SINAI',
    location: 'Carretera a Lambayeque',
    year: '2020',
    status: 'completado',
    statusLabel: 'Completado',
    description: 'Urbanización con acceso estratégico sobre la vía principal.',
    mapUrl: null,
    image: 'foto-proyecto-I-angulo-03.jpeg',
  },
  {
    slug: 'expande-de-lambayeque-i',
    name: 'Expande de Lambayeque I',
    location: 'A 5 min. de la nueva Autopista El Sol',
    year: '2022',
    status: 'en-venta',
    statusLabel: 'En venta · +100 lotes vendidos',
    description: 'Nuestro proyecto más exitoso, con gran potencial de revalorización. Entrega estimada: 24 meses.',
    mapUrl: 'https://maps.app.goo.gl/HXnPTfpt4YS4bgds7',
    image: 'foto-proyecto-I.jpeg',
  },
  {
    slug: 'expande-de-lambayeque-iii',
    name: 'Expande de Lambayeque III',
    location: 'Lambayeque',
    year: 'Jul. 2026',
    status: 'nuevo-lanzamiento',
    statusLabel: 'Nuevo lanzamiento',
    description: 'La continuación de nuestro proyecto más exitoso. Número similar de lotes en condiciones similares.',
    mapUrl: 'https://maps.app.goo.gl/EyjbkMkscMYBYjZi8',
    image: 'drone-etapa-III.jpg',
  },
];

export const stats = [
  { label: 'años en el mercado', value: '+10' },
  { label: 'lotes vendidos', value: '+1 mil' },
  { label: 'proyectos', value: '+5' },
];
