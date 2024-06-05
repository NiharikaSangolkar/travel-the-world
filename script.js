document.addEventListener("DOMContentLoaded", function() {
  // Function to toggle "Read More" content
  const readMoreButtons = document.querySelectorAll(".read-more");
  readMoreButtons.forEach(button => {
      button.addEventListener("click", function() {
          const moreInfo = this.nextElementSibling;
          if (moreInfo.style.display === "block") {
              moreInfo.style.display = "none";
              this.textContent = "Read More";
          } else {
              moreInfo.style.display = "block";
              this.textContent = "Read Less";
          }
      });
  });

  // Accordion functionality
  const accordionButtons = document.querySelectorAll(".accordion-button");
  accordionButtons.forEach(button => {
      button.addEventListener("click", function() {
          const accordionContent = this.nextElementSibling;
          if (accordionContent.style.display === "block") {
              accordionContent.style.display = "none";
          } else {
              accordionContent.style.display = "block";
          }
      });
  });
});
