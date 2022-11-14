import React from 'react';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi';
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';

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
          icon: <RiIcons.RiText />
        },
        {
          title: 'Creer BonCaisse',
          path: '',
          icon: <AiIcons.AiOutlineFileAdd />
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
        title: 'Creer Mission',
        path: '/',
        icon: <AiIcons.AiOutlineFileAdd />
      }
    ]
  },
  {
    title: 'Caisse',
    path: '/',
    icon: <BiIcons.BiCalculator />
  }
];
