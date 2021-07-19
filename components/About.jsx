import Image from 'next/image';
import Video from './Video';
import towtruckImg from '/img/towtruck.svg';
import carwashImg from '/img/carwash.svg';
import warrantyImg from '/img/warranty.svg';
import partinstockImg from '/img/partinstock.svg';
import SimpleSlider from './SimpleSlider';

export default function About({ title, text, video }) {
  return (
    <>
      <div className="menu-line" id="about"></div>
      <section className="about">
        <div className="container">
          <div className="about-info">
            <h2>О нас</h2>
            <div className="about__main">
              <div className="about__text-box">
                {title && <h3>{title}</h3>}
                {text && (
                  <div
                    className="about__paragraphs"
                    dangerouslySetInnerHTML={{
                      __html: text,
                    }}
                  />
                )}
              </div>
              {video ? (
                <div className="about__slider-box about__slider-box--video">
                  <Video />
                </div>
              ) : (
                <div className="about__slider-box">
                  <div className="about__slider-box__wrap">
                    <SimpleSlider />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="comfort-services">
            <h3>Услуги комфорта</h3>
            <div className="sto-card__comforts-list">
              <ul className="pro-stock-block__list">
                <li className="pro-stock-block__list__item">
                  <Image src={carwashImg} />
                  <span>Мойка</span>
                </li>
                <li className="pro-stock-block__list__item">
                  <Image src={towtruckImg} />
                  <span>Эвакуатор</span>
                </li>
                <li className="pro-stock-block__list__item">
                  <Image src={warrantyImg} />
                  <span>Гарантия на работы</span>
                </li>
                <li className="pro-stock-block__list__item">
                  <Image src={partinstockImg} />
                  <span>Запчасти в наличии и под заказ</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
