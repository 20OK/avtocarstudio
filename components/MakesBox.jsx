import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const MakesBox = ({ makes }) => {
  const [isShowBtn, setIsShowBtn] = useState(false);
  const [isFullList, setIsFullList] = useState(false);
  const [fullHeight, setFullHeight] = useState(null);
  const makesListRef = useRef();
  const makesUlRef = useRef();

  const checkHasBtn = () => {
    const lis = makesUlRef.current.querySelectorAll('li');

    setFullHeight(makesUlRef.current?.offsetHeight);

    makesListRef.current.style.maxHeight = `${lis[0].offsetHeight}px`;

    if (window.matchMedia('(max-width: 480px)').matches) {
      makesListRef.current.style.maxHeight = `${
        lis[0].offsetHeight + (lis[4] ? lis[4].offsetHeight : 0) + 15
      }px`;
    }

    // + 20 px - погрешность
    setIsShowBtn(
      makesListRef.current.offsetHeight + 20 < makesUlRef.current.offsetHeight
    );
  };

  useEffect(() => {
    if (!isFullList) {
      window.addEventListener('resize', checkHasBtn);
    } else {
      window.removeEventListener('resize', checkHasBtn);

      if (makesListRef.current) {
        makesListRef.current.addEventListener(
          'transitionend',
          () => (makesListRef.current.style.maxHeight = 'none')
        );
      }
    }

    return () => {
      window.removeEventListener('resize', checkHasBtn);
    };
  }, [isFullList]);

  useEffect(() => {
    setIsFullList(false);

    checkHasBtn();
    // иногда высота не успевает установится неверно, для этого обновляется еще раз
    setTimeout(checkHasBtn, 100);
  }, [makes]);

  const className = classNames({
    ['sto-card__makes']: true,
    ['sto-card__makes--show-more']: isShowBtn,
    ['sto-card__makes--full-list']: isFullList,
  });

  return (
    <div className={className}>
      <div
        className="sto-card__makes__list"
        ref={makesListRef}
        data-full-height={`${fullHeight}px`}
      >
        <ul ref={makesUlRef}>
          {makes.map((make) => (
            <li key={make.id}>
              <div>
                {make.logo ? (
                  <img src={make.logo?.uri} alt={make.link} />
                ) : (
                  <span className="sto-card__makes_no-img" />
                )}
              </div>
              <span className="sto-card__makes__name">{make.name}</span>
            </li>
          ))}
        </ul>
      </div>
      {isShowBtn && (
        <div
          className="sto-card__makes__btn"
          role="button"
          onClick={() => {
            makesListRef.current.style.maxHeight = `${fullHeight}px`;
            setIsFullList(true);
          }}
        >
          Ещё
        </div>
      )}
    </div>
  );
};

MakesBox.propTypes = {
  makes: PropTypes.array.isRequired,
};

export default MakesBox;
