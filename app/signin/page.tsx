"use client"
import IconUserSignin from '@/assets/IconUserSign';
import _Message from '../../_helpers/_Message';
import GuideButton from './components/GuideButton';
import ShortTitle from './components/ShortTitle';
import IconIterPrise from '@/assets/IconInterPrise';
import { useState } from 'react';
import logo from "@/assets/logotipo.svg"
import Image from "next/image"
import IlustrateSigin from '../../assets/IlustrateSignin';
import LefftSide from './components/LeftSide';
import RightChoice from './components/RightChoice';
import Login from './components/Login';
import LefftSideLogin from './components/LeftSideLogin';

export default function Signin(){
  const [login, setLogin] = useState(false)

  return(
    <div className="min-h-[inherit] w-full bg-white flex flex-row-reverse">
      {
        login ? <>
          <Login onBack = { () => setLogin(false)} />
          <LefftSideLogin />
        </> :
        <>
          <RightChoice onClick = { () => setLogin(true)}/>
          <LefftSide />
        </>
        }
     
    </div>
  )
}