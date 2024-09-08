"use client"
import IconUserSignin from '@/assets/IconUserSign';
import _Message from '../../_helpers/_Message';
import GuideButton from './components/GuideButton';
import ShortTitle from './components/ShortTitle';
import IconIterPrise from '@/assets/IconInterPrise';
import { useState } from 'react';
import logo from "@/assets/logotipo.svg"
import Image from "next/image"
import IlustrateSigin from '../../assets/IlustrateSignin';

export default function Signin(){
  const [active, setActive] = useState(2)

  return(
    <div className="h-full w-full bg-white flex flex-row-reverse">
      <div className='flex-[2]'>
        <div className='p-[20px] pt-[36px] flex flex-row justify-between items-center mb-[50px] lg:mb-[70px] md:justify-end'>
          <div className='border-[1px] border-secondary bg-white p-1 rounded-[10px] md:hidden'>
            <Image src={logo} alt=''/>
          </div>
          
          <a href="" className='text-primary  font-primary-sb text-[15px]'>{_Message.print("Pedir Informação")}</a>
        </div>
        <div className='p-[20px] w-full sm:pl-[90px] md:pl-[40px] md:pr-0 lg:pl-[105px]'>
        <ShortTitle
           title={_Message.print("Selecionar utilizador")}
           body={_Message.print("Lorem ipsum dolor sit amet consectetur. Dictum semper dignissim adipiscing leo sem diam.")}/>
          <div className='pt-[58px] flex flex-col gap-[32px] '>
            <GuideButton 
              onIn = { (_:any)  => setActive(1)}
              onOut = { (_:any) => setActive(2)}
              active = {active == 1}
              onClick={false}
              Icon={IconUserSignin} title = {_Message.print("Encerramento")} body = {_Message.print("Acesso para encarregado")}/>
            <GuideButton
            active={active == 2}
            onClick={false}
            onIn={false}
            onOut={false}
            
            Icon={IconIterPrise}  title = {_Message.print("Instituição")} body = {_Message.print("Acesso para encarregado")}/>
          </div>
          
        </div>
      </div>
      <div className=" hidden md:flex h-full bg-primary flex-[1] max-w-[413px] flex-col">
        <div className='p-[32px] mb-[80px]'>
          <Image src={logo} alt=''/>
        </div>
        <div className='pr-[46px] p-[32px] pb-[20px]'>
          <ShortTitle title={_Message.print("Lorem ipsum dolor sit amet consectetur. ")} body={_Message.print("Lorem ipsum dolor sit amet consectetur. Sed maecenas sed.")} color1="text-white" color2='text-white'/>
        </div>
        <IlustrateSigin />
      </div>
      
      
     
    </div>
  )
}