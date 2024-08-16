import React from 'react';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'John Doe',
      quote: 'This service is amazing! I couldn\'t be happier.',
      image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGxhbmRzY2FwaW5nfGVufDB8fHx8MTYyNzUxMjI5Mw&ixlib=rb-1.2.1&q=80&w=200',
    },
    {
      name: 'Jane Smith',
      quote: 'A life-changing experience, highly recommend it.',
      image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGxhbmRzY2FwaW5nfGVufDB8fHx8MTYyNzUxMjI5Mw&ixlib=rb-1.2.1&q=80&w=200',
    },
    {
      name: 'Mark Johnson',
      quote: 'Exceptional quality and service. Five stars!',
      image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGxhbmRzY2FwaW5nfGVufDB8fHx8MTYyNzUxMjI5Mw&ixlib=rb-1.2.1&q=80&w=200',
    },
    {
        name: 'Mark Doe',
        quote: 'Exceptional quality and service. Five stars!',
        image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGxhbmRzY2FwaW5nfGVufDB8fHx8MTYyNzUxMjI5Mw&ixlib=rb-1.2.1&q=80&w=200',
      },
  ];

  return (
    <div className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <img src={testimonial.image} alt={`${testimonial.name}'s picture`} />
            <blockquote>{testimonial.quote}</blockquote>
            <p>- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
