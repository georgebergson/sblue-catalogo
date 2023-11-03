<template>
  <div
    class="mb-20 w-full p-4 bg-white border border-gray-200 my-2 shadow sm:p-8"
  >
    <div class="flex items-center justify-between mb-4">
      <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
        Pizzas
      </h5>
    </div>
    <div class="flow-root">
      <ul role="list" class="divide-y divide-gray-200">
        <li class="py-3 sm:py-4">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <img
                class="w-20 h-20 rounded-lg"
                src="https://files.menudino.com/cardapios/26013/397.jpg"
                alt="Neil image"
              />
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
          <div
            class="flex justify-end items-center text-lg font-semibold text-gray-900"
          >
            R$ 320,00
          </div>
        </li>
        <li class="py-3 sm:py-4">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <img
                class="w-20 h-20 rounded-lg"
                src="https://files.menudino.com/cardapios/26013/397.jpg"
                alt="Neil image"
              />
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
          <div
            class="flex justify-end items-center text-lg font-semibold text-gray-900"
          >
            R$ 320,00
          </div>
        </li>
      </ul>
    </div>
  </div>

  <!-- Extra Large Modal -->
  <div
    id="extralarge-modal"
    tabindex="-1"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative w-full max-w-7xl max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div
          class="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600"
        >
          <h3 class="text-xl font-medium text-gray-900 dark:text-white">
            Extra Large modal
          </h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="extralarge-modal"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
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
        <div
          class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
        >
          <button
            data-modal-hide="extralarge-modal"
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            I accept
          </button>
          <button
            data-modal-hide="extralarge-modal"
            type="button"
            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  </div>
</template>