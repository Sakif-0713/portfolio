import React from 'react';
import {
    Mail,
    ExternalLink,
    Code2,
    Database,
    Server,
    Sparkles,
    Layers
} from 'lucide-react';

function GithubIcon({ className = 'w-4 h-4' }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
    );
}

function LinkedinIcon({ className = 'w-4 h-4' }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    );
}

const projects = [
    {
        title: 'VORA Super App',
        badge: 'Flagship Build',
        description:
            'A full-stack multi-category e-commerce super app featuring real-time state synchronization, persistent cart architecture, fluid micro-interactions, and 3D product previews.',
        stack: [
            'Next.js 16',
            'React 19',
            'TypeScript',
            'Neon PostgreSQL',
            'Drizzle ORM',
            'Firebase',
            'Zustand',
            'Tailwind CSS',
            'Framer Motion',
        ],
        liveUrl: 'https://vora-super-app.vercel.app/home',
        githubUrl: 'https://github.com/Sakif-0713/VORA-super-app',
    },
];

const skillCategories = [
    {
        name: 'Frontend & UI',
        icon: Code2,
        skills: ['Next.js (App Router)', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Zustand'],
    },
    {
        name: 'Backend & APIs',
        icon: Server,
        skills: ['Node.js', 'Bun', 'PHP / Laravel', 'RESTful APIs', 'Firebase Realtime'],
    },
    {
        name: 'Database & ORM',
        icon: Database,
        skills: ['PostgreSQL (Neon)', 'Drizzle ORM', 'MySQL', 'Relational Schema Design'],
    },
];

export default function PortfolioPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500 selection:text-black">
            {/* Background Subtle Glow */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-teal-500/10 blur-[130px] rounded-full" />
            </div>

            <main className="relative max-w-4xl mx-auto px-6 py-20 space-y-24">

                {/* Hero Section */}
                <header className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20">
                        <Sparkles className="w-3.5 h-3.5" />
                        Available for Remote Full-Stack Roles
                    </div>

                    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
                        Syed Golam Moktadir <span className="text-teal-400 font-light">(Sakif)</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed">
                        Full-Stack Software Engineer building responsive, end-to-end web applications.
                        Focused on performant architectures using modern <span className="text-white font-medium">TypeScript</span>,{' '}
                        <span className="text-white font-medium">Next.js</span>, and scalable relational data models.
                    </p>

                    {/* Social Links */}
                    <div className="flex flex-wrap gap-4 pt-2">
                        <a
                            href="mailto:moktadirskf1@gmail.com"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-teal-500 text-slate-950 font-semibold hover:bg-teal-400 transition-colors"
                        >
                            <Mail className="w-4 h-4" />
                            Contact Me
                        </a>
                        <a
                            href="https://github.com/Sakif-0713"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-800 bg-slate-900/60 hover:bg-slate-800 hover:text-white text-slate-300 transition-colors"
                        >
                            <GithubIcon className="w-4 h-4" />
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-800 bg-slate-900/60 hover:bg-slate-800 hover:text-white text-slate-300 transition-colors"
                        >
                            <LinkedinIcon className="w-4 h-4" />
                            LinkedIn
                        </a>
                    </div>
                </header>

                {/* Featured Projects */}
                <section className="space-y-8">
                    <div className="flex items-center gap-2.5">
                        <Layers className="w-5 h-5 text-teal-400" />
                        <h2 className="text-2xl font-bold tracking-tight text-white">Featured Project</h2>
                    </div>

                    <div className="space-y-6">
                        {projects.map((project) => (
                            <div
                                key={project.title}
                                className="group relative p-6 sm:p-8 rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-slate-700 hover:bg-slate-900/70 transition-all duration-300"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                                    <div className="flex items-center gap-3">
                                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-teal-300 transition-colors">
                                            {project.title}
                                        </h3>
                                        <span className="px-2.5 py-0.5 text-xs font-semibold rounded bg-teal-500/10 text-teal-300 border border-teal-500/20">
                                            {project.badge}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3 pt-2 sm:pt-0">
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors"
                                        >
                                            <GithubIcon className="w-4 h-4" /> Code
                                        </a>
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors"
                                        >
                                            <ExternalLink className="w-4 h-4" /> Live Demo
                                        </a>
                                    </div>
                                </div>

                                <p className="text-slate-400 leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/50"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Technical Capabilities */}
                <section className="space-y-8">
                    <h2 className="text-2xl font-bold tracking-tight text-white">Technical Skills</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {skillCategories.map((category) => {
                            const Icon = category.icon;
                            return (
                                <div
                                    key={category.name}
                                    className="p-6 rounded-xl border border-slate-800 bg-slate-900/30 space-y-4"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <h3 className="font-semibold text-white">{category.name}</h3>
                                    </div>

                                    <ul className="space-y-2 text-sm text-slate-400">
                                        {category.skills.map((skill) => (
                                            <li key={skill} className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-teal-400/60" />
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Footer */}
                <footer className="pt-12 border-t border-slate-900 text-center text-sm text-slate-600">
                    <p>© {new Date().getFullYear()} Syed Golam Moktadir (Sakif). Built with Next.js & Tailwind CSS.</p>
                </footer>

            </main>
        </div>
    );
}
