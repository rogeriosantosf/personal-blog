import { Link } from 'gatsby'
import React from 'react'

type DataProps = {
  languages: Array<string>
}

const Language: React.FC<DataProps> = ({ languages }) => {
  const toLink = (lang: string, index: number) => {
    const separator = index == 0 ? '' : '|'
    return (
      <Link key={lang} to={lang}>
        {separator} {lang}
      </Link>
    )
  }

  return <div>{languages.map(toLink)}</div>
}

export default Language
