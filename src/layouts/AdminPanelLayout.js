import { Outlet, NavLink } from "react-router-dom";
const AdminPanelLayout = () => {
  return (
    <main id="content">
      <aside className="content__left">
        <ul className="sidemenu">
          <li className="nav-item">
            <NavLink to="product" className="nav-link">
              Product
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="shipping" className="nav-link">
              Shipping
            </NavLink>
          </li>
        </ul>
      </aside>
      <section className="content__right">
        <Outlet />
      </section>
    </main>
  );
};

export default AdminPanelLayout;
