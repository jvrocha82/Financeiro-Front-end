import React from 'react';
import * as S from './styles'

function ListItem({sideBarState,Text}) {
    return (
        <S.Container sideBarState={sideBarState}>
            <S.textOpenSideBar sideBarState={sideBarState}><button href="/#" >{Text}</button></S.textOpenSideBar>
        <span><button href="/#"></button></span>
        </S.Container>
    )
}
export default ListItem;

