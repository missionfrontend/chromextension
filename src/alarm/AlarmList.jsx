import AlarmCard from "./AlarmCard";

function AlarmList({alarmList,setalarmShow}){
    return <div className="flex flex-col gap-2 bg-gray-50 h-full font-sans-rubik p-2 ">
           <h1 className="font-bold text-lg text-blue-800">Manage Your Alarm</h1>
           {alarmList?.length > 0 ? <div className="flex flex-col gap-1 border border-gray-300 p-1 mt-4 overflow-y-auto">
             {alarmList?.map((alarm)=><AlarmCard alarm = {alarm} setalarmShow ={setalarmShow}/>)}
             
           </div>
           :<div className="border border-gray-300 p-1 mt-4 font-bold flex justify-center items-center h-full text-lg">No Alarms to Show</div>}
           <button className="bg-stone-800 text-white px-2 py-1 rounded-md font-semibold absolute top-2 right-2 hover:bg-stone-950 duration-200" onClick={()=> setalarmShow(false)}>Close</button>
    </div> 
}

export default AlarmList;