export default function Home() {
  const projects = [
    {
      title: "PM Agent Dashboard",
      description: "Multi-agent AI workflow that pulls live JIRA tickets, analyzes sprint health, identifies risks, and delivers stakeholder-ready reports to Pumble — automatically every Monday morning.",
      tech: ["Claude Sonnet", "Python", "JIRA API", "Supabase", "GitHub Actions"],
      url: "https://pm-agent-dashboard.vercel.app/",
      github: "https://github.com/salvadorpelaez/pm-agent",
      badge: "AI / Automation",
      badgeColor: "bg-blue-100 text-blue-800",
    },
    {
      title: "Quiz App",
      description: "Interactive quiz application built with Next.js and TypeScript. Demonstrates modern web development with server-side rendering, clean UI, and Vercel deployment.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      url: "https://quiz-project-delta-lime.vercel.app/",
      github: "https://github.com/salvadorpelaez/quiz-project",
      badge: "Web App",
      badgeColor: "bg-green-100 text-green-800",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Header */}
      <header className="border-b border-gray-800 px-6 py-8 max-w-4xl mx-auto">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Salvador Pelaez</h1>
            <p className="text-gray-400 mt-2 text-lg">Product Manager · AI Builder</p>
            <p className="text-gray-500 mt-3 max-w-xl text-sm leading-relaxed">
              PM with enterprise experience building AI-powered workflows.
              Focused on multi-agent systems, compliance automation, and
              developer tools that save teams hours every week.
            </p>
          </div>
        </div>

        <div className="flex gap-4 mt-5">
          <a
            href="https://github.com/salvadorpelaez"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1"
          >
            GitHub →
          </a>
          <a
            href="https://www.linkedin.com/in/salvadorpelaez"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1"
          >
            LinkedIn →
          </a>
        </div>
      </header>

      {/* Projects */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-8">
          Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col gap-4 hover:border-gray-600 transition-colors"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <span className={`text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap ${project.badgeColor}`}>
                  {project.badge}
                </span>
              </div>

              <p className="text-sm text-gray-400 leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 pt-1">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm bg-white text-gray-900 font-medium px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm border border-gray-700 text-gray-400 font-medium px-4 py-2 rounded-lg hover:border-gray-500 hover:text-gray-200 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="max-w-4xl mx-auto px-6 py-8 border-t border-gray-800 text-center text-xs text-gray-600">
        Built with Claude Code — AI-assisted development - Claude Sonnet 4.6
      </footer>
    </div>
  );
}
