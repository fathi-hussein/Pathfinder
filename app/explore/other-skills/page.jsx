'use client';


import React, { useState } from 'react';
import {
  Server,
  Cloud,
  Users,
  Cpu,
  CheckCircle2,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Layers,
  Terminal,
  ShieldCheck,
  MessageSquare,
  Workflow
} from 'lucide-react';

// ==========================================
// OTHER TECH SKILLS DATASET
// ==========================================
const OTHER_TECH_GROUPS = [
  {
    id: 'devops',
    title: 'DevOps',
    icon: Server,
    color: 'text-amber-600 dark:text-amber-400',
    bg: 'bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900/50',
    description: 'Combines software development and IT operations to automate software delivery, deployment, and infrastructure management.',
    careerPaths: [
      { title: 'DevOps Engineer', focus: 'Automating CI/CD pipelines, container orchestration, and cloud infrastructure.' },
      { title: 'Site Reliability Engineer (SRE)', focus: 'Ensuring system uptime, automated incident response, and performance monitoring.' },
      { title: 'Build and Release Engineer', focus: 'Managing software compilation, version control releases, and artifact repositories.' },
      { title: 'Platform Engineer', focus: 'Building internal developer platforms and standardizing deployment tooling.' }
    ],
    technologies: ['Linux', 'Git', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'Terraform', 'AWS', 'Azure'],
    learningResources: [
      { title: 'DevOps Roadmap & Guide', type: 'Roadmap', provider: 'DevOps Roadmap', url: 'https://roadmap.sh/devops' },
      { title: 'Docker & Kubernetes: The Practical Guide', type: 'Course', provider: 'Udemy / Online', url: 'https://www.udemy.com/' },
      { title: 'AWS Certified DevOps Engineer', type: 'Certification', provider: 'Amazon Web Services', url: 'https://aws.amazon.com/certification/' }
    ],
    opportunities: [
      { title: 'Cloud & DevOps Virtual Internship', provider: 'AWS / Forage', type: 'Internship', location: 'Remote', url: 'https://www.theforage.com/' }
    ]
  },
  {
    id: 'cloud-computing',
    title: 'Cloud Computing',
    icon: Cloud,
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-900/50',
    description: 'Focuses on building, managing, and securing applications and infrastructure using cloud platforms.',
    careerPaths: [
      { title: 'Cloud Engineer', focus: 'Provisioning cloud servers, VPC networking, and database clusters.' },
      { title: 'Cloud Architect', focus: 'Designing resilient, multi-region enterprise cloud system architectures.' },
      { title: 'Cloud Administrator', focus: 'Managing cloud resource permissions, cost optimization, and IAM policies.' },
      { title: 'Cloud Security Engineer', focus: 'Protecting cloud infrastructure from threats, compliance auditing, and encryption.' },
      { title: 'Cloud Support Engineer', focus: 'Troubleshooting complex cloud infrastructure and networking bottlenecks.' }
    ],
    technologies: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Linux', 'Networking', 'Terraform', 'Docker'],
    learningResources: [
      { title: 'AWS Certified Cloud Practitioner', type: 'Course / Cert', provider: 'AWS Skill Builder', url: 'https://aws.amazon.com/training/' },
      { title: 'Microsoft Azure Fundamentals (AZ-900)', type: 'Course', provider: 'Microsoft Learn', url: 'https://learn.microsoft.com/' }
    ],
    opportunities: [
      { title: 'Cloud Computing Scholarship Program', provider: 'ALX Africa / AWS', type: 'Scholarship', location: 'Africa / Remote', url: 'https://www.alxafrica.com/' }
    ]
  },
  {
    id: 'soft-skills',
    title: 'Soft Skills',
    icon: Users,
    color: 'text-teal-600 dark:text-teal-400',
    bg: 'bg-teal-50 dark:bg-teal-950/40 border-teal-200 dark:border-teal-900/50',
    description: 'Professional and interpersonal abilities that help people communicate, collaborate, solve problems, and succeed in the workplace.',
    careerPaths: [
      { title: 'Effective Communication', focus: 'Expressing technical concepts clearly in writing and verbal discussions.' },
      { title: 'Problem-Solving & Critical Thinking', focus: 'Breaking down complex roadblocks into manageable, logical steps.' },
      { title: 'Teamwork & Collaboration', focus: 'Working seamlessly across cross-functional product, design, and engineering teams.' },
      { title: 'Time Management', focus: 'Prioritizing backlog tasks, estimating delivery timelines, and meeting sprint goals.' },
      { title: 'Adaptability & Leadership', focus: 'Navigating changing technical stacks and guiding junior peers.' },
      { title: 'Technical Writing', focus: 'Drafting clear documentation, README files, and architectural notes.' },
      { title: 'Remote-Work Communication', focus: 'Asynchronous updates, proactive updates, and digital transparency.' }
    ],
    technologies: ['Slack', 'Notion', 'Jira', 'Linear', 'GitHub Discussions', 'Zoom / Google Meet'],
    whyItMatters: 'In technology careers—especially remote roles—technical capability alone is never enough. Remote teams rely entirely on written asynchronous communication, radical transparency, emotional intelligence, and dependable collaboration to ship software across time zones.',
    learningResources: [
      { title: 'Remote Work Professional Guide', type: 'Guide', provider: 'GitLab Remote Playbook', url: 'https://about.gitlab.com/company/culture/all-remote/guide/' }
    ],
    opportunities: []
  },
  {
    id: 'other-technical-skills',
    title: 'Other Technical Skills',
    icon: Cpu,
    color: 'text-indigo-600 dark:text-indigo-400',
    bg: 'bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-900/50',
    description: 'Explore additional specialised technology fields that do not fit neatly into the main categories.',
    careerPaths: [
      { title: 'Database Administration', focus: 'Optimizing SQL queries, indexing, backup strategies, and data integrity.' },
      { title: 'Networking', focus: 'Configuring DNS, firewalls, load balancers, and TCP/IP routing protocols.' },
      { title: 'IT Support & Systems Admin', focus: 'Hardware/software troubleshooting, OS maintenance, and endpoint security.' },
      { title: 'Quality Assurance (QA) & Testing', focus: 'Writing automated test suites (Cypress, Playwright) and manual bug tracking.' },
      { title: 'Game Development', focus: 'Building interactive 2D/3D games using Unity, Unreal Engine, or C#.' },
      { title: 'Blockchain Development', focus: 'Writing smart contracts in Solidity and building decentralized applications (dApps).' },
      { title: 'Embedded Systems & IoT', focus: 'Programming microcontrollers, C/C++, and hardware sensor integrations.' },
      { title: 'Technical Writing', focus: 'Creating developer guides, API references, and SDK documentation.' }
    ],
    technologies: ['PostgreSQL', 'Redis', 'Cypress', 'Unity', 'Solidity', 'C++', 'Python', 'Wireshark'],
    learningResources: [
      { title: 'Software Testing & QA Bootcamp', type: 'Course', provider: 'Ministry of Testing', url: 'https://www.ministryoftesting.com/' },
      { title: 'Solidity & Smart Contracts Guide', type: 'Tutorial', provider: 'CryptoZombies', url: 'https://cryptozombies.io/' }
    ],
    opportunities: []
  }
];




