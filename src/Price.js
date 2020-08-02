import React from "react";

function PriceSection() {
  const cardContent = [
    {
      subcription: "FREE",
      amount: 0,
      icon: "fa-rocket",
    },
    {
      subcription: "MEDIUM",
      amount: 49,
      icon: "fa-rocket",
    },
    {
      subcription: "BUSINESS",
      amount: 99,
      icon: "fa-rocket",
    },
  ];
  return (
    <section className="majorprice">
      
        <p>------PRICING PLAN------</p>
        <h2 className="plan">Our Awesome Pricing Plan</h2>
      
      {cardContent.map(({ subcription, amount, icon }, i) => (
        <PriceCard key={i} subcription={subcription} amount={amount} icon={icon} />
        ))}
    </section>
  );
}


function PriceCard({ subcription, amount, icon }) {
  return (
      <div id="card">
        <div className="cardhead">
          <div className="free">
            <i class={("fa " + icon)} aria-hidden="true" style={{fontSize: "44px"}}></i>
          <p className="Fr">{subcription}</p>
          </div>
        </div>
        <div className="cardbody">
          <h6>
            Easy Installations<br /><br />
            Unlimited support<br /><br />
            Uniqe Elements<br /><br />
          </h6>
          <div>
          <p> <sup>$</sup><sub>{amount}</sub>/Month</p>
            <br />
            <br />
            <button className="month">PURCHASE</button>
          </div>
        </div>
      </div>
  );
}

export default PriceSection;