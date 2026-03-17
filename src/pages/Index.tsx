import {
  Code2,
  Lightbulb,
  Zap,
  Award,
  GraduationCap,
  Briefcase,
  Trophy,
  Mail,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import SoftSkillsSection from "@/components/SoftSkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificatesSection from "@/components/CertificatesSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import CustomCursor from "@/components/CustomCursor";
import RoadmapTimeline from "@/components/RoadmapTimeline";
import RoadmapNode from "@/components/RoadmapNode";

const Index = () => {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 selection:text-primary-foreground">
      <CustomCursor />
      <Navbar />
      <HeroSection />

      {/* The Candy Crush Level Map */}
      <RoadmapTimeline>
        {/* === SKILLS === */}
        <RoadmapNode icon={Code2} label="Tech Stack" side="right" id="skills" index={0}>
          <SkillsSection />
        </RoadmapNode>

        <RoadmapNode icon={Lightbulb} label="Soft Skills" side="left" id="softskills" index={1}>
          <SoftSkillsSection />
        </RoadmapNode>

        {/* === PROJECTS === */}
        <RoadmapNode icon={Zap} label="Projects" side="right" id="projects" index={2}>
          <ProjectsSection />
        </RoadmapNode>

        {/* === CERTIFICATES === */}
        <RoadmapNode icon={Award} label="Certificates" side="left" id="certificates" index={3}>
          <CertificatesSection />
        </RoadmapNode>

        {/* === EDUCATION === */}
        <RoadmapNode icon={GraduationCap} label="Education" side="right" id="education" index={4}>
          <EducationSection />
        </RoadmapNode>

        {/* === EXPERIENCE === */}
        <RoadmapNode icon={Briefcase} label="Experience" side="left" id="experience" index={5}>
          <ExperienceSection />
        </RoadmapNode>

        {/* === ACHIEVEMENTS === */}
        <RoadmapNode icon={Trophy} label="Achievements" side="right" id="achievements" index={6}>
          <AchievementsSection />
        </RoadmapNode>

        {/* === CONTACT === */}
        <RoadmapNode icon={Mail} label="Destination" side="left" id="contact" index={7}>
          <ContactSection />
        </RoadmapNode>
      </RoadmapTimeline>
    </div>
  );
};

export default Index;