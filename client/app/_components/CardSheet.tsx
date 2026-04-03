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
import { useContext } from "react"
import { CardContexts } from "../contexts/CardContext"
import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export function CardSheet() {
  const { card, removeFromCard, updateQuantity } = useContext(CardContexts)

  const totalPrice = card.reduce(
    (sum, item) => sum + Number(item.food.price) * item.quantity,
    0
  )
  const totalItems = card.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="relative">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Cart
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

        {/* Cart Items */}
        <div className="flex-1 space-y-4 overflow-y-auto py-4">
          {card.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-muted-foreground">
              <ShoppingCart className="h-12 w-12 opacity-30" />
              <p className="text-sm">Your cart is empty</p>
            </div>
          ) : (
            card.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                {/* Food Info */}
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">
                    {item.food.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    ${Number(item.food.price).toFixed(2)} each
                  </p>
                </div>

                {/* Quantity Controls */}
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

                <p className="w-16 text-right text-sm font-semibold">
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
          )}
        </div>

        {/* Summary & Footer */}
        {card.length > 0 && (
          <>
            <Separator />
            <div className="space-y-1 py-3">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Subtotal ({totalItems} items)</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </>
        )}

        <SheetFooter className="flex-col gap-2 sm:flex-col">
          <Button className="w-full" disabled={card.length === 0}>
            Checkout · ${totalPrice.toFixed(2)}
          </Button>
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
