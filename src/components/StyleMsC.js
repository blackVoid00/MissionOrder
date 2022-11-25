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

margin-right:0px;
margin-top:1%;
width:100vh;
background-color:#1c539b;
`
export const MainDiv2 = styles.div`
display:inline-block;
background-color:#1c539b;
margin-top:1%;
width:70vh;
height:700px;
` 

export const SousDiv1=styles.div`
display:grid;
margin-left:50px
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
height:60vh;
`
export const Div3 =styles.div`  
margin-top:5%;
display:flex;
height:auto;
`
export const Div1 =styles.div`
display:inline-block !important;
padding:5px 5px 5px 5px;
margin-top:10px;
`
export const Select=styles.select`
margin-bottom:20px;
margin-top:10px;
margin-right:10px;
height:35px !important;
width:200px;
font: inherit;
border: 2px solid #F0F0F0;
outline: 0;
&:focus{
outline: none  !important;
}
text-align:center !important;
`
export const LabelM=styles.label`
display: inline-block;
width: ${props=>props.w?"150px":"170px"};
font-weight:bold !important;
color:${props=>props.l? "#1c539b":"white"};
margin-left:20px;
`
export const LabelR=styles.label`
display: inline-block;
width:150px;
font-weight:bold !important;
color:#1c539b !important;
margin-left:20px;
`
export const Label1=styles.label`
display: inline-block;
width:60px;
font-weight:bold !important;
color:#1c539b !important;
margin-left:20px;
`
export const Label2=styles.label`
display: inline-block;
width:90px;
font-weight:bold !important;
color:#1c539b !important;

`
export const InputDate=styles.input`
margin-bottom:10px;
margin-top:10px;
margin-right:10px;
height:35px !important;
width:120px;
background:#F0F0F0;
font: inherit;
border: 0;
outline: 0;
&:focus{
outline: none  !important;
}
text-align:left !important;
`
export const InputM=styles.input`
margin-bottom:10px;
margin-top:10px;
margin-right:10px;
height:35px !important;
width: ${props=> props.inDate? "100px":"200px"};
background: ${props=> props.b?"	#F0F0F0" :"#fff"};
font: inherit;
border: 0;
outline: 0;
&:focus{
outline: none  !important;
}
text-align:left !important;
`
export const Description=styles.div`
margin-top:10px;

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

export const LabelMFile=styles.label`
margin-left:10px;
margin-top:10px;
font-weight:bold !important;
`
export const DivM=styles.div`
display:flex;
margin-top:16px;
`
export const ButtonM=styles.button`
position: relative;
border-width: 0px;
border-style: solid;
background-color:${props=>props.color?"#b71c1c":"transparent"} ;
font-weight:bold !important;
cursor: pointer;
font-weight:bold ;
height:30px;
width:${props=>props.w? "200px":""}
margin-left:${props=>props.left? "400px":"0px"};
margin-top:${props=>props.top? " 52px":"5px"};
margin-bottom:${props=>props.bottom? "10px":"0px"};
color:${props=>props.l? "white":"#1c539b"};
`
export const Final=styles.div`
margin-top:0px;
`
export const InputModal=styles.input`
margin-bottom:10px;
margin-top:10px;
height:30px;
width:300px;
text-align: left !important;
border: 1px solid !important;
border-radius:2px  !important;
&:focus{
outline: none  !important;
}
`
export const InputMT=styles.input`

height:30px;
width:100px;
text-align: left !important;
border: 1px solid transparent !important;
border-radius:2px  !important;
&:focus{
outline: none  !important;
}
`
export const InputModalT=styles.input`
margin-bottom:10px;
margin-top:10px;
height:30px;
width:100px;
text-align: left !important;
border: 1px solid !important;
border-radius:2px  !important;
&:focus{
outline: none  !important;
}
`
export const LabelModal=styles.label`
display: inline-block;
width: 160px;
font-weight:bold !important;
color:black!important;
`
export const Div1M=styles.div`
display: inline-block;
margin-right:100px ! important;
`
export const Div2M=styles.div`
display:inline-block;
margin-left:5px;
`
