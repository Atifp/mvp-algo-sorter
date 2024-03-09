import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Algorithms from './Algorithms';
import {MemoryRouter} from 'react-router-dom'

test('renders Algorithms component', () => {
    render(
        <MemoryRouter>
            <Algorithms />
        </MemoryRouter>
    );
    // Check if the "Choose an algorithm from the following:" header is present
    expect(screen.getByText(/Choose an algorithm from the following:/i)).toBeInTheDocument();

    // Check if each algorithm card is rendered with the correct titles and paths
    expect(screen.getByText(/Bubble Sort/i)).toBeInTheDocument();
    expect(screen.getByText(/Merge Sort/i)).toBeInTheDocument();
    expect(screen.getByText(/Insertion Sort/i)).toBeInTheDocument();
    expect(screen.getByText(/Selection Sort/i)).toBeInTheDocument();
    expect(screen.getByText(/Quiz/i)).toBeInTheDocument();

    // Check if each Card component has an associated image
    expect(screen.getByAltText(/Bubble Sort/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Merge Sort/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Insertion Sort/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Selection Sort/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Quiz/i)).toBeInTheDocument();
});
