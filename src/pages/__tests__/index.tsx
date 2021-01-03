import React from 'react';
import { render, screen } from "@testing-library/react"
import BlogIndex from '..';

const dataMock: any = {
    site: {
        siteMetadata: {
            title: 'Roger Santos'
        }
    },
    allMarkdownRemark: {
        nodes: [{
            excerpt: 'string',
            fields: {
                slug: 'string'
            },
            frontmatter: {
                date: '',
                title: 'string',
                description: 'string'
            }
        }]
    }
}

const locationMock: any = {}
const propsMock: any = { data: dataMock, location: locationMock }

describe('BlogIndex tests', () => {
    test('shows home content', () => {
        render(<BlogIndex {...propsMock} />)

        expect(screen.getByText('Roger Santos')).toBeInTheDocument()
    })
})