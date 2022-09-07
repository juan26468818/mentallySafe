import React, {useState} from "react";
import './Header.css'
import { Link } from "wouter";
export const Header = () =>{
    const [open, setOpen] = useState(true);
    const [menuClass, setMenuClass] = useState('');
    const isActive = () =>{
        if(open){
            setOpen(false);
            setMenuClass('open');
        }else{
            setOpen(true);
            setMenuClass('');
        }
    }
    return(
        <div className="header-container">
            <header className="App-header">
                <nav className="App-header__nav-bar">
                    <div className="App-header__nav-bar-logo">Mentally<span>Safe</span></div>
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png" className="navbar__search-icon"/>
                    <button className={`${menuClass}  header__nav-toggle`} onClick={isActive}>
                        <div className={`header__nav-menu-bar`}></div>
                    </button>
                </nav>
            </header>
            <ul className={`${menuClass} App-header__menu`}>
                <li>Iniciar Sesión</li>
                <li>Regístrate</li>
                <li>Aprende</li>
                <li>Libros</li>
            </ul>
        </div>
    )
}