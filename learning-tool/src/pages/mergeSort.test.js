import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MergeSort from './MergeSort';

describe('InsertionSort Component', () => {
    test('renders Merge Sort title', async () => {
        render(
            <MemoryRouter>
                <MergeSort />
            </MemoryRouter>
        );
        const titleElements = await screen.findAllByText(/Merge Sort/i);

        // Check that at least one element with the text "Merge Sort" exists
        expect(titleElements.length).toBeGreaterThan(0);
    });

    test('renders input array buttons', () => {
        render(
            <MemoryRouter>
                <MergeSort />
            </MemoryRouter>
        );
        const inputArrayButton = screen.getByText(/Input Array/i);
        expect(inputArrayButton).toBeInTheDocument();
    });

    test('renders generate array button', () => {
        render(
            <MemoryRouter>
                <MergeSort />
            </MemoryRouter>
        );
        const generateArrayButton = screen.getByText(/Generate Array/i);
        expect(generateArrayButton).toBeInTheDocument();
    });

    test('renders select array button', () => {
        render(
            <MemoryRouter>
                <MergeSort />
            </MemoryRouter>
        );
        const selectArrayButton = screen.getByText(/Select Array/i);
        expect(selectArrayButton).toBeInTheDocument();
    });

    test('clicking sort button triggers sortArray function', () => {
        render(
            <MemoryRouter>
                <MergeSort />
            </MemoryRouter>
        );
        const sortButton = screen.getByTestId('sort-button');

        fireEvent.click(sortButton);
    });

    test('clicking step button triggers stepThroughSorting function', () => {
        render(
            <MemoryRouter>
                <MergeSort />
            </MemoryRouter>
        );
        const stepButton = screen.getByTestId('step-button');

        fireEvent.click(stepButton);
    });
});
