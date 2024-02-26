import React from 'react'
import '../Body/Body.css'
import PlanTemplate from '../PlanTemplate/PlanTemplate'


export default function Body() {
  return (

    <body className="area_screen w-[100dvw] h-[100dvh] overflow-x-hidden flex flex-col bg-red-400">
        <PlanTemplate />
    </body>

  )
}
