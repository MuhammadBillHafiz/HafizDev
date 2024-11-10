const apps = [
  {
    name: "Game Quiz MTK V.1 (PC)",
    description:
      "Game berbasis kuis mata pelajaran matematika dasar untuk PC <br>Size : 651 KB",
    videoPreview: "Videos/Preview Game Quiz PC.mp4",
    images: [
      "Image/Image Foto Game Quiz PC 1.png",
      "Image/Image Foto Game Quiz PC 2.png",
      "Image/Image Foto Game Quiz PC 3.png",
    ],
    downloadLink:
      "https://drive.google.com/drive/folders/1VbhzcJmCsxtnrQOl3hWCYYfTKRL-6eNn?usp=sharing",
  },
  {
    name: "Game Quiz MTK V.1 (Android)",
    description:
      "Game berbasis kuis mata pelajaran matematika dasar untuk Android Size : 27 MB",
    videoPreview: "Videos/Preview Game Quiz Android.mp4",
    images: [
      "Image/Image Foto Game Quiz Android 1.jpeg",
      "Image/Image Foto Game Quiz Android 2.jpeg",
      "Image/Image Foto Game Quiz Android 3.jpeg",
    ],
    downloadLink:
      "https://drive.google.com/drive/folders/1VbhzcJmCsxtnrQOl3hWCYYfTKRL-6eNn?usp=sharing",
  },
];

function loadApps() {
  const appContainer = document.getElementById("appContainer");
  apps.forEach((app) => {
    const appCard = document.createElement("div");
    appCard.classList.add("app-card");

    // Video preview
    const video = document.createElement("video");
    video.classList.add("video-preview");
    video.src = app.videoPreview;
    video.controls = true;

    // Image carousel
    const carousel = document.createElement("div");
    carousel.classList.add("carousel");
    app.images.forEach((imageSrc) => {
      const img = document.createElement("img");
      img.src = imageSrc;
      carousel.appendChild(img);
    });

    // App content
    appCard.innerHTML = `
            <h2>${app.name}</h2>
            <p>${app.description}</p>
            <a href="${app.downloadLink}" class="download-button">Download</a>
        `;

    // Append elements
    appCard.insertBefore(video, appCard.firstChild);
    appCard.insertBefore(carousel, appCard.children[1]);
    appContainer.appendChild(appCard);
  });
}

window.onload = loadApps;
