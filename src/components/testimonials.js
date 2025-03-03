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

// Function to change testimonial
window.changeTestimonial = function (direction) {
  // Update index based on direction
  if (direction === "next") {
    currentTestimonialIndex =
      (currentTestimonialIndex + 1) % testimonials.length;
  } else {
    currentTestimonialIndex =
      (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
  }

  // Update testimonial text
  const testimonialText = document.getElementById("testimonial-text");
  if (testimonialText) {
    testimonialText.textContent = testimonials[currentTestimonialIndex].text;
  }

  // Update client display
  const clientsContainer = document.getElementById("testimonial-clients");
  if (clientsContainer) {
    // Clear current clients
    clientsContainer.innerHTML = "";

    // Add clients with proper active state
    testimonials.forEach((client, index) => {
      const isActive = index === currentTestimonialIndex;
      const clientElement = document.createElement("div");
      clientElement.id = `client-${index}`;
      clientElement.className = `text-center transition-all duration-300 mx-2 ${isActive ? "scale-125 z-10" : "opacity-50 scale-90"}`;

      // Always show all clients on desktop
      // No display:none condition here

      clientElement.innerHTML = `
        <div class="mb-2">
          <img src="${client.image}" alt="${client.name}" class="w-16 h-16 rounded-full mx-auto" />
        </div>
        <div class="flex justify-center mb-1">
          ${Array(5)
            .fill()
            .map(() => '<i class="fas fa-star text-black text-xs"></i>')
            .join("")}
        </div>
        <p class="text-sm font-medium">${client.name}</p>
        <p class="text-xs text-gray-500">${client.role}</p>
      `;

      clientsContainer.appendChild(clientElement);
    });
  }
};

// Initialize testimonials when page loads
document.addEventListener("DOMContentLoaded", function () {
  // Set up event listeners for testimonial navigation
  const prevButton = document.getElementById("prev-testimonial");
  const nextButton = document.getElementById("next-testimonial");

  if (prevButton) {
    prevButton.addEventListener("click", () => changeTestimonial("prev"));
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => changeTestimonial("next"));
  }
});
