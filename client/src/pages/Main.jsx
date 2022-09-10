import React from 'react'

import './Main.css'

const Main = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm text-center">
            <h1>17 เป้าหมายแห่งการพัฒนา</h1>
          </div>
          <div className="col-lg-6 col-sm">
            <p>
              มหาวิทยาลัยเทคโนโลยีราชมงคล มุ่งมั่นที่จะบรรลุเป้าหมายการพัฒนาอย่างยั่งยืน
              17 ประการขององค์การสหประชาชาติ (SDGs) ผ่านนโยบายและการบริหารจัดการ
              การวิจัยและนวัตกรรม การเรียนการสอน
              ตลอดจนการเข้าถึงและการมีส่วนร่วมกับชุมชน
            </p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Main