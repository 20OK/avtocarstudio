import Image from 'next/image';
import SmartphoneWhiteImg from '../img/smartphone_white.svg';
import PointImg from '../img/point2.svg';
import RouteImg from '../img/route.svg';
import Phones from './Phones';

export default function HowFind({ address, timeOpen, phones }) {
  return (
    <>
      <div className="menu-line" id="how-find"></div>
      <section className="how-find">
        <h2>Как нас найти</h2>
        <div className="container">
          <div className="how-find__main">
            <div className="address">
              <Image src={PointImg} height="48px" width="48px" />
              <h4>Адрес</h4>
              <div>
                <p>{address}</p>
              </div>
              <div className="route">
                <Image src={RouteImg} height="26px" width="26px" />
                <a href="https://www.google.com/maps" target="_blank">
                  Проложить маршрут
                </a>
              </div>
            </div>
            <div className="phone-number">
              <Image src={SmartphoneWhiteImg} height="48px" width="48px" />
              <h4>Телефон</h4>
              <div className="phones phones--simple">
                <i>
                  <img src="/img/smartphone.svg" alt="" />
                </i>
                <hr />
                <Phones phones={phones} />
              </div>
            </div>
            <div className="opening-hours">
              <Image src={SmartphoneWhiteImg} height="48px" width="48px" />
              <h4>Время работы</h4>
              <div
                dangerouslySetInnerHTML={{
                  __html: timeOpen,
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
