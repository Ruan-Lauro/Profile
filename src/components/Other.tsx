import "./Other.css"

import database from "../assets/novo-banco-de-dados.png"
import english from "../assets/falando.png"
import estruct from "../assets/dados-estruturados.png"
import arquite from "../assets/desenvolvimento-de-software.png"

const Other = () => {
  return (
    <main className="all-other">
        <h2>Other knowledges</h2>
        <section className="all-other-infor">
            <div className="lin1"></div> 
            <div className="elementOne">
                <div className="lin2"></div>
                <div className="data-other">
                    <div className="circle">
                        <img src={database} alt="database" />
                    </div>
                    <p>Database</p>
                </div>
            </div>
            <div className="elementTwo">
                <div className="data-other" id="data-soft">
                    <p>Software Engineering</p>
                    <div className="circle">
                        <img src={arquite} alt="database" />
                    </div>
                </div>
                <div className="lin2"></div>
            </div>
            <div className="elementThree" >
                <div className="lin2"></div>
                <div className="data-other" id="data-base">
                    <div className="circle">
                        <img src={english} alt="database" />
                    </div>
                    <p>Software Engineering</p>
                </div>
            </div>

            <div className="elementFour">
                <div className="data-other" id="data-struc">
                    <p>Data structure</p>
                    <div className="circle">
                        <img src={estruct} alt="database" />
                    </div>
                </div>
                <div className="lin2"></div>
            </div>
            
        </section>
    </main>
  )
}

export default Other