import React from "react";
import { CardList } from "./card-list";
import { Photo } from "../interfaces/mars-rover-interface";

interface CardProps {
  data: Photo[] | undefined;
}

export const Card: React.FC<CardProps> = ({data}) => {
  return (
    <section className="grid grid-cols-5 mx-20">
      {data?.map((item) => (
        <CardList key={item.id} data={item} />
      ))}
    </section>
  );
};
