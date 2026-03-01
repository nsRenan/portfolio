'use client';

import Link from "next/link";
import styles from "./trajetoriaModal.module.css";
import { useEffect, useState } from "react";
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

const PREVIEW_LENGTH = 100;

function ItemDescricao({ momento }: { momento: momento }) {
  const [expandido, setExpandido] = useState(false);
  const temMais = momento.descricao.length > PREVIEW_LENGTH;
  const texto = expandido || !temMais
    ? momento.descricao
    : momento.descricao.slice(0, PREVIEW_LENGTH).trimEnd() + '…';

  return (
    <div className={styles.item}>
      <p className={styles.descricao}>
        {texto}
        {temMais && (
          <button
            className={styles.lerMaisInline}
            onClick={() => setExpandido((v) => !v)}
          >
            {expandido ? ' Ler menos' : ' Ler mais'}
          </button>
        )}
      </p>
      {momento.certificado && (
        <Link
          className={styles.certificado}
          target="_blank"
          href={momento.certificado}
        >
          {momento.certificado.includes('huboo.ai')
            ? 'Visitar Site →'
            : momento.certificado.includes('diploma')
              ? 'Ver Diploma →'
              : 'Ver Certificado →'}
        </Link>
      )}
    </div>
  );
}

export function TrajetoriaModal({ isOpen, onClose, ano, titulo, descricao }: ModalProps) {
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

        <div className={styles.header}>
          <span className={styles.ano}>{ano}</span>
          <h2 className={styles.titulo}>{titulo}</h2>
        </div>

        <div className={styles.content}>
          {descricao.map((item, index) => (
            <ItemDescricao key={index} momento={item} />
          ))}
        </div>
      </div>
    </div>
  );
}


