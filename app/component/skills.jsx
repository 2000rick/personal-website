"use client";
import React, { useState } from "react";

const Skills = ({ data }) => {
	const [activeTab, setActiveTab] = useState("technical");

	const setBg = (active) => (activeTab === active ? "bg-blue" : "bg-grey");
	const setTabsAlignment = (tab) =>
		tab === "technical" ? "text-left" : "text-right";

	const tabs = (
		<div className='flex'>
			{["technical", "soft"].map((element) => (
				<button
					key={element}
					type='button'
					className={`btn ${setBg(element)} ${setTabsAlignment(element)}`}
					onClick={() => setActiveTab(element)}
				>
					{element} Skills
				</button>
			))}
		</div>
	);
	const content = (
		<ul
			className={`flex flex-row flex-wrap content-start list-none py-4 gap-2 justify-start`}
		>
			{data[activeTab].map(({ icon, text }) => (
				<li key={text} className='skill'>
					<span> {icon}</span> {text}
				</li>
			))}
		</ul>
	);
	return (
		<div>
			{tabs}
			{content}
		</div>
	);
};

export default Skills;