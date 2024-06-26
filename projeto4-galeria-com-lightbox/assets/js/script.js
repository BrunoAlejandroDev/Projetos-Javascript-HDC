const galleryItems = document.querySelectorAll('.gallery-item')
const lightbox = document.querySelector('.lightbox')
const lightboxImage = document.querySelector('.lightbox-image')
const btnLightboxClose = document.querySelector('.lightbox-close')

// usar forEach para percorrer a galeria e adicionar uma função de clique
galleryItems.forEach((item)=>{
    // funcionalidade de clique nas imagens da galeria
    item.addEventListener('click', ()=>{
        // selecionar a classe de cada imagem e pegar o atributo src
        const imageUrl = item.querySelector('.gallery-image').getAttribute('data-src');

        // inserindo o atributo src nas imagens em que o usuário selecionar
        lightboxImage.setAttribute('src', imageUrl);

        // colocando o display flex na lightbox para retirar o display none toda vez que uma foto for selecionada
        if (lightbox.classList.contains('fecharModal')) {
            lightbox.classList.replace('fecharModal' ,'abrirModal');
            document.body.style.overflow = 'hidden';
        }
    })
});

lightbox.addEventListener('click', (event) => {
    //console.log(event.target);
    if (lightbox.classList.contains('abrirModal') && event.target === lightbox) {
        lightbox.classList.remove('abrirModal');
        lightbox.classList.add('fecharModal');
        document.body.style.overflow = 'auto';
    }
})

btnLightboxClose.addEventListener("click", () => {
    if (lightbox.classList.contains('abrirModal')) {
        lightbox.classList.remove('abrirModal');
        lightbox.classList.add('fecharModal');
        document.body.style.overflow = 'auto';
    }
});