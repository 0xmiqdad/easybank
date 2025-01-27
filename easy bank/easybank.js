// Wait for DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    // Select elements
    const navLinks = document.querySelectorAll(".nav a");
    const requestButtons = document.querySelectorAll(".request-invite");
    const header = document.querySelector(".header");
  
    // Highlight active link
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        // Remove active state from all links
        navLinks.forEach((link) => link.classList.remove("active"));
        // Add active state to the clicked link
        e.target.classList.add("active");
      });
    });
  
    // Smooth scroll behavior for navigation links
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = link.getAttribute("href").replace("#", "");
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - header.offsetHeight,
            behavior: "smooth",
          });
        }
      });
    });
  
    // Handle button click (e.g., Request Invite)
    requestButtons.forEach((button) => {
      button.addEventListener("click", () => {
        alert("Thank you for your interest! Stay tuned for updates.");
      });
    });
  
    // Sticky header effect
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
  });
  