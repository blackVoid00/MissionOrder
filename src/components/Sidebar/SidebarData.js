import React from 'react';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi';

export const SidebarData = [
  {
    title: 'Utilisateurs',
    path: '/creerms',
    icon: <BiIcons.BiUser />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Fiche Profil',
        path: '/',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Liste utilisateur',
        path: '/',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Compte Utilisateur',
        path: '/',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Bon Caisse',
    path: '/CreerBs',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
        {
          title: 'Libellé',
          path: '',
          icon: <IoIcons.IoIosPaper />
        },
        {
          title: 'Creer BonCaisse',
          path: '',
          icon: <IoIcons.IoIosPaper />
        }
      ]
  },
  {
    title: 'Mission',
    path: '/creerMs',
    icon: <BiIcons.BiTask />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Libellé',
        path: '',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Creer Mission',
        path: '/',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Caisse',
    path: '/',
    icon: <BiIcons.BiCalculator />
  }
];