export default function OtherTechSkillsSection() {
  const [activeGroupId, setActiveGroupId] = useState('devops');

  const selectedGroup = OTHER_TECH_GROUPS.find((g) => g.id === activeGroupId) || OTHER_TECH_GROUPS[0];
  const IconComponent = selectedGroup.icon;

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
        
        {/* Section Header */}
        <div className="space-y-2 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold tracking-wide uppercase transition-colors">
            <Workflow className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" /> Infrastructure, Operations & Foundations
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white transition-colors">
            Other Tech Skills
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed transition-colors">
            Additional technology career paths, cloud disciplines, soft skills, and specialized fields that round out modern software engineering.
          </p>
        </div>

        {/* 4 Clickable Skill-Group Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {OTHER_TECH_GROUPS.map((group) => {
            const GIcon = group.icon;
            const isSelected = group.id === activeGroupId;

            return (
              <button
                key={group.id}
                onClick={() => setActiveGroupId(group.id)}
                className={`text-left p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between group cursor-pointer ${
                  isSelected
                    ? 'bg-white dark:bg-slate-900 border-blue-600 dark:border-blue-500 shadow-md ring-2 ring-blue-600/20 dark:ring-blue-500/20'
                    : 'bg-white dark:bg-slate-900/80 border-slate-200/90 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-sm'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/50 group-hover:text-blue-600 dark:group-hover:text-blue-400'
                    }`}>
                      <GIcon className="w-5 h-5" />
                    </div>
                    {isSelected && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-900/50">
                        Active
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {group.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mt-1.5 leading-relaxed line-clamp-2 transition-colors">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1 transition-colors">
                  {group.technologies.slice(0, 3).map((t) => (
                    <span key={t} className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors">
                      {t}
                    </span>
                  ))}
                  {group.technologies.length > 3 && (
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium self-center">
                      +{group.technologies.length - 3}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Expanded Detail Panel */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-sm p-6 sm:p-8 space-y-8 transition-colors duration-200">
          
          {/* Panel Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-100 dark:border-blue-900/50 transition-colors">
                <IconComponent className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Skill Group Detail</span>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white transition-colors">
                  {selectedGroup.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed max-w-2xl transition-colors">
                  {selectedGroup.description}
                </p>
              </div>
            </div>
          </div>

          {/* Soft Skills Special Note (if applicable) */}
          {selectedGroup.whyItMatters && (
            <div className="bg-teal-50/60 dark:bg-teal-950/30 border border-teal-100 dark:border-teal-900/40 p-5 rounded-2xl space-y-2 transition-colors">
              <h4 className="text-xs font-bold text-teal-900 dark:text-teal-300 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-teal-600 dark:text-teal-400" /> Why These Skills Matter in Tech Careers & Remote Work:
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed transition-colors">
                {selectedGroup.whyItMatters}
              </p>
            </div>
          )}

          {/* Career Paths Breakdown */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 transition-colors">
              <Terminal className="w-4 h-4 text-blue-600 dark:text-blue-400" /> Associated Career Paths & Specialisations
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectedGroup.careerPaths.map((cp, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 space-y-1.5 transition-colors">
                  <span className="font-bold text-slate-900 dark:text-white text-sm block transition-colors">{cp.title}</span>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed transition-colors">{cp.focus}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Technologies & Tools */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 transition-colors">
              <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" /> Key Technologies & Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {selectedGroup.technologies.map((tech) => (
                <span key={tech} className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Learning Resources & Opportunities */}
          {(selectedGroup.learningResources?.length > 0 || selectedGroup.opportunities?.length > 0) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-slate-100 dark:border-slate-800 transition-colors">
              
              {/* Resources */}
              {selectedGroup.learningResources?.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white transition-colors">Recommended Learning Resources</h4>
                  <div className="space-y-2.5">
                    {selectedGroup.learningResources.map((res, i) => (
                      <div key={i} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs transition-colors">
                        <div className="space-y-0.5">
                          <span className="font-bold text-slate-900 dark:text-white block transition-colors">{res.title}</span>
                          <span className="text-slate-500 dark:text-slate-400 transition-colors">{res.provider} • {res.type}</span>
                        </div>
                        <a
                          href={res.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 shrink-0 ml-3"
                        >
                          Link <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Opportunities */}
              {selectedGroup.opportunities?.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white transition-colors">Available Opportunities & Internships</h4>
                  <div className="space-y-2.5">
                    {selectedGroup.opportunities.map((opp, i) => (
                      <div key={i} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs transition-colors">
                        <div className="space-y-0.5">
                          <span className="font-bold text-slate-900 dark:text-white block transition-colors">{opp.title}</span>
                          <span className="text-slate-500 dark:text-slate-400 transition-colors">{opp.provider} • {opp.location}</span>
                        </div>
                        <a
                          href={opp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 shrink-0 ml-3"
                        >
                          Apply <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}

        </div>

      </section>
    </div>
  );
}