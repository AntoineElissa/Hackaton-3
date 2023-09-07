import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import ArrowSvg from "../../assets/images/Arrow.svg"
import "./Marquee.scss"

const Marquee = () => {
  const marqueeInnerRef = useRef(null)
  const arrowsRef = useRef([])
  const currentScroll = useRef(0)

  useEffect(() => {
    const marqueeInner = marqueeInnerRef.current
    const arrows = arrowsRef.current

    const tween = gsap.to(marqueeInner, {
      xPercent: 100, // Move marquee from left to right
      repeat: -1,
      duration: 100, // Increase this value for a slower animation
      ease: "linear",
    })
    tween.totalProgress(0.5)
    gsap.set(marqueeInner, { xPercent: -50 })

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
              LATEST NEWS Water Flood {/* Combine "Water" and "Flood" */}
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
