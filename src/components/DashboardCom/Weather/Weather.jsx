// import { useFetchingWeather } from "../../../hooks/useFetchingWeather"

// function Weather() {

//    const {data} = useFetchingWeather()

//    let weather = data?.data;

//    let date = new Date()

//   return (
//     <>
//         <div className="w-[400px]
//             h-[500px] rounded-[30px]
//             py-[45px] px-[25px] shadow-md
//             bg-weather-bg bg-top
//             relative">
//            <div className="before:content-[''] before:absolute before:top-0 before:left-0 before:rounded-[16px] before:bg-[#252f40] before:opacity-[0.75] before:w-[400px] before:h-[500px] z-1"></div>
//             <div className="flex flex-col gap-[10px] z-10 absolute">
//                  <span className="text-[37px] text-white font-semibold">{date.getDay()}</span>
//                  <span className="text-[22px] text-white font-medium">{`${date.getDate()}-${date.getMonth()}-${date.getFullYear()} `}</span>
//                  <span className="text-[22px] text-white font-medium">
//                     <ion-icon name="location-outline"></ion-icon>
//                     {weather?.name}
//                  </span>
//             </div>
//             <div className="flex flex-col absolute bottom-[60px] z-10">
//                 <ion-icon name="sunny-outline" style={{fontSize: '70px', color: 'white'}}></ion-icon>
//                 <span className="text-[50px] text-white font-semibold">{weather?.main.temp} °C</span>
//                 <span className="text-[30px] text-white">{weather?.weather[0].main}</span>
//             </div>
//             <div>

//             </div>
//         </div>
//     </>
//   )
// }
// export default Weather
