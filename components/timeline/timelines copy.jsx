import React from 'react';
import { Timeline } from 'rsuite';
import { FaRupeeSign, FaCheckCircle, FaBox, FaTruck, FaUser, FaMoneyBill } from 'react-icons/fa';

const iconSize = {
  fontSize: '18px', // Adjust the size as needed
};

const Timelines = () => (
  <div className="timeline-con">
    <Timeline className="custom-timeline">
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
        <p>Merchant fixed the server and authenticated to perform transactions.</p>
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
);

export default Timelines;
