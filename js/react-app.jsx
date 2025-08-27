// Render selected parts of the page with React while preserving existing structure and CSS
const { useEffect } = React;

function Header() {
	useEffect(() => {
		// Ensure theme icon reflects current theme on mount
		const btn = document.getElementById('theme-toggle');
		if (btn) {
			const icon = btn.querySelector('.material-icons');
			if (icon) {
				icon.textContent = document.body.classList.contains('dark') ? 'light_mode' : 'dark_mode';
			}
		}
	}, []);

	return (
		<header className="header">
			<div className="header__container">
				<a href="#top" className="header__logo">PV.</a>
				<nav className="header__nav">
					<a href="#about" className="link link--nav">About</a>
					<a href="#projects" className="link link--nav">Projects</a>
					<a href="#skills" className="link link--nav">Skills</a>
					<a href="#experience" className="link link--nav">Experience</a>
					<a href="#education" className="link link--nav">Education</a>
					<a href="#contact" className="link link--nav">Contact</a>
					<button id="theme-toggle" className="btn btn--icon">
						<span className="material-icons">dark_mode</span>
					</button>
				</nav>
				<button id="mobile-menu-toggle" className="mobile-menu-toggle">
					<span className="material-icons">menu</span>
				</button>
			</div>
			<div className="mobile-menu" id="mobile-menu">
				<a href="#about" className="mobile-menu__link">About</a>
				<a href="#projects" className="mobile-menu__link">Projects</a>
				<a href="#skills" className="mobile-menu__link">Skills</a>
				<a href="#experience" className="mobile-menu__link">Experience</a>
				<a href="#education" className="mobile-menu__link">Education</a>
				<a href="#contact" className="mobile-menu__link">Contact</a>
			</div>
		</header>
	);
}

function Hero() {
	return (
		<section className="hero-section" id="about">
			<div className="hero-content">
				<div className="hero-intro">
					<h1 className="hero-title text-reveal">Hi, I'm <span className="highlight name-glow">Pooja Valleti</span></h1>
					<h2 className="hero-role text-reveal">AI & ML Engineer | Python Developer | MERN Stack Developer</h2>
					<p className="hero-desc text-reveal">AI and Full Stack Developer passionate about solving real-world problems using technology. Experienced in building intelligent applications, virtual interfaces, and scalable web platforms. Enthusiastic about learning and applying ML and system design.</p>
					<div className="hero-actions">
						<a href="https://drive.google.com/file/d/16j9tucJlzYRAp4IM5tqwFXAHZB-qODFl/view?usp=sharing" target="_blank" rel="noopener noreferrer">
							<span className="btn btn--outline btn--animated">View Resume</span>
						</a>
						<div className="about__social">
							<a href="https://github.com/pooja735" aria-label="github" className="link link--icon hover-glow" target="_blank" rel="noopener noreferrer">
								<svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
									<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
								</svg>
							</a>
							<a href="https://www.linkedin.com/in/valleti-pooja-545a36242/" aria-label="linkedin" className="link link--icon hover-glow" target="_blank" rel="noopener noreferrer">
								<svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
									<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
								</svg>
							</a>
						</div>
					</div>
				</div>
				<div className="hero-image">
					<img src="public/profile-photo.jpg" alt="Pooja Valleti - Professional Headshot" className="about__image" />
				</div>
			</div>
			<svg className="hero-wave" viewBox="0 0 1440 320"><path fill="#667eea" fillOpacity="0.2" d="M0,224L48,197.3C96,171,192,117,288,117.3C384,117,480,171,576,197.3C672,224,768,224,864,197.3C960,171,1056,117,1152,122.7C1248,128,1344,192,1392,224L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
		</section>
	);
}

