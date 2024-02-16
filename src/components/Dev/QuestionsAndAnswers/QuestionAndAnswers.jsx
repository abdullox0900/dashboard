import { Collapse, theme, Input } from "antd";

function QuestionAndAnswers() {

  const { token } = theme.useToken();

  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
  `;

  const getItems = (panelStyle) => [
    {
      key: "1",
      label: "This is panel header 1",
      children: <p>{text}</p>,
      style: panelStyle,
    },
    {
      key: "2",
      label: "This is panel header 2",
      children: <p>{text}</p>,
      style: panelStyle,
    },
    {
      key: "3",
      label: "This is panel header 3",
      children: <p>{text}</p>,
      style: panelStyle,
    },
  ];


  return (
    <>
      <div
        style={{ width: "100vh" }}
        className="p-6 bg-white rounded-[16px] shadow-md"
      >
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-[22px]">Questions and Answers JavaScript</h3>
          <Input className="w-[300px]" placeholder="Basic usage" size="large" />
        </div>

        <Collapse
          bordered={false}
          defaultActiveKey={["1"]}
          expandIcon={({ isActive }) => (
            <ion-icon
              name="logo-javascript"
              style={{ color: "orange", fontSize: "20px" }}
            ></ion-icon>
            // <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
          style={{
            background: token.colorBgContainer,
          }}
          items={getItems(panelStyle)}
        />
      </div>
    </>
  );
}
export default QuestionAndAnswers;
