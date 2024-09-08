import _Message from "@/_helpers/_Message";

export default function ShortTitle(props : {title:string, body:string, color1: string, color2: string}){
  const {title, body, color1="text-black", color2="text-black/85"} = props
  return(
    <div className={`flex-col gap-[25px] flex max-w-[434px]`}>
        <h1 className={`text-[28px] font-primary-sb ${color1}`}>{title}</h1>
        <h3 className={`font-primary-r text-[18px] ${color2}`}>{body}</h3>
      </div>
  )
}