import React from 'react';
import { Link } from 'react-router-dom'
import * as S from './styles'
import moneyIcon from '../../assets/icons/money.png'
function Header() {
    return (
        <S.Container>
            <S.LeftSide>
                <Link to="#"> <img src={moneyIcon} alt="Logo" /></Link>
            </S.LeftSide>
            <S.RightSide>
                <Link to="/"> Tela Inicial </Link>|
                <S.Dropdown>
                   
                    <ul class="menu">
                        <li> <Link to="#">Nova Movimentação </Link>
                            <ul>
                                <li><Link to="/addAccount">Nova Conta</Link></li>
                                <li><Link to="/addBankAccount">Nova Conta Bancaria</Link></li>
                     
                            </ul>
                        </li>
                    </ul>
                </S.Dropdown>|
                <Link to="/details">Detalhes</Link>



            </S.RightSide>

        </S.Container>
    )
}
export default Header;

