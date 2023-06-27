import { store } from "@/store/store";
import { Provider } from "react-redux";

interface WrapperProps {
  children: React.ReactElement | React.ReactElement[];
}

const Wrapper = ({ children }: WrapperProps): React.ReactElement => {
  return <Provider store={store}>{children}</Provider>;
};

export default Wrapper;
