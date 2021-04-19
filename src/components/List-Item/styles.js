import styled, { keyframes } from 'styled-components';

export const close = keyframes`
from {
  opacity:100;
}
to {
    opacity:0;
}
`
export const open = keyframes`
from {
    opacity:0;
}
to {
    opacity:100;
}
`


export const  Container = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    background:#343a40;
    height:60px;
    border-bottom:1px solid lightgray;
    div{
        background:none;
        border:none;
        display:flex;
        align-items:center;
        justify-content:center;
        width:100%;
        height:100%;
        color:white;
 
    }
    div:hover{
        border-bottom:1px solid white;
        color:lightgray;
    }
    span{
        width:30%;
        buttom{
            opacity:${({sideBarState}) => sideBarState ? 0: 100 };
            animation:${({sideBarState}) => sideBarState ? close  : open} 0.40s linear;
        }
    }
`
export const  textOpenSideBar = styled.div`
    width:100%;
div{
    opacity:${({sideBarState}) => sideBarState ? 100: 0 };
    animation:${({sideBarState}) => sideBarState ? open  : close} 0.40s linear;
}
    `
