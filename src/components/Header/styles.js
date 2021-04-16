import styled from 'styled-components';

export const  Container = styled.div`
    display:flex;
    width:100%;
    background:#343a40;
    height:60px;
    border-bottom:5px solid ;

`
export const  LeftSide = styled.div`
    width:50%;
    height:100%;

  
    a{
        padding: 3px 0px 0px 20px;
        width:80px;
        display:flex;
        align-items:center;
        height:100%;
        margin:0 5px 0 5px;
        color:white;
        font-size: 17px;
        font-weight:900;
        text-decoration:none; 
        img {
            width:60px;
        }
    }  
    a:hover{
        border-bottom:3px solid white;
        background:#42494f;
    }
    a:active{
        color:lightgray;
    }

`
export const  RightSide = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    padding-right:10px;
    justify-content:flex-end;
    width:50%;
    height:100%;
    color:white;
    
    a{
        padding: 3px 3px 3px 3px;
        display:flex;
        align-items:center;
        height:100%;
        margin:0 5px 0 5px;
        color:white;
        font-size: 17px;
        font-weight:900;
        text-decoration:none; 
    }
    a:hover{
        border-bottom:3px solid white;
        background:#42494f;
    }
    a:active{
        color:lightgray;
    }

`