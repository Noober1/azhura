"use client";
import { contactList } from "@/lib/constants";
import SubtitleText from "../../text/SubtitleText";
import TextSplitBouncing from "../../text/TextSplitBouncing";
import styles from "./Contact.module.css";
import ContactItem from "./ContactItem";
import { motion, Variants } from "framer-motion";

const variants: Variants = {
  initial: {
    translateX: -30,
    opacity: 0,
  },
  animate: (index) => ({
    translateX: 0,
    opacity: 1,
    transition: {
      delay: index * 0.1,
    },
  }),
};

const ContactSection = () => {
  return (
    <section className={styles.main}>
      <header className={styles.title}>
        <h2>
          <TextSplitBouncing>Contact</TextSplitBouncing>
        </h2>
        <div className="flex justify-center mb-4 md:mb-8">
          <SubtitleText as="p">
            You can reach me with my these contacts below
          </SubtitleText>
        </div>
      </header>
      <div className={styles.contactWrapper}>
        {contactList.map((item, i) => (
          <motion.div
            whileInView="animate"
            initial="initial"
            variants={variants}
            custom={i}
            className={styles.contactItem}
            key={i}
            viewport={{
              once: true,
            }}
          >
            <ContactItem {...item} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
