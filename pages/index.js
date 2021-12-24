import styles from '../styles/Home.module.css'
import Inicio from '../components/Inicio';
import CarruselBoots from '../components/CarruselBoots';
import Head from 'next/head';

export default function Home() {

  return (
    
    <div className={styles.container}>
      <Head><title>Sebastian | Lotería</title></Head>

      <CarruselBoots />

      <Inicio />
   
    </div>
  );
};
