import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

function Contato() {
  const [nome, setNome] = useState('');
  const [sobreNome, setSobreNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function sendEmail(e) {

    const templateParams = {
      from_name: nome,
      sobreNome: sobreNome,
      email: email,
      message: mensagem
    };
    emailjs.send('service_u4w51z9', 'template_nhqv1ln', templateParams, 'XDotBK3DoiGaLoQBn')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        Swal.fire({
          icon: 'success',
          title: 'Seu email foi enviado! 😊',
          showConfirmButton: false,
          timer: 1500
        });
        setNome('');
        setSobreNome('');
        setEmail('');
        setMensagem('');
      }, (err) => {
        console.log('FAILED...', err);
        Swal.fire({
          icon: 'error',
          title: 'Algo deu errado, tente novamente 😢',
          showConfirmButton: false,
          timer: 1500
        });
      });
  }

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-10 mx-auto" id='contato'>
      <div className="grid md:grid-cols-2 items-center gap-12">
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
        <div className="relative">
          <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-10 dark:border-gray-700">
            <h2 className=" text-3xl font-semibold text-gray-800 dark:text-gray-200">
              Deixe uma mensagem
            </h2>
            <form onSubmit={handleSubmit(sendEmail)}>
              <div className="mt-6 grid gap-4 lg:gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label for="firstName" class="block text-sm text-gray-700 font-medium dark:text-white">Nome</label>
                    <input {...register("firstName", { required: 'Esqueceu seu nome? 🤔' })}
                      type="text"
                      name="firstName"
                      id="firstName"
                      onChange={(e) => setNome(e.target.value)}
                      value={nome}
                      className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    />
                    {errors.firstName && <span className='text-red-700 absolute'>{errors.firstName.message}</span>}
                  </div>

                  <div>
                    <label for="lastName" className="block text-sm text-gray-700 font-medium dark:text-white">Sobrenome</label>
                    <input {...register("lastName", { required: 'Ops, cadê o sobrenome?' })}
                      type="text"
                      name="lastName"
                      id="lastName"
                      className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      onChange={(e) => setSobreNome(e.target.value)}
                      value={sobreNome}
                    />
                    {errors.lastName && <span className='text-red-700 absolute'>{errors.lastName.message}</span>}
                  </div>
                </div>

                <div>
                  <label for="email" className="block text-sm text-gray-700 font-medium dark:text-white">Seu melhor Email</label>
                  <input {...register("email", { required: 'Ops, email inválido. 🚫' })}
                    type="email"
                    name="email"
                    id="email"
                    autocomplete="email"
                    className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                  {errors.email && <span className='text-red-700 absolute'>{errors.email.message}</span>}
                </div>

                <div>
                  <label for="message" className="block text-sm text-gray-700 font-medium dark:text-white">Mensagem</label>
                  <textarea {...register("message", { required: 'Vamos lá, solte as palavras!' })}
                    id="message"
                    name="message"
                    rows="4"
                    className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    onChange={(e) => setMensagem(e.target.value)}
                    value={mensagem}
                  ></textarea>
                  {errors.message && <span className='text-red-700 absolute'>{errors.message.message}</span>}
                </div>
              </div>
              <div className="mt-6 grid">
                <button type="submit" className="inline-flex justify-center items-center gap-x-3 text-center bg-purple-600 hover:bg-purple-800 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800">Enviar</button>
              </div>
            </form>

            <div className="mt-3 text-center">
              <p className="text-sm text-gray-500">
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
