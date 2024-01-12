import styles from './info.module.css'

interface infoProps{
    numero: string
    titulo: string
}
export function Info({numero, titulo}:infoProps) {
    return(
        <div className={styles.descricao}>
            <h2>{numero}</h2>
            <p>{titulo.toUpperCase()}</p>

        </div>
    )
}