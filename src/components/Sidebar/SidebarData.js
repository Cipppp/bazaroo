import React from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { IoMdContact } from 'react-icons/io';
import { FiLogIn } from 'react-icons/fi';

export const SidebarData = [
    {
        title: 'Logare',
        path: '/login',
        icon: <FiLogIn />,
        cName: 'nav-text',
    },
    {
        title: 'Create cont',
        path: '/register',
        icon: <AiOutlineUserAdd />,
        cName: 'nav-text',
    },

    {
        title: 'Contact',
        path: '/contact',
        icon: <IoMdContact />,
        cName: 'nav-text',
    },
];
