export const FilterRandomKeys = ({ filter, onChangeFilter }) => {
 
   const handleChange = (category, result) => {
  
      const currentFilter = filter[category]
      
      const uploaded = currentFilter.includes(result)
      ? currentFilter.filter(cate => cate !== result)
      : [...currentFilter, result]

      const FilterChanged = {...filter, [category]: uploaded }
      onChangeFilter(FilterChanged)

      return FilterChanged
  
   }

  return (
  <div className="bg-gray-800 max-h-139 w-65 mt-10 p-4 rounded-lg text-white">

        <div className="text-xl mb-3 border-b">
         Platforms
        </div>

        <div className="flex flex-col gap-3 mb-1 ">

          <label className="flex gap-2 items-center">
         <input type="checkbox" onChange={() => handleChange("platforms", "Xbox")}/>Xbox
          </label> 

          <label className="flex gap-2 items-center">
         <input type="checkbox" onChange={() => handleChange("platforms", "Playstation")} />Playstation
          </label>

          <label className="flex gap-2 items-center">
         <input type="checkbox" onChange={() => handleChange("platforms", "Steam")}/>Steam
          </label>

          <label className="flex gap-2 items-center">
         <input type="checkbox" onChange={() => handleChange("platforms", "Ubisoft")}/>Ubisoft
          </label>

          <label className="flex gap-2 items-center">
         <input type="checkbox" onChange={() => handleChange("platforms", "Epic Games")}/>Epic Games
          </label>
        </div>

        <div className="text-xl mb-3 border-b">
         Zone
        </div>

        <div className="flex flex-col gap-3 ">

          <label className="flex gap-2 items-center">
         <input type="checkbox" onChange={() => handleChange("status", "GLOBAL")}/>Global
          </label> 

          <label className="flex gap-2 items-center">
         <input type="checkbox" onChange={() => handleChange("status", "EUROPE")}/>Europa
          </label>

          <label className="flex gap-2 items-center">
         <input type="checkbox" onChange={() => handleChange("status", "LATINOAMERICAN")}/>Latinoamerica
          </label>

        </div>

        <div className="text-xl mb-3 border-b">
         Rarity
        </div>

        <div className="flex flex-col gap-3 ">

          <label className="flex gap-2 items-center">
         <input type="checkbox" onChange={() => handleChange("rarities", "Common")}/>Common
          </label> 

          <label className="flex gap-2 items-center">
         <input type="checkbox" onChange={() => handleChange("rarities", "Epic")}/>Epic
          </label>

          <label className="flex gap-2 items-center">
         <input type="checkbox"onChange={() => handleChange("rarities", "Mythic")}/>Mythic
          </label>

          <label className="flex gap-2 items-center">
         <input type="checkbox" onChange={() => handleChange("rarities", "Legendary")}/>Legendary
          </label>

        </div>

      </div>
  )
}
