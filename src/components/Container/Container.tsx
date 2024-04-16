import React from 'react'
import style from './container.module.scss'

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children } : ContainerProps) => (
  <div className={style.container}>
    {children}
  </div>
)

