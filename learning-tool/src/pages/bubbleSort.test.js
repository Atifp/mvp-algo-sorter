import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react'
import BubbleSort  from './BubbleSort';
import { MemoryRouter } from 'react-router-dom';
import {act} from 'react-test-renderer'

describe('BubbleSort Component', () => {
    test('renders Bubble Sort title', async () => {
        render(
            <MemoryRouter>
                <BubbleSort />
            </MemoryRouter>
        );
        const titleElements = await screen.findAllByText(/Bubble Sort/i);

        // Check that at least one element with the text "Bubble Sort" exists
        expect(titleElements.length).toBeGreaterThan(0);
    });

    test('renders input array buttons', () => {
        render(
            <MemoryRouter>
                <BubbleSort />
            </MemoryRouter>
        );
        const inputArrayButton = screen.getByText(/Input Array/i);
        expect(inputArrayButton).toBeInTheDocument();
    });

    test('renders generate array button', () => {
        render(
            <MemoryRouter>
                <BubbleSort />
            </MemoryRouter>
        );
        const generateArrayButton = screen.getByText(/Generate Array/i);
        expect(generateArrayButton).toBeInTheDocument();
    });

    test('renders select array button', () => {
        render(
            <MemoryRouter>
                <BubbleSort />
            </MemoryRouter>
        );
        const selectArrayButton = screen.getByText(/Select Array/i);
        expect(selectArrayButton).toBeInTheDocument();
    });

    test('clicking sort button triggers sortArrayFully function', async () => {
        render(
            <MemoryRouter>
                <BubbleSort />
            </MemoryRouter>
        );

        const sortButton = screen.getByTestId('sort-button');
        fireEvent.click(sortButton);

        // Wait for the sorting process to complete
        await act(async () => {
            await new Promise((resolve) => setTimeout(resolve, 300 * 12)); // Adjust the timeout based on your sorting duration
        });

        // Stop halfway, array should not be sorted
        const finishedSorting = screen.getByText(/Array is now sorted/i);
        !expect(finishedSorting).toBeInTheDocument();

        const resetButton = screen.getByTestId('reset-button');
        !expect(resetButton).toBeInTheDocument();
    });

    test('clicking step button triggers stepThroughSorting function', () => {
        render(
            <MemoryRouter>
                <BubbleSort />
            </MemoryRouter>
        );
        const stepButton = screen.getByTestId('step-button');

        fireEvent.click(stepButton);
        const startText = screen.getByText(/Running the array against Bubble Sort.../i);
        expect(startText).toBeInTheDocument();

        fireEvent.click(stepButton);
        const secondStep = screen.getByText(/Checking the array and finding the first element/i);
        expect(secondStep).toBeInTheDocument();
    });

    afterAll(() => {
        jest.restoreAllMocks(); // Make sure to restore mocks after all tests
    });
});
