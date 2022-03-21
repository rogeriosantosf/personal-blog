import { Link } from 'gatsby'
import React, { useEffect, useState } from 'react'

type DataProps = {
  languages: Array<string>
  defaultLang: string
}

const Language: React.FC<DataProps> = ({ languages, defaultLang }) => {
  const [origin, setOrigin] = useState<string>()
  
  useEffect(() => {
    setOrigin(window.location.origin)
  }, [])

  const toLink = (lang: string, index: number) => {
    const separator = index == 0 ? '' : '|'
    const path = lang === defaultLang ? '' : lang
    const url = `${origin}/${path}`
    return (
      <Link key={lang} to={url}>
        {separator} {lang}{' '}
      </Link>
    )
  }

  return <div>{languages.map(toLink)}</div>
}

export default Language
