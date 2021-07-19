export default function CategoryList({ categories }) {
  return (
    <div className="header__category-list category-list">
      <ul className="category-list__wrap">
        {categories && categories.map((c) => <li>{c}</li>)}
      </ul>
    </div>
  );
}
