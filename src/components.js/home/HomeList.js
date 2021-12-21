import React from 'react';
import { CgUserList, CgPlayListRemove } from "react-icons/cg";
import { FcTodoList } from "react-icons/fc";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import PostAddIcon from '@material-ui/icons/PostAdd';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AirlineSeatFlatIcon from '@material-ui/icons/AirlineSeatFlat';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import GroupAddIcon from '@material-ui/icons/GroupAdd';


export const HomeList = [

    {
        title: "Listar consultas marcadas",
        url: "/listConsulta",
        iconUrl: "/images/student-with-graduation-cap (2).png",
        icon: <FcTodoList style={{ width: 100, height: 100 }} />,
        id: 1
    },
    {
        title: "Adicionar Serviço",
        url: "/registservico",
        iconUrl: "/images/payment-check (1).png",
        icon: <LocalHospitalIcon style={{ width: 100, height: 100 }} />,
        id: 4
    },
    {
        title: "Adicionar Médico",
        url: "/registmedico",
        iconUrl: "/images/clipboard (1).png",
        icon: <PersonAddIcon style={{ width: 100, height: 100 }} />,
        id: 3
    },
    {
        title: "Adicionar utilizador",
        url: "/registUtilizador",
        iconUrl: "/images/payment-method.png",
        icon: <GroupAddIcon style={{ width: 100, height: 100 }} />,
        id: 2
    }

]
export default HomeList
