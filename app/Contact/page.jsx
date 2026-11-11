
'use client';

import React, { useState } from 'react';
import { 
  Mail, 
  ChevronDown, 
  ChevronUp, 
  Send, 
  Loader2, 
  CheckCircle2, 
  AlertCircle,
  Sparkles,
  HelpCircle
} from 'lucide-react';

/**
 * Pathfinder Simplified Contact Page
 * Fully responsive, light/dark mode compatible, and integrated with Formspree.
 */

const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT";

const SOCIAL_LINKS = {
  email: "mailto:fathi.hussein.dev@gmail.com",
  linkedin: "", 
  github: "https://github.com/fathi-hussein"
};

const FAQ_ITEMS = [
  {
    question: "What is Pathfinder?",
    answer: "Pathfinder is a personal learning and career discovery platform created to help people explore technology careers, discover learning opportunities, and make informed decisions about their future."
  },
  {
    question: "Are the learning opportunities free?",
    answer: "Pathfinder highlights a mix of free and paid learning roadmaps, courses, and resources. Each opportunity page clearly notes its pricing model."
  },
  {
    question: "Can I suggest a resource or opportunity?",
    answer: "Yes, absolutely! Just use the contact form and select 'Suggestion or feedback' to share any learning resources you think should be included."
  },
  {
    question: "How can I report incorrect information?",
    answer: "If you spot an outdated link, broken resource, or incorrect detail, please drop a message under 'Report an issue' so it can be fixed promptly."
  }
];

