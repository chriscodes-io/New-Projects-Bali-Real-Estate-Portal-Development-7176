import { createClient } from 'contentful';

const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID || 'placeholder',
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN || 'placeholder',
});

/**
 * Fetches all projects from Contentful
 */
export const getProjects = async () => {
    try {
        const entries = await client.getEntries({
            content_type: 'project',
            order: '-sys.createdAt',
        });
        return entries.items.map(item => ({
            id: item.sys.id,
            slug: item.fields.slug,
            ...item.fields,
            // Map Contentful images to the format expected by the frontend
            images: item.fields.images?.map(img => img.fields.file.url) || [],
        }));
    } catch (error) {
        console.error('Error fetching projects from Contentful:', error);
        return [];
    }
};

/**
 * Fetches a single project by slug
 */
export const getProjectBySlug = async (slug) => {
    try {
        const entries = await client.getEntries({
            content_type: 'project',
            'fields.slug': slug,
            limit: 1,
        });
        if (entries.items.length > 0) {
            const item = entries.items[0];
            return {
                id: item.sys.id,
                ...item.fields,
                images: item.fields.images?.map(img => img.fields.file.url) || [],
            };
        }
        return null;
    } catch (error) {
        console.error(`Error fetching project with slug ${slug}:`, error);
        return null;
    }
};

/**
 * Fetches all blog posts from Contentful
 */
export const getBlogPosts = async () => {
    try {
        const entries = await client.getEntries({
            content_type: 'blogPost',
            order: '-fields.date',
        });
        return entries.items.map(item => ({
            id: item.sys.id,
            slug: item.fields.slug,
            ...item.fields,
            featuredImage: item.fields.featuredImage?.fields.file.url,
            authorImage: item.fields.authorImage?.fields.file.url,
        }));
    } catch (error) {
        console.error('Error fetching blog posts from Contentful:', error);
        return [];
    }
};

/**
 * Fetches a single blog post by slug
 */
export const getBlogPostBySlug = async (slug) => {
    try {
        const entries = await client.getEntries({
            content_type: 'blogPost',
            'fields.slug': slug,
            limit: 1,
        });
        if (entries.items.length > 0) {
            const item = entries.items[0];
            return {
                id: item.sys.id,
                ...item.fields,
                featuredImage: item.fields.featuredImage?.fields.file.url,
                authorImage: item.fields.authorImage?.fields.file.url,
            };
        }
        return null;
    } catch (error) {
        console.error(`Error fetching blog post with slug ${slug}:`, error);
        return null;
    }
};

export default client;
