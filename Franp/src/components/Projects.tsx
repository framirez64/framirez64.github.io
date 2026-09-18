import { useState } from 'react';
import './Projects.css';
import SectionHead from './SectionHead';
import type { Tone } from '../tones';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Image imports
import Assistant1 from '../assets/project1/Assistant1.png';
import Assistant2 from '../assets/project1/Assistant2.png';
import Assistant3 from '../assets/project1/Assistant3.png';
import Assistant4 from '../assets/project1/Assistant4.png';

import Eidolon1 from '../assets/project2/Eidolon1.png';
import Eidolon2 from '../assets/project2/Eidolon2.png';

import Hal1 from '../assets/project3/Hal1.png';

function Projects() {
  const [activeSection, setActiveSection] = useState('first');
  const [modalImage, setModalImage] = useState<string | null>(null);

  type ProjectSection = {
    id: string;
    code: string;
    tone: Tone;
    title: string;
    heading: string;
    content: string;
    slides: string[];
  };

  // One project, one color: each token is reserved for a single project.
  const projectSections: ProjectSection[] = [
    {
      id: 'first',
      code: 'No. 02.1',
      tone: 'caracol',
      title: 'Eidolon - Webapp',
      heading: 'AI Personal Assistant',
      content: "The Eidolon WebApplication is my the latest project I've developed and the one I'm currently iterating on. Eidolon is meant to be an AI assistant powered by Google's Gemini AI, it has decentralized aaccount creation (no email or phone number tied to your account), and you just need your generated private key to login. Eidolon is meant to provide AI generated suggestions based on your goals, interests, and hobbies by generating daily plans, meals, and helping you track your sleep and emotions. The two componennts I've recently added are a personal library tied to a user, along with note-taking capabilities(currently under development). The library allows users to upload and store material they're currently reading, and view it from anywhere. The goal is to have a personal AI assistant that mirrors your thinking and can assist you in different tasks. I used React + Vite for developing the front-end and styling. For the back-end I utilized Firebase for storage, requests, API integration, and functions. The decentralized identity was created using the NOSTR protocol. I utilized GitHub for version control and for developing the UIs I used Figma.",
      slides: [Assistant1, Assistant2, Assistant3, Assistant4],
    },
    {
      id: 'second',
      code: 'No. 02.2',
      tone: 'sky',
      title: 'Eidolon - Desktop App',
      heading: 'Local AI Inference Engine',
      content: 'The Eidolon Desktop App is an adjacent project I created that in the future will work in tandem with the Eidolon Webapp. A core component of the webapplication was the decentralized identity for users. To expand on that, I wanted to make something that would take that a step further by allowing users to not rely on using AI ran by other companies. For that, I came up with the of the Eidolon desktop app which allows a user to run a local AI on their computer for interactions to avoid having their interactions tracked by companies. Some industries such as law and clinical would benefit greatly from utilziing AI in their workflows but legally cannot disclose sensitive information. This version of the Eidolon project is a desktop application for Windows that runs in two modes: inference and server. In the inference-mode, the application launches a window for users to interact with an AI with. One cool feature of this AI is that it contains a "thinking" mode which can be toggled on or off. In thinking mode, the AI ponders its answers more to showcase the steps it took to come up with an answer. If a user simply wants a straight-forward answer, thinking-mode can be turned off. When fully developed and paired up, the Eidolon desktop application could be ran in server-mode to connect with the Eidolon webpage so that any questions and information sent to the AI is fully local and private. I used the Ollama open-source project as the foundation for this project and utilized QT6 for developing the UI.',
      slides: [Eidolon1, Eidolon2],
    },
    {
      id: 'third',
      code: 'No. 02.3',
      tone: 'brick',
      title: 'HalGPT',
      heading: 'HAL9000 Voice Synthesis',
      content: 'HalGPT was one of the first projects I made, I was inspired after watching 2001: A Space Oddysey. I found the voice chosen for HAL soothing and cool to listen to. I compiled all the voicelines from the movie and utilizing an open-source project called PiperTTS, I was able to clone the voice and train a model for speech synthesis. I learned a lot about audio cleaning and voice transcribing along with being able to leverage the GPU acceleration library CUDA. I figured that an interface would be better than just using the command-line interface so I used PyQt to develop a desktop UI for the Text-to-Speech software to run on.',
      slides: [Hal1],
    },
  ];

  const activeContent = projectSections.find(section => section.id === activeSection);

  return (
    <section className="project-section">
      <SectionHead number="02" label="No. 02 — Index, selected work" left="ochre" right="cinnabar" />

      <div className="project-body">
        <div className="project-sidebar">
          {projectSections.map(section => (
            <div
              key={section.id}
              className={`index-item project-sidebar-item ${
                activeSection === section.id ? 'is-active' : ''
              }`}
              onClick={() => setActiveSection(section.id)}
              onMouseEnter={() => setActiveSection(section.id)}
            >
              <span className={`project-swatch chamfer tone-${section.tone}`} />
              <span className="project-sidebar-label">
                <span className="code">{section.code}</span>
                <span className="index-title">{section.title}</span>
              </span>
            </div>
          ))}
        </div>

        <div className="project-section-text">
          <div className="project-slug">
            <span className="tick" />
            <span className="code" style={{ color: `var(--${activeContent?.tone})` }}>
              {activeContent?.code} — {activeContent?.title}
            </span>
          </div>

          <h1>{activeContent?.heading}</h1>

          <div className="project-carousel">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              centeredSlides={true}
              slidesPerView={1}
              spaceBetween={20}
              loop={(activeContent?.slides?.length ?? 0) > 1}
            >
              {activeContent?.slides.map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="project-slide chamfer">
                    <img
                      src={src}
                      alt={`Slide ${index}`}
                      onClick={() => setModalImage(src)}
                      style={{ cursor: 'pointer' }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <p>{activeContent?.content}</p>
        </div>
      </div>

      {/* Modal */}
      {modalImage && (
        <div className="project-modal" onClick={() => setModalImage(null)}>
          <div className="project-modal-content chamfer" onClick={e => e.stopPropagation()}>
            <img src={modalImage} alt="Enlarged" />
            <button className="project-modal-close" onClick={() => setModalImage(null)}>
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
