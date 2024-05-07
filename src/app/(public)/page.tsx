'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    // Setup the interval
    const timer = setInterval(() => {
      if (counter > 0) {
        setCounter(counter - 1);
      } else {
        clearInterval(timer);
        window.location.href = 'https://tosalvo.ong.br';
      }
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-7xl font-extrabold tracking-tight">JUNTOS SOMOS MAIS FORTES!!!</h1>
        <p className="text-4xl">
          Decidimos unir forças e concentrar todas as informações em{' '}
          <strong className="text-blue-600 underline">
            <Link href="https://tosalvo.ong.br">tosalvo.ong.br</Link>
          </strong>
        </p>
        <p className="mt-5 text-xl">
          Redirecionando em <span className="font-semibold">{counter}</span> segundos...
        </p>
      </div>
    </div>
  );
}
