import SkillBar from "@/components/skill-bar";
import { CheckCircle } from "lucide-react";

export default function About() {
  const skills = [
    { name: "React & Next.js", level: 95 },
    { name: "Node.js & Express", level: 90 },
    { name: "Python & Django", level: 85 },
    { name: "Database Design", level: 88 },
    { name: "Cloud & DevOps", level: 80 }
  ];

  const values = [
    "Innovation-driven development",
    "Clean, maintainable code", 
    "User-centric design approach",
    "Continuous learning mindset"
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-scorpion-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">About Me</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Passionate developer with expertise in modern technologies
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="glass-effect p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-scorpion-yellow mb-4">
                  Professional Journey
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  With years of experience in full-stack development, I specialize in creating robust, scalable applications 
                  that deliver exceptional user experiences. My passion lies in solving complex problems through innovative 
                  technology solutions.
                </p>
              </div>
              
              <div className="glass-effect p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-scorpion-yellow mb-4">
                  Core Values
                </h3>
                <ul className="space-y-3 text-gray-300">
                  {values.map((value, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="text-scorpion-yellow mr-3 h-5 w-5" />
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-scorpion-yellow mb-6">
                Technical Skills
              </h3>
              
              {skills.map((skill, index) => (
                <SkillBar 
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={index * 200}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
