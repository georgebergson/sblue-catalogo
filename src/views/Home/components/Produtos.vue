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
                <img class="w-20 h-20 rounded-lg" src="https://files.menudino.com/cardapios/35840/78.jpg"
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
                <img class="w-20 h-20 rounded-lg" src="https://files.menudino.com/cardapios/35840/78.jpg"
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
    class="fixed top-0 left-0 right-0 z-50 hidden w-full overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative w-full max-w-7xl max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white h-screen shadow">
        <!-- Modal header -->
        <div class="flex items-center justify-between py-5 border-b rounded-t">
          <h3 class="text-lg font-medium text-blue-900">
            SANDUICHE NATURAL X TUDO
          </h3>
          <button type="button"
            class="text-white bg-red-600 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center me-3"
            data-modal-hide="extralarge-modal" @click="modalProduto">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="space-y-6">
          <div class="bg-fixed w-full h-52" style="background-image: url('https://files.menudino.com/cardapios/35840/78.jpg')"></div>

          <p class="px-2 font-normal text-gray-900">Suculento frango Cranc, marinado e bem temperado - 8 meio filés de sassami.
            Escolha entre as receitas: Suave - mix de temperos selecionados
             | Vibrante - apimentado com 16 especiarias.
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