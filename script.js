const buttonElement = document.getElementById('button');
const videoElement = document.getElementById('video');

// Prompt to select media stream, pass video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }

  } catch (error) {
    console.log("something went wrong:", error)
  }
}

buttonElement.addEventListener('click', async () => {
  buttonElement.disabled = true;

  // Start picture in picture
  await videoElement.requestPictureInPicture();

  buttonElement.disabled = false;
});

// On load
selectMediaStream();