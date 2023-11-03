<template>
  <main>
    <section class="flex flex-col items-center justify-center">
      <div
        class="bg-fixed w-full h-44 lg:h-80 bg-center bg-no-repeat bg-cover"
        style="
          background-image: url('https://img.freepik.com/fotos-gratis/bife-grelhado-na-superficie-de-madeira-escura_1150-44344.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698019200&semt=ais');
        "
      ></div>

      <div
        class="absolute z-50 w-32 h-32 lg:w-60 lg:h-60 p-1 rounded-full ring-2 lg:ring-4 ring-white bg-top bg-cover"
        style="
          background-image: url('https://cdn.pixabay.com/photo/2018/09/14/23/28/avatar-3678347_960_720.png');
        "
      ></div>
    </section>

    <section class="flex justify-between px-2">
        <div>
        CHURRASCARIA PONTO CERTO
      </div>
      <button>
        SOBRE
      </button>
    </section>

    <section>
      <nav class="border-green-200 bg-green-500">
        <div class="w-full flex items-center justify-center mx-auto p-1">
          <span class="relative flex h-3 w-3">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-200 opacity-75"
            ></span>
            <span
              class="relative inline-flex rounded-full h-3 w-3 bg-green-100"
            ></span>
          </span>

          <span class="text-white font-bold ms-2">ABERTO AGORA</span>
        </div>
      </nav>
    </section>
  </main>
</template>