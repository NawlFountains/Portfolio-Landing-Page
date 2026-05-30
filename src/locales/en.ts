export const en = {
	nav: {
		about: 'About',
		experience: 'Experience',
		education: 'Education',
		projects: 'Projects',
		stack: 'Stack',
		contact: 'Contact',
	},
	intro: {
		greeting: "Hi, I'm Nahuel",
		description: "I'm a Computer Scientist that build intelligent systems. From neural radiance fields to RAG pipelines — I work across the full stack of modern AI and software engineering",
	},
	about: {
		title: "CS Graduate · Argentina",
		first_paragraph: " I'm drawn to problems that sit at the edge of what's currently possible. Whether that's understanding how a network routes packets, how a model learns to represent a 3D scene, or how to make software that actually scales — I want to know how things work at a deep level.",
		second_paragraph: "I'm based in Argentina, recently graduated in Computer Science, and always looking for the next interesting problem to dig into. I care a lot about writing clean, intentional code and building things that are worth building."
	},
	projects: [
		{
			name: 'RAG Tutor',
			description: 'A RAG Based chatbot with dynamic embedding that takes documents and uses them as grounding while chatting with an LLM.',
		},
		{
			name: 'O&G Forecast and Underperform Detection',
			description: 'Exploratory Analysis on public dataset from 2006-2026 of Oil Producion, using Arp Decline curve and Prophet for forecasting wells production and flagging possible underperformance',
		},
		{
			
			name: 'PetPillPal',
			description: 'PetPillPal allows households to track and coordinate medication schedules for their pets. Family members get notified when a dose is due and when someone has given it, preventing double-dosing and missed medications.',
		},
		{

			name: 'QueryNeRF',
			description: 'NeRF optimization based upon point density, reducing the sampling region volume up to 25%, developed during my time as a Research Intern in the EVC-CIN program.',
		},
	],
	experiences: [
		{
			title: 'Research Intern',
			company_name: 'Universidad Nacional del Sur',
			description: 'Conducted state-of-the-art research in Artificial Intelligence, focusing on neural radiance fields (NeRFs), Evaluated model performance with PSNR and SSIM, identifying limitations and suggesting architectural improvements.',
			place: 'Buenos Aires, Argentina',
			time: '2024 - 2025',
		},
	],
	educations: [
		{			
			title: 'Bachelor Degree in Computer Science',
			institution_name: 'Universidad Nacional del Sur',
			description: 'With specialized coursework in Data Mining, Artificial Intelligence & Data Visualization. Thesis developed in collaboration with the EVC-CIN research program, extending my work as a Research Intern to study Neural Network architectures and their optimization strategies.',
			place: 'Buenos Aires, Argentina',
			time: '2019 - 2025',
		},
		{
			title: 'Certificate CI/CD with Github Actions',
			institution_name: 'EATI',
			description: 'Coursework of 20 hours using Github Actions and Docker for workflows',
			place: 'Buenos Aires, Argentina',
			time: '2023',
		},
		{

			title: 'FCE Cambdrige English',
			institution_name: 'Cambdrige Academy',
			description: 'Scored 179 (Certified B2)',
			place: 'Buenos Aires, Argentina',
			time: '2018',
		},
	],
	stack: [
		{ discipline: 'AI/ML' },
		{ discipline: 'Web Dev' },
		{ discipline: 'Mobile Development' },
		{ discipline: 'Languages' },
		{ discipline: 'DevOps / Tools' },
	],
	contact: {
		reach_out: "Have a project in mind or just want to connect? Feel free to reach out.",
		location: "Buenos Aires, Argentina",
	}

}
