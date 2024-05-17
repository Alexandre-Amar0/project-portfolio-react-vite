import styles from './Button.module.css'

function Button({text, link}) {
    return (
        <div>
            <a href={link}>
                <button className={styles.btn}>{text}</button>
            </a>
        </div>
    )
}

export default Button