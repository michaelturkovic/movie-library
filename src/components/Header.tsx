import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { NavLink, Link } from 'react-router-dom';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiX, FiMenu, FiHeart } from 'react-icons/fi';
import { routes } from 'routes/config';
import { Button } from 'components/Button';
import { Container } from 'components/Container';
import { useMediaQuery } from 'hooks/useMediaQuery';
import logo from 'assets/logo.png';

export const Header: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    if (!isMobile) setIsOpen(false);
  }, [isMobile]);

  const mobileMenu = (
    <AnimatePresence>
      <motion.div
        className="absolute top-0 left-0 w-screen h-screen bg-white z-50"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        <Button
          className="absolute top-5 right-5"
          onClick={() => setIsOpen(false)}
        >
          <FiX className="h-7 w-7" />
        </Button>
        <ul className="h-full flex flex-col justify-center items-center">
          {routes.map((route, index) => (
            <motion.li
              key={index}
              className="py-5"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <NavLink
                end
                to={route.to}
                className={({ isActive }) =>
                  clsx(
                    'rounded-lg py-1 px-2 hover:opacity-50 text-xl font-medium',
                    {
                      'text-yellow-600': isActive,
                    }
                  )
                }
                onClick={() => setIsOpen(false)}
              >
                {route.label}
              </NavLink>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </AnimatePresence>
  );

  return (
    <header className="py-2">
      <Container>
        <nav className="z-50">
          <ul className="flex items-center justify-between">
            <li className="md:hidden">
              <Button onClick={() => setIsOpen((prev) => !prev)}>
                <FiMenu className="h-5 w-5" />
              </Button>
            </li>
            <li>
              <a href="/" className="">
                <img src={logo} alt="Logo" className="w-full h-8 " />
              </a>
            </li>
            <li className="hidden md:block">
              <ul className="flex">
                {routes.map((route, index) => (
                  <li key={index}>
                    <NavLink
                      end
                      to={route.to}
                      className={({ isActive }) =>
                        clsx(
                          'rounded-lg py-1 px-2 hover:opacity-70 text-sm uppercase font-medium',
                          {
                            'text-yellow-600': isActive,
                          }
                        )
                      }
                    >
                      {route.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
            <ul className="flex">
              <li>
                <Link to="/favorites">
                  <Button className="p-2">
                    <FiHeart className="h-5 w-5" />
                  </Button>
                </Link>
              </li>
              <li>
                <Button className="p-2">
                  <FiSearch className="h-5 w-5" />
                </Button>
              </li>
            </ul>
          </ul>
        </nav>
      </Container>
      {isOpen && createPortal(mobileMenu, document.body)}
    </header>
  );
};
