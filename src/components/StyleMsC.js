import styles from "styled-components"
import image from "../assets/upload.png"

export const MainM=styles.div`
display:flex;
justify-content:center;
`
export const H1=styles.h1`
color:black;
font-weight:bold !important;
font-size:30px !important;

`
export const MainDiv=styles.div`
display:inline-block;
justify-content:center;
border:2px solid black;
margin-right:0px;
margin-top:1%;
width:100vh;
background-color:#1c539b;
`
export const MainDiv2 = styles.div`
display:inline-block;
background-color:#1c539b;
border:2px solid black;
margin-left:1%;
margin-top:1%;
width:60vh;
height:700px;
`
export const Div1 =styles.div`
margin-top:5%;
display:flex;
justify-content:space-between;
`
export const SousDiv1=styles.div`
display:grid;
margin-left:20px
`
export const SousDiv2=styles.div`
display:grid;
margin-right:50px;
margin-left:100px;
`
export const Div2 =styles.div`  
margin-top:50px;
display:flex;
justify-content:space-between;
height:50vh;
`
export const Div3 =styles.div`  
margin-top:5%;
display:flex;
justify-content:space-between;
height:50vh;
`

export const InputM=styles.input`
margin-bottom:10px;
margin-top:10px;
height:40px;
width:200px;
text-align: left !important;
border: 10px solid transparent  !important;
border-radius:2px  !important;
&:focus{
outline: none  !important;
}
`
export const Description=styles.div`
margin-top:50px;

`
export const InputD=styles.input`
margin-top:10px;
height:60px;
width:250px;
text-align: left !important;
border: 10px solid transparent  !important;
border-radius:2px  !important;
&:focus{
outline: none  !important;
}
`
export const InputMFILE=styles.input`
opacity: 0;
-moz-opacity: 0;
filter:progid:DXImageTransform.Microsoft.Alpha(opacity=0);
cursor:pointer !important;
`
export const Wrapper=styles.div`
height: 32px;
width: 40px;
overflow: hidden;
background-image:url(${image});
border:1px solid black !important;
`
export const LabelM=styles.label`
display: inline-block;
width: 160px;
font-weight:bold !important;
`
export const LabelMFile=styles.label`
margin-left:10px;
margin-top:10px;
font-weight:bold !important;
`
export const DivM=styles.div`
display:flex;
`
export const ButtonM=styles.button`
position: relative;
border-width: 0px;
border-style: solid;
background-color:#B0C4DE ;
font-weight:bold !important;
cursor: pointer;
font-weight:bold ;

width:140px;
height:30px;
margin-left:55%;
margin-top:10%;
`
export const Final=styles.div`
margin-top:50px;
`
export const InputModal=styles.input`
margin-bottom:10px;
margin-top:10px;
height:30px;
width:300px;
text-align: left !important;
border: 1px solid black !important;
border-radius:2px  !important;
&:focus{
outline: none  !important;
}
`
export const LabelModal=styles.label`
display: inline-block;
width: 160px;
font-weight:bold !important;
color:black !important;
`
export const Div1M=styles.div`
display: inline-block;
margin-right:100px ! important;
`
export const Div2M=styles.div`
display:inline-block;
margin-left:50px;
`
