"use client"
export default function IconUserSignin({color="white"} : {color: string}){

  return(
    <i className={color}>
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 27.5H5V25C5 21.5483 7.79822 18.75 11.25 18.75H18.75C22.2017 18.75 25 21.5483 25 25V27.5ZM15 16.25C10.8579 16.25 7.5 12.8921 7.5 8.75C7.5 4.60786 10.8579 1.25 15 1.25C19.1421 1.25 22.5 4.60786 22.5 8.75C22.5 12.8921 19.1421 16.25 15 16.25Z" fill="currentColor"/>
      </svg>
    </i>
  )
}