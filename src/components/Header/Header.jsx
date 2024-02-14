import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";

function Header() {
  return (
    <>
      <header className="flex justify-between items-center mb-[20px]">
        <div>
          <Breadcrumb
            items={[
              {
                href: "",
                title: <HomeOutlined />,
              },
              {
                href: "",
                title: (
                  <>
                    <UserOutlined />
                    <span>Application List</span>
                  </>
                ),
              },
              {
                title: "Application",
              },
            ]}
          />

          <span className="mt-[5px] font-bold text-[34px] text-[#2b3674]">Dashboard</span>
        </div>
        <div className="absolute right-[25px] w-[350px] h-[50px] bg-[#fff] shadow-md rounded-[30px]"></div>
      </header>
    </>
  );
}
export default Header;
