import { Outlet, useNavigate } from "react-router-dom";
import "./AdminMainPage.css";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { useState } from "react";
import { PanelMenu } from "primereact/panelmenu";

export const AdminMainPage = () => {
  const navigate = useNavigate();

  const [visibleLeft, setVisibleLeft] = useState(false);

  const items = [
    {
      label: "Usuarios",
      icon: "pi pi-user-edit",
      items: [
        {
          label: "Clientes",
          icon: "pi pi-user-minus",
          command: () => {
            setVisibleLeft(false);
            navigate("/admin/customers");
          },
        },
        {
          label: "Administradores",
          icon: "pi pi-user-plus",
          command: () => {
            setVisibleLeft(false);
            navigate("/admin/admins");
          },
        },
      ],
    },

    {
      label: "Catalogo",
      icon: "pi pi-fw pi-pencil",
      items: [
        {
          label: "Productos",
          icon: "pi pi-tag",
          command: () => {
            setVisibleLeft(false);
            navigate("/admin/products");
          },
        },
        {
          label: "Servicios",
          icon: "pi pi-chart-line",
          command: () => {
            setVisibleLeft(false);
            navigate("/admin/services");
          },
        },
      ],
    },

    {
      label: "Actualizar empressa",
      icon: "pi pi-building",
      command: () => {
        setVisibleLeft(false);
        navigate("/admin/empressa");
      },
    },

    {
      label: "Cupones",
      icon: "pi pi-fw pi-user",
      command: () => {
        setVisibleLeft(false);
        navigate("/admin/coupons");
      },
    },
    {
      label: "Reseñas",
      icon: "pi pi-list",
      command: () => {
        setVisibleLeft(false);
        navigate("/admin/reviews");
      },
    },
    {
      label: "Ordenes",
      icon: "pi pi-shopping-cart",
      command: () => {
        setVisibleLeft(false);
        navigate("/admin/carts");
      },
    },
    {
      label: "Text Editor",
      icon: "pi pi-file-edit",
      command: () => {
        setVisibleLeft(false);
        navigate("/admin/text-editor");
      },
    },
    {
      label: "Todo",
      icon: "pi pi-folder-open",
      command: () => {
        setVisibleLeft(false);
        navigate("/admin/todo");
      },
    },
    {
      label: "Calendar",
      icon: "pi pi-calendar",
      command: () => {
        setVisibleLeft(false);
        navigate("/admin/calendar");
      },
    },
    {
      label: "Productivity",
      icon: "pi pi-chart-line",
      command: () => {
        setVisibleLeft(false);
        navigate("/admin/productivity");
      },
    },
    {
      label: "Analitycs",
      icon: "pi pi-chart-line",
      command: () => {
        setVisibleLeft(false);
        navigate("/admin/analitycs");
      },
    },
    {
      label: "Charts",
      icon: "pi pi-chart-line",
      items: [
        {
          label: "Line",
          icon: "pi pi-chart-line",
          command: () => {
            setVisibleLeft(false);
            navigate("/admin/line");
          },
        },
        {
          label: "Area",
          icon: "pi pi-chart-line",
          command: () => {
            setVisibleLeft(false);
            navigate("/admin/area");
          },
        },
        {
          label: "Bar",
          icon: "pi pi-chart-line",
          command: () => {
            setVisibleLeft(false);
            navigate("/admin/bar");
          },
        },
        {
          label: "Composed",
          icon: "pi pi-chart-line",
          command: () => {
            setVisibleLeft(false);
            navigate("/admin/composed");
          },
        },
        {
          label: "Funnel",
          icon: "pi pi-chart-line",
          command: () => {
            setVisibleLeft(false);
            navigate("/admin/funnel");
          },
        },
        {
          label: "Pie",
          icon: "pi pi-chart-line",
          command: () => {
            setVisibleLeft(false);
            navigate("/admin/pie");
          },
        },
        {
          label: "Radar",
          icon: "pi pi-chart-line",
          command: () => {
            setVisibleLeft(false);
            navigate("/admin/radar");
          },
        },
        {
          label: "Radial",
          icon: "pi pi-chart-line",
          command: () => {
            setVisibleLeft(false);
            navigate("/admin/radial");
          },
        },
        {
          label: "Sankey",
          icon: "pi pi-chart-line",
          command: () => {
            setVisibleLeft(false);
            navigate("/admin/sankey");
          },
        },
        {
          label: "Tree",
          icon: "pi pi-chart-line",
          command: () => {
            setVisibleLeft(false);
            navigate("/admin/tree");
          },
        },
      ],
    },
  ];
  return (
    <>
      <div>
        <div className="card">
          <Sidebar
            style={{ width: "auto", backgroundColor: "#1C313E" }}
            visible={visibleLeft}
            onHide={() => setVisibleLeft(false)}
          >
            <div className="card">
              <PanelMenu
                className="TEST_ADMIN_SIDEBAR"
                model={items}
                style={{ left: 0, width: "18rem" }}
              />
            </div>
          </Sidebar>
        </div>
      </div>
      <div className="btn_admin_container">
        <Button
          icon="pi pi-arrow-right"
          onClick={() => setVisibleLeft(true)}
          className="mr-2 p_btn_arrow"
        />
      </div>
      <Outlet />
    </>
  );
};
