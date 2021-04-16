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
                <Link to="/"> Tela Inicial </Link>
                |<Link to="/addAcount"> Novo Movimentação </Link>
                | <Link to="/details">Detalhes das Finanças</Link>
            </S.RightSide>

        </S.Container>
    )
}
export default Header;

