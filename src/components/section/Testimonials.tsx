
import { testimonials } from "@/config/TestemonialList";
import Image from "next/image";
import SectionHeading from "../HelperCom/sectionHeading";
import ContentSlider from "../HelperCom/Slider";

const Testimonials = () => {
  return (
    <section className="w-full  px-5 flex justify-center  flex-col gap-4 mt-10 " id="testimonials">
      <SectionHeading title="Client Reviews" hasDes={false} />
  
    <ContentSlider autoplayDelay={4000} >
      {testimonials.map((t, i) => (
        <div
          key={i}
          className="review_card"
        >
          <Image src="/reviewIcon.svg" alt="Review Icon" width={70} height={60} />
          <div className="flex gap-1 text-red-500 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
          <p className="text-white/80 flex-1 text-sm">"{t.text}"</p>
          <div className="flex items-center gap-4 mt-4">
            <Image
              src={t.image}
              alt={t.name}
              width={60}
              height={60}
              className="rounded-full object-cover"
            />
            <div>
              <h5 className="font-semibold">{t.name}</h5>
              <p className="text-gray-400 text-sm">{t.title}</p>
            </div>
          </div>
        </div>
      ))}
    </ContentSlider>  
    </section>
  );
};

export default Testimonials;
