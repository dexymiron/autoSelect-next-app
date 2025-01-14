import React from 'react';
import { Carousel, ConfigProvider} from 'antd';
import n from './CarSlider.module.css';
import Image from 'next/image';

const contentStyle: React.CSSProperties = {
  margin: 0,
  textAlign: 'center',
  background: '#364d79',
  position: 'relative',
};

const CarSlider: React.FC = () => {
  return (
  <div className={n.slider}>
    <ConfigProvider
      theme={{
        components: {
          Carousel: {
            arrowSize: 30,
            arrowOffset: 20,
          },
        },
      }}
    >
      <Carousel arrows infinite={true} autoplay={true} effect={'fade'} speed={2000}>
        <div style={contentStyle}>
          <div className={n.slideText}>
            <p>ПІД КЛЮЧ</p>
            <div className={n.btnsContainer}>
              <button className={n.btnLeft}>ВІД 450$</button>
              <button className={n.btnRight}>ЗАМОВИТИ</button>
            </div>
            <hr className={n.line}/>
          </div>
          <div className={n.overlay}></div>
          <Image src="/bmw.webp" alt='bmw' height={700} width={2000} style={{ objectFit: 'cover'}}/>
        </div>
        <div style={contentStyle}>
          <div className={n.slideText}>
            <p>РАЗОВИЙ ОГЛЯД</p>
            <div className={n.btnsContainer}>
              <button className={n.btnLeft}>від 1500-3000 ГРН</button>
              <button className={n.btnRight}>ЗАМОВИТИ</button>
            </div>
            <hr className={n.line}/>
          </div>
          <div className={n.overlay}></div>
          <Image src="/golf.webp" alt='bmw' height={700} width={2000} style={{ objectFit: 'cover' }}/>
        </div>
        <div style={contentStyle}>
          <div className={n.slideText}>
            <p>ОЦІНКА ПЕРЕД ПРОДАЖЕМ</p>
            <div className={n.btnsContainer}>
              <button className={n.btnLeft}>2000 ГРН</button>
              <button className={n.btnRight}>ЗАМОВИТИ</button>
            </div>
            <hr className={n.line}/>
          </div>
          <div className={n.overlay}></div>
          <Image src="/wheelMB.webp" alt='bmw' height={700} width={2000} style={{ objectFit: 'cover' }}/>
        </div>
      </Carousel>
    </ConfigProvider>
  </div>
  )
}

export default CarSlider;