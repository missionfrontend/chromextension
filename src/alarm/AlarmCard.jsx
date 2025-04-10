function AlarmCard({alarm,setalarmShow}){
     function convertTime(time){
      const convertedTime = new Date(time).toLocaleTimeString()
      return convertedTime;
     }
     function clearAlarm(){
      chrome.alarms.clear(alarm.name,()=>{
        alert("Alarm Deleted")
        setalarmShow(false)
      })
     }
  return <div className="flex flex-col gap-1 bg-blue-50 font-sans-rubik font-bold p-2 relative">
         <h1 className="grid grid-cols-2 items-center">Alarm Name: <span className="text-blue-500 ">{alarm.name}</span></h1>
         <h1 className="grid grid-cols-2 items-center">Repeat Time:<span className="text-blue-500">{alarm.periodInMinutes} min</span></h1>
         <h1 className="grid grid-cols-2 items-center">Scheduled Time:<span className="text-blue-500">{convertTime(alarm.scheduledTime)}</span> </h1>
        <button className="absolute top-1 right-1 border border-gray-200 px-2 py-1 rounded-md hover:bg-stone-800 hover:text-white" onClick={()=> clearAlarm()}>Delete</button>
  </div> 
}

export default AlarmCard