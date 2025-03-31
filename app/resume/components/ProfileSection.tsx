import React from 'react';

export default function ProfileSection() {
  return (
    <section className="mb-4">
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
       
        <div className="flex-1">
          <h1 className="text-xl font-bold mb-2">{`Hi, I'm zhangbohan😄, a full-stack developer from China 🇨🇳.`}</h1>
          
          <p className="mb-4 text-gray-700 dark:text-gray-200">
            A full-stack developer with 5 years of experience in enterprise applications and micro-frontend architecture. 
            Specialized in building high-performance web applications and component libraries. 
            Recently focused on Web3 development and AI integration, gaining hands-on experience with Ethereum and Solana ecosystems, 
            while exploring AI capabilities through LLM APIs and building AI-enhanced applications. 
            Passionate about leveraging cutting-edge technologies like React, Next.js, and TypeScript to create innovative solutions.
          </p>
          
        </div>
      </div>
    </section>
  );
} 