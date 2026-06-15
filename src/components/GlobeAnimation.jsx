import React from 'react';
import './GlobeAnimation.css';

const GlobeAnimation = () => {
  return (
    <div className="globe-animation-container">
      <svg className="globe-svg" viewBox="0 0 600 600" width="100%" height="100%">
        <defs>
          {/* Silver/Platinum Gradient */}
          <linearGradient id="royalSilver" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="30%" stopColor="#E2E8F0" />
            <stop offset="70%" stopColor="#CBD5E1" />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>
          
          {/* Indigo Tech Gradient */}
          <linearGradient id="techCyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c7d2fe" />
            <stop offset="50%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#4f46e5" />
          </linearGradient>

          {/* Dark Glass Base Gradient */}
          <linearGradient id="darkGlass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.95" />
          </linearGradient>

          {/* Radial Glow Filter */}
          <filter id="royalGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          {/* Intense Visor Glow */}
          <filter id="visorGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3" result="blur1" />
            <feGaussianBlur stdDeviation="8" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Soft Background Glow */}
          <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="40" result="blur" />
          </filter>
        </defs>

        {/* Outer Background Glow */}
        <circle cx="300" cy="300" r="200" fill="url(#royalSilver)" opacity="0.02" filter="url(#softGlow)" />
        <circle cx="300" cy="300" r="160" fill="url(#techCyan)" opacity="0.01" filter="url(#softGlow)" />

        {/* Outer Ring 1: Tilted Silver Orbit */}
        <g className="orbit-group orbit-1">
          <ellipse cx="300" cy="300" rx="250" ry="85" fill="none" stroke="url(#royalSilver)" strokeWidth="2" strokeDasharray="10, 15, 250, 8, 40, 20" filter="url(#royalGlow)" opacity="0.25" />
          {/* Orbiting Particle */}
          <circle r="7" fill="#FFF" filter="url(#royalGlow)">
            <animateMotion dur="14s" repeatCount="indefinite" path="M 300 300 m -250, 0 a 250,85 0 1,0 500,0 a 250,85 0 1,0 -500,0" />
          </circle>
        </g>

        {/* Outer Ring 2: Opposing Tilted Silver/Cyan Orbit */}
        <g className="orbit-group orbit-2">
          <ellipse cx="300" cy="300" rx="230" ry="105" fill="none" stroke="url(#techCyan)" strokeWidth="1.5" strokeDasharray="300, 20, 50, 20" opacity="0.15" />
          {/* Orbiting Particle */}
          <circle r="5.5" fill="#818cf8" filter="url(#royalGlow)">
            <animateMotion dur="9s" repeatCount="indefinite" path="M 300 300 m 230, 0 a 230,105 0 1,0 -460,0 a 230,105 0 1,0 460,0" />
          </circle>
        </g>

        {/* Outer Ring 3: Vertical Tech Ring */}
        <g className="orbit-group orbit-3">
          <ellipse cx="300" cy="300" rx="110" ry="270" fill="none" stroke="url(#royalSilver)" strokeWidth="1.2" strokeDasharray="80, 40, 20, 40" opacity="0.1" />
        </g>

        {/* Tech Grid Background Globe */}
        <g className="globe-mesh" filter="url(#royalGlow)" opacity="0.08">
          {/* Latitudes */}
          <circle cx="300" cy="300" r="160" fill="none" stroke="url(#royalSilver)" strokeWidth="1.2" />
          <ellipse cx="300" cy="300" rx="160" ry="125" fill="none" stroke="url(#royalSilver)" strokeWidth="0.8" />
          <ellipse cx="300" cy="300" rx="160" ry="75" fill="none" stroke="url(#royalSilver)" strokeWidth="0.8" />
          <ellipse cx="300" cy="300" rx="160" ry="25" fill="none" stroke="url(#royalSilver)" strokeWidth="0.8" />
          
          {/* Longitudes */}
          <ellipse cx="300" cy="300" rx="125" ry="160" fill="none" stroke="url(#royalSilver)" strokeWidth="0.8" />
          <ellipse cx="300" cy="300" rx="75" ry="160" fill="none" stroke="url(#royalSilver)" strokeWidth="0.8" />
          <ellipse cx="300" cy="300" rx="25" ry="160" fill="none" stroke="url(#royalSilver)" strokeWidth="0.8" />
          <line x1="300" y1="140" x2="300" y2="460" stroke="url(#royalSilver)" strokeWidth="1" />
          <line x1="140" y1="300" x2="460" y2="300" stroke="url(#royalSilver)" strokeWidth="1" />
        </g>

        {/* Central Robot Crest / Head */}
        <g className="robot-helm-group">
          {/* Main metallic blue/navy dome background */}
          <circle cx="300" cy="300" r="110" fill="url(#darkGlass)" stroke="url(#royalSilver)" strokeWidth="4" filter="url(#royalGlow)" />
          
          {/* Outer Shield Halo */}
          <circle cx="300" cy="300" r="122" fill="none" stroke="url(#techCyan)" strokeWidth="1.5" strokeDasharray="15,10,5,10" opacity="0.15" />

          {/* Silver Orbit Ring Intersecting Inner Globe */}
          <ellipse cx="300" cy="300" rx="140" ry="30" fill="none" stroke="url(#royalSilver)" strokeWidth="3" opacity="0.25" />
          <ellipse cx="300" cy="300" rx="140" ry="30" fill="none" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="30, 20" opacity="0.3" />

          <g transform="translate(300, 300) scale(0.35) translate(-300, -300)">
            {/* Robot Head Base Structure */}
            {/* Back Dome */}
            <path d="M 150 280 C 150 100, 450 100, 450 280 L 410 400 L 300 465 L 190 400 Z" fill="#0F1B29" stroke="url(#royalSilver)" strokeWidth="12" />
            
            {/* Spikes / Royal Crest on top */}
            <path d="M 300 30 L 335 130 L 265 130 Z" fill="url(#royalSilver)" />
            <path d="M 300 30 L 312 130 L 288 130 Z" fill="#F1F5F9" />

            {/* Ears / Side communication plates */}
            <path d="M 115 250 L 150 210 L 150 320 L 115 295 Z" fill="url(#royalSilver)" stroke="#0B132B" strokeWidth="4" />
            <path d="M 485 250 L 450 210 L 450 320 L 485 295 Z" fill="url(#royalSilver)" stroke="#0B132B" strokeWidth="4" />
            
            {/* Ears indigo details */}
            <circle cx="132" cy="270" r="9" fill="#818cf8" filter="url(#visorGlow)" />
            <circle cx="468" cy="270" r="9" fill="#818cf8" filter="url(#visorGlow)" />

            {/* Visor Frame */}
            <path d="M 155 260 L 445 260 L 415 350 L 185 350 Z" fill="#070D19" stroke="url(#royalSilver)" strokeWidth="8" />
            
            {/* Visor Glow Screen */}
            <path d="M 170 272 L 430 272 L 402 338 L 198 338 Z" fill="#02091D" />
            
            {/* Indigo Visor Lights */}
            <g filter="url(#visorGlow)">
              <ellipse cx="230" cy="305" rx="22" ry="12" fill="#818cf8" />
              <ellipse cx="300" cy="305" rx="27" ry="14" fill="#818cf8" />
              <ellipse cx="370" cy="305" rx="22" ry="12" fill="#818cf8" />
              
              {/* Core light sources */}
              <ellipse cx="230" cy="305" rx="12" ry="6" fill="#FFF" opacity="0.9" />
              <ellipse cx="300" cy="305" rx="15" ry="7" fill="#FFF" opacity="0.9" />
              <ellipse cx="370" cy="305" rx="12" ry="6" fill="#FFF" opacity="0.9" />
            </g>
            
            {/* Mouth Plate / Chin details */}
            <path d="M 230 360 L 370 360 L 300 445 Z" fill="#0D1F3D" stroke="url(#royalSilver)" strokeWidth="6" />
            <path d="M 265 360 L 335 360 L 300 420 Z" fill="url(#royalSilver)" opacity="0.4" />
            
            {/* Tech line down center of chin */}
            <line x1="300" y1="360" x2="300" y2="445" stroke="url(#royalSilver)" strokeWidth="4" />
          </g>
        </g>
        
        {/* Floating Spark Dust */}
        <g className="sparkles" opacity="0.85">
          <circle cx="100" cy="200" r="3" fill="#CBD5E1" className="spark-a" />
          <circle cx="500" cy="230" r="2" fill="#FFF" className="spark-b" />
          <circle cx="210" cy="460" r="3.5" fill="#CBD5E1" className="spark-c" />
          <circle cx="410" cy="140" r="2.5" fill="#818cf8" className="spark-d" />
          <circle cx="160" cy="370" r="3" fill="#818cf8" className="spark-e" />
          <circle cx="460" cy="440" r="1.5" fill="#CBD5E1" className="spark-f" />
        </g>
      </svg>
    </div>
  );
};

export default GlobeAnimation;
