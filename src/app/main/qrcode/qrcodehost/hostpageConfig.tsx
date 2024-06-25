import { lazy } from "react";
import { FuseRouteConfigType } from "@fuse/utils/FuseUtils";

const Hostpage = lazy(() => import("./hostpage"));

const hostpageConfig: FuseRouteConfigType = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: "qrcode/host",
      children: [
        {
          path: "",
          element: <Hostpage />,
        },
      ],
    },
  ],
};

export default hostpageConfig;
