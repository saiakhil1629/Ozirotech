import React, { useState, useEffect } from 'react';
import './App.css';
import ParticleBackground from './components/ParticleBackground';
import GlobeAnimation from './components/GlobeAnimation';
import GlobalMap from './components/GlobalMap';

// Lucide Icons for Royal-Tech styling
import {
  Cpu,
  Video,
  MapPin,
  Mail,
  Phone,
  Shield,
  Award,
  Terminal,
  Sliders,
  Globe,
  Calendar,
  ArrowRight,
  Menu,
  X,
  ChevronRight,
  CheckCircle,
  Users,
  Briefcase
} from 'lucide-react';

// Sourced image assets
import heroBg from './assets/hero_bg.png';
import aiLabImg from './assets/ai_lab.png';
import contentLabImg from './assets/content_lab.png';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('ai-lab'); // 'ai-lab' or 'content-lab'
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    labType: 'AI Infrastructure Lab',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Monitor scroll for header background styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1500);
  };

  return (
    <>
      {/* 1. Ambient Particle Background */}
      <ParticleBackground />

      {/* 2. Glassmorphic Navigation Header */}
      <header className={`nav-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#" className="logo-link">
            {/* Royal crest vector drawing inline */}
            <svg viewBox="0 0 100 100" className="logo-icon-svg">
              <circle cx="50" cy="50" r="45" fill="none" stroke="url(#logoSilver)" strokeWidth="3" />
              <path d="M 50 15 L 62 45 L 88 45 L 67 62 L 75 90 L 50 72 L 25 90 L 33 62 L 12 45 L 38 45 Z" fill="url(#logoSilver)" />
              <defs>
                <linearGradient id="logoSilver" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="100%" stopColor="#CBD5E1" />
                </linearGradient>
              </defs>
            </svg>
            <div className="logo-text">
              <span className="silver-gradient-text" style={{ lineHeight: 1.1 }}>OZIROTECH</span>
              <span className="logo-sub">AI WORLD</span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="desktop-nav">
            <ul className="nav-menu">
              <li><a href="#" className="nav-item-link active">Home</a></li>
              <li><a href="#vision" className="nav-item-link">Our Vision</a></li>
              <li><a href="#services" className="nav-item-link">Future Labs</a></li>
              <li><a href="#sourcing" className="nav-item-link">Global Logistics</a></li>
              <li><a href="#consultation" className="btn-royal" style={{ padding: '8px 20px', fontSize: '0.8rem' }}>Consult Now</a></li>
            </ul>
          </nav>

          {/* Mobile Nav Button */}
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <nav className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#" className="nav-item-link" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#vision" className="nav-item-link" onClick={() => setMobileMenuOpen(false)}>Our Vision</a>
          <a href="#services" className="nav-item-link" onClick={() => setMobileMenuOpen(false)}>Future Labs</a>
          <a href="#sourcing" className="nav-item-link" onClick={() => setMobileMenuOpen(false)}>Global Logistics</a>
          <a href="#consultation" className="btn-royal" onClick={() => setMobileMenuOpen(false)}>Consult Now</a>
        </nav>
      </header>

      {/* 3. Hero Landing Section */}
      <section className="hero-section" id="home">
        <div className="container hero-grid">
          <div className="hero-content animate-fade-in-up">
            <div className="hero-tag">
              <span className="hero-tag-dot"></span>
              Pioneering Academic Innovation
            </div>
            <h1 className="hero-title-main">
              <span className="silver-gradient-text">Empowering</span>
              <span className="cyan-gradient-text" style={{ fontSize: '3.2rem', marginTop: '-5px' }}>Education</span>
            </h1>
            <h2 className="hero-title-subtitle">With Future AI & Content Creation Labs</h2>
            <p className="hero-desc">
              We design, source, and assemble world-class interactive intelligence laboratories. Sourcing cutting-edge technological equipment globally, we tailor setups to the exact requirements of elite educational institutions.
            </p>
            <div className="hero-buttons">
              <a href="#consultation" className="btn-royal">
                Setup A Lab <ArrowRight size={16} />
              </a>
              <a href="#services" className="btn-tech">
                Explore Tech Details
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <GlobeAnimation />
          </div>
        </div>
      </section>

      {/* 4. Brand Vision & Philosophy */}
      <section className="vision-section section-padding" id="vision">
        <div className="container">
          <div className="section-header-center">
            <span className="section-subtitle">FOUNDATIONAL PHILOSOPHY</span>
            <h2 className="section-title silver-gradient-text">Innovate. Explore. Inspire.</h2>
            <p className="map-description" style={{ margin: '0 auto', maxWidth: '650px', textAlign: 'center' }}>
              Bridging the gap between theory and practical engineering, Ozirotech equips schools and universities with physical lab ecosystems to foster the tech leaders of tomorrow.
            </p>
          </div>

          <div className="vision-grid">
            {/* Card 1 */}
            <div className="royal-border-frame vision-card">
              <div className="royal-corner top-left"></div>
              <div className="royal-corner top-right"></div>
              <div className="royal-corner bottom-left"></div>
              <div className="royal-corner bottom-right"></div>
              <div className="vision-icon-box">
                <Cpu size={28} />
              </div>
              <h3 className="vision-card-title">Next-Gen AI Hardware</h3>
              <p className="vision-card-desc">
                From high-density neural processors to edge-computing micro-controllers, students gain hands-on access to the components powering actual industrial artificial intelligence.
              </p>
            </div>

            {/* Card 2 */}
            <div className="royal-border-frame vision-card">
              <div className="royal-corner top-left"></div>
              <div className="royal-corner top-right"></div>
              <div className="royal-corner bottom-left"></div>
              <div className="royal-corner bottom-right"></div>
              <div className="vision-icon-box">
                <Video size={28} />
              </div>
              <h3 className="vision-card-title">Immersive Production</h3>
              <p className="vision-card-desc">
                Equipping content spaces with spatial virtual reality lenses, smart sensors, and premium acoustics so creators can stream, record, and test IoT technologies.
              </p>
            </div>

            {/* Card 3 */}
            <div className="royal-border-frame vision-card">
              <div className="royal-corner top-left"></div>
              <div className="royal-corner top-right"></div>
              <div className="royal-corner bottom-left"></div>
              <div className="royal-corner bottom-right"></div>
              <div className="vision-icon-box">
                <Award size={28} />
              </div>
              <h3 className="vision-card-title">Sourced Globally</h3>
              <p className="vision-card-desc">
                We establish procurement pipelines across North America, Europe, and Asia, ensuring that the technology deployed at your campus represents global engineering excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Services: Lab Showcases */}
      <section className="labs-section section-padding" id="services">
        <div className="container">
          <div className="section-header-center">
            <span className="section-subtitle">ACADEMIC ECOSYSTEMS</span>
            <h2 className="section-title silver-gradient-text">Our Laboratories</h2>
            <p className="map-description" style={{ margin: '0 auto', maxWidth: '650px', textAlign: 'center' }}>
              Click the tabs below to explore the custom configurations we assemble for educational partners based on their academic and research goals.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="labs-tabs-container">
            <div className="labs-tab-nav">
              <button
                className={`tab-btn ${activeTab === 'ai-lab' ? 'active' : ''}`}
                onClick={() => setActiveTab('ai-lab')}
              >
                AI INFRASTRUCTURE LAB
              </button>
              <button
                className={`tab-btn ${activeTab === 'content-lab' ? 'active' : ''}`}
                onClick={() => setActiveTab('content-lab')}
              >
                CONTENT CREATION LAB
              </button>
            </div>
          </div>

          {/* Tab Content 1: AI Infrastructure Lab */}
          {activeTab === 'ai-lab' && (
            <div className="labs-layout-grid">
              <div className="labs-showcase-image-wrapper">
                <img src={aiLabImg} alt="AI Infrastructure Lab" className="labs-showcase-img" />
                <div className="labs-showcase-image-overlay">
                  <h3 className="labs-image-title">AI Infrastructure Ecosystem</h3>
                  <span className="labs-image-tagline">Equipped with robotic and autonomous hardware units.</span>
                </div>
              </div>

              <div className="labs-specs-list">
                {/* Spec 1 */}
                <div className="royal-border-frame lab-spec-card">
                  <div className="lab-spec-icon-row">
                    <Cpu size={24} />
                    <span style={{ fontSize: '0.7rem', opacity: 0.6, fontWeight: 'bold' }}>SPEC_01</span>
                  </div>
                  <h4 className="lab-spec-title">Edge AI Computing</h4>
                  <p className="lab-spec-desc">
                    Includes hardware developer boards, Neural Processing Units (NPUs), and core computing nodes for training models right at the hardware boundary.
                  </p>
                </div>

                {/* Spec 2 */}
                <div className="royal-border-frame lab-spec-card">
                  <div className="lab-spec-icon-row">
                    <Sliders size={24} />
                    <span style={{ fontSize: '0.7rem', opacity: 0.6, fontWeight: 'bold' }}>SPEC_02</span>
                  </div>
                  <h4 className="lab-spec-title">Self-Driving AI Cars</h4>
                  <p className="lab-spec-desc">
                    Scale-model autonomous vehicles with cameras, computing boards, and ultrasonic nodes to study neural driving path algorithms.
                  </p>
                </div>

                {/* Spec 3 */}
                <div className="royal-border-frame lab-spec-card">
                  <div className="lab-spec-icon-row">
                    <Shield size={24} />
                    <span style={{ fontSize: '0.7rem', opacity: 0.6, fontWeight: 'bold' }}>SPEC_03</span>
                  </div>
                  <h4 className="lab-spec-title">AI Surveillance Systems</h4>
                  <p className="lab-spec-desc">
                    IP cameras and video recording units integrated with real-time model recognition scripts to study object and facial tracking.
                  </p>
                </div>

                {/* Spec 4 */}
                <div className="royal-border-frame lab-spec-card">
                  <div className="lab-spec-icon-row">
                    <Terminal size={24} />
                    <span style={{ fontSize: '0.7rem', opacity: 0.6, fontWeight: 'bold' }}>SPEC_04</span>
                  </div>
                  <h4 className="lab-spec-title">Robotics & Actuators</h4>
                  <p className="lab-spec-desc">
                    Programmable humanoid models, multi-axis robotic arms, and sensory feedback servos to bridge digital AI with mechanics.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab Content 2: Content Creation Lab */}
          {activeTab === 'content-lab' && (
            <div className="labs-layout-grid">
              <div className="labs-showcase-image-wrapper">
                <img src={contentLabImg} alt="Content Creation Lab" className="labs-showcase-img" />
                <div className="labs-showcase-image-overlay">
                  <h3 className="labs-image-title">Content Creation Studio</h3>
                  <span className="labs-image-tagline">Integrated with smart controls, audio structures, and VR modules.</span>
                </div>
              </div>

              <div className="labs-specs-list">
                {/* Spec 1 */}
                <div className="royal-border-frame lab-spec-card">
                  <div className="lab-spec-icon-row">
                    <Video size={24} />
                    <span style={{ fontSize: '0.7rem', opacity: 0.6, fontWeight: 'bold' }}>SPEC_01</span>
                  </div>
                  <h4 className="lab-spec-title">Podcast & Audio Setup</h4>
                  <p className="lab-spec-desc">
                    Studio condenser microphones, noise-isolated acoustic panels, multi-channel mixers, and high-fidelity video recording rigs.
                  </p>
                </div>

                {/* Spec 2 */}
                <div className="royal-border-frame lab-spec-card">
                  <div className="lab-spec-icon-row">
                    <Globe size={24} />
                    <span style={{ fontSize: '0.7rem', opacity: 0.6, fontWeight: 'bold' }}>SPEC_02</span>
                  </div>
                  <h4 className="lab-spec-title">AR & VR Headsets</h4>
                  <p className="lab-spec-desc">
                    Virtual and Augmented Reality headsets with developer access to build visual navigation programs and spatial mockups.
                  </p>
                </div>

                {/* Spec 3 */}
                <div className="royal-border-frame lab-spec-card">
                  <div className="lab-spec-icon-row">
                    <Cpu size={24} />
                    <span style={{ fontSize: '0.7rem', opacity: 0.6, fontWeight: 'bold' }}>SPEC_03</span>
                  </div>
                  <h4 className="lab-spec-title">IoT Smart Home Sensors</h4>
                  <p className="lab-spec-desc">
                    Temperature, humidity, infrared, and ultrasonic sensors communicating over local mesh networks to study home automations.
                  </p>
                </div>

                {/* Spec 4 */}
                <div className="royal-border-frame lab-spec-card">
                  <div className="lab-spec-icon-row">
                    <Sliders size={24} />
                    <span style={{ fontSize: '0.7rem', opacity: 0.6, fontWeight: 'bold' }}>SPEC_04</span>
                  </div>
                  <h4 className="lab-spec-title">Media Processing Units</h4>
                  <p className="lab-spec-desc">
                    Dedicated render consoles and software tools designed to speed up 3D graphics stitching and live video switching tasks.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 6. Global Procurement Sourcing Section */}
      <section className="section-padding" id="sourcing" style={{ background: 'rgba(3, 8, 18, 0.4)' }}>
        <div className="container">
          <GlobalMap />
        </div>
      </section>


      {/* 8. Laboratory Consultation Form */}
      <section className="consultation-section section-padding" id="consultation">
        <div className="container consultation-grid">
          <div className="consult-info">
            <span className="section-subtitle">COMMISSION A LABORATORY</span>
            <h2 className="consult-info-title silver-gradient-text">Build Your Institution's Tech Future</h2>
            <p className="consult-info-desc">
              Every school and university has distinct space limits, budget guidelines, and course priorities. Our design team reviews your goals to source the perfect hardware mix globally.
            </p>
            <ul className="consult-feature-list">
              <li className="consult-feature-item">
                <CheckCircle className="consult-feature-check" size={20} />
                <div>
                  <h4 className="consult-feature-title">Custom Curated Specifications</h4>
                  <p className="consult-feature-desc">We select equipment sizes and capabilities that sync with your existing class syllabus.</p>
                </div>
              </li>
              <li className="consult-feature-item">
                <CheckCircle className="consult-feature-check" size={20} />
                <div>
                  <h4 className="consult-feature-title">Global Procurement Sourcing</h4>
                  <p className="consult-feature-desc">We handle global shipping, custom fees, and hardware tests before delivery.</p>
                </div>
              </li>
              <li className="consult-feature-item">
                <CheckCircle className="consult-feature-check" size={20} />
                <div>
                  <h4 className="consult-feature-title">Expert-Led Campus Trainings</h4>
                  <p className="consult-feature-desc">Once setup is complete, our technicians provide hands-on training to your faculty.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="royal-border-frame consult-form">
            <div className="royal-corner top-left"></div>
            <div className="royal-corner top-right"></div>
            <div className="royal-corner bottom-left"></div>
            <div className="royal-corner bottom-right"></div>
            
            {!formSubmitted ? (
              <form onSubmit={handleFormSubmit}>
                <h3 className="form-title">Consultation Request</h3>
                <p className="form-subtitle">Commission a specialized laboratory design proposal.</p>
                
                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Contact Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="e.g. Dr. John Doe"
                      className="form-input-control"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="e.g. doe@university.edu"
                      className="form-input-control"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="institution">Institution Name</label>
                  <input
                    type="text"
                    id="institution"
                    required
                    placeholder="e.g. Royal Academy of Technology"
                    className="form-input-control"
                    value={formData.institution}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="labType">Target Lab Architecture</label>
                  <select
                    id="labType"
                    className="form-input-control"
                    value={formData.labType}
                    onChange={handleInputChange}
                  >
                    <option value="AI Infrastructure Lab">AI Infrastructure Lab</option>
                    <option value="Content Creation Lab">Content Creation Lab</option>
                    <option value="Combined Academic Lab Suite">Combined Academic Lab Suite</option>
                    <option value="Custom Research Setup">Custom Research Setup</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Laboratory Scope / Specifications</label>
                  <textarea
                    id="message"
                    required
                    rows="3"
                    placeholder="Describe your class counts, room size, or hardware goals..."
                    className="form-input-control"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <div className="submit-container">
                  <button type="submit" className="btn-royal btn-submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Verifying Registry...' : 'Submit Lab Proposal Request'}
                  </button>
                </div>
              </form>
            ) : (
              <div className="form-success-alert">
                <CheckCircle size={56} style={{ color: '#00E5FF' }} />
                <h3 className="form-success-title">Proposal Registered</h3>
                <p className="form-success-message">
                  Thank you, <strong>{formData.name}</strong>. A design architect from Ozirotech will review <strong>{formData.institution}</strong>'s request for a <strong>{formData.labType}</strong>.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', email: '', institution: '', labType: 'AI Infrastructure Lab', message: '' });
                  }}
                  className="btn-tech"
                  style={{ marginTop: '15px' }}
                >
                  Register Another Proposal
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 9. Premium Footer */}
      <footer className="footer-section">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo-link">
              <svg viewBox="0 0 100 100" className="logo-icon-svg" style={{ width: '36px', height: '36px' }}>
                <circle cx="50" cy="50" r="45" fill="none" stroke="url(#logoSilver)" strokeWidth="3" />
                <path d="M 50 15 L 62 45 L 88 45 L 67 62 L 75 90 L 50 72 L 25 90 L 33 62 L 12 45 L 38 45 Z" fill="url(#logoSilver)" />
              </svg>
              <div className="logo-text">
                <span className="silver-gradient-text" style={{ fontSize: '1.1rem' }}>OZIROTECH</span>
                <span className="logo-sub" style={{ fontSize: '0.55rem' }}>AI WORLD</span>
              </div>
            </a>
            <p className="footer-desc">
              Ozirotech AI World Private Limited builds state-of-the-art engineering laboratories for modern educational campuses. Sourcing parts globally, assembling locally.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-link"><Globe size={18} /></a>
              <a href="#" className="social-link"><Users size={18} /></a>
              <a href="#" className="social-link"><Briefcase size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="footer-title">Academic Labs</h4>
            <ul className="footer-links">
              <li className="footer-link-item"><a href="#services" className="footer-link">AI Infrastructure Labs</a></li>
              <li className="footer-link-item"><a href="#services" className="footer-link">Content Creation Labs</a></li>
              <li className="footer-link-item"><a href="#services" className="footer-link">Self-Driving Systems</a></li>
              <li className="footer-link-item"><a href="#services" className="footer-link">Robotic Actuators</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Knowledge</h4>
            <ul className="footer-links">
              <li className="footer-link-item"><a href="#sourcing" className="footer-link">Global Supply Chain</a></li>
              <li className="footer-link-item"><a href="#" className="footer-link">Documentation Guides</a></li>
            </ul>
          </div>

          <div className="footer-contact-info">
            <h4 className="footer-title">Registry Office</h4>
            <div className="footer-contact-row">
              <MapPin className="footer-contact-icon" size={18} />
              <span>Bangalore Integration Hub, Karnataka, India</span>
            </div>
            <div className="footer-contact-row">
              <Mail className="footer-contact-icon" size={18} />
              <span>procurement@ozirotech.com</span>
            </div>
            <div className="footer-contact-row">
              <Phone className="footer-contact-icon" size={18} />
              <span>+91 80 4920 1200</span>
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Ozirotech AI World Private Limited. All sovereign rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
            <a href="#" className="footer-bottom-link">Terms of Service</a>
            <a href="#" className="footer-bottom-link">Sourcing Protocols</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
