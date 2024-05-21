import React from 'react'
import { Button } from '@/components/ui/button'
import { Menubar } from '@/components/ui/menubar'

const ButtonComponent = () => {
  return (
    <div className="bg-blue-400">
    <Menubar className="p-20 justify-around">
    <Button className="bg-slate-100 rounded">Claculator</Button>
    <Button className="bg-slate-100">Todo App</Button>
    <Button className="bg-slate-100">Unit Converter</Button>
    <Button className="bg-slate-100">4th App</Button>
    <Button className="bg-slate-100">5th App</Button>
    <Button className="bg-slate-100">6th App</Button>
    </Menubar>
    </div>
  )
}

export default ButtonComponent