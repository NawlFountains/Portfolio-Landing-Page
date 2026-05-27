import { Project } from './definitions';
import './index.css';
import IntroductionCard from './ui/IntroductionCard';
import NavBar from './ui/NavBar'
import ProjectCard from './ui/ProjectCard';

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
            name: 'O&G Predictor and Underperform Detection ',
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
                'CI/CD'
            ],
            repo_link: 'https://github.com/NawlFountains/PetMeds',
            live_demo_link: 'https://vaca-muerta-underperformance-forecast.streamlit.app/' //TODO
        }
    ]
  return (
    <div className='bg-black'>
        <NavBar/>
        <div className='justify-between items-center m-10 w-2/3 mx-auto '>
            <IntroductionCard/>
            <div id='projects' className='border rounded'>
                <h1 className='text-3xl text-white'>Projects</h1>
                <div className='flex'>
                    {projects.map( project => (
                        <ProjectCard project={project} />
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
