'use client'
import CarSlider from "@/components/Utils/CarSlider";
import styles from "./page.module.css";
import { useDispatch } from "react-redux";
import { togglePopUp } from "@/redux/popUpFormSlice";

export default function Home() {

  const dispatch = useDispatch();
  const handleInputChange = () => {
    dispatch(togglePopUp());
  }

  return (
    <>
    <div className={styles.page}>
      <div className={styles.ticker}>
        <div>
          <span className={styles.tickerTitle}>Працюємо в таких містах:</span>
          <span className={styles.tickerText}>
            Дніпро &nbsp; Київ &nbsp; Івано-Франківськ &nbsp; Чернігів &nbsp; Харків &nbsp; Вінниця &nbsp; Полтава &nbsp; Житомир &nbsp; Запоріжжя &nbsp; Луцьк
          </span>
          </div>
      </div>
      <div className={styles.CarSliderContainer}>
        <CarSlider/>
      </div>
      <section className={styles.whoWeAreContainer}>
        <h1 className={styles.whoWeAreTitle}>Що таке автопідбір?</h1>
        <div className={styles.topLine}></div>
        <div className={styles.leftRigthBlocksContainer}>
          <article>
            <h2 className={styles.titleHeaders}>
              Визначення автопідбору
            </h2>
            <p className={styles.articleTexts}>Автопідбір є сферою послуг оцінки стану автомобіля тим самим допом
              агає Вам придбати авто більш безпечно і прозоро. 
              Наша команда експертів порекомендує лише найкращий варіант із п
              ропозицій на ринку за Вашими критеріями вибору та рамках бюджету.
            </p>

            <button className={styles.orderBtn} onClick={() => handleInputChange()}>Замовити</button>

          </article>
          <article>
            <div>
              <h2 className={styles.titleHeaders}>ІНДИВІДУАЛЬНИЙ ПІДХІД ДО КЛІЄНТА</h2>
              <p className={styles.articleTexts}>
                Одним із чимало важливих факторів при виборі автомоб
                іля є його комплектація, при підборі враховуються всі кр
                итерії вибору, озвучені клієнтом, такі як наповнення ш
                татними системами, колір автомобіля, технічні хара
                ктеристики, тип трансмісії/двигуна та безліч додаткових параметрів.
              </p>
              <hr className={styles.lines}/>
            </div>
            <div>
              <h2 className={styles.titleHeaders}>ДОВІРА ТА ВІДПОВІДАЛЬНІСТЬ</h2>
              <p className={styles.articleTexts}>
                Нам довіряють тисячі клієнтів, а це дуже сильна мотивація тримати планку професіоналізму та якісного обслуговування на найвищому рівні!
              </p>
              <hr className={styles.lines}/>
            </div>
            <div>
              <h2 className={styles.titleHeaders}>ТІЛЬКИ КРАЩІ АВТО</h2>
              <p className={styles.articleTexts}>
              Завдання підбору полягає в пошуку не найдешевшого, а найкращого варіанту продажу на момент виконання робіт за Вашим запитом.
              </p>
              <hr className={styles.lines}/>
            </div>
          </article>
        </div>
      </section>
    </div>
    </>
  );
}
