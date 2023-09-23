// import Link from "next/link";

const FeatureData = [
  {
    id: 1,
    iconSrc: "/images/icon/icon_13.svg",
    title: "Reliability",
    description:
      "Only digital escrow in India which solves Buyer and Seller trust problem",
  },
  {
    id: 2,
    iconSrc: "/images/icon/icon_14.svg",
    title: "Enhanced Protection",
    description:
      `We protect your payment even it is small as an "ANT"`,
  },
  {
    id: 3,
    iconSrc: "/images/icon/icon_15.svg",
    title: "Increased Sales",
    description:
      "To increase the sales conversion rate on buyer enquiries",
  },
  {
    id: 4,
    iconSrc: "/images/icon/icon_16.svg",
    title: "Affordable Pricing",
    description:
      `Pay as small as you pay for a "Chai" and we protect your payment from scammers`,
  },
  {
    id: 5,
    iconSrc: "/images/icon/icon_17.svg",
    title: "Versatile Market",
    description:
      "Buy anything from anyone without worrying about trust on sellers.",
  },
];

const Features = () => {
  return (
    <>
      {FeatureData.map((feature) => (
        <div
          key={feature.id}
          className="col-lg-4 col-md-6 mt-40"
          data-aos="fade-up"
          data-aos-delay={feature.id * 100}
        >
          <div className="card-style-three">
            <div className="icon d-flex align-items-end">
              <img src={feature.iconSrc} alt="icon" className="lazy-img" />
            </div>
            <h4 className="pill mt-25 mb-20">{feature.title}</h4>
            <p className="mb-40">{feature.description}</p>
            {/* <Link href="/pages-menu/service-details">
              <img
                src="/images/icon/icon_18.svg"
                alt="icon"
                className="lazy-img"
              />
            </Link> */}
          </div>
        </div>
      ))}
    </>
  );
};

export default Features;
