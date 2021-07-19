import Image from 'next/image';
import Nav from './Nav';
import Phones from './Phones';

export default function TopPanel({ logoTitle, phones }) {
  return (
    <div className="sto-lp__top-panel top-panel top-panel--fixed">
      <div className="sto-lp__top-panel container">
        <div class="top-panel__wrap">
          <div className="top-panel__logo logo">
            <div className="logo__img">
              <img
                src="/img/logo.svg"
                alt="logo"
                className="sto-lp__logo logo"
              />
            </div>
            <div className="logo__title">{logoTitle}</div>
          </div>
          <Nav homePage="lp" />
          <div className="top-panel__phones phones">
            <i>
              <img src="/img/smartphone.svg" alt="" />
            </i>
            <hr />
            <Phones phones={phones} />
          </div>
        </div>
      </div>
    </div>
  );
}
