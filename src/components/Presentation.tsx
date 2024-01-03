import React from 'react'
import "./Presentation.css"
import instagram from "../assets/instagram (1).png"
import linkedin from "../assets/logotipo-do-linkedin.png"
import photo from "../assets/perfilNew.png"
import github from "../assets/github.png"


const Presentation = () => {
  return (
    <main className='all-presentation'>
       <section className='all-presentation-infor'>
            <h1 className='Portfolio'>PORTFOLIO</h1>
            <div className='Content'>
                <div className='text-start-infor'>
                    <p className='text-start-infor-name'>HI! I'M RUAN LAURO</p>
                    <h2 className='text-start-infor-h2'>I AM AN WEB DEVELOPER</h2>
                    <p className='text-start-infor-presentation'>This is my personal profile, in which I show a little about myself, show some tools that I learned and that I am still in the development phase. My profile as a developer will always get updates, but that's my information as dev.</p>
                    <div className='contact'>
                        <a href="https://www.instagram.com/ruan_lauro07?igsh=MWZpbHNqNnd5Z3Jodw==" target='_blank'><img src={instagram} alt="instagram" className='img-Contact'/></a>
                        <a href="https://www.linkedin.com/in/ruan-lauro-cardoso-da-silva-monteiro-983577216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><img src={linkedin} alt="linkedin" className='img-Contact' /></a>
                        <a href="https://github.com/Ruan-Lauro" target='_blank'><img src={github} alt="linkedin" className='img-Contact'/></a>
                    </div>
                </div>
                <div>  
                    <div className='div-img'>
                        <img src={photo} alt="Ruan" className='photo-perfil'/>
                    </div>
                </div>
            </div>
       </section>
    </main>
  )
}

export default Presentation