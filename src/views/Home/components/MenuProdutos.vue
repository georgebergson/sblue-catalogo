<template>
    <select
      id="menu_ancora" @change="selectMenuAncora"
      class="bg-white block w-full px-4 py-3 text-lg font-bold text-blue-900 border border-blue-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
    >
      <option value="#pizzas">PIZZAS</option>
      <option value="#sanduiches">SANDUICHES</option>
      <option value="#tapioca-recheada">TAPIOCA RECHEADA</option>
      <option value="#bebidas-com-gelo">BEBIDAS COM GELO</option>
    </select>
    <!-- <section
        id="menuancora"
        class="bg-white w-full px-2 pt-3 nav flex space-x-2 overflow-x-auto"
    >

        <button
        @click="menuAncora('#pizzas')"
        class="pizzas whitespace-nowrap text-blue-700 border-2 border-blue-700 focus:outbuttonne-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
        PIZZAS
        </button>
        <button
        @click="menuAncora('#sanduiches')"
        class="sanduiches whitespace-nowrap text-blue-700 border-2 border-blue-700 focus:outbuttonne-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
        SANDUICHES
        </button>
        <button
        @click="menuAncora('#tapioca-recheada')"
        class="tapioca-recheada whitespace-nowrap text-blue-700 border-2 border-blue-700 focus:outbuttonne-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
        TAPIOCA RECHEADA
        </button>
        <button
        @click="menuAncora('#bebidas-com-gelo')"
        class="bebidas-com-gelo whitespace-nowrap text-blue-700 border-2 border-blue-700 focus:outbuttonne-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
        BEBIDAS COM GELO
        </button>
    </section> -->
</template>

<script setup lang="ts">
// function menuAncora(value: any) {
//   location.href = value;
// }

function selectMenuAncora(evt: any){
    const id = evt.srcElement.value;
    location.href = id;
}

function menuAncoraColor(value: any) {
  const menu_ancora = document.getElementById("menu_ancora");
  if(menu_ancora){
    menu_ancora.value = value;
  }

}

function ancoraLateral(posicaoDoScroll: any) {
  const categoria = document.getElementsByClassName("categoria");
  if (categoria) {
    const posicaoY = Math.floor(posicaoDoScroll);
    for (let index = 0; index < categoria.length; index++) {
      const botaoItemTop = categoria[index].offsetTop;
      const botaoItemTopHeight = categoria[index].offsetHeight;
      if (
        posicaoY >= botaoItemTop - 64 &&
        posicaoY <= botaoItemTop + botaoItemTopHeight - 64
      ) {
        menuAncoraColor("#" + categoria[index].children[0].children[0].id);
      }
    }
  }
}

function menuTopo(posicaoDoScroll: any) {
  const posicaoY = Math.floor(posicaoDoScroll);
  const menuancora = document.querySelectorAll("#menu_ancora");
  if (posicaoY >= 283) {
    menuancora[0].classList.add("fixed");
    menuancora[0].classList.add("top-0");
  } else {
    menuancora[0].classList.remove("fixed");
    menuancora[0].classList.remove("top-0");
  }
}
window.addEventListener("scroll", function () {
  const posicaoDoScroll = window.scrollY;
  ancoraLateral(posicaoDoScroll);
  menuTopo(posicaoDoScroll);
});
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>