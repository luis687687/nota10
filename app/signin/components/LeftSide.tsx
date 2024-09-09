import Image from "next/image"
import ShortTitle from "./ShortTitle"
import _Message from "@/_helpers/_Message"
import logo from "@/assets/logotipo.svg"
import IlustrateSigin from "@/assets/IlustrateSignin"

const LefftSide = () => {
  return(
          <div className=" hidden md:flex bg-primary flex-[1] max-w-[413px] flex-col">
          <div className='p-[32px] mb-[80px]'>
            <Image src={logo} alt=''/>
          </div>
          <div className='pr-[46px] p-[32px] pb-[20px]'>
            <ShortTitle 
              title={_Message.print("Lorem ipsum dolor sit amet consectetur. ")} body={_Message.print("Lorem ipsum dolor sit amet consectetur. Sed maecenas sed.")} color1="text-white" color2='text-white'/>
          </div>
          <IlustrateSigin />
        </div>
  )
}

export default LefftSide