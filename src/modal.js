import "./modalstyle.css";

export const modal = document.getElementById('modal');
export const modalcontent = document.getElementById('modal-content');
export const close = document.getElementById('close');
close.addEventListener('click', function (){
  modal.classList.add("hidden");
})
