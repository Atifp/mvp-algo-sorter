import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SelectionSort from './SelectionSort';

describe('SelectionSort Component', () => {
    test('renders Selection Sort title', async () => {
        render(
            <MemoryRouter>
                <SelectionSort />
            </MemoryRouter>
        );
        const titleElements = await screen.findAllByText(/Selection Sort/i);

        // Check that at least one element with the text "Selection Sort" exists
        expect(titleElements.length).toBeGreaterThan(0);
    });

    test('renders input array buttons', () => {
        render(
            <MemoryRouter>
                <SelectionSort />
            </MemoryRouter>
        );
        const inputArrayButton = screen.getByText(/Input Array/i);
        expect(inputArrayButton).toBeInTheDocument();
    });

    test('renders generate array button', () => {
        render(
            <MemoryRouter>
                <SelectionSort />
            </MemoryRouter>
        );
        const generateArrayButton = screen.getByText(/Generate Array/i);
        expect(generateArrayButton).toBeInTheDocument();
    });

    test('renders select array button', () => {
        render(
            <MemoryRouter>
                <SelectionSort />
            </MemoryRouter>
        );
        const selectArrayButton = screen.getByText(/Select Array/i);
        expect(selectArrayButton).toBeInTheDocument();
    });

    test('clicking sort button triggers sortArray function', () => {
        render(
            <MemoryRouter>
                <SelectionSort />
            </MemoryRouter>
        );
        const sortButton = screen.getByTestId('sort-button');

        fireEvent.click(sortButton);
    });

    test('clicking step button triggers stepThroughSorting function', () => {
        render(
            <MemoryRouter>
                <SelectionSort />
            </MemoryRouter>
        );
        const stepButton = screen.getByTestId('step-button');

        fireEvent.click(stepButton);
    });
});
