import { Separator } from "@/components/ui/separator"

export const Footer = () => {
  return (
    <div className="h-188.75 bg-black">
      <div className="mt-8 h-23 w-full overflow-hidden bg-red-500 text-white">
        <div className="footer-marquee-track">
          <h1 className="footer-marquee-text">Fresh fast delivered</h1>
          <h1 className="footer-marquee-text">Fresh fast delivered</h1>
          <h1 className="footer-marquee-text">Fresh fast delivered</h1>
        </div>
      </div>
      <div className="flex justify-evenly p-20">
        <div>
          <img src="/logo.svg" alt="logo" className="ml-4" />
          <img src="/text.svg" alt="text" />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-[#71717A]">NOMNOM</h1>
          <p className="text-white">Home</p>
          <p className="text-white">Contact Us</p>
          <p className="text-white">Delivery Zone</p>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-[#71717A]">MENU</h1>
          <p className="text-white">Appetizers</p>
          <p className="text-white">Salad</p>
          <p className="text-white">Pizza</p>
          <p className="text-white">Main Dishes</p>
          <p className="text-white">Dessert</p>
        </div>
        <div className="flex flex-col gap-5 p-11">
          <h1 className="text-gray-200">Side Dishes</h1>
          <p className="text-white">Brunch</p>
          <p className="text-white">Desserts</p>
          <p className="text-white">Beverages</p>
          <p className="text-white">Fish and Sea Food</p>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-[#71717A]">FOLLOW US</h1>
          <div className="ml-2 flex gap-4">
            <img src="/facebook.svg" alt="logo" />
            <img src="/insta.svg" alt="logo" />
          </div>
        </div>
      </div>
      <div className="ml-25 flex w-316">
        <Separator className="bg-gray-500" />
      </div>
      <div className="ml-8 flex justify-start gap-5 p-5 text-[#71717A]">
        <p>Copy right 2026 @ Nomnom LLC</p>
        <p>Privacy Policy</p>
        <p>Terms and condition</p>
        <p>Cookie policy</p>
      </div>
    </div>
  )
}
