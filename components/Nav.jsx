import React from 'react';

const MenuItem = ({ title, currentItem, anchor, onClick, id }) => {
  return (
    <li
      className={currentItem == id ? 'active' : ''}
      onClick={() => onClick(id)}
    >
      <a href={`#${anchor}`}>{title}</a>
    </li>
  );
};

const Menu = ({ homePage }) => {
  const [currentItem, setCurrentItem] = React.useState(1);

  const onClick = (id) => setCurrentItem(id);

  return (
    <ul className="top-panel__menu">
      <MenuItem
        title="ГЛАВНАЯ"
        anchor="sto-lp"
        currentItem={currentItem}
        onClick={onClick}
        id={1}
      />
      <MenuItem
        title="УСЛУГИ"
        anchor="services"
        currentItem={currentItem}
        onClick={onClick}
        id={2}
      />
      <MenuItem
        title="О НАС"
        anchor="about"
        currentItem={currentItem}
        onClick={onClick}
        id={3}
      />
      <MenuItem
        title="КАК МЫ РАБОТАЕМ"
        anchor="how-we-working"
        currentItem={currentItem}
        onClick={onClick}
        id={4}
      />
      <MenuItem
        title="КОНТАКТЫ"
        anchor="how-find"
        currentItem={currentItem}
        onClick={onClick}
        id={5}
      />
    </ul>
  );
};

export default Menu;
