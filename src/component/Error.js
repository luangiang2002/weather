import React from 'react'
const Error = () => {
  return (
    <div className='bg-slate-200 w-[100vw] h-[100vh] '>
      <div className='error text-center py-[30px]'>
        <img className='m-auto' src="https://png.pngtree.com/png-vector/20200313/ourmid/pngtree-error-page-not-found-concept-with-people-having-problems-with-website-png-image_2157909.jpg" alt="" />
        <p>Không có thành phố bạn đang tìm</p>
        <a href='/' className='text-[20px] text-blue-600 '>Nhấn để trở về</a>
      </div>
    </div>
  )
}

export default Error
