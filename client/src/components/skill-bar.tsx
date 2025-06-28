import { useEffect, useState } from "react";

interface SkillBarProps {
  name: string;
  level: number;
  delay?: number;
}

export default function SkillBar({ name, level, delay = 0 }: SkillBarProps) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="skill-item">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-semibold">{name}</span>
        <span className="text-scorpion-yellow font-semibold">{level}%</span>
      </div>
      <div className="w-full bg-scorpion-light-gray rounded-full h-3">
        <div 
          className={`bg-gradient-to-r from-scorpion-yellow to-scorpion-yellow-dark h-3 rounded-full transition-all duration-1000 ${
            animated ? '' : 'w-0'
          }`}
          style={{ width: animated ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}
