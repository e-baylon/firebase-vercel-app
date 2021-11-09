 import styles from './styles.module.scss'
 import Logo from './../logo'
 function Brand({tagline, title}) {
    return (
        <header className={styles.brand}>
            <Logo/>
            <h1>{title}</h1>
            <p>{tagline}</p>
        </header>
    )
}

export default Brand