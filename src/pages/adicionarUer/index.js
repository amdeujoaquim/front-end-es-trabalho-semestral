import React from 'react'
import AdicionarUser from '../../components.js/criarUser/AdicionarUser'
import AdminSidebar from '../../components.js/siddebar/AdminSidebar'

const AdicionarUserPage = () => {
    return (
        <div>
            <AdminSidebar
                componente={<AdicionarUser />}
            />
        </div>
    )
}

export default AdicionarUserPage
