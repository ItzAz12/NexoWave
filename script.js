/* ==========================
NEXOWAVE | SCRIPT.JS
========================== */

// Mobile Navigation

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
navMenu.classList.toggle("active");
});

// Close menu when clicking a link

document.querySelectorAll("nav a").forEach(link => {
link.addEventListener("click", () => {
navMenu.classList.remove("active");
});
});

// Scroll Reveal Animation

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {  

    if(entry.isIntersecting){  

        entry.target.classList.add("show");  

    }  

});

},{
threshold:0.2
});

document.querySelectorAll("section,.card,.member,.review,.stat").forEach(el=>{

el.classList.add("hidden");  

observer.observe(el);

});

// Navbar Background on Scroll

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");  

if(window.scrollY>80){  

    header.style.background="rgba(0,0,0,.75)";  
    header.style.backdropFilter="blur(25px)";  
    header.style.boxShadow="0 10px 35px rgba(0,0,0,.35)";  

}else{  

    header.style.background="rgba(0,0,0,.45)";  
    header.style.boxShadow="none";  

}

});

// Animated Statistics

const stats=document.querySelectorAll(".stat h2");

stats.forEach(stat=>{

const target=stat.innerText;  

if(target.includes("+")){  

    const number=parseInt(target);  

    let count=0;  

    const update=()=>{  

        count++;  

        stat.innerText=count+"+";  

        if(count<number){  

            requestAnimationFrame(update);  

        }  

    };  

    update();  

}

});

// Contact Form

const form=document.querySelector("form");

form.addEventListener("submit", () => {
setTimeout(() => {
alert("Thank you! Your message has been sent successfully.");
}, 300);
});

// Console Message

console.log(
"%cWelcome to NexoWave",
"color:#1f6bff;font-size:22px;font-weight:bold;"
);
