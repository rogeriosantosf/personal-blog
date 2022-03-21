import { Link } from 'gatsby'
import React from 'react'

type DataProps = {
  languages: Array<string>
  defaultLang: string,
}

const Language: React.FC<DataProps> = ({ languages, defaultLang }) => {
  const toLink = (lang: string, index: number) => {
    const separator = index == 0 ? '' : '|'
    const path = lang === defaultLang ? '' : lang
    const url = `${window.location.origin}/${path}`
    return (
      <Link key={lang} to={url}>
        {separator} {lang} {' '}
      </Link>
    )
  }

  return <div>{languages.map(toLink)}</div>
}

export default Language
