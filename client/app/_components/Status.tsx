"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { useEffect, useState } from "react"

type MeResponse = {
  email?: string
  phoneNumber?: string | null
}

export const Status = () => {
  const [user, setUser] = useState<MeResponse | null>(null)

  const getToken = () => {
    const tokenKey = "token="
    const tokenCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith(tokenKey))

    return tokenCookie?.slice(tokenKey.length)
  }

  useEffect(() => {
    const fetchMe = async () => {
      const token = getToken()
      if (!token) return

      try {
        const res = await fetch("http://localhost:8080/users/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (!res.ok) return
        const data = (await res.json()) as MeResponse
        setUser(data)
      } catch {
        setUser(null)
      }
    }

    fetchMe()
  }, [])

  const onLogout = () => {
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
    window.location.href = "/sign-in"
  }

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64">
          <DropdownMenuGroup>
            <DropdownMenuLabel>My Profile</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="space-y-1 px-2 py-2 text-sm">
              <p className="font-medium text-foreground">
                {user?.email ?? "Not signed in"}
              </p>
              <p className="text-muted-foreground">
                {user?.phoneNumber ?? "No phone number"}
              </p>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive" onClick={onLogout}>
              Log out
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
