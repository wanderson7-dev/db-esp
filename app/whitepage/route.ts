import { NextResponse } from 'next/server';

export async function GET() {
  const html = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Protocolo Japonés: Secretos de la Cocina Saludable</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;800&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            purple: '#1a0b2e',
                            lightPurple: '#2d1b4e',
                            accent: '#431c75',
                            green: '#22c55e', 
                            greenHover: '#16a34a'
                        }
                    },
                    fontFamily: {
                        sans: ['Montserrat', 'sans-serif'],
                    }
                }
            }
        }
    </script>
    <style>
        body {
            background-color: #1a0b2e;
            color: white;
        }
        .hero-glow {
            background: radial-gradient(circle at top, #4c1d95 0%, #1a0b2e 60%);
        }
        .card-glass {
            background: rgba(45, 27, 78, 0.7);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .btn-pulse {
            animation: pulse-green 2s infinite;
        }
        @keyframes pulse-green {
            0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
            70% { box-shadow: 0 0 0 15px rgba(34, 197, 94, 0); }
            100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
        }
    </style>
</head>
<body class="font-sans antialiased">

    <section class="hero-glow min-h-screen flex flex-col items-center justify-center text-center px-4 pt-10 pb-20 overflow-hidden relative">
        <div class="absolute top-10 left-10 text-brand-accent opacity-30 text-6xl"><i class="fas fa-leaf"></i></div>
        <div class="absolute top-20 right-10 text-brand-accent opacity-30 text-4xl"><i class="fas fa-utensils"></i></div>

        <div class="max-w-4xl mx-auto z-10">
            <h1 class="text-4xl md:text-6xl font-extrabold uppercase mb-6 leading-tight tracking-tight">
                ¡Basta de Comida Insípida y <br> <span class="text-purple-300">Dietas Restrictivas!</span>
            </h1>
            
            <p class="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
                ¡Descubre el Secreto Milenario de la Cocina Japonesa para una Vida Ligera, Saludable y Llena de Sabor, sin salir de Casa!
            </p>

            <a href="#offer" class="btn-pulse inline-block bg-brand-green hover:bg-brand-greenHover text-white font-bold py-4 px-8 rounded-full text-lg md:text-xl transition transform hover:scale-105 uppercase tracking-wide shadow-lg mb-12">
                ¡Sí, quiero descubrir los sabores japoneses!
            </a>
        </div>

        <div class="w-full max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 z-10 px-2">
            <div class="rounded-full overflow-hidden border-4 border-white shadow-2xl aspect-square relative group">
                <img src="https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=500&auto=format&fit=crop" alt="Sushi Bowl" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-500">
            </div>
            <div class="rounded-full overflow-hidden border-4 border-white shadow-2xl aspect-square relative group">
                <img src="https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?q=80&w=500&auto=format&fit=crop" alt="Salmon Sashimi" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-500">
            </div>
            <div class="rounded-full overflow-hidden border-4 border-white shadow-2xl aspect-square relative group">
                <img src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=500&auto=format&fit=crop" alt="Ramen Tradicional" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-500">
            </div>
            <div class="rounded-full overflow-hidden border-4 border-white shadow-2xl aspect-square relative group">
                <img src="https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=500&auto=format&fit=crop" alt="Ensalada de Algas" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-500">
            </div>
        </div>
        
        <div class="w-full h-12 bg-pink-600 absolute bottom-0 transform skew-y-1 origin-bottom-left z-0 opacity-80"></div>
    </section>

    <section class="py-20 bg-brand-purple relative">
        <div class="max-w-5xl mx-auto px-4 text-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-12">
                ¡Ahora es tu turno de desvelar los secretos de una de las gastronomías más equilibradas!
            </h2>

            <div class="grid md:grid-cols-2 gap-8">
                <div class="card-glass p-8 rounded-2xl shadow-xl hover:bg-opacity-80 transition duration-300 transform hover:-translate-y-2">
                    <h3 class="text-2xl font-bold mb-4 text-pink-400">PASO 1:</h3>
                    <p class="text-gray-200 leading-relaxed">
                        Accede a una colección auténtica de recetas japonesas, desde los clásicos más queridos hasta platos sorprendentes.
                    </p>
                </div>

                <div class="card-glass p-8 rounded-2xl shadow-xl hover:bg-opacity-80 transition duration-300 transform hover:-translate-y-2">
                    <h3 class="text-2xl font-bold mb-4 text-pink-400">PASO 2:</h3>
                    <p class="text-gray-200 leading-relaxed">
                        Con nuestras instrucciones claras y detalladas, no necesitas ser un chef experimentado para crear platos dignos de restaurante.
                    </p>
                </div>

                <div class="card-glass p-8 rounded-2xl shadow-xl hover:bg-opacity-80 transition duration-300 transform hover:-translate-y-2">
                    <h3 class="text-2xl font-bold mb-4 text-pink-400">PASO 3:</h3>
                    <p class="text-gray-200 leading-relaxed">
                        Cada plato es una celebración de ingredientes frescos y mínimamente procesados, ricos en nutrientes esenciales. Aprende a elegir lo mejor para tu cuerpo.
                    </p>
                </div>

                <div class="card-glass p-8 rounded-2xl shadow-xl hover:bg-opacity-80 transition duration-300 transform hover:-translate-y-2">
                    <h3 class="text-2xl font-bold mb-4 text-pink-400">PASO 4:</h3>
                    <p class="text-gray-200 leading-relaxed">
                        Más que un libro de recetas, nuestra guía te invita a adoptar un estilo de vida más consciente y saludable, inspirado en la sabiduría japonesa.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section class="py-20 bg-gradient-to-b from-brand-purple to-indigo-950 text-center">
        <div class="max-w-4xl mx-auto px-4">
            <h2 class="text-8xl md:text-9xl font-extrabold text-white mb-4 drop-shadow-lg animate-fade-in-up">
                +50
            </h2>
            <p class="text-xl md:text-2xl font-semibold mb-8 uppercase tracking-widest text-pink-500">
                Recetas Japonesas
            </p>
            
            <p class="text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
                Cuidadosamente seleccionadas y adaptadas para una dieta sana y práctica. Desde sushi y sashimi frescos y vibrantes, pasando por nutritivos ramen y udon, hasta deliciosos acompañamientos como sunomono y gohan, y postres exóticos ligeros.
            </p>

            <div class="grid md:grid-cols-2 gap-8 mt-12">
                <div class="bg-indigo-900 bg-opacity-40 p-6 rounded-xl border border-indigo-700">
                    <div class="text-4xl mb-4 text-yellow-400"><i class="fas fa-carrot"></i></div>
                    <h3 class="text-xl font-bold mb-2">Rico en Nutrientes</h3>
                    <p class="text-sm text-gray-400">Ingredientes que potencian tu salud y energía a diario.</p>
                </div>
                <div class="bg-indigo-900 bg-opacity-40 p-6 rounded-xl border border-indigo-700">
                    <div class="text-4xl mb-4 text-pink-400"><i class="fas fa-heart"></i></div>
                    <h3 class="text-xl font-bold mb-2">Conecta Mediante la Gastronomía</h3>
                    <p class="text-sm text-gray-400">Una experiencia cultural que une a las personas alrededor de la mesa.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="offer" class="py-20 bg-brand-lightPurple relative overflow-hidden">
        <div class="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>

        <div class="max-w-3xl mx-auto px-4 text-center z-10 relative">
            <p class="text-lg text-gray-300 mb-6">¡Accede a todo esto pulsando el botón de abajo!</p>
            
            <div class="bg-indigo-950 rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-indigo-800">
                <h3 class="text-2xl md:text-3xl font-bold text-white mb-2">
                    ¡QUIERO EXPLORAR LA COCINA JAPONESA SALUDABLE AHORA!
                </h3>
                
                <p class="text-pink-400 font-bold text-xl mb-8 mt-4">
                    ¡Acceso inmediato a un precio irresistible con Garantía Total!
                </p>

                <div class="text-left max-w-xs mx-auto space-y-3 mb-10 text-gray-200">
                    <div class="flex items-center">
                        <i class="fas fa-check text-green-500 mr-3 text-xl"></i>
                        <span>Acceso a la aplicación</span>
                    </div>
                    <div class="flex items-center">
                        <i class="fas fa-check text-green-500 mr-3 text-xl"></i>
                        <span>Acceso a +50 recetas</span>
                    </div>
                    <div class="flex items-center">
                        <i class="fas fa-check text-green-500 mr-3 text-xl"></i>
                        <span>Diseñado para una vida mejor</span>
                    </div>
                </div>

                <div class="mb-10">
                    <span class="text-6xl font-bold text-white tracking-tighter">US$ 37,00</span>
                </div>

                <a href="https://www.checkout-ds24.com/product/667753" class="btn-pulse block w-full bg-brand-green hover:bg-brand-greenHover text-white font-bold py-5 px-8 rounded-xl text-2xl uppercase shadow-lg transition transform hover:-translate-y-1">
                    Comprar Ahora
                </a>

                <div class="flex justify-center items-center space-x-6 mt-8 opacity-70 text-xs md:text-sm">
                    <div class="flex flex-col items-center">
                        <i class="fas fa-shield-alt text-2xl mb-1"></i>
                        <span>Pago Seguro</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <i class="fas fa-thumbs-up text-2xl mb-1"></i>
                        <span>Satisfacción</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <i class="fas fa-lock text-2xl mb-1"></i>
                        <span>Privacidad</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="bg-black py-16 px-4 text-center border-t border-gray-800">
        <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
                ¡Tu compra es 100% segura y con una <span class="text-green-500">Garantía de Satisfacción de 60 Días!</span>
            </h2>
            <p class="text-gray-400 leading-relaxed text-sm md:text-base max-w-2xl mx-auto">
                Confiamos tanto en la calidad y el poder de transformación de nuestra guía que ofrecemos una garantía incondicional de 60 días. Si por alguna razón no estás completamente satisfecho con el material, simplemente envíanos un correo electrónico.
            </p>
            
            <div class="mt-12 pt-8 border-t border-gray-800 text-xs text-gray-600">
                <p>&copy; 2025 Grupo Vrd LTDA. Todos los derechos reservados.</p>
                <p class="mt-2 mb-4">Descargo de responsabilidad: Este sitio no forma parte del sitio web de Facebook ni de Facebook Inc.</p>
                
                <div class="flex justify-center space-x-4">
                    <button onclick="document.getElementById('imprint-modal').classList.remove('hidden')" class="text-gray-500 hover:text-white underline">
                        Aviso Legal / Imprint
                    </button>
                    <span class="text-gray-700">|</span>
                    <a href="terms.html" class="text-gray-500 hover:text-white underline">Términos de Uso</a>
                    <span class="text-gray-700">|</span>
                    <a href="privacy.html" class="text-gray-500 hover:text-white underline">Política de Privacidad</a>
                </div>
            </div>
        </div>
    </section>

    <div id="imprint-modal" class="hidden fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
        <div class="bg-white text-gray-900 rounded-lg max-w-lg w-full p-8 relative max-h-[90vh] overflow-y-auto">
            <button onclick="document.getElementById('imprint-modal').classList.add('hidden')" class="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
                <i class="fas fa-times text-2xl"></i>
            </button>
            <h3 class="text-2xl font-bold mb-6 text-indigo-900 border-b pb-2">Aviso Legal (Imprint)</h3>
            
            <div class="space-y-4 text-sm text-gray-700">
                <p class="text-xs text-gray-500 italic mb-4">
                    Información según el § 5 de la DDG (Ley Alemana de Servicios Digitales):
                </p>

                <div>
                    <h4 class="font-bold text-indigo-800">1. Empresa / Operador</h4>
                    <p>Grupo Vrd LTDA</p>
                    <p>Avenida Tiradentes, 1008, Andar 20, Sala 2005, Cxpst 114</p>
                    <p>Zona 01, Maringá - PR, CEP 87013-260</p>
                    <p>Brasil</p>
                </div>

                <div>
                    <h4 class="font-bold text-indigo-800">2. Contacto</h4>
                    <p><strong>Email:</strong> <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="5f393e3c712c3a293a31363139301f38323e3633713c3032">[email&#160;protected]</a></p>
                    <p><strong>Teléfono:</strong> +55 (69) 984XX-XXXX</p>
                </div>

                <div>
                    <h4 class="font-bold text-indigo-800">3. Representación Legal</h4>
                    <p>Representado por: [Nombre del Socio-Administrador]</p>
                </div>

                <div>
                    <h4 class="font-bold text-indigo-800">4. Registro</h4>
                    <p>CNPJ (Número de Registro): 40.361.483/0001-74</p>
                </div>

                <div>
                    <h4 class="font-bold text-indigo-800">5. Responsable del Contenido</h4>
                    <p>Responsable según el § 18 Abs. 2 MStV:</p>
                    <p>Grupo Vrd LTDA</p>
                </div>
                
                <div class="mt-6 pt-4 border-t border-gray-200">
                    <p class="text-xs">
                        Plataforma de la Comisión Europea para la resolución de litigios en línea: <a href="https://ec.europa.eu/consumers/odr" target="_blank" class="text-blue-600 underline">https://ec.europa.eu/consumers/odr</a>
                    </p>
                </div>
            </div>
        </div>
    </div>

<!-- Begin of Digistore24 Trusted Badge Code -->
<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script type="text/javascript" src="https://www.digistore24.com/trusted-badge/44613/11rn900iYnEnoqr/salespage"></script>
<!-- End of Digistore24 Trusted Badge Code -->
    
<script defer src="https://static.cloudflareinsights.com/beacon.min.js/v8c78df7c7c0f484497ecbca7046644da1771523124516" integrity="sha512-8DS7rgIrAmghBFwoOTujcf6D9rXvH8xm8JQ1Ja01h9QX8EzXldiszufYa4IFfKdLUKTTrnSFXLDkUEOTrZQ8Qg==" data-cf-beacon='{"version":"2024.11.0","token":"120e9504642e4cf88c6cf01ef6ae5b7d","r":1,"server_timing":{"name":{"cfCacheStatus":true,"cfEdge":true,"cfExtPri":true,"cfL4":true,"cfOrigin":true,"cfSpeedBrain":true},"location_startswith":null}}' crossorigin="anonymous"></script>
</body>
</html>`;

  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}