function App() {
	useEffect(() => {
		// Remove any pre-existing sections to avoid duplicates
		const headerEl = document.querySelector('.header');
		const heroEl = document.querySelector('.hero-section');
		const projectsEl = document.getElementById('projects');
		const skillsEl = document.getElementById('skills');
		const experienceEl = document.getElementById('experience');
		const educationEl = document.getElementById('education');
		const contactEl = document.getElementById('contact');
		const footerEl = document.querySelector('footer.footer');
		const scrollTopEl = document.getElementById('scroll-top');
		if (headerEl && headerEl.parentElement && headerEl.parentElement.id !== 'react-root') {
			headerEl.remove();
		}
		if (heroEl && heroEl.parentElement && heroEl.parentElement.id !== 'react-root') {
			heroEl.remove();
		}
		[projectsEl, skillsEl, experienceEl, educationEl, contactEl, footerEl, scrollTopEl]
			.filter(Boolean)
			.forEach((el) => {
				if (el && el.parentElement && el.parentElement.id !== 'react-root') {
					el.remove();
				}
			});
	}, []);

	return (
		<>
			{/* Keep the animated background that already exists in DOM */}
			<Header />
			<Hero />
			<main>
				<section id="projects" className="section projects fade-in-on-scroll">
					<h2 className="section__title">Projects</h2>
					<div className="projects__grid">
						<div className="project glass-card hover-lift">
							<h3 className="project__title">TechStore E-commerce Website</h3>
							<p className="project__description">Full-stack MERN-based e-commerce platform with secure authentication, product catalog, cart, order tracking, and OpenAI-powered chatbot for instant support on shipping, payments, and more.</p>
							<div className="project__stack">
								<span className="project__stack-item">React</span>
								<span className="project__stack-item">Node.js</span>
								<span className="project__stack-item">MongoDB</span>
								<span className="project__stack-item">OpenAI API</span>
								<span className="project__stack-item">JavaScript</span>
							</div>
							<div className="project__links">
								<a href="https://github.com/pooja735/full-stack-e-commerce-with-chatbot.git" className="link link--icon hover-glow" target="_blank" rel="noopener noreferrer" aria-label="View Source Code">
									<svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
										<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
									</svg>
								</a>
							</div>
						</div>
						<div className="project glass-card hover-lift">
							<h3 className="project__title">Gesture-Controlled Virtual Mouse</h3>
							<p className="project__description">Contactless mouse interface using MediaPipe and Pybind11 for real-time gesture-based control like cursor movement, click, scroll, and drag-and-drop.</p>
							<div className="project__stack">
								<span className="project__stack-item">MediaPipe</span>
								<span className="project__stack-item">OpenCV</span>
								<span className="project__stack-item">Pybind11</span>
								<span className="project__stack-item">TensorFlow</span>
							</div>
							<div className="project__links">
								<a href="https://github.com/pooja735/Hand-Gesture-Control.git" className="link link--icon hover-glow" target="_blank" rel="noopener noreferrer" aria-label="View Source Code">
									<svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
										<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
									</svg>
								</a>
							</div>
						</div>
						<div className="project glass-card hover-lift">
							<h3 className="project__title">MedMaster</h3>
							<p className="project__description">Personalized Medical Recommendation System using ML and Flask. Provides disease prediction and health tips while ensuring user privacy and security.</p>
							<div className="project__stack">
								<span className="project__stack-item">Python</span>
								<span className="project__stack-item">Machine Learning</span>
								<span className="project__stack-item">Flask</span>
							</div>
							<div className="project__links">
								<a href="https://github.com/pooja735/MedMaster.git" className="link link--icon hover-glow" target="_blank" rel="noopener noreferrer" aria-label="View Source Code">
									<svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
										<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</section>

				<section className="section skills fade-in-on-scroll" id="skills">
					<h2 className="section__title">Skills</h2>
					<div className="skills__grid">
						{['Python','C','Java','C++','HTML','CSS','SQL','JavaScript','React','Node.js','MongoDB','Express.js','MySQL','Oracle DB','Pandas','Matplotlib','Mediapipe','Scikit-learn','GitHub','Microsoft Excel'].map((s) => (
							<div key={s} className="skill-item stagger-item">{s}</div>
						))}
					</div>
				</section>

				<section id="experience" className="section experience fade-in-on-scroll">
					<h2 className="section__title">Experience</h2>
					<div className="timeline">
						<div className="timeline-item glass-card hover-lift">
							<div className="timeline-dot"></div>
							<div className="timeline-content">
								<h3 className="experience__title">AI Intern (Full-Time)</h3>
								<p className="experience__company">Cloudchip Technologies</p>
								<p className="experience__period">Feb 2025 - June 2025</p>
								<p className="experience__description">Built a full-stack e-commerce application using MERN stack, achieving 95% faster page load and a 30% rise in engagement. Designed modern UI with Tailwind CSS and Bootstrap. Integrated an OpenAI-powered chatbot, reducing support queries by 40%.</p>
								<div className="experience__technologies">
									<span className="tech-tag">MongoDB</span>
									<span className="tech-tag">Express.js</span>
									<span className="tech-tag">React</span>
									<span className="tech-tag">Node.js</span>
									<span className="tech-tag">OpenAI API</span>
									<span className="tech-tag">Tailwind CSS</span>
									<span className="tech-tag">Bootstrap</span>
								</div>
							</div>
						</div>
						<div className="timeline-item glass-card hover-lift">
							<div className="timeline-dot"></div>
							<div className="timeline-content">
								<h3 className="experience__title">AI Intern</h3>
								<p className="experience__company">Cloudchip Technologies</p>
								<p className="experience__period">June 2024 - Sept 2024</p>
								<p className="experience__description">Developed a gesture-controlled virtual mouse using MediaPipe and Pybind11. Achieved over 90% gesture accuracy and real-time response under 100ms. Enhanced usability for accessibility and contactless systems.</p>
								<div className="experience__technologies">
									<span className="tech-tag">MediaPipe</span>
									<span className="tech-tag">Pybind11</span>
									<span className="tech-tag">OpenCV</span>
									<span className="tech-tag">TensorFlow</span>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="education" className="section education fade-in-on-scroll">
					<h2 className="section__title">Education</h2>
					<div className="education__container">
						<div className="education__item glass-card hover-lift">
							<div className="education__header">
								<h3 className="education__degree">M.Tech in Computer Science Engineering</h3>
								<p className="education__institution">Amrita Vishwa Vidyapeetham, Coimbatore</p>
								<p className="education__period">2025 - Present</p>
								<p className="education__gpa">Pursuing</p>
							</div>
							<p className="education__description">Pursuing Master's degree in Computer Science Engineering with focus on Full-stack development, advanced algorithms, machine learning, and software engineering principles.</p>
						</div>

						<div className="education__item glass-card hover-lift">
							<div className="education__header">
								<h3 className="education__degree">B.Tech in Computer & Communication Engineering</h3>
								<p className="education__institution">Manipal University Jaipur</p>
								<p className="education__period">2021 - 2025</p>
								<p className="education__gpa">7.5 CGPA</p>
							</div>
							<p className="education__description">Completed Bachelor's degree in Computer & Communication Engineering with a specialization in Cyber Security, and a strong focus on AI, ML, and full-stack development.</p>
						</div>

						<div className="education__item glass-card hover-lift">
							<div className="education__header">
								<h3 className="education__degree">Intermediate - MPC</h3>
								<p className="education__institution">Sri Chaitanya Junior Kalasala, Hyderabad</p>
								<p className="education__period">2019 - 2021</p>
								<p className="education__gpa">71%</p>
							</div>
							<p className="education__description">Completed higher secondary education with core focus on Mathematics, Physics, and Chemistry.</p>
						</div>

						<div className="education__item glass-card hover-lift">
							<div className="education__header">
								<h3 className="education__degree">CBSE 10th</h3>
								<p className="education__institution">Sri Chaitanya School, Hyderabad</p>
								<p className="education__period">2018 - 2019</p>
								<p className="education__gpa">87%</p>
							</div>
							<p className="education__description">Completed 10th standard with CBSE curriculum.</p>
						</div>
					</div>
				</section>

				<section className="section contact fade-in-on-scroll" id="contact">
					<h2 className="section__title">Contact</h2>
					<div className="contact__container">
						<div className="contact__info glass-card">
							<h3 className="contact__title">Get In Touch</h3>
							<p className="contact__description">I'm always interested in hearing about new opportunities and exciting projects. Feel free to reach out!</p>
							<div className="contact__email">
								<span className="material-icons">email</span>
								<a href="mailto:poojavalleti04@gmail.com" className="link">poojavalleti04@gmail.com</a>
							</div>
						</div>
					</div>
				</section>
			</main>

			<div className="scroll-top" id="scroll-top">
				<button className="btn btn--icon" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
					<span className="material-icons">keyboard_arrow_up</span>
				</button>
			</div>

			<footer className="footer">
				<div className="footer__container">
					<p>© 2025 Pooja Valleti. All rights reserved.</p>
				</div>
			</footer>
		</>
	);
}

const mount = document.getElementById('react-root');
if (mount) {
	const root = ReactDOM.createRoot(mount);
	root.render(<App />);
}


