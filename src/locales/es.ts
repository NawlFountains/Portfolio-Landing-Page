export const es = {
	nav: {
		about: 'Acerca',
		experience: 'Experiencia',
		education: 'Educación',
		projects: 'Proyectos',
		stack: 'Stack',
		contact: 'Contacto',
	},
	intro: {
		greeting: "Hola, soy Nahuel",
		description: "Soy Licenciado en Ciencias de la Computación y construyo sistemas inteligentes. Desde campos de radiancia neurales hasta pipelines RAG — trabajo en todo el stack del desarrollo de software e inteligencia artificial moderna.",
	},
	about: {
		title: "Graduado en CS · Argentina",
		first_paragraph: "Me atraen los problemas que están en el límite de lo actualmente posible. Ya sea entender cómo una red enruta paquetes, cómo un modelo aprende a representar una escena 3D, o cómo hacer software que realmente escale — quiero entender cómo funcionan las cosas a un nivel profundo.",
		second_paragraph: "Estoy basado en Argentina, recién graduado en Ciencias de la Computación, y siempre buscando el próximo problema interesante para resolver. Me importa mucho escribir código limpio e intencional, y construir cosas que valgan la pena."
	},
	projects: [
		{
			name: 'RAG Tutor',
			description: 'Un chatbot basado en RAG con embeddings dinámicos que toma documentos y los usa como base de conocimiento al chatear con un LLM.',
		},
		{
			name: 'Detección de Pronóstico y Bajo Rendimiento en O&G',
			description: 'Análisis exploratorio sobre un dataset público de 2006-2026 de producción petrolera, usando la curva de declive de Arps y Prophet para pronosticar la producción de pozos y detectar posible bajo rendimiento.',
		},
		{
			name: 'PetPillPal',
			description: 'PetPillPal permite a los hogares rastrear y coordinar los horarios de medicación de sus mascotas. Los miembros de la familia reciben notificaciones cuando una dosis está pendiente o cuando alguien ya la administró, evitando doble dosificación y dosis olvidadas.',
		},
		{
			name: 'QueryNeRF',
			description: 'Optimización de NeRF basada en densidad de puntos, reduciendo el volumen de la región de muestreo hasta un 25%, desarrollada durante mi tiempo como Becario de investigación en el programa EVC-CIN.',
		},
	],
	experiences: [
		{
			title: 'Becario de Investigación',
			company_name: 'Universidad Nacional del Sur',
			description: 'Realicé investigación de vanguardia en Inteligencia Artificial, enfocándome en campos de radiancia neurales (NeRFs), evaluando el rendimiento de modelos con PSNR y SSIM, identificando limitaciones y sugiriendo mejoras arquitectónicas.',
			place: 'Buenos Aires, Argentina',
			time: '2024 - 2025',
		},
	],
	educations: [
		{
			title: 'Licenciatura en Ciencias de la Computación',
			institution_name: 'Universidad Nacional del Sur',
			description: 'Con cursos especializados en Minería de Datos, Inteligencia Artificial y Visualización de Datos. Tesis desarrollada en colaboración con el programa de investigación EVC-CIN, extendiendo mi trabajo como Becario de Investigación para estudiar arquitecturas de redes neuronales y sus estrategias de optimización.',
			place: 'Buenos Aires, Argentina',
			time: '2019 - 2025',
		},
		{
			title: 'Certificado CI/CD con Github Actions',
			institution_name: 'EATI',
			description: 'Cursado de 20 horas utilizando Github Actions y Docker para flujos de trabajo.',
			place: 'Buenos Aires, Argentina',
			time: '2023',
		},
		{
			title: 'FCE Cambridge English',
			institution_name: 'Cambridge Academy',
			description: 'Puntaje 179 (Certificado B2)',
			place: 'Buenos Aires, Argentina',
			time: '2018',
		},
	],
	stack: [
		{ discipline: 'IA/ML' },
		{ discipline: 'Desarrollo Web' },
		{ discipline: 'Desarrollo Mobile' },
		{ discipline: 'Lenguajes' },
		{ discipline: 'DevOps / Herramientas' },
	],
	contact: {
		reach_out: "¿Tenés un proyecto en mente o simplemente querés conectar? No dudes en escribirme.",
		location: "Buenos Aires, Argentina",
	}
}
