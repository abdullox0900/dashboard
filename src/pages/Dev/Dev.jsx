import useHeaderTitle from "../../hooks/useHeaderTitle"

 
function Dev() {
 
    const {setText} = useHeaderTitle()

  setText('Dev')

  return (
    <>
    <h1>Dev</h1>
    </>
  )
}
export default Dev