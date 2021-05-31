import Link from "next/link";
import LanguageMenu from "../components/LanguageMenu";
import OrientationMenu from "../components/OrientationMenu";
import SettingsModal from "../components/SettingsModal";
import { useEditor } from "../context/AppContext";
import GitHubIcon from "@material-ui/icons/GitHub";

const Header = () => {
  const { language } = useEditor();

  return (
    <nav className="flex items-center justify-between px-16 py-3 shadow-md bg-paper">
      {/* Logo */}
      <Link href="/">
        <a className="flex items-center gap-3 pointer">
          <h1 className="text-2xl font-bold tracking-wider text-white">
            NextPen
          </h1>
        </a>
      </Link>

      {/* Navigation buttons */}
      <div className="flex items-center justify-center gap-5 text-white">
        {/* Change the orientation of editors (only for webd view) */}
        {language === "webd" && <OrientationMenu />}

        {/* Choose language */}
        <LanguageMenu />

        {/* Opens settings modal */}
        <SettingsModal />

        <a
          href="https://github.com/ankitk26/NextPen"
          className="flex items-center gap-2 px-4 py-2 rounded-md justify-evenly hover:text-textSecondary focus:outline-none"
        >
          <GitHubIcon />
        </a>
      </div>
    </nav>
  );
};

export default Header;
