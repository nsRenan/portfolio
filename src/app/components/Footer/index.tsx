import styles from './footer.module.css'
import { SiLinkedin, SiGithub } from 'react-icons/si'
import { RiMailSendLine } from 'react-icons/ri'

export function Footer() {
    return (
      <footer className={styles.footer}>
        <div className={styles.content}>
          <div className={styles.info}>
            <h3>Renan Nobre</h3>
            <p>Desenvolvedor Full Stack</p>
            <p className={styles.copy}>© 2026 Todos os direitos reservados.</p>
          </div>
          
          <div className={styles.links}>
            <h4>Contato</h4>
            <div className={styles.socialLinks}>
              <a target="_blank" href="https://www.linkedin.com/in/renan-nobre/" aria-label="LinkedIn">
                <SiLinkedin />
              </a>
              <a target="_blank" href="https://github.com/nsRenan" aria-label="GitHub">
                <SiGithub />
              </a>
              <a href="mailto:contact.renannobre@gmail.com" aria-label="Email">
                <RiMailSendLine />
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }