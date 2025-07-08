import React from 'react';
import styled from 'styled-components';

// Componentes estilizados para patrocinadores
const SponsorsContainer = styled.div`
  padding: 4rem 2rem;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  font-family: 'Montserrat', sans-serif;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const SponsorsTitle = styled.h2`
  font-size: 2.5rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: #3498db;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: -1px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const SponsorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    padding: 1rem;
  }
`;

const SponsorCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
  }

  h3 {
    font-size: 1.2rem;
    color: white;
    margin: 0;
    font-weight: 600;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
    margin: 0.5rem 0;
  }
`;

// Componentes estilizados base
const HeroContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 2rem;
  margin-top: 20px;
  font-family: 'Montserrat', sans-serif;

  @media (max-width: 768px) {
    height: auto;
    min-height: 100vh;
    padding: 1rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: #3498db;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: -1px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  color: white;
  margin-bottom: 2rem;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }
`;

const CTAButton = styled.button`
  background: linear-gradient(135deg, #3498db, #2980b9);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background-color: #2980b9;
    box-shadow: 0 6px 20px rgba(52, 152, 219, 0.4);
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
`;

const HeroContent = styled.div`
  position: relative;
  text-align: left;
  z-index: 1;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  width: 90%;
  max-width: 500px;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  font-family: 'Montserrat', sans-serif;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1.5rem;
  }
`;

const LogoContainer = styled.div`
  position: relative;
  margin-bottom: 2rem;
  z-index: 2;
`;

const Logo = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  filter: drop-shadow(0 4px 15px rgba(0, 0, 0, 0.3));
  border: 4px solid #3498db;
  padding: 8px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const BackgroundImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/event-background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
`;

const EventGallery = styled.div`
  padding: 4rem 2rem;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  font-family: 'Montserrat', sans-serif;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const GalleryTitle = styled.h2`
  font-size: 2.5rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: #3498db;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Montserrat', sans-serif;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    padding: 1rem;
  }
`;

const GalleryImage = styled.div<{ src: string }>`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
  font-family: 'Montserrat', sans-serif;
  aspect-ratio: 1;
  width: 100%;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    aspect-ratio: 1.5;
    width: 100%;
  }
`;

const Home: React.FC = () => {
  const EventPhotos = [
    '/images/events/event1.jpg',
    '/images/events/event2.jpg',
    '/images/events/event3.jpg',
    '/images/events/event4.jpg',
    '/images/events/event5.jpg'
  ];

  const Sponsors = [
    {
      id: 1,
      name: 'Patrocinador 1',
      description: 'Descripción del patrocinador'
    },
    {
      id: 2,
      name: 'Patrocinador 2',
      description: 'Descripción del patrocinador'
    },
    {
      id: 3,
      name: 'Patrocinador 3',
      description: 'Descripción del patrocinador'
    },
    {
      id: 4,
      name: 'Patrocinador 4',
      description: 'Descripción del patrocinador'
    }
  ];

  return (
    <div>
      <HeroContainer>
        <BackgroundImage />
        <LogoContainer>
          <Logo src="/images/logo.png" alt="Logo" />
        </LogoContainer>
        <HeroContent>
          <HeroTitle>TEAM MUROX</HeroTitle>
          <HeroSubtitle>Una familia en el TFT</HeroSubtitle>
          <CTAButton>UNETE</CTAButton>
        </HeroContent>
      </HeroContainer>

      <EventGallery>
        <GalleryTitle>MAJORS SET 14</GalleryTitle>
        <GalleryGrid>
          {EventPhotos.map((src, index) => (
            <GalleryImage key={index} src={src}>
              <img src={src} alt={`Event ${index + 1}`} />
            </GalleryImage>
          ))}
        </GalleryGrid>
      </EventGallery>

      <SponsorsContainer>
        <SponsorsTitle>NUESTROS PATROCINADORES</SponsorsTitle>
        <SponsorsGrid>
          {Sponsors.map((sponsor) => (
            <SponsorCard key={sponsor.id}>
              <h3>{sponsor.name}</h3>
              <p>{sponsor.description}</p>
            </SponsorCard>
          ))}
        </SponsorsGrid>
      </SponsorsContainer>
    </div>
  );
};

export default Home;

// Nota: Asegúrate de tener las imágenes de patrocinadores en la carpeta public/images/sponsors/:
// - sponsor1.png
// - sponsor2.png
// - sponsor3.png
// - sponsor4.png
