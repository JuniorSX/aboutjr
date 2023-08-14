import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { MouseParallax, ScrollParallax } from 'react-just-parallax';
import blob from '../img/blob.svg';
import imgPerfil from '../img/perfil-capa.png';
import imgJavascript from '../img/svg/javascript.svg';
import imgReact from '../img/svg/react.svg';
import imgTailwind from '../img/svg/tailwind.svg';
import imgVite from '../img/svg/vite.svg';

function Cover() {


  return (
    <div className="flex flex-row h-screen mx-auto overflow-hidden bg-gray-100 px-2 sm:px-6 lg:px-8  dark:bg-zinc-900" >

      <div class="max-w-[85rem] pt-10 mx-auto px-4 sm:px-6 lg:px-8 border border-red-800">

        <div class="grid md:grid-cols-2 gap-4 md:gap-6 xl:gap-10 md:items-center justify-items-end ">
          <div>
            <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">Desenvolvedor <br />Full Stack <span class="text-purple-800">Junior</span></h1>
            <p class="mt-3 text-lg text-gray-800 dark:text-gray-400">
              Como um verdadeiro <span class="text-purple-800 font-bold">Junior</span> do desenvolvimento full stack, estou pronto para mostrar como transformo desafios em oportunidades, bugs em aprendizado e linhas de código em soluções criativas.
              <br /><br />
              Navegue pelo meu portfólio e descubra como um "Junior" pode criar experiências incríveis com <span class="text-purple-800 font-bold">React, Node, JavaScript e muito entusiasmo!</span>
            </p>

            <div class="mt-7 grid gap-3 w-full sm:inline-flex">
              <AnchorLink class="inline-flex justify-center items-center gap-x-3 text-center bg-purple-600 hover:bg-purple-800 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800" href="#projetos">
                Meus Projetos
                <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                </svg>
              </AnchorLink>
              <AnchorLink class="inline-flex justify-center items-center gap-x-3.5 text-sm lg:text-base text-center border border-purple-600 hover:border-purple-800 shadow-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:border-purple-600 dark:hover:border-purple-600 dark:shadow-slate-700/[.5] dark:text-white dark:hover:text-gray-200 dark:focus:ring-purple-700 dark:focus:ring-offset-gray-800" href="#contato">
                Entre em contato
              </AnchorLink>
            </div>
            <div class="mt-6 lg:mt-12">
              <span class="text-xs font-medium text-gray-800 uppercase dark:text-gray-200">Este site foi desenvolvido com:</span>

              <div class="mt-4 flex gap-x-8 justify-center sm:justify-normal">
                <img class="w-14 h-auto transition ease-in-out hover:scale-150" src={imgVite} alt="Vite" />
                <img class="w-14 h-auto transition ease-in-out hover:scale-150" src={imgJavascript} alt="Javascript" />
                <img class="w-14 h-auto transition ease-in-out hover:scale-150" src={imgReact} alt="React" />
                <img class="w-14 h-auto transition ease-in-out hover:scale-150" src={imgTailwind} alt="Tailwind" />
              </div>
            </div>


          </div>
          <div class="relative w-fit border border-orange-700 pl-40">
            <ScrollParallax enableOnTouchDevice isAbsolutelyPositioned>
              <img src={blob} alt="tech 1" />
            </ScrollParallax>

            <img className='relative z-30' src={imgPerfil} alt="Jr" />

            <MouseParallax enableOnTouchDevice isAbsolutelyPositioned >
              <img className="-left-80" src={blob} alt="tech 2" />
            </MouseParallax>

          </div>

        </div>

      </div>

    </div >
  );
}

export default Cover;