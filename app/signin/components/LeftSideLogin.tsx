import Image from "next/image"
import ShortTitle from "./ShortTitle"
import _Message from "@/_helpers/_Message"
import logo from "@/assets/logotipo.svg"
import IlustrateSigin from "@/assets/IlustrateSignin"
import { useEffect, useState } from "react"

const LefftSideLogin = () => {
  const [actived, setActive] = useState(0)
  const [conter, setConter] = useState(0)
  useEffect( () => {

      const element: HTMLElement = document.getElementById("scrollator")
      const child : HTMLElement = document.querySelector(".childs-scrollator")
      if(element && child){
        element.style.scrollBehavior = "smooth"
       
        setTimeout( _=> {
          if (conter == 2)
          {
            setConter(0)
            element.style.scrollBehavior = "initial"
            element.scroll(0,0)
            element.style.scrollBehavior = "smooth"
            
          }
          else{
            setConter(conter+1)
            element.scrollBy({left:child.offsetWidth+46})
          }
          console.log(conter)
          
        }, 1500)
        
      }
  }, [conter])
  return(
          <div className="hidden md:flex bg-primary flex-[3] flex-col left-side-login">
          <div className='p-[32px] pb-[90px]'>
            <Image src={logo} alt=''/>
          </div>
          <div className="
          min-w-[100%]
          pr-[46px] p-[32px] pb-[20px] flex flex-row overflow-hidden space-x-[46px]"
          id="scrollator"
          >
            {Array(3).fill(1).map( (e,i) => { 
              return <div 
              key={i}
              className='
              min-w-[100%]
              childs-scrollator
              
               items-center justify-between left-side-card-login'>
              <ShortTitle
                s = "max-w-[306px]"
                title={_Message.print("Lorem ipsum dolor sit amet consectetur. ")}
                body={_Message.print("Lorem ipsum dolor sit amet consectetur. Sed maecenas sed.")} color1="text-white" color2='text-white'/>
                <IlustrateSigin 
                style="
                  size-[296px]
                "/>
            </div> })
            }
          </div>
          
          <div className="space-x-[10px] pl-[32px] transition-opacity duration-[2000ms]">
            {
              Array(3).fill(1).map(
                (e, i) =>{ 
                return <button key = {i} className= { `duration-500 size-[20px] border-[1px] border-white rounded-full ${conter == i ?  "bg-white" : "bg-transparent"}`}/>}
              )
            }
          </div>
          
        </div>
  )
}

export default LefftSideLogin