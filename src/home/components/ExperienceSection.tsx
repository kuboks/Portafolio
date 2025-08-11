import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import experienceData from "@/data/experience.json"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Experiencia
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Mi trayectoria profesional en diseño UX/UI y desarrollo frontend.
          </p>
        </div>
        <div className="space-y-8">
          {experienceData.map((job) => (
            <Card key={job.id} className="border-l-4 border-l-purple-500 shadow-lg">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl text-slate-800 dark:text-slate-200">{job.position}</CardTitle>
                    <CardDescription className="text-lg font-medium text-purple-600 dark:text-purple-400">
                      {job.company}
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
                    {job.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400 mb-4">{job.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200">Logros principales:</h4>
                  <ul className="space-y-1">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center text-slate-600 dark:text-slate-400">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
