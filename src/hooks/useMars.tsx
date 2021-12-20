import { useEffect, useState } from "react";
import nasaDB from "../api/nasaDB";
import { MarsRoverResponse, Photo } from "../interfaces/mars-rover-interface";

interface useMarsProps {
  DefaultData: Photo[];
  AccessedData: Photo[];
  Uri: string;
}

const useMars = () => {
  const [marsStates, setMarsStates] = useState<useMarsProps>({
    DefaultData: [],
    AccessedData: [],
    Uri: "",
  });
  const [isChange, setIsChange] = useState(false);

  const getDefaultData = async () => {
    const uri = localStorage.getItem("favorite");
    const defaultData = await nasaDB.get<MarsRoverResponse>(
      uri
        ? JSON.parse(uri)
        : `/curiosity/photos?earth_date=${new Date()
            .toISOString()
            .substring(0, 10)}page=1`
    );
    setMarsStates({
      DefaultData: defaultData.data.photos,
      AccessedData: [],
      Uri: "",
    });
  };

  const getMarsRover = async (
    page: number,
    rover?: string,
    camera?: string,
    typeDate?: string,
    date?: string,
    solDate?: string,
  ) => {
    const uri = `/${rover}/photos?${
      typeDate === "earth" ? "earth_date" : "sol"
    }=${typeDate === "earth" ? date?.substring(0, 10) : solDate}${
      camera && camera !== "" && `&camera=${camera}`
    }&page=${page}`;

    console.log(uri);
    const accessedData = await nasaDB.get<MarsRoverResponse>(uri);

    setMarsStates({
      DefaultData: [],
      AccessedData: accessedData.data.photos,
      Uri: uri,
    });
  };
  useEffect(() => {
    if (!isChange) {
      getDefaultData();
    }
  }, []);

  return {
    ...marsStates,
    setIsChange,
    getDefaultData,
    getMarsRover,
  };
};

export default useMars;
