'use client';
import Image from 'next/image';
import Logo from '../assets/logo.svg';
import Movies from '../assets/icon-nav-movies.svg';
import TvSeries from '../assets/icon-nav-tv-series.svg';
import Bookmarked from '../assets/icon-nav-bookmark.svg';
import Home from '../assets/icon-nav-home.svg';
import Avatar from '../assets/image-avatar.png';
import Link from 'next/link';

export default function Nav() {
  return (
    <div className="bg-blue_1 h-[10vh] lg:h-[90vh] lg:w-[96px] flex lg:flex-col items-center justify-between px-3 lg:py-3 sm:m-5 sm:rounded-md">
      <div>
        <Image
          src={Logo}
          alt="logo"
          width={25}
          height={20}
          className="sm:w-[32px] sm:h-[25px] autoSize"
        />
      </div>
      <div className="flex items-center lg:flex-col gap-5">
        <Link href="/">
          <Image
            src={Home}
            width={25}
            height={20}
            className="sm:w-[32px] sm:h-[25px] autoSize"
            alt="home"
          />
        </Link>
        <Link href="/movies">
          <Image
            src={Movies}
            width={25}
            height={20}
            className="sm:w-[32px] sm:h-[25px] autoSize"
            alt="home"
          />
        </Link>
        <Link href="/tvseries">
          <Image
            src={TvSeries}
            width={25}
            height={20}
            className="sm:w-[32px] sm:h-[25px] autoSize"
            alt="home"
          />
        </Link>
        <Link href="/bookmarked">
          <Image
            src={Bookmarked}
            width={25}
            height={20}
            className="sm:w-[32px] sm:h-[25px] autoSize"
            alt="home"
          />
        </Link>
      </div>
      <div>
        <Image
          src={Avatar}
          alt="avatar"
          width={25}
          height={25}
          className="sm:w-[32px] sm:h-[25px] autoSize"
          style={{
            border: '1px solid white',
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />
      </div>
    </div>
  );
}
