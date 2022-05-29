import { FC } from "react";
import Image from "next/image";

type Props = {
  Name: string;
  Description: string;
  Price: number;
  ImageUrl: string | null;
};

export const MenuItem: FC<Props> = ({ Name, Description, Price, ImageUrl }) => {
  const formattedPrice = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "GBP",
  }).format(Price);

  return (
    <div
      className="grid items-center gap-x-4 border-b py-4 px-2 cursor-pointer hover:shadow rounded"
      style={{ gridTemplateColumns: "1fr max-content" }}
    >
      <p className="col-start-1 row-start-1 font-bold">{Name}</p>
      <p className="col-start-1 row-start-2">{Description}</p>
      <p className="col-start-1 row-start-3">{formattedPrice}</p>
      {ImageUrl && (
        <div className="relative flex col-start-2 row-start-1 row-end-4 rounded overflow-hidden">
          <Image
            src={ImageUrl}
            alt={Description}
            layout="fixed"
            width="100"
            height="100"
            objectFit="cover"
          />
        </div>
      )}
    </div>
  );
};
