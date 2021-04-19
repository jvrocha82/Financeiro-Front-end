import styled, { keyframes } from "styled-components";
export const close = keyframes`
from {
    width:70%;
}
to {
    width:85%;
}
`
export const open = keyframes`
from {
    width:85%;
}
to {
    width:70%;
}
`
export const Container = styled.div`
    width:${({ sideBarState }) => sideBarState ? '70%' : '85% '};
    animation:${({ sideBarState }) => sideBarState ? open : close} 0.30s linear;
    height:600px;
    float:right;
    margin:3% 5% 0 0;
    #teste{
        position: sticky; 
        top: 10px;
    }
`
export const HeaderTable = styled.div`
width:100%;
background:lightgray;
height:50px;
display:flex;
align-items:center;
justify-content:center;
font-size:20px;
font-weight:900;
  
`
export const Table = styled.div`

#table{
    position:relative;
    border-collapse: collapse;
    border:1px solid black;
    display:inline-block;
    overflow-y:auto;
    height:600px;
    width:100%;
    text-align:center;
    thead{
        tr{
        background:blue;
        th{
            width:20%;
            position: sticky; 
            top: 0px;
            background:gray;
            height:40px;
            }
        }
    }
 
    td{
        border-bottom:1px solid black;
        height:50px;
    }
}

`
