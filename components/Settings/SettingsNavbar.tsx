import Link from 'next/link';
import React from 'react';

const SettingsLinks = [
  {
    desc: 'Account Setting',
    link: '/settings',
  },
  {
    desc: 'Login & Security',
    link: '/not-found',
  },
  {
    desc: 'Language and Region',
    link: '/not-found',
  },
  {
    desc: 'Notifications',
    link: '/not-found',
  },
  {
    desc: 'Transaction',
    link: '/not-found',
  },
  {
    desc: 'Dark Mode',
    link: '/not-found',
  },
  {
    desc: 'Terms of Service',
    link: '/not-found',
  },
  {
    desc: 'Data Policy',
    link: '/not-found',
  },
];

const SettingsNavbar = () => {
  return (
    <nav className=' w-full items-center'>
      <ul style={{ listStyleType: 'none'}} className=' flex space-x-8 items-center pl-10 pt-[1%]'>
        {SettingsLinks.map(({ desc, link }) => (
          <li key={desc} style={{ marginBottom: '10px' }} className=' border-b'>
            <Link href={link} style={{ textDecoration: 'none', color: 'black' }} className=' font-body'>
              {desc}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SettingsNavbar;
