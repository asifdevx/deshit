declare type customBtnProps = {
  title: string;
  othercss: string;
  handleclick?: () => void;
  isLink?: boolean;
  linkUrl: string;
  icon?: string;
};
declare type InputProps = {
  placeholder: string;
  name: string;
  type: string;
  value: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};


type SideBarItem = {
  label:string,
  route:string,
 

}


declare type CusomBtnProps ={
  text:string | ReactNode ,
  type?:"button"| "submit",
  handleclick?:()=>void,
  othercss:string,
  icon?:IconType

}

interface MobileSideBarProps {
  open:boolean,
  setOpen:(open: boolean) => void,
  items:SideBarItem[],
 

}



// moving border 
type AnimatedBorderProps = {
  title: string;
  arrow?: string;
  borderRadius?: string;
  handleClick?:()=>void;
};