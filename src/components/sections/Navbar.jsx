import styles from './Navbar.module.css'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import Nav from 'react-bootstrap/Nav'

function Navbar () {
    return(
        <div className={styles.navbar}>
            <ul>
                <li><Nav.Link href="#Presentation">Apresentação</Nav.Link></li>
                <li><Nav.Link href="#Projects">Projetos</Nav.Link></li>
                <li><Nav.Link href="#About">Sobre mim</Nav.Link></li>
            </ul>
            <section>
                <ul>
                    <li><a href="https://github.com/Alexandre-Amar0"><FaGithub size={30}/></a></li>
                    <li><a href="https://www.linkedin.com/in/alexandre-amaro-16246930a/"><FaLinkedin size={30}/></a></li>
                </ul>
            </section>
        </div>
    )
}

export default Navbar