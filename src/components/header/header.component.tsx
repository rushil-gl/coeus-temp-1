import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

import ThemeToggle from "../common/ThemeToggle.component";
import { ReactComponent as Document } from "../../assets/document.svg";
import { ReactComponent as DocumentSelected } from "../../assets/document-selected.svg";
import { ReactComponent as Bookmark } from "../../assets/bookmark.svg";
import { ReactComponent as CatchUp } from "../../assets/catchup.svg";
import { ReactComponent as CatchUpSelected } from "../../assets/catchup-selected.svg";
import { ReactComponent as Avatar } from "../../assets/loginAvatarSecond.svg";
import { useAuth } from "../../context/AuthContext";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const logoutHandler = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("login");
  };

  return (
    <>
      <h1 className="text-2xl text-center text-black dark:text-white">
        ==== Header ====
      </h1>
      <section className="flex justify-between">
        <div className="flex justify-start gap-5">
          <Link className="font-medium text-blue-600 dark:text-white" to="/">
            Home
          </Link>
          <Link
            className="font-medium text-blue-600 dark:text-white"
            to="/about"
          >
            About
          </Link>
          <Link
            className="font-medium text-blue-600 dark:text-white"
            to="/documents"
          >
            Documents
          </Link>
          <Link className="font-medium text-red-600" to="/xyz">
            Error Page
          </Link>
        </div>
        <div className="flex justify-end">
          <ThemeToggle />
          <button
            onClick={logoutHandler}
            className="bg-indigo-500 p-2 rounded text-white"
          >
            Log Out
          </button>
        </div>
      </section>
      <section className="flex m-5 float-left cursor-pointer">
        <div
          className="flex flex-col w-24 items-center rounded-2xl mx-px mb-2 p-3 bg-neutral-600"
          onClick={() => navigate("catch-up")}
        >
          {location.pathname === "/catch-up" ? (
            <CatchUpSelected className="w-8 h-8 mb-1" />
          ) : (
            <CatchUp className="w-8 h-8 mb-1" />
          )}
          <p className="text-white text-sm">Catch Up</p>
        </div>
        <div
          className="flex flex-col w-24 items-center rounded-2xl mx-px mb-2 p-3 bg-neutral-600"
          onClick={() => navigate("documents")}
        >
          {location.pathname === "/documents" ? (
            <DocumentSelected className="w-8 h-8 mb-1" />
          ) : (
            <Document className="w-8 h-8 mb-1" />
          )}
          <p className="text-white text-sm">Documents</p>
        </div>
        <div
          className="flex flex-col w-24 items-center rounded-2xl mx-px mb-2 p-3 bg-neutral-600"
          onClick={() => navigate("bookmarks")}
        >
          {/* ToDo:// Get Selected bookmark icon */}
          {location.pathname === "/bookmarks" ? (
            <Bookmark className="w-8 h-8 mb-1" />
          ) : (
            <Bookmark className="w-8 h-8 mb-1" />
          )}
          <p className="text-white text-sm">Bookmarks</p>
        </div>
      </section>
      <section className="flex justify-end m-5 cursor-pointer">
        <div className="rounded-full float-right mb-2 border border-slate-500 bg-neutral-600">
          <Avatar className="w-20 h-20" fill="currentColor" />
        </div>
      </section>
    </>
  );
}

export default Header;
