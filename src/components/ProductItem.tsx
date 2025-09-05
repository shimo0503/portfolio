export type ProductItemProps = {
  title: string;
  description: string;
  img_path: string;
};

const ProductItem = (props: ProductItemProps) => {
  const title = props.title;
  const description = props.description;
  const img_path = props.img_path;
  return (
    <div>
      <h2>{title}</h2>
      <img src={img_path} alt="" />
      <div>{description}</div>
    </div>
  );
};

export default ProductItem;
