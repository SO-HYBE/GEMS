import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import contactImg from "../../public/contact-img.png";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";

export default function ContactForm() {

    useEffect(() => {
        const formElement = document.getElementById("custom-google-form") as HTMLFormElement | null;

        if (formElement) {
          const handleSubmit = (e: Event) => {
            e.preventDefault();
    
            const formData = new FormData(formElement);
            const formParams = new URLSearchParams();
    
            for (const [key, value] of formData.entries()) {
              formParams.append(key, value.toString());
            }
    
            fetch(
              "https://docs.google.com/forms/d/e/1FAIpQLSf1MM04NEJrGI7gMIg6xCd10zRMOFzQRs8w2d4wz43njtHTvQ/formResponse",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
                body: formParams.toString(),
                mode: 'no-cors'
              }
            )
              .then(() => {
                console.log("Form submission successful");
              })
              .catch((error) => {
                console.error("Error submitting form:", error);
              });
          };
    
          // Add the submit event listener
          formElement.addEventListener("submit", handleSubmit);
    
          // Cleanup: Remove the event listener when the component unmounts
          return () => {
            (formElement as HTMLElement).removeEventListener("submit", handleSubmit);
          };
        }
    }, [])

    const ref = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useIsomorphicLayoutEffect(() => {
        if (typeof window !== "undefined") {
          const ctx = gsap.context(() => {
        const tlContact: GSAPTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".contact-section",
            start: "-30% 30%",
            end: "30% 20%",
            scrub: true,
            once: true
          },
          defaults: {
            ease: "power4.inOut",
          },
        });

        tlContact
          .to(".contact-section", {
            background: "#333333",
          },"<")
          .to(".main-contact-text", {
            color: "#e0e0e0",
          },"<")
          .to(".card-container", {
            background: "white",
          },"<")
          .to(".contact-text", {
            color: "#333333",
          },"<");
        }, ref);

        return () => ctx.revert();
      }

    }, []);

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto shadow-2xl">
        <CardHeader>
          <CardTitle className="text-[#6c3483]">Thank You!</CardTitle>
          <CardDescription className="text-[#4caf50]">Your question has been submitted successfully.</CardDescription>
        </CardHeader>
      </Card>
    )
  }

  return (
    <div ref={ref}>
    <div className="w-full text-[#e0e0e0] shadow-2xl contact-section">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[#333333] md:text-4xl main-contact-text">
              Questions & Suggestions
            </h2>
            <p className="text-lg text-[#333333]/90 text-pretty main-contact-text">
              We&apos;d love to hear from you! Whether you have a question about our
              solutions or want to share a suggestion, please don&apos;t hesitate to
              reach out!
            </p>
            <Image
              alt="Contact illustration"
              className="rounded-lg object-cover"
              height="300"
              src={contactImg}
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width="400"
            />
          </div>
          <form className="space-y-4 rounded-lg bg-[#333333] p-6 shadow-lg card-container" id="custom-google-form" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none contact-text text-[#e0e0e0] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"                
              >
                Name
              </label>
              <Input
                className="text-[#333333]"
                id="entry.1273885290"
                placeholder="Enter your name"
                name="entry.1273885290"
                required
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none contact-text text-[#e0e0e0] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="email"
              >
                Email
              </label>
              <Input
                className="text-[#333333]"
                id="entry.728304703"
                placeholder="Enter your email"
                type="email"
                name="entry.728304703"
                required
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none contact-text text-[#e0e0e0] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="message"
              >
                Message
              </label>
              <Textarea
                className="min-h-[100px] text-[#333333]"
                id="entry.696714891"
                name="entry.696714891"
                placeholder="Enter your message"
                required
              />
            </div>
            <Button disabled={isSubmitting} className="w-full hover:border-4 hover:border-[#276749] hover:text-[#4a235a] hover:text-lg duration-500 hover:font-bold hover:bg-white active:bg-[#276749] active:text-white">{isSubmitting ? "Submitting..." : "Submit"}</Button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
