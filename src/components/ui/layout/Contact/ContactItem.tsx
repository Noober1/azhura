import { Contact } from "@/lib/constants";
import styles from "./Contact.module.css";
import React from "react";
import { Card, CardBody, Link } from "@nextui-org/react";
import NextLink from "next/link";

interface ContactItemProps extends Contact {}

const ContactItem = (props: ContactItemProps) => {
  return (
    <Link
      as={NextLink}
      href={props.link}
      target="_blank"
      className={styles.link}
    >
      <div className={styles.contactItem}>
        <div className={styles.contactItemWrapper}>
          <div className={styles.contactIcon}>
            {props.icon({ size: "3rem" })}
          </div>
          <div className={styles.contactInfo}>
            <h3>{props.label}</h3>
            <p>{props.desc}</p>
          </div>
          <div className="absolute opacity-25 -top-6 right-0">
            {props.icon({ size: "6.5rem" })}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ContactItem;
