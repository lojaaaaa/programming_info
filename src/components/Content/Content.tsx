import { useEffect, useState } from 'react'
import Select from 'react-select';
import style from './content.module.scss'
import { languagesOptions, languagesDetails } from '../../shared/data';
import Info from '../info/info';


const Content = () => {

  const [selectValue, setSelectValue] = useState(null);

  const handleChangeSelect = (value) => {
    setSelectValue(value)
  }

  const selectedLanguage = selectValue && 
    languagesDetails.find(el => el.value === selectValue.value)

  return (
    <div className={style.content}>
      <h1 className={style.title}>
        Here you can get information about some programming languages
      </h1>
      <div className={style.info}>
        <Select
          placeholder="Choose a programming language"
          name="color"
          options={languagesOptions}
          isSearchable={false}
          value={selectValue}
          onChange={handleChangeSelect}
        />
        <div className={style.image}>
          <img src="./1.png" alt="empty" />
        </div>
        { 
          selectedLanguage &&
          <Info selectedLanguage={selectedLanguage}/>
        }
      </div>
    </div>
  )
}

export default Content