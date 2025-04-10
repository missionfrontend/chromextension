import { useState } from "react";

function Alarm({setisShow}){
    const [Time,setTime] = useState()
    const [alarmName,setalarmName] = useState("")
    // const [work,setWork] = useState("")
    const [repetition,setrepetition] = useState(1)
    function createAlarm(){
        const date = new Date(Time)
        const scheduleTime = date.getTime()
        chrome.alarms.create(alarmName,{when:scheduleTime,periodInMinutes:Number(repetition)},()=>alert("Alarm Created"))
    }
    return <div className="flex flex-col font-sans-rubik bg-gray-50  p-2 h-full font-bold gap-3">
           <h1 className="text-blue-500 text-lg text-center">Reminder Alarm</h1>
           <div className="flex flex-col gap-2 mt-8 border border-gray-300 p-2">

           <div className="grid grid-cols-2 gap-2 items-center">
            <h1>Choose Time</h1>
            <input type="datetime-local" className="border border-blue-500 p-2 outline-none rounded-md" value={Time} onChange={(e)=> setTime(e.target.value)}/>
           </div>
           <div className="grid grid-cols-2 gap-2 items-center">
            <h1>Alarm Name</h1>
            <input type="text" className="border border-blue-500 p-2 outline-none rounded-md" value={alarmName} onChange={(e)=> setalarmName(e.target.value)}/>
           </div>
           
           <div className="grid grid-cols-2 gap-2 items-center">
             <h1>Repetitive Time</h1>
             <input type="number"  className="p-2 rounded-md border border-blue-500 outline-none" value={repetition} onChange={(e)=>setrepetition(e.target.value) }/>
           </div>
            <button className="bg-blue-800 text-white font-bold rounded-md p-2 hover:bg-blue-900" onClick={()=> createAlarm()}>Create Alarm</button>
           </div>
            <button className="rounded-md bg-stone-800 text-white font-semibold absolute top-2 right-2 hover:bg-stone-800 duration-300 py-1 px-2" onClick={()=> setisShow(false)}>Close</button>
    </div> 
}

export default Alarm;