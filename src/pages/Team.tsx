import React from 'react';
import styled from 'styled-components';
import { FaTwitter } from 'react-icons/fa';

const TeamContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  padding: 4rem 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/team-background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  overflow-y: auto;
  position: relative;

  @media (max-width: 768px) {
    padding: 3rem 1rem 2rem;
  }
`;

const TeamTitle = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: #3498db;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-size: 3rem;
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

  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 0.8rem;
    margin-bottom: 2.5rem;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 2rem;
  backdrop-filter: blur(5px);
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1rem 0;
  }
`;

const TeamMember = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  width: 100%;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
  }

  .social-icon {
    width: 24px;
    height: 24px;
    margin: 0 auto;
    display: block;
    color: #1DA1F2;
  }

  @media (max-width: 768px) {
    padding: 1.2rem;
  }
`;

const MemberImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 1rem;
  object-fit: cover;
  border: 3px solid #3498db;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
`;

const MemberName = styled.h3`
  margin: 0;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const MemberRole = styled.p`
  color: #3498db;
  margin: 0.5rem 0;
  font-weight: 500;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 0.4rem 0;
  }
`;

const MemberSocial = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: auto;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;

const SocialLink = styled.a`
  display: inline-block;
  color: #1DA1F2;
  text-decoration: none;
  transition: color 0.3s ease;
  margin-top: 0.5rem;

  &:hover {
    color: #0084B4;
  }
`;

const teamMembers = [
  {
    id: 1,
    name: 'PabloMuro',
    role: 'Capitan del barco',
    image: '/images/team/pablomurox.jpeg',
    social: [
      { type: 'twitter', url: 'https://x.com/PABLOMUR0' }
    ]
  },
  {
    id: 2,
    name: 'Kaladin',
    role: 'Head Coach/Analist',
    image: '/images/team/chimpancini.jpg',
    social: [
      { type: 'twitter', url: '#' }
    ]
  },
  {
    id: 3,
    name: 'Alfwar',
    role: 'Vice Capitan',
    image: '/images/team/alfwar.jpeg',
    social: [
      { type: 'twitter', url: '#' }
    ]
  },
  {
    id: 4,
    name: 'Friki_Supremo',
    role: 'Soporte',
    image: '/images/team/capuccino.jpg',
    social: [
      { type: 'twitter', url: '#' }
    ]
  },
  {
    id: 5,
    name: 'Lunatyko',
    role: 'Soporte',
    image: '/images/team/bombini.jpg',
    social: [
      { type: 'twitter', url: '#' }
    ]
  }
];

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  twitter: string;
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({ name, role, image, twitter }) => {
  return (
    <TeamMember>
      <div style={{ position: 'relative', marginBottom: '1rem' }}>
        <img
          src={image}
          alt={name}
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            objectFit: 'cover',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
            transition: 'transform 0.3s ease'
          }}
        />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          border: '2px solid #1DA1F2',
          boxShadow: '0 0 0 4px rgba(29, 161, 242, 0.2)'
        }}></div>
      </div>
      <h3 style={{ margin: '0.5rem 0', fontSize: '1.5rem' }}>{name}</h3>
      <p style={{ margin: '0.5rem 0', fontSize: '1rem', color: '#666' }}>{role}</p>
      <SocialLink href={twitter} target="_blank" rel="noopener noreferrer">
        <FaTwitter className="social-icon" />
      </SocialLink>
    </TeamMember>
  );
};

const Team: React.FC = () => {
  return (
    <TeamContainer>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        minHeight: '100vh',
        overflowY: 'auto'
      }}>
        <div style={{ marginBottom: '2rem' }}>
          <TeamTitle>LOS TATUNDOS</TeamTitle>
        </div>
        <TeamGrid>
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.id}
              name={member.name}
              role={member.role}
              image={member.image}
              twitter={member.social[0].url}
            />
          ))}
        </TeamGrid>
      </div>
    </TeamContainer>
  );
};

export default Team;
