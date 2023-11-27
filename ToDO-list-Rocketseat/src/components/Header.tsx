import styels from './Header.module.css';

import LogoTodo from '../assets/Logo.svg'

export function Header(){
    return(
        <header className={styels.Header}>
            <img src={LogoTodo} alt="Logo ToDo" />
        </header>
    )
}