import React, { useState, useEffect } from 'react';
import * as S from './styles'
import api from '../../../../services/api'
function DataList({ sideBarState, Text }) {
    const [accountsData, setAccountsData] = useState([]);

    async function loadAccounts() {
        await api.get('/account')
            .then(res => {
                setAccountsData(res.data)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        loadAccounts();
    })
    return (
        <S.Container sideBarState={sideBarState}>

            <S.Table>
                <S.HeaderTable>Lista de contas</S.HeaderTable>

                <table id="table">
                    <thead>
                        <tr sideBarState={sideBarState}>
                            <th>Data</th>
                            <th>Origem</th>
                            <th>Descrição</th>
                            <th>Tipo</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            accountsData.map(t => (
                                <tr>
                                    <td>{t.when}</td>
                                    <td>{t.source}</td>
                                    <td>{t.description}</td>
                                    <td>{t.type}</td>
                                    <td>R$ {t.value}</td>
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
