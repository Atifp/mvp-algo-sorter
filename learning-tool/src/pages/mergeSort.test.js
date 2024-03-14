import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MergeSort from './MergeSort';
import {act} from 'react-test-renderer'

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

    test('clicking sort button triggers sortArray function', async () => {
        render(
            <MemoryRouter>
                <MergeSort/>
            </MemoryRouter>
        );

        const sortButton = screen.getByTestId('sort-button');

        fireEvent.click(sortButton);

        // Wait for the sorting process to complete
        await act(async () => {
            await new Promise((resolve) => setTimeout(resolve, 200 * 3)); // Adjust the timeout based on your sorting duration
        });
        // Stop halfway, array should not be sorted
        const findingText = screen.getByText(/Recursively call mergeSort on the left and right halves of the array to split them/i);
        expect(findingText).toBeInTheDocument();

        const resetButton = screen.queryByTestId('reset-button');
        expect(resetButton).not.toBeInTheDocument();
    });

    test('clicking step button triggers stepThroughSorting function', () => {
        render(
            <MemoryRouter>
                <MergeSort/>
            </MemoryRouter>
        );
        const stepButton = screen.getByTestId('step-button');

        fireEvent.click(stepButton);
    });
});
