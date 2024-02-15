import useHeaderTitle from "../../hooks/useHeaderTitle";

function English() {

    const {setText} = useHeaderTitle()

  setText('English')

  return (
    <>
      <h1>English</h1>
    </>
  );
}
export default English;
