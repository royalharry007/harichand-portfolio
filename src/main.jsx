import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { motion } from 'framer-motion'
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Phone, MapPin, Menu, X,
  Code2, Database, Globe2, Layers3, Server, Cpu, Terminal, ExternalLink,
  Download, GraduationCap, BriefcaseBusiness, Award, RadioTower, Video,
  ChevronRight, Sparkles
} from 'lucide-react'
import './styles.css'

const profile = {
  name: 'Harichand Chauhan',
  role: 'Computer Science Engineering Student',
  location: 'Butwal, Nepal',
  email: 'harichandchauhan78@gmail.com',
  phone: '9825466542',
  github: 'https://github.com/royalharry007',
  linkedin: '', // Add your LinkedIn profile URL here.
  resume: '/Harichand-Chauhan-Resume.pdf',
}

const skills = [
  { title: 'Programming', items: ['Python', 'JavaScript', 'Java', 'C', 'SQL'], icon: Code2 },
  { title: 'Frontend & Backend', items: ['React.js', 'Node.js', 'Express.js', 'HTML', 'CSS', 'Tailwind CSS'], icon: Globe2 },
  { title: 'Data & Streaming', items: ['Apache Kafka', 'PySpark', 'Apache Spark', 'Spark Streaming'], icon: RadioTower },
  { title: 'Databases & Tools', items: ['MongoDB', 'MySQL', 'Docker', 'AWS', 'Kubernetes', 'Git'], icon: Database },
]

const projects = [
 
  {
    number: '01',
    name: 'DomainX – Domain & DNS Management System',
    type: 'DOMAIN INTELLIGENCE · DNS ANALYSIS',
    description: 'A web-based domain analysis tool that retrieves DNS records, checks email-security configurations and generates downloadable diagnostic reports.',
    points: [
      'Retrieves A, AAAA, MX, NS, CNAME and TXT DNS records.',
      'Checks SPF and DMARC information from DNS TXT records.',
      'Displays DNS analysis results and lookup errors in a dashboard.',
      'Generates downloadable PDF diagnostic reports using jsPDF.'
    ],
    stack: [
      'JavaScript',
      'Node.js',
      'Express.js',
      'DNS',
      'SPF',
      'DMARC',
      'jsPDF',
      'Vercel'
    ],
    link: 'https://github.com/royalharry007/DomainX-DNS-Analyzer',
    liveLink: 'https://domain-x-dns-analyzer.vercel.app/',
    icon: Globe2,
    featured: true,
  },


  {
    number: '02',
    name: 'Real-Time GNSS Anomaly Detection',
    type: 'GEOSPATIAL DATA · STREAM PROCESSING',
    description: 'A pipeline for processing GNSS NMEA data streams and detecting signal drops, position drift, and satellite loss, with a dashboard for monitoring results.',
    points: [
      'Engineered a distributed pipeline processing 10,000+ messages/sec with zero data loss.',
      'Built anomaly-detection workflows in PySpark, reporting a 95.89% success rate.',
      'Developed Streamlit dashboards to support monitoring and debugging.'
    ],
    stack: ['Python', 'Kafka', 'PySpark', 'RTKLib', 'Streamlit', 'Kubernetes'],
    link: 'https://github.com/royalharry007/realtime_satellite_anamoly_detection',
    icon: RadioTower,
    featured: true,
  },
  {
    number: '03',
    name: 'IntellMeet',
    type: 'FULL-STACK · REAL-TIME COMMUNICATION',
    description: 'A full-stack video-conferencing platform with meeting creation, participant management, real-time chat, and peer-to-peer audio/video.',
    points: [
      'Implemented WebRTC audio/video with Socket.IO signaling and screen sharing.',
      'Built authentication and protected REST APIs using Express.js and MongoDB.',
      'Added real-time chat and participant-presence notifications.'
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'WebRTC', 'JWT'],
    link: 'https://github.com/royalharry007',
    icon: Video,
    featured: false,
  },
]

const experience = [
  {
    role: 'Web Developer Intern',
    company: 'Zidio Development',
    period: 'Jun 2026 — Aug 2026',
    location: 'Remote · Bengaluru, India',
    details: [
      'Built JWT-based authentication and protected REST API endpoints in Node.js and Express, backed by MongoDB.',
      'Implemented real-time events and WebRTC signaling for meeting participation and peer-to-peer media connections.',
      'Developed responsive UI components using React and Tailwind CSS, collaborating with Git and GitHub.'
    ],
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'WebRTC', 'Socket.IO', 'Git']
  }
]

const education = {
  school: 'Pandit Deendayal Energy University (PDEU)',
  degree: 'B.Tech in Computer Science and Engineering',
  period: 'Jul 2023 — May 2027',
  score: 'CGPA: 7.5 / 10',
  location: 'Gandhinagar, India'
}

const achievements = [
  { value: '1076', label: 'Peak Codeforces rating', icon: Code2 },
  { value: '1629', label: 'LeetCode contest rating', icon: Award },
  { value: '2171', label: 'Biweekly Contest 488 rank', icon: Sparkles },
]

