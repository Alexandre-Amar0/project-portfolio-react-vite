import styles from './Projects.module.css'
import Card from '../elements/Card.jsx'
import projectlandingpage from '../../images/project1-landingpage.png'
import projectarquitetura from '../../images/project2-arquitetura.png'
import projectdncweather from '../../images/project3-dncweather.png'
import projectportfolio from '../../images/project4-portfolio.png'

function Projects() {
    return (
        <div className={styles.projects} id='Projects'>
            <h1>Projetos</h1>
            <section className={styles.section}>
                <Card 
                    title="Landing Page - Escola DNC"
                    tech="HTML, CSS e JavaScript"
                    description="Projeto de Landing Page de apresentação da Escola DNC."
                    img={projectlandingpage}
                    site="https://escoladnclandingpage.netlify.app"
                    repo="https://github.com/Alexandre-Amar0/projeto-landing-page"
                >
                </Card>
                <Card
                    title="Landing Page - Arquitetura"
                    tech="HTML, CSS e JavaScript"
                    description="Projeto de Landing Page de apresentação de um site de arquitetura."
                    img={projectarquitetura}
                    site="https://arquitetura-landingpage.netlify.app"
                    repo="https://github.com/Alexandre-Amar0/desafio1-arquitetura-landing-page"
                >
                </Card>
            </section>
            <section className={styles.section}>
                <Card
                    title="DNC Weather"
                    tech="HTML, CSS, JavaScript e Bootstrap"
                    description="Projeto de um site chamado DncWeather que busca uma localidade e clima de acordo com o CEP e Latitude e Longitude fornecidas pelo usuário."
                    img={projectdncweather}
                    site="https://dncweatheralexandreamaro.netlify.app"
                    repo="https://github.com/Alexandre-Amar0/desafio-weather"
                >
                </Card>
                <Card
                    title="Portfólio com React"
                    tech="HTML, CSS, JavaScript, React e Vite"
                    description="Projeto de um portfólio feito em React e Vite utilizando os Hooks: useState e useEffect para melhorar as estética do site."
                    img={projectportfolio}
                    site=""
                    repo=""
                >
                </Card>
            </section>
        </div>
    )
}

export default Projects