import React from 'react'
import ListaConsulta from '../../components.js/listaDeconsultas/ListaConsulta'
import AdminSidebar from '../../components.js/siddebar/AdminSidebar'

const ListaConsultaPage = () => {
    return (
        <div>
            <AdminSidebar
                componente={<ListaConsulta />}
            />
        </div>
    )
}

export default ListaConsultaPage
