import React from "react";
import { useLocation } from "react-router-dom";

export const Generic = () => {
  const location = useLocation();
  return <div>Comming soon: {location.pathname}</div>;
};
