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
import hishamPic from "../public/hisham-pic.jpg";
import shahdPic from "../public/shahd-pic.jpg";
import mariamPic from "../public/mariam-pic.jpg";
import omniaPic from "../public/omnia-pic.jpg";

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
          const rotateX = (mouseY / height) * 40 - 20; // Y-axis: -15 to 15 degrees
          const rotateY = (mouseX / width) * 40 - 20; // X-axis: -20 to 20 degrees

          // Apply rotation to each image
          images.forEach((img, index) => {
            const depth = index * 10;
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


        //--------------------------------------------------------------------------- INFO CONTENT HEADLINE ON SCROLL ANIMATION -------------------------
        const headlineText = gsap.utils.toArray(".headline-text");

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
              trigger: splitHead.words,
              start: "-350% 50%",
              end: "-250% 20%",
              once: true,
              scrub: true
            },
          });
        });

      //--------------------------------------------------------------------------- INFO CONTENT HEADLINE ON SCROLL ANIMATION -------------------------
      
      //--------------------------------------------------------------------------- INFO CONTENT PARAGRAPH ON SCROLL REVEAL ANIMATION -------------------------
      const revealText = document.querySelectorAll(".reveal-text");

      revealText.forEach((char) => {

        const infoContentText = new SplitType((char as HTMLElement), {types: "chars,words"});

        gsap.from(infoContentText.chars, {
          scrollTrigger:{
            trigger: char,
            start: "top 95%",
            end: "25% 5%",
            scrub: false,
            toggleActions: "play pause resume pause"
          },
          opacity:0.2,
          stagger:0.0075
        });


      });
    
      //--------------------------------------------------------------------------- INFO CONTENT PARAGRAPH ON SCROLL REVEAL ANIMATION -------------------------

      //--------------------------------------------------------------------------- INFO CONTENT BG COLOR CHANGE ANIMATION ------------------------------------

      const bgTl = gsap.timeline();

      bgTl.to(".intro-section",{
        scrollTrigger: {
          trigger: ".intro-section",
          start: "-30% 30%",
          end: "60% 20%",
          scrub: true,
          once: true
        },
        background: "#d4edda"
      })
      bgTl.to(".first-section",{
        scrollTrigger: {
          trigger: ".first-section",
          start: "-30% 30%",
          end: "60% 20%",
          scrub: true,
          once: true
        },
        background: "#F4E7FF"
      })
      bgTl.to(".second-section",{
        scrollTrigger: {
          trigger: ".second-section",
          start: "-30% 30%",
          end: "60% 20%",
          scrub: true,
          once: true
        },
        background: "#d4edda"
      })
      bgTl.to(".third-section",{
        scrollTrigger: {
          trigger: ".third-section",
          start: "-30% 30%",
          end: "60% 20%",
          scrub: true,
          once: true
        },
        background: "#F4E7FF"
      })

      //--------------------------------------------------------------------------- INFO CONTENT BG COLOR CHANGE ANIMATION ------------------------------------
      
      //--------------------------------------------------------------------------- INFO CONTENT PICTURE REVEAL ANIMATION ------------------------------------

      const picTl = gsap.timeline({defaults: {ease: "sine.out"}});

      picTl.fromTo(".hisham-pic",{
        x: 400,
        visibility: "hidden",

      },{
        x: 0,
        autoAlpha:1,
        scrollTrigger: {
          trigger: ".hisham-pic",
          start: "-60% 40%",
          end: "40% 40%",
          scrub: true,
          once: true
        }
      })

      picTl.fromTo(".shahd-pic",{
        x: -400,
        visibility: "hidden",

      },{
        x: 0,
        autoAlpha:1,
        scrollTrigger: {
          trigger: ".shahd-pic",
          start: "-60% 40%",
          end: "40% 40%",
          scrub: true,
          once: true
        }
      })


      picTl.fromTo(".omnia-pic",{
        y: -500,
        visibility: "hidden",

      },{
        y: 0,
        autoAlpha:1,
        scrollTrigger: {
          trigger: ".omnia-pic",
          start: "10% 40%",
          end: "120% 40%",
          scrub: true,
          once: true,
        }
      })

      picTl.fromTo(".mariam-pic",{
        x: 400,
        visibility: "hidden",

      },{
        x: 0,
        autoAlpha:1,
        scrollTrigger: {
          trigger: ".mariam-pic",
          start: "-60% 40%",
          end: "40% 40%",
          scrub: true,
          once: true
        }
      })
      

      //--------------------------------------------------------------------------- INFO CONTENT PICTURE REVEAL ANIMATION ------------------------------------


      
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
                width={190}
                height={190}
                sizes="100%"
                className="h-auto w-[90%] md:w-[60%]"
                priority />
            </a>
          </div>
          <div className="flex flex-col items-center justify-between flex-grow">
            <div className="flex flex-col lg:flex-row items-center justify-between w-full mb-8 lg:mb-0 ">
              <div className="text-container lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
                <h1 className="main-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-[#6c3483]">
                  Balancing Earth&apos;s Climate and Society&apos;s Scales
                </h1>
                <p className="sub-text text-2xl sm:text-2xl mb-6 lg:mb-0 text-[#4caf50]">
                  When gender equality thrives, so does the planet—unleashing the full potential of humanity to combat the climate crisis
                </p>
              </div>
              <div className="lg:w-1/2 w-[60vw] flex justify-center lg:justify-end illustration-container ">
                <div className="parallax-container w-full h-[80vh] bg-cover ">
                  <Image
                    className=" overflow-visible parallax-img img1 z-[-10] h-auto w-full"
                    fill
                    priority
                    sizes="100%"
                    src={bgCircle}
                    alt="Image 1" />
                  <Image
                    className=" overflow-visible parallax-img img2 z-[10] h-auto w-full"
                    fill
                    priority
                    sizes="100%"
                    src={woman}
                    alt="Image 2" />
                  <Image
                    className=" overflow-visible parallax-img img3 z-[15] h-auto w-full"
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
              <h2 className="headline-text text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#4a235a] md:leading-relaxed">
                Empowering Women for Climate Resilience: Addressing Gender Disparities in a Changing World
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[#276749]">
                <div className="md:col-span-2 space-y-4">
                  <p className="text-[#276749] reveal-text text-lg">
                    Climate change disproportionately affects women, particularly in developing countries, where they often bear the brunt of climate-related events due to their roles in agriculture, water collection, and household care. The UNDP reports that 80% of people displaced by climate change are women. Empowering women through education and leadership can enhance resilience to climate change, as educated women are more likely to adopt sustainable practices and contribute to better environmental governance. Conversely, climate change exacerbates economic and health disparities, forcing women into increased unpaid labor and heightening health risks from climate-induced diseases. Effective policy solutions must integrate gender-responsive approaches, ensuring women have access to resources, decision-making roles, and climate finance that prioritizes gender equality. Addressing these interconnected issues is essential for building resilient communities and promoting sustainable development.
                  </p>
                  <br />
                  <br />
                  <p className="text-[#276749] reveal-text text-lg">
                  Resources: <a className="text-sky-400 after:content-['_↗'] ..." href=" https://akzente.giz.de/en/climate-crisis-gender-women#climate-gender " target="_blank">The Climate Crisis Is Tougher On Women</a> 
                  </p>
                </div>
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl" >
                    <Image
                      src={hishamPic}
                      alt="girl struggling in a flood"
                      layout="fill"
                      sizes="100%"
                      className="hisham-pic"
                      objectFit="cover" />
                  </div>
              </div>
              <div className="mt-8  text-[#276749]">

                <p className="text-3xl text-[#4a235a] font-bold ">
                  Practical Solutions
                </p>

                <p className="reveal-text text-xl">
                  Implement a Gender-Responsive Climate Resilience Framework that integrates gender equality into climate change adaptation and mitigation strategies.
                </p>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-[#d4edda] first-section">
            <div className="px-4 md:px-6">
              <h2
                id="headL2"
                className="headline-text text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#276749] md:leading-relaxed"
              >
                Climate Change: A Catalyst for Gender Inequality and Vulnerability Among Women and Girls
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start text-[#4a235a]">
                <div className="space-y-4">
                  <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl" >
                    <Image
                      src={shahdPic}
                      alt="Various natural disasters"
                      layout="fill"
                      sizes="100%"
                      className="shahd-pic"
                      objectFit="cover" />
                  </div>
                </div>
                <div className="space-y-4">
                  <p className=" text-[#4a235a] reveal-text text-lg">
                  Climate-related disasters severely impact women and girls, undermining their economic and educational opportunities while increasing their vulnerability to gender-based violence (GBV) and health risks. Scarcity of essential resources affects menstrual health and forces difficult choices, such as sacrificing food or facing early marriages. Displacement heightens risks of exploitation, particularly in rural communities where women manage resource collection and family care.
                  
                  </p>
                  <p className=" text-[#4a235a] reveal-text text-lg">
                  As climate stressors worsen, many women remain immobilized by domestic responsibilities, while men migrate for work, reinforcing gender inequalities. In regions like East Africa and the MENA, climate events amplify GBV risks, leading to higher rates of intimate partner violence and harmful practices.                  
                  </p>
                  <br />
                  <p className="text-[#4a235a]  reveal-text text-md">
                  Resources: <a className="text-sky-400 after:content-['_↗'] ..." href=" https://gbvaor.net/sites/default/files/2021-03/gbv-aor-helpdesk-climate-change-gbv-19032021.pdf " target="_blank">Climate Change and Gender-Based Violence</a> 
                  </p>
                </div>
              </div>
                
              <div className="mt-12  text-[#4a235a]">
                <p className="text-3xl text-[#276749] font-bold ">
                  Practical Solutions
                </p>
                <p className="reveal-text text-xl">
                A practical solution to address the impact of climate change on women and girls could be the establishment of community resilience hubs: 
                partnering with local organizations to provide safe spaces for women and girls during crises, offering shelter and support services; creating local centers that provide access to essential resources, such as menstrual health products, food supplies, and water purification systems; implementing educational workshops that teach women and girls about climate change, their rights, and available resources; and establishing support groups that connect women to share experiences and strategies for coping with climate impacts and GBV.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 bg-[#F4E7FF] second-section">
            <div className="mx-auto px-4">
              <h2 id="headL3" className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-[#4a235a] headline-text">
                The Health Crisis at the Intersection of Gender Inequality and Climate Change
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-[#276749]">
                  <p className="reveal-text">
                  The intersection of gender equality and climate change significantly impacts women&apos;s health, particularly in low and lower-middle-income countries. Climate change exacerbates existing health risks, such as increased maternal and child health issues. Research indicates that rising temperatures can lead to higher rates of stillbirths and contribute to the spread of vector-borne diseases like malaria and dengue fever, which adversely affect maternal and neonatal outcomes. Women often face limited access to healthcare facilities, making them more susceptible to injuries and decreasing their overall survival rates. During climate-related disasters, their access to health services is further restricted, jeopardizing their livelihoods and well-being.
                  </p>
                  <p className="reveal-text">
                  Moreover, the environmental changes caused by climate change create a vicious cycle of vulnerability for women and girls. With inadequate access to information, resources, and training, they are less prepared to respond to health crises or disasters. This disparity is particularly evident among marginalized groups, such as Afro-descendent women, who often receive less training and support. As a result, the ongoing climate crisis not only threatens women&apos;s immediate health but also perpetuates intergenerational cycles of poor health and reduced quality of life for future generations. Addressing these challenges is crucial for promoting gender equality and improving health outcomes in the face of climate change.
                  </p>
                  <br />
                  <p className="text-[#4a235a]  reveal-text text-md">
                  Resources: <a className="text-sky-400 after:content-['_↗'] ..." href=" https://arabstates.unwomen.org/en/stories/explainer/2022/03/explainer-how-gender-inequality-and-climate-change-are-interconnected" target="_blank">How Gender Inequality And Climate Change Are Interconnected</a> 
                  </p>
                </div>
                <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src={mariamPic}
                    alt="Pesticides applied by a farmer"
                    layout="fill"
                    objectFit="cover"
                    sizes="100%"
                    className="rounded-xl mariam-pic" />
                </div>
              </div>
              <div className="mt-12 space-y-6 text-[#276749]">
              <p className="text-3xl text-[#4a235a] font-bold ">
                  Practical Solutions
              </p>

              <p className="reveal-text text-xl">
              Offering training sessions for women in rural areas on sustainable agricultural practices, resource management, and climate adaptation strategies, prioritizing reproductive health services, including family planning and maternal care, and providing financial support for girls&apos; education, focusing on STEM subjects to equip them with skills relevant to climate science and sustainability.
              </p>

              </div>
            </div>
          </section>

          <section className="py-16 bg-[#d4edda] third-section">
            <div className="mx-auto px-4">
              <h2 id="headL4" className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-[#276749] headline-text">
                Bridging the Gap: Advancing Gender Equality for a Resilient Climate Future
              </h2>
              <div className="space-y-12 text-[#4a235a]">
                <div>
                  <p className=" leading-relaxed reveal-text">
                  Climate change and gender equality are closely linked, particularly in developing countries where women face disproportionate impacts. Due to their roles in agriculture, water collection, and household care, women are more vulnerable to climate-related events like droughts and floods. For instance, in Sub-Saharan Africa, women produce 60-80% of food but often lack equal access to resources and land rights, exacerbating food insecurity. This vulnerability is further compounded by increased workloads and limited decision-making power, leading to economic disparities and heightened health risks, especially in low-income communities.
                  </p>
                  <p className="mt-4  leading-relaxed reveal-text">
                  Empowering women is crucial for enhancing resilience to climate change. Education plays a vital role, as educated women are more likely to adopt sustainable practices and contribute effectively to climate solutions. Policies that prioritize gender-responsive climate financing, improve access to resources, and promote women&apos;s leadership in decision-making can drive positive outcomes. By integrating gender equality into climate action, we not only empower women but also strengthen community resilience, paving the way for sustainable development and a more equitable future.
                  </p>
                  <br />
                  <p className="text-[#4a235a]  reveal-text text-md">
                  Resources: <a className="text-sky-400 after:content-['_↗'] ..." href=" https://arabstates.unwomen.org/en/stories/explainer/2022/03/explainer-how-gender-inequality-and-climate-change-are-interconnected" target="_blank">How Gender Inequality And Climate Change Are Interconnected</a> 
                  </p>
                </div>

                <div className="relative h-[60vh] mx-[22rem] rounded-lg overflow-hidden shadow-xl" >
                    <Image
                      src={omniaPic}
                      alt="Global Mean Surface Temperature (GISS)"
                      layout="fill"
                      sizes="100%"
                      className="omnia-pic"
                      objectFit="fill" />
                </div>

              <div className="mt-8">
                <p className="text-3xl text-[#276749] font-bold ">
                  Practical Solutions
                </p>
                <p className="reveal-text text-xl">
                Offering training sessions for women in rural areas on sustainable agricultural practices, resource management, and climate adaptation strategies, prioritizing reproductive health services, including family planning and maternal care, and providing financial support for girls&apos; education, focusing on STEM subjects to equip them with skills relevant to climate science and sustainability.                </p>
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
