"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import topLogo from "../public/GEMS-logo.png"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect"
import SplitType from "split-type"
import woman from "../public/woman.png"
import flowers from "../public/flowers.png"
import bgCircle from "../public/bg-circle.png"


export default function Home() {

  const elementsRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useIsomorphicLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      
      const ctx = gsap.context(() => {

        //---------------------------------------------------------------------------
        // Selecting the container and images
        const container  = document.querySelector('.parallax-container');
        const images = document.querySelectorAll('.parallax-img');

        // Mouse move event listener on the container
        (container as HTMLElement).addEventListener('mousemove', (e) => {
          const { width, height, left, top } = (container as HTMLElement).getBoundingClientRect();
          const mouseX = e.clientX - left; // Mouse X relative to container
          const mouseY = e.clientY - top;  // Mouse Y relative to container
        
          // Calculate rotation values
          const rotateX = ((mouseY / height) * 30) - 15; // Y-axis: -15 to 15 degrees
          const rotateY = ((mouseX / width) * 40) - 20;  // X-axis: -20 to 20 degrees
        
          // Apply rotation to each image
          images.forEach((img, index) => {
            const depth = index * 10; // Adds depth effect (adjust as needed)
            gsap.to(img, {
              rotationX: rotateX + depth,
              rotationY: rotateY + depth,
              ease: 'power1.out'
            });
          });
        });

        // Reset rotation when mouse leaves container
        (container as HTMLElement).addEventListener('mouseleave', () => {
          images.forEach((img) => {
            gsap.to(img, { rotationX: 0, rotationY: 0, ease: 'power1.out' });
          });
        });

        //---------------------------------------------------------------------------


        const titles = gsap.utils.toArray(".main-text");
        const tl = gsap.timeline();

        titles.forEach(title =>{
          const splitTitle = new SplitType(title as HTMLElement);

        tl.to('.logo', {
          y: 0,
          autoAlpha: 1,
          duration: 1
        })

        tl.to('.main-text', {
          y: 0,
          autoAlpha: 1,
          stagger: 1,
          duration: 1.5
          
        })

        
        tl.from(splitTitle.words, {
          opacity: 0,
          y:80,
          stagger: 0.2,

        }, "<")
        .to(splitTitle.words, {
          opacity:1,
          y: 0,
          duration: 1.5,
          stagger: 0.2,
        }, "<1")
        
        tl.to('.illustration-container', {
          x: 0,
          autoAlpha: 1,
          duration: 1
        })

        tl.to('.button-hero', {
          autoAlpha: 1,
          duration: 1
        })

        tl.to('.chevron', {
          autoAlpha: 1,
          duration: 1
        })

        });

      }, elementsRef);

      return () => ctx.revert(); 
    }
  }, []);

  return (
<div className="relative min-h-screen flex flex-col font-poppins" ref={elementsRef}>
  <div className="w-full mx-auto px-4 py-8 flex-grow flex flex-col max-w-[1650px] overflow-hidden">
    <div className="logo mb-8 sm:mb-12">
      <a className="w-fit block" href="/"><Image src={topLogo} alt="Logo" width={150} height={150} priority /></a>
    </div>
    <div className="flex flex-col items-center justify-between flex-grow">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full mb-8 lg:mb-0 ">
        <div className="text-container lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
          <h1 className="main-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-[#6c3483]">
            Welcome to Our Amazing Platform
          </h1>
          <p className="main-text text-2xl sm:text-2xl mb-6 lg:mb-0 text-[#4caf50]">
            Discover the power of innovation and creativity with our cutting-edge solutions.
          </p>
        </div>
        <div className="lg:w-1/2 w-[60vw] flex justify-center lg:justify-end illustration-container ">
          <div className="parallax-container w-full h-[80vh] bg-cover ">
            <Image className=" overflow-visible parallax-img img1 z-[-10]" fill sizes="100%" src={bgCircle} alt="Image 1" />
            <Image className=" overflow-visible parallax-img img2 z-[10]"  fill sizes="100%" src={woman} alt="Image 2" />
            <Image className=" overflow-visible parallax-img img3 z-[15]"  fill sizes="100%" src={flowers} alt="Image 3" />
          </div>
        </div>
      </div>
      <Button size="lg" className="mt-8 mb-16 button-hero bg-[#6c3483] hover:bg-[#884ca1] text-white active:bg-[#552c67]">Learn More!</Button>
    </div>
  </div>
  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center chevron">
    <span className="text-[#4caf50] font-bold text-lg mb-2">Scroll Down</span>
    <ChevronDown className="w-6 h-6 text-[#4caf50] animate-bounce" />
  </div>
</div>


  )
}