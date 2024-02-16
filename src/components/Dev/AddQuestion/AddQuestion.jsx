import { Input, Button } from "antd";

function AddQuestion() {

  const {TextArea} = Input;

  return (
    <>
      <div className="flex flex-col gap-[20px] w-[500px] min-h-[300px] p-[20px] bg-white rounded-[16px] shadow-md">
        <Input placeholder="Question Name" size="large" />
        <Input placeholder="Question Language" size="large" />
        <TextArea
            showCount
            maxLength={100}
            placeholder="Student description"
            size="large"
            style={{
              height: 170,
              resize: "none",
            }}
          />
          <Button size="large">Submit</Button>
      </div>
    </>
  );
}
export default AddQuestion;
