import { OrganizationList } from "@clerk/nextjs";
import React from "react";

const SelectOrg = () => {
  return (
    <OrganizationList
      hidePersonal
      afterSelectOrganizationUrl="/organizations/:id"
      afterCreateOrganizationUrl="/organizations/:id"
    />
  );
};

export default SelectOrg;
