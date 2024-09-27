import { Ref, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import hero from '../../public/hero.webp'
import useIsomorphicLayoutEffect from 'use-isomorphic-layout-effect';
gsap.registerPlugin(ScrollTrigger);

export default function ImageSection(){

  //------------------ Hero content animation -----------------
    const ref  = useRef(null);
    
    useIsomorphicLayoutEffect(() => {
      const ctx = gsap.context();
      window.requestAnimationFrame(function() {
      ctx.add(() => {
        const tl : GSAPTimeline = gsap.timeline({defaults: {duration:1, ease: 'power3.in'}});
        tl.to(".overlay", {y: "-100%", duration: 1.2, ease: "power4.inOut",
            scrollTrigger: {
            trigger: ".hero-section",
            start: "-30% 30%",
            end: "60% 20%",
            scrub: false
          }})
        tl.fromTo(".bg-vid", {scale: 1.2},  {scale: 1, duration: 1.4 , ease: "power4.inOut", visibility: 'visible', autoAlpha: 1, borderRadius: "50px",
            scrollTrigger: {
                trigger: ".hero-section",
                start: "-30% 30%",
                end: "60% 20%",
                scrub: true
              }
        });

                const tl1 : GSAPTimeline = gsap.timeline({
                  scrollTrigger: {
                    trigger: '.hero',
                    pin: true,
                    scrub: 1,
                    start: '10% start',
                    end: '+=200%'
                  },
                  defaults: {
                    delay:0
                  }
                })
                tl1.to('.span-container',{duration:1.5, y:-1000, delay: 0})
                tl1.to('.hero-content', {visibility: 'hidden'})
                const mediaQuery1 = window.matchMedia('(min-width: 2560px)')
                // Check if the media query is true
                if (mediaQuery1.matches) {
                  tl1.to('.bg-vid',{scale: '0.6 0.8' , duration:2.5 , delay: 2})
                }
                tl1.to('.bg-vid',{scale: '0.6 0.8' , duration:2.5 , delay: 0})
                tl1.to('.marq', {y:"-40vh", duration:2, ease: "power4.out",autoAlpha:1, visibility:"visisble" ,stagger:1})
                tl1.to('.marquee', {duration:1, ease: "power4.out",autoAlpha:1, visibility:"visisble"})
                tl1.to('.marquee-2', {duration:0.5, ease: "power4.out",autoAlpha:1, visibility:"visisble"})
                tl1.to('.marquee-3', {duration:1,delay:0.5, ease: "power4.out",autoAlpha:1, visibility:"visisble"})
                

    });
    });
      return () => ctx.revert();
    }, []);


    return (

      <><section className="hero-section">
        <div className="hero h-[115vh] overflow-hidden pb-[50vh]" ref={ref}>
          <div className="hero-content absolute z-10 h-[95vh] w-screen top-0 left-0 flex items-end text-white px-[4vw]">
            <div className="span-container flex flex-col font-poppins leading-[1.2] pb-2 text-white">
              <div className="upper-span flex flex-row gap-5">
              <span className="text-move span-1">Let&apos;s</span>
              <span className="text-move span-1">Save</span>
              <span className="text-move span-2">Our</span>
              </div>
              <span className="text-move span-3">Planet</span>
            </div>
          </div>
          <div className="hero-bg-vid overflow-hidden z-[-99] w-auto flex bg-white">
            <div className="overlay top-0 left-0 right-0 bottom-0 z-10"></div>
            <Image width={1920} height={1080} className="bg-vid h-[120vh] block w-[100vw] object-cover justify-center" src={hero} alt="There's no planet B banner" />
          </div>
          <div className="marq h-[50vh]">
            <div className="marquee">
            <div className="marquee__group">
              <span>We Love❤️➺</span>
              <span>We Love❤️➺</span>
              <span>We Love❤️➺</span>
              <span>We Love❤️➺</span>
              <span>We Love❤️➺</span>

            </div>
            <div className="marquee__group" aria-hidden="true">
              <span>We Love❤️➺</span>
              <span>We Love❤️➺</span>
              <span>We Love❤️➺</span>
              <span>We Love❤️➺</span>
              <span>We Love❤️➺</span>
            </div>
            </div>
            <div className="marquee-2">
            <div className="marquee__group-2 marquee__group2">
              <span>OUR PLANET🌍➺</span>
              <span>OUR PLANET🌍➺</span>
              <span>OUR PLANET🌍➺</span>
              <span>OUR PLANET🌍➺</span>
              <span>OUR PLANET🌍➺</span>

            </div>
            <div className="marquee__group-2 marquee__group2" aria-hidden="true">
              <span>OUR PLANET🌍➺</span>
              <span>OUR PLANET🌍➺</span>
              <span>OUR PLANET🌍➺</span>
              <span>OUR PLANET🌍➺</span>
              <span>OUR PLANET🌍➺</span>
            </div>
            </div>
            <div className="marquee-3">
            <div className="marquee__group">
              <span>We Love❤️➺</span>
              <span>We Love❤️➺</span>
              <span>We Love❤️➺</span>
              <span>We Love❤️➺</span>
              <span>We Love❤️➺</span>

            </div>
            <div className="marquee__group" aria-hidden="true">
              <span>We Love❤️➺</span>
              <span>We Love❤️➺</span>
              <span>We Love❤️➺</span>
              <span>We Love❤️➺</span>
              <span>We Love❤️➺</span>
            </div>
            </div>
          </div>
        </div>
      </section></>
    );
}