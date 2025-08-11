import { Button } from "@/components/ui/button";
import personalInfo from "@/data/personal-info.json"

export function Contact() {
    return (
        <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            ¿Trabajamos Juntos?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            Estoy siempre abierto a nuevas oportunidades y proyectos interesantes. ¡Hablemos sobre cómo puedo ayudarte a
            crear algo increíble!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3"
              onClick={() => window.open(personalInfo.social.email)}
            >
              Enviar Email
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-purple-200 text-purple-600 hover:bg-purple-50 dark:border-purple-800 dark:text-purple-400 dark:hover:bg-purple-950 px-8 py-3 bg-transparent"
              onClick={() => window.open(personalInfo.social.linkedin, "_blank")}
            >
              LinkedIn
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Email</h3>
              <p className="text-slate-600 dark:text-slate-400">{personalInfo.email}</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Ubicación</h3>
              <p className="text-slate-600 dark:text-slate-400">{personalInfo.location}</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Disponibilidad</h3>
              <p className="text-slate-600 dark:text-slate-400">{personalInfo.availability}</p>
            </div>
          </div>
        </div>
      </section>
    );
}