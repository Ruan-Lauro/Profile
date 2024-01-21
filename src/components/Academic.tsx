import "./Academic.css"

const Academic = () => {
  return (
    <main className="all-academic">
        <section className="all-academic-infor">
            <h2 className="all-academic-infor-h2">Academic experience</h2>
            <div className="all-academic-infor-text">
                <div className="academic-experience">
                    <h2 className="intro-academic">Mural Virtual 1.0</h2>
                    <p className="text-academic">The Virtual Wall is an application created to help an institution or company with information. It allows the user to make a post and other users to see it, but it has control from the administrator user, as he or she has control over the messages. This application was created using CSS, HTMl and Javascript.</p>
                    <a href="https://github.com/flavioedu-dev/mural-virtual" className="link" ><p className="link-academic">https://github.com/flavioedu-dev/mural-virtual</p></a>
                </div>
                <div className="academic-experience">
                    <h2 className="intro-academic">Mural Virtual 2.0</h2>
                    <p className="text-academic"> Through research carried out using a form, it is discovered that the information does not reach the target audience, among the information obtained from the form, people have different means of getting information and the means used do not satisfy half of the public- target. With this data, the Virtual Mural emerged to satisfy these needs, the Virtual Mural is an application that aims to provide information, as it is the main tool for the development of an institution or for society and its organizations, with this application the information will reach as many people as possible; using the group creation option, in which the administrator user creates a group and obtains the code to pass on to users who will join their group, when creating the group, the user creates walls, which are channels to divide into different categories your group, making the user who joined your group choose their category, which allows them to post in this category, but view the others. We use all the principles of software engineering, agile methodologies, architecture, sprint backlog and etc.
                    <br />
                    <br />
                    Frontend:
                    <br />
                        -React Frameworks, and Next.js 13 with Typescript.
                        <br /><br />
                    Backend:
                    <br />
                        -Choice of Node.js programming language with Typescript.
                        <br />
                        -Express.js framework.
                        <br />
                        -SQL database options.
                        <br /><br />
                    
                    Database:
                    <br />
                        -Choose between PostgreSQL relational databases and we use prism-orm
                        <br />
                        for its manipulation and creation.
                        <br />
                        -Indexing and standardization strategies.</p>
                    <a href="https://github.com/Ruan-Lauro/virtual-wall" className="link" id="linkMural"><p className="link-academic">https://github.com/Ruan-Lauro/virtual-wall</p></a>
                </div>
                <div className="academic-experience">
                    <h2 className="intro-academic">Calculadora IMC</h2>
                    <p className="text-academic"> It is a website that allows the user to calculate their BMI and see their condition. Site was created using React.js and Javascript.</p>
                    <a href="https://github.com/Ruan-Lauro/CalculadoraIMC" className="link"><p className="link-academic">https://github.com/Ruan-Lauro/CalculadoraIMC</p></a>
                </div>
                <div className="academic-experience">
                    <h2 className="intro-academic">Quiz</h2>
                    <p className="text-academic">It's a quiz that tests your knowledge of JavaScript, HTML and CSS. Website developed using React.js and Javascript.</p>
                    <a href="https://github.com/Ruan-Lauro/Quiz-react" className="link"><p className="link-academic">https://github.com/Ruan-Lauro/Quiz-react</p></a>
                </div>
                <div className="academic-experience">
                    <h2 className="intro-academic">Contador</h2>
                    <p className="text-academic">This website allows the user to create a date and set their time, being able to customize their colors and theme, creating a counter for the given date and time. This application was created using React.js and Javascript.</p>
                    <a href="https://github.com/Ruan-Lauro/Contador" className="link"><p className="link-academic">https://github.com/Ruan-Lauro/Contador</p></a>
                </div>
                
            </div>
        </section>
    </main>
  )
}

export default Academic