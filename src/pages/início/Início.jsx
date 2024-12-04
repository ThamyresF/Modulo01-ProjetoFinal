import s from './início.module.scss'
import Exclusaosocial from '../../assets/exclusaosocial.png'
import Aprendizadocontinuo from '../../assets/aprendizadocontinuo.png'
import Fornecerconhecimento from '../../assets/fornecerconhecimento.png'
import OportunidadeDeAprendizado from '../../assets/oportunidadedeaprendizado.png'


export default function Início(){
    return(
        <main>

            <section className={s.primeiraSectionInicio} >
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>

            <div className={s.porqueDoarDiv} >
            <h2>Por que devo doar?</h2>

<section className={s.sectionPorqueDoar} >

    <section>
        <img src={Exclusaosocial} alt="ImgBlocoExclusaoSocial" />
        <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
    </section>

    <section>
        <img src={Aprendizadocontinuo} alt="ImgBlocoAprendizadoContinuo" />
        <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
    </section>

    <section>
        <img src={Fornecerconhecimento} alt="ImgBlocoFornecerConhecimento" />
        <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
    </section>

    <section>
        <img src={OportunidadeDeAprendizado} alt="ImgBlocoOportunidadeDeAprendizado" />
        <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
    </section>

</section>
            </div>
            </main>
    )
}