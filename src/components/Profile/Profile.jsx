import React from 'react'
import styled from 'styled-components'

const Perfil = styled.section`
width:50%;
display:flex;
flex-direction:column;
align-items:center;
margin: 10px auto;
`

function Profile() {

    function logout(){
        localStorage.removeItem('user');
        window.location = "/login"
        
    }
    function apagarRegistros(){
        localStorage.removeItem(localStorage.getItem('user'));
        window.location = "/login"
        
    }

    return (
        <Perfil>
            Aqui vai ser o componente referente ao perfil do usuario com botoes para logout e deletar conta
            <button onClick = {logout}>Logout</button>
            <button onClick = {apagarRegistros}>Deletar sua conta</button>
        </Perfil>
    )
}

export default Profile