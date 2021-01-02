import React from 'react';
import { render, screen } from "@testing-library/react"
import IndexPage from "../../src/pages"

describe('Home', () => {
    test('shows home content', () => {
        render(<IndexPage />)

        expect(screen.getByText('Roger Santos')).toBeInTheDocument()
    })
})