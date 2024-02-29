import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StickyFooter from "./components/StickyFooter";
import NavigationContainer from "./components/nav/NavigationContainer";

function App() {
  const animationTriggerRef = useRef<HTMLDivElement>(null);
  const movingDivRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Animation for the moving div
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: animationTriggerRef.current,
          start: "center center",
          end: "+=100%",
          toggleActions: "play none none reverse",
          pin: true,
          scrub: true,
        },
        repeat: -1, // Infinite repeat
      });

      // Move the div to the right avoiding the text block
      tl.to(movingDivRef.current, {
        left: "50%", // Move to the center
        yoyoEase: true,
        pin: true,
      });
    }, [animationTriggerRef, movingDivRef]);

    return () => ctx.revert();
  }, []);

  return (
    <div className='m-auto w-full h-screen'>
      <div className='w-[4px] h-full bg-red-500 absolute left-[50%] z-50'></div>
      <NavigationContainer>
        <nav className='w-full sm:w-5/6 m-auto p-4 text-white font-bold text-2xl'>
          Brick by Brick
        </nav>
      </NavigationContainer>
      <div className='h-dvh w-full'>
        <div className='w-full h-1/3 bg-yellow-500 flex justify-center items-center'>
          <p className='font-bold text-2xl'>section</p>
        </div>
        <div
          ref={animationTriggerRef}
          className='w-full h-screen flex justify-end bg-blue-500 text-white relative'
        >
          <div
            ref={movingDivRef}
            className='absolute left-0 top-0 h-1/4 w-1/2 bg-gray-500 flex items-center justify-center'
          >
            <p>test text</p>
          </div>
          {/* Line in the middle */}
          <div className='w-full h-[4px] bg-red-500 absolute top-1/2 left-0 transform -translate-y-1/2'></div>

          <div className='w-1/2 h-1/4 flex items-center justify-center bg-green-500'>
            <p className='p-8'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
        <div className='w-full h-1/3 bg-red-500 flex justify-center items-center'>
          <p className='font-bold text-2xl'>section</p>
        </div>
        <div className='w-full h-1/3 bg-green-500 flex justify-center items-center'>
          <p className='font-bold text-2xl'>section</p>
        </div>
      </div>
      <StickyFooter />
    </div>
  );
}

export default App;
