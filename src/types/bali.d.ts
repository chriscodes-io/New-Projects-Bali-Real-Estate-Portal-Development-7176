/**
 * Global Type Definitions for New Projects Bali
 */

export interface Project {
    id: string | number;
    slug?: string;
    title: string;
    location: string;
    type: string;
    price: number;
    priceDisplay: string;
    yield: string;
    status: 'Off-plan' | 'Under Construction' | 'Completed' | string;
    images: string[];
    description?: string;
    features?: string[];
    amenities?: Array<{
        name: string;
        icon: string;
        description: string;
    }>;
    developer?: string;
    completionDate?: string;
    units?: number;
}

export interface Lead {
    id?: string;
    projectId: string | number;
    projectTitle: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    status: 'new' | 'contacted' | 'qualified' | 'lost' | 'manual_review';
    createdAt: string;
}

export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    readTime: string;
    category: string;
    featuredImage: string;
    author: string;
    authorImage?: string;
}
