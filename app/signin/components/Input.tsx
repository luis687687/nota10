import IconAvatarLogin from '../../../assets/IconAvatarLogin';
const text_color : string = "text-[#263238]"
export default function Input({place="Nome de usuário"}){
  return(
    <div className="pr-[18px] p-[10px] flex items-center justify-between max-w-[348px] min-h-[50px] rounded-[10px] border-b-[1px] border-secondary">
      <input placeholder = {place} type="text" className={`flex-[1] outline-none font-primary-r text-[18px]  placeholder:text-[#E0E0E0] text-[#263238e3]`}/>
      <IconAvatarLogin />
    </div>
  )
}