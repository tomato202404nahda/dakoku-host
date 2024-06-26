import { lazy } from "react";
import { FuseRouteConfigType } from "@fuse/utils/FuseUtils";

const Clientpage = lazy(() => import("./clientpage"));

const clientpageConfig: FuseRouteConfigType = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: "qrcode/client",
      children: [
        {
          path: "",
          element: <Clientpage />,
        },
      ],
    },
  ],
};

export default clientpageConfig;
