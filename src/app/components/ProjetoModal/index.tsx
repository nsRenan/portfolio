'use client';

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import styles from "./projetoModal.module.css";
import { useEffect, ReactElement } from "react";
import { MdClose } from "react-icons/md";

interface ProjetoModalProps {
  isOpen: boolean;
  onClose: () => void;
  descricao: string;
  imagem: StaticImageData;
  ferramentas: ReactElement[];
  github: string;
  deploy?: string;
}

export function ProjetoModal({ 
  isOpen, 
  onClose, 
  descricao, 
  imagem, 
  ferramentas, 
  github, 
  deploy 
}: ProjetoModalProps) {
  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      document.documentElement.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <MdClose size={24} />
        </button>
        
        <div className={styles.imageContainer}>
          <Image src={imagem} alt={descricao} fill style={{ objectFit: 'cover' }} />
        </div>

        <div className={styles.content}>
          <h2 className={styles.titulo}>{descricao}</h2>
          
          <div className={styles.ferramentas}>
            <span className={styles.label}>Tecnologias:</span>
            <div className={styles.icons}>
              {ferramentas.map((icon, index) => (
                <span key={index} className={styles.icon}>{icon}</span>
              ))}
            </div>
          </div>

          <div className={styles.links}>
            <Link
              className={styles.linkButton}
              target="_blank"
              href={github}
            >
              <span>Ver no GitHub</span>
              <span>→</span>
            </Link>
            {deploy && (
              <Link
                className={`${styles.linkButton} ${styles.deploy}`}
                target="_blank"
                href={deploy}
              >
                <span>Acessar Deploy</span>
                <span>→</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
