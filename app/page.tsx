import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>
        Portfolio <Sparkles size={24} style={{ verticalAlign: 'middle' }} />
      </h1>
      <p>Welcome to my portfolio site.</p>
      <button style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem' }}>
        Explore Projects <ArrowRight size={16} />
      </button>
    </main>
  );
}
