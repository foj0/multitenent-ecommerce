// In (home) the () make it a route group for organization
// So we can omit (home) in url
// This also lets us make a separate layout.tsx
// This is useful because it allows us to create sub groups
// that will also contain anything we added in the laytout of the parent
// like a navbar.
// Basically we can create reusable wrappers and components. And don't rerender when navigating w/in route group

import Footer from "./footer";
import { Navbar } from "./navbar";


interface Props {
    children: React.ReactNode;
};

// Children makes it so that page.tsx code gets loaded when layout is loaded
const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-1 bg-[#F4F4F0]">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
