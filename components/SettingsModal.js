import { Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import SettingsIcon from "@material-ui/icons/Settings";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useEditor } from "../context/AppContext";
import CssFrameworks from "./CssFrameworks";
import SettingsTabs from "./SettingsTabs";

const ModalHeader = ({ closeModal }) => {
  return (
    <header className="flex items-center justify-between p-2 border-b border-borderPrimary">
      <h3 className="text-xl font-semibold text-white">Settings</h3>
      <button className="p-1 text-3xl focus:outline-none" onClick={closeModal}>
        <CloseIcon className="text-textSecondary hover:text-white" />
      </button>
    </header>
  );
};

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  const { headTags, setHeadTags, language } = useEditor();

  const [openTab, setOpenTab] = useState(3);

  useEffect(() => {
    if (language === "webd") {
      setOpenTab(1);
    } else {
      setOpenTab(3);
    }
  }, [language]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button
        className="flex items-center gap-2 px-4 py-2 rounded-md justify-evenly hover:text-textSecondary focus:outline-none"
        onClick={openModal}
      >
        <SettingsIcon />
        <span className="text-sm">Settings</span>
      </button>

      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-1/2 mx-auto my-6 border-4 rounded min-h-3/5 border-borderPrimary">
              {/* Content */}
              <div className="relative flex flex-col w-full h-full p-3 border-0 shadow-lg outline-none bg-paper focus:outline-none">
                {/* Header */}
                <ModalHeader closeModal={closeModal} />

                {/* Body */}
                <div className="relative grid flex-auto grid-cols-12 gap-5 p-3">
                  <div className="col-span-3">
                    <SettingsTabs openTab={openTab} setOpenTab={setOpenTab} />
                  </div>

                  <div className="col-span-9">
                    {openTab === 1 && (
                      <div className="p-3 border-l-4 bg-paper-secondary border-borderPrimary">
                        <h3 className="text-lg">Add content for head tag</h3>
                        <textarea
                          className="w-full p-2 text-[14px] rounded mt-1 font-mono bg-white resize-none focus:outline-none text-gray-900"
                          rows={5}
                          value={headTags}
                          onChange={(e) => setHeadTags(e.target.value)}
                          placeholder="<meta>,<link> etc"
                        />
                      </div>
                    )}

                    {openTab === 2 && <CssFrameworks />}

                    {openTab === 3 && (
                      <div className="p-3 border-l-4 bg-paper-secondary border-borderPrimary">
                        <h3 className="text-lg">Editor preferences</h3>
                        <Link href="/settings">
                          <a
                            className="text-sm hover:underline text-textSecondary"
                            onClick={closeModal}
                          >
                            Change editor settings
                          </a>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer */}
                <footer className="flex items-center justify-end gap-3 p-3 border-t border-solid border-borderPrimary">
                  <Button color="primary" onClick={closeModal}>
                    Close
                  </Button>

                  <Button
                    variant="contained"
                    color="primary"
                    onClick={closeModal}
                  >
                    Save changes
                  </Button>
                </footer>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
}
