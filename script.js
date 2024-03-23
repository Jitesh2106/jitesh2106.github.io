document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll to section when clicking on navigation links
    const navLinks = document.querySelectorAll('header nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const targetId = this.getAttribute('href').substring(1); // Get target section ID
            const targetSection = document.getElementById(targetId); // Get target section
            targetSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to target section
        });
    });

    // Add scroll event listener to reveal sections
    window.addEventListener("scroll", revealSections);
    revealSections(); // Call revealSections initially to check if any section is in view
});

function revealSections() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) { // Adjust the threshold as needed
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

const interestsElement = document.getElementById("interests"); // Target the correct element

// Define your list of interests as an array
const interests = ["Machine Learning", "Software Development", "Artificial Intelligence", "Natural Language Processing","Computer Vision","Data Analysis","Deep Learning"];

// Function to randomly select and display an interest
function displayRandomInterest() {
  const randomIndex = Math.floor(Math.random() * interests.length);
  const selectedInterest = interests[randomIndex];
  interestsElement.textContent = selectedInterest;
}

// Call the function on page load (optional)
displayRandomInterest();

// You can also call this function at specific intervals or events
// to update the interests dynamically (e.g., every 5 seconds)
setInterval(displayRandomInterest, 1000); // Update every 5 seconds

document.getElementById("download-resume").addEventListener("click", function() {
    // Create an anchor element
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1ojlJRa0yMCmhKTvrVOl0DU2-SsLk7vVc/view'; // Replace 'path/to/your/resume.pdf' with the actual path to your PDF file
    link.download = 'RESUME.pdf'; // Specify the file name for download
    link.target = '_blank'; // Open the link in a new tab
    document.body.appendChild(link); // Append the anchor element to the document body
    link.click(); // Simulate a click event to trigger the download
    document.body.removeChild(link); // Remove the anchor element from the document body
  });

// JavaScript code
window.addEventListener('load', function() {
    // Select all project cubes
    var cubes = document.querySelectorAll('.project-cube');
    
    // Set initial index
    var index = 0;
    
    // Set interval for moving cubes
    var interval = setInterval(function() {
        // Add class to animate cube
        cubes[index].classList.add('move');
        
        // Increment index
        index++;
        
        // Check if all cubes have been animated
        if (index >= cubes.length) {
            // Reset index and remove interval
            index = 0;
            clearInterval(interval);
        }
    }, 500); // Adjust the interval duration (in milliseconds) as needed
});
 
const contactDetails = document.getElementById("contact-details");

  // Define the text to be displayed
  const text = contactDetails.textContent.trim();

  // Function to display text letter by letter
  function showText(element, text, index, interval) {
    if (index < text.length) {
      element.textContent = text.substring(0, index + 1);
      setTimeout(() => showText(element, text, index + 1, interval), interval);
    } else {
      // Reset index and call function again after 2 seconds (2000ms)
      setTimeout(() => showText(element, text, 0, interval), 2000);
    }
  }

  // Call the function with desired interval (in milliseconds)
  showText(contactDetails, text, 0, 100);

  const nameElement = document.querySelector("#home-section h2");
  const text2 = nameElement.textContent.trim();
  let index = 0;
  
  const typeWriter = () => {
    if (index < text2.length) {
      nameElement.textContent = text2.substring(0, index + 1);
      index++;
      setTimeout(typeWriter, 100); // Adjust typing speed (lower for faster)
    } else {
      // Reset index and call function again after 3 seconds (3000ms)
      index = 0;
      setTimeout(typeWriter, 3000); // Call without additional delay
    }
  };
  
  typeWriter();


  

  