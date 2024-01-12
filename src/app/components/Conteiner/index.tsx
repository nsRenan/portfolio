import { ReactNode } from "react";
import styles from './conteiner.module.css'

interface conteinerProps{
    children: ReactNode
}

export function Conteiner({children}:conteinerProps){
    return(
        <main className={styles.conteiner}>
            {children}
        </main>
    )
}