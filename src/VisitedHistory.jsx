import { useEffect, useRef } from "react"

function VisitedHistory({history}){
    const currentDate = new Date()
    const convertedTime = new Date(history?.lastVisitTime)
    const day = convertedTime.getDate()
    const month = convertedTime.getMonth()+1
    
   
    
    function convertTime(time){
       const convertedTime = new Date(time).toLocaleString()
       
       return convertedTime;
    } 
    if(day === currentDate.getDate() && currentDate.getMonth()+1 === month){

        return  <div className="flex flex-col gap-2 bg-gray-100 p-2 rounded-sm mx-1 my-1">
            <h1 className="text-stone-900 font-semibold">{history?.title}</h1>
            <p>Number of Visits: <span className="text-gray-800">{history?.visitCount}</span></p>
            <p className="font-sans-rubik font-bold text-red-500">Last Time Visit: <span className="text-stone-900">{convertTime(history?.lastVisitTime)}</span></p>
            
    </div>
    }  
}

export default VisitedHistory;