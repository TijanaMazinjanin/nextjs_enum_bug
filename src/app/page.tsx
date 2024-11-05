'use client'

import { useState } from "react"
import { Difficulty } from "@types"

export default function Home() {
  
  const [cat, setCat] = useState<Difficulty>(Difficulty.None);

  return <div>
    {cat}
  </div>
}
