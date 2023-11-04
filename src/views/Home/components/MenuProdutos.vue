<template>
    <section id="menuancora" class="bg-white w-full px-2 pt-3 nav flex space-x-2 overflow-x-auto ">
        <button @click="menuAncora('#pizzas')"
            class="pizzas whitespace-nowrap text-blue-700 border-2 border-blue-700 focus:outbuttonne-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">
            PIZZAS
        </button>
        <button @click="menuAncora('#sanduiches')"
            class="sanduiches whitespace-nowrap text-blue-700 border-2 border-blue-700 focus:outbuttonne-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">
            SANDUICHES
        </button>
        <button @click="menuAncora('#tapioca-recheada')"
            class="tapioca-recheada whitespace-nowrap text-blue-700 border-2 border-blue-700 focus:outbuttonne-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">
            TAPIOCA RECHEADA
        </button>
        <button @click="menuAncora('#bebidas-com-gelo')"
            class="bebidas-com-gelo whitespace-nowrap text-blue-700 border-2 border-blue-700 focus:outbuttonne-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">
            BEBIDAS COM GELO
        </button>
    </section>
</template>

<script setup lang="ts">

function menuAncora(value: any) {
    location.href = value;
    menuAncoraColor(value);
}

function menuAncoraColor(value: any) {
    const menuancora = document.getElementById("menuancora");
    const botao = menuancora?.children;

    if (botao) {
        for (let index = 0; index < botao.length; index++) {
            const botaoItem = botao[index];

            if ("#" + botaoItem.classList[0] == value) {
                botao[index].classList.remove("text-blue-700");
                botao[index].classList.add("text-white");
                botao[index].classList.add("bg-blue-700");
            } else {
                console.log(botaoItem.classList[0])
                botao[index].classList.remove("text-white");
                botao[index].classList.remove("bg-blue-700");
                botao[index].classList.add("text-blue-700");
            }

        }
    }
}

function ancoraLateral(posicaoDoScroll: any){
    const categoria = document.getElementsByClassName("categoria");
    console.log(posicaoDoScroll)
    if (categoria) {
        const posicaoY = Math.floor(posicaoDoScroll);
        for (let index = 0; index < categoria.length; index++) {
            const botaoItemTop = categoria[index].offsetTop;
           const botaoItemTopHeight = categoria[index].offsetHeight;
           if( (posicaoY >= botaoItemTop) && (posicaoY <= botaoItemTop+botaoItemTopHeight) ){
            menuAncoraColor("#"+categoria[index].children[0].children[0].id);
           }
           
        }
    }
}

function menuTopo(posicaoDoScroll: any){
    const posicaoY = Math.floor(posicaoDoScroll);
    const menuancora = document.querySelectorAll("#menuancora");
    if(posicaoY >= 283){
        menuancora[0].classList.add('fixed');
        menuancora[0].classList.add('top-0');
    }else{
        menuancora[0].classList.remove('fixed');
        menuancora[0].classList.remove('top-0');
    }
}
window.addEventListener('scroll', function () {
    const posicaoDoScroll = window.scrollY;
    //console.log('Posição do scroll:', posicaoDoScroll);
    ancoraLateral(posicaoDoScroll);
    menuTopo(posicaoDoScroll);
});
</script>

<style>
html {
    scroll-behavior: smooth;
}</style>