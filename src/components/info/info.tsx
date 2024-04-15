import React, { useState, useEffect} from 'react'
import style from './info.module.scss'
import { Highlighter } from '../highlighter/Highlighter';

interface InfoProps {
  selectedLanguage: any;
}

const Info = ({ selectedLanguage }: InfoProps) => {

  const [isShowCode, setIsShowCode] = useState(false);

  
  const [isShowCode2, setIsShowCode2] = useState(false);

  useEffect(() => {
    setIsShowCode(false)
  }, [selectedLanguage]);

  return (
    <div className={style.infoList}>
      <h3 className={style.title}>
        {selectedLanguage?.title}
      </h3>
      <div className={style.tags}>
        {selectedLanguage.tags.map((el, index) => 
          <div key={index} className={style.tag}>
            {el}
          </div>
        )}
      </div>
      <h4 className={style.infoSubTitle}>
        Created: ({selectedLanguage?.creator} by {selectedLanguage?.yearCreated})
      </h4>
      <h4 className={style.infoTitle}>
        Description
      </h4>
      {selectedLanguage?.description.map((el, index) =>
        <p key={index} className={style.infoDescription}>
          {el}
        </p>
      )}

      <div className={style.image}>
        <img src="./2.png" alt="empty" />
      </div>
      <div className={style.code}>
        <button 
          className={style.infoSubTitle} 
          onClick={() => setIsShowCode((prev) => !prev)}
        >
          Show example code
        </button>
        {
          isShowCode &&
          <Highlighter code={selectedLanguage.code} language={selectedLanguage.value}/>
        }
      </div>

      <h3 className={style.infoTitle}>
        Where is it used?
      </h3>
      {selectedLanguage?.usage.map((el, index) =>
        <p key={index} className={style.infoDescription}>
          {el}
        </p>
      )}

      <h3 className={style.infoTitle}>
        Popularity
      </h3>
      <p className={style.infoDescription}>
        {selectedLanguage?.popularity}
      </p>

      <h3 className={style.infoTitle}>
        Here you can find more information
      </h3>
      <ol className={style.list}>
        {selectedLanguage?.informationSources.map((el, index) => 
          <li>
            <a href={el} target='blank'>
              {el}
            </a>
          </li>
        )}
      </ol>
    </div>
  )
}

export default Info