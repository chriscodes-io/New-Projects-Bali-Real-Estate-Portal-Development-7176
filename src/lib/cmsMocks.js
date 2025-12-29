/**
 * CMS Mocking Layer
 * Provides fallback data for Contentful functions when API keys are missing.
 */

import { PROJECTS } from '../constants/projects';

export const mockCms = {
    getProjects: async () => {
        console.log("[CMS Mock] Fetching projects...");
        return PROJECTS.map(p => ({
            ...p,
            id: p.id.toString(),
            images: p.images || []
        }));
    },

    getProjectBySlug: async (slug) => {
        console.log(`[CMS Mock] Fetching project by slug: ${slug}`);
        return PROJECTS.find(p => p.slug === slug) || null;
    },

    getBlogPosts: async () => {
        return [
            {
                id: '1',
                slug: 'bali-real-estate-trends-2024',
                title: 'Bali Real Estate Trends 2024',
                excerpt: 'A deep dive into the soaring property prices in Bali...',
                date: '2024-03-15',
                category: 'Market Analysis'
            }
        ];
    }
};
