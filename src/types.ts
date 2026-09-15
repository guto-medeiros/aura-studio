export type ProjectCategory = 'Residencial' | 'Interiores' | 'Hospitality' | 'Comercial';

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  caption: string;
  aspect: 'panoramic' | 'wide' | 'tall' | 'square';
  tag?: string;
}

export interface ProjectSpecs {
  area: string;
  location: string;
  year: string;
  status: string;
  typology: string;
  leadership: string;
  photography?: string;
}

export interface ProjectData {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  year: string;
  location: string;
  status: string;
  area: string;
  tagline: string;
  heroImage: string;
  heroSubtitle: string;
  conceptShort: string;
  materialsList: string[];
  paletteWords: string[];
  specs: ProjectSpecs;
  narrative: {
    concept: {
      title: string;
      body: string[];
      highlight?: string;
    };
    context: {
      title: string;
      body: string[];
    };
    strategy: {
      title: string;
      body: string[];
    };
    materials: {
      title: string;
      body: string[];
      highlight?: string;
    };
    light: {
      title: string;
      body: string[];
    };
    spaces: {
      title: string;
      body: string[];
    };
    outcome: {
      title: string;
      body: string[];
    };
  };
  gallery: GalleryItem[];
  nextProjectSlug: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  headline: string;
  description: string;
  scope: string[];
  materialsApproach: string;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  focus: string;
  image: string;
}
