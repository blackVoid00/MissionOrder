import React from 'react';
import * as IoIcons from 'react-icons/io';

import * as BiIcons from 'react-icons/bi';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from 'react-icons/gi';
export const SidebarData = [
  {
    title:"Acceuil",
    path:"/app",
    icon:<AiIcons.AiOutlineHome/>
  },
  {
    title: 'Utilisateurs',
    path: '/userlist',
    icon: <BiIcons.BiUser />,
    iconClosed: <AiIcons.AiOutlinePlus />,
    iconOpened: <BiIcons.BiMinus />,

    subNav: [
     
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
        title: 'Liste Mission User',
        path: '/listmsUser',
        icon: <AiIcons.AiFillFileAdd />
      },
      {
        title: 'Stats Mission',
        path: '/app',
        icon: <AiIcons.AiOutlineAreaChart />
      },
      
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
        title: 'Operations Diverses',
        path: '/alimentation',
        icon: <FaIcons.FaCashRegister/>
      },
      {
        title: 'Caisse du mois',
        path: '/caisse',
        icon: <GiIcons.GiCash/>
      }
    ]
  }
];
