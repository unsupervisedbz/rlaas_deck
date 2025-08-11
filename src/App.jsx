import React from 'react';

// --- Helper Components ---

const Section = ({ id, children, className = '' }) => (
  <section id={id} className={`section ${className}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  </section>
);

const SectionTitle = ({ subtitle, title, description }) => (
  <div className="text-center mb-12">
    <h2 className="text-base font-semibold text-blue-400 tracking-wider uppercase">{subtitle}</h2>
    <p className="mt-2 text-4xl font-extrabold text-white tracking-tight sm:text-5xl">{title}</p>
    {description && <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-400">{description}</p>}
  </div>
);


// --- Main Components ---

const Navbar = () => {
  const navLinks = [
    { href: '#context', label: 'Context' },
    { href: '#problem', label: 'Problem' },
    { href: '#solution', label: 'Solution' },
    { href: '#advantage', label: 'Advantage' },
    { href: '#team', label: 'The Team' },
    { href: '#success-stories', label: 'Success Stories' },
    { href: '#milestones', label: 'Milestones' },
    { href: '#financials', label: 'Financials' },
  ];

  return (
    <nav className="bg-gray-900/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="font-extrabold text-2xl text-white">RewardHack <span className="text-blue-500">AI</span></span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} className="nav-link text-gray-300 px-3 py-2 rounded-md text-sm font-medium">{link.label}</a>
              ))}
              <a href="#ask" className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-bold">Funding Ask</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Header = () => (
  <header className="section flex items-center justify-center text-center hero-gradient">
    <div className="max-w-5xl mx-auto px-4">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
        Unlocking Enterprise AI with <span className="text-blue-500">High-Performance Reinforcement Learning</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
        The future of your industry is autonomous. We provide the high-speed RL engine to build, train, and deploy your custom agents that tailored to your domain-specific needs, with the top-notch enterprise-grade security, data safety, and on-premise support.
      </p>
    </div>
  </header>
);

const ContextSection = () => (
  <Section id="context" className="bg-gray-900">
    <SectionTitle subtitle="The Market Opportunity" title="The AI Mandate is Here. RL is the Engine." />
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="prose prose-invert lg:prose-xl text-gray-300 space-y-6">
        <p>The race to deploy meaningful AI is on. <strong className="text-white">83% of companies</strong> now state that AI is a top priority. While LLMs have captured the public imagination, the true frontier of enterprise value lies in <strong className="text-white">Reinforcement Learning (RL)</strong>.</p>
        <p>RL has evolved beyond simple model alignment (RLHF). Today, it's the key to unlocking new capabilities—like advanced reasoning and agentic behavior—in a world of increasingly scarce, high-quality training data. The recent trend and focus is on the power of intelligent, self-learning agents that can move beyond simple prediction to complex, goal-oriented action.</p>
        <p>This isn't a future trend; it's happening now. Industry leaders in robotics, finance, and manufacturing are already leveraging RL to gain a competitive edge. The demand for powerful, scalable, and secure RL solutions is about to explode.</p>
      </div>
      <div className="flex justify-center">
        <div className="p-8 rounded-xl kpi-card w-full max-w-md">
          <h3 className="text-2xl font-bold text-white mb-4">The Shift to Agentic AI</h3>
          <p className="text-gray-400 mb-6">The market is moving from passive models to active AI agents that interact with complex environments to solve real-world business problems.</p>
          <div className="space-y-4">
            <div className="flex items-center">
              <svg className="h-6 w-6 text-blue-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7.014A8.003 8.003 0 0117.657 18.657z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1014.12 11.88l-4.242 4.242z"></path></svg>
              <span className="text-lg text-white">Advanced Reasoning & Coding</span>
            </div>
            <div className="flex items-center">
              <svg className="h-6 w-6 text-blue-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M12 21v-2.5m0 0l-2-1m2 1l2-1M4 7l2 1M4 7l2-1M4 7v2.5m16 4l-2-1m2 1l-2 1m-2-1V12m-2 6.5V12m0 0l-2-1m2 1l2-1"></path></svg>
              <span className="text-lg text-white">Multi-Turn, Multi-AgentInteraction</span>
            </div>
            <div className="flex items-center">
              <svg className="h-6 w-6 text-blue-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m-9 9h18"></path></svg>
              <span className="text-lg text-white">Deep Domain Specialization</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

const ProblemSection = () => (
  <Section id="problem" className="bg-black/50">
    <SectionTitle
      subtitle="The Problem"
      title="Enterprise AI is Stuck in the Slow Lane."
      description="Traditional businesses want to harness agentic AI but are blocked by a critical tooling gap in efficient, scalable and customizable RL infrastructure."
    />
    <div className="grid md:grid-cols-3 gap-8">
        <div className="pt-6">
            <div className="flow-root bg-gray-800/50 rounded-lg px-6 pb-8 h-full">
                <div className="-mt-6">
                    <div>
                        <span className="inline-flex items-center justify-center p-3 bg-red-500 rounded-md shadow-lg">
                            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                        </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">Open Source Isn't Enterprise-Ready</h3>
                    <p className="mt-5 text-base text-gray-400">Lacks enterprise-grade data protection, privacy, observability, and on-premise support. Inflexible for custom, domain-specific environments.</p>
                </div>
            </div>
        </div>
        <div className="pt-6">
            <div className="flow-root bg-gray-800/50 rounded-lg px-6 pb-8 h-full">
                <div className="-mt-6">
                    <div>
                        <span className="inline-flex items-center justify-center p-3 bg-red-500 rounded-md shadow-lg">
                            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">Paid Solutions are Legacy Tech</h3>
                    <p className="mt-5 text-base text-gray-400">Incumbents are inefficient, with low training speeds and poor support for large models, advanced parallelism, and multi-agent scaling.</p>
                </div>
            </div>
        </div>
        <div className="pt-6">
            <div className="flow-root bg-gray-800/50 rounded-lg px-6 pb-8 h-full">
                <div className="-mt-6">
                    <div>
                        <span className="inline-flex items-center justify-center p-3 bg-red-500 rounded-md shadow-lg">
                           <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                        </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">The Crippling Bottleneck: Training Speed</h3>
                    <p className="mt-5 text-base text-gray-400">Training long-generation models can take <strong className="text-red-400">27-216 days per iteration (40 to 160 min per step) in the RL/RLHF stage</strong> with existing tools. This is simply unacceptable.</p>
                </div>
            </div>
        </div>
    </div>
  </Section>
);

const SolutionSection = () => (
  <Section id="solution" className="bg-gray-900 hero-gradient">
    <SectionTitle
      subtitle="Our Solution"
      title="RewardHack AI: The RLaaS Platform for the Enterprise"
      description="We bring custom, high-performance agentic AI directly to the enterprise, empowering businesses to optimize critical workflows and achieve domain-specific KPIs."
    />
    <div className="mt-12">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="pt-6">
            <div className="flow-root bg-gray-800/50 rounded-lg px-6 pb-8 h-full">
                <div className="-mt-6">
                    <div>
                        <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c.621.202 1.25.405 1.887.622a21.74 21.74 0 017.243 4.095M9.75 3.104a21.74 21.74 0 00-7.243 4.095m14.486 0L14.25 14.5m5.086-6.282a21.72 21.72 0 01-7.243 4.095m7.243-4.095c.621.202 1.25.405 1.887.622m-1.887-.622a21.74 21.74 0 00-1.887-.622m0 0L14.25 14.5M3 14.5h18M3 14.5a2.25 2.25 0 00-2.25 2.25v1.5a2.25 2.25 0 002.25 2.25h18a2.25 2.25 0 002.25-2.25v-1.5a2.25 2.25 0 00-2.25-2.25H3z"></path></svg>
                        </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">Tailored Environment & 100+ Training Gyms</h3>
                    <p className="mt-5 text-base text-gray-400">Build custom environments integrating with your domain-specific tools. You own your proprietary simulations, tailoring every element to your unique needs and locking in strategic differentiation.</p>
                </div>
            </div>
        </div>
        <div className="pt-6">
            <div className="flow-root bg-gray-800/50 rounded-lg px-6 pb-8 h-full">
                <div className="-mt-6">
                    <div>
                        <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                           <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"></path></svg>
                        </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">Custom RL Pipeline</h3>
                    <p className="mt-5 text-base text-gray-400">We support complex multi-step, multi-reward RL pipelines tailored to your domain, enabling agents to learn sophisticated, long-horizon tasks.</p>
                </div>
            </div>
        </div>
        <div className="pt-6">
            <div className="flow-root bg-gray-800/50 rounded-lg px-6 pb-8 h-full">
                <div className="-mt-6">
                    <div>
                        <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                           <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"></path></svg>
                        </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">Specialized Evaluation Service</h3>
                    <p className="mt-5 text-base text-gray-400">Measure your agents against proprietary and open-source benchmarks using our specialized evaluation environments to validate performance and ROI.</p>
                </div>
            </div>
        </div>
        <div className="pt-6">
            <div className="flow-root bg-gray-800/50 rounded-lg px-6 pb-8 h-full">
                <div className="-mt-6">
                    <div>
                        <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">Radical Efficiency</h3>
                    <p className="mt-5 text-base text-gray-400">Our async framework is <strong className="text-green-400">4x faster</strong> for Llama 70B and <strong className="text-green-400">6x faster</strong> for 405B models than open-source baselines, slashing training times from months to days.</p>
                </div>
            </div>
        </div>
        <div className="pt-6">
            <div className="flow-root bg-gray-800/50 rounded-lg px-6 pb-8 h-full">
                <div className="-mt-6">
                    <div>
                        <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">Advanced Context Engineering</h3>
                    <p className="mt-5 text-base text-gray-400">Our SDK learns from your existing data, dynamically assembling relevant context to ensure your agent makes the most informed decision at every step.</p>
                </div>
            </div>
        </div>
        <div className="pt-6">
            <div className="flow-root bg-gray-800/50 rounded-lg px-6 pb-8 h-full">
                <div className="-mt-6">
                    <div>
                        <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                        </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">Enterprise-Grade Security</h3>
                    <p className="mt-5 text-base text-gray-400">Ironclad security, data encryption, privacy compliance, and granular governance are built-in, not bolted on.</p>
                </div>
            </div>
        </div>
      </div>
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-white text-center mb-8">Comparison: Traditional RL vs. RLaaS</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-red-900/20 border border-red-700 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-4">Traditional RL is Hard</h3>
                <ul className="space-y-3 text-lg text-gray-300">
                    <li className="flex items-center">❌ Complex Infra</li>
                    <li className="flex items-center">❌ Reward Tuning</li>
                    <li className="flex items-center">❌ Simulation Setups</li>
                    <li className="flex items-center">❌ Costly Iteration Cycles</li>
                </ul>
            </div>
            <div className="bg-green-900/20 border border-green-700 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-4">RLaaS Flips the Game</h3>
                 <ul className="space-y-3 text-lg text-gray-300">
                    <li className="flex items-center">✅ Pay-as-you-go</li>
                    <li className="flex items-center">✅ Ready-to-train Agents</li>
                    <li className="flex items-center">✅ Deployment-ready APIs</li>
                    <li className="flex items-center">✅ Faster Experimentation</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  </Section>
);

const AdvantageSection = () => (
  <Section id="advantage" className="bg-black/50">
    <SectionTitle subtitle="Competitive Edge" title="Why We Win" />
    <div className="overflow-x-auto">
      <table className="w-full text-base text-left text-gray-300">
        <thead className="text-sm text-white uppercase bg-gray-800">
          <tr>
            <th className="p-4 text-left">Feature</th>
            <th className="p-4 text-center">VeRL (Open Source)</th>
            <th className="p-4 text-center">TRL (Open Source)</th>
            <th className="p-4 text-center">OpenRLHF (Open Source)</th>
            <th className="p-4 text-center">Ray/Anyscale (Paid)</th>
            <th className="p-4 text-center bg-blue-900/50">RewardHack AI</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-700">
            <td className="p-4 text-left font-semibold">Training Speed (Larger Models)</td>
            <td className="p-4 text-center text-yellow-400">Medium</td>
            <td className="p-4 text-center text-red-400">Low</td>
            <td className="p-4 text-center text-red-400">Low</td>
            <td className="p-4 text-center text-red-400">Low</td>
            <td className="p-4 text-center text-green-400 font-bold">High</td>
          </tr>
          <tr className="border-b border-gray-700">
            <td className="p-4 text-left font-semibold">Training Speed (Longer Generation)</td>
            <td className="p-4 text-center text-red-400">Low</td>
            <td className="p-4 text-center text-red-400">Low</td>
            <td className="p-4 text-center text-red-400">Low</td>
            <td className="p-4 text-center text-red-400">Low</td>
            <td className="p-4 text-center text-green-400 font-bold">High</td>
          </tr>
          <tr className="border-b border-gray-700">
            <td className="p-4 text-left font-semibold">Domain-specific Custom Environment</td>
            <td className="p-4 text-center text-yellow-400">Hard</td>
            <td className="p-4 text-center text-red-400">❌ No</td>
            <td className="p-4 text-center text-red-400">❌ No</td>
            <td className="p-4 text-center text-red-400">❌ No</td>
            <td className="p-4 text-center text-green-400 font-bold">✅ Yes</td>
          </tr>
          <tr className="border-b border-gray-700">
            <td className="p-4 text-left font-semibold">Async Training Support</td>
            <td className="p-4 text-center text-yellow-400">WIP</td>
            <td className="p-4 text-center text-red-400">❌ No</td>
            <td className="p-4 text-center text-green-400">✅ Yes</td>
            <td className="p-4 text-center text-red-400">❌ No</td>
            <td className="p-4 text-center text-green-400 font-bold">✅ Yes</td>
          </tr>
          <tr className="border-b border-gray-700">
            <td className="p-4 text-left font-semibold">Multi-agent Policy Scaling</td>
            <td className="p-4 text-center text-green-400">✅ Yes</td>
            <td className="p-4 text-center text-red-400">❌ No</td>
            <td className="p-4 text-center text-red-400">❌ No</td>
            <td className="p-4 text-center text-red-400">❌ No</td>
            <td className="p-4 text-center text-green-400 font-bold">✅ Yes</td>
          </tr>
          <tr className="border-b border-gray-700">
            <td className="p-4 text-left font-semibold">Data Safety & Privacy Compliance</td>
            <td className="p-4 text-center text-red-400">❌ No</td>
            <td className="p-4 text-center text-red-400">❌ No</td>
            <td className="p-4 text-center text-red-400">❌ No</td>
            <td className="p-4 text-center text-green-400">✅ Yes</td>
            <td className="p-4 text-center text-green-400 font-bold">✅ Yes</td>
          </tr>
          <tr>
            <td className="p-4 text-left font-semibold">Enterprise Security & On-Prem</td>
            <td className="p-4 text-center text-red-400">❌ No</td>
            <td className="p-4 text-center text-red-400">❌ No</td>
            <td className="p-4 text-center text-red-400">❌ No</td>
            <td className="p-4 text-center text-green-400">✅ Yes</td>
            <td className="p-4 text-center text-green-400 font-bold">✅ Yes</td>
          </tr>
        </tbody>
      </table>
    </div>
  </Section>
);

const TeamSection = () => (
  <Section id="team" className="bg-gray-900">
    <SectionTitle
      subtitle="The Team"
      title="World-Class Experts in AI Systems & Research"
      description="Our team is formed by ex-Meta AI researchers and AI infra engineers who were core contributors to previous Llama releases, with a deep focus on post-training / RL algorithms and efficiency."
    />
    <div className="flex justify-center">
      <div className="max-w-4xl bg-gray-800/50 rounded-lg p-10">
        <h3 className="text-3xl font-bold text-white text-center">Pioneers of High-Performance RL</h3>
        <p className="mt-6 text-xl text-gray-300 text-center">
          We are the first and last authors of the groundbreaking <a href="https://arxiv.org/abs/2405.20325" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-500">Async LlamaRL framework</a>, a novel approach that achieved <strong className="text-green-400">20x-40x training speed improvements</strong> for Llama 3 and 4. This deep, firsthand experience in building and optimizing large-scale RL systems from the ground up is our core competitive advantage. We don't just use the tools—we build them.
        </p>
      </div>
    </div>
  </Section>
);

const SuccessStoriesSection = () => (
    <Section id="success-stories" className="bg-black/50">
        <SectionTitle
            subtitle="Success Stories"
            title="RL as a Service: Real-World Impact"
            description="The RL-for-LLM approach is already delivering early, transformative results for early adopters across multiple industries."
        />
        <div className="flex justify-center">
            <div className="max-w-4xl bg-gray-800/50 rounded-lg p-10">
                <h3 className="text-3xl font-bold text-white text-center">Automating Complex Supplier Negotiations</h3>
                <p className="mt-6 text-xl text-gray-300 text-center">
                    The real-world impact of the RL-for-LLM ecosystem is exemplified by a case from <strong className="text-blue-400">Veris AI</strong>: an agent trained with RL to automate the complex, hours-long process of supplier negotiations. By training on realistic simulations of Slack and email conversations—complete with sensitive data—the agent learns optimal tone, questions to ask, and search strategies, dramatically outperforming prompt chaining or one-shot LLM attempts.
                </p>
                <p className="mt-6 text-xl text-gray-400 text-center">
                    This is just one of many early success stories emerging in vertical domains such as robotics, finance, industrial control, manufacturing and logistics, automotive, and gaming.
                </p>
            </div>
        </div>
    </Section>
);

const MilestonesSection = () => (
  <Section id="milestones" className="bg-gray-900">
    <SectionTitle subtitle="Our Roadmap" title="Path to Market Leadership" />
    <div className="relative max-w-2xl mx-auto">
      <div className="absolute top-0 h-full w-0.5 bg-gray-700 left-4"></div>
      <ul className="space-y-12">
        <li className="pl-12 relative">
          <div className="absolute -left-0 top-1">
            <span className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center ring-4 ring-blue-500">
              <span className="h-3 w-3 bg-blue-500 rounded-full"></span>
            </span>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-6">
            <p className="text-sm font-semibold text-blue-400">Phase 1 (~3 Months)</p>
            <h3 className="text-xl font-bold text-white mt-1">Seed Phase</h3>
            <p className="text-gray-400 mt-2">Build the core RewardHack AI platform and benchmark its performance against all major alternatives.</p>
            <p className="text-gray-300 mt-3 font-semibold">Success: Prove competitive advantage in training speed, agent & environment customizability, and <span className="text-green-400">real delta value-add</span> for business KPIs.</p>
          </div>
        </li>
        <li className="pl-12 relative">
          <div className="absolute -left-0 top-1">
            <span className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center ring-4 ring-gray-700">
              <span className="h-3 w-3 bg-gray-600 rounded-full"></span>
            </span>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-6">
            <p className="text-sm font-semibold text-blue-400">Phase 2 (~6-9 Months)</p>
            <h3 className="text-xl font-bold text-white mt-1">Pilot Phase</h3>
            <p className="text-gray-400 mt-2">Acquire 1-2 early adopter customers in key verticals and run Proof of Concept pilot.</p>
            <p className="text-gray-300 mt-3 font-semibold">Success: Demonstrate clear ROI for our partners.</p>
          </div>
        </li>
        <li className="pl-12 relative">
          <div className="absolute -left-0 top-1">
            <span className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center ring-4 ring-gray-700">
              <span className="h-3 w-3 bg-gray-600 rounded-full"></span>
            </span>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-6">
            <p className="text-sm font-semibold text-blue-400">Phase 3 (12+ Months)</p>
            <h3 className="text-xl font-bold text-white mt-1">Scaling Phase</h3>
            <p className="text-gray-400 mt-2">Leverage successful pilots and proven ROI to aggressively scale sales and marketing efforts.</p>
            <p className="text-gray-300 mt-3 font-semibold">Success: Rapidly expand customer base across all targeted verticals.</p>
          </div>
        </li>
      </ul>
    </div>
  </Section>
);

const FinancialsSection = () => (
  <Section id="financials" className="bg-black/50">
    <SectionTitle
      subtitle="Financial Projections"
      title="Projected Annual Revenue Growth (ARR)"
      description="Our projections are grounded in market comparables. Leading inference companies like Together.ai (projected $120M ARR) and Anyscale ($300M ARR) have validated the market size with 50+ enterprise customers each."
    />
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-gray-300">
          <thead className="text-xs text-white uppercase bg-gray-800">
            <tr>
              <th className="px-6 py-3 whitespace-nowrap">Year</th>
              <th className="px-6 py-3">Phase</th>
              <th className="px-6 py-3">Target Customers</th>
              <th className="px-6 py-3">Projected Revenue (ARR)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-700">
              <td className="px-6 py-4 font-medium text-white whitespace-nowrap">Year 1</td>
              <td className="px-6 py-4">Seed to Pilot</td>
              <td className="px-6 py-4">5</td>
              <td className="px-6 py-4">$30M (Average)</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="px-6 py-4 font-medium text-white whitespace-nowrap">Year 2</td>
              <td className="px-6 py-4">Growth</td>
              <td className="px-6 py-4">10</td>
              <td className="px-6 py-4">$60M (Average)</td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-medium text-white whitespace-nowrap">Year 3</td>
              <td className="px-6 py-4">Scaling</td>
              <td className="px-6 py-4">50 - 100</td>
              <td className="px-6 py-4">$210M (Average)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white text-center mb-8">Projected Revenue Growth (Average ARR)</h3>
        <div className="bg-gray-800/50 p-6 rounded-lg h-96 relative">
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400">
            <span>$300M</span>
            <span>$250M</span>
            <span>$200M</span>
            <span>$150M</span>
            <span>$100M</span>
            <span>$50M</span>
            <span>$0M</span>
          </div>
          
          {/* Chart bars */}
          <div className="ml-16 h-full flex items-end justify-around space-x-8">
            <div className="flex flex-col items-center">
              <div className="text-white font-bold mb-2">$30M</div>
              <div className="w-20 bg-yellow-400 rounded-t-md" style={{ height: '38px' }}></div>
              <div className="mt-2 text-sm text-gray-400">Year 1</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-white font-bold mb-2">$60M</div>
              <div className="w-20 bg-yellow-400 rounded-t-md" style={{ height: '77px' }}></div>
              <div className="mt-2 text-sm text-gray-400">Year 2</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-white font-bold mb-2">$210M</div>
              <div className="w-20 bg-yellow-400 rounded-t-md" style={{ height: '269px' }}></div>
              <div className="mt-2 text-sm text-gray-400">Year 3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

const AskSection = () => (
  <Section id="ask" className="bg-blue-900/20">
    <SectionTitle
      subtitle="The Ask"
      title="Join Us in the Pre-seed Round"
      description="We are raising capital to fund our initial 3-month Seed Phase, deliver definitive benchmarks, and position RewardHack AI for successful customer acquisition."
    />
    <div className="flex justify-center mt-12">
        <div className="p-8 bg-gray-800 rounded-xl inline-block">
            <p className="text-lg text-gray-300">Total Pre-seed Round Ask</p>
            <p className="text-6xl font-extrabold text-white my-2">$615,000</p>
        </div>
    </div>
    <div className="mt-12 text-left grid md:grid-cols-2 gap-8">
      <div className="bg-gray-800/50 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-white mb-4">Use of Funds</h3>
        <ul className="space-y-3 text-gray-300">
          <li className="flex justify-between items-center">
            <span>Training & Benchmark Costs</span>
            <span className="font-bold text-white">$400,000</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Core Engineering Team Salaries</span>
            <span className="font-bold text-white">$200,000</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Marketing & Business Development</span>
            <span className="font-bold text-white">$10,000</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Infrastructure & Storage Costs</span>
            <span className="font-bold text-white">$5,000</span>
          </li>
        </ul>
      </div>
      <div className="bg-gray-800/50 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-white mb-4">Contact</h3>
        <p className="text-gray-400 mb-4">Let's build the future of enterprise AI together. Reach out to schedule a follow-up conversation and a technical deep-dive.</p>
        <a href="mailto:invest@rewardhack.ai" className="inline-block w-full text-center bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md text-lg font-bold">
          invest@rewardhack.ai
        </a>
      </div>
    </div>
  </Section>
);

// --- Main App Component ---

function App() {
  return (
    <div className="bg-gray-900 text-gray-200">
      <style>{`
        .section {
            padding-top: 8rem;
            padding-bottom: 8rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        header.section {
            min-height: 90vh;
        }
      `}</style>
      <Navbar />
      <main>
        <Header />
        <ContextSection />
        <ProblemSection />
        <SolutionSection />
        <AdvantageSection />
        <TeamSection />
        <SuccessStoriesSection />
        <MilestonesSection />
        <FinancialsSection />
        <AskSection />
      </main>
    </div>
  );
}

export default App;
