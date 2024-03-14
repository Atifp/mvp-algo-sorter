import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import InsertionSort from './InsertionSort';
import {act} from 'react-test-renderer'

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

    test('clicking sort button triggers sortArray function', async () => {
        render(
            <MemoryRouter>
                <InsertionSort/>
            </MemoryRouter>
        );
        const sortButton = screen.getByTestId('sort-button');

        fireEvent.click(sortButton);

        // Wait for the sorting process to complete
        await act(async () => {
            await new Promise((resolve) => setTimeout(resolve, 300 * 3)); // Adjust the timeout based on your sorting duration
        });
        // Stop halfway, array should not be sorted
        const findingText = screen.getByText(/Getting the ith element in the array/i);
        expect(findingText).toBeInTheDocument();

        const resetButton = screen.queryByTestId('reset-button');
        expect(resetButton).not.toBeInTheDocument();
    });

    test('clicking step button triggers stepThroughSorting function', () => {
        render(
            <MemoryRouter>
                <InsertionSort />
            </MemoryRouter>
        );
        const stepButton = screen.getByTestId('step-button');

        fireEvent.click(stepButton);
        const startText = screen.getByText(/Running the array against Insertion Sort.../i);
        expect(startText).toBeInTheDocument();

        fireEvent.click(stepButton);
        const secondStep = screen.getByText(/Getting the ith element in the array/i);
        expect(secondStep).toBeInTheDocument();
    });
});
