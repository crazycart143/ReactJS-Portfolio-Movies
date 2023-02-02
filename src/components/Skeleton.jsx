import React from "react";
import { Skeleton } from "@mui/material";

function CardSkeleton({ card }) {
  return Array(card)
    .fill(0)
    .map((_, i) => (
      <Skeleton
        card={i}
        className="mb-[80px] mr-[55px] rounded-[30px]"
        animation="wave"
        variant="rectangular"
        width={200}
        height={300}
      />
    ));
}

export default CardSkeleton;
