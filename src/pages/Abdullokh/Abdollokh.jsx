import Me from "../../components/Me/Me";
import useHeaderTitle from "../../hooks/useHeaderTitle";

import { Segmented } from "antd";

function Abdullokh() {
  const { setText } = useHeaderTitle();

  setText("Abdullokh");

  return (
    <div className="w-[1300px]">
      <div className="w-full h-[150px] bg-slate-400 rounded-[20px] bg-profile-bg bg-no-repeat bg-top mb-[50px]"></div>

      <div >
        <Segmented
          options={["Daily", "Weekly", "Monthly", "Quarterly", "Yearly"]}
          onChange={(value) => {
            console.log(value); // string
          }}
        />
      </div>

      <Me />
    </div>
  );
}
export default Abdullokh;
