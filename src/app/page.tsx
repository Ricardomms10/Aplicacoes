import Image from 'next/image';
import avatar from '../../public/assests/Avatar-Maker.png';
import styles from '../../styles/page.module.scss';
import BtnHeader from '../../components/BtnHeader';
import Card from '../../components/Card';
import { DataProject } from '../../components/DataProject';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Image alt='Meu avatar' src={avatar} width={150} />
        <h1> RICARDO MALTA </h1>
      </div>

      <BtnHeader />

      <div className={styles.boxP}>
        <p>
          Olá, sou o Ricardo, um desenvolvedor web apaixonado por criar experiências incríveis online.<br /> Tenho o prazer de compartilhar algumas das aplicações que desenvolvi. <br />Sinta-se à vontade para explorar e aproveitar ao máximo!
        </p>
      </div>
      <Card data={DataProject} />{/* Adicione a propriedade 'data' aqui */}
    </main>
  );
}
