import { createContext, useState } from "react";
import axios from "axios";

const AppData = createContext({});

const AutContext = (props) => {
  const [home, setHome] = useState("This is Home Component");
  const [about] = useState("This is About Component");
  const [contact] = useState("This is Contact Component");
  const [apiData, setApiData] = useState([]);

  const FetchingData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setApiData(res.data);
    console.log("res", res);
  };
  return (
    <>
      <AppData.Provider
        value={{ home, setHome, about, contact, apiData, FetchingData }}
      >
        {props.children}
      </AppData.Provider>
    </>
  );
};
export default AppData;
export { AutContext };
