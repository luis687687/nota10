export default function Button({text="Entrar", onClick=function(){}}){

  return(
    <button
      onClick={ () =>{ console.log(1)}}
     className="
      select-none
     focus:outline-primary focus:outline-[1px] active:bg-secondary/50 hover:bg-transparent hover:text-secondary border-[1px] duration-500 hover:border-secondary bg-secondary text-white max-w-[120px] h-[50px] text-[23px] font-primary-r rounded-[10px] px-[27px]">
      {text}
    </button>
  )
}