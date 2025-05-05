document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn-course");
    const videoContainer = document.getElementById("videoContainer");
    const videoFrame = document.getElementById("courseVideo");
    const progressBar = document.querySelector(".progress");
    const progressText = document.getElementById("progressText");
  
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const videoURL = button.getAttribute("data-video");
        const progress = button.getAttribute("data-progress");

        videoFrame.src = videoURL;
        videoContainer.style.display = "block";
        videoContainer.scrollIntoView({ behavior: "smooth" });

        progressBar.style.width = progress + "%";
        progressText.textContent = `${progress}% of the course completed.`;
      });
    });
});
