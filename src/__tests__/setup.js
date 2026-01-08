import '@testing-library/jest-dom';

// Mock window.matchMedia for responsive component tests
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => { },
        removeListener: () => { },
        addEventListener: () => { },
        removeEventListener: () => { },
        dispatchEvent: () => { },
    }),
});

// Mock IntersectionObserver for lazy loading tests
class MockIntersectionObserver {
    constructor(callback) {
        this.callback = callback;
    }
    observe() { }
    unobserve() { }
    disconnect() { }
}

window.IntersectionObserver = MockIntersectionObserver;

// Mock scrollTo
window.scrollTo = () => { };
