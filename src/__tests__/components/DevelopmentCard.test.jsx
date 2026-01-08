import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import DevelopmentCard from '../../components/developments/DevelopmentCard';

// Mock useNavigate
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

const mockDevelopment = {
    id: 'test-123',
    title: 'Luxury Villa Seminyak',
    location: 'Seminyak, Bali',
    price: 450000,
    priceDisplay: '$450,000',
    images: ['https://example.com/image1.jpg', 'https://example.com/image2.jpg'],
    type: 'Villa',
    beds: 3,
    baths: 2,
    size: '200 sqm',
    completion: 'Q2 2025',
    yield: '12%',
    roi: 12,
};

const renderCard = (developmentProps = mockDevelopment) => {
    return render(
        <BrowserRouter>
            <DevelopmentCard development={developmentProps} />
        </BrowserRouter>
    );
};

describe('DevelopmentCard', () => {
    beforeEach(() => {
        mockNavigate.mockClear();
    });

    it('renders the development title', () => {
        renderCard();
        expect(screen.getByText('Luxury Villa Seminyak')).toBeInTheDocument();
    });

    it('renders the location', () => {
        renderCard();
        expect(screen.getByText('Seminyak, Bali')).toBeInTheDocument();
    });

    it('renders the price display', () => {
        renderCard();
        expect(screen.getByText('$450,000')).toBeInTheDocument();
    });

    it('renders property type badge', () => {
        renderCard();
        expect(screen.getByText('Villa')).toBeInTheDocument();
    });

    it('renders beds and baths', () => {
        renderCard();
        expect(screen.getByText('3 Beds')).toBeInTheDocument();
        expect(screen.getByText('2 Baths')).toBeInTheDocument();
    });

    it('renders size', () => {
        renderCard();
        expect(screen.getByText('200 sqm')).toBeInTheDocument();
    });

    it('renders completion date', () => {
        renderCard();
        expect(screen.getByText('Q2 2025')).toBeInTheDocument();
    });

    it('renders yield badge', () => {
        renderCard();
        expect(screen.getByText(/12% Yield/)).toBeInTheDocument();
    });

    it('navigates to detail page when View Details is clicked', () => {
        renderCard();
        const button = screen.getByRole('button', { name: /View Details/i });
        fireEvent.click(button);
        expect(mockNavigate).toHaveBeenCalledWith('/development/test-123');
    });

    it('handles missing optional fields gracefully', () => {
        const minimalDevelopment = {
            id: 'minimal-1',
            title: 'Basic Property',
            location: 'Ubud',
            price: 200000,
            type: 'Apartment',
            size: '50 sqm',
            completion: '2024',
            roi: 8,
        };

        renderCard(minimalDevelopment);
        expect(screen.getByText('Basic Property')).toBeInTheDocument();
        expect(screen.getByText('- Beds')).toBeInTheDocument(); // Fallback for missing beds
        expect(screen.getByText('- Baths')).toBeInTheDocument(); // Fallback for missing baths
    });

    it('uses first image from images array', () => {
        renderCard();
        const img = screen.getByAltText('Luxury Villa Seminyak');
        expect(img).toHaveAttribute('src', 'https://example.com/image1.jpg');
    });
});
