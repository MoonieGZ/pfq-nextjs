"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const tasks = [
  { name: "Hatch 30 Eggs", progress: 28, total: 30, reward: 24000 },
  { name: "Catch 5 Fish", progress: 3, total: 5, reward: 10000 },
  { name: "Explode 10 times", progress: 7, total: 10, reward: 15000 },
]

export default function TaskList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Task List</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {tasks.map((task, index) => (
          <div key={index} className="space-y-2">
            <h3 className="font-semibold">{task.name}</h3>
            <div className="flex justify-between items-center">
              <span>{task.progress}/{task.total} complete</span>
              <span className="text-sm text-gray-500">{task.reward.toLocaleString()} Cr</span>
            </div>
            
            <div className="flex justify-between items-center text-sm">
              <Progress value={(task.progress / task.total) * 100} />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}