export const SkeletonGamesIdPage = () => {
  return (
        <div className="flex flex-col overflow-x-hidden mb-5">
    
    {/* INICIO DE LA IMAGEN, BOTON DE COMPRA Y REQUERIMIENTOS*/}
    <div>

      <div className="relative w-full">
        <div>

       <div className="w-full h-130 object-fit bg-gray-500 animate-pulse"></div>
        </div>
        
        {/*INICIO DEL BOTON DE COMPRA */}
       <div className="flex flex-col absolute w-110 top-89 left-25 gap-4 p-4 rounded-lg bg-gray-500 animate-pulse">

         <div className="flex gap-5 items-center justify-between">
           <div className="w-50 h-10 bg-gray-600 rounded-lg">
             
           </div>

           <div className="bg-gray-600 w-15 rounded-lg h-7">
             
           </div>
         </div>
         
         <div className="flex flex-col gap-2">
          <p  className="bg-gray-600 w-25 h-6 rounded-lg"></p>
          <p className="bg-gray-600 w-15 h-6 rounded-lg"></p>
         </div> 

          <div className="flex justify-between">

           <span className="w-15 h-6 rounded-lg bg-gray-600 animate-pulse"></span>
           <span className="w-35 h-6 rounded-lg bg-gray-600 animate-pulse"></span>

          </div>

          <div className="flex justify-center items-center">
            <button className=" bg-gray-600 w-full h-9 p-1 rounded-lg animate-pulse">
              
            </button>
            
          </div>

       </div>
       {/*FINAL DEL BOTON DE COMPRA */}

      </div>
     
     <div className="flex justify-end w-full p-4 ">

       <div className="rounded-lg bg-gray-500 animate-pulse">
         <div className="flex flex-col p-3 gap-2">

           <div className="w-30 h-6 rounded-lg bg-gray-600 animate-pulse">
            
           </div>

           <div className="w-60 h-6 rounded-lg bg-gray-600 animate-pulse">
            
           </div>

           <div className="w-100 flex flex-col gap-2">
             <p className="w-45 h-6 rounded-lg bg-gray-600 animate-pulse"></p>
             <p className="w-50 h-6 rounded-lg bg-gray-600 animate-pulse"></p>
             <p className="w-70 h-6 rounded-lg bg-gray-600 animate-pulse"></p>
           </div>

         </div>
       </div>

     </div>

   </div>
    {/* FINAL DE LA IMAGEN, BOTON DE COMPRA Y REQUERIMIENTOS*/}

    {/* INICIO DE LAS SCREENSHOTS*/}
    <div className="flex justify-center mt-5 max-w-screen">

      <div className="flex flex-wrap justify-center gap-2">

      
        <div className="w-90 h-54 rounded-lg bg-gray-500 animate-pulse"></div>
        <div className="w-90 h-54 rounded-lg bg-gray-500 animate-pulse"></div>
        <div className="w-90 h-54 rounded-lg bg-gray-500 animate-pulse"></div>
        <div className="w-90 h-54 rounded-lg bg-gray-500 animate-pulse"></div>
        <div className="w-90 h-54 rounded-lg bg-gray-500 animate-pulse"></div>
        <div className="w-90 h-54 rounded-lg bg-gray-500 animate-pulse"></div>
      
      </div>

    </div>
    {/* FINAL DE LAS SCREENSHOTS*/}

    {/* INICIO DE LOS REQUERIMIENTOS*/}
     <div className="flex flex-col gap-3 w-190 self-center mt-3 rounded-lg py-2 bg-gray-500 animate-pulse">
        <div className="flex justify-center">
          <h2 className="rounded-lg w-73.25 h-12 bg-gray-600 animate-pulse"></h2>
        </div>

        <div className="flex flex-col p-2">
      <div className="text-white flex flex-col justify-center gap-1 p-2">
       <div className="w-185.6 h-131 bg-gray-600 animate-pulse rounded-lg"></div>
      </div>

      <div className=" text-white flex flex-col gap-1 justify-center p-2">
        <div className="w-185.6 h-35 bg-gray-600 animate-pulse rounded-lg"></div>
      </div>
        </div>
     </div>
    {/* FINAL DE LAS SCREENSHOTS*/}

    </div>
  )
}