import styles from "@/styles/Hub.module.css";
import { Phone, Mail, MapPin, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Support & Contact | Dahabshiil Bank",
  description: "Contact Dahabshiil Bank for support, general inquiries, and branch locations.",
};

export default function SupportPage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Contact & Support</h1>
        <p className={styles.subtitle}>
          Call, write or email. We’d love to hear from you.
        </p>
      </section>

      <section className={styles.content}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <Phone className={styles.cardIcon} size={40} />
            <h3 className={styles.cardTitle}>By Phone</h3>
            <p className={styles.cardDesc}>
              Call us on +252 65 300 002. <br/>
              Saturday to Thursday from 7:30 AM to 6:00 PM (UTC +3).
            </p>
          </div>
          <div className={styles.card}>
            <Mail className={styles.cardIcon} size={40} />
            <h3 className={styles.cardTitle}>Email Us</h3>
            <p className={styles.cardDesc}>
              For general inquiries, PR information, and support, email us at: <br/>
              <strong>Info@dahabshilbank.com</strong>
            </p>
          </div>
          <div className={styles.card}>
            <MapPin className={styles.cardIcon} size={40} />
            <h3 className={styles.cardTitle}>Branch Locator</h3>
            <p className={styles.cardDesc}>
              Dahabshiil Bank has extensive branches and agents across Somalia and Somaliland ready to serve you.
            </p>
          </div>
          <div className={styles.card}>
            <HelpCircle className={styles.cardIcon} size={40} />
            <h3 className={styles.cardTitle}>Frequently Asked Questions</h3>
            <p className={styles.cardDesc}>
              Find answers to all your queries about accounts, mastercards, investments, and digital platforms. Available securely and seamlessly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
