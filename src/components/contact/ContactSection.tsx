import React, { useState } from 'react';
import { Mail, Send, Copy, Check, Terminal, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { playCyberSound } from '../ui/AudioToggle';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  onShowToast: (text: string, type?: 'success' | 'info' | 'error') => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.socialLinks.email);
    setEmailCopied(true);
    playCyberSound('success');
    onShowToast(`Copied ${PERSONAL_INFO.socialLinks.email} to clipboard!`, 'success');
    setTimeout(() => setEmailCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      playCyberSound('hover');
      onShowToast('Please fill out all required fields.', 'error');
      return;
    }

    setIsSubmitting(true);
    playCyberSound('click');

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      playCyberSound('success');
      onShowToast('Message transmitted successfully! Thank you for reaching out.', 'success');
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#ff2a44', '#00f0ff', '#ffffff'],
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#060709] border-t border-white/10 overflow-hidden">
      
      {/* Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[var(--accent-color)]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs font-mono text-zinc-300">
            <span className="w-2 h-2 rounded-full dynamic-accent-bg animate-ping" />
            <span className="w-2 h-2 rounded-full dynamic-accent-bg -ml-4" />
            <span>09 // INITIATE TRANSMISSION</span>
          </div>

          <h2 className="text-3xl sm:text-6xl font-extrabold font-display text-white tracking-tight leading-tight">
            HAVE A PROBLEM<br />
            <span className="dynamic-accent text-glow">WORTH BUILDING?</span>
          </h2>

          <p className="text-base text-zinc-300 font-sans leading-relaxed">
            I am actively seeking SDE internship and full-time opportunities, hackathon collaborations, and technically challenging engineering projects.
          </p>
        </div>

        {/* 2-Column Grid: Direct Action Channels on Left, Interactive Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Links & 1-Click Copy */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* 1-Click Email Copy Card */}
            <div className="p-6 rounded-2xl bg-[#0b0e17] border border-white/15 space-y-4 hud-corner">
              <div className="text-xs font-mono text-zinc-400 flex items-center justify-between">
                <span>PRIMARY COMMS CHANNEL</span>
                <span className="text-emerald-400 font-bold">ACTIVE INBOX</span>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10 font-mono text-xs text-white">
                <div className="flex items-center gap-2.5 truncate">
                  <Mail className="w-4 h-4 dynamic-accent shrink-0" />
                  <span className="truncate">{PERSONAL_INFO.socialLinks.email}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg dynamic-accent-bg text-white text-xs font-mono font-bold hover:brightness-110 shrink-0 ml-2 transition-all"
                  title="Copy email to clipboard"
                >
                  {emailCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-zinc-400 font-sans">
                Expect responses within 24 hours for engineering roles and hackathon invites.
              </p>
            </div>

            {/* Social Grid Links */}
            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              <a
                href={PERSONAL_INFO.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-[#0b0e17] border border-white/10 hover:border-white/30 text-zinc-300 hover:text-white transition-all flex items-center gap-3 hud-corner group"
              >
                <div className="p-2 rounded-lg bg-white/5 text-zinc-400 group-hover:text-white group-hover:bg-white/10 transition-colors">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-white font-bold">GitHub</div>
                  <div className="text-[10px] text-zinc-500">@vasanthabalan</div>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-[#0b0e17] border border-white/10 hover:border-sky-400/40 text-zinc-300 hover:text-white transition-all flex items-center gap-3 hud-corner group"
              >
                <div className="p-2 rounded-lg bg-sky-950/50 text-sky-400 group-hover:bg-sky-900/50 transition-colors">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-white font-bold">LinkedIn</div>
                  <div className="text-[10px] text-zinc-500">Connect</div>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.socialLinks.leetcode}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-[#0b0e17] border border-white/10 hover:border-amber-400/40 text-zinc-300 hover:text-white transition-all flex items-center gap-3 hud-corner group col-span-2"
              >
                <div className="p-2 rounded-lg bg-amber-950/50 text-amber-400 group-hover:bg-amber-900/50 transition-colors">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-white font-bold">LeetCode (400+ Problems)</div>
                  <div className="text-[10px] text-zinc-500">Verified Algorithmic Solutions</div>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0b0e17] border border-white/15 shadow-2xl hud-corner">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-300 font-bold">
                  <MessageSquare className="w-4 h-4 dynamic-accent" />
                  <span>TRANSMIT DIRECT MESSAGE</span>
                </div>
                <span className="text-[10px] font-mono text-zinc-500">ENCRYPTED // TLS 1.3</span>
              </div>

              {isSent ? (
                <div className="py-12 text-center space-y-3 font-mono">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Transmission Acknowledged</h3>
                  <p className="text-xs text-zinc-400 max-w-sm mx-auto">
                    Your message has been logged. I will review your requirements and respond promptly.
                  </p>
                  <button
                    onClick={() => setIsSent(false)}
                    className="mt-4 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-xs text-zinc-300 font-mono"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-zinc-400">YOUR NAME *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full p-3 rounded-lg bg-[#07090e] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[var(--accent-color)]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-zinc-400">YOUR EMAIL *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full p-3 rounded-lg bg-[#07090e] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[var(--accent-color)]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-zinc-400">SUBJECT / PURPOSE</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. SDE Opportunity / Technical Collaboration / Hackathon Team"
                      className="w-full p-3 rounded-lg bg-[#07090e] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[var(--accent-color)]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-zinc-400">MESSAGE *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Details regarding your project, system architecture requirements, or role specifications..."
                      className="w-full p-3 rounded-lg bg-[#07090e] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[var(--accent-color)] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-lg dynamic-accent-bg text-white font-mono text-xs font-bold hover:brightness-110 shadow-lg shadow-[var(--accent-glow)] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>TRANSMITTING PACKETS...</span>
                    ) : (
                      <>
                        <span>TRANSMIT MESSAGE</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
