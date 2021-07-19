export default function Banner({ title }) {
  return (
    <div className="probanner">
      <div className="pro-seller-label-banner" data-style="logo">
        <a
          href="https://avto.pro/avtorazborka"
          target="_blank"
          className="Logo_1_0_0_15015"
        >
          <div className="Logo_1_0_0_15015__logo-box">
            <div className="Logo_1_0_0_15015__logo">
              <img
                src="https://a1.avto.pro/img/verified_logo.svg"
                alt=""
                className="Logo_1_0_0_15015__logo__img"
              />
            </div>
          </div>
          <div className="Logo_1_0_0_15015__text">
            <div className="Logo_1_0_0_15015__text-item Logo_1_0_0_15015__text-item--top Logo_1_0_0_15015__text-item--big">
              {title}
            </div>
            <div>Верифицированный партнер автопро</div>
          </div>
        </a>
      </div>
    </div>
  );
}
