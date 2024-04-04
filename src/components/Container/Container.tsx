import React from 'react'
import style from './Container.module.scss'

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children } : ContainerProps) => (
  <div className={style.container}>
    {children}
  </div>
)

export default Container