import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../component/Navbar";
import { Sidebar } from "../component/Sidebar";
import { data } from "../utils/sidebar";

export const Root = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Sidebar />}>
          {data.map((value) => {
            return value.Child.map(({ params, element, child }) => {
              return (
                <Route path={params} element={element}>
                  {child?.map((item) => {
                    return (
                      <Route
                        key={item.id}
                        path={item.path}
                        element={item.com}
                      />
                    );
                  })}
                </Route>
              );
            });
          })}
        </Route>
      </Routes>
    </>
  );
};

export default Root;
