"use client";

import Image from "next/image";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import education from "../../public/education.png";
import climateProb from "../../public/climate-problems.png";
import technology from "../../public/technology.jpg";
import genderEq from "../../public/gender-eq.jpg";

export default function WrapUp() {
  const servRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useIsomorphicLayoutEffect(() => {
    if (typeof window !== "undefined") {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline();

        tl.fromTo(
          "#serv-card-1",
          {
            y: -150,
            opacity: 0,
            visibility: "hidden",
          },
          {
            y: 0,
            autoAlpha: 1,
            scrollTrigger: {
              trigger: "#serv-card-1",
              start: "-35% 50%",
              end: "50% 40%",
              scrub: true,
            },
          }
        )
          .fromTo(
            "#serv-card-2",
            {
              y: 150,
              opacity: 0,
              visibility: "hidden",
            },
            {
              y: 0,
              autoAlpha: 1,
              scrollTrigger: {
                trigger: "#serv-card-2",
                start: "-35% 50%",
                end: "50% 40%",
                scrub: true,
              },
            }
          )
          .fromTo(
            "#serv-card-3",
            {
              y: 150,
              opacity: 0,
              visibility: "hidden",
            },
            {
              y: 0,
              autoAlpha: 1,
              scrollTrigger: {
                trigger: "#serv-card-3",
                start: "-35% 50%",
                end: "50% 40%",
                scrub: true,
              },
            }
          )
          .fromTo(
            "#serv-card-4",
            {
              y: -150,
              opacity: 0,
              visibility: "hidden",
            },
            {
              y: 0,
              autoAlpha: 1,
              scrollTrigger: {
                trigger: "#serv-card-4",
                start: "-35% 50%",
                end: "50% 40%",
                scrub: true,
              },
            }
          )
          .fromTo(
            "#serv-card-5",
            {
              y: -150,
              opacity: 0,
              visibility: "hidden",
            },
            {
              y: 0,
              autoAlpha: 1,
              scrollTrigger: {
                trigger: "#serv-card-5",
                start: "-35% 50%",
                end: "50% 40%",
                scrub: true,
              },
            }
          )
          .fromTo(
            "#serv-card-6",
            {
              y: 150,
              opacity: 0,
              visibility: "hidden",
            },
            {
              y: 0,
              autoAlpha: 1,
              scrollTrigger: {
                trigger: "#serv-card-6",
                start: "-35% 50%",
                end: "50% 40%",
                scrub: true,
              },
            }
          )
          .fromTo(
            "#serv-card-7",
            {
              y: 150,
              opacity: 0,
              visibility: "hidden",
            },
            {
              y: 0,
              autoAlpha: 1,
              scrollTrigger: {
                trigger: "#serv-card-7",
                start: "-35% 50%",
                end: "50% 40%",
                scrub: true,
              },
            }
          )
          .fromTo(
            "#serv-card-8",
            {
              y: -150,
              opacity: 0,
              visibility: "hidden",
            },
            {
              y: 0,
              autoAlpha: 1,
              scrollTrigger: {
                trigger: "#serv-card-8",
                start: "-20% 60%",
                end: "50% 40%",
                scrub: true,
              },
            }
          );
      }, servRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section
      id="services-section"
      className="w-full text-wrap py-12 md:py-24 lg:py-32 bg-[#fafafa]"
      ref={servRef}
    >
      <div className="container grid gap-12 px-4 md:px-6 overflow-hidden">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div id="serv-card-1" className="space-y-4 text-wrap order-1">
            <div className="inline-block rounded-lg bg-[#4caf50] px-3 py-1 text-sm text-[#fafafa] font-bold font-poppins">
              Climate Action
            </div>
            <h3 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-poppins text-[#6c3483]">
              Tackling Climate Change Together
            </h3>
            <p className="md:text-xl/relaxed font-poppins text-[#4caf50]">
              Climate change is a global crisis that requires collaborative
              solutions. Our initiative focuses on empowering communities,
              especially women, to take an active role in environmental
              sustainability and climate resilience.
            </p>
          </div>
          <Image
            id="serv-card-2"
            priority
            src={climateProb}
            alt="Climate Action"
            width={600}
            height={400}
            className="rounded-lg overflow-hidden order-2"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
        </div>

        <div className="grid gap-12 md:grid-cols-2 items-center">
          <Image
            id="serv-card-3"
            priority
            src={genderEq}
            alt="Gender Equality"
            width={600}
            height={400}
            className="rounded-lg overflow-hidden order-4 md:order-3"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
          <div
            id="serv-card-4"
            className="space-y-4 text-wrap order-3 md:order-4"
          >
            <div className="inline-block rounded-lg bg-[#4caf50] px-3 py-1 text-sm text-[#fafafa] font-bold font-poppins">
              Gender Equality
            </div>
            <h3 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-poppins text-[#6c3483]">
              Empowering Women in Climate Leadership
            </h3>
            <p className="md:text-xl/relaxed font-poppins text-[#4caf50]">
              Women are disproportionately affected by climate change, but they
              also hold the key to many solutions. We advocate for gender
              equality by ensuring women have the resources and leadership
              opportunities to drive sustainable change.
            </p>
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div
            id="serv-card-5"
            className="space-y-4 text-wrap order-5 md:order-5"
          >
            <div className="inline-block rounded-lg bg-[#4caf50] px-3 py-1 text-sm text-[#fafafa] font-bold font-poppins">
              Innovation & Technology
            </div>
            <h3 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-poppins text-[#6c3483]">
              Driving Climate Solutions with Technology
            </h3>
            <p className="md:text-xl/relaxed font-poppins text-[#4caf50]">
              Innovative technologies can accelerate progress towards climate
              justice and gender equality. Our team develops data-driven tools
              that highlight the gender-climate nexus, enabling policymakers to
              create equitable climate action plans.
            </p>
          </div>
          <Image
            id="serv-card-6"
            priority
            src={technology}
            alt="Innovation & Technology"
            width={600}
            height={400}
            className="rounded-lg overflow-hidden order-6 md:order-6"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
        </div>

        <div className="grid gap-12 md:grid-cols-2 items-center pb-[10vh]">
          <Image
            id="serv-card-7"
            priority
            src={education}
            alt="Education & Awareness"
            width={600}
            height={400}
            className="rounded-lg overflow-hidden order-8 md:order-7"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
          <div
            id="serv-card-8"
            className="space-y-4 text-wrap order-7 md:order-8"
          >
            <div className="inline-block rounded-lg bg-[#4caf50] px-3 py-1 text-sm text-[#fafafa] font-bold font-poppins">
              Education & Awareness
            </div>
            <h3 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-poppins text-[#6c3483]">
              Raising Awareness, Building Futures
            </h3>
            <p className="md:text-xl/relaxed font-poppins text-[#4caf50]">
              Education is key to addressing both gender inequality and climate
              change. We focus on raising awareness through community programs
              that equip women with the knowledge and skills to lead in climate
              action.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
