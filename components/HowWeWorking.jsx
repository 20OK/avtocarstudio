import Image from 'next/image';
import StoRequestImg from '/img/sto_request.svg';
import StoRepairImg from '/img/sto_repair.svg';
import StoResultImg from '/img/sto_result.svg';
import StoAppointmentImg from '/img/sto_appointment.svg';

export default function HowWeWorking() {
  return (
    <>
      <div className="menu-line" id="how-we-working"></div>
      <section className="how-we-working">
        <div className="container">
          <h2>Как мы работаем</h2>
          {/* TODO: тут точно можно сделать посематичнее тип, для этого есть специалные блоки */}
          <ul>
            <li>
              <Image height="120" width="120" src={StoRequestImg} />
              <h3>Заявка</h3>
              <div>Вы оставляете заявку на ремонт по телефону.</div>
            </li>
            <li>
              <Image height="120" width="120" src={StoAppointmentImg} />
              <h3>Запись</h3>
              <div>Определяем дату, время и стоимость ремонта..</div>
            </li>
            <li>
              <Image height="120" width="120" src={StoRepairImg} />
              <h3>Ремонт</h3>
              <div>
                Ремонтируем ваш автомобиль или проводим
                диагностику/профилактику.
              </div>
            </li>
            <li>
              <Image height="120" width="120" src={StoResultImg} />
              <h3>Результат</h3>
              <div>Вы проверяете работу и оплачиваете ее</div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
