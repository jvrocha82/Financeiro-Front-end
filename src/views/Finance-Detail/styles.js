import styled, { keyframes } from "styled-components";
export const  Container = styled.div`
    width:100%;
`

export const close = keyframes`
from {
  left:0;
}
to {
  left:-15%;
}
`
export const open = keyframes`
from {
  left:-15%;
}
to {
  left:0;
}
`
export const  SideBar = styled.div`
height:100%;
left:0;
position:absolute;
left:${({sideBarState}) => sideBarState ? '0': '-15% '};
animation:${({sideBarState}) => sideBarState ? open  : close} 0.30s linear;

width:20%;
background:#343a40;
border-right:5px solid #343a40;
background:#343a40;
  button{
    width:100%;
    background:none;
    border:none;
  }
`
export const  SideBarHeader = styled.div`

display:flex;
align-items:center;
justify-content:center;
background:#343a40;
height:60px;
border-bottom:1px solid white;
button{
  width:3%;
  background:none;
  border:none;
  position:fixed;
  left:15px;
  background:lightgray;
  border-radius:50%;
  img{
   
        height:40px;
    }
}

`

