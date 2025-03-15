import * as React from 'react';
import { Layout } from 'components/layouts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faPaintBrush, faDatabase } from '@fortawesome/free-solid-svg-icons';
import TimelineOppositeContent, { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent';
import * as styles from 'components/styles/Home.module.css';
import { medium } from 'components/styles/Container.module.css';
import { btn, btnPrimary, btnSecondary, btnLg, btnSm, linkBtn, buttonGroup } from 'components/styles/Button.module.css';
import { M6, M2 } from 'components/styles/Margin.module.css';
import avatarImg from 'assets/images/avatar.png';
import cvsImg from 'assets/images/cvs.png';
import fduImg from 'assets/images/fdu_logo.png';
import sdiImg from 'assets/images/sdi_logo.webp';
import tausightImg from 'assets/images/tausight_logo.jpeg';
import gtuImg from 'assets/images/gtuLogo.jpeg';
import tbsmoImg from 'assets/images/tbsmo_logo.jpeg';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Seo from 'components/seo';
import { faGit } from '@fortawesome/free-brands-svg-icons';

const IndexPage = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<Layout>
			<div className={styles.hero}>
				<div className={styles.overlay}></div>
				<div className={`${medium} ${styles.introSection} text-center`}>
					<img className={styles.avatar} src={avatarImg} alt="avatar logo" />
					<div className={styles.introduction}>
						<p className={styles.hi}>Hello there!</p>
						<h1 className={styles.whoAmI}>I am Jay Jariwala. Full Stack JavaScript Developer</h1>
						<div className={styles.subIntro}>
							<p>
								As aaaaa tech enthusiast and software engineer, my passion lies in leveraging cutting-edge technology to create solutions that positively
								impact on people's lives. With expertise in healthcare technology, I currently serve as a full stack software engineer at CVS health,
								having previously contributed to Tausight as a User Interface engineer. I thrive on crafting innovative software to address real-world
								challenges, aiming to contribute to a tech-driven world that enhances and simplifies the human experience.
							</p>
						</div>
						<div className={`${M6} ${buttonGroup} `}>
							<Link to="#contact-me" className={`${btn} ${btnPrimary} ${btnLg} ${linkBtn} `}>
								Get in Touch
							</Link>
							<button className={`${btn} ${btnLg}`}>Resume</button>
						</div>
					</div>
				</div>
			</div>
			<div className={`${styles.section1} `}>
				<h2>I love working with cutting edge technolgies</h2>
				<p className={M2}>Things I am good at...</p>
			</div>
			<div className={`${styles.technologies} ${medium}`}>
				<div className={styles.card}>
					<div className={styles.round}>
						<FontAwesomeIcon icon={faGem} size="2x" />
					</div>
					<h3>UI Design</h3>
					<p>
						I love beautiful interfaces with great typography and vibrant colors. I design websites and web application mockups using Sketch/Figma and
						convert them into high-fidelity prototype
					</p>
				</div>
				<div className={styles.card}>
					<div className={styles.round}>
						<FontAwesomeIcon icon={faPaintBrush} size="2x" />
					</div>
					<h3>Frontend Development</h3>
					<p>
						I develop pixel perfect, cross browser compatible, and responsive websites using HTML5, CSS3 and JavaScript. I also develop Single Page
						Application frontend using React and Angular
					</p>
				</div>
				<div className={styles.card}>
					<div className={styles.round}>
						<FontAwesomeIcon icon={faDatabase} size="2x" />
					</div>
					<h3>Backend Development</h3>
					<p>
						My expertise spans designing and maintaining databases, implementing robust application logic, and ensuring seamless integration between
						front-end and back-end components.
					</p>
				</div>
			</div>
			<div className={styles.section2}>
				<div className={styles.workSection}>
					<div className={styles.title}>
						<h2>Work Experience</h2>
					</div>
					<div className={styles.workWrapper}>
						<div className={styles.technologyWrapper}>
							<div>
								<h3>Core Technologies</h3>
								<ul>
									<li>
										<span className={styles.heading}>Programming Languages:</span>
										<span>JavaScript, TypeScript, Java </span>
									</li>
									<li>
										<span className={styles.heading}>Web Frameworks:</span>
										<span>ReactJs, Angular.js, jQuery</span>
									</li>
									<li>
										<span className={styles.heading}>Databases:</span>
										<span> Postgres, MySQL, MongoDB, Oracle</span>
									</li>
									<li>
										<span className={styles.heading}>Cloud:</span>
										<span>Google Cloud Platform - Kubernetes, Compute Engine, Cloud Functions, Cloud Run etc.</span>
									</li>
									<li>
										<span className={styles.heading}>Tools & Technologies:</span>
										<span>Kafka, Docker, CircleCI, Harness, Jenkins, Github, VSCode </span>
									</li>
									<li>
										<span className={styles.heading}>Testing:</span>
										<span>Jasmine, Karma, Cypress, React Testing library, jUnit</span>
									</li>
								</ul>
								<div className={styles.linkedInButtonContainer}>
									<a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className={`${linkBtn} ${btnSecondary} ${btnSm} `}>
										View On LinkedIn
									</a>
								</div>
							</div>
						</div>
						<div className={styles.timelineWrapper}>
							<Timeline
								sx={{
									[`& .${timelineOppositeContentClasses.root}`]: {
										flex: 0.2,
									},
								}}
							>
								<TimelineItem>
									<TimelineOppositeContent sx={{ m: 'auto 0' }} align="left" variant="body2">
										<h4>2022</h4>
									</TimelineOppositeContent>
									<TimelineSeparator>
										<TimelineConnector sx={{ height: '20px' }} />
										<TimelineDot sx={{ borderWidth: '10px' }}>
											<img src={cvsImg} width={30} alt="cvs logo" />
										</TimelineDot>
										<TimelineConnector sx={{ height: '20px' }} />
									</TimelineSeparator>
									<TimelineContent sx={{ py: '12px', px: 2 }}>
										<h3>CVS Health</h3>
										<h4>Software Engineer</h4>
										<span className={styles.timerange}>Oct 2022 - Present</span>
									</TimelineContent>
								</TimelineItem>
								<TimelineItem>
									<TimelineOppositeContent sx={{ m: 'auto 0' }} align="left" variant="body2">
										<h4>2020</h4>
									</TimelineOppositeContent>
									<TimelineSeparator>
										<TimelineConnector sx={{ height: '20px' }} />
										<TimelineDot sx={{ borderWidth: '10px' }}>
											<img src={tausightImg} width={30} alt="cvs health logo" />
										</TimelineDot>
										<TimelineConnector sx={{ height: '20px' }} />
									</TimelineSeparator>
									<TimelineContent sx={{ py: '12px', px: 2 }}>
										<h3>Tausight</h3>
										<h4>User Interface Engineer</h4>
										<span className={styles.timerange}>Oct 2020 - Sept 2022</span>
									</TimelineContent>
								</TimelineItem>
								<TimelineItem>
									<TimelineOppositeContent sx={{ m: 'auto 0' }} align="left" variant="body2">
										<h4>2019</h4>
									</TimelineOppositeContent>
									<TimelineSeparator>
										<TimelineConnector sx={{ height: '20px' }} />
										<TimelineDot sx={{ borderWidth: '10px' }}>
											<img src={sdiImg} width={30} alt="tausight logo" />
										</TimelineDot>
										<TimelineConnector sx={{ height: '20px' }} />
									</TimelineSeparator>
									<TimelineContent sx={{ py: '12px', px: 2 }}>
										<h3>SDI Global Services</h3>
										<h4>Software Developer</h4>
										<span className={styles.timerange}>2019 - 2020</span>
									</TimelineContent>
								</TimelineItem>
								<TimelineItem>
									<TimelineOppositeContent sx={{ m: 'auto 0' }} align="left" variant="body2">
										<h4>2017</h4>
									</TimelineOppositeContent>
									<TimelineSeparator>
										<TimelineConnector sx={{ height: '20px' }} />
										<TimelineDot sx={{ borderWidth: '10px' }}>
											<img src={sdiImg} width={30} alt="sdi global services logo" />
										</TimelineDot>
										<TimelineConnector sx={{ height: '20px' }} />
									</TimelineSeparator>
									<TimelineContent sx={{ py: '12px', px: 2 }}>
										<h3>SDI Global Services</h3>
										<h4>Software Developer</h4>
										<span className={styles.timerange}>2017 - 2018</span>
									</TimelineContent>
								</TimelineItem>
								<TimelineItem>
									<TimelineOppositeContent sx={{ m: 'auto 0' }} align="left" variant="body2">
										<h4>2016</h4>
									</TimelineOppositeContent>
									<TimelineSeparator>
										<TimelineConnector sx={{ height: '20px' }} />
										<TimelineDot sx={{ borderWidth: '10px' }}>
											<img src={tbsmoImg} width={30} alt="sdi global services logo" />
										</TimelineDot>
										<TimelineConnector sx={{ height: '20px' }} />
									</TimelineSeparator>
									<TimelineContent sx={{ py: '12px', px: 2 }}>
										<h3>Today's Business</h3>
										<h4>Web Development Intern</h4>
										<span className={styles.timerange}>Aug 2016 - Dec 2016</span>
									</TimelineContent>
								</TimelineItem>
								<TimelineItem>
									<TimelineOppositeContent sx={{ m: 'auto 0' }} align="left" variant="body2">
										<h4>2015</h4>
									</TimelineOppositeContent>
									<TimelineSeparator>
										<TimelineConnector sx={{ height: '20px' }} />
										<TimelineDot sx={{ borderWidth: '10px' }}>
											<img src={fduImg} width={30} alt="today's business logo" />
										</TimelineDot>
									</TimelineSeparator>
									<TimelineContent sx={{ py: '12px', px: 2 }}>
										<h3>Fairleigh Dickinson University</h3>

										<h4>Student Orientation Leader</h4>
										<span className={styles.timerange}>Aug 2016 - Sept 2016</span>
									</TimelineContent>
								</TimelineItem>
							</Timeline>
						</div>
					</div>
				</div>
				<div className={styles.educationSection}>
					<div className={styles.title}>
						<h2>Education</h2>
					</div>
					<div className={styles.workWrapper}>
						<div className={styles.technologyWrapper}>
							<div>
								<ul>
									<li>
										<div>
											<span className={styles.heading}>Master's Courses</span>
										</div>
										<span>
											Software Engineering, Mobile Application Development, System Programming, Computer Architecture , Operating Systems, Java and
											the Internet, Assembly Language, Database Systems, Local Area Networks, and Unix shall Programming
										</span>
									</li>
									<li>
										<div>
											<span className={styles.heading}>Bachelors Courses</span>
										</div>
										<span>
											Object Oriented Programming with C++, Computer Networks, Cyber Security, Analysis and Design of Algorithem,Advanced JAVA, Web
											Technologies, Distributed Operating Systems, Mobile Computing and Wireless Communication, Android Programming, System
											Programming, Computer Grapics, Computer Programming and Utilization, Data Structures, Database Managment Systems, Web data
											managment etc.
										</span>
									</li>
								</ul>
							</div>
						</div>
						<div className={styles.timelineWrapper}>
							<Timeline
								sx={{
									[`& .${timelineOppositeContentClasses.root}`]: {
										flex: 0.2,
									},
								}}
							>
								<TimelineItem>
									<TimelineOppositeContent sx={{ m: 'auto 0' }} align="left" variant="body2">
										<h4>2015</h4>
									</TimelineOppositeContent>
									<TimelineSeparator>
										<TimelineConnector sx={{ height: '20px' }} />
										<TimelineDot sx={{ borderWidth: '10px' }}>
											<img src={fduImg} width={30} alt="fdu logo" />
										</TimelineDot>
										<TimelineConnector sx={{ height: '20px' }} />
									</TimelineSeparator>
									<TimelineContent sx={{ py: '12px', px: 2 }}>
										<h3>Fairleigh Dickinson University</h3>
										<h4>Master of Science (M.S) in Computer Science</h4>
										<h4> GPA - 3.94 / 4.0 </h4>
										<span className={styles.timerange}>Sept 2015 - March 2017</span>
									</TimelineContent>
								</TimelineItem>
								<TimelineItem>
									<TimelineOppositeContent sx={{ m: 'auto 0' }} align="left" variant="body2">
										<h4>2010</h4>
									</TimelineOppositeContent>
									<TimelineSeparator>
										<TimelineConnector sx={{ height: '20px' }} />
										<TimelineDot sx={{ borderWidth: '10px' }}>
											<img src={gtuImg} width={30} alt="fdu logo" />
										</TimelineDot>
										<TimelineConnector sx={{ height: '20px' }} />
									</TimelineSeparator>
									<TimelineContent sx={{ py: '12px', px: 2 }}>
										<h3>Gujarat Techlogical University</h3>
										<h4>Bachelors of Engineering (B.E) in Information Technology </h4>
										<span className={styles.timerange}>Sept 2015 - March 2017</span>
									</TimelineContent>
								</TimelineItem>
							</Timeline>
						</div>
					</div>
				</div>
			</div>

			<div className={`${styles.section4}`}>
				<div className={styles.contactCard}>
					<h3 className={styles.contactFormHeading} id="contact-me">
						Contact me
					</h3>
					<form method="post" action="https://getform.io/f/62a7def0-d14f-4596-bc6d-ab3d746e4080" className={styles.contactForm}>
						<label htmlFor="name">Name</label>
						<input type="text" id="name" name="name" className={styles.inputType} />
						<label htmlFor="email">Email</label>
						<input type="email" id="email" name="email" className={styles.inputType} />
						<label htmlFor="message">Message</label>
						<textarea rows={10} className={styles.inputType} name="message" id="message" placeholder="Write something.." />
						<button type="submit" className={`${btn} ${btnPrimary} ${btnSm} `}>
							Send
						</button>
					</form>
				</div>
			</div>
		</Layout>
	);
};

export const Head = () => <Seo title="Home" />;

export default IndexPage;
