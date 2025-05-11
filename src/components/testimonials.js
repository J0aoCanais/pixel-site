// Testimonial data
window.testimonials = [
  {
    name: "Imran Khan",
    role: "Software Engineer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=3",
    text: "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I've come across so far. Wouldn't be hesitated to introduce their work to someone else.",
  },
  {
    name: "Alexander M. Smith",
    role: "CEO, TechCorp",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
    text: "Working with this team was a game-changer for our business. Their attention to detail and innovative approach helped us achieve results beyond our expectations.",
  },
  {
    name: "Patricia R. Miller",
    role: "Marketing Director",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=2",
    text: "The website they created for us perfectly captures our brand essence. Their team was responsive, professional, and delivered exactly what we needed on time and within budget.",
  },
  {
    name: "Michael J. Brown",
    role: "Entrepreneur",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=4",
    text: "I've worked with many web development agencies, but none have matched the level of service and quality I received here. They truly understand how to create websites that convert visitors into customers.",
  },
];

window.currentTestimonialIndex = 0;

// Function to update testimonial with animation
function updateTestimonial(index) {
  const testimonial = testimonials[index];
  const content = document.getElementById('testimonial-content');
  const text = document.getElementById('testimonial-text');
  const clients = document.getElementById('testimonial-clients');
  
  // Fade out current content
  content.style.opacity = '0';
  content.style.transform = 'translateY(20px)';
  
  setTimeout(() => {
    // Update content
    text.textContent = testimonial.text;
    
    // Update active client
    const clientElements = clients.children;
    for (let i = 0; i < clientElements.length; i++) {
      const client = clientElements[i];
      if (i === index) {
        client.classList.add('active');
        client.style.transform = 'scale(1.1)';
        client.style.opacity = '1';
        client.style.filter = 'drop-shadow(0 0 12px #fff)';
        client.style.zIndex = '10';
      } else {
        client.classList.remove('active');
        client.style.transform = 'scale(1)';
        client.style.opacity = '0.6';
        client.style.filter = 'none';
        client.style.zIndex = '1';
      }
    }
    
    // Fade in new content
    content.style.opacity = '1';
    content.style.transform = 'translateY(0)';
  }, 300);
}

// Auto-rotate testimonials
let testimonialInterval = setInterval(() => {
  window.currentTestimonialIndex = (window.currentTestimonialIndex + 1) % testimonials.length;
  updateTestimonial(window.currentTestimonialIndex);
}, 5000);

// Add click handlers to client images
document.addEventListener('DOMContentLoaded', () => {
  const clients = document.getElementById('testimonial-clients');
  if (clients) {
    const clientElements = clients.children;
    for (let i = 0; i < clientElements.length; i++) {
      clientElements[i].addEventListener('click', () => {
        window.currentTestimonialIndex = i;
        updateTestimonial(i);
        clearInterval(testimonialInterval);
        testimonialInterval = setInterval(() => {
          window.currentTestimonialIndex = (window.currentTestimonialIndex + 1) % testimonials.length;
          updateTestimonial(window.currentTestimonialIndex);
        }, 5000);
      });
    }
  }
});
