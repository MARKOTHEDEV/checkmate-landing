import Nav from "@/components/Nav";
import Footer from "@/app/components/Footer";

type Prop = React.PropsWithChildren<{}>;
const GeneralLayout = ({ children }: Prop) => {
  return (
    <div>
      <Nav />

      {children}

      <Footer />
    </div>
  );
};

export default GeneralLayout;
