// Sample course data
const courses = [
    "Introduction to Genomics",
    "Bioinformatics Tools and Techniques",
    "Next-Generation Sequencing Analysis",
    "Genome Assembly and Annotation",
    "Comparative Genomics",
    "Functional Genomics and Transcriptomics",
    "Metagenomics and Microbiome Analysis"
];

// Sample schedule data
const schedule = [
    { date: "June 1, 2025", course: "Introduction to Genomics", instructor: "Dr. Jane Smith" },
    { date: "June 15, 2025", course: "Bioinformatics Tools and Techniques", instructor: "Prof. John Doe" },
    { date: "July 1, 2025", course: "Next-Generation Sequencing Analysis", instructor: "Dr. Emily Brown" },
    { date: "July 15, 2025", course: "Genome Assembly and Annotation", instructor: "Prof. Michael Johnson" }
];

// Function to populate the course list
function populateCourses() {
    const courseList = document.getElementById('course-list');
    courses.forEach(course => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-dna"></i> ${course}`;
        courseList.appendChild(li);
    });
}

// Function to populate the schedule
function populateSchedule() {
    const scheduleBody = document.getElementById('schedule-body');
    schedule.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.date}</td>
            <td>${item.course}</td>
            <td>${item.instructor}</td>
        `;
        scheduleBody.appendChild(row);
    });
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send this data to a server
    console.log("Form submitted:", { name, email, message });
    
    // Clear the form
    event.target.reset();
    
    // Show a success message
    alert("Thank you for your message. We will get back to you soon!");
}

// Dropdown menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const dropBtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');
    
    if (dropBtn && dropdownContent) {
        dropBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle the show class
            dropdownContent.classList.toggle('show');
            
            // Update button text
            this.innerHTML = dropdownContent.classList.contains('show') ? 'Menu ▼' : 'Menu ▲';
        });
    }

    // Close dropdown when clicking outside
    window.addEventListener('click', function(e) {
        if (!e.target.matches('.dropbtn') && !e.target.matches('.dropdown-content') && !e.target.matches('.dropdown-content *')) {
            if (dropdownContent && dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
                if (dropBtn) {
                    dropBtn.innerHTML = 'Menu ▲';
                }
            }
        }
    });

    // Keep these if you're using them
    if (typeof populateCourses === 'function') {
        populateCourses();
    }
    if (typeof populateSchedule === 'function') {
        populateSchedule();
    }
    
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});

// Call the functions when the page loads
window.onload = () => {
    populateCourses();
    populateSchedule();
    
    // Add event listener for form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', handleFormSubmit);
};
