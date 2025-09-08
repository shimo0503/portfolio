import { siGithub } from 'simple-icons';
import IconItem from '../IconItem';

const Aboutme = () => {
  return (
    <section id="aboutme" className="mt-20 px-4">
      <h2 className="text-5xl font-bold text-center mb-16">About me</h2>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <img
          src="face.jpg"
          alt="profile"
          className="w-40 h-40 rounded-full object-cover shrink-0"
        />

        <div className="text-left">
          <div className="text-2xl font-bold mb-2">下山捷揮</div>
          <div className="mb-2">横浜国立大学理工学部 数物・電子情報系学科 情報工学EP3年</div>
          <p className="mt-2 leading-relaxed">
            Web系企業への就職を目指す大学3年生です。LaravelやDjangoを用いたバックエンド開発や、React,
            Next.jsを用いたフロントエンドの開発経験があります。得意分野はバックエンドです。
            パスロジ株式会社の長期インターンシップに2024年6月から参加しており、ソフトウェア開発のほか、インターンチームのマネジメントも勤めています。
          </p>
        </div>
      </div>
      <a href="https://github.com/shimo0503">
        <IconItem icon={siGithub} color="#181717" title="Github" />
      </a>
    </section>
  );
};

export default Aboutme;
