import type { ProductItemProps } from './ProductItem';
import ProductItem from './ProductItem';

const ProductItemsData: ProductItemProps[] = [
  {
    title: 'ポートフォリオ',
    img_path: '../assets/face.jpg',
    description: '本サイトです。',
  },
  {
    title: '注文アプリ',
    img_path: '../assets/face.jpg',
    description:
      '知人の出店で使うために注文アプリを開発しました。現在UI部分やログイン機能の開発途中ではありますが、こちらにデプロイしています。',
  },
];

const Products = () => {
  return (
    <section id="aboutme" className="mt-20 px-4">
      <h2 className="text-5xl font-bold text-center mb-16">Products</h2>
      {ProductItemsData.map(({ title, img_path, description }) => (
        <ProductItem key={title} title={title} img_path={img_path} description={description} />
      ))}
    </section>
  );
};

export default Products;
