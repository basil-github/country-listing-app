import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
function index ({ src, link }) {
  return (
    <Link href={link}>
      <a>
        <Image width={'60vw'} height={'60vw'} src={src} alt='icon' />
      </a>
    </Link>
  )
}

export default index
