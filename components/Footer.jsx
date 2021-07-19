import Banner from './Banner';

export default function Footer({ copyright, bannerTitle }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          <div className="copy">
            <div>{copyright}</div>
            Техобслуживание и ремонт транспортных средств.
          </div>
          <Banner title={bannerTitle} />
        </div>
      </div>
    </footer>
  );
}
