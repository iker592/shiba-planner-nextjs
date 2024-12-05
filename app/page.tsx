'use client';

import { Header } from '@/components/Header';
import { Timeline } from '@/components/Timeline';
import { ShibaCompanion } from '@/components/ShibaCompanion';

export default function Home() {
  return (
    <main>
      <Header />
      <Timeline />
      <ShibaCompanion />
    </main>
  );
}