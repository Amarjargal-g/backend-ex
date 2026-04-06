import { AddressButton } from "./AdressButton"
import { CardSheet } from "./CardSheet"
import { Status } from "./Status"

export const Header = () => {
  return (
    <div className="flex h-17 w-full justify-between bg-black p-2">
      <div className="ml-10 flex gap-1">
        <img className="h-[37.29px] w-11.5" src="/logo.svg" alt="logo" />
        <img className="h-11 w-22" src="/text.svg" alt="text" />
      </div>
      <div className="mr-10 flex gap-6 p-1">
        <AddressButton />
        <CardSheet />
        <Status />
      </div>
    </div>
  )
}
