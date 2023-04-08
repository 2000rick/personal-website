export const personalData = {
	name: "Qipeng Liang",
	role: "Software Developer",
	education: [
		"Bachelor of Science in Computer Science, University of California, Riverside (2019-2023)",
	],
	contactLinks: [
		"mailto:emailto:qliang648@gmail.com",
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
		 But I also enjoy working on fun and challenging projects, like this personal website and some projects listed above.",
		"Outside of work and professional studies, I enjoy solving the Rubik's cube, watching movies, and playing racing/rhythm games.",
	],
};

export const skills = {
	soft: [
		{ icon: "💡", text: "Creative Problem Solving" },
		{ icon: "💬", text: "Technical Communication" },
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
		{ icon: "💾", text: "noSQL" },
		{ icon: "🤔", text: "Data Structures and Algorithms" },
		{ icon: "😤", text: "HTML/CSS" },
	],
};

export const professionalData = {
	title: "Projects / Experience",
	experiences: [
		{
			role: "Computer Science Grader, University of California, Riverside. (2022-2023)",
			description:
				"•Grade and provide feedback on student assignments for classes with 100+ students.\n\
				 •Answer student questions about assignments and/or course materials through weekly office hours (CS141).\n\
				\n•Grader for Data Structures & Algorithms (CS141, Fall 2022) and Software Engineering (CS180, Winter 2023)",
			current: false,
		},

		{
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
