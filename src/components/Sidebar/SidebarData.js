import React from 'react';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

export const SidebarData = [
  {
    title: 'Utilisateurs',
    path: '/userlist',
    icon: <BiIcons.BiUser />,
    iconClosed: <AiIcons.AiOutlinePlus />,
    iconOpened: <BiIcons.BiMinus />,

    subNav: [
      {
        title: 'Liste utilisateur',
        path: '/userlist',
        icon:<AiIcons.AiOutlineUnorderedList/>
      },
      {
        title: 'Compte Utilisateur',
        path: '/compteuser',
        icon: <FaIcons.FaRegMoneyBillAlt />
      },
      {
        title: 'Stats Utilisateur',
        path: '/app',
        icon: <AiIcons.AiOutlineAreaChart />
      }
   
    ]
  },
  {
    title: 'Bon Caisse',
    path: '/bcaisselist',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <AiIcons.AiOutlinePlus />,
    iconOpened: <BiIcons.BiMinus />,
    subNav: [
      
        {
          title: 'Creer BonCaisse',
          path: '/creerBs',
          icon: <AiIcons.AiOutlineFileAdd />
        },
        {
          title:'Liste Bon caisse',
          path:'/bcaisselist',
          icon:<AiIcons.AiOutlineUnorderedList/>
        },
        {
          title: 'Stats Bon Caisse',
          path: '/app',
          icon: <AiIcons.AiOutlineAreaChart />
        }
      ]
  },
  {
    title: 'Mission',
    path: '/missionlist',
    icon: <BiIcons.BiTask />,
    iconClosed: <AiIcons.AiOutlinePlus />,
    iconOpened: <BiIcons.BiMinus />,

    subNav: [
      {
        title: 'Stats Mission',
        path: '/app',
        icon: <AiIcons.AiOutlineAreaChart />
      },
      {
        title: 'Mission User',
        path: '/mission',
        icon: <AiIcons.AiOutlineAreaChart />
      }
    ]
  },
  {
    title: 'Caisse',
    path: '/app',
    icon: <BiIcons.BiCalculator />,
    iconClosed: <AiIcons.AiOutlinePlus />,
    iconOpened: <BiIcons.BiMinus />,
    subNav: [
      {
        title: 'Alimentation Caisse',
        path: '/app',
        icon: <FaIcons.FaCashRegister/>
      }
    ]
  }
];
