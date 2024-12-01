
import Header from './components/Header/Header.jsx'
import Aside from './components/Aside/Aside.jsx'

import './App.css'
import MainArticles from './components/MainArticles/MainArticles.jsx'

function App() {

  return (
      <section className="sectionMain">
        <Aside />
        <MainArticles />
      </section>
  )
}

export default App
