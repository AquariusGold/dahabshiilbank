-- =====================================================
-- Dahabshiil Bank — Supabase RLS Setup
-- Run this in: Supabase Dashboard → SQL Editor
-- =====================================================

-- ─── 1. Enable Row Level Security on all tables ───

ALTER TABLE "User" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Account" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Transaction" ENABLE ROW LEVEL SECURITY;

-- ─── 2. User table policies ───────────────────────
-- Each user can only see and update their own profile row.
-- The User.id matches auth.users.id (UUID).

CREATE POLICY "Users: select own row"
  ON "User"
  FOR SELECT
  USING (auth.uid()::text = id);

CREATE POLICY "Users: update own row"
  ON "User"
  FOR UPDATE
  USING (auth.uid()::text = id)
  WITH CHECK (auth.uid()::text = id);

-- Allow INSERT only from server-side (service role bypasses RLS by default).
-- If you call Prisma from a server action with the service role key, no INSERT policy is needed.
-- Uncomment below ONLY if using the anon key for inserts:
-- CREATE POLICY "Users: insert own row"
--   ON "User"
--   FOR INSERT
--   WITH CHECK (auth.uid()::text = id);

-- ─── 3. Account table policies ────────────────────
-- Users can view and manage only accounts that belong to them.

CREATE POLICY "Accounts: select own"
  ON "Account"
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM "User"
      WHERE "User".id = "Account"."userId"
        AND auth.uid()::text = "User".id
    )
  );

CREATE POLICY "Accounts: insert own"
  ON "Account"
  FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM "User"
      WHERE "User".id = "Account"."userId"
        AND auth.uid()::text = "User".id
    )
  );

CREATE POLICY "Accounts: update own"
  ON "Account"
  FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM "User"
      WHERE "User".id = "Account"."userId"
        AND auth.uid()::text = "User".id
    )
  );

-- ─── 4. Transaction table policies ────────────────
-- Users can view transactions where they own either the source or destination account.

CREATE POLICY "Transactions: select own"
  ON "Transaction"
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM "Account"
      JOIN "User" ON "User".id = "Account"."userId"
      WHERE "Account".id IN ("Transaction"."fromAccountId", "Transaction"."toAccountId")
        AND auth.uid()::text = "User".id
    )
  );

-- ─── 5. Verify RLS is active ──────────────────────
-- Run this query to confirm RLS is enabled:
--
-- SELECT tablename, rowsecurity
-- FROM pg_tables
-- WHERE schemaname = 'public'
--   AND tablename IN ('User', 'Account', 'Transaction');
--
-- All rows should show rowsecurity = true
