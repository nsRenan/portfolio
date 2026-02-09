'use client';

import { useState, FormEvent } from 'react';
import styles from './contato.module.css';
import { RiMailSendLine } from 'react-icons/ri';

export function Contato() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    formData.append('access_key', '59af163e-0098-4874-9555-eef7229ac29e');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section className={styles.contatoSection} id="contato">
      <div className={styles.container}>
        <h2>Entre em Contato</h2>
        <p className={styles.subtitle}>
          Tem algum projeto em mente? Vamos conversar!
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Seu nome"
              disabled={status === 'loading'}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="seu@email.com"
              disabled={status === 'loading'}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Sua mensagem..."
              disabled={status === 'loading'}
            />
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? (
              'Enviando...'
            ) : (
              <>
                <RiMailSendLine />
                Enviar Mensagem
              </>
            )}
          </button>

          {status === 'success' && (
            <div className={styles.message + ' ' + styles.success}>
              Mensagem enviada com sucesso! Responderei em breve.
            </div>
          )}

          {status === 'error' && (
            <div className={styles.message + ' ' + styles.error}>
              Erro ao enviar mensagem. Tente novamente.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
