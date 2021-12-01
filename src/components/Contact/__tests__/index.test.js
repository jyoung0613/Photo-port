import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup)

describe('Contact component', () => {
    // first test
    it('renders', () => {
        render(<Contact />);
    });

    // second test
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Contact />);
        expect(asFragment()).toMatchSnapshot();
    });
    
})

it('renders', () => {
    const { getByTestId } = render(<Contact />)
    expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
    expect(getByTestId('buttontag')).toHaveTextContent('Submit')
})



