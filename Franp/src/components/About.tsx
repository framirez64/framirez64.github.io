import { useState } from 'react'
import './About.css'
import SectionHead from './SectionHead'
import esnupiGif from '../assets/esnupi.gif'
function About() {
  // Opens on 'background' so the index shows its selected row; 'intro' renders the same copy.
  const [activeSection, setActiveSection] = useState<'intro' | 'background' | 'education' | 'interests'>('background')

  const aboutContent = {
    intro: {
      code: '01.1',
      text: (
        <>
          <h1>About Me</h1>
          <p>Hello! My name is Francisco, but I typically go by Frank. I'm originally from México but I moved to Omaha, Nebraska when I was 6. I'm fluent in English and Spanish, and I'm trying to learn other languages like French and German.</p>
          <p>I'm a recent computer science graduate with a strong foundation in software engineering and a growing focus on AI integration. During my academic and project work, I developed full-stack applications, explored machine learning workflows, and learned how to connect intelligent systems to real-world software products. I enjoy building things that are not just functional, but smart—leveraging tools like APIs, LLMs, and automation frameworks to create efficient, user-friendly experiences. I'm eager to keep exploring ways to optimize workflows and assist growing businesses.</p>
        </>
      )
    },
    background: {
      code: '01.1',
      text: (
        <>
          <h1>About Me</h1>
          <p>Hello! My name is Francisco, but I typically go by Frank. I'm originally from México but I moved to Omaha, Nebraska when I was 6. I'm fluent in English and Spanish, and I'm trying to learn other languages like French and German.</p>
          <p>I'm a recent computer science graduate with a strong foundation in software engineering and a growing focus on AI integration. During my academic and project work, I developed full-stack applications, explored machine learning workflows, and learned how to connect intelligent systems to real-world software products. I enjoy building things that are not just functional, but smart—leveraging tools like APIs, LLMs, and automation frameworks to create efficient, user-friendly experiences. I'm eager to keep exploring ways to optimize workflows and assist growing businesses.</p>
        </>
      )
    },
    education: {
      code: '01.2',
      text: (
        <>
          <h1>Education</h1>
          <p>Having grown up in Omaha, I consider myself lucky to have been a student at, what I consider, world-class institutions. I graduated in May 2025 from the University of Nebraska-Omaha with a Bachelor's degree of Science majoring in Computer Science with a concentration in Artificial Intelligence.</p>
          <p>In 2021, I graduated from Omaha Central High School and I’m proud to call myself not only a Maverick but an Eagle too. Along with my high school diploma, I also received the International Baccalaureate diploma from having been part of Central's IB program. </p>
          <p>Additionally, I was fortunate enough to be a recipient of the Susan T. Buffett Scholarship and the Jepsen Scholarship. </p>
        </>
      )
    },
    interests: {
      code: '01.3',
      text: (
        <>
          <h1>Interests</h1>
          <p>I have lots of hobbies. Recently, I've become more active and enjoy rock climbing along with working out regularly. When I'm not working on personal projects, I enjoy reading; lately I've been reading more about recent developments in AI and theoretical applications for certain AI approaches.</p>
        </>
      )
    }
  }

  return (
    <section className="about-section">
      <SectionHead number="01" label="No. 01 — About" left="terraverte" right="caracol" />

      <div className="about-body">
        <div className="about-sidebar">
          <div
            className={`index-item ${activeSection === 'background' ? 'is-active' : ''}`}
            onClick={() => setActiveSection('background')}
            onMouseEnter={() => setActiveSection('background')}
          >
            <span className="code">01.1</span>
            <span className="index-title">Background</span>
          </div>
          <div
            className={`index-item ${activeSection === 'education' ? 'is-active' : ''}`}
            onClick={() => setActiveSection('education')}
            onMouseEnter={() => setActiveSection('education')}
          >
            <span className="code">01.2</span>
            <span className="index-title">Education</span>
          </div>
          <div
            className={`index-item ${activeSection === 'interests' ? 'is-active' : ''}`}
            onClick={() => setActiveSection('interests')}
            onMouseEnter={() => setActiveSection('interests')}
          >
            <span className="code">01.3</span>
            <span className="index-title">Interests</span>
          </div>
        </div>

        <div className="about-section-text">
          <div className="about-slug">
            <span className="tick" />
            <span className="code">No. {aboutContent[activeSection].code}</span>
          </div>
          <div className="esnupi-gif">
            <img src={esnupiGif} alt="red Baron"/>
          </div>
          {aboutContent[activeSection].text}
        </div>
      </div>
    </section>
  )
}

export default About
