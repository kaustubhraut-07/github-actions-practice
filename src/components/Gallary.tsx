import React from 'react';
import './Gallery.css';

const Gallery: React.FC = () => {
  const images = [
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGxhbmRzY2FwaW5nfGVufDB8fHx8MTYyNzUxMjI5Mw&ixlib=rb-1.2.1&q=80&w=200',
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGxhbmRzY2FwaW5nfGVufDB8fHx8MTYyNzUxMjI5Mw&ixlib=rb-1.2.1&q=80&w=200',
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGxhbmRzY2FwaW5nfGVufDB8fHx8MTYyNzUxMjI5Mw&ixlib=rb-1.2.1&q=80&w=200',
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGxhbmRzY2FwaW5nfGVufDB8fHx8MTYyNzUxMjI5Mw&ixlib=rb-1.2.1&q=80&w=200',
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGxhbmRzY2FwaW5nfGVufDB8fHx8MTYyNzUxMjI5Mw&ixlib=rb-1.2.1&q=80&w=200',
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGxhbmRzY2FwaW5nfGVufDB8fHx8MTYyNzUxMjI5Mw&ixlib=rb-1.2.1&q=80&w=200',
  ];

  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.map((url, index) => (
          <div key={index} className="gallery-item">
            <img src={url} alt={`Gallery Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
