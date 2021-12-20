import React, { useEffect } from "react";
import {
  solValues,
  TypeCamera,
  TypeDate,
  TypeRover,
} from "../helpers/select-info";
import { useFilterSelection } from "../hooks/useFilterSelection";
import useMars from "../hooks/useMars";
import { Card } from "./card";
import { SelectOptions } from "./select";
import PaginationButton from "./pagination";

export const FilterSection = () => {
  const {
    selectedValue,
    rover,
    date,
    camera,
    solValue,
    dateValue,
    isFavorite,
    isChange,
    page,
    onChange,
    setSelectedValue,
  } = useFilterSelection();

  const { DefaultData, AccessedData, Uri, setIsChange, getMarsRover } =
    useMars();

  const onCheckedChange = (value: boolean) => {
    localStorage.setItem("favorite", JSON.stringify(Uri));
    onChange(value, "isFavorite");
  };

  useEffect(() => {
    if (isChange) {
      setIsChange(true);
      getMarsRover(page, rover, camera, date, dateValue, solValue);

      if(DefaultData.length === 0 && AccessedData.length === 0)
        setSelectedValue({...selectedValue, page: 1})
    }
  }, [page, rover, date, camera, solValue, dateValue, isChange]);

  return (
    <>
      <section className="mx-auto py-5">
        <div className="flex flex-col">
          <label className="mx-20">Search photo by</label>
          <div className="flex flex-row w-full mx-32">
            <label>Type Rover: </label>
            <select
              className="mx-5 px-2 bg-blue-300 rounded-lg"
              defaultValue={TypeRover[0].value}
              onChange={({ target: { value } }) => onChange(value, "rover")}
            >
              {TypeRover.map((rover, index: number) => (
                <SelectOptions
                  key={index}
                  value={rover.value}
                  name={rover.name}
                />
              ))}
            </select>
            <label>Type date: </label>
            <select
              className="mx-5 px-2 bg-blue-300 rounded-lg"
              defaultValue={TypeDate[0].value}
              onChange={({ target: { value } }) => onChange(value, "date")}
            >
              {TypeDate.map((date, index: number) => (
                <SelectOptions
                  key={index}
                  value={date.value}
                  name={date.name}
                />
              ))}
            </select>
            {date === "earth" ? (
              <input
                type="date"
                value={dateValue.substring(0, 10)}
                onChange={({ target: { value } }) =>
                  onChange(value, "dateValue")
                }
                className="px-2 bg-blue-300 rounded-lg mx-2"
              />
            ) : (
              <select
                className="mr-5 px-2 bg-blue-300 rounded-lg"
                defaultValue={TypeRover[0].value}
                onChange={({ target: { value } }) =>
                  onChange(value, "solValue")
                }
              >
                {solValues.map((sol, index: number) => (
                  <SelectOptions
                    key={index}
                    value={sol.toString()}
                    name={sol.toString()}
                  />
                ))}
              </select>
            )}
            <label>Camera: </label>
            <select
              className="mx-5 px-2 bg-blue-300 rounded-lg"
              defaultValue={TypeCamera[0].value}
              onChange={({ target: { value } }) => onChange(value, "camera")}
            >
              {TypeCamera.map((camera, index: number) => (
                <SelectOptions
                  key={index}
                  value={camera.value}
                  name={camera.name}
                />
              ))}
            </select>
            <div className="justify-items-center">
              <input
                type="checkbox"
                checked={isFavorite}
                onChange={({ target: { checked } }) => onCheckedChange(checked)}
              />{" "}
              <label className="ml-1">Set as Favorite</label>
            </div>
          </div>
        </div>
      </section>
      {!isChange && DefaultData.length > 0 ? (
        <>
          <Card data={DefaultData} />
          <PaginationButton page={page} onClick={() => onChange(page + 1, "page")} />
        </>
      ) : isChange && AccessedData.length > 0 ? (
        <>
          <Card data={AccessedData} />
          <PaginationButton page={page} onClick={() => onChange(page + 1, "page")} />
        </>
      ) : (
        <h1 className="text-center text-7xl font-bold my-20">
          There's not data to show!
        </h1>
      )}
      {}
    </>
  );
};
