import React, { useState } from 'react';
import './GlobalMap.css';

const GlobalMap = () => {
  const [activeHub, setActiveHub] = useState(null);

  const hubs = [
    {
      id: 'usa',
      name: 'Silicon Valley, USA',
      x: 150,
      y: 130,
      tech: 'High-Performance Edge AI Chips, TPU Cores & Neural Accelerators',
      flag: '🇺🇸',
    },
    {
      id: 'germany',
      name: 'Munich, Germany',
      x: 435,
      y: 105,
      tech: 'Autonomous Car Controllers, Precision LiDAR & Radar Sensors',
      flag: '🇩🇪',
    },
    {
      id: 'japan',
      name: 'Tokyo, Japan',
      x: 700,
      y: 135,
      tech: 'Advanced Humanoid Robotics, High-Torque Actuators & Robotic Limbs',
      flag: '🇯🇵',
    },
    {
      id: 'china',
      name: 'Shenzhen, China',
      x: 650,
      y: 160,
      tech: 'IoT Sensor Networks, Smart Lens Systems & High-Speed Cameras',
      flag: '🇨🇳',
    },
    {
      id: 'india',
      name: 'Ozirotech HQ, Visakhapatnam',
      x: 585,
      y: 195,
      tech: 'Custom Laboratory Integration, AI System Assembly & Education Deployment',
      flag: '🇮🇳',
      isCenter: true,
    },
  ];

  // Helper to draw arches from sources to India (Visakhapatnam: 585, 195)
  const getArcPath = (startX, startY, endX, endY) => {
    const midX = (startX + endX) / 2;
    const midY = (startY + endY) / 2 - 50; // Curve up
    return `M ${startX} ${startY} Q ${midX} ${midY} ${endX} ${endY}`;
  };

  return (
    <div className="global-map-container">
      <div className="map-card-header">
        <h3 className="section-subtitle silver-gradient-text">GLOBAL SOURCING NETWORK</h3>
        <p className="map-description">
          We source elite equipment globally from the world's leading technology centers to engineer bespoke AI and Content Creation Labs, custom-tailored for educational institutes.
        </p>
      </div>

      <div className="map-wrapper">
        <svg viewBox="0 0 850 420" className="world-map-svg">
          <defs>
            <linearGradient id="mapGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f8fafc" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>
            
            <linearGradient id="pathGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#94a3b8" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#4f46e5" stopOpacity="1" />
            </linearGradient>

            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Stylized background grid gridlines */}
          <g className="gridlines" opacity="0.06">
            {Array.from({ length: 17 }).map((_, i) => (
              <line key={`v-${i}`} x1={i * 50} y1="0" x2={i * 50} y2="420" stroke="#000" strokeWidth="0.5" />
            ))}
            {Array.from({ length: 9 }).map((_, i) => (
              <line key={`h-${i}`} x1="0" y1={i * 50} x2="850" y2={i * 50} stroke="#000" strokeWidth="0.5" />
            ))}
          </g>

          {/* Stylized Continents Mockups */}
          <g className="continents-group" fill="url(#mapGlowGrad)" stroke="#cbd5e1" strokeWidth="1">
            {/* North America */}
            <path d="M 50 100 L 100 80 L 180 85 L 230 110 L 210 160 L 170 170 L 140 150 L 120 180 L 105 160 L 60 140 Z" />
            {/* Greenland */}
            <path d="M 190 40 L 230 30 L 250 50 L 220 70 L 195 65 Z" />
            {/* South America */}
            <path d="M 170 185 L 205 180 L 245 220 L 260 270 L 240 340 L 210 370 L 205 340 L 190 280 L 165 220 Z" />
            {/* Africa */}
            <path d="M 400 180 L 440 160 L 485 165 L 515 200 L 525 240 L 500 285 L 485 330 L 465 330 L 450 280 L 445 220 L 395 200 Z" />
            {/* Europe */}
            <path d="M 400 90 L 435 70 L 480 80 L 500 120 L 470 145 L 435 150 L 400 130 Z" />
            {/* Asia */}
            <path d="M 485 85 L 560 65 L 680 75 L 755 100 L 740 160 L 710 180 L 710 230 L 660 235 L 620 250 L 580 230 L 585 190 L 510 155 Z" />
            {/* Japan Arc */}
            <path d="M 720 115 L 735 125 L 725 155 L 715 145 Z" />
            {/* Australia */}
            <path d="M 690 290 L 745 285 L 765 315 L 740 355 L 695 345 L 675 315 Z" />
          </g>

          {/* active routing paths */}
          {hubs.filter(h => !h.isCenter).map((hub) => {
            const isActive = activeHub === hub.id;
            const pathD = getArcPath(hub.x, hub.y, 585, 195);
            return (
              <g key={`route-${hub.id}`} className={`route-group ${isActive ? 'active' : ''}`}>
                {/* Background path line */}
                <path
                  d={pathD}
                  fill="none"
                  stroke={isActive ? 'url(#pathGlowGrad)' : '#94A3B8'}
                  strokeWidth={isActive ? 2 : 1}
                  strokeDasharray={isActive ? 'none' : '4,4'}
                  opacity={isActive ? 0.9 : 0.25}
                  className="route-line"
                />
                
                {/* Glowing light pulse packet */}
                <circle r={isActive ? 4 : 2.5} fill={isActive ? '#818cf8' : '#94A3B8'} filter="url(#glow)">
                  <animateMotion
                    dur={isActive ? '2.5s' : '5s'}
                    repeatCount="indefinite"
                    path={pathD}
                  />
                </circle>
              </g>
            );
          })}

          {/* Connection circles and labels */}
          {hubs.map((hub) => {
            const isActive = activeHub === hub.id;
            const isCenter = hub.isCenter;
            return (
              <g
                key={hub.id}
                className={`hub-node-group ${isCenter ? 'hub-center' : ''} ${isActive ? 'hub-active' : ''}`}
                transform={`translate(${hub.x}, ${hub.y})`}
                onMouseEnter={() => !isCenter && setActiveHub(hub.id)}
                onMouseLeave={() => !isCenter && setActiveHub(null)}
              >
                {/* Pulsing ring */}
                <circle
                  r={isCenter ? 12 : 8}
                  fill="none"
                  stroke={isCenter ? '#818cf8' : '#94A3B8'}
                  strokeWidth="1.2"
                  className="pulsing-ring"
                />
                
                {/* Inner Core */}
                <circle
                  r={isCenter ? 6 : 4}
                  fill={isCenter ? '#818cf8' : '#94A3B8'}
                  filter="url(#glow)"
                  className="node-core"
                />

                {/* Interactive hover trigger area */}
                <circle r="25" fill="transparent" style={{ cursor: isCenter ? 'default' : 'pointer' }} />
              </g>
            );
          })}
        </svg>

        {/* Global Hub HUD Interface */}
        <div className="map-hud-overlay">
          {activeHub ? (
            (() => {
              const hub = hubs.find(h => h.id === activeHub);
              return (
                <div className="hud-panel animate-panel">
                  <div className="hud-title-row">
                    <span className="hud-flag">{hub.flag}</span>
                    <h4 className="hud-hub-name">{hub.name}</h4>
                  </div>
                  <div className="hud-divider"></div>
                  <div className="hud-content">
                    <span className="hud-label">SOURCED EQUIPMENT TYPE:</span>
                    <p className="hud-tech-text">{hub.tech}</p>
                    <div className="hud-status">
                      <span className="status-indicator-dot"></span>
                      <span className="status-text">Route Active (Transit Sourced)</span>
                    </div>
                  </div>
                </div>
              );
            })()
          ) : (
            <div className="hud-panel default-hud">
              <div className="hud-title-row">
                <span className="hud-flag">🌐</span>
                <h4 className="hud-hub-name">Procurement Registry</h4>
              </div>
              <div className="hud-divider"></div>
              <div className="hud-content">
                <p className="hud-help-text">
                  Hover over the glowing silver sourcing ports <strong className="silver-text" style={{ color: 'var(--color-gold)' }}>(USA, Germany, Japan, China)</strong> on the map to inspect transit equipment nodes heading to Ozirotech India.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GlobalMap;
