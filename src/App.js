import React, { useState, useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Poems from './Poems';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [isSticky, setIsSticky] = useState(false);

  const roles = useMemo(() => [
    'Software Developer',
    'Competitive Programmer', 
    'MERN Stack Developer',
    'Poet & Writer',
    'Problem Solver'
  ], []);

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const handleType = () => {
      const current = loopNum % roles.length;
      const fullText = roles[current];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="App">
      {/* Header */}
      <header className={isSticky ? 'sticky' : ''}>
        <a href="#home" className="logo">Portfolio</a>
        <div className={`toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => scrollToSection('home')}>HOME</a></li>
          <li><a href="#about" onClick={() => scrollToSection('about')}>ABOUT</a></li>
          <li><a href="#skills" onClick={() => scrollToSection('skills')}>SKILLS</a></li>
          <li><a href="#projects" onClick={() => scrollToSection('projects')}>PROJECTS</a></li>
          <li><a href="#activities" onClick={() => scrollToSection('activities')}>ACTIVITIES</a></li>
          <li><a href="#contact" onClick={() => scrollToSection('contact')}>CONTACT</a></li>
        </ul>
      </header>

      {/* Banner Section */}
      <section className="banner" id="home">
        <div className="textbox">
          <h2>Hello! I am <br/><span className="gradient-text">Lavish Shakya.</span></h2>
          <br/>
          <h3>I'm a <span className="autotype">{text}</span><span className="cursor">|</span></h3>
          <br/>
          <div className="banner-buttons">
            <a href="#about" className="btn" onClick={() => scrollToSection('about')}>About me</a>
            <a href="/poems" className="btn">My Poems</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="heading">
          <h2>About Me</h2>
          <h3>Let me introduce myself.</h3>
          <br/>
          <hr/>
          <br/>
          <br/>
        </div>
        <div className="content">
          <div className="w50">
            <img src="profile.jpg" className="profilepic" alt="Profile"/>
          </div>
          <div className="cbox1 w50">
            <p>I am a passionate student at <b>IIIT Lucknow</b>, pursuing B.Tech in Computer Science and Business.</p>
            <br/>
            <p>Competitive Programming, Web Development, and Poetry Writing are my domains of interest. I am a passionate learner with excellent problem-solving abilities.</p>
            <br/>
            <p>I am open to opportunities to gain experience and further enhance my skills in the above-mentioned fields.</p>
            <br/>
            <br/>
            <ul className="info">
              <li><b>Full Name :</b>&ensp;&emsp;&ensp;Lavish Shakya</li>
              <li><b>CGPA :</b>&ensp;&emsp;&emsp;&ensp;8.43/10</li>
              <li><b>College :</b>&ensp;&emsp;&emsp;Indian Institute of Information Technology (IIIT) Lucknow, India</li>
            </ul>
            <br/>
          </div>
          <br/>
        </div>
        <br/><br/>
        <div className="social">
          <br/>
          <br/>
          <a href="https://www.linkedin.com/in/lavish-shakya-a5690218b/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/lavishshakya" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://codeforces.com/profile/codingmania066" target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-code"></i>
          </a>
          <a href="mailto:lavishshakya066@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
        <div className="rbtn">
          <a href="/resume.pdf" target="_blank" className="btn" download>View Resume</a>
        </div>
      </section>

      <hr className="idk"/>
      <br/>

      {/* Education Section */}
      <div className="heading">
        <h1>Education</h1>
      </div>
      
      <section className="timeline">
        <div className="wrapper">
          <ul>
            <li>
              <div className="tc">
                <h4 className="date">2023 - 2027</h4>
                <h2>Bachelor of Technology in Computer Science and Business</h2>
                <h3>IIIT Lucknow, India</h3>
                <p>CGPA: 8.43/10</p>
                <p>Relevant Courses: OOPS, OS, Web Development, Data Structures & Algorithms, Database Management Systems, Computer Networks</p>
              </div>
            </li>
            <li>
              <div className="tc">
                <h4 className="date">2020 - 2022</h4>
                <h2>Intermediate (Physics, Chemistry, Mathematics, Computer Science)</h2>
                <h3>Kapil Muni Children's Academy, Bewar (Mainpuri)</h3>
                <p>CBSE Board, Class 12th Percentage: 96.6%</p>
              </div>
            </li>
            <li>
              <div className="tc">
                <h4 className="date">2020</h4>
                <h2>Matriculation</h2>
                <h3>Kapil Muni Children's Academy, Bewar (Mainpuri)</h3>
                <p>CBSE Board, Class 10th Percentage: 93.4%</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills">
        <div className="heading">
          <br/>
          <br/>
          <h2>My Skills</h2>
          <p>Have a look at my expertise.</p>
        </div>
        <br/>
        <br/>
        <div className="row">
          <div className="item">
            <div className="in">
              <p>C/C++</p>
              <p className="w-90">90%</p>
            </div>
            <div className="progress">
              <span className="cpp"></span>
            </div>
          </div>

          <div className="item">
            <div className="in">
              <p>Python</p>
              <p className="w-80">80%</p>
            </div>
            <div className="progress">
              <span className="py"></span>
            </div>
          </div>

          <div className="item">
            <div className="in">
              <p>JavaScript</p>
              <p className="w-85">85%</p>
            </div>
            <div className="progress">
              <span className="js"></span>
            </div>
          </div>

          <div className="item">
            <div className="in">
              <p>React & Frontend</p>
              <p className="w-80">80%</p>
            </div>
            <div className="progress">
              <span className="react"></span>
            </div>
          </div>

          <div className="item">
            <div className="in">
              <p>Node.js & Backend</p>
              <p className="w-75">75%</p>
            </div>
            <div className="progress">
              <span className="node"></span>
            </div>
          </div>

          <div className="item">
            <div className="in">
              <p>DB - MongoDB, MySQL</p>
              <p className="w-70">70%</p>
            </div>
            <div className="progress">
              <span className="db"></span>
            </div>
          </div>
        </div>
      </section>

      
      {/* Projects Section */}
      <section className="projects" id="projects">
        <div className="heading white">
          <h2>My Projects</h2>
          <p>Checkout my creations.</p>
          <br/>
          <hr/>
          <br/>
        </div>
        <div className="content">
          <div className="pbox">
            <h3>Tutor Finder</h3>
            <br/>
            <p>MERN Stack platform connecting students with qualified tutors.</p>
            <p>Features user authentication, booking system, and payment integration.</p>
            <br/>
            <p>Tech Stack: React, Express.js, MongoDB, Tailwind CSS</p>
            <div className="project-links">
              <a href="https://github.com/lavishshakya/tutor-finder" target="_blank" rel="noopener noreferrer" className="github-link">
                <i className="fa-brands fa-github"></i> View Code
              </a>
            </div>
          </div>

          <div className="pbox">
            <h3>Krishak Shayak</h3>
            <br/>
            <p>Agri-tech platform connecting farmers with sellers and weather updates.</p>
            <p>Real-time weather data and marketplace functionality.</p>
            <br/>
            <p>Tech Stack: React, Express.js, MongoDB, OpenWeatherMap API</p>
            <div className="project-links">
              <a href="https://github.com/lavishshakya/krishak-shayak" target="_blank" rel="noopener noreferrer" className="github-link">
                <i className="fa-brands fa-github"></i> View Code
              </a>
            </div>
          </div>

          <div className="pbox">
            <h3>Poetry Portfolio</h3>
            <br/>
            <p>Personal portfolio showcasing poetry and technical skills.</p>
            <p>Dark theme with glassmorphism design and animations.</p>
            <br/>
            <p>Tech Stack: React, Framer Motion</p>
            <div className="project-links">
              <a href="https://github.com/lavishshakya/poetry-portfolio" target="_blank" rel="noopener noreferrer" className="github-link">
                <i className="fa-brands fa-github"></i> View Code
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
        <section className="activities" id="activities">
          <div className="heading">
            <h2>Activities and Achievements</h2>
            <p>Take a look at my accomplishments.</p>
            <br/>
            <hr/>
            <br/>
          </div>

          <div className="a-content">
            <div className="abox">
          <img src="/trophy.png" alt="Trophy"/> 
             {/* <h3>Expert</h3> */}
            <h4>Codeforces Expert<br/>Max Rating: 1622</h4>
          </div>

          <div className="abox">
            <img src="/trophy.png" alt="Trophy"/>
            {/* <h3>4-Star</h3> */}
            <h4>CodeChef 4-Star<br/>Max Rating: 1848</h4>
          </div>

              <div className="abox">
            <img src="/trophy.png" alt="Trophy"/>
            <h4>Fresher's Cup Winner<br/>IIIT Lucknow</h4>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="heading">
          <h2>Contact Me</h2>
          <p>I'd Love To Connect With You.</p>
        </div>
        <div className="rows">
          <div className="entry">
            <div className="icon">
              <i className="fa-solid fa-location-dot fa-3x"></i>
            </div>
            <br/>
            <h4>Where to find me</h4>
            <p>Lucknow, Uttar Pradesh, India</p>
          </div>

          <div className="entry">
            <div className="icon">
              <i className="fa-solid fa-envelope fa-3x"></i>
            </div>
            <br/>
            <h4>Email Me at</h4>
            <p>lavishshakya066@gmail.com</p>
          </div>

          <div className="entry">
            <div className="icon">
              <i className="fa-brands fa-linkedin-in fa-3x"></i>
            </div>
            <br/>
            <h4>Let's Connect</h4>
            <a href="https://www.linkedin.com/in/lavish-shakya-a5690218b/" target="_blank" rel="noopener noreferrer">Profile</a>
          </div>
        </div>
      </section>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/poems" element={<Poems />} />
      </Routes>
    </Router>
  );
};

export default App;