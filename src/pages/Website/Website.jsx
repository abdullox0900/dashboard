import useHeaderTitle from "../../hooks/useHeaderTitle";

function Website() {

    const {setText} = useHeaderTitle()

  setText('Website')

  return (
    <>
      <h1>Website</h1>
    </>
  );
}
export default Website;
