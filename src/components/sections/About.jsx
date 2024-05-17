import styles from './About.module.css'

function About() {
    return (
        <div>
            <div className={styles.abouttitle}>
                <h1>Sobre mim</h1>
            </div>
            <div className={styles.about} id='About'>
                <section className={styles.timeline}>
                    <section>
                        <h3>2021</h3>
                        <p>Me formei no <em>Curso Técnico em Mecatrônica Integrado ao Ensino Médio</em> na ETEC Presidente Vargas.</p>
                    </section>
                    <section>
                        <h3>2022</h3>
                        <p>Me planejei para trilhar uma carreira na área da programação.</p>
                    </section>
                    <section>
                        <h3>2023</h3>
                        <p>Comecei a cursar <em>Jogos Digitais</em> na Cruzeiro do Sul. Além disso, comecei a <em>Formação FullStack</em> na Escola DNC.</p>
                    </section>
                    <section>
                        <h3>2024</h3>
                        <p>Estou terminando ambos os cursos que comecei em 2023.</p>
                    </section>
                </section>
            </div>
        </div>
    )
}

export default About