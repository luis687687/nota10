"use client"
import IconUserSignin from '@/assets/IconUserSign';
import _Message from '../../_helpers/_Message';
import GuideButton from './components/GuideButton';
import ShortTitle from './components/ShortTitle';
import IconIterPrise from '@/assets/IconInterPrise';
import { useState } from 'react';
import logo from

export default function Signin(){
  const [active, setActive] = useState(2)
  return(
    <div className="h-full w-full bg-white flex flex-row-reverse">
      <div className='flex-[2]'>
        <div className='p-[20px] pt-[36px] flex flex-row justify-end mb-[50px] lg:mb-[90px]'>
          <Image
            src={logo}
            />
          <a href="" className='text-primary  font-primary-sb text-[15px]'>{_Message.print("Pedir Informação")}</a>
        </div>
        <div className='p-[20px] w-full sm:pl-[90px] md:pl-[40px] md:pr-0 lg:pl-[105px]'>
          <ShortTitle />
          <div className='pt-[58px] flex flex-col gap-[32px] '>
            <GuideButton 
              onIn = { _  => setActive(1)}
              onOut = { _ => setActive(2)}
              active = {active == 1}
              Icon={IconUserSignin} righticon={true} title = {_Message.print("Encerramento")} body = {_Message.print("Acesso para encarregado")}/>
            <GuideButton
            active={active == 2}
            Icon={IconIterPrise}  title = {_Message.print("Instituição")} body = {_Message.print("Acesso para encarregado")}/>
          </div>
          
        </div>
      </div>
      <div className="hidden md:flex h-full bg-primary flex-[1] max-w-[413px]">

      </div>
      
      
     
    </div>
  )
}