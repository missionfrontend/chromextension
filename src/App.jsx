import { useEffect, useRef, useState } from "react";

import "./index.css";
import VisitedHistory from "./VisitedHistory.jsx";
import Alarm from "./alarm/Alarm.jsx";
import AlarmList from "./alarm/AlarmList.jsx";

function App() {
  const [history, sethistory] = useState();
  const [isShow,setisShow] = useState(false)
  const [alarmShow,setalarmShow] = useState(false)
  const [alarmList,setalarmList] = useState()
  const scrollref = useRef(null)

  useEffect(function(){
    if(scrollref && scrollref.current){

      scrollref.current.scrollIntoView({behavior:"smooth"})
    }

  },[scrollref])
  useEffect(
    async function () {
      const trackedHistory = await chrome.storage.local.get(["history"]);
      sethistory(trackedHistory?.history);
    },
    [sethistory]
  );
 
  function handleAlarm(){
    setalarmShow(true)
    chrome.alarms.getAll((alarm)=>{
      setalarmList(alarm)
    })
  }
  return (
    <div className="font-mono h-full w-96 bg-gradient-to-br from-purple-200 to-blue-200">
      <div className="flex justify-between mx-1  p-2 gap-10">
        <h1 className="   tracking-wider text-lg text-gray-800 font-bold font-sans-rubik">
          Tracking Status
        </h1>

        {/* <div className="relative inline-block w-11 h-5 ">
          <input
            type="checkbox"
            className="w-11 h-5 duration-500 peer appearance-none transition-colors  rounded-full bg-slate-100"
            id="trackstatus"
            onChange={() => handleTracking()}
            checked={trackHistory}
          />
          <label className="absolute rounded-full bg-stone-600 w-5 h-5 top-0 transition-all duration-500 left-0 peer-checked:translate-x-6 peer-checked:bg-blue-500 shadow-lg border"></label>
        </div> */}
        {/* <p className="font-bold text-sm">{trackHistory ? "On" : "Off"}</p> */}
      </div>
      
      <div className="flex justify-between items-center">

      <div className="flex gap-5 mx-2">
        <h1 className="font-bold text-blue-800 font-sans-rubik">
          Sites Visited
        </h1>
        <p>{history?.length}</p>
      </div>
      <div className="flex items-center gap-2 justify-start  mx-3">
        <button className="bg-green-700 text-white py-1 px-2 rounded-md font-bold font-sans-rubik  hover:bg-green-900 duration-200" onClick={()=> setisShow(true)}>Set Alarm</button>
        {isShow && <div className="absolute top-0 left-0  right-0 h-full">
          <Alarm setisShow ={setisShow}/>
        </div>}
      <button className="bg-blue-700 text-white font-semibold font-sans-rubik px-2 py-1 rounded-md" onClick={()=> handleAlarm()}>Manage Alarm</button>
        {alarmShow && <div className="absolute top-0 left-0 right-0 h-full">
          <AlarmList alarmList={alarmList} setalarmShow={setalarmShow}/>
        </div>}
      </div>
      </div>
      
      
      {history?.length > 0 ?<div className="flex flex-col my-2 h-60 overflow-y-auto overflow-x-hidden w-full">
        {history?.map((history) => (
          <VisitedHistory key={history.id} history={history} />
        ))}
      <div className="hidden" ref={scrollref}>scroll</div>
      </div>
      :<div className="flex justify-center items-center text-lg font-sans-rubik font-bold border-gray-200 border my-2 p-2 h-72">
        No Sites Visited Yet
      </div>}
    </div>
  );
}

export default App;
