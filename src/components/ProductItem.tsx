import type { IconItem } from './SkillsCategory';
import SkillsCategory from './SkillsCategory';

export type ProductItemProps = {
  title: string;
  description: string;
  img_path: string | null;
  skills: IconItem[];
};

const ProductItem = (props: ProductItemProps) => {
  const title = props.title;
  const description = props.description;
  const img_path = props.img_path;
  const skills = props.skills;
  return (
    <div className="flex mt-4">
      <div className="w-1/2 p-4">
        <h2 className="text-3xl font-bold">{title}</h2>
        <div className="mt-4 mb-2">{description}</div>
        <SkillsCategory category="技術スタック" skills={skills} />
      </div>
      {img_path ? (
        <div className="w-1/2 p-4">
          <img src={img_path} alt="profile" className="w-full h-auto object-cover rounded-lg" />
        </div>
      ) : null}
    </div>
  );
};

export default ProductItem;
