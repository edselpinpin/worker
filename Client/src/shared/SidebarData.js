import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <IoIcons.IoMdHome />,
        cName: 'nav-text',
    },

    {
        title: 'Work Order',
        path: '/workorder',
        icon: <IoIcons.IoMdCreate />,
        cName: 'nav-text',
    },

    {
        title: 'Invoice Work Order',
        path: '/invoice',
        icon: <FaIcons.FaBoxOpen />,
        cName: 'nav-text',
    },

    
    {
        title: 'Maintenance',
        path: '/maintenance',
        icon: <FaIcons.FaBoxOpen />,
        cName: 'nav-text',
    },
    


    {
        title: 'Customer',
        path: '/customer',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text',
    },

    {
        title: 'Service Menu',
        path: '/service',
        icon: <FaIcons.FaBoxOpen />,
        cName: 'nav-text',
    },

    {
        title: 'Technicians',
        path: '/technician',
        icon: <IoIcons.IoMdPerson />,
        cName: 'nav-text',
    },

    {
        title: 'Category',
        path: '/category',
        icon: <IoIcons.IoMdPerson />,
        cName: 'nav-text',
    },

    {
        title: 'System Setting',
        path: '/settings',
        icon: <AiIcons.AiOutlineSetting />,
        cName: 'nav-text',
    },


    

]
