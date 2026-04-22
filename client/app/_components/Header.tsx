import { AddressButton } from "./AdressButton"
import { CardSheet } from "./CardSheet"
import { Status } from "./Status"

export const Header = () => {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-white/10 bg-black/95 backdrop-blur">
      <div className="mx-auto flex h-17 w-full max-w-7xl items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-1">
          <img className="h-[37.29px] w-11.5" src="/logo.svg" alt="logo" />
          <img className="h-11 w-22" src="/text.svg" alt="text" />
        </div>
        <div className="flex items-center gap-3 md:gap-4">
          <AddressButton />
          <CardSheet />
          <Status />
        </div>
      </div>
    </header>
  )
}
