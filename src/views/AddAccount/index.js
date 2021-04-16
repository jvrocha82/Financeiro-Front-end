import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import api from '../../services/api'
import Button from '@material-ui/core/Button';

//COMPONENTS
import Header from '../../components/Header'
import * as S from './styles';


function AddAccount() {
    const [bankData, setBankData] = useState([]);

    const [type, setType] = useState();
    const [source, setSource] = useState();
    const [value, setValue] = useState();
    const [description, setDescription] = useState();
    const [bankAccountId, setBankAccountId] = useState();
    const [date, setDate] = useState();
    const [redirect, setRedirect] = useState(false);

    function Cancelar() {
        console.log('cancelar')
        setType('')
        setSource('')
        setValue('')
        setDescription('')
        setBankAccountId('')
        setDate('')
    }
    async function loadBankAccounts() {
        await api.get('/bankAccount')
            .then(res => {
                setBankData(res.data)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        loadBankAccounts();
    },[])
 
    async function Save() {
        //Validação dos dados
        if (!type || type === '')
          return alert("Você precisa informar o tipo ")
        else if (!source)
          return alert("Você precisa informar a origem ")
        else if (!value)
          return alert("Você precisa selecionar o valor ")
        else if (!bankAccountId || bankAccountId === '')
          return alert("Você precisa definir o banco ")
        else if (!date)
        return alert("você precisa informar a data ")
    console.log(type,source,value,description, `${date}T00:00:00.000`)
          await api.post('/account', {
            value,
            source,
            description,
            type,
            bankAccountId,
         
       
            when: `2021-03-11T16:00:00Z`
          }).then(t =>
            setRedirect(true)
          ).catch(response => {
            alert(response.data,'.error')
          })
        
      }
    
    const typeAccount = [
        { value: 'entrada', label: 'Entrada' },
        { value: 'saida', label: 'Saida' },
    ]
    return (
        <S.Container>
              { redirect && <Redirect to="/details"/> }
            <Header />
            <S.Form>
                <S.FormHeader><p>Adicionar conta</p></S.FormHeader>
                <S.FormRow>
                    <S.FormGroup>
                        <p>Tipo da conta</p>
                        <select  value={type}  onChange={e => setType(e.target.value)}>
                        <option data-default disabled selected></option>
                            {typeAccount.map(t => (
                                
                                <option value={t.value}>{t.label}</option>
                            ))}

                        </select>
                    </S.FormGroup>
                    <S.FormGroup>
                        <p>Origem</p>
                        <input value={source}  onChange={e => setSource(e.target.value)} />
                    </S.FormGroup>
                    <S.FormGroup>
                        <p>Valor</p>
                        <input value={value} type="number"  onChange={e => setValue(e.target.value)}/>
                    </S.FormGroup>

                </S.FormRow>

                <S.FormRow>
                    <S.FormGroupDescription>
                        <p>Descrição</p>
                        <input value={description}  onChange={e => setDescription(e.target.value)} />
                    </S.FormGroupDescription>
                    <S.FormGroup>
                        <p>Banco</p>

                        <select value={bankAccountId}  onChange={e => setBankAccountId(e.target.value)} >
                        <option value="" data-default disabled selected></option>
                            {bankData.map(t => (
                                <option value={t._id}>{t.name}</option>
                            ))}
                        </select>
                     

                    </S.FormGroup>
                    

                </S.FormRow>
                <S.FormRow>
                    <S.FormGroup>
                        <p>Data</p>
                        <input value={date}  type="date" onChange={e => setDate(e.target.value)} />
                    </S.FormGroup>
                  
                    

                </S.FormRow>
         <S.FormFooter>
          <Button type="button" variant="contained" color="primary" onClick={Save}>SALVAR</Button>
          <Button type="button" variant="contained" color="secondary" onClick={Cancelar}>CANCELAR</Button>
          </S.FormFooter>
   
            </S.Form>
        </S.Container>
    )
}

export default AddAccount;