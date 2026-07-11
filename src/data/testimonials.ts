export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
  /** relative filename inside Photos_Expande/, or null to fall back to an initials avatar */
  image: string | null;
}

export const testimonials: Testimonial[] = [
  {
    name: 'María Chávez',
    role: 'Propietaria · Expande de Lambayeque I',
    quote:
      'Compré mi lote en Expande de Lambayeque I y fue la mejor decisión. Todo el proceso fue transparente y con los documentos en regla en SUNARP.',
    rating: 5,
    image: 'Testimonio-de-clientes-03.jpeg',
  },
  {
    name: 'José Ramírez',
    role: 'Inversionista · Chiclayo',
    quote:
      'La asesoría fue personalizada de principio a fin. Me explicaron cada detalle de la inversión y me sentí acompañado en todo momento.',
    rating: 5,
    image: 'testimonio-de-clientes.jpeg',
  },
  {
    name: 'Lucía Fernández',
    role: 'Propietaria · Cajamarca',
    quote:
      'Elegí Expande por su trayectoria y no me equivoqué. Ubicación estratégica, precios justos y un terreno que vale más cada día.',
    rating: 5,
    image: null,
  },
];
