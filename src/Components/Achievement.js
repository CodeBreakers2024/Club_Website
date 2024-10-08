import React, { useState } from 'react';

export default function Achievements() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const achievers = [
    {
      name: "Pratham Bhojwani",
      image: "/profiles/Core/Pratham.jpg",
      achievements: ["Won the National Coding Championship 2023",
        "Bagged a package of 16 LPA from Kickdrum"]
      
    },
    {
      name: "Nupur Hada",
      image: "profiles/Core/Nupur.jpg",
      achievements: [
        "Published a groundbreaking research paper in AI",
        "Bagged A package of 12 LPA from Aspect Ratio"
      ]
    },
    {
      name: "Harsh Diwase",
      image: "/profiles/Core/Harsh.jpg",
      achievements: ["Secured first place in the International Math Olympiad",
        "Bagged a package of 16 LPA from Darwinbox"]
     
    },
    {
      name: "Harsh Diwase",
      image: "/profiles/Core/Harsh.jpg",
      achievements: ["Secured first place in the International Math Olympiad"]
    }
  ];

  // CSS for the shining effect
  const shiningEffect = `
    @keyframes shine {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  `;

  return (
    <div style={{
      backgroundColor: 'black',
      color: 'white',
      padding: '2rem 1rem'
    }}>
      <style>{shiningEffect}</style>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '3rem',
          color: 'white'
        }}>Our Achievements</h1>

        <h2 style={{
          fontSize: '1.875rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '2rem',
          color: 'white'
        }}>Hall of Fame</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {achievers.map((achiever, index) => (
            <div 
              key={index} 
              style={{
                perspective: '1000px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '0.5rem',
                boxShadow: '0 1px 3px 0 rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(255, 255, 255, 0.06)',
                overflow: 'hidden',
                position: 'relative',
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Shining border effect */}
              <div style={{
                position: 'absolute',
                top: '-2px',
                left: '-2px',
                right: '-2px',
                bottom: '-2px',
                background: 'linear-gradient(45deg, transparent 25%, rgba(0, 255, 255, 0.7) 50%, transparent 75%)',
                backgroundSize: '200% 200%',
                animation: 'shine 3s linear infinite',
                zIndex: 0,
                borderRadius: '0.6rem',
              }} />

              <div style={{
                position: 'relative',
                width: '100%',
                height: '400px',
                transition: 'transform 0.6s',
                transformStyle: 'preserve-3d',
                transform: hoveredCard === index ? 'rotateY(180deg)' : 'rotateY(0deg)',
                zIndex: 1,
              }}>
                <div style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backfaceVisibility: 'hidden'
                }}>
                  <img
                    src={achiever.image}
                    alt={achiever.name}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      borderRadius: '0.3rem'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    color: 'white',
                    padding: '1rem'
                  }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>{achiever.name}</h3>
                  </div>
                </div>
                <div style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backfaceVisibility: 'hidden',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  padding: '1.5rem',
                  textAlign: 'center',
                  transform: 'rotateY(180deg)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '0.3rem',
                  overflowY: 'auto'
                }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>{achiever.name}</h3>
                  <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                    {achiever.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}