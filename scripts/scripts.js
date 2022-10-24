const modalButton = document.getElementById("modalButton");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("modal");

modalButton.addEventListener("click", function() {
    modal.classList.add("active-modal");
})

closeModal.addEventListener("click", function () {
    modal.classList.remove("active-modal");
})