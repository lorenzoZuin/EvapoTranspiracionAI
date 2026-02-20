/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Droplets, 
  Satellite, 
  Cpu, 
  TrendingDown, 
  Globe, 
  Clock, 
  Mail, 
  ChevronRight,
  ShieldCheck,
  BarChart3,
  Zap
} from 'lucide-react';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-zinc-100">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
          <Droplets className="text-white w-5 h-5" />
        </div>
        <span className="font-bold text-xl tracking-tight text-zinc-900">EvapoTranspiración<span className="text-emerald-600">AI</span></span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
        <a href="#problema" className="hover:text-emerald-600 transition-colors">Problema</a>
        <a href="#solucion" className="hover:text-emerald-600 transition-colors">Tecnología</a>
        <a href="#mercado" className="hover:text-emerald-600 transition-colors">Mercado</a>
        <a href="#contacto" className="px-4 py-2 bg-zinc-900 text-white rounded-full hover:bg-zinc-800 transition-all">
          Contactar Inversores
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden grid-pattern">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-emerald-100 text-emerald-700 rounded-full">
              AgTech & AI Revolution
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 text-zinc-900">
              El Futuro del Campo es <span className="text-emerald-600 italic font-serif">Predictivo</span>.
            </h1>
            <p className="text-xl text-zinc-600 mb-8 max-w-2xl leading-relaxed">
              Fusionamos datos satelitales de la NASA con un modelo de AI que utiliza Machine Learning para obtener valores precisios de Evapotranspiración del suelo.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a 
                href="#contacto" 
                className="w-full sm:w-auto px-8 py-4 bg-emerald-600 text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-emerald-700 hover:scale-105 transition-all shadow-lg shadow-emerald-200"
              >
                Oportunidad de Inversión <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
        <div className="flex-1 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10"
          >
            {/* Visual Suggestion: Animation of a field being scanned by a satellite */}
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-zinc-900 relative">
              <img 
                src="https://picsum.photos/id/808/800/800" 
                alt="Satellite Monitoring" 
                className="w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <Satellite className="w-20 h-20 text-emerald-400 mx-auto mb-4 animate-pulse" />
                  <p className="text-emerald-400 font-mono text-xs tracking-widest uppercase">NASA POWER DATA STREAMING...</p>
                </div>
              </div>
              {/* Overlay UI elements to simulate a dashboard */}
              <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-xl">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold mb-1">Evapotranspiración Real (ETc)</p>
                    <p className="text-2xl font-mono font-bold text-zinc-900">4.82 mm/día</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-wider text-emerald-600 font-bold">Confianza IA</p>
                    <p className="text-lg font-mono font-bold text-emerald-600">91.2%</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-200 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
        </div>
      </div>
    </div>
  </section>
);

