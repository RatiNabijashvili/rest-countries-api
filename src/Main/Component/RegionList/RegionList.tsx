import React from 'react'
import Styles from './RegionList.module.css'

interface IProps {
  region: string
  style: string
  click: () => void
}

const RegionList = (props: IProps) => {
  return (
    <li
      style={{ color: props.style }}
      className={Styles['region-list']}
      onClick={props.click}
    >
      {props.region}
    </li>
  )
}

export default RegionList
