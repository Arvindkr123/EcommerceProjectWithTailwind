import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react'

const Announce = () => {
  const [announceStyle, setAnnounceStyle] = useState('bg-[#8a4af3] font-bold text-white flex items-center justify-center');

  const handleClose = () => {
    setAnnounceStyle(announceStyle + " hidden");
  }
  return (
    <div className={announceStyle}>
      <h1 className='text-3xl p-2'>Hurry up it's 40% off now</h1>
      <CloseIcon className='cursor-pointer text-xl text-red-500' onClick={handleClose} />
    </div>
  )
}

export default Announce
