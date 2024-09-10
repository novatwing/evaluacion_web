import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/navbar';
import banner from './components/Image/banner_15.png';
import TituloGrande from './components/titulo/Titulo';
import TituloGrande2 from './components/titulo/Titulo2';
import Apple from '../src/components/Image/iphone_15.png';
import Apple15 from '../src/components/Image/iphone_15_promax.png';
import blue from '../src/components/Image/finish-blue-202309.jpeg';
import pink from '../src/components/Image/finish-pink-202309.jpeg';
import yellow from '../src/components/Image/finish-yellow-202309.jpeg';
import green from '../src/components/Image/finish-green-202309.jpeg';
import black from '../src/components/Image/finish-black-202309.jpeg';
import naturaltitanio from '../src/components/Image/iphone-pro-finish-naturaltitanium-202309.jpeg';
import bluetitanio from '../src/components/Image/iphone-pro-finish-bluetitanium-202309.jpeg';
import whitetitanio from '../src/components/Image/iphone-pro-finish-whitetitanium-202309.jpeg';
import blacktitanio from '../src/components/Image/iphone-pro-finish-blacktitanium-202309.jpeg';
import Camara from '../src/components/Image/camara_angular.png';
import MacBook1 from '../src/components/Image/Mac-1.png';
import MacBook2 from '../src/components/Image/Mac-2.png';
import tv from '../src/components/Image/TV_casa.jpg';
import Video from './components/Video/iphone-video.mp4';
import fondo from './components/Image/iphone-12.jpg';
import soporte from './/components/Image/soporte-varios.png';
import Contacto from './/components/Image/soporte-emoji.png';
import ReactPlayer from 'react-player';

