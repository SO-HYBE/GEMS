import Image from "next/image"

export default function InfoSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Your Headline Here
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            <p className="text-muted-foreground">
              Your main text content goes here. This area takes up the left side and wraps around the image. 
              You can add multiple paragraphs or other content elements as needed to fully explain your idea.
            </p>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
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
              className="rounded-lg object-cover w-full"
            />
            <p className="text-muted-foreground">
              This text appears under the image. It can provide additional context, a caption, or continue the main content.
              The layout allows for a seamless flow of information between the text and visual elements.
            </p>
          </div>
        </div>
        <div className="mt-6 text-muted-foreground">
          <p>
            This final paragraph spans the full width, appearing below both the main text and the image. 
            It's an ideal place for concluding thoughts or a call to action that ties everything together.
          </p>
        </div>
      </div>
    </section>
  )
}