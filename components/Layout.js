import Head from "next/head";
import Header from "./Header";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div className="flex flex-col w-full h-screen gap-0">
        <Header />
        <main className="flex-grow">{children}</main>
      </div>
    </>
  );
};

export default Layout;
