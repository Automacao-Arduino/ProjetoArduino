import AntButton from "./components/antButton";
import sun from "./sgv/sun.svg"

export function Dashboard() {
  return (
    <div className="w-full h-full bg-green-500 grid grid-cols-3 grid-rows-3 gap-4 p-12">
     <div className="rounded-2xl bg-black m-5 flex flex-col w-full h-full overflow-hidden border-4">
        <div className="h-4/6 bg-slate-50 rounded-t-2xl p-4 grid grid-cols-2">
        <div className="flex justify-center items-center">
          <img src={sun} alt="Sun Icon" className="w-1/2 pr-12" />
        </div>
        <div className=" font-sans text-3xl text-left w-3/4 py-8 flex justify-between items-center">
          temperatura
          umidade
        </div>
        </div>
  
        <div className="h-2/6 px-16 bg-black rounded-b-2xl flex justify-between items-center">
          <AntButton />
          <AntButton />
        </div>
      </div>

      <div className="rounded-2xl bg-black m-5 flex flex-col w-full h-full overflow-hidden">
        <div className="h-4/6 bg-slate-50 rounded-t-2xl p-4">
          
        </div>
  
        <div className="h-2/6 p-4 bg-black rounded-b-2xl">
          
        </div>
      </div>

      <div className="rounded-2xl bg-black m-5 flex flex-col w-full h-full overflow-hidden">
        <div className="h-4/6 bg-slate-50 rounded-t-2xl p-4">
          
        </div>
  
        <div className="h-2/6 p-4 bg-black rounded-b-2xl">
          
        </div>
      </div>

      <div className="rounded-2xl bg-black m-5 flex flex-col w-full h-full overflow-hidden">
        <div className="h-4/6 bg-slate-50 rounded-t-2xl p-4">
          
        </div>
  
        <div className="h-2/6 p-4 bg-black rounded-b-2xl">
          
        </div>
      </div>

      <div className="rounded-2xl bg-black m-5 flex flex-col w-full h-full overflow-hidden">
        <div className="h-4/6 bg-slate-50 rounded-t-2xl p-4">
          
        </div>
  
        <div className="h-2/6 p-4 bg-black rounded-b-2xl">
          
        </div>
      </div>

      <div className="rounded-2xl bg-black m-5 flex flex-col w-full h-full overflow-hidden">
        <div className="h-4/6 bg-slate-50 rounded-t-2xl p-4">
          
        </div>
  
        <div className="h-2/6 p-4 bg-black rounded-b-2xl">
          
        </div>
      </div>

      <div className="rounded-2xl bg-black m-5 flex flex-col w-full h-full overflow-hidden">
        <div className="h-4/6 bg-slate-50 rounded-t-2xl p-4">
          
        </div>
  
        <div className="h-2/6 p-4 bg-black rounded-b-2xl">
          
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
