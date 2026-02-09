'use client';

import Link from "next/link";
import styles from "./trajetoriaModal.module.css";
import { useEffect } from "react";
import { MdClose } from "react-icons/md";

interface momento {
  descricao: string;
  certificado?: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  ano: string;
  titulo: string;
  descricao: momento[];
}

export function TrajetoriaModal({ isOpen, onClose, ano, titulo, descricao }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
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
        
        <div className={styles.header}>
          <span className={styles.ano}>{ano}</span>
          <h2 className={styles.titulo}>{titulo}</h2>
        </div>

        <div className={styles.content}>
          {descricao.map((momento, index) => (
            <div key={index} className={styles.item}>
              <p className={styles.descricao}>{momento.descricao}</p>
              {momento.certificado && (
                <Link
                  className={styles.certificado}
                  target="_blank"
                  href={momento.certificado}
                >
                  {momento.certificado.includes('huboo.ai') ? 'Visitar Site →' : 'Ver Certificado →'}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
