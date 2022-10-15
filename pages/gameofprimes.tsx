import React from "react";
import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "../styles/Home.module.css";

const GameOfPrimes: NextPage = () => {
  const composites = [
    9, 15, 21, 25, 27, 33, 35, 39, 45, 49, 51, 55, 57, 63, 65, 69, 75, 77, 81,
    85, 87, 91, 93, 95, 99, 105, 111, 115, 117, 119, 121, 123, 125, 129, 133,
    135, 141, 143, 145, 147, 153, 155, 159, 161, 165, 169, 171, 175, 177, 183,
    185, 187, 189, 195, 201, 203, 205, 207, 209, 213, 215, 217, 219, 221, 225,
    231, 235, 237, 243, 245, 247, 249, 253, 255, 259, 261, 265, 267, 273, 275,
    279, 285, 287, 289, 291, 295, 297, 299, 301, 303, 305, 309, 315, 319, 321,
    323, 325, 327, 329, 333, 335, 339, 341, 343, 345, 351, 355, 357, 361, 363,
    365, 369, 371, 375, 377, 381, 385, 387, 391, 393, 395, 399, 403, 405, 407,
    411, 413, 415, 417, 423, 425, 427, 429, 435, 437, 441, 445, 447, 451, 453,
    455, 459, 465, 469, 471, 473, 475, 477, 481, 483, 485, 489, 493, 495, 497,
    501, 505, 507, 511, 513, 515, 517, 519, 525, 527, 529, 531, 533, 535, 537,
    539, 543, 545, 549, 551, 553, 555, 559, 561, 565, 567, 573, 575, 579, 581,
    583, 585, 589, 591, 595, 597, 603, 605, 609, 611, 615, 621, 623, 625, 627,
    629, 633, 635, 637, 639, 645, 649, 651, 655, 657, 663, 665, 667, 669, 671,
    675, 679, 681, 685, 687, 689, 693, 695, 697, 699, 703, 705, 707, 711, 713,
    715, 717, 721, 723, 725, 729, 731, 735, 737, 741, 745, 747, 749, 753, 755,
    759, 763, 765, 767, 771, 775, 777, 779, 781, 783, 785, 789, 791, 793, 795,
    799, 801, 803, 805, 807, 813, 815, 817, 819, 825, 831, 833, 835, 837, 841,
    843, 845, 847, 849, 851, 855, 861, 865, 867, 869, 871, 873, 875, 879, 885,
    889, 891, 893, 895, 897, 899, 901, 903, 905, 909, 913, 915, 917, 921, 923,
    925, 927, 931, 933, 935, 939, 943, 945, 949, 951, 955, 957, 959, 961, 963,
    965, 969, 973, 975, 979, 981, 985, 987, 989, 993, 995, 999,
  ];

  const primes = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
    157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233,
    239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317,
    331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419,
    421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503,
    509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607,
    613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701,
    709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811,
    821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911,
    919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997,
  ];

  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [key, setKey] = useState(0);

  let firstButtonValue = 0;
  let secondButtonValue = 0;

  let isFirstPrime = Math.round(Math.random() * 2) == 1;

  if (isFirstPrime) {
    firstButtonValue = primes[Math.round((score + 1) * 10 * Math.random())];
    secondButtonValue =
      composites[Math.round((score + 1) * 10 * Math.random())];
  } else {
    secondButtonValue = primes[Math.round((score + 1) * 10 * Math.random())];
    firstButtonValue = composites[Math.round((score + 1) * 10 * Math.random())];
  }

  return (
    <>

        <div className={styles.container}>
          <div className={styles.score}>{score}</div>
          {/* <div className={styles.timer}>
          <CountdownCircleTimer
            isPlaying={gameStarted}
            size={200}
            strokeWidth={20}
            duration={2}
            key={key}
            colors={["#004777", "#F7B801", "#ffffff", "#ffffff"]}
            colorsTime={[7, 5, 2, 0]}
            onComplete={() => {
              setScore(0);
              
            }}
          />
        </div> */}

          <div className={styles.game}>
            <div className={styles.buttons}>
              <button
                className={styles.button53}
                role="button"
                onClick={() => {
                  if (isFirstPrime) setScore(score + 1);
                  else setScore(0);

                  setKey((prevKey) => prevKey + 1);
                }}
              >
                {firstButtonValue}
              </button>
              <button
                className={styles.button53}
                role="button"
                onClick={() => {
                  if (!isFirstPrime) setScore(score + 1);
                  else setScore(0);

                  setKey((prevKey) => prevKey + 1);
                }}
              >
                {secondButtonValue}
              </button>
            </div>
          </div>
          {/* <div className={styles.start}> <button className={styles.button53} role="button" onClick={() => {
            setGameStarted(true)
            setKey(prevKey => prevKey + 1)
          }}>Start</button></div> */}
          </div>
    </>
  );
};

export default GameOfPrimes;
