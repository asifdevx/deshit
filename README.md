yarn remove react-icons
yarn add react-icons@5.4.0

 <div
            className="flex flex-col bg-[#4C4C4C3B] text-white rounded-2xl shadow-lg 
                       p-[clamp(12px,2vw,24px)] 
                       w-full mx-auto transition-all duration-300
                       min-h-[clamp(300px,40vw,420px)]
                       max-w-[clamp(260px,80vw,420px)]"
           >
            {/* Review Icon */}
            <Image
              src="/reviewIcon.svg"
              alt="Review Icon"
              width={70}
              height={60}
              className="mb-[clamp(6px,1vw,12px)] self-start"
            />
        
            {/* Rating Stars */}
            <div className="flex items-center gap-[2px] mb-[clamp(6px,1vw,10px)]">
              {Array.from({ length: 5 }, (_, idx) => (
                <span
                  className="text-[clamp(14px,2vw,18px)] text-red-500"
                  key={idx}
                >
                  ★
                </span>
              ))}
            </div>
        
            {/* Review Text */}
            <p
              className="text-white/80 leading-relaxed flex-1 overflow-hidden text-ellipsis
                         text-[clamp(12px,1.8vw,15px)]"
            >
              "{testimonial.text}"
            </p>
        
            {/* User Info */}
            <div className="flex items-center gap-[clamp(8px,1vw,16px)] mt-auto pt-[clamp(8px,1vw,16px)]">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={60} 
                height={60}
                className="rounded-full object-cover border border-white/10"
              />
              <div className="flex flex-col">
                <h5 className="font-semibold text-[clamp(12px,1.8vw,15px)]">
                  {testimonial.name}
                </h5>
                <p className="text-gray-400 text-[clamp(10px,1.5vw,13px)] leading-tight">
                  {testimonial.title}
                </p>
              </div>
            </div>
          </div>