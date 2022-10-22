import { ThemeProvider } from "next-themes";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <ThemeProvider attribute="class">
      <div className="text-neutral-900 bg-neutral-100 dark:bg-neutral-900 dark:text-neutral-200 delay-75 transition-all selection:text-neutral-100 selection:bg-neutral-800 dark:selection:text-neutral-800 dark:selection:bg-neutral-200">
        <Nav />
        <main>{children}</main>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
