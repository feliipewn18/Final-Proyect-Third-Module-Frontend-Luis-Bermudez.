import { useState } from "react";
import { FormContainer } from "../components/form-container/form-container";
import { ProductsContainer } from "../components/products-container/products-container";
import { PurchaseContainer } from "../components/purchase-container/purchase-container";

export function CartPage() {
  const [email, setEmail ] = useState('')
  return (
    <div className="flex flex-col gap-5 justify-center lg:flex-row sm:items-center xl:items-start sm:flex-col-reverse">

      <div>
        <ProductsContainer/>
      </div>

     <div className="flex flex-col gap-5 max-w-100">
        
        <div>
        <FormContainer email={email} setEmail={setEmail}/>
        </div>

        <div>
        <PurchaseContainer email={email}/>
        </div>

     </div>

    </div>
  )
}
