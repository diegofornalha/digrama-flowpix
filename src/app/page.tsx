"use client";

import { redirect } from 'next/navigation';

export default function Home() {
  // Redirecionamento direto sem useEffect
  redirect('/diagrama/mcpx/v0');
  
  // Nunca será renderizado devido ao redirecionamento
  return null;
}