function Reveal({ children, delay = 0, className = '' }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.14 }} transition={{ duration: 0.55, delay, ease: 'easeOut' }}>{children}</motion.div>
}

function SectionHeading({ eyebrow, title, accent }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title} <span>{accent}</span></h2></div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const nav = [['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Experience', '#experience'], ['Contact', '#contact']]
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="app-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="site-header">
        <a href="#home" className="brand" onClick={closeMenu}><span className="brand-mark">HC</span><span>harichand<span className="brand-dot">.</span></span></a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {nav.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15}/></a>
        </nav>
        <button className="mobile-menu" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      </header>

      <main>
        <section id="home" className="hero section-wrap">
          <div className="hero-copy">
            <div className="availability"><span className="pulse-dot"/> OPEN TO INTERNSHIP OPPORTUNITIES</div>
            <p className="hero-kicker">HELLO, I'M</p>
            <h1>Harichand<br/><span>Chauhan.</span></h1>
            <h2 className="hero-role">I build <span>useful digital experiences</span><br className="desktop-break"/> and data-driven systems.</h2>
            <p className="hero-description">Final-year Computer Science Engineering student interested in full-stack development, real-time systems, and geospatial data processing.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
              <a className="button button-ghost" href={profile.resume} download><Download size={16}/> Download resume</a>
            </div>
            <div className="hero-socials">
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={13}/></a>
              <a href={`mailto:${profile.email}`}><Mail size={17}/> Email <ArrowUpRight size={13}/></a>
              <span><MapPin size={16}/> {profile.location}</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="orbit orbit-a"/><div className="orbit orbit-b"/>
            <div className="profile-card">
              <div className="card-top"><span>DEVELOPER PROFILE</span><span className="card-live"><i/> AVAILABLE</span></div>
              <div className="avatar">
  <img src="/harichand-photo.jpg" alt="Harichand Chauhan" />
  <span className="avatar-corner">✳</span>
</div>
              <div className="profile-card-name">Harichand Chauhan</div>
              <div className="profile-card-role">Computer Science Engineering</div>
              <div className="card-divider"/>
              <div className="mini-stat-grid">
                <div><strong>04+</strong><span>YEARS STUDY</span></div>
                <div><strong>03</strong><span>CORE FOCUS AREAS</span></div>
              </div>
              <div className="code-line"><span>const</span> focus = <b>["build", "learn", "solve"]</b><em>;</em></div>
            </div>
            <div className="floating-chip chip-python"><span>Py</span> Python</div>
            <div className="floating-chip chip-react"><span>◈</span> React.js</div>
            <div className="floating-chip chip-data"><RadioTower size={15}/> Real-time data</div>
            <div className="visual-caption"><span className="caption-line"/> BUILDING AT THE INTERSECTION OF CODE & DATA</div>
          </div>
          <a href="#about" className="scroll-cue"><ArrowDown size={15}/> SCROLL TO EXPLORE</a>
        </section>

        <section id="about" className="section-wrap section-block">
          <SectionHeading eyebrow="01 / A LITTLE ABOUT ME" title="Curious by nature." accent="Builder by choice."/>
          <div className="about-grid">
            <Reveal className="about-main"><p className="about-lead">I’m a Computer Science Engineering student who enjoys turning complex problems into practical software.</p><p>My experience spans full-stack web development, real-time communication, and data-intensive systems. I like understanding how things work end-to-end — from APIs and databases to streaming pipelines and user-facing dashboards.</p><p>Currently, I’m exploring opportunities where I can contribute, learn from experienced teams, and grow as an engineer.</p></Reveal>
            <Reveal delay={0.12} className="about-aside"><div className="about-note"><span className="note-icon"><Terminal size={18}/></span><div><b>Currently focused on</b><p>Full-stack engineering · Data systems · Geospatial technology</p></div></div><div className="about-note"><span className="note-icon"><GraduationCap size={18}/></span><div><b>Education</b><p>B.Tech CSE · PDEU · 2023–2027</p></div></div><div className="about-note"><span className="note-icon"><MapPin size={18}/></span><div><b>Based in</b><p>Gandhinagar, India</p></div></div></Reveal>
          </div>
        </section>

        <section id="skills" className="section-wrap section-block">
          <SectionHeading eyebrow="02 / WHAT I WORK WITH" title="Tools of" accent="the trade."/>
          <p className="section-intro">A growing toolkit across application development, data engineering, and computer science fundamentals.</p>
          <div className="skills-grid">{skills.map((group, i) => <Reveal key={group.title} delay={i * 0.07} className="skill-card"><div className="skill-card-head"><span className="skill-icon"><group.icon size={19}/></span><span className="mono-index">0{i + 1}</span></div><h3>{group.title}</h3><div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></Reveal>)}</div>
        </section>

       
