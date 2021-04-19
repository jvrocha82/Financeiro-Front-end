import React, { useState } from 'react'
import * as S from './styles'
//COMPONENTS
import Header from '../../components/Header'
import ListItem from '../../components/List-Item'
import BankList from './lists/bank-list'
import AccountList from './lists/account-list'

//ASSETS
import Arrow from '../../assets/icons/arrow.png'
function FinanceDetail() {
    const [sideBarState, setSideBarState] = useState(true);
    const [listSelected, setListSelected] = useState( 'bank');

    const SwitchList = () => {
        switch(listSelected) {
  
          case "bank":   return   <BankList sideBarState={sideBarState} />;
          case "accountEntry":   return  <AccountList sideBarState={sideBarState} />;

  
          default: return <h1>No project match</h1>
        }
      }
    
    return (
        <S.Container>
            <Header />
            <S.SideBar sideBarState={sideBarState}>
                <S.SideBarHeader>
                    <button sideBarState={sideBarState} onClick={() => setSideBarState(!sideBarState)}><img alt="Seta" src={Arrow} /></button>
                </S.SideBarHeader>
                <button onClick={() => setListSelected('bank')}> <ListItem  Text={'Lista de Bancos'} sideBarState={sideBarState} /></button>
                <button onClick={() => setListSelected('accountEntry')}> <ListItem  Text={'Lista de Entradas'} sideBarState={sideBarState} /></button>
            </S.SideBar>

        
        
            <div>{ SwitchList() }</div>
       

        </S.Container>
    )
}

export default FinanceDetail;
