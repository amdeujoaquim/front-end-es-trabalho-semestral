import React from 'react'
import AdicionarServico from '../../components.js/AdicionarServico/AdicionarServico'
import AdminSidebar from '../../components.js/siddebar/AdminSidebar'

const AdicionarServicoPage = () => {
    return (
        <div>
            <AdminSidebar
                componente={<AdicionarServico />}
            />
        </div>
    )
}

export default AdicionarServicoPage
