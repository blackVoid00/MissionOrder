import React from 'react'
import styles from 'styled-components'

const MainDiv = styles.div`
display:inline-block;
`
const DivPT=styles.div`
display:flex;
`
const DivC=styles.div`
display:flex;
`
const DivC2=styles.div`
display:inline-block;
`
const DivF=styles.div`
display:inline-block;
`
const Test1 = () => {
  return (
    <MainDP>
    <DivPT>
        <LabelPT></LabelPT>
        <InputPT></InputPT>
    </DivPT>
    <DivC>
      <DivC2></DivC2>
      <DivF></DivF>
    </DivC>
  
    </MainDP>
  )
}

export default Test1