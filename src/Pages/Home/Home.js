import React,{useState, useEffect} from "react";
import './Home.css';
import { Link } from "wouter";
import { Header } from "../../Components/Header/Header";
import AOS from 'aos';
import searchIconW from "../../img/icons-search-30-w.png";
import questionIconW from "../../img/icons-question-50-w.png";
import psiIconW from "../../img/icons-psi-32-w.png";
import questionIcon from "../../img/icons-ayuda-100.png";
import calendarIcon from "../../img/icons-calendar-50.png";
import arrowIcon from "../../img/icons-accede-redondeado-derecho-50.png";
import searchIconB from "../../img/icons8-búsqueda-50.png"


export const Home = () =>{
    const [myWords, setMyWords] = useState("Expresa");
    AOS.init();
    
    useEffect(() => {
        const words = ["Expresa", "Comparte", "Conoce", "Disfruta"]
        let n = 1
        setInterval(()=>{
            if(n < words.length){
            setMyWords(words[n])
            n++
        }
        else{
            n=0;
            setMyWords(words[n])
            n++
        }
        }, 2600)
    }, []);
    return(
        <div>
            
            <Header />
            <main>
                <div className="main__first-container">
                    <h1 className="main__title" data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                        Terapia Online
                    </h1>
                    <p className="main__description">
                        Porque la salud mental es importante.
                    </p>
                    {/* <div className="presentation">{myWords}</div> */}
                </div>
                {/* <img src={img_terapia_4} className="main__therapy-img"></img> */}
                <div className="main__second-container">
                    
                    
                    <Link to="ComoFunciona" className="second-container__button button__comoFunciona"><img src={questionIconW} className="button__search-icon-white" alt="Img como funciona"></img>Como Funciona</Link>
                    <Link to="BuscarPsicologo" className="second-container__button button__buscarPsicologo" ><img src={searchIconW} className="button__search-icon-white" alt="Img buscar"></img>Buscar Psicólogo</Link>
                    <Link to="SoyPsicologo" className="second-container__button button__soyPsicologo"><img src={psiIconW} className="button__search-icon-white" alt="img psicologo"></img>Soy Psicólogo</Link>
                </div>
                <section className="main__basic-description"></section>
                <section className="main__como-funciona">
                    <img src={questionIcon} className="question-icon-b" alt="Img buscar"></img>
                    <h3>Como funciona</h3>
                    <div className="como-funciona__description">
                        <div className="como-funciona__list">
                            <img src={searchIconB}></img>
                            <p>Busca un psicólogo para ti.</p>
                        </div>
                        <div className="como-funciona__list">
                            <img src={calendarIcon} ></img>
                            <p>Escoge la fecha y hora para la cita.</p>
                        </div>
                        <div className="como-funciona__list">
                            <img src={arrowIcon}></img>
                            <p>¡Conéctate y comienza tu proceso!</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}