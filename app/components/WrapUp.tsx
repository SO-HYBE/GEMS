"use client"

import Image from "next/image"
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect"
import { useRef } from "react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";


export default function WrapUp() {

  const servRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useIsomorphicLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      
      const ctx = gsap.context(() => {
        const tl = gsap.timeline();

        tl
        .fromTo("#serv-card-1", 
          {
            y:-150,
            opacity:0,
            visibility: "hidden"
          },
          {
            y:0,
            autoAlpha:1,
            scrollTrigger: {
              trigger: "#serv-card-1",
              start: "-35% 50%",
              end: "110% 30%",
              scrub: true
            }
          }
        )
        .fromTo("#serv-card-2", 
          {
            y:150,
            opacity:0,
            visibility: "hidden"
          },
          {
            y:0,
            autoAlpha:1,
            scrollTrigger: {
              trigger: "#serv-card-2",
              start: "-35% 50%",
              end: "110% 30%",
              scrub: true
            }
          }
        )
        .fromTo("#serv-card-3", 
          {
            y:150,
            opacity:0,
            visibility: "hidden"
          },
          {
            y:0,
            autoAlpha:1,
            scrollTrigger: {
              trigger: "#serv-card-3",
              start: "-35% 50%",
              end: "110% 30%",
              scrub: true
            }
          }
        )
        .fromTo("#serv-card-4", 
          {
            y:-150,
            opacity:0,
            visibility: "hidden"
          },
          {
            y:0,
            autoAlpha:1,
            scrollTrigger: {
              trigger: "#serv-card-4",
              start: "-35% 50%",
              end: "110% 30%",
              scrub: true
            }
          }
        )
        .fromTo("#serv-card-5", 
          {
            y:-150,
            opacity:0,
            visibility: "hidden"
          },
          {
            y:0,
            autoAlpha:1,
            scrollTrigger: {
              trigger: "#serv-card-5",
              start: "-35% 50%",
              end: "110% 30%",
              scrub: true
            }
          }
        )
        .fromTo("#serv-card-6", 
          {
            y:150,
            opacity:0,
            visibility: "hidden"
          },
          {
            y:0,
            autoAlpha:1,
            scrollTrigger: {
              trigger: "#serv-card-6",
              start: "-35% 50%",
              end: "110% 30%",
              scrub: true
            }
          }
        )
        .fromTo("#serv-card-7", 
          {
            y:150,
            opacity:0,
            visibility: "hidden"
          },
          {
            y:0,
            autoAlpha:1,
            scrollTrigger: {
              trigger: "#serv-card-7",
              start: "-35% 50%",
              end: "110% 30%",
              scrub: true
            }
          }
        )
        .fromTo("#serv-card-8", 
          {
            y:-150,
            opacity:0,
            visibility: "hidden"
          },
          {
            y:0,
            autoAlpha:1,
            scrollTrigger: {
              trigger: "#serv-card-8",
              start: "-20% 60%",
              end: "110% 30%",
              scrub: true
            }
          }
        )


      }, servRef);

      return () => ctx.revert(); 
    }
  }, []);


    return (
      <section id="services-section" className="w-full text-wrap py-12 md:py-24 lg:py-32 bg-[#fafafa]" ref={servRef}>
        <div className="container grid gap-12 px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div id="serv-card-1" className="space-y-4 text-wrap order-1">
              <div className="inline-block rounded-lg bg-[#4caf50] px-3 py-1 text-sm text-[#fafafa] font-bold font-poppins">Marketing</div>
              <h3 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-poppins text-[#6c3483]">Elevate Your Brand&apos;s Reach</h3>
              <p className="md:text-xl/relaxed font-poppins text-[#4caf50]">
                Our marketing experts craft tailored strategies to amplify your brand&apos;s visibility and engagement across
                digital channels.
              </p>
            </div>
            {/* <Image
              id="serv-card-2"
              priority
              src={marketImg}
              alt="Marketing"
              width={600}
              height={400}
              className="rounded-lg overflow-hidden order-2"
              style={{ aspectRatio: "600/400", objectFit: "cover" }}
            /> */}
          </div>
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* <Image
              id="serv-card-3"
              priority
              src={brandImg}
              alt="Branding"
              width={600}
              height={400}
              className="rounded-lg overflow-hidden order-4 md:order-3"
              style={{ aspectRatio: "600/400", objectFit: "cover" }}
            /> */}
            <div id="serv-card-4" className="space-y-4 text-wrap order-3 md:order-4">
              <div className="inline-block rounded-lg bg-[#4caf50] px-3 py-1 text-sm text-[#fafafa] font-bold font-poppins">Branding</div>
              <h3 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-poppins text-[#6c3483]">Crafting Memorable Identities</h3>
              <p className="md:text-xl/relaxed font-poppins text-[#4caf50]">
                Our branding experts develop unique and impactful visual identities that captivate your audience and
                elevate your business.
              </p>
            </div>
          </div>
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div id="serv-card-5" className="space-y-4 text-wrap order-5 md:order-5">
              <div className="inline-block rounded-lg bg-[#4caf50] px-3 py-1 text-sm text-[#fafafa] font-bold font-poppins">Machine Learning</div>
              <h3 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-poppins text-[#6c3483]">Unleash the Power of AI</h3>
              <p className="md:text-xl/relaxed font-poppins text-[#4caf50]">
                Our machine learning experts harness the latest advancements in AI to build intelligent solutions that
                drive business transformation.
              </p>
            </div>
            {/* <Image
              id="serv-card-6"
              priority
              src={mlImg}
              alt="Machine Learning"
              width={600}
              height={400}
              className="rounded-lg overflow-hidden order-6 md:order-6"
              style={{ aspectRatio: "600/400", objectFit: "cover" }}
            /> */}
          </div>
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* <Image
              id="serv-card-7"
              priority
              src={webImg}
              alt="Web Solutions"
              width={600}
              height={400}
              className="rounded-lg overflow-hidden order-8 md:order-7"
              style={{ aspectRatio: "600/400", objectFit: "cover" }}
            /> */}
            <div id="serv-card-8" className="space-y-4 text-wrap order-7 md:order-8">
              <div className="inline-block rounded-lg bg-[#4caf50] px-3 py-1 text-sm text-[#fafafa] font-bold font-poppins">Web Solutions</div>
              <h3 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-poppins text-[#6c3483]">
                Crafting Exceptional Digital Experiences
              </h3>
              <p className="md:text-xl/relaxed font-poppins text-[#4caf50]">
                Our web development experts design and build custom, responsive websites and web applications that
                captivate your audience and drive business growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }