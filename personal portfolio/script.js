function showImage(imgElement) {
    let popupImage = document.getElementById("popupImage");
    popupImage.src = imgElement.src;

    let imagePopup = document.getElementById("imagePopup");
    imagePopup.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeImage() {
    let imagePopup = document.getElementById("imagePopup");
    imagePopup.style.display = "none";
    document.body.style.overflow = "auto";
}
