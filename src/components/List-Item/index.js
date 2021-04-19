import React from 'react';
import * as S from './styles'

function ListItem({sideBarState,Text}) {
    return (
        <S.Container sideBarState={sideBarState}>
            <S.textOpenSideBar sideBarState={sideBarState}><div href="/#" >{Text}</div></S.textOpenSideBar>
        <span><div href="/#"></div></span>
        </S.Container>
    )
}
export default ListItem;

