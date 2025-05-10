'use client'


import React from 'react';

interface Skill {
    name: string;
    level: number;
    icon: string;
}

const technicalSkills: Skill[] = [
    { name: "HTML", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", level: 92, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React", level: 79, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", level: 76, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Vue.js", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
    { name: "MongoDB", level: 50, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Tailwind CSS", level: 88, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    { name: "Git", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Figma", level: 50, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Python", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Laravel", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" },
    { name: "PHP", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "PostgreSQL", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MySQL", level: 60, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Composer", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/composer/composer-original.svg" },
    { name: "Canva", level: 60, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canvas/canvas-original.svg" },
    { name: "Sass", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
    { name: "Bootstrap", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Express.js", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Next.js", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Nuxt.js", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg" },
];
const Skills: React.FC = () => {
    const sortedSkills = [...technicalSkills].sort((a, b) => b.level - a.level);

    const third = Math.ceil(sortedSkills.length / 3);
    const firstThird = sortedSkills.slice(0, third);
    const secondThird = sortedSkills.slice(third, third * 2);
    const lastThird = sortedSkills.slice(third * 2);

    const renderSkillBlock = (skills: Skill[]) => (
        <div className="space-y-6">
            {skills.map((skill, index) => (
                <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                            <img src={skill.icon} alt={skill.name} className="w-6 h-6 mr-3" />
                            <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-teal-500 rounded-full"
                            style={{ width: `${skill.level}%`, transition: 'width 1s ease-in-out' }}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <section id="skills" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        My Skills
                    </h2>
                    <div className="h-1 w-20 bg-teal-500 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        A comprehensive look at my technical expertise and abilities
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div>{renderSkillBlock(firstThird)}</div>
                    <div>{renderSkillBlock(secondThird)}</div>
                    <div>{renderSkillBlock(lastThird)}</div>
                </div>

                {/* Bloc "Professional Skills" inchangé */}
                <div className="mt-20">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-10">
                        Professional Skills
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { skill: "Problem Solving", percentage: 85 },
                            { skill: "Team Collaboration", percentage: 80 },
                            { skill: "Communication", percentage: 78 },
                            { skill: "Time Management", percentage: 62 }
                        ].map((item, index) => (
                            <div key={index} className="relative">
                                <svg className="w-full h-auto" viewBox="0 0 120 120">
                                    <circle cx="60" cy="60" r="54" fill="none" stroke="#e2e8f0" strokeWidth="12" className="dark:stroke-gray-700" />
                                    <circle
                                        cx="60"
                                        cy="60"
                                        r="54"
                                        fill="none"
                                        stroke="#0d9488"
                                        strokeWidth="12"
                                        strokeDasharray="339.292"
                                        strokeDashoffset={339.292 - (339.292 * item.percentage) / 100}
                                        className="transform -rotate-90 origin-center transition-all duration-1000 ease-out"
                                    />
                                </svg>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
                                    <span className="block text-2xl font-bold text-gray-900 dark:text-white">
                                        {item.percentage}%
                                    </span>
                                    <span className="block text-sm text-gray-600 dark:text-gray-400 mt-1">
                                        {item.skill}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;