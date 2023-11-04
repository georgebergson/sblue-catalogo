<template>
  <div id="produtos" class="mb-24 w-full bg-white border border-gray-200 my-2 shadow sm:p-8">
    <section class="categoria">
      <div class="flex items-center justify-between mb-4">
        <h5 id="pizzas" class="w-full pt-2 px-3 text-xl font-bold leading-none text-blue-600 border-t border-t-blue-600">
          Pizzas
        </h5>
      </div>
      <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200">
          <li class="p-3" @click="modalProduto">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                <img class="w-20 h-20 rounded-lg" src="https://files.menudino.com/cardapios/26013/397.jpg"
                  alt="Neil image" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-lg leading-none font-medium text-gray-900">
                  Combo Medida Certa (até 2 sabores)
                </p>
                <p class="text-sm text-gray-500">
                  Pizza Grande (35 cm) + Coca Cola ou Guaraná Antárctica 1,5l
                </p>
              </div>
            </div>
            <div class="flex justify-end items-center text-lg font-semibold text-gray-900">
              R$ 320,00
            </div>
          </li>

          <li class="p-3" @click="modalProduto">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                <img class="w-20 h-20 rounded-lg" src="https://files.menudino.com/cardapios/26013/397.jpg"
                  alt="Neil image" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-lg leading-none font-medium text-gray-900">
                  Combo Medida Certa (até 2 sabores)
                </p>
                <p class="text-sm text-gray-500">
                  Pizza Grande (35 cm) + Coca Cola ou Guaraná Antárctica 1,5l
                </p>
              </div>
            </div>
            <div class="flex justify-end items-center text-lg font-semibold text-gray-900">
              R$ 320,00
            </div>
          </li>

          <li class="p-3" @click="modalProduto">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                <img class="w-20 h-20 rounded-lg" src="https://files.menudino.com/cardapios/26013/397.jpg"
                  alt="Neil image" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-lg leading-none font-medium text-gray-900">
                  Combo Medida Certa (até 2 sabores)
                </p>
                <p class="text-sm text-gray-500">
                  Pizza Grande (35 cm) + Coca Cola ou Guaraná Antárctica 1,5l
                </p>
              </div>
            </div>
            <div class="flex justify-end items-center text-lg font-semibold text-gray-900">
              R$ 320,00
            </div>
          </li>

          <li class="p-3" @click="modalProduto">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                <img class="w-20 h-20 rounded-lg" src="https://files.menudino.com/cardapios/26013/397.jpg"
                  alt="Neil image" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-lg leading-none font-medium text-gray-900">
                  Combo Medida Certa (até 2 sabores)
                </p>
                <p class="text-sm text-gray-500">
                  Pizza Grande (35 cm) + Coca Cola ou Guaraná Antárctica 1,5l
                </p>
              </div>
            </div>
            <div class="flex justify-end items-center text-lg font-semibold text-gray-900">
              R$ 320,00
            </div>
          </li>

          <li class="p-3" @click="modalProduto">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                <img class="w-20 h-20 rounded-lg" src="https://files.menudino.com/cardapios/26013/397.jpg"
                  alt="Neil image" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-lg leading-none font-medium text-gray-900">
                  Combo Medida Certa (até 2 sabores)
                </p>
                <p class="text-sm text-gray-500">
                  Pizza Grande (35 cm) + Coca Cola ou Guaraná Antárctica 1,5l
                </p>
              </div>
            </div>
            <div class="flex justify-end items-center text-lg font-semibold text-gray-900">
              R$ 320,00
            </div>
          </li>

        </ul>
      </div>
    </section>
    <section class="categoria">
      <div class="flex items-center justify-between mb-4">
        <h5 id="sanduiches" class="w-full pt-2 px-3 text-xl font-bold leading-none text-blue-600 border-t border-t-blue-600">
          Sanduiches
        </h5>
      </div>
      <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200">
          <li class="p-3" @click="modalProduto">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                <img class="w-20 h-20 rounded-lg" src="https://conteudo.imguol.com.br/c/noticias/dd/2019/09/02/tentador-zero-beef-sanduiche-com-hamburguer-a-base-de-plantas-do-bobs-1567448386323_v2_450x600.jpg"
                  alt="Neil image" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-lg leading-none font-medium text-gray-900">
                  Combo Medida Certa (até 2 sabores)
                </p>
                <p class="text-sm text-gray-500">
                  Pizza Grande (35 cm) + Coca Cola ou Guaraná Antárctica 1,5l
                </p>
              </div>
            </div>
            <div class="flex justify-end items-center text-lg font-semibold text-gray-900">
              R$ 320,00
            </div>
          </li>

          <li class="p-3" @click="modalProduto">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                <img class="w-20 h-20 rounded-lg" src="https://conteudo.imguol.com.br/c/noticias/dd/2019/09/02/tentador-zero-beef-sanduiche-com-hamburguer-a-base-de-plantas-do-bobs-1567448386323_v2_450x600.jpg"
                  alt="Neil image" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-lg leading-none font-medium text-gray-900">
                  Combo Medida Certa (até 2 sabores)
                </p>
                <p class="text-sm text-gray-500">
                  Pizza Grande (35 cm) + Coca Cola ou Guaraná Antárctica 1,5l
                </p>
              </div>
            </div>
            <div class="flex justify-end items-center text-lg font-semibold text-gray-900">
              R$ 320,00
            </div>
          </li>

          <li class="p-3" @click="modalProduto">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                <img class="w-20 h-20 rounded-lg" src="https://conteudo.imguol.com.br/c/noticias/dd/2019/09/02/tentador-zero-beef-sanduiche-com-hamburguer-a-base-de-plantas-do-bobs-1567448386323_v2_450x600.jpg"
                  alt="Neil image" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-lg leading-none font-medium text-gray-900">
                  Combo Medida Certa (até 2 sabores)
                </p>
                <p class="text-sm text-gray-500">
                  Pizza Grande (35 cm) + Coca Cola ou Guaraná Antárctica 1,5l
                </p>
              </div>
            </div>
            <div class="flex justify-end items-center text-lg font-semibold text-gray-900">
              R$ 320,00
            </div>
          </li>

        </ul>
      </div>
    </section>
    <section class="categoria">
      <div class="flex items-center justify-between mb-4">
        <h5 id="tapioca-recheada" class="w-full pt-2 px-3 text-xl font-bold leading-none text-blue-600 border-t border-t-blue-600">
          Tapioca Recheada
        </h5>
      </div>
      <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200">
          <li class="p-3" @click="modalProduto">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                <img class="w-20 h-20 rounded-lg" src="https://www.sabornamesa.com.br/media/k2/items/cache/d95ac1e7d6d78552526cbaae66d68531_XL.jpg"
                  alt="Neil image" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-lg leading-none font-medium text-gray-900">
                  Combo Medida Certa (até 2 sabores)
                </p>
                <p class="text-sm text-gray-500">
                  Pizza Grande (35 cm) + Coca Cola ou Guaraná Antárctica 1,5l
                </p>
              </div>
            </div>
            <div class="flex justify-end items-center text-lg font-semibold text-gray-900">
              R$ 320,00
            </div>
          </li>

          <li class="p-3" @click="modalProduto">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                <img class="w-20 h-20 rounded-lg" src="https://www.sabornamesa.com.br/media/k2/items/cache/d95ac1e7d6d78552526cbaae66d68531_XL.jpg"
                  alt="Neil image" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-lg leading-none font-medium text-gray-900">
                  Combo Medida Certa (até 2 sabores)
                </p>
                <p class="text-sm text-gray-500">
                  Pizza Grande (35 cm) + Coca Cola ou Guaraná Antárctica 1,5l
                </p>
              </div>
            </div>
            <div class="flex justify-end items-center text-lg font-semibold text-gray-900">
              R$ 320,00
            </div>
          </li>

          <li class="p-3" @click="modalProduto">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                <img class="w-20 h-20 rounded-lg" src="https://www.sabornamesa.com.br/media/k2/items/cache/d95ac1e7d6d78552526cbaae66d68531_XL.jpg"
                  alt="Neil image" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-lg leading-none font-medium text-gray-900">
                  Combo Medida Certa (até 2 sabores)
                </p>
                <p class="text-sm text-gray-500">
                  Pizza Grande (35 cm) + Coca Cola ou Guaraná Antárctica 1,5l
                </p>
              </div>
            </div>
            <div class="flex justify-end items-center text-lg font-semibold text-gray-900">
              R$ 320,00
            </div>
          </li>

          <li class="p-3" @click="modalProduto">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                <img class="w-20 h-20 rounded-lg" src="https://www.sabornamesa.com.br/media/k2/items/cache/d95ac1e7d6d78552526cbaae66d68531_XL.jpg"
                  alt="Neil image" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-lg leading-none font-medium text-gray-900">
                  Combo Medida Certa (até 2 sabores)
                </p>
                <p class="text-sm text-gray-500">
                  Pizza Grande (35 cm) + Coca Cola ou Guaraná Antárctica 1,5l
                </p>
              </div>
            </div>
            <div class="flex justify-end items-center text-lg font-semibold text-gray-900">
              R$ 320,00
            </div>
          </li>

          <li class="p-3" @click="modalProduto">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                <img class="w-20 h-20 rounded-lg" src="https://www.sabornamesa.com.br/media/k2/items/cache/d95ac1e7d6d78552526cbaae66d68531_XL.jpg"
                  alt="Neil image" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-lg leading-none font-medium text-gray-900">
                  Combo Medida Certa (até 2 sabores)
                </p>
                <p class="text-sm text-gray-500">
                  Pizza Grande (35 cm) + Coca Cola ou Guaraná Antárctica 1,5l
                </p>
              </div>
            </div>
            <div class="flex justify-end items-center text-lg font-semibold text-gray-900">
              R$ 320,00
            </div>
          </li>

        </ul>
      </div>
    </section>
    <section class="categoria">
      <div class="flex items-center justify-between mb-4">
        <h5 id="bebidas-com-gelo" class=" w-full pt-2 px-3 text-xl font-bold leading-none text-blue-600 border-t border-t-blue-600">
          BEBIDAS COM GELO
        </h5>
      </div>
      <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200">
          <li class="p-3" @click="modalProduto">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                <img class="w-20 h-20 rounded-lg" src="data:image/jpeg;base64,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"
                  alt="Neil image" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-lg leading-none font-medium text-gray-900">
                  Combo Medida Certa (até 2 sabores)
                </p>
                <p class="text-sm text-gray-500">
                  Pizza Grande (35 cm) + Coca Cola ou Guaraná Antárctica 1,5l
                </p>
              </div>
            </div>
            <div class="flex justify-end items-center text-lg font-semibold text-gray-900">
              R$ 320,00
            </div>
          </li>

          <li class="p-3" @click="modalProduto">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                <img class="w-20 h-20 rounded-lg" src="data:image/jpeg;base64,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"
                  alt="Neil image" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-lg leading-none font-medium text-gray-900">
                  Combo Medida Certa (até 2 sabores)
                </p>
                <p class="text-sm text-gray-500">
                  Pizza Grande (35 cm) + Coca Cola ou Guaraná Antárctica 1,5l
                </p>
              </div>
            </div>
            <div class="flex justify-end items-center text-lg font-semibold text-gray-900">
              R$ 320,00
            </div>
          </li>

       

        </ul>
      </div>
    </section>
  </div>

  <!-- Extra Large Modal -->
  <div id="modalProduto" tabindex="-1"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative w-full max-w-7xl max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div class="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
          <h3 class="text-xl font-medium text-gray-900 dark:text-white">
            Extra Large modal
          </h3>
          <button type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="extralarge-modal" @click="modalProduto">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-6 space-y-6">
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            With less than a month to go before the European Union enacts new
            consumer privacy laws for its citizens, companies around the world
            are updating their terms of service agreements to comply.
          </p>
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            The European Union’s General Data Protection Regulation (G.D.P.R.)
            goes into effect on May 25 and is meant to ensure a common set of
            data rights in the European Union. It requires organizations to
            notify users as soon as possible of high-risk data breaches that
            could personally affect them.
          </p>
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            With less than a month to go before the European Union enacts new
            consumer privacy laws for its citizens, companies around the world
            are updating their terms of service agreements to comply.
          </p>
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            The European Union’s General Data Protection Regulation (G.D.P.R.)
            goes into effect on May 25 and is meant to ensure a common set of
            data rights in the European Union. It requires organizations to
            notify users as soon as possible of high-risk data breaches that
            could personally affect them.
          </p>
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            With less than a month to go before the European Union enacts new
            consumer privacy laws for its citizens, companies around the world
            are updating their terms of service agreements to comply.
          </p>
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            The European Union’s General Data Protection Regulation (G.D.P.R.)
            goes into effect on May 25 and is meant to ensure a common set of
            data rights in the European Union. It requires organizations to
            notify users as soon as possible of high-risk data breaches that
            could personally affect them.
          </p>
        </div>
        <!-- Modal footer -->
        <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
          <button data-modal-hide="extralarge-modal" type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            I accept
          </button>
          <button data-modal-hide="extralarge-modal" type="button"
            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
            Decline
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">


function modalProduto() {
  const modal_produto = document.getElementById('modalProduto');
  if (modal_produto?.classList.contains('hidden')) {
    modal_produto.classList.remove('hidden');
  } else {
    modal_produto?.classList.add('hidden');
  }
}

</script>