import React from 'react'
import Icons from '@components/social'
function Footer () {
  return (
    <>
      <div className='social_icons container'>
        {social?.map((icon, i) => (
          <Icons src={icon.src} key={i} link={icon.link} />
        ))}
      </div>
      <footer>
        <a>Example@email.com </a>
        <a>Copyright © 2020 Name. All rights reserved.</a>
      </footer>
    </>
  )
}

const social = [
  { src: '/f.jpg', link: '/' },
  { src: '/t.jpg', link: '/' },
  { src: '/i.jpg', link: '/' },
  { src: '/y.jpg', link: '/' }
]
export default Footer
