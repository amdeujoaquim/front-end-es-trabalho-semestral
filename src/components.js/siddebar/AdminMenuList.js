
import React from 'react';
import { CgUserList, CgPlayListRemove } from "react-icons/cg";
import DashboardIcon from '@material-ui/icons/Dashboard';
import ListIcon from '@material-ui/icons/List';
import { MdOutlineVolunteerActivism } from "react-icons/md";
import PostAddIcon from '@material-ui/icons/PostAdd';


export const AdminMenuList = [
    {
        title: "Dashboard",
        url: "/home",
        icon: <DashboardIcon />,
        cName: "nav-text",
        id: 1
    },
    // {
    //     title: "Registar consulta",
    //     url: "/regist",
    //     icon: <PostAddIcon />,
    //     cName: "nav-text",
    //     id: 4
    // },
    {
        title: "Lista de consultas",
        url: "/listConsulta",
        icon: <ListIcon />,
        cName: "nav-text",
        id: 4
    },
    {
        title: "Adicionar users",
        url: "/registUser",
        icon: <CgUserList />,
        cName: "nav-text",
        id: 3
    }
]

export default AdminMenuList

