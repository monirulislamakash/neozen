"use client";

import { useState } from "react";
import { serviceProcess } from "@/lib/service";

export default function ServiceProcess() {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="service-process" aria-label="Our process">
      <div className="service-process-container">
        <header className="service-process-header">
          <h2 className="service-process-title">our process</h2>
          <p className="service-process-count">(5)</p>
        </header>

        <div className="service-process-list">
          {serviceProcess.map((step) => {
            const open = openId === step.id;
            return (
              <div key={step.id} className="service-process-block">
                <button
                  type="button"
                  className="service-process-row"
                  aria-expanded={open}
                  onClick={() => setOpenId(open ? null : step.id)}
                >
                  <span className="service-process-wipe" aria-hidden="true" />
                  <span className="service-process-main">
                    <span className="service-process-num">{step.number}</span>
                    <span className="service-process-name">{step.title}</span>
                  </span>
                  <span className="service-process-toggle">
                    {open ? "Close" : "More info"}
                  </span>
                </button>

                <div className={`service-process-panel${open ? " is-open" : ""}`}>
                  <div className="service-process-panel-inner">
                    <div className="service-process-detail">
                      <div>
                        <p className="service-process-label">What we do</p>
                        <p className="service-process-summary">{step.summary}</p>
                      </div>
                      <div>
                        <p className="service-process-label">Key Activities</p>
                        <ul className="service-process-activities">
                          {step.activities.map((item) => (
                            <li key={item}>
                              <span className="service-process-dot" aria-hidden="true" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
