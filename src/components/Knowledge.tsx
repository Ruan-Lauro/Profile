import css from "../assets/css-3.png"
import html from "../assets/html-5.png"
import javascript from "../assets/js.png"
import typescript from "../assets/typescript.png"
import node from "../assets/node-js.png"
import react from "../assets/React-icon.svg.png"
import next from "../assets/1657707878-nextjs_logo.png"
import post from "../assets/postgresqlname (1).png"
import canvas from "../assets/canvas.png"
import photo from "../assets/photoshop.png"
import figma from "../assets/figma.png"
import power from "../assets/power-point.png"
import word from "../assets/palavra.png"
import excel from "../assets/excel.png"
import office from "../assets/escritorio.png"

import "./knowledge.css"

const Knowledge = () => {
  return (
    <main className="all-knowledge">
        <h2 className="knowledge-text">Languages ​​and knowledge</h2>
        <section className="knowledge-ling">
            <div className="img-ling">
                <img src={css} alt="CSS" />
                <p className="text-ling">CSS</p>
            </div>
            <div className="img-ling">
                <img src={html} alt="html" />
                <p className="text-ling">HTML</p>
            </div>
            <div className="img-ling">
                <img src={javascript} alt="javascript" />
                <p className="text-ling">Javascript</p>
            </div>
            <div className="img-ling">
                <img src={typescript} alt="typescript" />
                <p className="text-ling">Typescript</p>
            </div>
            <div className="img-ling">
                <img src={node} alt="node" />
                <p className="text-ling">Node.js</p>
            </div>
            <div className="img-ling" id="react">
                <img src={react} alt="react" />
                <p className="text-ling">React.js</p>
            </div>
            <div className="img-ling">
                <img src={next} alt="Next" />
                <p className="text-ling">Next.js</p>
            </div>
        </section>
        <section className="knowledge-ling">
        <div className="img-ling">
                <img src={post} alt="postgresql" />
                <p className="text-ling">Postgresql</p>
            </div>
            <div className="img-ling">
                <img src={photo} alt="Photoshop" />
                <p className="text-ling">Photoshop</p>
            </div>
            <div className="img-ling">
                <img src={canvas} alt="canvas" />
                <p className="text-ling">Canvas</p>
            </div>
            <div className="img-ling">
                <img src={figma} alt="Figma" />
                <p className="text-ling">Figma</p>
            </div>
            <div className="img-ling">
                <img src={power} alt="PowerPoint" />
                <p className="text-ling">PowerPoint</p>
            </div>
            <div className="img-ling">
                <img src={word} alt="Word" />
                <p className="text-ling">Word</p>
            </div>
            <div className="img-ling">
                <img src={excel} alt="excel" />
                <p className="text-ling">Excel</p>
            </div>
            <div className="img-ling" id="office">
                <img src={office} alt="Office" />
                <p className="text-ling">Office</p>
            </div>
            
        </section>
    </main>
  )
}

export default Knowledge