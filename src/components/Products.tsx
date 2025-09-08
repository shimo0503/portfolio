import {
  siDjango,
  siGithubpages,
  siMui,
  siNextdotjs,
  siNginx,
  siReact,
  siSimpleicons,
  siSqlite,
  siTailwindcss,
  siVite,
} from 'simple-icons';
import type { ProductItemProps } from './ProductItem';
import ProductItem from './ProductItem';

const ProductItemsData: ProductItemProps[] = [
  {
    title: 'ポートフォリオ',
    img_path: 'portfolio_screen.png',
    description: '本サイトです。',
    skills: [
      { icon: siReact, color: '#61DAFB', title: 'React' },
      { icon: siTailwindcss, color: '#06B6D4', title: 'Tailwind CSS' },
      { icon: siVite, color: '#646CFF', title: 'Vite' },
      { icon: siSimpleicons, color: '#111111', title: 'Simple Icons' },
      { icon: siGithubpages, color: '#222222', title: 'GitHub Pages' },
    ],
  },
  {
    title: '注文アプリ',
    img_path: 'instant_order_screen.png',
    description:
      '知人の出店で使うために注文アプリを開発しました。何度か改良を加え、少しずつ技術スタックが変わっているのですが、現在デプロイされているものの技術スタックは以下の通りです。現在はログイン機能実装や、バックエンドのLaravelへの移行などの作業を行っています。',
    skills: [
      { icon: siDjango, color: '#092E20', title: 'Django' },
      { icon: siNextdotjs, color: '#000000', title: 'Next.js' },
      { icon: siMui, color: '#007FFF', title: 'MaterialUI' },
      { icon: siNginx, color: '#009639', title: 'Nginx' },
      { icon: siSqlite, color: '#003B57', title: 'SQLite' },
    ],
  },
];

const Products = () => {
  return (
    <section id="products" className="mt-20 px-4">
      <h2 className="text-5xl font-bold text-center mb-16">Products</h2>
      {ProductItemsData.map(({ title, img_path, description, skills }) => (
        <ProductItem
          key={title}
          title={title}
          img_path={img_path}
          description={description}
          skills={skills}
        />
      ))}
    </section>
  );
};

export default Products;
