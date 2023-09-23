const accordionItems = [
  {
    id: 1,
    icon: "/images/icon/icon_no1.svg",
    title: "Escrow Terms Acceptance",
    content:
      "All parties involved agree to the terms and conditions of our escrow service.",
  },
  {
    id: 2,
    icon: "/images/icon/icon_no2.svg",
    title: "Bank-Backed Wallet Security",
    content:
      "Your money is securely held in a trusted bank wallet, ensuring its safety and protection.",
  },
  {
    id: 3,
    icon: "/images/icon/icon_no3.svg",
    title: "Delivery Status Confirmation",
    content:
      "The involved parties jointly verify and acknowledge the current status of the delivery process.",
  },
  {
    id: 4,
    icon: "/images/icon/icon_no4.svg",
    title: "Payment to Seller",
    content:
      "The agreed-upon amount is transferred to the seller as part of the transaction process.",
  },
];

const WhyChoose = () => {
  return (
    <div className="accordion accordion-style-five md-mb-70" id="accordionOne">
      {accordionItems.map((item) => (
        <div className="accordion-item" key={item.id}>
          <div className={`accordion-header ${(item.id === 2)||(item.id === 4) ? "hlred" : ""}`} id={`heading${item.id}`}>
            <button
              className={`accordion-button collapsed  ${(item.id === 1)||(item.id === 3) ? "bored" : "hlred"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${item.id}`}
              aria-expanded="false"
              aria-controls={`collapse${item.id}`}
            >
              <img src={item.icon} alt="" className="me-3" /> {item.title}
            </button>
          </div>
          <div
            id={`collapse${item.id}`}
            className={`accordion-collapse collapse  ${(item.id === 2)||(item.id === 4) ? "hlred" : ""}`}
            aria-labelledby={`heading${item.id}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyChoose;
