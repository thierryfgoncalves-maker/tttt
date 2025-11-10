async function iniciarCamera() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    const video = document.getElementById('video');
    video.srcObject = stream;
  } catch (err) {
    alert("Erro ao acessar a câmera: " + err);
  }
}

iniciarCamera();
