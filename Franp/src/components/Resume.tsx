import { useState } from 'react'
import './Resume.css'
import SectionHead from './SectionHead'

// Import your tech icons (you'll need to add these to your assets)
import PythonIcon from '../assets/logos/python.svg'
import JavaIcon from '../assets/logos/java.svg'
import CIcon from '../assets/logos/c.svg'
import JavaScriptIcon from '../assets/logos/js.svg'
import TypeScriptIcon from '../assets/logos/ts.svg'
import ReactIcon from '../assets/logos/react.svg'
import TailwindIcon from '../assets/logos/tailwind.svg'
import jQueryIcon from '../assets/logos/jquery.svg'
import DjangoIcon from '../assets/logos/django.svg'
import TomcatIcon from '../assets/logos/tomcat.svg'
import SQLiteIcon from '../assets/logos/sqlite.svg'
import MySQLIcon from '../assets/logos/mysql.svg'
import LinuxIcon from '../assets/logos/linux.svg'
import UbuntuIcon from '../assets/logos/ubuntu.svg'
import AWSIcon from '../assets/logos/aws.svg'
import FirebaseIcon from '../assets/logos/firebase.svg'
import DockerIcon from '../assets/logos/docker.svg'
import GitHubIcon from '../assets/Github.svg'
import TensorFlowIcon from '../assets/logos/tensorflow.svg'
import PyTorchIcon from '../assets/logos/pytorch.svg'
import CUDAIcon from '../assets/logos/cuda.svg'
import JupyterIcon from '../assets/logos/jupyter.svg'
import OpenAIIcon from '../assets/logos/openai.svg'

function Resume() {
  const [activeSection, setActiveSection] = useState('intro')

  const resumeSections = [
    {
      id: 'intro',
      code: 'No. 03.1',
      title: 'Intro',
      heading: 'About Me',
      content: "During my academic and project work, I developed full-stack applications, explored machine learning workflows, and learned how to connect intelligent systems to real-world software products. I enjoy building things that are not just functional, but smart—leveraging tools like APIs, LLMs, and automation frameworks to create efficient, user-friendly experiences. I'm eager to keep exploring ways to optimize workflows and assist growing businesses.",
      icons: [] // No icons for intro
    },
    {
      id: 'languages',
      code: 'No. 03.2',
      title: 'Languages',
      heading: 'Languages I Know',
      content: "I'm most experienced in Python, which I've used extensively throughout my undergraduate education for both web applications and AI-focused projects. I'm also comfortable working with lower-level languages like C, as well as object-oriented languages such as Java. For web development, I have a solid understanding of JavaScript and have begun incorporating TypeScript for more structured front-end development.",
      icons: [
        { name: 'Python', icon: PythonIcon },
        { name: 'JavaScript', icon: JavaScriptIcon },
        { name: 'TypeScript', icon: TypeScriptIcon },
        { name: 'Java', icon: JavaIcon },
        { name: 'C', icon: CIcon }
      ]
    },
    {
      id: 'frontend',
      code: 'No. 03.3',
      title: 'Frontend',
      heading: 'Frontend Experience',
      content: "In front-end development, I started with standard HTML and CSS, but have since transitioned to using React for more dynamic and maintainable interfaces. I also incorporate Tailwind CSS for efficient, utility-first styling, and occasionally use jQuery for lightweight DOM manipulation when needed.",
      icons: [
        { name: 'React', icon: ReactIcon },
        { name: 'Tailwind CSS', icon: TailwindIcon },
        { name: 'jQuery', icon: jQueryIcon }
      ]
    },
    {
      id: 'backend',
      code: 'No. 03.4',
      title: 'Backend',
      heading: 'Backend Experience',
      content: "My backend development experience centers on Python's Django framework and Java-based applications using Apache Tomcat. I'm well-versed in Django's architecture and have built several web applications using it, typically paired with SQLite for lightweight data storage. On the Java side, I've developed web apps deployed on Tomcat, working with MySQL for more robust database management. These experiences have given me a solid working knowledge of SQL and backend systems. Whether it be serving single-user or multi-user systems.",
      icons: [
        { name: 'Django', icon: DjangoIcon },
        { name: 'Apache Tomcat', icon: TomcatIcon },
        { name: 'SQLite', icon: SQLiteIcon },
        { name: 'MySQL', icon: MySQLIcon }
      ]
    },
    {
      id: 'devops',
      code: 'No. 03.5',
      title: 'DevOps',
      heading: 'DevOps',
      content: "In addition to being fully comfortable in Windows environments, I'm confident working in Linux-based systems such as Ubuntu and Unix. I've deployed applications using AWS and Firebase, and have hands-on experience containerizing services with Docker. I'm also proficient with Git on the command line and experienced in using GitHub for version control and collaborative development.",
      icons: [
        { name: 'Linux', icon: LinuxIcon },
        { name: 'Ubuntu', icon: UbuntuIcon },
        { name: 'AWS', icon: AWSIcon },
        { name: 'Firebase', icon: FirebaseIcon },
        { name: 'Docker', icon: DockerIcon },
        { name: 'GitHub', icon: GitHubIcon }
      ]
    },
    {
      id: 'ai',
      code: 'No. 03.6',
      title: 'AI',
      heading: 'AI Experience',
      content: "I have a deep understanding of different AI architectures and techniques in fields such as Natural Language Processing, Deep Learning, Text Generation, among other Machine Learning techniques. In my academic career I was privileged enough to learn from leading experts in the fields of AI Knowledge Representation and be apart of the Natural Language Processing Knowledge Representation Lab. This experience allowed me to work in-depth with cutting-edge open-source language models and understand them at a foundational level. I was able to benchmark models including but not limited to; Meta's LLAMA2/3 series of models, DeepSeek, MistralAI, and even was able to utilize OpenAI's GPT API endpoints. Beyond working with language models and integrating them into functioning applications, I'm well versed in utilizing Jupyter Notebooks and typical AI libraries such as TensorFlow, PyTorch, and CUDA. Additionally, I have a solid grasp of Answer Set Programming, a declarative programming approach meant to develop robust modeling and reasoning systems for AI agents.",
      icons: [
        { name: 'TensorFlow', icon: TensorFlowIcon },
        { name: 'PyTorch', icon: PyTorchIcon },
        { name: 'CUDA', icon: CUDAIcon },
        { name: 'Jupyter', icon: JupyterIcon },
        { name: 'OpenAI', icon: OpenAIIcon }
      ]
    }
  ]

  const activeContent = resumeSections.find(section => section.id === activeSection)

  return (
    <section className="resume-section">
      <SectionHead number="03" label="No. 03 — Capability" left="sky" right="ink" />

      <div className="resume-body">
        <div className="resume-sidebar">
          {resumeSections.map((section) => (
            <div
              key={section.id}
              className={`index-item ${activeSection === section.id ? 'is-active' : ''}`}
              onClick={() => setActiveSection(section.id)}
              onMouseEnter={() => setActiveSection(section.id)}
            >
              <span className="code">{section.code}</span>
              <span className="index-title">{section.title}</span>
            </div>
          ))}
        </div>

        <div className="resume-section-text">
          <div className="resume-slug">
            <span className="tick" />
            <span className="code">{activeContent?.code}</span>
          </div>

          <h1>{activeContent?.heading}</h1>
          <p>{activeContent?.content}</p>

          {activeContent?.icons && activeContent.icons.length > 0 && (
            <div className="tech-icons">
              {activeContent.icons.map((tech) => (
                <div key={tech.name} className="tech-icon">
                  <span className="tech-plate chamfer">
                    <img src={tech.icon} alt={tech.name} />
                  </span>
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Resume