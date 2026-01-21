import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import useIsMobile from '../../hooks/useIsMobile';

function Hero() {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  
  const handleGetStarted = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    navigate('/services');
  };
  
  return (
    <div className={styles["hero-wrapper"]}>
      hello
    </div>
  )
}

function Home() {
  return (
    <>
      <div className={styles['home-wrapper']}>
        <Hero />
      </div>
    </>
  )
}

export default Home