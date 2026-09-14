import GithubIcon from '../assets/Github.svg'
import LinkedInIcon from '../assets/LinkedIn.svg'
import HuggingFaceIcon from '../assets/HuggingFace.svg'
import './HeroSection.css'
function HeroSection() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/framirez64',
      icon: GithubIcon
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/francisco-ram%C3%ADrez-7482082bb/',
      icon: LinkedInIcon
    },
    {
      name: 'Hugging Face',
      url: 'https://huggingface.co/frank277',
      icon: HuggingFaceIcon
    }
  ]

  return (
    <section className = "hero-section">
      <div className="hero-wedge hero-wedge-sky" />
      <div className="hero-wedge hero-wedge-ochre" />
      <div className="hero-wedge hero-wedge-brick" />

      <div className="hero-num">00</div>
      <div className="hero-label">No. 00 — Personal</div>
      <div className="hero-dots">
        <span /><span /><span /><span /><span /><span />
      </div>

      <div className="hero-inner">
        <div className="tick" />
        <h2>Francisco 'Frank'</h2>
        <h1>
          <span>Jesús</span>
          <span>Ramírez-Reyna</span>
        </h1>
        <p>Software Developer</p>

        <div className="social-links">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link chamfer"
            >
              <img src={social.icon} alt={social.name} className="social-icon" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