<section id="projects" className="section-wrap section-block">
  <SectionHeading
    eyebrow="03 / SELECTED WORK"
    title="Things I've"
    accent="built."
  />

  <p className="section-intro">
    A selection of projects where I've explored domain intelligence,
    real-time systems, application development, and data processing.
  </p>

  <div className="projects-list">
    {projects.map((project, i) => (
      <Reveal
        key={project.name}
        delay={i * 0.08}
        className={`project-card ${project.featured ? 'featured-project' : ''}`}
      >
        <div className="project-visual">
          <div className="project-visual-grid" />
          <div className="project-symbol">
            <project.icon size={48} strokeWidth={1.2} />
          </div>
          <span className="project-number">{project.number}</span>
          <span className="project-visual-label">{project.type}</span>
        </div>

        <div className="project-content">
          <div className="eyebrow">{project.type}</div>

          <h3>{project.name}</h3>

          <p>{project.description}</p>

          <ul>
            {project.points.map(point => (
              <li key={point}>
                <ChevronRight size={15} />
                {point}
              </li>
            ))}
          </ul>

          <div className="project-stack">
            {project.stack.map(tag => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="project-links">
            <a
              className="text-link"
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub <ArrowUpRight size={16} />
            </a>

            {project.liveLink && (
              <a
                className="text-link"
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>
      </Reveal>
    ))}
  </div>

  <div className="github-more">
    <span>Want to see more?</span>
    <a
      href={profile.github}
      target="_blank"
      rel="noreferrer"
    >
      Explore all repositories <ArrowUpRight size={15} />
    </a>
  </div>
</section>


        <section id="experience" className="section-wrap section-block">
          <SectionHeading eyebrow="04 / WHERE I'VE GROWN" title="Experience &" accent="education."/>
          <div className="timeline">
            <div className="timeline-column"><div className="timeline-label"><BriefcaseBusiness size={17}/> EXPERIENCE</div>{experience.map((item, i) => <Reveal key={item.company} delay={i * 0.08} className="timeline-card"><div className="timeline-top"><span className="eyebrow">{item.period}</span><span className="timeline-dot"/></div><h3>{item.role}</h3><h4>{item.company}</h4><p className="timeline-location">{item.location}</p><ul>{item.details.map(d => <li key={d}>{d}</li>)}</ul><div className="project-stack">{item.tags.map(t => <span key={t}>{t}</span>)}</div></Reveal>)}</div>
            <div className="timeline-column"><div className="timeline-label"><GraduationCap size={18}/> EDUCATION</div><Reveal className="timeline-card education-card"><div className="timeline-top"><span className="eyebrow">{education.period}</span><span className="timeline-dot"/></div><h3>{education.degree}</h3><h4>{education.school}</h4><p className="timeline-location">{education.location}</p><div className="education-score">{education.score}</div></Reveal><div className="timeline-label achievements-label"><Award size={17}/> ACHIEVEMENTS</div><Reveal className="achievement-grid">{achievements.map(a => <div className="achievement-card" key={a.label}><a.icon size={18}/><strong>{a.value}</strong><span>{a.label}</span></div>)}</Reveal><Reveal className="certificate-note"><span className="note-icon"><Award size={18}/></span><div><b>NPTEL Certificate</b><p>Understanding Incubation and Entrepreneurship</p></div></Reveal></div>
          </div>
        </section>

        <section className="section-wrap section-block principles">
          <div><span className="eyebrow">HOW I APPROACH ENGINEERING</span><h2>Stay curious.<br/><span>Ship thoughtfully.</span></h2></div>
          <div className="principle-items"><div><span>01</span><p><b>Understand the problem</b><br/>Start with the user, the data, and the real constraint.</p></div><div><span>02</span><p><b>Build with intention</b><br/>Prefer clear systems, useful features, and maintainable code.</p></div><div><span>03</span><p><b>Keep improving</b><br/>Measure, learn, and iterate instead of assuming.</p></div></div>
        </section>

        <section id="contact" className="section-wrap contact-section">
          <div className="contact-panel"><div className="contact-glow"/><span className="eyebrow">05 / HAVE A PROJECT OR OPPORTUNITY?</span><h2>Let's build something<br/><span>meaningful.</span></h2><p>I’m open to internship opportunities, collaborations, and conversations about software and data.</p><a className="button button-primary contact-button" href={`mailto:${profile.email}?subject=Let's%20connect`}>Get in touch <ArrowUpRight size={17}/></a><div className="contact-details"><a href={`mailto:${profile.email}`}><Mail size={16}/>{profile.email}</a><a href={`tel:${profile.phone}`}><Phone size={16}/>{profile.phone}</a><span><MapPin size={16}/>{profile.location}</span></div></div>
        </section>
      </main>

      <footer className="site-footer"><a href="#home" className="brand"><span className="brand-mark">HC</span><span>harichand<span className="brand-dot">.</span></span></a><p>Designed & built with curiosity. © {new Date().getFullYear()} Harichand Chauhan.</p><div className="footer-links"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a>{profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a>}<a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18}/></a></div></footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
