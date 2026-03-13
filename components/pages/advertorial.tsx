"use client";

import { Search, Menu, Play, RotateCcw, ThumbsUp, Heart, Facebook, Twitter, MessageCircle, Link as LinkIcon, Share2 } from "lucide-react";

export default function Advertorial() {
  return (
    <div className="min-h-screen bg-[#f9f9f9] font-sans antialiased text-[#1c1e21]">
      {/* Top Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        {/* Top bar (Logo & Nav) */}
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 sm:py-4 lg:py-5">
          <div className="flex items-center gap-4">
            <Menu className="w-6 h-6 lg:w-7 lg:h-7 cursor-pointer text-gray-700 hover:text-[#b31217]" />
            <Search className="w-5 h-5 lg:hidden cursor-pointer text-gray-700" />
          </div>

          {/* Logo */}
          <div className="flex-1 flex justify-center lg:justify-start lg:ml-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter text-[#b31217] uppercase" style={{ fontFamily: 'Georgia, serif' }}>
              SALUD<span className="text-gray-900 text-sm ml-1 align-top italic opacity-70">En línea</span>
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <Search className="w-6 h-6 hidden lg:block cursor-pointer text-gray-700 hover:text-[#b31217]" />
            <button className="hidden sm:block bg-[#b31217] text-white text-xs font-bold uppercase tracking-wider px-4 py-2 hover:bg-[#8f0e12] transition-colors rounded">
              Suscribirse
            </button>
          </div>
        </div>

        {/* Desktop Navigation Categories */}
        <div className="hidden lg:block border-t border-gray-100 bg-[#fbfbfb]">
          <ul className="max-w-6xl mx-auto flex items-center gap-8 px-4 py-2 xl:py-3 text-[13px] font-bold uppercase tracking-widest text-gray-600">
            <li className="text-[#b31217] border-b-2 border-[#b31217] pb-1 cursor-pointer">Portada</li>
            <li className="hover:text-gray-900 cursor-pointer">Bienestar</li>
            <li className="hover:text-gray-900 cursor-pointer">Investigación</li>
            <li className="hover:text-gray-900 cursor-pointer">Nutrición</li>
            <li className="hover:text-gray-900 cursor-pointer">Fitness</li>
            <li className="hover:text-gray-900 cursor-pointer">Mentalidad</li>
          </ul>
        </div>
      </header>

      <main className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 px-4 py-6 sm:py-8 lg:py-10">

        {/* Left Column (Main Content) */}
        <div className="flex-1 lg:max-w-[70%] bg-white p-4 sm:p-6 lg:p-10 shadow-sm border border-gray-200">

          {/* Article Header */}
          <article className="mb-4 sm:mb-6 border-b border-gray-200 pb-4 sm:pb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-[#b31217] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm">Salud Exclusiva</span>
              <span className="text-gray-500 text-xs font-medium">Lectura de 4 min</span>
            </div>

            <h1 className="text-2xl sm:text-[2.5rem] lg:text-[3rem] leading-[1.15] font-extrabold text-[#111] mb-3 sm:mb-5 font-serif">
              <span className="text-[#b31217]">URGENTE:</span> Especialista revela receta con 3 ingredientes capaz de eliminar las bacterias diabéticas y controlar la glucemia en 90 mg/dL!
            </h1>
            <h2 className="text-base sm:text-xl lg:text-2xl leading-snug font-medium text-gray-600 mb-4 sm:mb-6 font-serif">
              Más de 15,000 personas ya han revertido su diabetes por menos de 45 dólares y sin tratamientos dolorosos.
            </h2>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                  <img src="/logos/perfil.png" alt="Autor Frank" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-[#111] font-bold text-sm">Escrito por Satomi Yamamoto</p>
                  <p className="text-gray-500 text-xs mt-0.5">doctor • Actualizado hace 30 minutos</p>
                </div>
              </div>
            </div>
          </article>

          {/* Video Player */}
          <section className="w-full relative flex flex-col items-center justify-center text-center cursor-pointer mb-6 rounded-md group shadow-md border border-gray-200 overflow-hidden bg-black aspect-video">
            <div dangerouslySetInnerHTML={{
              __html: `
              <vturb-smartplayer id="vid-69aeefbfa61fe7c3c1e26cf9" style="display: block; margin: 0 auto; width: 100%; height: 100%;"></vturb-smartplayer>
              <script type="text/javascript">
                var s=document.createElement("script");
                s.src="https://scripts.converteai.net/e47d2695-e7da-47cf-a7a5-1f9da5313774/players/69aeefbfa61fe7c3c1e26cf9/v4/player.js";
                s.async=!0;
                document.head.appendChild(s);
              </script>
              <style>
                .esconder {
                  display: none;
                }
              </style>
              <script>
                var delaySeconds = 2540;
                var player = document.querySelector("vturb-smartplayer");
                player.addEventListener("player:ready", function() {
                  player.displayHiddenElements(delaySeconds, [".esconder"], {
                    persist: true
                  });
                });
              </script>
            ` }} className="w-full h-full" />
          </section>

          {/* Action Button */}
          <div className="w-full mb-8 esconder">
            <div className="flex justify-center">
              <a
                href="https://www.checkout-ds24.com/product/667753"
                className="bg-[#34A853] text-white font-bold tracking-wide uppercase shadow-lg shadow-green-200 py-4 px-8 rounded-xl transition-all hover:-translate-y-[2px] hover:shadow-xl w-full max-w-md text-center text-lg animate-pulse"
              >
                GARANTIZAR MI LUGAR!
              </a>
            </div>
          </div>

          {/* As Seen On */}
          <div className="text-center mb-10">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 divider-text">Visto En</h4>
            <div className="flex justify-center items-center px-4 py-3 bg-gray-50 rounded-lg border border-gray-100">
              <img
                src="/logos/logos.png"
                alt="Media Logos"
                className="w-full max-w-md object-contain opacity-70 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>

          <div className="w-full h-px bg-gray-200 mt-10 mb-8"></div>

          {/* Facebook Comments */}
          <section className="bg-white">
            <div className="text-sm text-gray-500 font-bold mb-6 pb-2 border-b-2 border-gray-800 inline-block uppercase tracking-wider">
              24,317 Comentarios Relacionados
            </div>

            <div className="space-y-6">
              {/* Comment 1 */}
              <div className="flex gap-3">
                <div className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0 overflow-hidden shadow-sm">
                  <img src="https://i.pravatar.cc/150?img=1" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div className="w-full">
                  <div className="bg-[#f0f2f5] rounded-2xl px-4 py-3 text-[15px] leading-relaxed shadow-sm">
                    <span className="font-bold text-[#385898] hover:underline cursor-pointer block sm:inline mr-2">Sarah Morgan</span>
                    Mi médico no podía creerlo. Después de solo 10 días, mi A1C bajó tanto que pensó que el laboratorio estaba en mal estado. Incluso me hizo rehacer la prueba solo para asegurarme y dijo que nunca había visto que algo funcionara tan rápido.
                  </div>
                  <div className="flex items-center gap-2 sm:gap-4 text-[10px] sm:text-xs text-gray-500 font-bold mt-1 sm:mt-2 ml-1 sm:ml-2 cursor-pointer">
                    <span className="hover:text-blue-600">Me gusta</span>
                    <span className="hover:underline">Responder</span>
                    <span className="font-normal text-gray-400"> 2h</span>
                    <div className="flex items-center ml-auto bg-white shadow flex-shrink-0 px-2 py-0.5 rounded-full border border-gray-100">
                      <div className="flex -space-x-1 mr-1">
                        <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center border border-white z-10"><ThumbsUp className="w-3 h-3 text-white fill-white" /></div>
                        <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center border border-white"><Heart className="w-3 h-3 text-white fill-white" /></div>
                      </div>
                      <span className="font-medium text-gray-600 text-xs">62</span>
                    </div>
                  </div>

                  {/* Reply 1 */}
                  <div className="flex gap-3 mt-4">
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0 overflow-hidden mt-1 shadow-sm">
                      <img src="https://i.pravatar.cc/150?img=5" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full">
                      <div className="bg-[#f0f2f5] rounded-2xl px-4 py-2 text-[15px] leading-relaxed shadow-sm">
                        <span className="font-bold text-[#385898] hover:underline cursor-pointer block sm:inline mr-2">Emily Thompson</span>
                        ¡Lo mismo aquí! Mi médico pensó que la máquina fallaba 😲. Esto es salvaje.
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-gray-500 font-bold mt-1 sm:mt-2 ml-1 sm:ml-2 cursor-pointer">
                        <span className="hover:text-blue-600">Me gusta</span>
                        <span className="hover:underline">Responder</span>
                        <span className="font-normal text-gray-400">35 min</span>
                        <div className="flex items-center ml-auto flex-shrink-0">
                          <div className="flex -space-x-1 mr-1">
                            <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center border border-white z-10"><ThumbsUp className="w-2.5 h-2.5 text-white fill-white" /></div>
                          </div>
                          <span className="font-medium text-gray-500 text-xs">47</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comment 2 */}
              <div className="flex gap-3">
                <div className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0 overflow-hidden shadow-sm">
                  <img src="https://i.pravatar.cc/150?img=12" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div className="w-full">
                  <div className="bg-[#f0f2f5] rounded-2xl px-4 py-3 text-[15px] leading-relaxed shadow-sm">
                    <span className="font-bold text-[#385898] hover:underline cursor-pointer block sm:inline mr-2">David Miller</span>
                    Encontré este video después de orar pidiendo orientación. Han pasado solo 5 días desde que comencé, pero ya me siento como yo mismo de nuevo. Mi energía ha vuelto y mis niveles de glucosa son estables.
                  </div>
                  <div className="flex items-center gap-2 sm:gap-4 text-[10px] sm:text-xs text-gray-500 font-bold mt-1 sm:mt-2 ml-1 sm:ml-2 cursor-pointer">
                    <span className="hover:text-blue-600">Me gusta</span>
                    <span className="hover:underline">Responder</span>
                    <span className="font-normal text-gray-400">19 min</span>
                    <div className="flex items-center ml-auto bg-white shadow flex-shrink-0 px-2 py-0.5 rounded-full border border-gray-100">
                      <div className="flex -space-x-1 mr-1">
                        <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center border border-white z-10"><ThumbsUp className="w-3 h-3 text-white fill-white" /></div>
                        <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center border border-white"><Heart className="w-3 h-3 text-white fill-white" /></div>
                      </div>
                      <span className="font-medium text-gray-600 text-xs">38</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 text-center text-xs text-gray-400 bg-gray-50 rounded-lg py-4">
              Este post ha sido bloqueado y ya no acepta nuevos comentarios.
            </div>

            <div className="mt-4 pb-4 text-xs text-gray-400 flex items-center justify-center gap-1 font-medium">
              <span className="font-bold text-[#385898] bg-blue-100 px-1.5 py-0.5 rounded text-[10px]">f</span> Plug-in social de Facebook
            </div>
          </section>
        </div>

        {/* Right Sidebar (Simulation of a News Sidebar) */}
        <aside className="w-full lg:w-[30%] lg:flex-shrink-0 flex flex-col gap-6">
          {/* Trending now */}
          <div className="bg-white p-5 border border-gray-200 shadow-sm">
            <h3 className="text-sm font-black uppercase tracking-widest text-[#b31217] border-b-2 border-gray-900 pb-2 mb-4">
              Tendencias
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="group cursor-pointer">
                <span className="text-gray-400 font-bold block text-sm mb-1">01</span>
                <p className="font-serif font-bold text-gray-800 text-lg leading-snug group-hover:text-[#b31217] transition-colors">
                  Descubren nueva forma de regular el metabolismo basal mientras duermes.
                </p>
              </li>
              <li className="border-t border-gray-100 pt-4 group cursor-pointer">
                <span className="text-gray-400 font-bold block text-sm mb-1">02</span>
                <p className="font-serif font-bold text-gray-800 text-lg leading-snug group-hover:text-[#b31217] transition-colors">
                  El "boom" de los ayunos intermitentes: Especialistas alertan sobre errores comunes.
                </p>
              </li>
              <li className="border-t border-gray-100 pt-4 group cursor-pointer">
                <span className="text-gray-400 font-bold block text-sm mb-1">03</span>
                <p className="font-serif font-bold text-gray-800 text-lg leading-snug group-hover:text-[#b31217] transition-colors">
                  Por qué las dietas extremas ya no funcionan para perder peso en 2024.
                </p>
              </li>
            </ul>
          </div>

          {/* Ad Space Placeholder */}
          <div className="bg-gray-100 h-[250px] sm:h-[400px] lg:h-[600px] border border-gray-200 flex flex-col items-center justify-center text-gray-400 relative">
            <span className="text-xs uppercase tracking-widest absolute top-2 right-2">Ad</span>
            <div className="w-16 h-16 border-2 border-gray-300 rounded-full flex items-center justify-center mb-2">
              <span className="text-2xl opacity-50">$</span>
            </div>
            <p className="font-bold text-sm">Espacio Publicitario</p>
          </div>
        </aside>

      </main>

      {/* Expanded Footer */}
      <footer className="bg-[#111] text-gray-300 py-12 px-4 shadow-inner mt-12 border-t-4 border-[#b31217]">
        <div className="max-w-6xl mx-auto flex flex-col gap-8">

          {/* Footer Top */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-gray-800 pb-8">
            <h2 className="text-3xl font-black tracking-tighter text-white uppercase" style={{ fontFamily: 'Georgia, serif' }}>
              SALUD<span className="text-gray-500 text-sm ml-1 align-top italic opacity-70">En línea</span>
            </h2>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#b31217] transition-colors">
                <Facebook className="w-5 h-5 fill-white text-white" />
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#b31217] transition-colors">
                <span className="text-white font-bold">X</span>
              </button>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-4">
            <div>
              <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-4">Sobre Nosotros</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">Quiénes somos</li>
                <li className="hover:text-white cursor-pointer transition-colors">Política de redacción</li>
                <li className="hover:text-white cursor-pointer transition-colors">Nuestro equipo</li>
                <li className="hover:text-white cursor-pointer transition-colors">Carreras</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">Términos de Uso</li>
                <li className="hover:text-white cursor-pointer transition-colors">Política de Privacidad</li>
                <li className="hover:text-white cursor-pointer transition-colors">Acuerdo de Cookies</li>
                <li className="hover:text-white cursor-pointer transition-colors">Aviso Médico</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-4">Secciones</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">Noticias Mundiales</li>
                <li className="hover:text-white cursor-pointer transition-colors">Bienestar y Salud</li>
                <li className="hover:text-white cursor-pointer transition-colors">Nutrición Deportiva</li>
                <li className="hover:text-white cursor-pointer transition-colors">Entrevistas e Informes</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-4">Boletín</h4>
              <p className="text-sm text-gray-400 mb-4">Suscríbete para recibir los últimos descubrimientos médicos en tu correo.</p>
              <div className="flex">
                <input type="email" placeholder="Tu email" className="bg-gray-800 text-white px-3 py-2 w-full text-sm outline-none focus:ring-1 focus:ring-[#b31217]" />
                <button className="bg-[#b31217] px-4 font-bold text-xs uppercase tracking-wider hover:bg-[#8f0e12]">Enviar</button>
              </div>
            </div>
          </div>

          <div className="text-center text-xs text-gray-600 mt-4">
            <p>Este sitio no es parte del sitio web de Facebook o Facebook Inc. Además, este sitio NO está respaldado por Facebook de ninguna manera. FACEBOOK es una marca comercial de FACEBOOK, Inc.</p>
            <p className="mt-2 font-bold uppercase tracking-widest text-[#b31217]">© 2024 SALUD EN LÍNEA. TODOS LOS DERECHOS RESERVADOS.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
