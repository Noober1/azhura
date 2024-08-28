"use client";
import { contactList } from "@/lib/constants";
import SubtitleText from "../../text/SubtitleText";
import TextSplitBouncing from "../../text/TextSplitBouncing";
import styles from "./Contact.module.css";
import ContactItem from "./ContactItem";

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
          <div className={styles.contactItem} key={i}>
            <ContactItem {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
