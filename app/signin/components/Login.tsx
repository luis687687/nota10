import _Message from "@/_helpers/_Message";
import ShortTitle from "./ShortTitle";
import Input from "./Input";
import Button from "./Button";
import IconArrowSign from "@/assets/IconArrowSign";

const text_color : string = "text-[#263238]"
export default function Login({onBack = ()=>{}}){
  return(
    <div className="flex-[1] ">
      <div className="pl-[20px] pt-[20px]">
        <button 
          onClick={_ => onBack && onBack()}
          className = {"group  rotate-180 w-fit h-fit active:bg-secondary/80 bg-[#FDFAF7] p-[8px] rounded-full border-[1px] hover:border-secondary"}>
          <IconArrowSign color={"text-[#C2CFD6] group-active:text-white group-hover:text-secondary"}/>
        </button>
      </div>
      <div className="
        
        md:pr-[90px]
        
        p-[10px] flex-[1] md:pl-[84px] flex justify-center items-center flex-col gap-[40px] 
        md:justify-start
        md:pt-[160px]

        ">
          
          <ShortTitle
                titleS = {`text-[30px] ${text_color}`}
                bodyS= {`${text_color}`}
                s = {"gap-[2px]"}
                title={_Message.print("Login")}
                body={_Message.print("Lorem ipsum dolor sit amet")}/>
          <div className="flex flex-col gap-[48px]">
            <div className="flex flex-col gap-[29px]">
              <Input />
              <Input />
            </div>
            <Button />
          </div>


      </div>
    </div>
   
  )
}