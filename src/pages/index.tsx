import * as React from "react"
import Heading1 from "../components/heading/heading"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

// markup
const IndexPage: React.FC = () => {
  return (
    <main style={pageStyles}>
      <title>Roger Santos tech crafs</title>
      <Heading1>
        Roger Santos
      </Heading1>
    </main>
  )
}

export default IndexPage
