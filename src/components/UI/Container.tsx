import { ReactNode } from "react";

interface IProps {
  class1: string;
  children: ReactNode;
}
const Container = (props: IProps) => {
  return (
    <section className={props.class1}>
      <div>{props.children}</div>
    </section>
  );
};

export default Container;
