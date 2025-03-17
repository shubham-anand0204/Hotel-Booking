import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

type Props = {
  children: React.ReactNode;//children is specially reserved for passing the props between the fragments
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <div className="container mx-auto py-10 flex-1">{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
