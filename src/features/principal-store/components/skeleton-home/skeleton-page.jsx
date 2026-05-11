import { SkeletonGamesCard } from "../../../catalog/components/skeleton-page/skeleton-games-card"

export const SkeletonPageHome = () => {
  
  return (
     <div className="flex flex-col ">
   
         <div className="flex justify-center relative">

          <div className="w-full bg-gray-500 animate-pulse h-130"></div>

          <div className="absolute flex flex-col gap-4 left-40 top-30 justify-center">
           <h2 className="text-5xl leading-normal font-medium ">
             <p className="bg-gray-600 h-18 w-47 rounded-t-lg animate-pulse"></p>
             <p className="bg-gray-600 h-18 w-71 rounded-r-lg animate-pulse"> </p>
              <p className="bg-gray-600 h-18 w-41 rounded-b-lg animate-pulse"></p>
           </h2>
           <button className=" bg-gray-600 h-15 rounded-lg max-w-53 animate-pulse"></button>
         </div>
   
         </div>
   
            <div className="flex flex-col items-center gap-5 mt-5 mb-7">
   
             <div className="flex flex-col justify-center max-w-250 gap-4">
               <h2 className="max-w-35 bg-gray-600 rounded-lg animate-pulse h-8"></h2>
               <div className="flex gap-2">
                  {Array.from({length: 6}).map((_, key) => (
                    <SkeletonGamesCard key={key}/>
                  ))}
               </div>
              </div>
   
             <div className="flex flex-col justify-center max-w-250 gap-4">
               <h2  className="max-w-35 bg-gray-600 rounded-lg animate-pulse h-8"></h2>
               <div className="flex gap-2">
                  {Array.from({length: 6}).map((_, key) => (
                    <SkeletonGamesCard key={key}/>
                  ))} 
               </div>
             </div>
   
             <div className="flex flex-col justify-center max-w-250 gap-4">
              <h2  className=" max-w-51 bg-gray-600 rounded-lg animate-pulse h-9"></h2>
               <div className="flex gap-2">
                  {Array.from({length: 6}).map((_, key) => (
                    <SkeletonGamesCard key={key}/>
                  ))} 
               </div>
            </div>
   
             <div className="flex flex-col justify-center max-w-250 gap-4">
                <h2  className="max-w-50 bg-gray-600 rounded-lg animate-pulse h-8"></h2>
               <div className="flex gap-2">
                  {Array.from({length: 6}).map((_, key) => (
                    <SkeletonGamesCard key={key}/>
                  ))} 
               </div>
             </div>
   
            </div>
   
       </div>
  )
}
