import CategoryList from './CategoryList';
import Banner from './Banner';

export default function Header({ title, categories, subtitle }) {
  return (
    <header className="sto-lp__header header">
      <div className="header__container container">
        <h1 className="header__title">{title}</h1>
        {subtitle && <div className="header__subtitle">{subtitle}</div>}
        {categories && categories.length > 0 && (
          <CategoryList categories={categories} />
        )}
        <Banner title={title} />
        <div>Обращайтесь за подбором автозапчастей к мастеру.</div>
      </div>
    </header>
  );
}
