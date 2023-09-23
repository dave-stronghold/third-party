const Faq = () => {
  const faqData = [
    {
      question: "What is 3rdParty and how does it work?",
      answer:
        "3rdParty is an escrow platform in India that facilitates secure online transactions. It works by holding funds in trust until both parties fulfill their obligations.",
    },
    {
      question: "How can I use 3rdParty for my transactions?",
      answer:
        "Using 3rdParty is easy. Simply create an account, agree on terms with the other party, deposit funds, and wait for verification. Once verified, 3rdParty will release the funds when the conditions are met.",
    },
    {
      question: "Is 3rdParty safe for online transactions?",
      answer:
        "Yes, 3rdParty prioritizes security. Funds are held in a secure escrow account, and transactions are protected by our platform. You can trust 3rdParty for secure online dealings.",
    },
    {
      question: "What are the fees associated with 3rdParty?",
      answer:
        "3rdParty charges a nominal fee for its services. The fee structure may vary based on the transaction amount and type. You can find detailed fee information on our website.",
    },
    {
      question: "Can I use 3rdParty for international transactions?",
      answer:
        "Yes, 3rdParty supports international transactions. You can use our platform for secure cross-border deals and ensure trust between parties, even when they are in different countries.",
    },
    {
      question: "How do I contact 3rdParty customer support?",
      answer:
        "Our customer support team is available 24/7 to assist you. You can reach us through our website's contact page, email, or phone. We are here to help you with any inquiries or concerns.",
    },
  ];
  

  return (
    <div className="accordion accordion-style-two" id="accordionOne">
      {faqData.map((faq, index) => (
        <div className="accordion-item" key={index}>
          <div className="accordion-header" id={`heading${index}`}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index}`}
              aria-expanded="false"
              aria-controls={`collapse${index}`}
            >
              {faq.question}
            </button>
          </div>
          <div
            id={`collapse${index}`}
            className="accordion-collapse collapse"
            aria-labelledby={`heading${index}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
