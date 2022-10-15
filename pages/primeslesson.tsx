import React from "react";
import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "../styles/Home.module.css";
import { StyleRegistry } from "styled-jsx";
import GameOfPrimes from "./gameofprimes";

const PrimeLesson: NextPage = () => {
  return (
    <>
    {/* <div className={styles.primeone}>29</div> */}
    {/* <div className={styles.form__field}>
  <input type="input" className={styles.form__field} placeholder="Name" name="name" id='name' required />
  <label className={styles.form__label}>Name</label>
</div> */}

      <div className={styles.site}>
        {/* <div className={styles.sidebar}>
          <h3 className={styles.title}>Trending Articles</h3>
          <div className={styles.title}>Entropy</div>
          <div className={styles.title}>Entropy</div>
          <div className={styles.title}>Entropy</div>
          <div className={styles.title}>Entropy</div>
          <div className={styles.title}>Entropy</div>
          <div className={styles.title}>Entropy</div>

        </div> */}
        <img className={styles.orbit1}src="/orbit1.svg" alt="" width={500} height={500}/>

          <img className={styles.orbit2}src="/orbit1.svg" alt="" width={500} height={500}/>
          <img className={styles.orbit3}src="/orbit1.svg" alt="" width={500} height={500}/>

    <div className={styles.page}>
          

      <div className={styles.box}>
      
      <div><h1 className={styles.title}>Prime numbers.</h1></div>
      <div className={styles.textpart}>
        A natural number greater than 1 that is not a product of two smaller
        natural numbers.
      </div>
      <img className={styles.image} src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Prime_number_theorem_ratio_convergence.svg/300px-Prime_number_theorem_ratio_convergence.svg.png" alt="prime"></img>
      <div className={styles.textpart}>
      The prime number theorem was first proved in 1896 by Jacques Hadamard 
      and by Charles de la Vallée Poussin independently, using properties of the Riemann zeta function introduced by Riemann in 1859.
      </div>
      <div className={styles.page}>
      <img className={styles.zetaimage} src="http://theoryofeverything.org/theToE/wp-content/uploads/2016/04/RiemannZeta_Zeros.svg_-1.png" alt="prime"></img>
      <img className={styles.zetaimage} src = "https://miro.medium.com/max/1400/1*e49bbFKLSNSDcRTBxz-OGw.png"></img>
      </div>
    <div className={styles.textpart}>The Riemann zeta function plays a pivotal role in analytic number theory, and has applications in physics, probability theory, and applied statistics.

Leonhard Euler first introduced and studied the function over the reals in the first half of the eighteenth century. Bernhard Riemann's 1859 article "On the Number of Primes Less Than a Given Magnitude" extended the Euler definition to a complex variable, proved its continuation and functional equation, and established a relation between its zeros and the distribution of prime numbers. </div>
<div className={styles.textpart}>This paper also contained the Riemann hypothesis, a conjecture about the distribution of complex zeros of the Riemann zeta function that is considered by many mathematicians to be the most important unsolved problem in pure mathematics.</div>
<div className={styles.textpart}>
      It is said that the zeros lie on a critical line, and proving this would dive deeper into our understanding of all prime numbers. Solve it and you'll win one million dollars!
      </div>
      <img className={styles.zetaimage} src="https://miro.medium.com/max/1152/1*iA6jXRxu3qMPfwV79C8ifQ.png"></img>
      <div className={styles.textpart}>
      How good are you at spotting primes? Click the prime number.
      </div>
      
<GameOfPrimes />

  </div>
 
  </div>
      </div>
    </>
  );
};

export default PrimeLesson;
