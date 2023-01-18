import { ReactFragment } from "react";

import styles from "../styles/Card.module.css";
export const Card = ({ data }) => {
  if (data.length === 0)
    return (
      <h1 style={{ display: "block", textAlign: "center" }}>
        No slots available😢
      </h1>
    );
  return (
    <>
      <div className={styles.container}>
        {data.map((data, index) => {
          if (
            data?.available_capacity_dose1 > 0 ||
            data?.available_capacity_dose2>0
          )
            return (
              <div className={styles.card_body} key={index}>
                <h4 className={styles.hospital_name}>{data.name}</h4>
                <p className={styles.address}>{data.address}</p>
                <div className={styles.doses}>
                  <h5 className={styles.around}>
                    {data?.min_age_limit ? data.min_age_limit + "+" : null}
                  </h5>
                  <h5>
                    Dose 1:{" "}
                    {data?.available_capacity_dose1
                      ? data?.available_capacity_dose1
                      : 0}
                  </h5>
                  <h5>
                    Dose 2:{" "}
                    {data?.available_capacity_dose2
                      ? data?.available_capacity_dose2
                      : 0}
                  </h5>
                </div>
              </div>
            );
        })}
      </div>
    </>
  );
};
