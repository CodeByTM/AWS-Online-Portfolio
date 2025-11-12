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
  source.src = "SmartSpot_final.mp4"; // <-- Update with actual path
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

function getVisitorCount(){

const functionUrl = "https://dh3kjmwmwxein3frnbejtm6xt40rmtiv.lambda-url.us-east-1.on.aws/";

async function updateAndFetchViewCount() {
  try {
    const response = await fetch(functionUrl); // GET by default
    const data = await response.json();
    document.getElementById("viewCount").innerText = data.views;
  } catch (error) {
    console.error("Error fetching view count:", error);
    document.getElementById("viewCount").innerText = "error";
  }
}

window.addEventListener("DOMContentLoaded", updateAndFetchViewCount);


}
