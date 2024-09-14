import { useRef, useEffect } from 'react'
import Typed from 'typed.js'

export function TitleTyped() {
  // Create reference to store the DOM element containing the animation
  const titleTyped = useRef(null)

  useEffect(() => {
    const typed = new Typed(titleTyped.current, {
      strings: ['莫听穿林打叶声，何妨吟啸且徐行', '知善知恶是良知，为善去恶是格物'],
      typeSpeed: 70,
      backSpeed: 35,
      smartBackspace: true,
      loop: true,
      loopCount: Infinity,
      backDelay: 5000, 
      contentType: 'html',
      showCursor: false,
    })

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy()
    }
  }, [])

  return (
    <div 
      id='title-typed'
      className='w-full text-center'
    >
      <span 
        ref={titleTyped}
        className='font-bold text-white text-xl md:text-2xl'
      ></span>
    </div>
  )
}