import { Education, Project, Stack, Experience } from './lib/definitions';
import './index.css';
import AboutCard from './ui/AboutCard';
import ContactCard from './ui/ContactCard';
import EducationCard from './ui/EducationCard';
import ExperienceCard from './ui/ExperienceCard';
import IntroductionCard from './ui/IntroductionCard';
import { gradients } from './lib/constants'
import NavBar from './ui/NavBar'
import ProjectCard from './ui/ProjectCard';
import StackCard from './ui/StackCard';
import { useLanguage } from './lib/LanguageContext';
import { projectsMeta, stackMeta } from './lib/data'

function App() {
	const { t } = useLanguage()
    
	const projects : Project[] = t.projects.map((p, i) => ({
	    ...p,
	    ...projectsMeta[i]
	}))
	const experiences : Experience[] = t.experiences
	
	const educations : Education[] = t.educations
	const stacks : Stack[] = t.stack.map((s, i) => ({
	    ...s,
	    ...stackMeta[i]
	}))
	
  return (
    <div className='text-white'>
        <div className="fixed inset-0 -z-10">
            <div className='absolute inset-0 bg-black'></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(168,85,247,0.35)_1px,_transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_black_100%)]" />
        </div>

        <NavBar/>
        <div className='flex flex-col justify-between items-center mx-5 p-5 mt-20 sm:mx-20 sm:p-20 gap-12'>
            <div>

                <IntroductionCard/>
            </div>
            <div id='about'>
                <h1 className={`text-3xl font-heading uppercase font-bold p-5 ${gradients.title}`}> {'>'} {t.nav.about}</h1>
                <AboutCard/>
            </div>
            <div id='experience'>
                <h1 className={`text-3xl font-heading uppercase font-bold p-5 ${gradients.title}`}> {'>'} {t.nav.experience}</h1>
                    <div className="flex flex-col gap-3">
                        {experiences.map(experience=> (
                            <ExperienceCard key={experience.title} experience={experience}/>
                        ))}
                    </div>
            </div>
            <div id='education'>
                <h1 className={`text-3xl font-heading uppercase font-bold p-5 ${gradients.title}`}> {'>'} {t.nav.education}</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5 items-stretch">
                    <EducationCard education={educations[0]}/>
                    <div className="flex flex-col gap-3">
                        {educations.slice(1).map(education => (
                            <EducationCard key={education.title} education={education}/>
                        ))}
                    </div>
                </div>
            </div>
            <div id='projects'>

                <h1 className={`text-3xl font-heading uppercase font-bold p-5 ${gradients.title}`}> {'>'} {t.nav.projects}</h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch'>
                    {projects.map( project => (
                        <ProjectCard key = {project.name} project={project} />
                    ))}
                </div>
            </div>
            <div id='stack'>
                <h1 className={`text-3xl font-heading uppercase font-bold p-5 ${gradients.title}`}> {'>'} {t.nav.stack}</h1>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 items-stretch">
                    {stacks.map( stack => (
                        <StackCard stack={stack}/>
                    ))}
                </div>
            </div>
            <div id='contact'>
                <h1 className={`text-3xl text-center font-heading uppercase font-bold p-5 ${gradients.title}`}> {'>'} {t.nav.contact}</h1>
                <ContactCard/>
            </div>
            <p className="text-center text-gray-600 text-sm py-4">
                © 2025 Nahuel Fuentes
            </p>
        </div>
    </div>
  );
}

export default App;
