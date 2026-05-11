import { MailWarning } from "lucide-react"

export const FormContainer = ({email, setEmail}) => {
  return (
    <div className="flex flex-col  p-4 justify-center rounded-lg gap-2 bg-black border-b-gray-600 border shadow-white/70 shadow-sm text-white">

        <h2 className="text-xl font-medium">
            ¿Where do we sent your order?
        </h2>

        <form className="flex gap-2">
          <MailWarning />
         <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="w-full bg-black/60 rounded-lg px-3" placeholder="Myemail@email.com" required/>
        </form>

    </div>
  )
}
