declare type customBtnProps = {
  title: string;
  othercss: string;
  handleclick?: () => void;
  isLink?: boolean;
  linkUrl: string;
  icon?: string;
};


type SideBarItem = {
  label: string;
  route: string;
};

declare type CusomBtnProps = {
  text: string | ReactNode;
  type?: "button" | "submit";
  handleclick?: () => void;
  othercss: string;
  icon?: IconType;
};

interface MobileSideBarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  items: SideBarItem[];
}

type InputProps = {
  placeholder: string;
  name: string;
  type: string;
  value: string;
  handleChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
  othercss?: string;
};

// moving border
type AnimatedBorderProps = {
  title: string;
  arrow?: string;
  borderRadius?: string;
  handleClick?: () => void;
  type?: "button" | "submit" | "reset";  
  
};
declare module "swiper/css";
declare module "swiper/css/navigation";
declare module "swiper/css/pagination";