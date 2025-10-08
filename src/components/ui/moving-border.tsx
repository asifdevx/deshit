import { cn } from "@/utils/cn";

interface AnimatedTrailProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The duration of the animation.
   * @default "10s"
   */
  duration?: string;

  contentClassName?: string;

  trailColor?: string;
  trailSize?: "sm" | "md" | "lg";
  borderColor?:string;
}

const sizes = {
  sm: 5,
  md: 10,
  lg: 20,
};

 function AnimatedBorderTrail({
  children,
  className,
  duration = "5s",
  trailColor = "purple",
  trailSize = "md",
  borderColor="black",
  contentClassName,
  ...props
}: AnimatedTrailProps) {
  return (
    <div
      {...props}
      className={cn("relative h-fit w-fit overflow-hidden shadow-sm ", className)}
    >
      <div
        className="absolute inset-0 h-full w-full animate-trail"
        style={{
          "--duration": duration ?? "10s",
          "--angle": "0deg",
          background: `conic-gradient(from var(--angle) at 50% 50%, ${borderColor}  ${100 - sizes[trailSize]}%, ${trailColor})`,
        }as React.CSSProperties} 
      />
      <div
        className={cn(
          "relative h-full w-full overflow-hidden ",
          contentClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}




const AnimatedBorder = ({ title, arrow , borderRadius,handleClick }: AnimatedBorderProps) => {
  const buttonClasses = cn(
    "group relative flex items-center justify-center gap-2 px-6 py-2 text-base font-medium transition-all duration-300",
    "bg-moving_button_bg hover:bg-btnBg",
    "text-black hover:text-white",
   
   
  );

  return (
    <AnimatedBorderTrail
      className="group p-[2px] transition-all duration-300 hover:scale-[1.05]"
      contentClassName=""
      trailColor="rgba(19,253,253,0.9)"
      trailSize="lg"
      style={{ borderRadius }}
      onClick={handleClick}
    >
      <button className={buttonClasses} style={{ borderRadius }}>
        <div className="flex items-center justify-center relative transition-all duration-300">
          {/* Arrow */}
          {arrow && (
            <span
              className={cn(
                "transition-all duration-500 ease-in-out text-[28px] mb-1 font-bold",
                "order-2 group-hover:order-1",
                "ml-3 group-hover:ml-0 group-hover:-translate-x-1"
              )}
            >
              {arrow}
            </span>
          )}

          {/* Text */}
          <p
            className={cn(
              "transition-all duration-500 ease-in-out text-lg tracking-wide",
              "order-1 group-hover:order-2",
              "group-hover:translate-x-1"
            )}
          >
            {title}
          </p>
        </div>
      </button>
    </AnimatedBorderTrail>
  );
};

export default AnimatedBorder;