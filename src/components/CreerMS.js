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
width:500px;
height:400px;
`
const Div2 = styles.div`
margin-left: 90px;
display:flex;
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

const CreerMS = () => {
  return (
    <>
    <MainDiv>
    {/* <Div>
     <H1>Nouvelle Mission</H1>
    </Div> */}
    <Div2>
        <SousDiv1>
        <DivInput>
        <Label>Nom</Label>
        <Input></Input>
      </DivInput><DivInput>
        <Label>Prenom</Label>
        <Input></Input>
      </DivInput><DivInput>
        <Label>Date</Label>
        <Input type="date"></Input>
      </DivInput>
        </SousDiv1>

        <SousDiv2>
        <DivInput>
        <Label>Matricule</Label>
        <Input></Input>
      </DivInput><DivInput>
        <Label>Numero Mission</Label>
        <Input></Input>
      </DivInput><DivInput>
        <Label>Bon de Caisse</Label>
        <Input></Input>
      </DivInput>
        </SousDiv2>
      
    </Div2>
    </MainDiv>
    </>
  )
}

export default CreerMS