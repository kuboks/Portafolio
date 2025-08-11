import personalInfo from "@/data/personal-info.json"

export function Footer() {
    return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
            <p className="text-slate-400">© 2024 {personalInfo.name}. Diseñado y desarrollado con ❤️</p>
        </div>
      </footer>
    );
}