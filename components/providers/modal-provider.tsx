"use client";

import React, { use, useEffect, useState } from "react";
import { CardModal } from "../modals/card-modal";
import { ProModal } from "../modals/pro-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [setIsMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CardModal />
      <ProModal />
    </>
  );
};
