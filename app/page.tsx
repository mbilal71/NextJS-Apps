import React from 'react'
import { Button } from '@/components/ui/button'
import { Menubar } from '@/components/ui/menubar'

const ButtonComponent = () => {
  return (
    <>
      <div className="bg-blue-400">
        <Menubar className="p-3 justify-around">
          <Button className="bg-slate-100 rounded">Calculator</Button>
          <Button className="bg-slate-100">Todo App</Button>
          <Button className="bg-slate-100">Unit Converter</Button>
          <Button className="bg-slate-100">4th App</Button>
          <Button className="bg-slate-100">5th App</Button>
          <Button className="bg-slate-100">6th App</Button>
        </Menubar>
      </div>
      <div className='flex justify-between'>
      <div className="flex p-4" >
        <blockquote className="quote border-l-4 border-blue-500 pl-4 italic bg-blue-100">
          <p>“The success combination in business is: Do what you do better... and: do more of what you do.”</p>
          <footer className="text-right">— David J. Schwartz</footer>
        </blockquote>
      </div>
      <div className="flex p-4">
        <blockquote className="quote border-l-4 border-blue-500 pl-4 italic bg-blue-100">
          <p>“Give out what you most want to come back.”</p>
          <footer className="text-right">- Robin Sharma</footer>
        </blockquote>
      </div>
      <div className="flex p-4">
        <blockquote className="quote border-l-4 border-blue-500 pl-4 italic bg-blue-100">
          <p>“You don&apos;t have to be great at something to start, but you have to start to be great at something.”</p>
          <footer className="text-right">- Zig Ziglar</footer>
        </blockquote>
      </div>
      </div>
    </>
  )
}

export default ButtonComponent