const ENQUIRY_TYPES = [
  "General question",
  "Suggestion or feedback",
  "Report an issue",
  "Other"
];

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-900 dark:bg-slate-950 py-16 px-4 sm:px-6 lg:px-8 text-center text-white border-b border-slate-800 dark:border-slate-800/80 transition-colors duration-200">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.1),transparent_50%)]" />
      <div className="relative max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-medium border border-sky-500/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
          Have a question? Let's hear from you.
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-lg mx-auto leading-relaxed">
          Whether you have a question, an idea, or something you'd like to share about Pathfinder, feel free to reach out.
        </p>
      </div>
    </section>
  );
}

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 divide-y divide-slate-100 dark:divide-slate-800 shadow-sm transition-colors duration-200">
      <div className="p-5 pb-3">
        <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-sky-600 dark:text-sky-400" /> Frequently Asked Questions
        </h3>
      </div>
      <div className="divide-y divide-slate-100 dark:divide-slate-800">
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="transition-colors">
              <button
                type="button"
                onClick={() => toggleFAQ(idx)}
                className="w-full py-3.5 px-5 text-left flex items-center justify-between gap-4 font-medium text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white focus:outline-none focus-visible:bg-slate-50 dark:focus-visible:bg-slate-800/50 cursor-pointer text-sm"
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>
                {isOpen ? (
                  <ChevronUp className="w-4 h-4 text-slate-500 dark:text-slate-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-500 dark:text-slate-400 flex-shrink-0" />
                )}
              </button>
              {isOpen && (
                <div className="px-5 pb-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ConnectWithUsSection() {
  const activeLinks = [
    SOCIAL_LINKS.email && { label: "Email", value: SOCIAL_LINKS.email.replace("mailto:", ""), href: SOCIAL_LINKS.email, icon: Mail },
    SOCIAL_LINKS.linkedin && { label: "LinkedIn", value: "View Profile", href: SOCIAL_LINKS.linkedin, icon: LinkedinIcon },
    SOCIAL_LINKS.github && { label: "GitHub", value: "fathi-hussein", href: SOCIAL_LINKS.github, icon: GithubIcon }
  ].filter(Boolean);

  if (activeLinks.length === 0) return null;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm transition-colors duration-200">
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-1">Other Ways to Connect</h3>
      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-4">You can also reach out directly through these channels:</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {activeLinks.map((link, idx) => {
          const Icon = link.icon;
          return (
            <a 
              key={idx}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-xs sm:text-sm font-medium"
            >
              <div className="p-2 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                <Icon className="w-4 h-4" />
              </div>
              <div className="truncate">
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-normal uppercase tracking-wider">{link.label}</div>
                <span className="truncate">{link.value}</span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    enquiryType: 'General question',
    subject: '',
    message: ''
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isNameValid = formData.name.trim().length > 0;
  const isEmailValid = emailRegex.test(formData.email);
  const isSubjectValid = formData.subject.trim().length > 0;
  const isMessageValid = formData.message.trim().length > 0;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, subject: true, message: true });

    if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
      return;
    }

    setSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          enquiryType: formData.enquiryType,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          enquiryType: 'General question',
          subject: '',
          message: ''
        });
        setTouched({ name: false, email: false, subject: false, message: false });
      } else {
        const data = await response.json();
        if (data && data.errors) {
          setErrorMessage(data.errors.map(err => err.message).join(', '));
        } else {
          setErrorMessage('Failed to send message. Please check your network connection or try again later.');
        }
      }
    } catch (err) {
      setErrorMessage('An unexpected error occurred. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 font-sans antialiased selection:bg-sky-500 selection:text-white transition-colors duration-200">
      <HeroSection />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="space-y-8">
          
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 sm:p-8 transition-colors duration-200">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-slate-950 dark:text-white tracking-tight">Send a Message</h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                Fill in the details below and your message will go straight to my inbox.
              </p>
            </div>

            {success ? (
              <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl p-6 text-center space-y-3 my-4 transition-colors">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-base font-semibold text-emerald-900 dark:text-emerald-200">Message Sent Successfully!</h3>
                <p className="text-sm text-emerald-700 dark:text-emerald-300 leading-relaxed">
                  Thank you for reaching out. Your message has been received!
                </p>
                <button
                  type="button"
                  onClick={() => setSuccess(false)}
                  className="mt-2 inline-flex items-center justify-center px-4 py-2 border border-emerald-300 dark:border-emerald-700 text-sm font-medium rounded-lg text-emerald-800 dark:text-emerald-200 bg-white dark:bg-slate-900 hover:bg-emerald-50 dark:hover:bg-emerald-900/40 transition-colors shadow-sm cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {errorMessage && (
                  <div className="bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 rounded-lg p-4 flex items-start gap-3 text-rose-800 dark:text-rose-200 text-sm transition-colors">
                    <AlertCircle className="w-5 h-5 text-rose-500 dark:text-rose-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block mb-0.5">Submission Error</span>
                      <span>{errorMessage}</span>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onBlur={() => handleBlur('name')}
                      placeholder="Your name"
                      disabled={submitting}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-800 placeholder-slate-400 dark:placeholder-slate-500 transition-colors focus:outline-none focus:ring-2 ${
                        touched.name && !isNameValid
                          ? 'border-rose-300 dark:border-rose-700 focus:border-rose-500 focus:ring-rose-500/20'
                          : 'border-slate-300 dark:border-slate-700 focus:border-sky-500 focus:ring-sky-500/20'
                      }`}
                    />
                    {touched.name && !isNameValid && (
                      <p className="text-xs text-rose-600 dark:text-rose-400 mt-1">Name is required.</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={() => handleBlur('email')}
                      placeholder="you@example.com"
                      disabled={submitting}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-800 placeholder-slate-400 dark:placeholder-slate-500 transition-colors focus:outline-none focus:ring-2 ${
                        touched.email && !isEmailValid
                          ? 'border-rose-300 dark:border-rose-700 focus:border-rose-500 focus:ring-rose-500/20'
                          : 'border-slate-300 dark:border-slate-700 focus:border-sky-500 focus:ring-sky-500/20'
                      }`}
                    />
                    {touched.email && !isEmailValid && (
                      <p className="text-xs text-rose-600 dark:text-rose-400 mt-1">Please enter a valid email address.</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="enquiryType" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    Enquiry Type <span className="text-slate-400 dark:text-slate-500 font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <select
                      id="enquiryType"
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleInputChange}
                      disabled={submitting}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-800 transition-colors focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 appearance-none cursor-pointer"
                    >
                      {ENQUIRY_TYPES.map((type) => (
                        <option key={type} value={type} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
                          {type}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 dark:text-slate-500">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur('subject')}
                    placeholder="What is this about?"
                    disabled={submitting}
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-800 placeholder-slate-400 dark:placeholder-slate-500 transition-colors focus:outline-none focus:ring-2 ${
                      touched.subject && !isSubjectValid
                        ? 'border-rose-300 dark:border-rose-700 focus:border-rose-500 focus:ring-rose-500/20'
                        : 'border-slate-300 dark:border-slate-700 focus:border-sky-500 focus:ring-sky-500/20'
                    }`}
                  />
                  {touched.subject && !isSubjectValid && (
                    <p className="text-xs text-rose-600 dark:text-rose-400 mt-1">Subject is required.</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur('message')}
                    placeholder="Write your message here..."
                    disabled={submitting}
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-800 placeholder-slate-400 dark:placeholder-slate-500 transition-colors focus:outline-none focus:ring-2 resize-y ${
                      touched.message && !isMessageValid
                        ? 'border-rose-300 dark:border-rose-700 focus:border-rose-500 focus:ring-rose-500/20'
                        : 'border-slate-300 dark:border-slate-700 focus:border-sky-500 focus:ring-sky-500/20'
                    }`}
                  />
                  {touched.message && !isMessageValid && (
                    <p className="text-xs text-rose-600 dark:text-rose-400 mt-1">Message is required.</p>
                  )}
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal pt-1">
                  Your details will only be used to respond to your message. They won't be displayed publicly.
                </p>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 border border-transparent rounded-lg text-sm font-semibold text-white bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-white text-slate-900 dark:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20 dark:focus:ring-white/20 transition-all shadow-sm disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white dark:text-slate-900" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <ConnectWithUsSection />
            <FAQAccordion />
          </div>

        </div>
      </main>
    </div>
  );
}