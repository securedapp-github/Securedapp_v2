import ChartCard from "../overview/ChartCard";
import { billingDummyData } from "./billingDummyData";
import "./BillingTable.css";

const BillingTableStatus = ({ status }) => {
  return (
    <div
      className={`sss-billing-table-status-component-container ${
        status === "Pending"
          ? "sss-billing-table-status-component-container-yellow"
          : status === "Success"
          ? "sss-billing-table-status-component-container-green"
          : "sss-billing-table-status-component-container-red"
      }`}>
      <div className="sss-billing-table-status-component">{status}</div>
    </div>
  );
};

const BillingTable = () => {
  return (
    <ChartCard className={"w-full"}>
      <div className="sss-billing-table-container">
        <div className="sss-billing-table-scrollable">
          <div className="sss-billing-table">
            <div className="sss-billing-table-header">
              <div className="sss-billing-table-header-title">Billing</div>
              <div className="sss-billing-table-header-options">
                <img
                  src="/assets/images/solidity-shield-scan/scan-history-table-option.svg"
                  alt="Option Icon"
                />
              </div>
            </div>
            <div className="sss-billing-table-body">
              <div className="sss-billing-table-body-header">
                <div className="sss-billing-table-invoice-container">
                  <div className="sss-billing-table-header-invoice sss-billing-table-header-item">
                    Invoice
                  </div>
                </div>
                <div className="sss-billing-table-supplier-container">
                  <div className="sss-billing-table-header-supplier sss-billing-table-header-item">
                    Supplier
                  </div>
                </div>
                <div className="sss-billing-table-price-container">
                  <div className="sss-billing-table-header-price sss-billing-table-header-item">
                    Price
                  </div>
                </div>
                <div className="sss-billing-table-date-container">
                  <div className="sss-billing-table-header-date sss-billing-table-header-item">
                    Date
                  </div>
                </div>
                <div className="sss-billing-table-status-container">
                  <div className="sss-billing-table-header-status sss-billing-table-header-item">
                    Status
                  </div>
                </div>
              </div>
              <div className="sss-billing-table-body-items">
                {billingDummyData.map((data) => {
                  return (
                    <div className="sss-billing-table-row">
                      <div className="sss-billing-table-invoice-container">
                        <div className="sss-billing-table-invoice sss-billing-table-item">
                          {data.invoice}
                        </div>
                      </div>
                      <div className="sss-billing-table-supplier-container">
                        <div className="sss-billing-table-supplier sss-billing-table-item">
                          {data.supplier}
                        </div>
                      </div>
                      <div className="sss-billing-table-price-container">
                        <div className="sss-billing-table-price sss-billing-table-item">
                          {data.price}
                        </div>
                      </div>
                      <div className="sss-billing-table-date-container">
                        <div className="sss-billing-table-date sss-billing-table-item">
                          {data.date}
                        </div>
                      </div>
                      <div className="sss-billing-table-status-container">
                        <div className="sss-billing-table-status sss-billing-table-item">
                          <BillingTableStatus status={data.status} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ChartCard>
  );
};

export default BillingTable;
