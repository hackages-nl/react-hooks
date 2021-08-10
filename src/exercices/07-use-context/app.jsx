import React, { useContext } from 'react'
import english from './translations/en.json';
import french from './translations/fr.json';
import spanish from './translations/sp.json';

const languages = {
  FR: french,
  EN: english,
  SP: spanish
}


const LanguageContext = React.createContext({title: "", description: "", subtitle: ""});

function Display(){
  const data = useContext(LanguageContext)
  return <>
    <h1>{data.title}</h1>
      <p>{data.description}</p>
      <h2>{data.subtitle}</h2>
  </>
}

export const Exercise7 = () => {
  const [language, changeLanguage] = React.useState(english)

  function setLanguage(lang){
    const data = languages[lang];
    changeLanguage(data);
  }
  return (
    <>
    <h1>Change Language</h1>
    <button onClick={() => setLanguage('FR')}>French</button>
    <button onClick={() => setLanguage('SP')}>Spanish</button>
    <button onClick={() => setLanguage('EN')}>English</button>
    <LanguageContext.Provider value={language}>
      <Display/>
    </LanguageContext.Provider>
    </>
  )
}

