import MakesBox from './MakesBox';

export default function Makes({ makes }) {
  return (
    <section className="makes">
      <div className="container">
        <h2>Обслуживаем марки</h2>
        <MakesBox makes={makes} />
      </div>
    </section>
  );
}
