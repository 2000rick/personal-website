export const personalData = {
	name: "Qipeng Liang",
	role: "Software Engineer",
	education: [
		"Bachelor of Science in Computer Science, University of California, Riverside (2019 - 2023)",
	],
	contactLinks: [
		"mailto:qlian015@ucr.edu",
		"https://github.com/2000rick",
		"https://www.linkedin.com/in/qipengliang/",
	],
};

export const aboutMe = {
	title: "About Me",
	body: [
		"Hello, my name is Qipeng aka Rick. I have recently completed my Bachelor's in Computer Science degree.",
		"I have a variety of interests in Software Engineering and Computer Science related topics, but I aim to specialize in backend development.\
		 I aspire to build software systems that improve people's lives. \
		 But I also enjoy working on fun and/or challenging projects, like this personal website and some projects listed above.",
		"Outside of work and professional studies, I enjoy solving the Rubik's cube, watching movies, and playing racing/rhythm games.",
	],
};

export const skills = {
	soft: [
		{ icon: "💬", text: "Technical Communication" },
		{ icon: "💡", text: "Creative Problem Solving" },
		{ icon: "👥", text: "Mandarin/Cantonese" },
	],
	technical: [

		{ icon: "💻", text: "C++ & C" },
		{ icon: "💻", text: "Python" },
		{ icon: "💻", text: "Java" },
		{ icon: "💻", text: "Scala" },
		{ icon: "💻", text: "JavaScript" },
		{ icon: "💻", text: "Bash Scripts" },
		{ icon: "🚀", text: "Apache Spark" },
		{ icon: "💙", text: "Git" },
		{ icon: "🤍", text: "Github" },
		{ icon: "💾", text: "SQL" },
		{ icon: "💾", text: "NoSQL" },
		{ icon: "🤔", text: "Data Structures and Algorithms" },
		{ icon: "😤", text: "HTML/CSS" },
	],
};

export const professionalData = {
	title: "Experience",
	experiences: [
		{
			link: "https://www1.cs.ucr.edu/",
			role: "Computer Science Grader, University of California, Riverside. (2022 - 2023)",
			description:
				"•Grade and provide feedback on student assignments for classes with 100+ students.\n\
				 •Answer student questions about assignments and/or course materials through weekly office hours (CS141).\n\
				\n•Grader for Data Structures & Algorithms (CS141, Fall 2022) and Software Engineering (CS180, Winter 2023)",
			current: false,
		},
	],
};

export const projectData = {
	title: "Projects",
	experiences: [
		{
			link: "https://github.com/2000rick/personal-website",
			role: "Personal Website (Present)",
			description:
				"•This website you are currently viewing.\n\
				•Built using Next.JS and Tailwind CSS.\n\
				•Webpage is optimized for viewing on both desktop and mobile devices.",
			current: true,
		},
		
		{
			link: "https://github.com/2000rick/CS170_EightPuzzle",
			role: "Sliding Tiles Puzzle Solver (Artificial Intelligence) (2022)",
			description:
				"•Designed and implemented, in C++, an application that solves sliding tile puzzles.\n\
				•Implemented three search algorithms:\n\
				- Uniform Cost Search\n\
				- A* with the Misplaced Tiles Heuristic\n\
				- A* with the Manhattan Distance Heuristic\n\
				•Users select which search algorithm to run. They can also enter a custom puzzle of their choice or select a predefined puzzle.",
			current: false,
		},

		{
			link: "https://github.com/2000rick/FeatureSelection",
			role: "Feature Selection (AI/ML) (2022)",
			description:
				"•Designed and implemented, in both Python and C++, a feature selection application (The C++ implementation is about 200x faster!).\n\
				•Given a dataset, this application finds the \"best\" subset of features that maximizes the accuracy of a classifier.\n\
				•Implemented two greedy search algorithms: Forward Selection and Backward Elimination\n\
				•The classifier used is Nearest Neighbor, and the evaluation function used is n-fold cross validation.\n\
				•Running the forward selection algorithm with a sample dataset, the classifier accuracy is 97.4%.",
			current: false,
		},

		{
			link: "https://github.com/2000rick/movie-search-engine",
			role: "Movie Search Engine (2021)",
			description:
				"• Co-developed a movie search engine that allows for both broad and specific searches depending on user input.\n\
				• Collaborated with others to build the project over several sprints following the Scrum framework.\n\
				• Implemented a search query parser that generates a “Select” method, allowing the program to effectively determine which movies to show.\n\
				• Implemented 45+ units tests using Google Test to verify that isolated methods work as expected.\n\
				• Established continuous integration for the project using GitHub Actions.\n\
				• Ensured the application is free of memory leaks by using Valgrind to check for and fix any problems.",
			current: false,
		},
	],
};
