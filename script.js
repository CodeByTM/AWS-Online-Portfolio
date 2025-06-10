function toggleMenu(){

    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


function showVideo() {
  // Create the modal container
  const modal = document.createElement("div");
  modal.className = "video-modal";
  modal.id = "videoModal";

  // Create the video wrapper
  const wrapper = document.createElement("div");
  wrapper.className = "video-wrapper";

  // Create the close button
  const closeBtn = document.createElement("button");
  closeBtn.className = "close-button";
  closeBtn.innerHTML = "×";
  closeBtn.onclick = closeVideo;

  // Create the video element
  const video = document.createElement("video");
  video.id = "demoVideo";
  video.controls = true;
  video.autoplay = true;

  // Create the source
  const source = document.createElement("source");
  source.src = "./Assets/SmartSpot_final.mp4"; // <-- Update with your actual path
  source.type = "video/mp4";

  // Assemble the video
  video.appendChild(source);
  wrapper.appendChild(closeBtn);
  wrapper.appendChild(video);
  modal.appendChild(wrapper);
  document.body.appendChild(modal);

  // Show the modal
  modal.style.display = "flex";
}

function closeVideo() {
  const modal = document.getElementById("videoModal");
  if (modal) {
    modal.remove(); // Completely remove the modal and video from DOM
  }
}
