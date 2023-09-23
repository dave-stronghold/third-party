import { useEffect, useState } from "react";
import MainMenu from "./MainMenu";
import Link from "next/link";
import Image from "next/image";
import ModalContent from "../home-page/home-12/ModalContent";
import { FaRocket } from "react-icons/fa";

const DefaulHeader = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <>
    <header
      className={`theme-main-menu sticky-menu theme-menu-eight border-bottom ${
        navbar ? "fixed" : ""
      }`}
    >
      <div className="inner-content position-relative">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo order-lg-0">
            <Link href="/" className="d-block">
              <Image
                src="/images/logo/logo_01.svg"
                alt="logo"
                width={95}
                height={30}
              />
            </Link>
          </div>
          
         
            <button
              // href="/contact"
              className="btn-twentyOne fw-500 tran3s d-none d-lg-block"
              data-bs-toggle="modal"
                data-bs-target="#contactModal"
            >
             <FaRocket/>&nbsp; Initiate Payment
            </button>
         
          
          <MainMenu />
        </div>
      </div>
      {/* /.inner-content */}
      </header>
      <div
        className="modal fade"
        id="contactModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <ModalContent />
          {/* /.modal-content */}
        </div>
        {/* /.modal-dialog */}
      </div>
      </>
  );
};

export default DefaulHeader;
