import React from 'react';
import Link from 'next/link'
import { Url } from 'url';
import { useRouter } from 'next/router'

interface NavLinkProps {
  href: string,
}

const NavLink: React.FC<NavLinkProps> = ({href, children}) => {
  const child = React.Children.only(children);
  const router = useRouter();

  return (
    <Link href={href}>
      {React.cloneElement(child, {
        "aria-current": router.pathname === href ? "page" : null
      })}
    </Link>
  );
};

export default NavLink;
