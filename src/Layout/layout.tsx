import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";

const Layout = (props: any) => {
  return (
    <div className="w-full min-h-screen flex flex-col bg text-white">
      <Header />
      <div className=" mt-20">{props.children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
