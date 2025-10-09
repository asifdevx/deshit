
import { AboutList } from "@/config/AboutList";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import Image from "next/image";

const About: React.FC = () => {
  const countersRef = useRef<HTMLDivElement[]>([]); 
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
  
    countersRef.current.forEach((counter) => {
      if (!counter) return;
  
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = parseInt(counter.dataset.target || "0", 10);
  
              gsap.fromTo(entry,
                { value: 0 },
                { value: target, duration: 4,delay:1, ease: "power2.out", onUpdate: function () {
                    counter.textContent = `${Math.floor(this.targets()[0].value).toString()}+ `;
                  }
                }
              );
  
              observer.disconnect();
            }
          });
        },
        { threshold: 0.3 }
      );
  
      observer.observe(counter);
      observers.push(observer);
    });
  
    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  

  return (
    <section className="max-screen w-full mt-12" id="about">
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center bg-cardBg rounded-[30px] px-6 md:px-0 py-10">
        {AboutList.map(({ img, count, title }, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center text-center gap-2"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full">
              <Image
                src={`${img}.svg`}
                alt={title}
                width={34}
                height={34}
                className="object-contain"
              />
            </div>
            <div
              className="text-4xl font-bold text-white counter overflow-hidden "
              ref={(el) => {
                if (el) countersRef.current[idx] = el;
              }}
              data-target={count}
            >
              0
            </div>
            <p className="text-sm text-gray-300">{title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default About