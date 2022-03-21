import React from 'react'
import { Link } from 'gatsby'
import Language from './language'

const Layout: React.FC = ({ location, title, children }) => {
  const rootPaths = ['/', '/en/']
  const isRootPath = rootPaths.includes(location.pathname)
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        {header} <Language languages={['pt', 'en']} defaultLang={'pt'} />
      </header>
      <main>{children}</main>
      <footer>
        {new Date().getFullYear()},{` `}
        <a href="https://github.com/rogersanbr/personal-blog-jamstack">
          source code
        </a>
      </footer>
    </div>
  )
}

export default Layout
