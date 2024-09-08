"use client"
export default function IconArrowSign({color="text-secondary"} : any){
  return(
    <i className={color}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 13H4V11H12V4L20 12L12 20V13Z" fill="currentColor"/>
      </svg>
    </i>
  )
}