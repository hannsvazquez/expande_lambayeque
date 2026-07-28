import { sanityClient } from 'sanity:client';
import { createImageUrlBuilder } from '@sanity/image-url';
import { defineQuery } from 'groq';

export type GalleryCategory = 'disenos' | 'fotos-reales';

export interface GalleryImage {
  _id: string;
  labelTitle: string;
  alt: string;
  category: GalleryCategory;
  project: string | null;
  uploadedAt: string;
  image: {
    asset: {
      _id: string;
      url: string;
      metadata: {
        lqip: string | null;
        dimensions: { width: number; height: number };
      };
    };
    hotspot?: { x: number; y: number; height: number; width: number };
    crop?: { top: number; bottom: number; left: number; right: number };
  };
}

const builder = createImageUrlBuilder(sanityClient);

export const urlFor = (source: GalleryImage['image']) => builder.image(source);

// Newest first — the page re-sorts client-side when the visitor flips the order.
const GALLERY_IMAGES_QUERY = defineQuery(`
  *[_type == "galleryImage" && defined(image.asset)] | order(uploadedAt desc) {
    _id,
    labelTitle,
    alt,
    category,
    project,
    uploadedAt,
    image {
      asset->{
        _id,
        url,
        metadata { lqip, dimensions { width, height } }
      },
      hotspot,
      crop
    }
  }
`);

export async function getGalleryImages(): Promise<GalleryImage[]> {
  return await sanityClient.fetch(GALLERY_IMAGES_QUERY);
}

const dateFormatter = new Intl.DateTimeFormat('es-PE', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});

/** "27 jul 2026" — `uploadedAt` is a plain YYYY-MM-DD date, so format it in UTC to avoid an off-by-one day. */
export function formatUploadedAt(value: string): string {
  return dateFormatter.format(new Date(`${value}T00:00:00Z`)).replace('.', '');
}
