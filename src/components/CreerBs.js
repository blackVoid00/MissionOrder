import React from 'react'

import styles from 'styled-components'


const MainDiv = styles.div`
display:flex;
width:100%;
margin-left:10%;
margin-top:10%;
`
const Div = styles.div`
display:flex;
border:2px solid black;

`
const Div2 = styles.div`
margin-left: 90px;
display:inline-block;
border:2px solid black;
width:100%;
height:400px;
background-color:#1c539b;
justify-content:space-between;
`
const H1 = styles.h1`
font-size:44px !important;
color:black;
margin-left:90px;
margin-top:50px;
float: left;
`
const SousDiv1=styles.div`
display:inline-block;
margin-left: 10px;
margin-top: 50px
`

const SousDiv2=styles.div`
display:inline-block;
margin-left: 50px;
margin-top: 50px;
`

const DivInput=styles.div`
display:flex;
margin-top: 20px;
margin-left: 50px;
`

const Label=styles.label`
display: inline-block;
width: 160px;
font-weight:bold !important;
`


const Input=styles.input`
margin-right:50px;
margin-bottom:10px;
margin-top:10px;
height:30px;
width:300px;
text-align: left !important;
border: 10px solid transparent  !important;
border-radius:2px  !important;
&:focus{
outline: none  !important;
}
`
const Button=styles.button`
position: relative;
border-width: 0px;
border-style: solid;
background-color:#B0C4DE ;
font-weight:bold !important;
font-weight:bold ;
box-shadow: 0px 4px 36px rgba(0, 0, 0, 0.25);
width:140px;
height:30px;
margin-left:400px;
margin-right:40px;
margin-top:100px;
text-align:center !important;
cursor:pointer;
&:focus{
outline: none  !important;
}
`

const CreerBs = () => {
  return (
   <MainDiv>
    <Div2>
    <DivInput>
            <Label>Numero Bon de Caisse</Label>
             <Input type="text"></Input>
        </DivInput>
        <DivInput>
            <Label>Date</Label>
             <Input type="date"></Input>
        </DivInput>
        <DivInput>
            <Label>Bénéficiaire</Label>
             <Input type="text"></Input>
        </DivInput>
        <DivInput>
            <Label>Libellé</Label>
             <Input type="text"></Input>
        </DivInput>
    </Div2>
    <Div2>
    <DivInput>
            <Label>Crédit</Label>
             <Input type="text"></Input>
    </DivInput>
    <DivInput>
            <Label>Solde</Label>
             <Input type="text"></Input>
        </DivInput>
      <Button>Create</Button>
    </Div2>
   </MainDiv>
  )
}

export default CreerBs