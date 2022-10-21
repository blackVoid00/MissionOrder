import React from 'react'
const Test = () => {
  return (
    <DivP>
    <DivP1>
           <DivTitle>
              <DivIn>
               <Label>Projet</Label>
               <Input type="text" placeholder="Entrer le projet"></Input>
              </DivIn>
           </DivTitle>
           <DivForm>
            <DivIn>
                <Label>Date Départ</Label>
                <Input type="date"></Input>
           </DivIn>
            <DivIn>
                <Label>Date Retour</Label>
                <Input type="date"></Input>
            </DivIn>
            <DivIn>
                <Label>Lieu</Label>
                <Input type="text" placeholder="Entrer le lieu "></Input>
            </DivIn>
           </DivForm>
      
    </DivP1>
    <DivP2>


    </DivP2>
  </DivP>
  )
}

export default Test