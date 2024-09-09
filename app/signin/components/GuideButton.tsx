"use client"
import { ReactElement } from 'react';
import IconArrowSign from '../../../assets/IconArrowSign';
import IconUserSignin from "@/assets/IconUserSign";

type PropsButton = {
  Icon: any,
  onClick: any,
  active: any,
  title: string,
  body: string,
  onIn: any,
  onOut: any
}
// import Image from "next/image"
export default function GuideButton({active, onClick=function(){}, Icon, title, body, onIn, onOut} : PropsButton){
  const back_image = active ? "bg-transparent" : "bg-secondary"
  const color_image = active ? "text-secondary" : "text-white"
  const border = active ? "border-secondary" : "border-transparent"
  return(
    <div 
    onMouseOver={ () => onIn && onIn()}
    onMouseOut={ () => onOut && onOut()}
    onClick={_ => onClick && onClick()}
    className={`
      group
      active:bg-secondary/40
      *:duration-500
    cursor-pointer flex flex-row items-center justify-between pl-[24px] pr-[27px] bg-[#FDFAF7] w-full min-h-[100px] max-w-[443px] rounded-[10px] ${border} border-[1px] hover:border-secondary transition-all duration-500`}>
      <div className="*:duration-500 flex flex-row items-center" >
        <div className={`
          *:duration-500 ${back_image} border-[1px] border-secondary rounded-[10px] size-[60px] flex items-center justify-center`}>
          {Icon && <Icon color={color_image}/>}
        </div>
        <div className="flex flex-col ml-[22px]">
            <span className="text-[18px] font-primary-sb">
                {title}
            </span>
            <span className="text-[15px] font-primary-r">
              {body}
            </span>
        </div>
      </div>
      {!active && 
        <div className="animate-pulse max-[404px]:hidden">
          <IconArrowSign />
        </div>
      }
    </div>
  )
}