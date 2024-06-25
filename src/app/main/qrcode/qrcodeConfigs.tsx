import { FuseRouteConfigsType } from "@fuse/utils/FuseUtils";
import clientpageConfig from "./qrcodeclient/clientpageConfig";
import hostpageConfig from "./qrcodehost/hostpageConfig";

const qrcodeConfigs: FuseRouteConfigsType = [clientpageConfig, hostpageConfig];

export default qrcodeConfigs;
