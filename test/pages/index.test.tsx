import React from 'react';
import { render, screen } from "@testing-library/react"
import BlogIndex from '../../src/pages';

describe('Home', () => {
    test('shows home content', () => {
        render(<BlogIndex data={{}} location={""} />)

        expect(screen.getByText('Roger Santos')).toBeInTheDocument()
    })
})