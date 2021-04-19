import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import api from '../../services/api'
import Button from '@material-ui/core/Button';

//COMPONENTS
import Header from '../../components/Header'
import * as S from './styles';


function AddBankAccount() {
    const [balance, setBalance] = useState();
    const [name, setName] = useState();
    const [number, setNumber] = useState();
    const [description, setDescription] = useState();
    const [type, setType] = useState();
   
    const [redirect, setRedirect] = useState(false);

    function Cancelar() {
        console.log('cancelar')
        setType('')
        setBalance('')
        setNumber('')
        setName('')
        setDescription('')
 
    }
  
 
    async function Save() {
        //Validação dos dados
        if (!balance || balance < 0)
          return alert("Você precisa informar o saldo da conta bancária ")
        else if (!name || name === '')
          return alert("Você precisa informar o nome da conta bancária ")
        else if (!number)
          return alert("Você precisa informar o numero da conta ")
        else if (!type || type === '')
        return alert("Informe o tipo da conta")
          await api.post('/bankAccount', {
            balance,
            name,
            number,
            description,
            type
          }).then(t =>
            setRedirect(true)
          ).catch(response => {
            alert(response.data,'.error')
          })
        
      }
    
    const typeBankAccount = [
        { value: 'corrente', label: 'Conta corrente' },
        { value: 'poupanca', label: 'Conta Poupança' },
        { value: 'investimento', label: 'Conta Investimento' },
        { value: 'outro', label: 'Outro' },
    ]
    return (
        <S.Container>
              { redirect && <Redirect to="/details"/> }
            <Header />
            <S.Form>
                <S.FormHeader><p>Adicionar conta bancária</p></S.FormHeader>
                <S.FormRow>
                    <S.FormGroup>
                        <p>Tipo da conta bancária</p>
                        <select  value={type}   onChange={e => setType(e.target.value)}>
                        <option defaultValue  value="DEFAULT" data-default disabled selected></option>
                            {typeBankAccount.map(t => (
                                
                                <option value={t.value}>{t.label}</option>
                            ))}

                        </select>
                    </S.FormGroup>
                    <S.FormGroup>
                        <p>Apelido</p>
                        <input value={name}  onChange={e => setName(e.target.value)} />
                    </S.FormGroup>
                    <S.FormGroup>
                        <p>Numero</p>
                        <input value={number} type="number"  onChange={e => setNumber(e.target.value)}/>
                    </S.FormGroup>

                </S.FormRow>

                <S.FormRow>
                    <S.FormGroupDescription>
                        <p>Descrição</p>
                        <input value={description}  onChange={e => setDescription(e.target.value)} />
                    </S.FormGroupDescription>
                    <S.FormGroup>
                        <p>Saldo</p>
                        <input value={balance} type="number"  onChange={e => setBalance(e.target.value)}/>
                     

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

export default AddBankAccount;