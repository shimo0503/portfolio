import type { SimpleIcon } from 'simple-icons';
import IconItem from './IconItem';

export type IconItem = {
  icon: SimpleIcon;
  color: string;
  title: string;
};

type SkillCategoryProps = {
  category: string;
  skills: IconItem[];
};

const SkillsCategory = ({ category, skills }: SkillCategoryProps) => {
  return (
    <div className="flex-1">
      <h3 className="text-4xl text-center">{category}</h3>
      <div className="flex flex-wrap gap-6 mt-4">
        {skills.map(({ icon, color, title }) => (
          <IconItem icon={icon} color={`${color}`} title={title} />
        ))}
      </div>
    </div>
  );
};

export default SkillsCategory;
