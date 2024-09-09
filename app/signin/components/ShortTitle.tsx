import _Message from "@/_helpers/_Message";

export default function ShortTitle({title="", body="", color1="text-black", color2="text-black/85", titleS="", bodyS="", s=""}){
  
  return(
    <div className={`flex-col gap-[25px] flex max-w-[434px] ${s}`}>
        <h1 className={`text-[28px] font-primary-sb ${color1} ${titleS}`}>{title}</h1>
        <h3 className={`font-primary-r text-[18px] ${color2} ${bodyS}`}>{body}</h3>
      </div>
  )
}