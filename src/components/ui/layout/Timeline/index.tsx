"use client";

import { motion, MotionValue, useMotionValueEvent } from "framer-motion";
import styles from "./Timeline.module.css";
import { forwardRef, Ref, useImperativeHandle, useRef } from "react";

interface TimelineProps {
  months: string[];
  scroll: MotionValue<number>;
}

export interface Handles extends Partial<HTMLDivElement> {
  fullScroll: number;
}

const Timeline = ({ months, scroll }: TimelineProps, ref: Ref<Handles>) => {
  const Lines = () => {
    return (
      <>
        {months.map((item, index) => {
          const label = item.split(" ");
          return (
            <td key={index}>
              <div>
                {label[0] === "January" ? (
                  <label className={styles.yearLabel}>{label[1]}</label>
                ) : (
                  <>
                    <label className={styles.dots} />
                    <div className={styles.monthLabel}>
                      {label[0].substring(0, 3)}
                    </div>
                  </>
                )}
              </div>
            </td>
          );
        })}
      </>
    );
  };

  const entah = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scroll, "change", (value) => {
    if (entah.current) {
      entah.current.scrollLeft = value;
    }
  });

  useImperativeHandle(ref, () => ({
    fullScroll: entah.current ? entah.current.scrollWidth : 0,
  }));

  return (
    <motion.div ref={entah} className={styles.main}>
      <table>
        <tbody>
          <tr className={styles.education}>
            <td colSpan={6} />
            <td colSpan={12 * 3 - 1} className={styles.itemWrapper}>
              <div>
                <section>
                  <header>
                    <h3>SMK Bina Taruna Jalancagak</h3>
                    <time>July 2012 - June 2015</time>
                  </header>
                  <p>Teknik Komputer dan Jaringan(TKJ)</p>
                </section>
              </div>
            </td>
            <td />
            <td colSpan={12 * 4} className={styles.itemWrapper}>
              <div>
                <section>
                  <header>
                    <h3>STMIK Subang</h3>
                    <time>September 2017 - 2021</time>
                  </header>
                  <p>Sistem Informasi (SI)</p>
                </section>
              </div>
            </td>
            <td colSpan={3} />
            <td colSpan={30} className={styles.itemWrapper}>
              <div>
                <section>
                  <header>
                    <h3>Entah</h3>
                  </header>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus necessitatibus sit quisquam, cupiditate in
                    exercitationem.
                  </p>
                </section>
              </div>
            </td>
          </tr>
          <tr className={styles.line}>
            <Lines />
          </tr>
          <tr className={styles.education}>
            <td colSpan={42} className={styles.itemWrapper}>
              <div>
                <section>
                  <header>
                    <h3>Part-time</h3>
                    <time>January 2012 - June 2015</time>
                  </header>
                  <p>Life as a blogger</p>
                </section>
              </div>
            </td>
            <td colSpan={8} />
            <td colSpan={12 * 6 + 6} className={styles.itemWrapper}>
              <div>
                <section>
                  <header>
                    <h3>SMK Bina Taruna Jalancagak</h3>
                    <time>January 2017 - August 2022</time>
                  </header>
                  <p>Teknik Komputer dan Jaringan(TKJ)</p>
                </section>
              </div>
            </td>
            <td colSpan={999} className={styles.itemWrapper}>
              <div>
                <section>
                  <header>
                    <h3>Freelancer</h3>
                    <time>August 2022 - Present</time>
                  </header>
                  <p>Full-stack developer</p>
                </section>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </motion.div>
  );
};

export default forwardRef(Timeline);
