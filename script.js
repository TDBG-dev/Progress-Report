// Reveal elements when scrolled into view



const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

// Sidebar active link animation
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  document.querySelectorAll("section").forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const historySection = document.querySelector("#history .content");

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-gallery");

  const imageNames = [
    "img1", "img2", "img3", "img4", "img5",
    "img6", "img7", "img8", "img9", "img10",
    "img20", "img21", "img22", "img23", "img24",
    "img25", "img26", "img32", "img33", "img34"
  ];

  imageNames.forEach(name => {
    ["jpg", "jpeg", "png"].forEach(ext => {
      const img = document.createElement("img");
      img.src = `images/${name}.${ext}`;
      img.alt = name;
      img.className = "gallery-img";
      img.onerror = () => img.remove(); // remove if not found
      imageContainer.appendChild(img);
    });
  });

  historySection.appendChild(imageContainer);
});
