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
      title: "Financial Analytics",
      description: "AI classification model that processes historical S&P 500 data to generate directional signals (Positive/Neutral/Negative) using value and hypergrowth frameworks. Educational demo — not financial advice.",
      tech: ["Claude Sonnet", "Python", "Flask", "SQLite", "Supabase", "yfinance"],
      url: "https://value-analytics-demo-app.vercel.app/portfolio",
      github: "https://github.com/salvadorpelaez/demo-financial-webapp",
      badge: "AI / Finance",
      badgeColor: "bg-emerald-100 text-emerald-800",
    },
    {
      title: "Digital Health Compliance Auditor",
      description: "AI-powered compliance audit platform for digital health software — two modes: product analysis against live FDA/HIPAA/GDPR regulation text via eCFR API, and a SOP comparison engine that scores two existing SOPs at the requirement level and generates a proposed third SOP that closes all identified gaps. Demo — not legal advice.",
      tech: ["Claude Sonnet", "Python", "Flask", "eCFR API", "HIPAA", "GDPR", "SOP Analysis"],
      url: "https://audit-app-fda.vercel.app/",
      github: "https://github.com/salvadorpelaez/Audit-App-FDA",
      badge: "AI / Compliance",
      badgeColor: "bg-purple-100 text-purple-800",
    },
    {
      title: "Valerius — AI Research Platform",
      description: "Built a full-stack, production-grade AI research application end to end to go deep on agentic architecture: multi-agent analysis pipelines (Claude Opus/Sonnet), a custom MCP server (FastMCP/Python) that decouples market-data retrieval into a reusable microservice, a library of purpose-built Claude Code skills for recurring workflows, and an AI compliance-audit layer that checks every model output against a rules framework before surfacing it. Hands-on prompt and context engineering, agent orchestration, and applying spec-and-review discipline to generative AI.",
      tech: ["Claude Opus/Sonnet", "Python", "FastMCP", "Flask", "Supabase", "Claude Code Skills"],
      url: "https://valeriusintel.ai",
      badge: "AI / Agentic Architecture",
      badgeColor: "bg-amber-100 text-amber-800",
    },
    {
      title: "Coffee Quiz App",
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
      <header className="border-b border-gray-800 px-4 sm:px-6 py-8 max-w-4xl mx-auto">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Sal Pelaez</h1>
          <p className="text-gray-400 mt-2 text-base sm:text-lg">Project Manager · AI Builder</p>
          <p className="text-gray-500 mt-3 max-w-xl text-sm leading-relaxed">
            PM with enterprise experience building AI-powered workflows.
            Focused on multi-agent systems, compliance automation, and
            developer tools that save teams hours every week.
          </p>
        </div>

        <div className="flex gap-4 mt-5">
          <a
            href="https://www.linkedin.com/in/sal-pelaez-ba4a665/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1"
          >
            LinkedIn →
          </a>
        </div>
      </header>

      {/* Projects */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-6 sm:mb-8">
          Projects
        </h2>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-900 border border-gray-800 rounded-xl p-4 sm:p-6 flex flex-col gap-4 hover:border-gray-600 transition-colors"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base sm:text-lg font-semibold text-white">{project.title}</h3>
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
                  className="flex-1 text-center text-sm bg-white text-gray-900 font-medium px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Use It Now
                </a>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-sm border border-gray-700 text-gray-400 font-medium px-4 py-3 rounded-lg hover:border-gray-500 hover:text-gray-200 transition-colors"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="max-w-4xl mx-auto px-4 sm:px-6 py-8 border-t border-gray-800 text-center text-xs text-gray-600">
        Built with Claude Code — AI-assisted development - Claude Sonnet 4.6
      </footer>
    </div>
  );
}
