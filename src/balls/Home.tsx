import React from 'react';

const HomePage = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f4f4f9', fontFamily: "'Inter', sans-serif" }}>
      {/* Hero Section */}
      <div
        style={{
          position: 'relative',
          background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
          color: '#ffffff',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at top left, rgba(255,255,255,0.2), transparent 50%)',
            opacity: 0.3,
            zIndex: 1,
          }}
        ></div>
        <div
          style={{
            position: 'relative',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '100px 24px',
            textAlign: 'center',
            zIndex: 2,
          }}
        >
          <h1
            style={{
              fontSize: window.innerWidth >= 768 ? '56px' : '36px',
              fontWeight: 800,
              marginBottom: '20px',
              lineHeight: 1.2,
              textShadow: '0 2px 4px rgba(0,0,0,0.2)',
              animation: 'fadeIn 1s ease-in-out',
            }}
          >
            StrideForm: Step into Your Potential
          </h1>
          <p
            style={{
              fontSize: window.innerWidth >= 768 ? '22px' : '16px',
              marginBottom: '32px',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: 1.6,
              opacity: 0.9,
            }}
          >
            Discover footwear that blends comfort, style, and performance. Perfect for urban adventures or rugged trails.
          </p>
          <button
            style={{
              backgroundColor: '#ffffff',
              color: '#1e3a8a',
              fontWeight: 600,
              padding: '14px 40px',
              borderRadius: '50px',
              fontSize: '18px',
              border: 'none',
              cursor: 'pointer',
              transition: 'transform 0.3s, box-shadow 0.3s',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            }}
            onMouseOver={(e) => {
              const target = e.currentTarget as HTMLButtonElement;
              target.style.transform = 'scale(1.05)';
              target.style.boxShadow = '0 6px 16px rgba(0,0,0,0.3)';
            }}
            onMouseOut={(e) => {
              const target = e.currentTarget as HTMLButtonElement;
              target.style.transform = 'scale(1)';
              target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
            }}
          >
            Shop Now
          </button>
        </div>
      </div>

      {/* Featured Products Section */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '80px 24px',
        }}
      >
        <h2
          style={{
            fontSize: window.innerWidth >= 768 ? '40px' : '28px',
            fontWeight: 700,
            color: '#111827',
            marginBottom: '48px',
            textAlign: 'center',
            letterSpacing: '-0.025em',
          }}
        >
          Featured Products
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              window.innerWidth >= 1024
                ? 'repeat(3, minmax(0, 1fr))'
                : window.innerWidth >= 640
                ? 'repeat(2, minmax(0, 1fr))'
                : 'repeat(1, minmax(0, 1fr))',
            gap: '32px',
          }}
        >
          {/* Product 1 */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.03)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.1)';
            }}
          >
            <div
              style={{
                height: '260px',
                background: 'linear-gradient(45deg, #e5e7eb, #d1d5db)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: '70%',
                  height: '60%',
                  backgroundColor: '#9ca3af',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: 'rotate(-10deg)',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                }}
              >
                <span style={{ color: '#374151', fontWeight: 600, fontSize: '18px' }}>Urban Glide</span>
              </div>
            </div>
            <div style={{ padding: '24px' }}>
              <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#111827', marginBottom: '8px' }}>
                StrideForm Urban Glide
              </h3>
              <p style={{ fontSize: '16px', color: '#6b7280', marginBottom: '16px', lineHeight: 1.5 }}>
                Sleek design for city adventures
              </p>
              <p style={{ fontSize: '22px', fontWeight: 700, color: '#1e3a8a' }}>$89.99</p>
            </div>
          </div>

          {/* Product 2 */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.03)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.1)';
            }}
          >
            <div
              style={{
                height: '260px',
                background: 'linear-gradient(45deg, #4b5563, #6b7280)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: '70%',
                  height: '60%',
                  backgroundColor: '#374151',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: 'rotate(-10deg)',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                }}
              >
                <span style={{ color: '#ffffff', fontWeight: 600, fontSize: '18px' }}>Trailblazer</span>
              </div>
            </div>
            <div style={{ padding: '24px' }}>
              <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#111827', marginBottom: '8px' }}>
                StrideForm Trailblazer
              </h3>
              <p style={{ fontSize: '16px', color: '#6b7280', marginBottom: '16px', lineHeight: 1.5 }}>
                Durable for rugged terrains
              </p>
              <p style={{ fontSize: '22px', fontWeight: 700, color: '#1e3a8a' }}>$109.99</p>
            </div>
          </div>

          {/* Product 3 */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.03)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.1)';
            }}
          >
            <div
              style={{
                height: '260px',
                background: 'linear-gradient(45deg, #60a5fa, #2dd4bf)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: '70%',
                  height: '60%',
                  backgroundColor: '#3b82f6',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: 'rotate(-10deg)',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                }}
              >
                <span style={{ color: '#ffffff', fontWeight: 600, fontSize: '18px' }}>Performance Run</span>
              </div>
            </div>
            <div style={{ padding: '24px' }}>
              <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#111827', marginBottom: '8px' }}>
                StrideForm Performance Run
              </h3>
              <p style={{ fontSize: '16px', color: '#6b7280', marginBottom: '16px', lineHeight: 1.5 }}>
                Lightweight for optimal speed
              </p>
              <p style={{ fontSize: '22px', fontWeight: 700, color: '#1e3a8a' }}>$79.99</p>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Keyframes for Animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default HomePage;