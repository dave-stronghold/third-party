import React, { useRef,useState } from "react";
import { Timeline } from "rsuite";
import {
  FaRupeeSign,
  FaCheckCircle,
  FaBox,
  FaTruck,
  FaUser,
  FaMoneyBill,
  FaDownload,
} from "react-icons/fa";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const iconSize = {
  fontSize: "18px", // Adjust the size as needed
};
function formatDate(date) {
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate();

  return `${month}_${day}_${year}`;
}

const Timelines = () => {
  const timelinesRef = useRef(null);
  const [tid,setTid] = useState("TNRB223412");
  const handleDownloadPDF = () => {
    const input = timelinesRef.current;
    const suffix1 = "3RDPARTY";
    const currentDate = new Date();
    const suffix2 = formatDate(currentDate);
    const filename = `${tid}_${suffix1}_${suffix2}`;

    html2canvas(input, {
      scrollY: -window.scrollY, // Capture the entire scrollable content
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      pdf.addImage(
        imgData,
        "PNG",
        0,
        0,
        pdf.internal.pageSize.getWidth() - 80,
        pdf.internal.pageSize.getHeight()
      );

      pdf.save(`${filename}.pdf`);
    });
  };
  return (
    <>
      <button className="dobut" onClick={handleDownloadPDF}>
         <FaDownload /> &nbsp; DOWNLOAD
      </button>
      <div ref={timelinesRef}>
        <h6 className=" tid">
          TRANSACTION ID:<span id="hl"> TNRB223412</span>
        </h6>
        <h6 className=" tid">
                    DATE:<span id="hl"> {new Date().toLocaleDateString()}</span>
        </h6>
        <div className="timeline-con">
          <Timeline className="custom-timeline mb-20">
            <Timeline.Item dot={<FaRupeeSign style={iconSize} />}>
              <p>Funds Deposit</p>
              <p>March 1, 10:20</p>
              <p>The buyer deposits funds into escrow</p>
            </Timeline.Item>
            <Timeline.Item dot={<FaCheckCircle style={iconSize} />}>
              <p>Funds Verification</p>
              <p>March 2, 09:34</p>
              <p>3rdParty verifies the funds</p>
            </Timeline.Item>
            <Timeline.Item>
              <p>Internal Enquiry</p>
              <p>March 2, 09:34</p>
              <p>Server maintenance caused delay</p>
            </Timeline.Item>
            <Timeline.Item>
              <p>Back to Normal</p>
              <p>March 2, 09:34</p>
              <p>
                Merchant fixed the server and authenticated to perform
                transactions.
              </p>
            </Timeline.Item>
            <Timeline.Item dot={<FaBox style={iconSize} />}>
              <p>Product Shipped</p>
              <p>March 2, 10:20</p>
              <p>The seller ships the product</p>
            </Timeline.Item>
            <Timeline.Item dot={<FaTruck style={iconSize} />}>
              <p>In Transit</p>
              <p>March 2, 14:20</p>
              <p>The product is in transit to the buyer</p>
            </Timeline.Item>
            <Timeline.Item dot={<FaUser style={iconSize} />}>
              <p>Product Received</p>
              <p>March 3, 09:20</p>
              <p>The buyer receives the product</p>
            </Timeline.Item>
            <Timeline.Item dot={<FaMoneyBill style={{ ...iconSize }} />}>
              <p>Funds Release</p>
              <p>March 3, 17:50</p>
              <p>Funds are released to the seller</p>
            </Timeline.Item>
          </Timeline>
        </div>
      </div>
    </>
  );
};

export default Timelines;
