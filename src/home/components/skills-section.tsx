"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Palette, Code, Smartphone } from "lucide-react"
import skillsData from "@/data/skills.json"

const iconMap = {
  Palette,
  Code,
  Smartphone,
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Habilidades
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Domino tanto las herramientas de diseño como las tecnologías de desarrollo frontend más actuales.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([key, skillCategory]) => {
            const IconComponent = iconMap[skillCategory.icon as keyof typeof iconMap]
            return (
              <Card key={key} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${skillCategory.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{skillCategory.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {skillCategory.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="mr-2 mb-2">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
