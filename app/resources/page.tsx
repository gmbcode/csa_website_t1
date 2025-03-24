import React from "react";

const resources = [
  { title: "Card #1", description: "Description for card #1.", link: "https://www.google.com" },
  { title: "Card #2", description: "Description for card #2.", link: "https://www.google.com" },
  { title: "Card #3", description: "Description for card #3.", link: "https://www.google.com" },
  { title: "Card #4", description: "Description for card #4.", link: "https://www.google.com" },
];

export default function ResourcesPage() {
  return (
    <div style={{ padding: '24px' }}>
      {/* Heading */}
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px', marginTop: '16px' }}>Resources</h1>
      
      {/* Resource Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
        {resources.map((resource, index) => (
          <a key={index} href={resource.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '16px', textAlign: 'center', background: '#222', color: '#fff', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', transition: '0.3s', cursor: 'pointer' }}
              onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 6px 10px rgba(0,0,0,0.2)'}
              onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)'}>
              <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>{resource.title}</h2>
              <p style={{ fontSize: '14px', color: '#bbb' }}>{resource.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
