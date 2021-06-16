import Head from "next/head";
import Header from "./Header";

const Layout = ({ title, content, children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={content} />
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
