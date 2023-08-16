import React, { useContext } from 'react';
import GlobalContext from '../context/GloblalContext';
import darkteste from '../img/darkteste.png';
import iconDiploma from '../img/svg/diploma.svg';
import teste from '../img/teste.png';

function Sobre() {

  const theme = useContext(GlobalContext);
  console.log(theme, 'teste de context api 😁');

  return (
    <>
      <div class="relative">
        <div class="max-w-[85rem] px-4 pt-10 sm:px-6 lg:px-8 lg:pt-14 mx-auto">
          <div class="lg:grid lg:grid-cols-6 lg:gap-8">
            <div class="hidden lg:block lg:col-span-2" onClick={() => { theme.toggleTheme(); }}>
              {theme.theme === 'dark' ? <img className="rounded-xl" src={darkteste} alt="Junior" /> : <img className="rounded-xl" src={teste} alt="Junior" />}
            </div>


            <div class="lg:col-span-4" id='sobre'>

              <blockquote>
                <h2 class="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white"> Sobre mim</h2>

                <p class=" text-xl font-medium text-gray-800 lg:leading-normal dark:text-gray-200">
                  Minha primeira aventura na web foi lá em 2011. Depois de explorar várias trilhas profissionais, voltei para a área que sempre curti. Agora, estou atrás de uma oportunidade no mercado pra colocar em prática os novos conhecimentos que ganhei nessa minha jornada de desenvolvimento full stack.<br /> <br />
                  Atualmente, estou focado em aprofundar meu conhecimento no módulo de backend na Trybe, com a ambição de aplicar essa expertise em projetos concretos que ampliem meu repertório e desafiem meus limites. A cada passo, mantenho meu compromisso de me desenvolver como profissional e abraçar a evolução constante no mundo do desenvolvimento.
                </p>

                <footer class="mt-6">
                  <div class="flex items-center">
                    <div class="lg:hidden flex-shrink-0">
                      {theme.theme === 'dark' ? <img class="h-12 w-12 rounded-full" src={darkteste} alt="Junior" /> : <img class="h-12 w-12 rounded-full" src={teste} alt="Junior" />}
                    </div>
                    <div class="ml-4 lg:ml-0">
                      <p class="font-medium text-gray-800 dark:text-gray-200">
                        Junior Souza
                      </p>
                      <p class="text-sm text-gray-600 dark:text-gray-400">
                        Desenvolvedor Full Stack
                      </p>
                    </div>
                  </div>
                </footer>
              </blockquote>

            </div>

          </div>
        </div>
      </div>

      <div class="max-w-[85rem] px-4 py-14 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div aria-hidden="true" class="flex absolute left-0 -z-[1]">
          <div class="bg-purple-800 opacity-20 blur-3xl w-[98vw] h-[320px] dark:bg-violet-500 dark:opacity-10"></div>
        </div>
        <div class="grid md:grid-cols-2 gap-12">
          <div class="lg:w-3/4">
            <h2 class="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white">
              Evolução Tecnológica: Atualização Constante
            </h2>
            <p class="mt-3 text-gray-800 dark:text-gray-400">
              Ao longo dessa jornada, enfrentei uma variedade de desafios. A constante evolução da tecnologia exigiu que me mantivesse em constante atualização. Navegar por esse cenário em rápida transformação foi um teste de perseverança e dedicação.
            </p>
            <p class="mt-5 inline-flex items-center gap-x-2 font-medium text-purple-600 dark:text-purple-500">
              Conquistas na Evolução Tecnológica
              <svg class="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor" />
              </svg>
            </p>
          </div>


          <div class="space-y-4 lg:space-y-6">

            <div class="flex">

              <span class=" mt-2 flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[38px] border border-gray-200 text-gray-800 shadow-sm mx-auto dark:bg-slate-900 dark:border-gray-700 dark:text-gray-200">
                <img src={iconDiploma} alt="icon" />
              </span>
              <div class="ml-5 sm:ml-8">
                <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Desenvolvimento Web Full Stack - Trybe (Cursando)
                </h3>
                <p class="mt-1 text-gray-600 dark:text-gray-400">
                  Uma formação completa em Desenvolvimento Web que te prepara e conecta com o mercado de trabalho em um período de 12 meses.
                </p>
              </div>
            </div>

            <div class="flex">

              <span class=" mt-2 flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[38px] border border-gray-200 text-gray-800 shadow-sm mx-auto dark:bg-slate-900 dark:border-gray-700 dark:text-gray-200">
                <img src={iconDiploma} alt="icon" />
              </span>
              <div class="ml-5 sm:ml-8">
                <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Curso Design Gráfico - Alfamídia Educação Profissional, 2013
                </h3>
                <p class="mt-1 text-gray-600 dark:text-gray-400">
                  Formação focada no domínio das ferramentas como Illustrator, Photoshop, InDesign e nas técnicas para criar logotipos, folders e peças criativas.
                </p>
              </div>
            </div>

            <div class="flex">

              <span class=" mt-2 flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[38px] border border-gray-200 text-gray-800 shadow-sm mx-auto dark:bg-slate-900 dark:border-gray-700 dark:text-gray-200">
                <img src={iconDiploma} alt="icon" />
              </span>
              <div class="ml-5 sm:ml-8">
                <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Técnico em Informática - Escola Alcides Maya, 2012
                </h3>
                <p class="mt-1 text-gray-600 dark:text-gray-400">
                  A Alcides Maya é uma instituição com uma proposta pedagógica inovadora, referência pela qualidade de ensino na área da tecnologia da informação.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </>

  );
}

export default Sobre;
