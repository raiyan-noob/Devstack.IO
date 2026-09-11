import React from 'react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import logo from "../assets/logo-text.png";

const LINK_GROUPS = [
  { title: 'Product', links: ['Home', 'Technologies', 'Projects'] },
  { title: 'Company', links: ['About', 'Contact', 'Careers'] },
  { title: 'Legal', links: ['Privacy Policy', 'Terms of Service'] },
]

const Footer = () => {
    return (
        <footer className="border-t border-slate-100 bg-white">
              <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="sm:col-span-2 lg:col-span-1">
                    <img src={logo} alt='' />
                    <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
                      Curated tools, technologies, and resources for developers building modern
                      software.
                    </p>
                    <div className="mt-5 flex items-center gap-4 text-slate-400">
                      <a href="#github" aria-label="GitHub" className="hover:text-slate-700">
                        <FaGithub size={18} />
                      </a>
                      <a href="#twitter" aria-label="Twitter" className="hover:text-slate-700">
                        <FaXTwitter size={18} />
                      </a>
                      <a href="#linkedin" aria-label="LinkedIn" className="hover:text-slate-700">
                        <FaLinkedin size={18} />
                      </a>
                    </div>
                  </div>
        
                  {LINK_GROUPS.map((group) => (
                    <div key={group.title}>
                      <h4 className="text-sm font-semibold text-slate-900">{group.title}</h4>
                      <ul className="mt-4 flex flex-col gap-3 text-sm text-slate-500">
                        {group.links.map((link) => (
                          <li key={link}>
                            <a href={`#home`} className="hover:text-slate-800">
                              {link}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
        
                <div className="mt-12 flex flex-col items-center gap-3 border-t border-slate-100 pt-6 text-sm text-slate-400 sm:flex-row sm:justify-between">
                  <p>© 2026 Dev Stack. All rights reserved.</p>
                  <div className="flex items-center gap-5">
                    <a href="#privacy" className="hover:text-slate-600">Privacy</a>
                    <a href="#terms" className="hover:text-slate-600">Terms</a>
                  </div>
                </div>
              </div>
            </footer>
    );
};

export default Footer;