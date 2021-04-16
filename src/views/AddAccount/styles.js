import styled from 'styled-components';

export const  Container = styled.div`
    width:100%;

`
export const Form = styled.div`
 display:flex;
 flex-direction:column;
 align-items:center;


 padding-top:50px;

`
export const FormHeader = styled.div`
width:60%;
display:flex;
align-items:center;
background:LightSteelBlue;
height:60px;
p{
    font-weight:900;
    margin-left:10px;
}
`
export const FormRow = styled.div`
display:flex;
flex-direction:row;
width:60%;
justify-content:space-between;
`
export const FormGroup = styled.div`
display:flex;
flex-direction:column;
width:25%;

p{
    margin-top:20px;
    height:15px;
    border-radius:5px;
}
input{
    font-size:16px;
    padding:10px;
}
select{
    font-size:16px;
    padding:10px;
  
}


`
export const FormGroupDescription = styled.div`
p{
    margin-top:25px;
    height:15 px;
    border-radius:5px;
}
display:flex;
flex-direction:column;
width:62.5%;
input{
    font-size:16px;
    padding:10px;
}

`
export const FormFooter = styled.div`
display:flex;
width:100%;
align-items:center;
justify-content:space-evenly;
margin-top:60px;
button{
    padding:5px;
    width:10%;
}
`
