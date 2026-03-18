import Link from 'next/link'
import styles from '../auth.module.css'

export default function ConfirmPage() {
  return (
    <div className={styles.authPage}>
      <div className={styles.card} style={{ textAlign: 'center' }}>
        <div className={styles.logo} style={{ justifyContent: 'center' }}>
          <div className={styles.logoIcon}>D</div>
          <div className={styles.logoText}>
            Dahabshiil Bank
            <span>Online Banking</span>
          </div>
        </div>

        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✉️</div>

        <div className={styles.header} style={{ textAlign: 'center' }}>
          <h1 className={styles.title}>Check your email</h1>
          <p className={styles.subtitle}>
            We sent a confirmation link to your email address.<br />
            Click the link to activate your account and then sign in.
          </p>
        </div>

        <div className={styles.footer} style={{ marginTop: '2rem' }}>
          <Link href="/auth/login">Back to sign in</Link>
        </div>
      </div>
    </div>
  )
}
