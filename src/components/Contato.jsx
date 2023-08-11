import React from 'react';

function Contato() {
  return (
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-10 mx-auto" id='contato'>
      <div class="grid md:grid-cols-2 items-center gap-12">
        <div>
          <h1 class="text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight dark:text-white">
            Conecte-se Comigo
          </h1>
          <p class="mt-1 md:text-lg text-gray-800 dark:text-gray-200">
            Minha caixa de entrada está pronta para receber suas mensagens. <br /> Se você tiver alguma pergunta, feedback ou desejar iniciar uma conversa, não hesite em preencher o formulário ou usar os detalhes fornecidos para entrar em contato diretamente.
          </p>

          <div class="mt-8">
            <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
              O que você deve esperar de mim?
            </h2>

            <ul class="mt-2 space-y-2">
              <li class="flex space-x-3">
                <svg class="flex-shrink-0 h-6 w-6 text-gray-600 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor" />
                </svg>
                <span class="text-gray-600 dark:text-gray-400">
                  Respostas ágeis para suas perguntas e consultas
                </span>
              </li>

              <li class="flex space-x-3">
                <svg class="flex-shrink-0 h-6 w-6 text-gray-600 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor" />
                </svg>
                <span class="text-gray-600 dark:text-gray-400">
                  Colaboração aberta para transformar suas ideias em realidade
                </span>
              </li>

              <li class="flex space-x-3">
                <svg class="flex-shrink-0 h-6 w-6 text-gray-600 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor" />
                </svg>
                <span class="text-gray-600 dark:text-gray-400">
                  Soluções técnicas personalizadas e comunicacão direta
                </span>
              </li>
            </ul>
          </div>

        </div>

        <div class="relative">

          <div class="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-10 dark:border-gray-700">
            <h2 class=" text-3xl font-semibold text-gray-800 dark:text-gray-200">
              Deixe uma mensagem
            </h2>
            <form>
              <div class="mt-6 grid gap-4 lg:gap-6">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label for="hs-firstname-hire-us-1" class="block text-sm text-gray-700 font-medium dark:text-white">Nome</label>
                    <input type="text" name="hs-firstname-hire-us-1" id="hs-firstname-hire-us-1" class="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" />
                  </div>

                  <div>
                    <label for="hs-lastname-hire-us-1" class="block text-sm text-gray-700 font-medium dark:text-white">Sobrenome</label>
                    <input type="text" name="hs-lastname-hire-us-1" id="hs-lastname-hire-us-1" class="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" />
                  </div>
                </div>

                <div>
                  <label for="hs-work-email-hire-us-1" class="block text-sm text-gray-700 font-medium dark:text-white">Seu melhor Email</label>
                  <input type="email" name="hs-work-email-hire-us-1" id="hs-work-email-hire-us-1" autocomplete="email" class="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" />
                </div>

                <div>
                  <label for="hs-about-hire-us-1" class="block text-sm text-gray-700 font-medium dark:text-white">Mensagem</label>
                  <textarea id="hs-about-hire-us-1" name="hs-about-hire-us-1" rows="4" class="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"></textarea>
                </div>
              </div>
              <div class="mt-6 grid">
                <button type="submit" class="inline-flex justify-center items-center gap-x-3 text-center bg-purple-600 hover:bg-purple-800 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800">Enviar</button>
              </div>
            </form>

            <div class="mt-3 text-center">
              <p class="text-sm text-gray-500">
                Retornarei seu contato o mais breve possível.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contato;
