import React, { useState } from 'react';
import Icon from './Icon';

export default function FaqSection({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="faqs-section">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-pill">
            <Icon name="help-circle" size={14} /> Respuestas Claras
          </span>
          <h2 className="section-title">Preguntas Frecuentes</h2>
          <p className="section-subtitle">
            Resolvemos tus dudas sobre tipos de licencia, métodos de entrega, activación y compatibilidad.
          </p>
        </div>

        <div className="faqs-accordion">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item ${isOpen ? 'active' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <span className={`faq-chevron ${isOpen ? 'open' : ''}`}>
                    <Icon name="chevron-down" size={20} />
                  </span>
                </button>
                {isOpen && (
                  <div className="faq-answer-pane">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="faq-cta-box">
          <div className="faq-cta-text">
            <h4>¿Tienes alguna duda específica sobre tu equipo o compatibilidad?</h4>
            <p>Escríbenos directamente a WhatsApp y te asesoramos al instante sin compromiso.</p>
          </div>
          <a
            href="https://api.whatsapp.com/send?phone=51987654321&text=Hola,%20tengo%20una%20consulta%20técnica%20sobre%20una%20licencia."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <Icon name="whatsapp" size={18} />
            <span>Hablar con un asesor</span>
          </a>
        </div>
      </div>
    </section>
  );
}
