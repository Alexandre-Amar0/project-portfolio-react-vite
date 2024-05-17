import styles from './Footer.module.css'
import {FaGithub, FaLinkedin} from 'react-icons/fa'

function Footer() {
    return (
        <div className={styles.footer}>
            <section>
                <p>
                    Meu contato:<br/>
                    11 93771-0868
                </p>
                <p>
                    Email:<br/>
                    yujiamaro@gmail.com
                </p>
            </section>
            
            <ul>
                <li><a href="https://github.com/Alexandre-Amar0"><FaGithub size={40}/></a></li>
                <li><a href="https://www.linkedin.com/in/alexandre-amaro-16246930a/"><FaLinkedin size={40}/></a></li>
            </ul>
        </div>
    )
}

export default Footer