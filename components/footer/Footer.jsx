import React from "react";
import Link from "next/link";
const dpiit="data:image/png;base64,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"
const Footer = () => {
  const links = [
    {
      id: 1,
      title: "Links",
      column: "col-lg-2 col-md-3 col-sm-6 mb-30",
      items: [
        { label: "Home", href: "/" },
        { label: "FAQs", href: "/pages-menu/faq" },
        { label: "Delivery Status", href: "/contact" },
        // { label: "Careers", href: "#" },
        // { label: "Features", href: "#" },
        // { label: "Blog", href: "/blog-v2." },
      ],
    },
    // {
    //   id: 2,
    //   title: "Certificates",
    //   column: "col-lg-3 col-md-4 col-sm-6 mb-30",
    //   items: [
    //     { label: "DPIIT", href: "/" },
    //     // { label: "Car Insurance", href: "/service-details" },
    //     // { label: "Investment", href: "/service-details" },
    //     // { label: "Mediclaim Policy", href: "/service-details" },
    //     // { label: "Others", href: "/service-details" },
    //     // { label: "Health Insurance", href: "/service-details" },
    //   ],
    // },
  ];

  const socialIcons = [
    {
      iconClass: "fab fa-facebook-f",
      link: "#",
    },
    {
      iconClass: "fab fa-twitter",
      link: "#",
    },
    {
      iconClass: "fab fa-linkedin-in",
      link: "#",
    },
  ];

  return (
    <>
      {links.map((link) => (
        <div className={link.column} key={link.id}>
          <h5 className="footer-title text-white fw-500">{link.title}</h5>
          <ul className="footer-nav-link style-none">
            {link.items.map((item, i) => (
              <li key={i}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
       <div className="col-lg-3 col-md-4 col-sm-6 mb-30" >
          <h5 className="footer-title text-white fw-500">Certificates</h5>
          <ul className="footer-nav-link style-none">
            
              <Link href="/" className="dpiit">
                <img src={dpiit} alt="DPIIT"  />
                &nbsp;&nbsp;DPIIT
              </Link>
           
          </ul>
        </div>
      <div className="col-xl-3 col-lg-4 col-md-5 mb-30">
        <h5 className="footer-title text-white fw-500">Address</h5>
        <p className="text-white opacity-75 mb-35">
          4456 Marina Highway, Lake view <br />   
          House, India.
        </p>
        
        <ul className="d-flex social-icon style-none">
          {socialIcons.map((icon, index) => (
            <li key={index}>
              <a href={icon.link} target="_blank" rel="noopener noreferrer">
                <i className={icon.iconClass} />
              </a>
            </li>
          ))}
          
        
        </ul>
        <p className="text-white opacity-50 fs-15 mt-25   d-lg-block">
        © {new Date().getFullYear()} - {new Date().getFullYear() + 1}{"  "}
                  3rdParty.
        </p>
      </div>
    </>
  );
};

export default Footer;
