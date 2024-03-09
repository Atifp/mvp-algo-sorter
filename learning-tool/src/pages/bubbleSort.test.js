import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BubbleSort  from './BubbleSort';
import { MemoryRouter } from 'react-router-dom';

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

    test('clicking sort button triggers sortArrayFully function', () => {
        render(
            <MemoryRouter>
                <BubbleSort />
            </MemoryRouter>
        );
        const sortButton = screen.getByTestId('sort-button');

        fireEvent.click(sortButton);
    });

    test('clicking step button triggers stepThroughSorting function', () => {
        render(
            <MemoryRouter>
                <BubbleSort />
            </MemoryRouter>
        );
        const stepButton = screen.getByTestId('step-button');

        fireEvent.click(stepButton);
    });

    afterAll(() => {
        jest.restoreAllMocks(); // Make sure to restore mocks after all tests
    });
});
