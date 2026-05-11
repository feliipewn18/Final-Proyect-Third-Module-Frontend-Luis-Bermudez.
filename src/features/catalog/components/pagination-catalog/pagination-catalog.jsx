import { ChevronLeft, ChevronRight } from "lucide-react"

export const PaginationCatalog = ({next , prev, page, setPage}) => {

   const handlePrev = () => { setPage(page - 1) }
   const handleNext = () => { setPage(page + 1) }

  return (
    <div className="flex gap-4 items-center justify-center">

     <button onClick={handlePrev} disabled={!prev} className={`bg-slate-800/50 p-2 text-white rounded-lg cursor-pointer ${!prev && "opacity-50"}`}>
      <ChevronLeft/>
     </button>

     <p className="text-white">
      {page}
     </p>

     <button onClick={handleNext} disabled={!next}  className={`bg-slate-800/50 p-2 text-white rounded-lg cursor-pointer ${!next && "opacity-50"}`}> 
      <ChevronRight/>
     </button>
     
    </div>
  )
}
