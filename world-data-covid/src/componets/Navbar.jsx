/**
 * JSX PARA CREACION DE BARRA DE MENU
 * Creado   :     Enero 29 2022
 * Por      :     Juan Andres Agudelo
 */

import React, {useState} from 'react';
import styled from 'styled-components'
import HambButton from './HambButton';

function Navbar() {

    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        //Realiza cambi de estado del click (true<=>false)
        setClicked(!clicked)
    }
        
    return (
        <>
            <NavContainer>
                <picture>
                    <img src="../img/logo_WCD.png" alt="" />
                </picture> 
                <div className={`menu ${clicked ? 'active': ''}`}>
                    <a href="">Inicio</a>
                    <a href="">Datos</a>
                    <a href="">Registros</a>
                    <a href="">Perfil</a>
                    <a href="">Autenticar</a>
                    <a href="">Logout</a>
                </div>
                <div className='burger'>
                    <HambButton clicked={clicked} handleClick={handleClick} />
                </div>

                <BgDiv className={`initial ${clicked ? 'active': ''}`}>

                </BgDiv>
            </NavContainer>
        </>
    );
}

export default Navbar;

const NavContainer = styled.nav`

    padding: .4rem;
    background: linear-gradient(58deg, rgba(123,167,233,1) 30%, rgba(19,2,98,1) 100%);
    display: flex;
    align-items: center;
    justify-content: space-between;

    a{
        color: #fff;
        text-decoration: none;
        margin-right: 1rem;
        
    }
    
    .menu{
        position: absolute;
        top: -700px;
        left: -2000px;
        right: 0;
        margin-left: auto:
        margin-right: auto;
        text-align: center;
        transition: all .7s ease;
        a:hover{
            color: yellow;
        }
        a{
            color: #ffffff;
            font-size: 2rem;
            display: block;
        }
        @media(min-width: 1024px){
            position: initial;
            margin: 0;
            a{
                font-size: 1rem;
                color: #ffffff;
                display: inline;
            }

        }
    }

    .menu.active{
        width : 100%;
        display: block;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 30%;
        left: 0;
        right: 0;
        text-align: center;
        a:hover{
            color: blue;
        }
        a{
            font-size: 1.5rem;
            margin-top: 1rem;
            color: white;
        }  
        @media(min-width: 1024px){
            position: initial;
            font-size: 1rem;
            
        }

    }

    .burger{
        @media(min-width: 768px){
            display: none;
        }
        
    }

`
const BgDiv = styled.div`
    position: absolute;
    background: linear-gradient(58deg, rgba(123,167,233,1) 40%, rgba(19,2,98,1) 100%);
    top: -700px;
    left: -2000px;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all .6s ease;
    &.active{
        border-radius: 0 0 80% 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

`