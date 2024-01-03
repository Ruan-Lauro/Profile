import './App.css'
import About from './components/About'
import Academic from './components/Academic'
import Other from './components/Other'
import Presentation from './components/Presentation'
import Knowledge from './components/Knowledge'


function App() {
  

  return (
    <>
     <main className='all'>
      <Presentation/>
      <Knowledge/>
      <About/>
      <Other/>
      <Academic/>
     </main>
    </>
  )
}

export default App
