//menu sticky

Window.onscroll=() => stickyMenu();

let header = document.getElementById("header");
let sticky = header.offsetTop;

stickyMenu = () =>(window.pageXOffset >sticky)
? header.classList.add("sticky")
:header.classList.remove("sticky");

// show/hide menu mobil version
let showMenu = false;
const menuMain = document.getElementById("menu");
const btnmenuToggle = document.getElementById("btn-menu-toggle");

let actionMenu = () =>{
    if(showMenu){
        menuMain.classList.remove("show");
        showMenu = false;

    }else{
        menuMain.classList.add("show");
        showMenu = true;
    }
}
btnmenuToggle.addEventListener("click", actionMenu);


// form submit

        function submitForm(event) {
            // Prevent the form from submitting in the traditional way
            event.preventDefault();
    
            // Your form submission logic here
            // For example, using fetch to submit the form data to the server
            fetch("https://getform.io/f/f465d4da-98d8-4702-b3a3-0f25b6cb52d6", {
                method: "POST",
                body: new FormData(event.target),
            })
            .then(response => {
                // Handle the response, check for success
                if (response.ok) {
                    // Reset the form fields
                    document.getElementById("name").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("tel").value = "";
                    
                    // Show an alert message
                    alert("Form submitted successfully!");
                }
            })
            .catch(error => {
                console.error("Error submitting form:", error);
                // Handle errors if needed
            });
        }
// swiper
  
const testimonials = [
    {
      name: "Raj Khare",
      job: "Banglore",
      image: "/img/review2.png",
      testimonial:
      "I am amazed by the VR headset I purchased. The image quality is outstanding, and the virtual environments feel so real. The setup was a breeze, and I appreciate the wide range of compatible apps and games. This VR experience has taken entertainment to a whole new level",
    },
    {
      name: "Mayur kazi",
      job: "Delhi,india",
      image: "/img/review3.png",
      testimonial:
     " The VR headset is decent, but I expected a bit more in terms of comfort. The visual experience is good, but I find the device a bit heavy after extended use. Additionally, some of the software feels a bit glitchy. It's an okay product, but there's room for improvement.",
    },
    {
      name: "mina Das",
      job: "Betul",
      image: "/img/tusar.png",
      testimonial:
      "Unfortunately, I had a subpar experience with the VR headset. The setup was confusing, and I encountered technical issues right from the start. The limited app selection was disappointing, and the overall performance didn't meet my expectations. I'm considering returning it.",
    },
    {
    image: "/img/review1.png",
      name: "Nilam roy",
      job: "Indore",
      image: "/img/review1.png",
      testimonial:
      "The VR headset is decent, but I expected a bit more in terms of comfort. The visual experience is good, but I find the device a bit heavy after extended use. Additionally, some of the software feels a bit glitchy. It's an okay product, but there's room for improvement.",
    },
  ];
  
  //Current Slide
  let i = 0;
  //Total Slides
  let j = testimonials.length;
  
  let testimonialContainer = document.getElementById("testimonial-container");
  let nextBtn = document.getElementById("next");
  let prevBtn = document.getElementById("prev");
  
  nextBtn.addEventListener("click", () => {
    i = (j + i + 1) % j;
    displayTestimonial();
  });
  prevBtn.addEventListener("click", () => {
    i = (j + i - 1) % j;
    displayTestimonial();
  });
  
  let displayTestimonial = () => {
    testimonialContainer.innerHTML = `
      
      <img src=${testimonials[i].image}>
      <h3>${testimonials[i].name}</h3>
      <h6>${testimonials[i].job}</h6>
      <p>${testimonials[i].testimonial}</p>
    `;
  };
  window.onload = displayTestimonial;