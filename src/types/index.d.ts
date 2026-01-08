/**
 * Type definitions for the New Projects Bali real estate portal
 * 
 * These types define the data structures used across the application
 * for properties, blog posts, and user-related data.
 */

/**
 * Property/Development status
 */
export type PropertyStatus = 'Off-plan' | 'Now Selling' | 'Under Construction' | 'Completed' | 'Now Open';

/**
 * Property type
 */
export type PropertyType = 'Villa' | 'Apartment' | 'Land' | 'Resort Suite' | 'Townhouse';

/**
 * Currency type
 */
export type Currency = 'USD' | 'AUD' | 'IDR';

/**
 * Main Project/Development interface
 * Represents a property listing in the portal
 */
export interface Project {
    /** Unique identifier for the project */
    id: string;

    /** Display title of the property */
    title: string;

    /** Location name (e.g., "Lombok", "Bali (Seminyak)") */
    location: string;

    /** Numeric price value */
    price: number;

    /** Formatted price string for display (e.g., "From $450,000") */
    priceDisplay?: string;

    /** Currency code */
    currency: Currency;

    /** Property type */
    type: PropertyType;

    /** Development status */
    status: PropertyStatus;

    /** Expected completion date (e.g., "Q4 2026", "2027") */
    completion: string;

    /** Expected rental yield (e.g., "12-15%", "High Yield") */
    yield: string;

    /** Number of bedrooms */
    beds: number;

    /** Number of bathrooms */
    baths: number;

    /** Building size (e.g., "200 sqm") */
    size: string;

    /** Land size (e.g., "350 sqm", "Variable") */
    landSize?: string;

    /** Developer company name */
    developer: string;

    /** Full description of the property */
    description: string;

    /** List of property features/amenities */
    features: string[];

    /** Array of image URLs */
    images: string[];

    /** Optional ROI percentage (numeric) */
    roi?: number;

    /** URL-friendly slug (optional, derived from id) */
    slug?: string;
}

/**
 * Blog post interface
 */
export interface BlogPost {
    /** Unique identifier */
    id: string;

    /** URL-friendly slug */
    slug: string;

    /** Post title */
    title: string;

    /** Post category (e.g., "Market Analysis", "Investment Tips") */
    category: string;

    /** Author name */
    author: string;

    /** Author profile image URL */
    authorImage?: string;

    /** Publication date string */
    date: string;

    /** Estimated read time (e.g., "5 min read") */
    readTime: string;

    /** Short excerpt/summary */
    excerpt: string;

    /** Featured image URL */
    featuredImage?: string;

    /** Full HTML content */
    content: string;
}

/**
 * Lead/Contact form submission
 */
export interface LeadSubmission {
    /** Submitter's full name */
    name: string;

    /** Email address */
    email: string;

    /** Phone number (optional) */
    phone?: string;

    /** Message content */
    message: string;

    /** Type of inquiry */
    inquiryType?: 'Investor' | 'Developer' | 'Agent' | 'Support';

    /** Related property ID (optional) */
    propertyId?: string;
}

/**
 * User authentication context
 */
export interface AuthUser {
    /** User email */
    email: string;

    /** User's display name */
    name: string;

    /** User role */
    role: 'admin' | 'developer' | 'user';
}

/**
 * Filter state for developments page
 */
export interface DevelopmentFilters {
    location: string;
    priceRange: string;
    type: string;
    status: string;
}
