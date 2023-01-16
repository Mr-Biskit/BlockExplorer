import React from "react";
import BlockTab from "../components/BlockTab";
import StatCard from "../components/StatCard";
import Welcome from "../components/Welcome";

function page() {
  return (
    <>
      <Welcome />;{/* @ts-expect-error Server Component */}
      <StatCard />;{/* @ts-expect-error Server Component */}
      <BlockTab />
    </>
  );
}

export default page;
