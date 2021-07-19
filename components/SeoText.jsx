export default function SeoText({ seo }) {
  if (!seo) return null;

  const { title, text } = seo;
  return (
    <section className="seo-text">
      <div className="container">
        <h2>{title}</h2>
        <div>
          {' '}
          <div
            className="about__paragraphs"
            dangerouslySetInnerHTML={{
              __html: text,
            }}
          />
          {/* <a href="#">Читать дальше</a> */}
        </div>
      </div>
    </section>
  );
}
