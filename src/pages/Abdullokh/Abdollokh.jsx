import { useState } from "react";
import Me from "../../components/Me/Me";
import useHeaderTitle from "../../hooks/useHeaderTitle";

import { Segmented } from "antd";

function Abdullokh() {

  const [ret, setRet] = useState('Me')

  const {text, setText } = useHeaderTitle();

  setText("Abdullokh");

  return (
    <div className="w-[1300px]">
      <div className="w-full h-[150px] bg-slate-400 rounded-[20px] bg-profile-bg bg-no-repeat bg-top mb-[50px]"></div>

      <div className="w-[300px] mx-auto mb-14">
        <Segmented
          options={["Me", "Weekly", "Monthly", "Quarterly", "Yearly"]}
          onChange={(value) => {
            setRet(value)
          }}
        />
      </div>
     
     {
      ret == 'Me' ? (
       <Me />
      ) : (
        <h2>Yok</h2>
      )
     }
      
    </div>
  );
}
export default Abdullokh;
