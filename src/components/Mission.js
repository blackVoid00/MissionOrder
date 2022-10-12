import React, { useState } from 'react'
import styles from "styled-components"
import MissionComponent from './MissionComponent'

                        
const GlobalMain=styles.div`
    display:inline-block;
    margin-top:50px;
    width:100%;

`
const Mission = () => {
  return (
        <GlobalMain>
        <MissionComponent></MissionComponent>
        </GlobalMain>
  )
}

export default Mission