"use client";

import Link from "next/link";

export const Header = () => {
  const externalUrl = process.env.NEXT_PUBLIC_LIVEPIX_REDIRECT_URL;

  if (!externalUrl) return null;

  return (
    <header>
      <div />

      <nav>
        <ol className="flex justify-end items-center p-5 gap-4">
          <li>
            <Link target="_blank" href={externalUrl}>
              Apoiar
            </Link>
          </li>

          <li>
            <Link href={`${process.env.NEXT_PUBLIC_LIVEPIX_URL}`}>Github</Link>
          </li>
        </ol>
      </nav>
    </header>
  );
};
