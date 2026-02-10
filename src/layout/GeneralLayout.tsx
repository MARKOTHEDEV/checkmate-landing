import Nav from "@/components/Nav";

type Prop = React.PropsWithChildren<{}>;
const GeneralLayout = ({ children }: Prop) => {
  return (
    <div>
      <Nav />

      {children}
    </div>
  );
};

export default GeneralLayout;
