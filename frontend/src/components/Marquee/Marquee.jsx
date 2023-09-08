import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import ArrowSvg from "../../assets/images/marqueeArrow.svg"
import "./Marquee.scss"

const Marquee = () => {
  const marqueeInnerRef = useRef(null)
  const arrowsRef = useRef([])
  const currentScroll = useRef(0)

  useEffect(() => {
    const marqueeInner = marqueeInnerRef.current
    const arrows = arrowsRef.current

    const marqueeWidth = marqueeInner.offsetWidth
    const marqueeContainerWidth = marqueeInner.parentElement.offsetWidth

    gsap.set(marqueeInner, { x: marqueeContainerWidth })

    const animation = gsap.to(marqueeInner, {
      x: -marqueeWidth,
      duration: 20, // Adjust the duration as needed for the scrolling speed
      ease: "linear",
      repeat: 1,
    })

    const handleScroll = () => {
      const scrollY = window.scrollY

      arrows.forEach((arrow) => {
        const rect = arrow.getBoundingClientRect()
        const isArrowVisible =
          rect.top >= 0 && rect.bottom <= window.innerHeight
        const isScrollingDown = scrollY > currentScroll.current

        if (isArrowVisible) {
          arrow.classList.toggle("active", isScrollingDown)
        }
      })

      currentScroll.current = scrollY
    }

    window.addEventListener("scroll", handleScroll)

    // Start the marquee animation when the component mounts
    animation.play()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <section className="spacer"></section>

      <section className="marquee">
        <div className="marquee_inner" ref={marqueeInnerRef}>
          {Array.from({ length: 12 }).map((_, index) => (
            <div className="marquee_part" key={index}>
              LATEST NEWS Fires
              <div
                className="arrow"
                ref={(el) => (arrowsRef.current[index] = el)}
              >
                <img src={ArrowSvg} alt="arrow" />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="spacer"></section>
    </>
  )
}

export default Marquee
