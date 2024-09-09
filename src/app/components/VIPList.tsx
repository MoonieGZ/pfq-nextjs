"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const vipUsers = [
  { id: 1, name: "Alice", status: "Online", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 2, name: "Bob", status: "Online", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 3, name: "Charlie", status: "AFK", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 4, name: "Diana", status: "Offline", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 5, name: "Ethan", status: "Offline", avatar: "/placeholder.svg?height=40&width=40" },
]

function getBadgeVariant(status: string) {
  switch (status) {
  case "Online":
    return "default"
  case "AFK":
    return "destructive"
  case "Offline":
    return "secondary"
  default:
    return "outline"
  }
}

export default function VIPList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>VIP List</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {vipUsers.map((user) => (
            <div key={user.id} className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{user.name}</p>
                <Badge 
                  variant={getBadgeVariant(user.status)}
                  className="text-xs"
                >
                  {user.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}