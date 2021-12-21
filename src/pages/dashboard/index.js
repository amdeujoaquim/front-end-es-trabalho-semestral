import React from 'react'
import Dashboard from '../../components.js/dashboard/Dashboar';
import AdminSidebar from '../../components.js/siddebar/AdminSidebar';

const DahsboardPage = () => {
    return (
        <div>
            <AdminSidebar
                componente={<Dashboard />}
            />
        </div>
    )
}

export default DahsboardPage;
