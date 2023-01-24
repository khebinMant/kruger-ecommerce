import { Outlet, useNavigate } from "react-router-dom";
import "./AdminMainPage.css"
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { useState } from "react";
import { PanelMenu } from 'primereact/panelmenu';

export const AdminMainPage = () => {
    const navigate = useNavigate();

    const [visibleLeft, setVisibleLeft] = useState(false);

    const items = [
        {
            label:'Usuarios',
            icon:'pi pi-user-edit',
            items:[
                {
                    label:'Clientes',
                    icon:'pi pi-user-minus',
                    command: () => {
                        setVisibleLeft(false)
                        navigate("/admin/customers");
                    },
                },
                {
                    label:'Administradores',
                    icon:'pi pi-user-plus',
                    command: () => {
                        setVisibleLeft(false)
                        navigate("/admin/admins");
                    },
                }
            ]
        },
        {
            label:'Catalogo',
            icon:'pi pi-fw pi-pencil',
            items:[
                {
                    label:'Productos',
                    icon:'pi pi-tag',
                    command: () => {
                        setVisibleLeft(false)
                        navigate("/admin/products");
                    },
                },
                {
                    label:'Servicios',
                    icon:'pi pi-tags',
                    command: () => {
                        setVisibleLeft(false)
                        navigate("/admin/services");
                    },
                },
            ]
        },
        {
            label:'Cupones',
            icon:'pi pi-fw pi-user',
            command: () => {
                setVisibleLeft(false)
                navigate("/admin/coupons");
            },
        },
        {
            label:'Reseñas',
            icon:'pi pi-list',
            command: () => {
                setVisibleLeft(false)
                navigate("/admin/reviews");
            }
        },
        {
            label:'Ordenes',
            icon:'pi pi-shopping-cart',
            command: () => {
                setVisibleLeft(false)
                navigate("/admin/carts");
            }
        }
    ];
    return (
        <>
          <div>
            <div className="card">
                <Sidebar style={{width:'auto', backgroundColor:'#1C313E'}} visible={visibleLeft} onHide={() => setVisibleLeft(false)}>
                    <div className="card">
                        <PanelMenu model={items} style={{ left:0, width: '22rem' }}/>
                    </div>
                </Sidebar>
                </div>
        </div>
        <Button icon="pi pi-arrow-right" onClick={() => setVisibleLeft(true)} className="mr-2" />

        <Outlet />
        </>
    );
};
