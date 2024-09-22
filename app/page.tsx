"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import topLogo from "../public/GEMS-logo.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import SplitType from "split-type";
import woman from "../public/woman.png";
import flowers from "../public/flowers.webp";
import bgCircle from "../public/bg-circle.png";
import WrapUp from "../app/components/WrapUp";
import Footer from "../app/components/Footer";

export default function Home() {
  const elementsRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useIsomorphicLayoutEffect(() => {
    if (typeof window !== "undefined") {
      const ctx = gsap.context(() => {
        //--------------------------------------------------------------------------- INTERACTIVE PICTURE FUNCTIONALITY -------------------------
        // Selecting the container and images
        const container = document.querySelector(".parallax-container");
        const images = document.querySelectorAll(".parallax-img");

        // Mouse move event listener on the container
        (container as HTMLElement).addEventListener("mousemove", (e) => {
          const { width, height, left, top } = (
            container as HTMLElement
          ).getBoundingClientRect();
          const mouseX = e.clientX - left; // Mouse X relative to container
          const mouseY = e.clientY - top; // Mouse Y relative to container

          // Calculate rotation values
          const rotateX = (mouseY / height) * 30 - 15; // Y-axis: -15 to 15 degrees
          const rotateY = (mouseX / width) * 40 - 20; // X-axis: -20 to 20 degrees

          // Apply rotation to each image
          images.forEach((img, index) => {
            const depth = index * 10; // Adds depth effect (adjust as needed)
            gsap.to(img, {
              rotationX: rotateX + depth,
              rotationY: rotateY + depth,
              ease: "power1.out",
            });
          });
        });

        // Reset rotation when mouse leaves container
        (container as HTMLElement).addEventListener("mouseleave", () => {
          images.forEach((img) => {
            gsap.to(img, { rotationX: 0, rotationY: 0, ease: "power1.out" });
          });
        });

        //--------------------------------------------------------------------------- INTERACTIVE PICTURE FUNCTIONALITY -------------------------
        //--------------------------------------------------------------------------- ON LOAD ANIMATION ----------------------------------------
        const titles = gsap.utils.toArray(".main-text");
        const tl = gsap.timeline();
        
        // Only animate the logo
        tl.to(".logo", {
          y: 0,
          autoAlpha: 1,
          duration: 1,
        });
        
        // Animate main-text titles
        titles.forEach((title) => {
          const splitTitle = new SplitType(title as HTMLElement);
        
          tl.to(".main-text", {
            y: 0,
            autoAlpha: 1,
            duration: 1.5,
          });
        
          tl.from(
            splitTitle.words,
            {
              opacity: 0,
              y: 80,
              stagger: 0.2,
            },
            "<" 
          ).to(
            splitTitle.words,
            {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: 0.18,
            },
            "<1" 
          );
        });
        
        const subTitle = gsap.utils.toArray(".sub-text");
        
        subTitle.forEach((title) => {
          const splitSub = new SplitType(title as HTMLElement);
        
          tl.to(".sub-text", {
            y: 0,
            autoAlpha: 1,
            stagger: 0.2,
          });
        
          tl.from(
            splitSub.words,
            {
              opacity: 0,
              y: 80,
              stagger: 0.2,
            },
            "<"
          ).to(
            splitSub.words,
            {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: 0.18,
            },
            "<1"
          );
        });
        
        // Add animations for other elements
        tl.to(".illustration-container", {
          x: 0,
          autoAlpha: 1,
          duration: 1,
        }, "<1") 
          .to(".button-hero", {
            autoAlpha: 1,
            duration: 1,
          }, "<0.5") 
          .to(".chevron", {
            autoAlpha: 1,
            duration: 1,
          }, "<0.3");
          
          
        //--------------------------------------------------------------------------- ON LOAD ANIMATION ----------------------------------------  


        const headlineText = gsap.utils.toArray(".headline-text");
        //--------------------------------------------------------------------------- INFO CONTENT HEADLINE ON SCROLL ANIMATION -------------------------

        headlineText.forEach((headText) => {
          const splitHead = new SplitType(headText as HTMLElement);

          gsap.set(splitHead.words, {
            visibility: "hidden",
            transform: "translateY(50px) rotateX(-45deg)",
          });

          gsap.to(splitHead.words, {
            opacity: 1,
            y: 0,
            autoAlpha: 1,
            rotateX: 0,
            stagger: 0.4,
            scrollTrigger: {
              trigger: ".headline-text",
              start: "-350% 30%",
              end: "-250% 20%",
              once: true,
              scrub: true,
            },
          });
        });

        const headline2 = gsap.utils.toArray("#headL2");

        headline2.forEach((headText) => {
          const splitHead = new SplitType(headText as HTMLElement);

          gsap.set(splitHead.words, {
            visibility: "hidden",
            transform: "translateY(50px) rotateX(-45deg)",
          });

          gsap.to(splitHead.words, {
            opacity: 1,
            y: 0,
            autoAlpha: 1,
            rotateX: 0,
            stagger: 0.4,
            scrollTrigger: {
              trigger: "#headL2",
              start: "-350% 30%",
              end: "-250% 20%",
              once: true,
              scrub: true,
            },
          });
        });

        const headline3 = gsap.utils.toArray("#headL3");

        headline3.forEach((headText) => {
          const splitHead = new SplitType(headText as HTMLElement);

          gsap.set(splitHead.words, {
            visibility: "hidden",
            transform: "translateY(50px) rotateX(-45deg)",
          });

          gsap.to(splitHead.words, {
            opacity: 1,
            y: 0,
            autoAlpha: 1,
            rotateX: 0,
            stagger: 0.4,
            scrollTrigger: {
              trigger: "#headL3",
              start: "-350% 30%",
              end: "-250% 20%",
              once: true,
              scrub: true,
            },
          });
        });

        const headline4 = gsap.utils.toArray("#headL4");

        headline4.forEach((headText) => {
          const splitHead = new SplitType(headText as HTMLElement);

          gsap.set(splitHead.words, {
            visibility: "hidden",
            transform: "translateY(50px) rotateX(-45deg)",
          });

          gsap.to(splitHead.words, {
            opacity: 1,
            y: 0,
            autoAlpha: 1,
            rotateX: 0,
            stagger: 0.4,
            scrollTrigger: {
              trigger: "#headL4",
              start: "-350% 30%",
              end: "-250% 20%",
              once: true,
              scrub: true,
            },
          });
        });
      //--------------------------------------------------------------------------- INFO CONTENT HEADLINE ON SCROLL ANIMATION -------------------------
      
      //--------------------------------------------------------------------------- INFO CONTENT PARAGRAPH ON SCROLL REVEAL ANIMATION -------------------------
      const revealText = document.querySelectorAll(".reveal-text");

      revealText.forEach((char,i) => {

        const infoContentText = new SplitType((char as HTMLElement), {types: "chars"});

        gsap.from(infoContentText.chars, {
          scrollTrigger:{
            trigger: char,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            once: true
          },
          opacity:0.2,
          stagger:0.1
        });


      });
    
      //--------------------------------------------------------------------------- INFO CONTENT PARAGRAPH ON SCROLL REVEAL ANIMATION -------------------------

      //--------------------------------------------------------------------------- INFO CONTENT BG COLOR CHANGE ANIMATION ------------------------------------

      const bgTl = gsap.timeline();

      bgTl.to(".intro-section",{
        scrollTrigger: {
          trigger: ".intro-section",
          start: "-20% 20%",
          end: "top 20%",
          scrub: true,
          once: true
        },
        background: "#d4edda"
      })
      bgTl.to(".first-section",{
        scrollTrigger: {
          trigger: ".first-section",
          start: "-20% 20%",
          end: "top 20%",
          scrub: true,
          once: true
        },
        background: "#e0c6f5"
      })
      bgTl.to(".second-section",{
        scrollTrigger: {
          trigger: ".second-section",
          start: "-20% 20%",
          end: "top 20%",
          scrub: true,
          once: true
        },
        background: "#d4edda"
      })
      bgTl.to(".third-section",{
        scrollTrigger: {
          trigger: ".third-section",
          start: "-20% 20%",
          end: "top 20%",
          scrub: true,
          once: true
        },
        background: "#e0c6f5"
      })

      //--------------------------------------------------------------------------- INFO CONTENT BG COLOR CHANGE ANIMATION ------------------------------------
      
    }, elementsRef);
      
      
      

      return () => ctx.revert();
    }
  }, []);

  return (
    <><div className="min-h-screen flex flex-col font-poppins bg-white" ref={elementsRef}>
      <section className="relative">
        <div className="w-full mx-auto px-4 py-6 flex-grow flex flex-col max-w-[1800px] overflow-hidden">
          <div className="logo mb-8 sm:mb-12">
            <a className="w-fit block" href="/">
              <Image
                src={topLogo}
                alt="Logo"
                width={150}
                height={150}
                priority />
            </a>
          </div>
          <div className="flex flex-col items-center justify-between flex-grow">
            <div className="flex flex-col lg:flex-row items-center justify-between w-full mb-8 lg:mb-0 ">
              <div className="text-container lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
                <h1 className="main-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-[#6c3483]">
                  Welcome to Our Amazing Platform
                </h1>
                <p className="sub-text text-2xl sm:text-2xl mb-6 lg:mb-0 text-[#4caf50]">
                  Discover the power of innovation and creativity with our
                  cutting-edge solutions.
                </p>
              </div>
              <div className="lg:w-1/2 w-[60vw] flex justify-center lg:justify-end illustration-container ">
                <div className="parallax-container w-full h-[80vh] bg-cover ">
                  <Image
                    className=" overflow-visible parallax-img img1 z-[-10]"
                    fill
                    priority
                    sizes="100%"
                    src={bgCircle}
                    alt="Image 1" />
                  <Image
                    className=" overflow-visible parallax-img img2 z-[10]"
                    fill
                    priority
                    sizes="100%"
                    src={woman}
                    alt="Image 2" />
                  <Image
                    className=" overflow-visible parallax-img img3 z-[15]"
                    fill
                    priority
                    sizes="100%"
                    src={flowers}
                    alt="Image 3" />
                </div>
              </div>
            </div>
            <Button
              size="lg"
              className="mt-8 mb-20 button-hero bg-[#6c3483] hover:bg-[#884ca1] text-white active:bg-[#552c67]"
            >
              Learn More!
            </Button>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center chevron">
          <span className="text-[#4caf50] font-bold text-lg mb-2">
            Scroll Down
          </span>
          <ChevronDown className="w-6 h-6 text-[#4caf50] animate-bounce" />
        </div>
      </section>

      <div className="content-container">
        <div className="contentWrapper">
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white intro-section">
            <div className="px-4 md:px-6">
              <h2 className="headline-text text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#4a235a]">
                Your Headline Here
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[#276749]">
                <div className="md:col-span-2 space-y-4">
                  <p className="text-[#276749] reveal-text">
                    Your main text content goes here. This area takes up the
                    left side and wraps around the image. You can add multiple
                    paragraphs or other content elements as needed to fully
                    explain your idea.
                  </p>
                  <p className=" text-[#276749] reveal-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <ul className="list-disc list-inside space-y-2 reveal-text text-[#276749]">
                    <li>Key point 1 about your information</li>
                    <li>Key point 2 to reinforce the idea</li>
                    <li>Key point 3 to provide additional context</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <Image
                    src="/placeholder.svg"
                    alt="Placeholder image"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover w-full" />
                  <p className=" text-[#276749] reveal-text">
                    This text appears under the image. It can provide additional
                    context, a caption, or continue the main content. The layout
                    allows for a seamless flow of information between the text
                    and visual elements.
                  </p>
                </div>
              </div>
              <div className="mt-6  text-[#276749]">
                <p className="reveal-text">
                  This final paragraph spans the full width, appearing below
                  both the main text and the image. It's an ideal place for
                  concluding thoughts or a call to action that ties everything
                  together.
                </p>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-[#d4edda] first-section">
            <div className="px-4 md:px-6">
              <h2
                id="headL2"
                className="headline-text text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#276749]"
              >
                Your Headline Here
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start text-[#4a235a]">
                <div className="space-y-4">
                  <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg"
                      alt="Placeholder image"
                      layout="fill"
                      objectFit="cover" />
                  </div>
                  <p className=" text-[#4a235a] reveal-text">
                    This text appears under the image. It can provide additional
                    context, a caption, or continue the main content. The layout
                    allows for a seamless flow of information between the visual
                    elements and text.
                  </p>
                </div>
                <div className="space-y-4">
                  <p className=" text-[#4a235a] reveal-text">
                    Your main text content goes here. This area takes up the
                    right side of the layout on larger screens. You can add
                    multiple paragraphs or other content elements as needed to
                    fully explain your idea.
                  </p>
                  <p className=" text-[#4a235a] reveal-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <ul className="list-disc list-inside space-y-2  text-[#4a235a] reveal-text">
                    <li>Key point 1 about your information</li>
                    <li>Key point 2 to reinforce the idea</li>
                    <li>Key point 3 to provide additional context</li>
                  </ul>
                </div>
              </div>
              <div className="mt-12  text-[#4a235a] reveal-text">
                <p>
                  This final paragraph spans the full width, appearing below
                  both the image and the main text. It's an ideal place for
                  concluding thoughts or a call to action that ties everything
                  together.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 bg-[#e0c6f5] second-section">
            <div className="mx-auto px-4">
              <h2 id="headL3" className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-[#4a235a] headline-text">
                The Fascinating World of Bioluminescence
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-[#276749]">
                  <p className="reveal-text">
                    Bioluminescence, the production and emission of light by
                    living organisms, is one of nature's most captivating
                    phenomena. This mesmerizing ability is found in a diverse
                    array of species, from microscopic bacteria to complex
                    marine life and even some terrestrial organisms. The
                    biochemical process behind this natural light show involves
                    a chemical reaction between a light-emitting molecule called
                    luciferin and an enzyme called luciferase, often requiring
                    oxygen and other cofactors.
                  </p>
                  <p className="reveal-text">
                    In the vast, dark expanses of the world's oceans,
                    bioluminescence serves a multitude of purposes. Some
                    deep-sea creatures use it as a form of camouflage,
                    counter-illuminating their undersides to match the faint
                    light from above and blend in with their surroundings.
                    Others employ bioluminescence as a defense mechanism,
                    startling predators with sudden flashes of light or even
                    detaching glowing body parts to distract attackers while
                    they escape.
                  </p>
                  <p className="reveal-text">
                    Perhaps most intriguingly, many species use bioluminescence
                    for communication. The famous firefly's rhythmic flashing is
                    a well-known example of bioluminescent courtship displays.
                    In the marine environment, certain species of anglerfish use
                    a glowing lure to attract prey, while some squid species
                    communicate through complex patterns of light produced by
                    photophores spread across their bodies.
                  </p>
                </div>
                <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Bioluminescent organisms in the deep sea"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl" />
                </div>
              </div>
              <div className="mt-12 space-y-6 text-[#276749]">
                <p className="reveal-text">
                  The applications of bioluminescence extend far beyond the
                  natural world. Scientists have harnessed this phenomenon for a
                  wide range of research and practical applications.
                  Bioluminescent proteins, such as Green Fluorescent Protein
                  (GFP) discovered in jellyfish, have revolutionized molecular
                  biology and medical research. These proteins can be used as
                  markers to study gene expression, track the spread of cancer
                  cells, and monitor the effectiveness of drug treatments.
                </p>
                <p className="reveal-text">
                  In environmental science, bioluminescent organisms serve as
                  valuable bioindicators. The presence or absence of certain
                  bioluminescent species can provide insights into water
                  quality, pollution levels, and overall ecosystem health. Some
                  cities are even exploring the use of bioluminescent plants as
                  a sustainable alternative to electric lighting, potentially
                  revolutionizing urban illumination.
                </p>
                <p className="reveal-text">
                  As our understanding of bioluminescence grows, so too does our
                  appreciation for its beauty and potential. From the twinkling
                  lights of fireflies on a summer evening to the ethereal glow
                  of deep-sea creatures, bioluminescence continues to inspire
                  wonder and drive scientific innovation. It serves as a
                  powerful reminder of the incredible diversity and ingenuity of
                  life on Earth, illuminating the path toward new discoveries in
                  biology, medicine, and technology.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 bg-[#d4edda] third-section">
            <div className="mx-auto px-4">
              <h2 id="headL4" className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-[#276749] headline-text">
                The Marvels of Deep Sea Exploration
              </h2>
              <div className="space-y-12 text-[#4a235a]">
                <div>
                  <p className=" leading-relaxed reveal-text">
                    The deep sea, Earth's final frontier, remains one of the
                    least explored and most mysterious environments on our
                    planet. Covering more than half of the Earth's surface and
                    reaching depths of up to 11,000 meters, the deep sea is a
                    realm of extreme pressure, perpetual darkness, and
                    near-freezing temperatures. Despite these harsh conditions,
                    it is home to an astonishing array of life forms, many of
                    which are yet to be discovered and studied.
                  </p>
                  <p className="mt-4  leading-relaxed reveal-text">
                    Exploration of the deep sea began in earnest in the mid-20th
                    century with the development of advanced submersibles and
                    remote sensing technologies. These tools have allowed
                    scientists to peer into the abyss, revealing ecosystems
                    teeming with bizarre and beautiful creatures adapted to life
                    in the extreme. From bioluminescent fish that create their
                    own light in the darkness to giant tube worms thriving near
                    hydrothermal vents, the deep sea continues to surprise and
                    inspire researchers and the public alike.
                  </p>
                </div>

                <div className="relative w-full aspect-video">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Deep sea exploration submersible near a hydrothermal vent"
                    layout="fill"
                    objectFit="cover" />
                </div>

                <div>
                  <p className=" leading-relaxed reveal-text">
                    One of the most significant discoveries in deep sea
                    exploration has been the revelation of entire ecosystems
                    based on chemosynthesis rather than photosynthesis.
                    Hydrothermal vents, first discovered in 1977, host
                    communities of organisms that derive their energy from
                    chemicals expelled from the Earth's crust, rather than
                    sunlight. These findings have expanded our understanding of
                    the potential for life in the universe, suggesting that life
                    could exist in similarly extreme environments on other
                    planets or moons.
                  </p>
                  <p className="mt-4  leading-relaxed reveal-text">
                    Deep sea exploration has also revealed the extent of human
                    impact on these remote ecosystems. Plastic pollution,
                    deep-sea mining, and the effects of climate change have all
                    been observed in the deepest parts of our oceans. This has
                    led to increased calls for conservation and sustainable
                    management of deep sea resources, highlighting the delicate
                    balance between scientific discovery, economic interests,
                    and environmental protection.
                  </p>
                  <p className="mt-4  leading-relaxed reveal-text">
                    As technology continues to advance, our ability to explore
                    and understand the deep sea grows. Autonomous underwater
                    vehicles, improved imaging systems, and long-term deep sea
                    observatories are providing unprecedented access to these
                    remote environments. Each expedition brings new discoveries,
                    from species previously unknown to science to potential
                    applications in medicine and biotechnology. The deep sea
                    remains a frontier of exploration, promising to unlock
                    secrets that could benefit humanity and expand our
                    understanding of life on Earth and beyond.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <WrapUp />

    </div><Footer /></>
  );
}
