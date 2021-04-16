import React, { useState, useEffect } from 'react';
import * as S from './styles'
import api from '../../../../services/api'
function DataList({ sideBarState, Text }) {
    const [bankData, setBankData] = useState([]);

    async function loadAccounts() {
        await api.get('/bankAccount')
            .then(res => {
                setBankData(res.data)
            })
            .catch(error => console.log(error))
    }
    
    useEffect(() => {
        loadAccounts();
    })
    return (
        <S.Container sideBarState={sideBarState}>
        
            <S.Table>
                <S.HeaderTable>Lista de bancos</S.HeaderTable>
            
                <table id="table">
                    <thead>
                        <tr sideBarState={sideBarState}>
                            <th>Nome</th>
                            <th>Numero</th>
                            <th>Descrição</th>
                            <th>Tipo</th>
                            <th>Saldo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bankData.map(t => (
                                <tr>
                                    <td>{t.name}</td>
                                    <td>{t.number}</td>
                                    <td>{t.description}</td>
                                    <td>{t.type}</td>
                                    <td>R$ {t.balance}</td>
                                </tr>
                            ))
                        }                     
                    </tbody>


                </table>
            </S.Table>


        </S.Container>
    )
}

export default DataList;
