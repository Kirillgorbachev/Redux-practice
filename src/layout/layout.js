import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

function Layout () {

    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout;