import Imglivrodoar from '../../assets/imglivrodoar.png'
import s from './queroDoar.module.scss'

export default function QueroDoar(){
    return(
        <section className={s.sectionDoar} >
            
            <p className={s.primeiroParagrafo}>Por favor, preencha o formulário com suas informações e as informações do Livro.</p>

            <section className={s.sectionformulario} >

                <section>
                <img src={Imglivrodoar} alt="imgLivroAzulFormulario" />
                <p>Informações do Livro</p>
                </section>

            <form action="" method="" className={s.fomularioDoar} >
            
                
                <input type="text" id="" name="" placeholder="Título"/>
                
                <input type="text" id="" name="" placeholder="Categoria"/>
                
                <input type="text" id="" name="" placeholder="Autor"/>
                
                <input type="text" id="" name="" placeholder="Link da Imagem"/>

                <button type="submit">Doar</button>

            </form>

        </section>
        </section>
    )
}
