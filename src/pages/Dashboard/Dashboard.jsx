// import Weather from "../../components/DashboardCom/Weather/Weather";
import useHeaderTitle from '../../hooks/useHeaderTitle'

function Dashboard() {
	const { text, setText } = useHeaderTitle()

	setText('Dashboard')

	return (
		<>
			<section>
				{/* <ul className="flex flex-wrap gap-[25px] mb-8">
          <li className="flex justify-between w-[260px] h-[80px] p-[17px] rounded-[16px] bg-[#fff] shadow-[0_20px_27px_0_rgba(0, 0, 0, 0.05)]">
            <div></div>
            <div className="w-[48px] h-[48px] rounded-[8px] bg-gradient-to-br from-[#ff0080] to-[#7928ca]"></div>
          </li>
          <li className="flex justify-between w-[260px] h-[80px] p-[17px] rounded-[16px] bg-[#fff] shadow-[0_20px_27px_0_rgba(0, 0, 0, 0.05)]">
            <div></div>
            <div className="w-[48px] h-[48px] rounded-[8px] bg-gradient-to-br from-[#ff0080] to-[#7928ca]"></div>
          </li>
          <li className="flex justify-between w-[260px] h-[80px] p-[17px] rounded-[16px] bg-[#fff] shadow-[0_20px_27px_0_rgba(0, 0, 0, 0.05)]">
            <div></div>
            <div className="w-[48px] h-[48px] rounded-[8px] bg-gradient-to-br from-[#ff0080] to-[#7928ca]"></div>
          </li>
          <li className="flex justify-between w-[260px] h-[80px] p-[17px] rounded-[16px] bg-[#fff] shadow-[0_20px_27px_0_rgba(0, 0, 0, 0.05)]">
            <div></div>
            <div className="w-[48px] h-[48px] rounded-[8px] bg-gradient-to-br from-[#ff0080] to-[#7928ca]"></div>
          </li>
        </ul>

        <div className="flex items-center gap-6">
          <div className="w-[800px] h-[500px] bg-white rounded-[16px] shadow-md"></div>
          <Weather />
        </div> */}
			</section>
		</>
	)
}
export default Dashboard
