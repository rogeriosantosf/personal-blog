const React = require("react")
const gatsby = jest.requireActual("gatsby")

const dataMock = {
    site: {
        siteMetadata: {
            title: 'string'
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

module.exports = {
    ...gatsby,
    graphql: jest.fn(),
    Link: jest.fn().mockImplementation(
        // these props are invalid for an `a` tag
        ({
            activeClassName,
            activeStyle,
            getProps,
            innerRef,
            partiallyActive,
            ref,
            replace,
            to,
            ...rest
        }) =>
            React.createElement("a", {
                ...rest,
                href: to,
            })
    ),
    StaticQuery: jest.fn().mockImplementation(dataMock),
    useStaticQuery: jest.fn().mockImplementation(() => dataMock),
}