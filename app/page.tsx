import MajorProjectExperience from "./resume/components/MajorProjectExperience";
import ExperienceSection from "./resume/components/ExperienceSection";
import ProfileSectionZh from "./resume/components/ProfileSectionZh";
import ProjectsSection from "./resume/components/ProjectsSection";
import SkillsSection from "./resume/components/SkillsSection";

export default function Home() {
  return (
    <div className="container mx-auto py-10 px-4 max-w-4xl">
      <ProfileSectionZh />
      <SkillsSection />
      <ExperienceSection />
      <MajorProjectExperience />
      <ProjectsSection />
    </div>
  );
}
