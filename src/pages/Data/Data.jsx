import useHeaderTitle from "../../hooks/useHeaderTitle"

 
function Data() {
 
    const {setText} = useHeaderTitle()

  setText('Data')

  return (
    <>
       <h1>Data</h1>
    </>
  )
}
export default Data     