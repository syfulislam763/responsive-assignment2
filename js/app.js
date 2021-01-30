
let modal = document.getElementById('modal');
let title = document.getElementById('title');
let image = document.getElementById('image')



function buyNow(url, t){
    modal.classList = 'modal d-block';
    image.src = url;
    title.innerText = t;
}

function closeModal() {
    modal.classList = 'modal d-none';
}