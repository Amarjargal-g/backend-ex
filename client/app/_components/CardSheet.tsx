"use client"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useContext, useState } from "react"
import { CardContexts } from "../contexts/CardContext"
import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { getCloudinaryImageUrl } from "@/lib/cloudinary"

export function CardSheet() {
  const { card, removeFromCard, updateQuantity } = useContext(CardContexts)
  const [activeView, setActiveView] = useState<"cart" | "order">("cart")
  const [location, setLocation] = useState("")
  const [checkoutError, setCheckoutError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const shippingPrice = card.length > 0 ? 2.5 : 0
  const totalPrice = card.reduce(
    (sum, item) => sum + Number(item.food.price) * item.quantity,
    0
  )
  const totalItems = card.reduce((sum, item) => sum + item.quantity, 0)
  const finalTotal = totalPrice + shippingPrice

  const getToken = () => {
    const tokenKey = "token="
    const tokenCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith(tokenKey))

    return tokenCookie?.slice(tokenKey.length)
  }

  const onCheckout = async () => {
    if (!location.trim()) {
      setCheckoutError("Please enter delivery location.")
      setActiveView("order")
      return
    }

    const token = getToken()
    if (!token) {
      window.location.href = "/sign-in"
      return
    }

    const orderItems = card.map((item) => ({
      foodId: Number(item.food.id),
      quantity: item.quantity,
    }))

    setCheckoutError("")
    setIsSubmitting(true)
    try {
      const res = await fetch("http://localhost:8080/orders/0", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderItems,
          deliveryAddress: location.trim(),
        }),
      })

      if (!res.ok) {
        setCheckoutError("Checkout failed. Please try again.")
        return
      }

      window.alert("Order placed successfully!")
      window.location.href = "/"
    } catch {
      setCheckoutError("Checkout failed. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="relative h-10 rounded-full border-white/20 bg-white/10 text-white hover:bg-white/20"
        >
          <ShoppingCart className="h-4 w-4" />

          {totalItems > 0 && (
            <Badge className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center p-0 text-xs">
              {totalItems}
            </Badge>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent className="flex h-full flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Your Cart
            {totalItems > 0 && (
              <Badge variant="secondary">{totalItems} items</Badge>
            )}
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 space-y-4 overflow-y-auto py-4">
          <div className="grid grid-cols-2 gap-2 rounded-xl bg-muted p-1">
            <Button
              variant={activeView === "cart" ? "secondary" : "ghost"}
              className="w-full rounded-lg"
              onClick={() => setActiveView("cart")}
            >
              Cart
            </Button>
            <Button
              variant={activeView === "order" ? "secondary" : "ghost"}
              className="w-full rounded-lg"
              onClick={() => setActiveView("order")}
            >
              Order Details
            </Button>
          </div>

          {activeView === "cart" ? (
            card.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center gap-3 text-muted-foreground">
                <ShoppingCart className="h-12 w-12 opacity-30" />
                <p className="text-sm">Your cart is empty</p>
              </div>
            ) : (
              card.map((item, index) => (
                <div key={index} className="flex items-center gap-3 rounded-xl border p-2">
                  <img
                    src={getCloudinaryImageUrl(item.food.image)}
                    alt={item.food.name}
                    className="h-14 w-14 rounded-lg object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">
                      {item.food.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      ${Number(item.food.price).toFixed(2)} each
                    </p>
                  </div>

                  <div className="flex items-center gap-1">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-7 w-7"
                      onClick={() =>
                        updateQuantity(item.food.id, item.quantity - 1)
                      }
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-6 text-center text-sm font-medium">
                      {item.quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-7 w-7"
                      onClick={() =>
                        updateQuantity(item.food.id, item.quantity + 1)
                      }
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>

                  <p className="w-16 text-right text-sm font-semibold text-red-600">
                    ${(Number(item.food.price) * item.quantity).toFixed(2)}
                  </p>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 text-destructive hover:text-destructive"
                    onClick={() => removeFromCard(item.food.id)}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              ))
            )
          ) : card.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-muted-foreground">
              <ShoppingCart className="h-12 w-12 opacity-30" />
              <p className="text-sm">Add items to see order details</p>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <p className="mb-1 text-sm font-medium">Delivery location</p>
                <Input
                  placeholder="Enter delivery address"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <div className="rounded-xl border p-4">
                <p className="mb-2 text-sm font-semibold">Payment info</p>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Items ({totalItems})</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Shipping</span>
                    <span>${shippingPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${finalTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {card.length > 0 && activeView === "order" && (
          <>
            <Separator />
            <div className="space-y-1 py-3">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Subtotal ({totalItems} items)</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${finalTotal.toFixed(2)}</span>
              </div>
            </div>
          </>
        )}

        <SheetFooter className="flex-col gap-2 sm:flex-col">
          <Button
            className="w-full bg-red-500 text-white hover:bg-red-600"
            disabled={card.length === 0 || isSubmitting}
            onClick={onCheckout}
          >
            {isSubmitting
              ? "Processing..."
              : `Checkout · $${finalTotal.toFixed(2)}`}
          </Button>
          {checkoutError ? (
            <p className="text-sm text-red-500">{checkoutError}</p>
          ) : null}
          <SheetClose asChild>
            <Button variant="outline" className="w-full">
              Continue Shopping
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
