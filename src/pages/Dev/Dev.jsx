import { Tabs } from "antd";

import useHeaderTitle from "../../hooks/useHeaderTitle"
import QuestionAndAnswers from "../../components/Dev/QuestionsAndAnswers/QuestionAndAnswers";
import AddQuestion from "../../components/Dev/AddQuestion/AddQuestion";



 
function Dev() {
 
  const {setText} = useHeaderTitle()

  setText('Dev')

  const onChange = (key) => {
  };

  const items = [
    {
      key: "1",
      label: "Questions and Answers",
      children: <QuestionAndAnswers />,
    },
    {
      key: "2",
      label: "Add Questions",
      children: <AddQuestion/>,
    },
  ];

  return (
    <>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </>
  )
}
export default Dev