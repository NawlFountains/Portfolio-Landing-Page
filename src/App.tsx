import { Education, Project, Stack } from './lib/definitions';
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

function App() {
    const projects : Project[] = [
        {
            name: 'RAG Tutor',
            description: 'A RAG Based chatbot with dynamic embedding that takes documents and uses them as grounding while chatting with an LLM.',
            stack: [
                'LangChain',
                'Qdrant',
                'Python',
                'Pandas',
                'Streamlit',
                'Ragas',
                'Groq API',
                'EDA'
            ],
            repo_link: 'https://github.com/NawlFountains/RAG-Tutor-Helper',
            live_demo_link: 'https://rag-academic-tutor.streamlit.app/'
        }, {
            name: 'O&G Forecast and Underperform Detection',
            description: 'Exploratory Analysis on public dataset from 2006-2026 of Oil Producion, using Arp Decline curve and Prophet for forecasting wells production and flagging possible underperformance',
            stack: [
                'Pandas',
                'Plotly',
                'Python',
                'Scipy',
                'Streamlit',
                'EDA'
            ],
            repo_link: 'https://github.com/NawlFountains/Vaca-muerta-production-forecast',
            live_demo_link: 'https://vaca-muerta-underperformance-forecast.streamlit.app/'
        }, {
            name: 'PetMeds ',
            description: 'PetMeds allows households to track and coordinate medication schedules for their pets. Family members get notified when a dose is due and when someone has given it, preventing double-dosing and missed medications.',
            stack: [
                'Expo',
                'Expo-Router',
                'Typescript',
                'React',
                'Expo-Notifications',
                'NativeWind',
                'CI/CD'
            ],
            repo_link: 'https://github.com/NawlFountains/PetMeds',
            live_demo_link: 'https://vaca-muerta-underperformance-forecast.streamlit.app/' //TODO
        }
    ]

    const educations: Education[] = [
        {
            title: 'Bachelor Degree in Computer Science',
            institution_name: 'Universidad Nacional del Sur',
            description: 'With specialized coursework in Data Mining, Artificial Intelligence & Data Visualization. Thesis developed in collaboration with the EVC-CIN research program, extending my work as a Research Intern to study Neural Network architectures and their optimization strategies.',
            place: 'Buenos Aires, Argentina',
            time: '2019 - 2025',
        }, {
            title: 'Certificate CI/CD with Github Actions',
            institution_name: 'EATI',
            description: 'Coursework of 20 hours using Github Actions and Docker for workflows',
            place: 'Buenos Aires, Argentina',
            time: '2023'
        }, {
            title: 'FCE Cambdrige English',
            institution_name: 'Cambdrige Academy',
            description: 'Scored 179 (Certified B2)',
            place: 'Buenos Aires, Argentina',
            time: '2018'
        }
    ]
    
    const stacks: Stack[] = [ {
            discipline: 'AI/ML',
            tools: ['Python', 'Tensorflow','PyTorch', 'Plotly', 'Pandas', 'Numpy', 'Scipy', 'RAGAS', 'LangChain', 'Qdrant', 'EDA']
        }, {
            discipline: 'Web Dev',
            tools: ['React', 'Next.js','Node.js', 'Streamlit'],
        }, {
            discipline: 'Mobile Development',
            tools: ['Expo' , 'Expo-Router', 'Expo-Notifications', 'NativeWind', 'Kotlin', 'Jetpack Compose'],
        }, {
            discipline: 'Languages',
            tools: ['Python', 'Typescript', 'Java', 'C'],
        }, {
            discipline: 'DevOps / Tools',
            tools: ['CI/CD', 'Docker', 'Github Actions'],
        }
    ]
  return (
    <div className='bg-black text-white'>
        {/* TODO fix */}
        <div className='py-5'>.</div> 

        <NavBar/>
        <div className='flex flex-col justify-between items-center mx-20 p-20 gap-12'>
            <div>
                <IntroductionCard/>
            </div>
            <div id='about'>
                <h1 className={`text-3xl font-heading uppercase font-bold p-5 ${gradients.title}`}> {'>'} About</h1>
                <AboutCard/>
            </div>
            <div id='experience'>
                <h1 className={`text-3xl font-heading uppercase font-bold p-5 ${gradients.title}`}> {'>'} Experience</h1>
                <ExperienceCard/>
            </div>
            <div id='education'>
                <h1 className={`text-3xl font-heading uppercase font-bold p-5 ${gradients.title}`}> {'>'} Education</h1>
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

                <h1 className={`text-3xl font-heading uppercase font-bold p-5 ${gradients.title}`}> {'>'} Projects</h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch'>
                    {projects.map( project => (
                        <ProjectCard key = {project.name} project={project} />
                    ))}
                </div>
            </div>
            <div id='stack'>
                <h1 className={`text-3xl font-heading uppercase font-bold p-5 ${gradients.title}`}> {'>'} Stack</h1>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 items-stretch">
                    {stacks.map( stack => (
                        <StackCard stack={stack}/>
                    ))}
                </div>
            </div>
            <div id='contact'>
                <h1 className={`text-3xl font-heading uppercase font-bold p-5 ${gradients.title}`}> {'>'} Contact</h1>
                <ContactCard/>
            </div>
        </div>
    </div>
  );
}

export default App;