const Problem = () => (
  <section id="problema" className="py-24 bg-zinc-900 text-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-8 leading-tight">
            <span className="text-emerald-400">Mejoramos</span> la forma de obtener información.
          </h2>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
                <TrendingDown className="text-red-400 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Ineficiencia Crítica</h3>
                <p className="text-zinc-400">El riego por "intuición" o estaciones meteorológicas locales costosas genera un desperdicio masivo o estrés hídrico en los cultivos.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
                <Globe className="text-blue-400 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Zonas Ciegas</h3>
                <p className="text-zinc-400">Millones de hectáreas carecen de infraestructura meteorológica in-situ, dejando a los productores sin datos precisos para tomar decisiones de riego.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-zinc-800 p-8 rounded-3xl border border-zinc-700">
          <h4 className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-6">Impacto del Problema</h4>
          <div className="space-y-6">
            {[
              { label: "Desperdicio de Agua", value: "30-50%", color: "bg-emerald-500" },
              { label: "Pérdida de Rendimiento", value: "20%", color: "bg-red-500" },
              { label: "Costos Energéticos Extra", value: "15%", color: "bg-yellow-500" },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">{item.label}</span>
                  <span className="text-sm font-mono font-bold">{item.value}</span>
                </div>
                <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: item.value }}
                    transition={{ duration: 1, delay: i * 0.2 }}
                    className={`h-full ${item.color}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Solution = () => (
  <section id="solucion" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold mb-4 text-zinc-900">Nuestra Ciencia: Fusión de Datos e IA</h2>
        <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
          No solo estimamos, predecimos. Combinamos el estándar de ET de la agronomía con el poder del Gradient Boosting.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <Satellite className="w-8 h-8 text-emerald-600" />,
            title: "NASA Power Integration",
            desc: "Extracción automatizada de radiación solar, temperatura y humedad satelital con cobertura global."
          },
          {
            icon: <Cpu className="w-8 h-8 text-emerald-600" />,
            title: "XGBoost Optimized",
            desc: "Algoritmos de Gradient Boosting entrenados con ingeniería de características avanzada (VPD, ciclos temporales)."
          },
          {
            icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />,
            title: "FAO-56 Validation",
            desc: "Nuestros modelos se calibran bajo el estándar Penman-Monteith, garantizando rigor científico."
          }
        ].map((feature, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:shadow-xl transition-all"
          >
            <div className="mb-6">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-4 text-zinc-900">{feature.title}</h3>
            <p className="text-zinc-600 leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 p-12 bg-emerald-900 rounded-[3rem] text-white relative overflow-hidden">
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h3 className="text-3xl font-bold mb-6">Escalabilidad Sin Estaciones</h3>
            <p className="text-emerald-100 text-lg mb-8">
              Nuestra tecnología permite ofrecer servicios de precisión en cualquier coordenada del planeta, eliminando la barrera del costo de implementación y mantenimiento de hardware dedicado.
            </p>
            <ul className="space-y-4">
              {[
                "Predicciones horarias de alta resolución",
                "Integración vía API para sistemas de riego"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                    <Zap className="w-3 h-3 text-white" />
                  </div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 w-full">
            {/* Visual Suggestion: Data flow diagram or code snippet visualization */}
            <div className="bg-zinc-950 p-6 rounded-2xl font-mono text-sm border border-emerald-500/30 shadow-2xl">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <p className="text-emerald-500 mb-2"># ML Model Inference</p>
              <p className="text-zinc-400">import xgboost as xgb</p>
              <p className="text-zinc-400">model = xgb.Booster()</p>
              <p className="text-zinc-400">model.load_model('et_v2.json')</p>
              <p className="text-zinc-400 mt-4"># Input: NASA + FAO-56 Features</p>
              <p className="text-zinc-400">features = preprocess(nasa_data, coords)</p>
              <p className="text-zinc-400">prediction = model.predict(features)</p>
              <p className="text-emerald-400 mt-4 font-bold">{">"} ETc Predicted: 4.82 mm/day</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Market = () => (
  <section id="mercado" className="py-24 bg-zinc-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-1 gap-16 items-center">
        <div className="order-1 lg:order-2">
          <h2 className="text-4xl font-bold mb-6 text-zinc-900">Un Mercado en Busca de Eficiencia</h2>
          <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
            La digitalización del campo no es una opción, es una necesidad. Nuestra solución ataca el costo operativo más variable: el agua y la energía asociada al riego.
            Lo hace de una manera certera utilizando miles de datos históricos para poder tener un resultado preciso.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <BarChart3 className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
              <p className="text-zinc-700 font-medium">Modelos SaaS B2B para grandes agroindustrias y gobiernos.</p>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
              <p className="text-zinc-700 font-medium">Time-to-market acelerado gracias a infraestructura 100% digital.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contacto" className="py-24 bg-zinc-50 relative overflow-hidden">
    <div className="max-w-3xl mx-auto px-6 relative z-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-6 text-zinc-900">Dejanos tu mensaje</h2>
        <p className="text-lg text-zinc-600">
          ¿Interesado en invertir o colaborar? Queremos escucharte.
        </p>
      </div>

      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-zinc-100">
        <form action="https://formspree.io/f/mwvnnjpy" method="POST" className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="nombre" className="block text-sm font-semibold text-zinc-700">
                Nombre
              </label>
              <input 
                type="text" 
                id="nombre" 
                name="nombre"
                placeholder="Tu nombre"
                className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="apellido" className="block text-sm font-semibold text-zinc-700">
                Apellido
              </label>
              <input 
                type="text" 
                id="apellido" 
                name="apellido"
                placeholder="Tu apellido"
                className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-semibold text-zinc-700">
              Correo Electrónico
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-3.5 text-zinc-400 w-5 h-5" />
              <input 
                type="email" 
                id="email" 
                name="email"
                placeholder="tu@email.com"
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-semibold text-zinc-700">
              Mensaje
            </label>
            <textarea 
              id="message" 
              name="message"
              rows={4}
              placeholder="Cuéntanos cómo te gustaría colaborar..."
              className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all resize-none"
              required
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-200 flex items-center justify-center gap-2"
          >
            Enviar Mensaje <ChevronRight className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
    
    {/* Decorative background elements */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 bg-white border-t border-zinc-100">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
        <div className="max-w-sm">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
              <Droplets className="text-white w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-zinc-900">EvapoTranspiración<span className="text-emerald-600">AI</span></span>
          </div>
          <p className="text-zinc-500 leading-relaxed">
            Liderando la transición hacia una agricultura resiliente y basada en datos. Tecnología argentina con visión global.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-zinc-900 mb-6">Contacto Directo</h4>
          <a href="mailto:lorenzuin@gmail.com" className="flex items-center gap-3 text-zinc-600 hover:text-emerald-600 transition-colors">
            <Mail className="w-5 h-5" /> lorenzuin@gmail.com
          </a>
        </div>
        
      </div>
      <div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-400">
        <p>© 2026 EvapoTranspiración AI. Todos los derechos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-emerald-600">LinkedIn</a>
          <a href="#" className="hover:text-emerald-600">Twitter</a>
          <a href="#" className="hover:text-emerald-600">GitHub</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Market />
      <section className="py-24 bg-emerald-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">¿Listo para escalar el futuro del riego?</h2>
          <p className="text-xl text-emerald-100 mb-10">
            Estamos abriendo nuestra ronda de inversión Seed. Únete a la revolución AgTech.
          </p>
          <a 
            href="#contacto" 
            className="inline-block px-10 py-5 bg-white text-emerald-600 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-xl"
          >
            Solicitar Pitch Deck
          </a>
        </div>
      </section>
      <Contact />
      <Footer />
    </div>
  );
}
