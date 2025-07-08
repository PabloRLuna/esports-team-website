import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 6rem 2rem 4rem;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/contact-background.jpg');
  background-size: cover;
  background-position: center 45%;
  background-repeat: no-repeat;
  color: white;
  overflow-y: auto;
  position: relative;
`;

const ContactTitle = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
  color: #3498db;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: -1px;
  text-transform: uppercase;
  background: linear-gradient(45deg, #3498db, #2980b9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 1rem;
  display: inline-block;
  border-radius: 5px;
  box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  backdrop-filter: blur(5px);
  position: relative;
  z-index: 1;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 500;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #3498db;
  border-radius: 5px;
  font-size: 1.1rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  transition: all 0.3s ease;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #2980b9;
    background: rgba(255, 255, 255, 0.2);
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: 1px solid #3498db;
  border-radius: 5px;
  font-size: 1.1rem;
  resize: vertical;
  min-height: 200px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  transition: all 0.3s ease;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #2980b9;
    background: rgba(255, 255, 255, 0.2);
  }
`;

const SubmitButton = styled.button`
  padding: 1.2rem 2.5rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
  width: fit-content;
  margin: 0 auto;
  display: block;

  &:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
  }
`;

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
  };

  return (
    <ContactContainer>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem',
        padding: '4rem 2rem'
      }}>
        <div style={{ textAlign: 'center' }}>
          <ContactTitle>Servicios de Coaching</ContactTitle>
          <h2 style={{
            color: '#ffffff',
            fontSize: '1.8rem',
            marginBottom: '1.5rem',
            maxWidth: '600px'
          }}>Ofrecemos servicios personalizados para mejorar tu juego y estrategia.</h2>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          width: '100%',
          maxWidth: '1200px'
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '2rem',
            borderRadius: '10px',
            backdropFilter: 'blur(5px)',
            border: '1px solid rgba(52, 152, 219, 0.2)'
          }}>
            <h3 style={{
              color: '#3498db',
              fontSize: '1.5rem',
              marginBottom: '1rem'
            }}>Análisis de Partidas</h3>
            <p style={{
              color: '#ffffff',
              fontSize: '1.1rem',
              lineHeight: '1.6'
            }}>Análisis detallado de tus partidas para identificar fortalezas y áreas de mejora.</p>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '2rem',
            borderRadius: '10px',
            backdropFilter: 'blur(5px)',
            border: '1px solid rgba(52, 152, 219, 0.2)'
          }}>
            <h3 style={{
              color: '#3498db',
              fontSize: '1.5rem',
              marginBottom: '1rem'
            }}>Coaching Individual</h3>
            <p style={{
              color: '#ffffff',
              fontSize: '1.1rem',
              lineHeight: '1.6'
            }}>Sesiones personalizadas para mejorar tu juego y comprender los fundamentos.</p>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '2rem',
            borderRadius: '10px',
            backdropFilter: 'blur(5px)',
            border: '1px solid rgba(52, 152, 219, 0.2)'
          }}>
            <h3 style={{
              color: '#3498db',
              fontSize: '1.5rem',
              marginBottom: '1rem'
            }}>Clases de meta</h3>
            <p style={{
              color: '#ffffff',
              fontSize: '1.1rem',
              lineHeight: '1.6'
            }}>Desarrollo de estrategias para optimizar el rendimiento en el parche actual.</p>
          </div>
        </div>

        <div style={{
          maxWidth: '800px',
          width: '100%',
          margin: '3rem auto 0'
        }}>
          <h2 style={{
            color: '#ffffff',
            fontSize: '2rem',
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>Contáctanos para más información</h2>
          <ContactForm onSubmit={handleSubmit}>
            <FormField>
              <Label>Tu Nombre</Label>
              <Input type="text" name="name" required />
            </FormField>
            <FormField>
              <Label>Tu Email</Label>
              <Input type="email" name="email" required />
            </FormField>
            <FormField>
              <Label>Servicio de Interés</Label>
              <select name="service" style={{
                padding: '1rem',
                border: '1px solid #3498db',
                borderRadius: '5px',
                fontSize: '1.1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                transition: 'all 0.3s ease',
                width: '100%'
              }}>
                <option value="">Selecciona un servicio</option>
                <option value="analysis">Análisis de Partidas</option>
                <option value="coaching">Coaching Individual</option>
                <option value="team">Estrategia de Equipo</option>
              </select>
            </FormField>
            <FormField>
              <Label>Mensaje</Label>
              <TextArea name="message" required />
            </FormField>
            <SubmitButton type="submit">Contactar</SubmitButton>
          </ContactForm>
        </div>
      </div>
    </ContactContainer>
  );
};

export default Contact;
