import { useEffect, useState } from 'react'
import Select from 'react-select';
import { languagesOptions, languagesDetails } from '../../shared/data';

import style from './Content.module.scss'
import { Highlighter } from './../Highlighter/Highlighter';

const Content = () => {

  const [selectValue, setSelectValue] = useState(null);
  const [isShowCode, setIsShowCode] = useState(false);

  const handleChangeSelect = (value) => {
    console.log(value)
    setSelectValue(value)
  }

  useEffect(() => {
    setIsShowCode(false);
  }, [selectValue])
  
  const selectedLanguage = selectValue && 
    languagesDetails.find(el => el.value === selectValue.value)

  return (
    <div className={style.content}>
      <h1 className={style.title}>Here you can get information about each programming language</h1>
      <div className={style.info}>
        <Select
          placeholder="Choose a programming language"
          name="color"
          options={languagesOptions}
          isSearchable={false}
          value={selectValue}
          onChange={handleChangeSelect}
        />
        { 
          selectedLanguage &&
          <div className={style.infoList}>
            <h3 className={style.infoTitle}>
              {selectedLanguage?.title}
            </h3>
            <h4 className={style.infoSubTitle}>
              Created: ({selectedLanguage?.creator} by {selectedLanguage?.yearCreated})
            </h4>
            <p className={style.infoDescription}>
              {selectedLanguage?.description}
            </p>
            <h4 className={style.infoSubTitle}>
              Created: ({selectedLanguage?.creator} by {selectedLanguage?.yearCreated})
            </h4>
            <p className={style.infoDescription}>
              {selectedLanguage?.description}
            </p>
            <div className={style.code}>
              <button className={style.infoSubTitle} onClick={() => setIsShowCode((prev) => !prev)}>
                Show example code
              </button>
              {
                isShowCode &&
                <Highlighter code={selectedLanguage.code} language={selectedLanguage.value}/>
              }
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Content