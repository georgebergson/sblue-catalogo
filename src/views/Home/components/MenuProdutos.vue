<template>
    <section id="menuancora" class="px-2 mt-3 nav flex space-x-2 overflow-x-auto ">
        <button @click="menuAncora('#pizzas')" class="pizzas whitespace-nowrap text-blue-700 border-2 border-blue-700 hover:bg-blue-800 hover:text-white focus:outbuttonne-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">
            PIZZAS
        </button>
        <button @click="menuAncora('#sanduiches')" class="sanduiches whitespace-nowrap text-blue-700 border-2 border-blue-700 hover:bg-blue-800 hover:text-white focus:outbuttonne-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">
            SANDUICHES
        </button>
        <button @click="menuAncora('#tapioca-recheada')" class="tapioca-recheada whitespace-nowrap text-blue-700 border-2 border-blue-700 hover:bg-blue-800 hover:text-white focus:outbuttonne-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">
            TAPIOCA RECHEADA
        </button>
        <button @click="menuAncora('#bebidas-com-gelo')" class="bebidas-com-gelo whitespace-nowrap text-blue-700 border-2 border-blue-700 hover:bg-blue-800 hover:text-white focus:outbuttonne-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">
          BEBIDAS COM GELO
        </button>
    </section>
</template>

<script setup lang="ts">

function menuAncora(value: any){
    location.href = value;
    menuAncoraColor(value);
}

function menuAncoraColor(value: any){
    var menuancora = document.getElementById("menuancora");
    var botao = menuancora?.children;

    if(botao){
        for (let index = 0; index < botao.length; index++) {
        var botaoItem = botao[index];
        
       if("#"+botaoItem.classList[0] == value){
           botao[index].classList.remove("text-blue-700");
           botao[index].classList.add("text-white");
           botao[index].classList.add("bg-blue-700");
       }else{
        botao[index].classList.add("text-blue-700");
           botao[index].classList.remove("text-white");
           botao[index].classList.remove("bg-blue-700");
       }
        
    }
    }
}
</script>

<style>
 html {
    scroll-behavior: smooth;
  }
</style>