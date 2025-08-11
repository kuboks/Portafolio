import { Users, Palette, Code } from "lucide-react";
import personalInfo from "@/data/personal-info.json"

export function AboutMe() {
    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Sobre Mí
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Soy un diseñador UX/UI y desarrollador frontend apasionado por crear productos digitales que no solo se
              ven increíbles, sino que también ofrecen experiencias excepcionales.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-200">Mi Enfoque</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Centrado en el Usuario</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Cada decisión de diseño se basa en investigación de usuarios y datos reales.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Palette className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Diseño Sistemático</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Creo sistemas de diseño escalables y consistentes para equipos de desarrollo.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Implementación Técnica</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Entiendo las limitaciones técnicas y optimizo mis diseños para el desarrollo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-200">Experiencia</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 dark:text-slate-400">Años de experiencia</span>
                  <span className="font-bold text-purple-600 dark:text-purple-400">
                    {personalInfo.stats.experience}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 dark:text-slate-400">Proyectos completados</span>
                  <span className="font-bold text-purple-600 dark:text-purple-400">{personalInfo.stats.projects}</span>
                </div>
                {/* <div className="flex justify-between items-center">
                  <span className="text-slate-600 dark:text-slate-400">Clientes satisfechos</span>
                  <span className="font-bold text-purple-600 dark:text-purple-400">{personalInfo.stats.clients}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 dark:text-slate-400">Tasa de satisfacción</span>
                  <span className="font-bold text-purple-600 dark:text-purple-400">
                    {personalInfo.stats.satisfaction}
                  </span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}