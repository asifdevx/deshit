
import Header from "@/components/Header";

const Layout = (props: any) => {
  return (
    <div className="w-full min-h-screen  flex flex-col bg text-white overflow-y-scroll">
      <Header />
      <div className=" mt-20">{props.children}</div>


    </div>
  );
};

export default Layout;
