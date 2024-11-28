import s from './footer.module.scss'
import IconFacebook from '../../assets/imgiconfacebook.png'
import IconTwitter from '../../assets/imgicontwitter.png'
import IconYoutube from '../../assets/imgiconyoutube.png'
import IconLinkedln from '../../assets/imgiconlinkedln.png'
import IconInstagram from '../../assets/imgiconinstagram.png'

export default function Footer(){
    return(
        <div className={s.divFooter}>

            <section className={s.sectionContainer}>
            <section className={s.sectionLinks}>
            <p>4002-8922</p>
            <nav>
                <a href=""><img src={IconFacebook} alt="ImgFacebook" /></a>
                <a href=""><img src={IconTwitter} alt="ImgTwitter" /></a>
                <a href=""><img src={IconYoutube} alt="ImgYoutube" /></a>
                <a href=""><img src={IconLinkedln} alt="ImgLinkedln" /></a>
                <a href=""><img src={IconInstagram} alt="ImgInstagram" /></a>
            </nav>
            </section>
            </section>

            <section className={s.direitosautorais}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
            </section>
        </div>
    )
}