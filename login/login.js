// Handle scroll events
let lastScrollTop = 0; // To track the last scroll position
let debounceTimeout; // Variable to handle debouncing

// Function to check if the user is scrolling up or down
function handleScroll() {
  const slideTextLeft = document.querySelector('.slide-text-left');
  const slideTextRight = document.querySelector('.slide-text-right');
  
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // If scrolling down
  if (scrollTop > lastScrollTop) {
    // Show slide-in animation
    slideTextLeft.classList.add('visible');
    slideTextRight.classList.add('visible');
  } else {
    // Scroll up - slide-out animation
    slideTextLeft.classList.remove('visible');
    slideTextRight.classList.remove('visible');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Avoid negative scroll
}

// Debounce function to delay handling of scroll events
function debounceScroll() {
  clearTimeout(debounceTimeout); // Clear previous timeout
  debounceTimeout = setTimeout(handleScroll, 50); // Wait 50ms after the scroll stops
}

// Attach the scroll event listener with debounce
window.addEventListener('scroll', debounceScroll);

// Smooth scroll to the sign-up panel
document.getElementById("scroll-to-signup").addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById('student-panel').scrollIntoView({
    behavior: 'smooth'
  });
});

// Handle login form submission
document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent form from submitting normally

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  // Check credentials (example: admin / password123)
  if (username === "admin" && password === "password123") {
    message.style.color = "black";
    message.textContent = "Login successful!";

    // Redirect to home page after 1 second
    setTimeout(() => {
      window.location.href = "../home/home.html";
    }, 1000);
  } else {
    message.style.color = "red";
    message.textContent = "Invalid username or password.";
  }
});
