import React from 'react';

const Navigation = ({ currentPage, setCurrentPage }) => {
  return (
    <nav style={{ marginTop: "3px", marginBottom: "3px", backgroundColor: '#ffffff', borderBottom: '1px solid #e5e7eb', padding: '16px 24px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)', }}>
      <div style={{ maxWidth: '1152px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '24px', height: '24px', backgroundColor: '#000000', marginRight: '12px', borderRadius: '4px' }}></div>
          <span style={{ fontSize: '24px', fontWeight: '700', color: '#1f2937', letterSpacing: '-0.5px' }}>StrideForm</span>
        </div>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <button
            onClick={() => setCurrentPage('home')}
            style={{
              fontSize: '16px',
              fontWeight: '600',
              color: currentPage === 'home' ? '#1f2937' : '#6b7280',
              borderBottom: currentPage === 'home' ? '3px solid #1f2937' : 'none',
              paddingBottom: currentPage === 'home' ? '6px' : '2px',
              background: 'none',
              cursor: 'pointer',
              transition: 'color 0.3s, border-bottom 0.3s',
              outline: 'none',
              padding: '4px 8px'
            }}
          >
            Home
          </button>
          <button
            onClick={() => setCurrentPage('product')}
            style={{
              fontSize: '16px',
              fontWeight: '600',
              color: currentPage === 'home' ? '#1f2937' : '#6b7280',
              borderBottom: currentPage === 'home' ? '3px solid #1f2937' : 'none',
              paddingBottom: currentPage === 'home' ? '6px' : '2px',
              background: 'none',
              cursor: 'pointer',
              transition: 'color 0.3s, border-bottom 0.3s',
              outline: 'none',
              padding: '4px 8px'
            }}
          >
            Product 1
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;