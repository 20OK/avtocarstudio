import PropTypes from 'prop-types';

const Services = ({ services }) => {
  if (!services || services?.length == 0) return null;

  return (
    <>
      <div className="menu-line" id="services"></div>
      <section className="services">
        <div className="services__container container">
          <h2>Услуги нашего автосервиса</h2>
          <div className="services__list">
            {services.map((s) => (
              <figure className="services__list-item">
                <img src={s.icon} />
                <figcaption className="services__list-item-subtitle">
                  {s.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

Services.propTypes = {
  services: PropTypes.array,
};

export default Services;
