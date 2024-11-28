import logoLivro from '../../assets/logoLivro.png'
import Search from '../../assets/search.png'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Início from '../../pages/início/Início'
import LivrosDoados from '../../pages/livrosDoados/LivrosDoados'
import QueroDoar from '../../pages/QueroDoar/queroDoar'
import s from './header.module.scss'

export default function Header(){
    return(
      <BrowserRouter>
      <header className={s.header} >

        <section className={s.logoheader} >
          <img src={logoLivro} alt="ImgLivroAzulLogo" />
          <h1>Livros Vai na Web</h1>
        </section>

        
      <nav className={s.navheader} >
       <ul>
         <li><Link className={s.headerlink} to='/'>Início</Link></li>
         <li><Link className={s.headerlink} to='/LivrosDoados'>Livros Doados</Link></li>
         <li><Link className={s.headerlink} to='/QueroDoar'>Quero Doar</Link></li>
       </ul>
      </nav>

      <section className={s.BarraDeBusca} >
       <input type="search" name="" id="" placeholder='O que você procura?' />
        <button>
        <img src={Search} alt="Imagem da lupa de pesquisa" />
        </button>
      </section>

      </header>
      <Routes>

      <Route path="/" element={<Início/>} />
      <Route path="/LivrosDoados" element={<LivrosDoados/>} />
      <Route path="/QueroDoar" element={<QueroDoar/>} />

      </Routes>
      </BrowserRouter>
    )
}