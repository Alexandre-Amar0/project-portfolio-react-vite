import styles from './Card.module.css'
import Button from '../elements/Button.jsx'

function Card({img, title, tech, description, repo, site}) {
    return (
        <div className={styles.card}>
            <a href={site}><img src={img}/></a>
            <h3>{title}</h3>
            <section>
                <p><strong>Tecnologias: </strong>{tech}</p>
                <p><em>{description}</em></p>
                <Button text="Acesse o repositório" link={repo}/>
            </section>
        </div>
    )
}

export default Card