import type { SimpleIcon } from 'simple-icons';

type SkillItemProps = {
  icon: SimpleIcon;
  color: string;
  title: string;
};

const SkillItem = (props: SkillItemProps) => {
  const icon = props.icon;
  const color = props.color;
  const title = props.title;
  return (
    <div key={title} className="flex flex-col items-center">
      <svg
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={`w-18 h-18 fill-current`}
        style={{ color }}
      >
        <path d={icon.path} />
      </svg>
      <div className="text-lg">{title}</div>
    </div>
  );
};

export default SkillItem;
