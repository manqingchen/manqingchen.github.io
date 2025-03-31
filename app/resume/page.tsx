import React from 'react';
import ProfileSection from './components/ProfileSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/MajorProjectExperience';

export default function ResumePage() {
  return (
    <div className="container mx-auto py-10 px-4 max-w-4xl">
      <ProfileSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
    </div>
  );
}

