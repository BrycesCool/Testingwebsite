import React, { useState } from 'react';

const ProductPage = () => {
  const [selectedSize, setSelectedSize] = useState('');
  
  const sizes = ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12'];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '32px 24px' }}>
        {/* Breadcrumb */}
        <nav style={{ fontSize: '14px', color: '#6b7280', marginBottom: '32px', textAlign: 'right' }}>
          <span>Shoes</span> / <span style={{ color: '#1f2937' }}>StrideForm Pulse Runner</span>
        </nav>

        <div style={{ display: 'grid', gridTemplateColumns: '60% 40%', gap: '48px' }}>
          {/* Product Image */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '32px' }}>
            <div style={{ aspectRatio: '1 / 1', backgroundColor: '#e5e7eb', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="https://via.placeholder.com/320x192.png?text=Shoe+Placeholder" alt="Pulse Runner" style={{ width: '320px', height: '192px', borderRadius: '8px' }} />
            </div>
          </div>

          {/* Product Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: '14px', color: '#6b7280' }}>Men's Running Shoes</span>
            </div>

            <h1 style={{ fontSize: '36px', fontWeight: '700', color: '#1f2937' }}>StrideForm Pulse Runner</h1>
            
            <div style={{ fontSize: '30px', fontWeight: '700', color: '#1f2937' }}>$120</div>

            {/* Rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ fontSize: '24px', fontWeight: '700', color: '#1f2937' }}>4.5</span>
                <div style={{ display: 'flex', marginLeft: '8px' }}>
                  {[1, 2, 3, 4].map((star) => (
                    <span key={star} style={{ fontSize: '20px', color: '#f59e0b' }}>★</span>
                  ))}
                  <span style={{ fontSize: '20px', color: '#d1d5db' }}>★</span>
                </div>
              </div>
              <span style={{ color: '#6b7280' }}>120 reviews</span>
            </div>

            {/* Rating Breakdown */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { stars: 5, percentage: 50 },
                { stars: 4, percentage: 30 },
                { stars: 3, percentage: 10 },
                { stars: 2, percentage: 5 },
                { stars: 1, percentage: 5 }
              ].map((rating) => (
                <div key={rating.stars} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '14px', width: '16px' }}>{rating.stars}</span>
                  <div style={{ flex: '1', backgroundColor: '#e5e7eb', borderRadius: '9999px', height: '8px' }}>
                    <div style={{ height: '8px', backgroundColor: '#1f2937', borderRadius: '9999px', width: `${rating.percentage}%` }}></div>
                  </div>
                  <span style={{ fontSize: '14px', color: '#6b7280', width: '32px' }}>{rating.percentage}%</span>
                </div>
              ))}
            </div>

            {/* Size Selection */}
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1f2937', marginBottom: '16px' }}>Select Size</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', gap: '12px' }}>
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    style={{
                      padding: '12px 16px',
                      border: selectedSize === size ? '2px solid #1f2937' : '2px solid #d1d5db',
                      borderRadius: '8px',
                      textAlign: 'center',
                      backgroundColor: selectedSize === size ? '#1f2937' : 'transparent',
                      color: selectedSize === size ? '#ffffff' : '#1f2937',
                      transition: 'all 0.2s',
                      cursor: 'pointer'
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <button style={{ width: '100%', backgroundColor: '#1f2937', color: '#ffffff', padding: '16px', borderRadius: '8px', fontWeight: '600', fontSize: '18px', transition: 'background-color 0.3s', cursor: 'pointer' }}>
              Add to Cart
            </button>

            {/* Product Description */}
            <div>
            
            </div>
             
          </div>
        </div>
        <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1f2937', marginBottom: '12px' }}>Product Description</h3>
              <p style={{ fontSize: '16px', color: '#4b5563', lineHeight: '1.5' }}>
                The StrideForm Pulse Runner is engineered for optimal performance and comfort. 
                Featuring a breathable mesh upper, responsive cushioning, and a durable outsole, 
                these shoes are perfect for both casual runs and intense training sessions. 
                Experience the perfect blend of style and functionality with the Pulse Runner.
              </p>
      </div>
    </div>
  );
};

export default ProductPage;