'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import styles from './profile.module.css'

import type { User } from '@supabase/supabase-js'

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const supabase = createClient()
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) {
        router.push('/auth/login')
        return
      }
      setUser(user)
      setLoading(false)
    })
  }, [router])

  async function handleLogout() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  if (loading) {
    return (
      <div className={styles.profilePage}>
        <div className={styles.loadingState}>Loading profile…</div>
      </div>
    )
  }

  const fullName = user?.user_metadata?.full_name || 'User'
  const email = user?.email || ''
  const createdAt = user?.created_at
    ? new Date(user.created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '—'

  const initials = fullName
    .split(' ')
    .map((n: string) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  return (
    <div className={styles.profilePage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>My Profile</h1>
          <p className={styles.subtitle}>View and manage your account information</p>
        </div>

        <div className={styles.profileCard}>
          {/* Header with avatar */}
          <div className={styles.profileHeader}>
            <div className={styles.avatarLarge}>{initials}</div>
            <div>
              <div className={styles.profileName}>{fullName}</div>
              <div className={styles.profileEmail}>{email}</div>
            </div>
          </div>

          {/* Info Grid */}
          <div className={styles.infoGrid}>
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Full Name</span>
              <span className={styles.infoValue}>{fullName}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Email</span>
              <span className={styles.infoValue}>{email}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Member Since</span>
              <span className={styles.infoValue}>{createdAt}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Account ID</span>
              <span className={styles.infoValue} style={{ fontSize: '0.8rem', fontFamily: 'monospace' }}>
                {user?.id?.slice(0, 8)}…
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className={styles.actions}>
            <button className={styles.logoutBtn} onClick={handleLogout} id="profile-logout-btn">
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
