
import Image from "next/image";
import logo from "@/assets/logotipo.svg"
import ShortTitle from "./ShortTitle";
import _Message from "@/_helpers/_Message";
import GuideButton from "./GuideButton";
import IconUserSignin from "@/assets/IconUserSign";
import IconIterPrise from "@/assets/IconInterPrise";
import { useState } from "react";

export default function RightChoice({onClick = function(){}}){
  const [active, setActive] = useState(2)
  return(
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
              onClick={onClick}
              Icon={IconUserSignin} title = {_Message.print("Encerramento")} body = {_Message.print("Acesso para encarregado")}/>
            <GuideButton
            active={active == 2}
            onClick={onClick}
            onIn={false}
            onOut={false}
            
            Icon={IconIterPrise}  title = {_Message.print("Instituição")} body = {_Message.print("Acesso para encarregado")}/>
          </div>
          
        </div>
      </div>
  )
}