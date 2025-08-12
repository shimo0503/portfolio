import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const careers = [
  {
    date: '2023年3月',
    title: '横浜サイエンスフロンティア高等学校を卒業',
    description: '理系特化の高校を卒業しました。',
  },
  {
    date: '2023年4月',
    title: '横浜国立大学 理工学部 数物・電子情報系学科 情報工学EPに入学',
    description:
      'もともと高校で競技プログラミングをやっていたこともあり、この時点で情報工学の道に進むことを決めていました。',
  },
  {
    date: '2024年6月',
    title: 'パスロジ株式会社に長期インターン生として入社',
    description:
      '開発の仕事がやりたかったので、長期インターンシップに参加しました。現在も参加しています。',
  },
  {
    date: '2024年8月',
    title: '注文アプリの制作',
    description:
      '個人開発で、注文アプリをDjangoを用いて制作しました。1か月半くらいで完成しましたが、UI面などで課題が多く残る結果となりました。',
  },
  {
    date: '2025年3月',
    title: '注文アプリの改修',
    description:
      '主にUIの課題が多かったので、UIの改修を行いました。バックエンドをAPI化し、フロントエンドをNext.jsを用いて書き直しました。',
  },
  {
    date: '2025年5月',
    title: '長期インターンシップで開発していたものが仮リリース',
    description: (
      <div>
        パスロジ株式会社のインターンシップにて、インターン生主導で開発を行っていたWordpress用プラグイン「4Login-for-Secure-and-Smart-Access」が仮リリースされました。プレスリリース記事は
        <a
          className="text-blue-600"
          href="https://prtimes.jp/main/html/rd/p/000000046.000001103.html"
        >
          こちら
        </a>
        です。
      </div>
    ),
  },
];

const Career = () => {
  return (
    <section id="career" className="mt-20 px-4">
      <h2 className="text-5xl font-bold text-center mb-16">Career</h2>
      <VerticalTimeline lineColor="#ddd">
        {careers.map((item, idx) => (
          <VerticalTimelineElement
            key={idx}
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#AED6F1', color: '#0D266A' }}
            contentArrowStyle={{ borderRight: `7px solid "#AED6F1"` }}
            date={item.date}
            iconStyle={{ background: '#9ad4fbff' }}
            icon={<span className="text-4xl flex justify-center items-center h-full">🌟</span>}
          >
            <h2 className="vertical-timeline-element-title">{item.title}</h2>
            <p>{item.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Career;
