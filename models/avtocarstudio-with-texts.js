import MakesList from '../staticData/MakesList.js';

export default {
  head: { title: 'Avtocarstudio Odessa' },
  header: {
    title: 'Avtocarstudio Odessa',
    subtitle:
      'Кузовные работы на любой вкус. Деликатное восстановление, полная и подетальная покраска.',
  },
  categories: ['Независимый'],
  services: [
    { title: 'Плановое ТО', icon: '/img/electric.svg' },
    { title: 'Рихтовка', icon: '/img/engine.svg' },
    { title: 'Малярка', icon: '/img/plan-service.svg' },
    { title: 'Покраска', icon: '/img/fuel.svg' },
  ],
  makesList: MakesList.map((m) => ({
    id: m.Id,
    logo: { uri: m.Logo?.ImageUri },
    link: m.Link,
    name: m.Name,
  })),
  address: 'Украина, Одесса, 25 Чапаевской Дивизии 8/1',
  timeOpen: `
    <p>ПН-СБ 09:00–20:00</p>
    <p>ВС Выходной</p>
  `,
  about: {
    // title:
    //   'Автосервис ML Autoservice осуществляет профессиональный ремонт авто в Киеве',
    text: `
      <p>
        <b>Avtocarstudio Odessa</b> — это исчерпывающий ответ на вопрос, где заказать кузовные работы. В Одессе лучшие мастера малярки и рихтовки собрались у нас. Мы постоянно совершенствуемся и применяем все новшества малярно-рихтовочного комплекса, поэтому наш профессионализм постоянно растет. Для покраски мы используем только проверенные ремонтные системы и материалы лучших производителей. Знания, навыки и технические возможности — причина пятизвездочного качества наших услуг. Необходимо восстановить автомобиль или покрасить кузов? Мы добьемся лучшего результата из возможных.
      </p>

      `,
  },
  phones: `
    <li>
      <span>+380 99 372-42-04</span>
      <i>
        <img src="/img/viber_sm.svg" />
      </i>
      <i>
        <img src="/img/telegram_sm.svg" />
      </i>
      <i>
        <img src="/img/whatsapp_sm.svg" />
      </i>
    </li>
  `,
};
