import Layout from "../components/Layout";
import ProgrammingEditor from "../components/ProgrammingEditor";
import WebD from "../components/WebD";
import { useEditor } from "../context/AppContext";

const Home = () => {
  const { language } = useEditor();

  return (
    <Layout title="Home">
      <div className="h-full">
        {language === "webd" ? <WebD /> : <ProgrammingEditor />}
      </div>
    </Layout>
  );
};

export default Home;
