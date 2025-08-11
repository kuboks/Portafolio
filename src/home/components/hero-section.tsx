"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Linkedin, Mail, Download, ArrowRight, ChevronDown } from "lucide-react"
import personalInfo from "@/data/personal-info.json"

interface HeroSectionProps {
  onSectionClick: (section: string) => void
}

export function HeroSection({ onSectionClick }: HeroSectionProps) {
  return (
    <section id="hero" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center py-20">
          <Avatar className="w-32 h-32 mx-auto mb-8 ring-4 ring-purple-200 dark:ring-purple-800">
            <AvatarImage src={personalInfo.avatar || "/placeholder.svg"} alt="Profile" />
            <AvatarFallback className="text-2xl">
              {personalInfo.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Desarrollador
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 mb-8">Fullstack</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            {personalInfo.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3"
              onClick={() => onSectionClick("projects")}
            >
              Ver Proyectos
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-purple-200 text-purple-600 hover:bg-purple-50 dark:border-purple-800 dark:text-purple-400 dark:hover:bg-purple-950 px-8 py-3 bg-transparent"
            >
              <Download className="mr-2 w-5 h-5" />
              Descargar CV
            </Button>
          </div>
          <div className="flex justify-center space-x-6 mt-12">
            <Button
              variant="ghost"
              size="icon"
              className="w-20 h-20 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900"
              onClick={() => window.open(personalInfo.social.github, "_blank")}
            >
              <Github className="w-20 h-20" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-20 h-20 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900"
              onClick={() => window.open(personalInfo.social.linkedin, "_blank")}
            >
              <Linkedin className="w-20 h-20" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-20 h-20 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900"
              onClick={() => window.open(personalInfo.social.email)}
            >
              <Mail className="w-20 h-20" />
            </Button>
          </div>
        </div>
        <div className="text-center">
          <ChevronDown
            className="w-8 h-8 mx-auto text-slate-400 animate-bounce cursor-pointer"
            onClick={() => onSectionClick("about")}
          />
        </div>
      </div>
    </section>
  )
}
