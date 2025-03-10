import React from 'react';
import IconTv from '../../public/images/icon-nav-tv-series.svg';
import IconMovies from '../../public/images/icon-nav-movies.svg';
import IconHome from '../../public/images/icon-nav-home.svg';
import IconBookmark from '../../public/images/icon-nav-bookmark.svg';
import Logo from '../../public/images/logo.svg';
import Link from 'next/link';
import Avatar from '../../public/images/image-avatar.png';
import Image from 'next/image';
export default function Header() {
  return (
    <header className="flex lg:flex-col items-center justify-between px-4 lg:p-4 bg-design-4 h-14 lg:min-h-screen lg:h-screen lg:rounded-lg">
      <div>
        <Link href="/">
          <Image src={Logo} alt="logo image" />
        </Link>
      </div>
      <nav>
        <ul className="flex items-center lg:flex-col gap-2">
          <li>
            <Link href="/">
              <Image src={IconHome} alt="icon image" />
            </Link>
          </li>
          <li>
            <Link href="movies">
              <Image src={IconMovies} alt="icon image" />
            </Link>
          </li>
          <li>
            <Link href="tv-series">
              <Image src={IconTv} alt="icon image" />
            </Link>
          </li>
          <li>
            <Link href="bookmarked">
              <Image src={IconBookmark} alt="icon image" />
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <Image src={Avatar} alt="avatar image" width={24} height={24} />
      </div>
    </header>
  );
}
