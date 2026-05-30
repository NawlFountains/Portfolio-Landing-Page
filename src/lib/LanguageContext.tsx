import { createContext, useContext, useState } from "react"
import { en } from "../locales/en"
import { es } from "../locales/es"

const languages = { en, es }
type Language = keyof typeof languages

const LanguageContext = createContext<{
    t: typeof en
    language: Language
    toggle: () => void
}>({ t: en, language: "en", toggle: () => {} })

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("en")

    const toggle = () => setLanguage(prev => prev === "en" ? "es" : "en")

    return (
        <LanguageContext.Provider value={{ t: languages[language], language, toggle }}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => useContext(LanguageContext)
