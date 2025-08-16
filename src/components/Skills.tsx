import {
  siC,
  siCss,
  siDjango,
  siDocker,
  siFlask,
  siGit,
  siHtml5,
  siJavascript,
  siLaravel,
  siMysql,
  siNextdotjs,
  siNginx,
  siPhp,
  siPython,
  siReact,
  siTailwindcss,
  siTypescript,
  siUbuntu,
} from 'simple-icons';
import SkillsCategory from './SkillsCategory';

const Skills = () => {
  return (
    <section id="skills" className="mt-20 px-4">
      <h2 className="text-5xl font-bold text-center mb-16">Skills</h2>
      <div className="flex flex-col gap-6 md:flex-row md:gap-8">
        <div className="flex-1">
          <SkillsCategory
            category="Backend"
            skills={[
              { icon: siPhp, color: '#777BB4', title: 'PHP' },
              { icon: siLaravel, color: '#FF2D20', title: 'Laravel' },
              { icon: siPython, color: '#3776AB', title: 'Python' },
              { icon: siDjango, color: '#092E20', title: 'Django' },
              { icon: siFlask, color: '#3BABC3', title: 'Flask' },
              { icon: siC, color: '#A8B9CC', title: 'C' },
              { icon: siNextdotjs, color: '#000000', title: 'Next.js' },
            ]}
          />
        </div>
        <div className="flex-1">
          <SkillsCategory
            category="Frontend"
            skills={[
              { icon: siHtml5, color: '#E34F26', title: 'HTML' },
              { icon: siCss, color: '#663399', title: 'CSS' },
              { icon: siTailwindcss, color: '#06B6D4', title: 'Tailwind CSS' },
              { icon: siJavascript, color: '#F7DF1E', title: 'JavaScript' },
              { icon: siTypescript, color: '#3178C6', title: 'TypeScript' },
              { icon: siReact, color: '#61DAFB', title: 'React' },
              { icon: siNextdotjs, color: '#000000', title: 'Next.js' },
            ]}
          />
        </div>
        <div className="flex-1">
          <SkillsCategory
            category="Infrastructure"
            skills={[
              { icon: siGit, color: '#F05032', title: 'Git' },
              { icon: siDocker, color: '#2496ED', title: 'Docker' },
              { icon: siNginx, color: '#009639', title: 'Nginx' },
              { icon: siUbuntu, color: '#E95420', title: 'Ubuntu' },
              { icon: siMysql, color: '#4479A1', title: 'MySQL' },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
