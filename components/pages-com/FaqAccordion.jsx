const FaqAccordion = () => {
  const accordionItems = [
    {
      id: "faq-1",
      question: "How does the escrow system work?",
      answer:
        "Our escrow system ensures secure transactions by holding funds in trust until both parties meet the specified conditions. It provides protection for online buyers and sellers.",
    },
    {
      id: "faq-2",
      question: "What encryption methods are used?",
      answer:
        "We employ advanced encryption techniques to safeguard user data and financial information. We prioritize the security of your transactions and personal details.",
    },
    {
      id: "faq-3",
      question: "Is the escrow service available for international deals?",
      answer:
        "Yes, our escrow service supports international transactions, allowing parties from different countries to securely engage in online deals with trust and confidence.",
    },
    {
      id: "faq-4",
      question: "What fees are associated with the escrow service?",
      answer:
        "We charge competitive fees for our escrow services, which may vary based on the transaction amount and type. You can find detailed fee information on our website.",
    },
    {
      id: "faq-5",
      question: "How can I integrate the escrow system into my website or platform?",
      answer:
        "Integrating our escrow system is a seamless process. We provide APIs and documentation to assist you in integrating our secure escrow service into your platform.",
    },
    {
      id: "faq-6",
      question: "What steps should I take if a dispute arises during a transaction?",
      answer:
        "In the event of a dispute, we provide a resolution process. Both parties can submit evidence, and our team will mediate to ensure a fair resolution is reached.",
    },
    {
      id: "faq-7",
      question: "Is the service compliant with regulatory standards in India?",
      answer:
        "Yes, we adhere to all relevant regulatory standards and guidelines in India. We prioritize compliance and security to provide a trusted escrow platform.",
    },
    {
      id: "faq-8",
      question: "How can I contact technical support?",
      answer:
        "Our technical support team is available 24/7 to assist with any technical queries or integration issues. You can reach out through our dedicated support channels.",
    },
  ];
  
  return (
    <div className="accordion accordion-style-four" id="accordionOne">
      {accordionItems.map((item, index) => (
        <div className="accordion-item" key={item.id}>
          <div className="accordion-header" id={`heading-${index}`}>
            <button
              className={`accordion-button ${index === 2 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse-${index}`}
              aria-expanded={index === 2 ? "true" : "false"}
              aria-controls={`collapse-${index}`}
            >
              <span>{`0${index + 1}.`}</span> {item.question}
            </button>
          </div>
          <div
            id={`collapse-${index}`}
            className={`accordion-collapse collapse ${
              index === 2 ? "show" : ""
            }`}
            aria-labelledby={`heading-${index}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
