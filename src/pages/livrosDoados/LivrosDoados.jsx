import Livrodoadovermelho from '../../assets/livrodoadovermelho.png'
import s from './livrosDoados.module.scss'

export default function LivrosDoados(){
    return(
        <main className={s.maindoados} >

            <h1>Livros Doados</h1>

            <section className={s.sectionDoados} >

            <figure>
            <img src={Livrodoadovermelho} alt="ImgLivroVermelhoSusanneAndradeFicção" />
            <figcaption>O protagonista Susanne Andrade Ficção</figcaption>
            </figure>
            
        </section>
        </main>
    )
}