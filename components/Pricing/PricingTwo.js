import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import SinglePriceTwo from "./SinglePricingTwo";

export default function PricingTwo({ content, features }) {
  return (
    <Tabs defaultIndex={1}>
      <div className="pricing-toggle">
        <div className="pricing-arrow">
          <img src="/img/pricing-draw.png" alt="" />
        </div>
        <TabList>
          <div className="nav nav-pills mb-3">
            <Tab>
              <div className="nav-item">
                <button className="nav-link active" type="button">
                  Monthly
                </button>
              </div>
            </Tab>
            <Tab>
              <div className="nav-item">
                <button className="nav-link" type="button">
                  Yearly
                </button>
              </div>
            </Tab>
          </div>
        </TabList>
      </div>

      <TabPanel>
        <div className="row align-items-center justify-content-center">
          {content.slice(0, 2).map((price) => (
            <div key={price.id} className="col-lg-6 col-xl-5 col-12">
              <SinglePriceTwo price={price} features={features} />
            </div>
          ))}
        </div>
      </TabPanel>
      <TabPanel>
        <div className="row align-items-center justify-content-center">
          {content.slice(2, 4).map((price) => (
            <div key={price.id} className="col-lg-6 col-xl-5 col-12">
              <SinglePriceTwo price={price} features={features} />
            </div>
          ))}
        </div>
      </TabPanel>
    </Tabs>
  );
}
