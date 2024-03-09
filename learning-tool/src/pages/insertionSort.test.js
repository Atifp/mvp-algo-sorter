import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import InsertionSort from './InsertionSort';

describe('InsertionSort Component', () => {
    test('renders Insertion Sort title', async () => {
        render(
            <MemoryRouter>
                <InsertionSort />
            </MemoryRouter>
        );
        const titleElements = await screen.findAllByText(/Insertion Sort/i);

        // Check that at least one element with the text "Insertion Sort" exists
        expect(titleElements.length).toBeGreaterThan(0);
    });

    test('renders input array buttons', () => {
        render(
            <MemoryRouter>
                <InsertionSort />
            </MemoryRouter>
        );
        const inputArrayButton = screen.getByText(/Input Array/i);
        expect(inputArrayButton).toBeInTheDocument();
    });

    test('renders generate array button', () => {
        render(
            <MemoryRouter>
                <InsertionSort />
            </MemoryRouter>
        );
        const generateArrayButton = screen.getByText(/Generate Array/i);
        expect(generateArrayButton).toBeInTheDocument();
    });

    test('renders select array button', () => {
        render(
            <MemoryRouter>
                <InsertionSort />
            </MemoryRouter>
        );
        const selectArrayButton = screen.getByText(/Select Array/i);
        expect(selectArrayButton).toBeInTheDocument();
    });

    test('clicking sort button triggers sortArray function', () => {
        render(
            <MemoryRouter>
                <InsertionSort />
            </MemoryRouter>
        );
        const sortButton = screen.getByTestId('sort-button');

        fireEvent.click(sortButton);
    });

    test('clicking step button triggers stepThroughSorting function', () => {
        render(
            <MemoryRouter>
                <InsertionSort />
            </MemoryRouter>
        );
        const stepButton = screen.getByTestId('step-button');

        fireEvent.click(stepButton);
    });
});
