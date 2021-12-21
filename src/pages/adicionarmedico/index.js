import React from 'react'
import AdicionarMedico from '../../components.js/criarMedico/AdicionarMedico'
import AdminSidebar from '../../components.js/siddebar/AdminSidebar'

const AdicionarMedicoPage = () => {
    return (
        <div>
            <AdminSidebar
                componente={<AdicionarMedico />}
            />
        </div>
    )
}

export default AdicionarMedicoPage