function App() {
  return(
    <>
        <div className="App" id='tienda'>
           <Navbar />
               <div className="video-container">
                  <video class="video" controls loop autoPlay play-inline>
                    <source src={Video} type="video/mp4" width={20}/>
                  </video>
                </div>

              <main> 

              <br />

                <div className="bienvenido">
                    <h1>Bienvenido a Apple Store</h1>
                </div>

              <br />

                <div className="container">
                     <div className="banner">
                         <img className= "banner1" src={banner} width={100}/>
                     </div>
                 </div>
                 <br />
                       <button>
                          <h2>Comprar</h2>
                       </button>
                       <h1>Desde $979.990 o desde $40.833 mensuales <br /> 24 cuotas sin interés antes de hacer Trade In.</h1>

                  <br />

               <div className="cuadrado" id='iphone'>
                   <div className="iPhone-15">
                        <img src={Apple} class="cel-1" height={500}/>
                        <TituloGrande Grande="iPhone15"/>
                        <h5> Desde $979.990 0 $40.833 <br />al mes por 24 meses. </h5>

                      <div>
                        <div className="cuadrado2">
                          <img src={blue} width={30}/>
                          <img src={pink} width={30}/>
                          <img src={yellow} width={30}/>
                          <img src={green} width={30}/>
                          <img src={black} width={30}/>
                        </div>

                      </div>

                      <br />

                      <button>
                      <h4>Comprar</h4>
                      </button>

                   </div>

                    <br />

                    <div className="iPhone 15 Pro Max">
                        <img src={Apple15} class="cel-2" height={500}/>
                            <TituloGrande2 Grande2="iPhone 15 Pro Max"/>
                              <h5> Desde $1.469.990 o $61.250 <br />al mes por 24 meses. </h5>
                        <div>
                            <div className="cuadrado3">
                                   <img src={naturaltitanio} width={30}/>
                                   <img src={bluetitanio} width={30}/>
                                   <img src={whitetitanio} width={30}/>
                                   <img src={blacktitanio} width={30}/>
                            </div>

                        </div>

                        <br />

                        <button>
                            <h4>Comprar</h4>
                        </button>

                            </div>
                     </div>

                      <div className="titulo-iphone12">
                        <h1>iPhone 12 pro <br /> Perfecto para tu dia a dia.</h1>
                               <button>
                               <h2>Comprar</h2>
                               </button>
                               <br />
                               <br />
                        <div className="iphone">
                        <img src={fondo} alt="iphone 12" class="iphone-12" width={1300} />
                        </div>
                      </div> 

                    <br />

            <h1>
                Nueva cámara <br />
                gran angular de 48 <br />
                Si la vida te da megapixeles, haz megafotos.
            </h1>
                <img src={Camara}/>
            <br />

            <br />

            <h1>Notebooks</h1>

            <div className="contenedor2" id='mac'>
            <   div className="Macbook-1">
                    <img src={MacBook1} />
                    <h6>
                      <p className="letras2">Nuevos modelos con chip M3</p>
                    </h6>
                    <h2>MacBook Air de 13” y 15”</h2>
                    <h3>Chip M2 o M3</h3>
                    <h5>Increíblemente delgado y rápido, para trabajar, <br />jugar y crear en cualquier lugar.</h5>
                    <h3>Desde $49.166 mensuales o <br />desde $1.179.990 en una sola cuota</h3>
                </div>

                <button>
                <h2>Comprar</h2>
                </button>
                <br />
                <br />

                <div className="Macbook-2">
                    <img src={MacBook2} />
                    <h2>MacBook Pro de 14” y 16”</h2>
                    <h3>Chip M3, M3 Pro o M3 Max</h3>
                    <h5>El notebook Mac más avanzado,
                    <br />para flujos de trabajo muy exigentes.</h5>
                    <h3>Desde $79.166 mensuales <br />o desde $1.899.990 en una sola cuota</h3>
                </div>
                <button>
                <h2>Comprar</h2>
                </button>

                <br />
                <br />

            </div>
            <div className="cuadrado" id='casa'>
            <div className="contenedor3">
              <div className="Casa">
                <img src={tv} class="casa" id='casa'/>
                <h1>Ábrele la puerta
                <br />de tu casa al futuro.</h1>
                <h3>
                  <p className="letras">Simplemente conecta tus dispositivos favoritos para transformar tu casa <br />
                    en un hogar inteligente, cómodo y entretenido. <br />Disfruta las películas con la misma calidad de sonido e imagen que en el cine. <br />Haz sonar cualquier canción, en todos los cuartos, desde donde estés. <br /> Y controla las luces y los termostatos con Siri. Todo con la seguridad y privacidad de Apple.</p>
                </h3>
                <button>
                    <h2>Ver más</h2>
                </button>
                <br />
              </div>
            </div>
            </div>

            <br />
            <br />

            <div className="contactanos" id='soporte'>
              <img src={soporte} width={1700} class="soporte-varios"/>
              <br />
              <h1>Soporte técnico de Apple</h1>
              <h2>
                Obtener soporte técnico
              </h2>
              <h4>Bríndanos algunos detalles y te ofreceremos la mejor solución. Puedes comunicarte por teléfono, chat, correo electrónico y mucho más.</h4>
              <button className="boton-soporte">
                <h2>Comienza ahora</h2>
              </button>
            </div>
            <img src={Contacto} alt="soport" class="emoji"/>

<br />

<br />
            <footer className="footer">
              <ul className="menu">
                <li className="menu-elem">
                  <a href="" class="menu-icon"> Inicio </a>
                </li>
                <li className="menu-elem">
                  <a href="" class="menu-icon"> Equipo </a>
                </li>
                <li className="menu-elem">
                  <a href="" class="menu-icon"> Contacto </a>
                </li>
                <li className="menu-elem">
                  <a href="" class="menu-icon"> Trabajo </a>
                </li>
              </ul>
              <p className="text">©2024 Todos los derechos reservados.</p>
            </footer>
               </main>
        </div>

        <br />

    </>
  )
}

export default App
