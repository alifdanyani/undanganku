const img = document.querySelectorAll("#img")
const close = document.querySelector("ion-icon.text-red-300")

close.addEventListener("click", (e)=>{
  e.target.parentElement.parentElement.style.display = "none"
})

img.forEach(i => {
  i.addEventListener("click", ()=>{
    const modal = document.getElementById("modal")
    modal.style.display = "flex"
    modal.querySelector("img").src = i.src
  } )
})

const cover = () =>{
  const cover = document.getElementById("cover")
  cover.classList.add("cover")
}