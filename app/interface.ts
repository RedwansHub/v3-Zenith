export interface HomepageContent {
    id: number;
    imageUrl: {
        url: string
    };
    name: string;
    description: string;
    slug: string;
  }
export interface AboutContent {
    id: number;
    title: string;
    description: string;
    images: any;
    // descriptionSo: string;
    }
    
export interface IntroStructure {
    headingEn: string;
  }
export interface Contact02Structure {
    id: any;
    title: string;
    desc: string;
}
export interface ProcessStructure {
    title: string;
    paragraph: string;
}
export interface PhilosStructure {
      id: any;
      title: string;
      heading: string;
      description: string;
      images: any;
}

export interface FooterStructure {
    logo: any;
    heading: string;
    description: string;
}
export interface ServStructure {
    title: string;
    description: string;
}
export interface FAQStructure {
    id: number;
    question: string;
    answer: string;
}
export interface ValueStructure {
    id: number;
    title: string;
    description: string;
}
export interface ServiceStructure {
    id: number;
    title: string;
    description: string;
    subDescription: string;
    icon: {
        url: any
    };
    image: {
        url: any
    };
}
export interface ServiceSkillStructure {
    id: any;
    title: string;
    role: string;
    description: string;
}
export interface contactStructure {
    title: string;
    office: string;
    email: string;
    linkedin: string;
    number: string;
    instagram: string;
    whatsapp: string;
}
export interface clientStructure {
    id: string;
    name: string;
    description: string;
    image: {
        url: string
    };
}
  