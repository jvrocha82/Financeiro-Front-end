import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  background: #343a40;
  height: 60px;
  border-bottom: 5px solid;
`
export const LeftSide = styled.div`
  width: 50%;
  height: 100%;

  a {
    padding: 3px 0px 0px 20px;
    width: 80px;
    display: flex;
    align-items: center;
    height: 100%;
    margin: 0 5px 0 5px;
    color: white;
    font-size: 17px;
    font-weight: 900;
    text-decoration: none;
    img {
      width: 60px;
    }
  }
  a:hover {
    border-bottom: 3px solid white;
    background: #42494f;
  }
  a:active {
    color: lightgray;
  }
`
export const RightSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 10px;
  justify-content: flex-end;
  width: 50%;
  height: 100%;
  color: white;

  a {
    padding: 3px 3px 3px 3px;
    display: flex;
    align-items: center;
    height: 100%;
    margin: 0 5px 0 5px;
    color: white;
    font-size: 17px;
    font-weight: 900;
    text-decoration: none;
  }
  a:hover {
    border-bottom: 3px solid white;
    background: #42494f;
  }
  a:active {
    color: lightgray;
  }
`
export const Dropdown = styled.div`
height:100%;

  .menu {
      margin:0px;
    padding: 0px;
    width: auto;
    list-style: none;
    height:100%;
    float: left;
  }
  .menu li {
    height:100%;
    width: 100%;
    position: relative;
    float: left;
  }
  .menu li a {
    display: flex;
    align-items: center;
    height:100%;
    color: white;
    text-decoration: none;

 
  }
  .menu li ul li a{
    padding:10px 5px 10px 5px;
    margin:0px;
    padding:10px
    font-size:17px;
    
  }
  .menu li ul li a:hover{
    font-size:17.5px;
  }

  .menu li a:hover {
    background: #333;
    color: #fff;
  
  }
  .menu li ul {
  
    margin:0px;
    padding: 0px;
    position: absolute;
    top: 62px;
    left: 2px;
    background-color: #42494f;
    display: none;
  }
  .menu li:hover ul,
  .menu li.over ul {
    display: block;
  }
  .menu li ul li {
  
    white-space: nowrap;
    display: block;
    min-width: 200px;
    max-width:220px;
  
    
  }
`
