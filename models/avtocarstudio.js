import MakesList from '../staticData/MakesList.js';

export default {
  head: { title: 'Avtocarstudio Odessa' },
  header: {
    title: 'Avtocarstudio Odessa',
    subtitle:
      'Все виды технического обслуживания и ремонт транспортных средств.',
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
  timeOpen: `
    <p> ПН–ПТ 09:00–18:00</p>
    <p>СБ 10:00–17:00</p>
    <p>ВС Выходной</p>
  `,
  address:
    'Украина, Одесса, ул. Маршала Жукова, 34 авторынок «Победа», магазин 9',
  about: {
    title:
      'Автосервис ML Autoservice осуществляет профессиональный ремонт авто в Киеве',
    text: `
      <p>
        Мы выполняем все виды ремонтов, начиная от шиномонтажа и
        завершая заменой ремня ГРМ, ремонтом двигателя, КПП,
        топливной или тормозной системы. Все работы выполняют
        квалифицированные специалисты с большим опытом ремонтов
        различной сложности.
      </p>
      <p>
        При необходимости мы обеспечим срочный ремонт машины. Также
        мы осуществляем текущее техническое обслуживание и
        профессиональную диагностику авто в Киеве. Если вам
        понадобился ремонт машин в Киеве, мы выполним все работы на
        высшем уровне и восстановим техническое состояние вашего
        авто.
      </p>
      `,
  },
  phones: `
      <li>
        <span>+380 86 589-66-32</span>
        <i>
          <Image src={ViberSmIcon} />
        </i>
      </li>
      <li>
        <span>+380 86 589-66-32</span>
        <i>
          <Image src={TelegramSmIcon} />
        </i>
        <i>
          <Image src={WhatsappSmIcon} />
        </i>
      </li>
      <li>
        <span>+380 86 589-66-32</span>
      </li>`,
};
