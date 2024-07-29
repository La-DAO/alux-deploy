import { eBaseNetwork, IAaveConfiguration } from "./../../helpers/types";
import AaveMarket from "../aave";
import { ZERO_ADDRESS } from "../../helpers";
import {
  strategyUSDC,
  strategyWETH,
  strategyCBETH,
  strategyXOC,
} from "../aave/reservesConfigs";

export const AluxConfig: IAaveConfiguration = {
  ...AaveMarket,
  MarketId: "Base Alux Market",
  ATokenNamePrefix: "Alux",
  StableDebtTokenNamePrefix: "Alux",
  VariableDebtTokenNamePrefix: "Alux",
  SymbolPrefix: "Alux",
  ProviderId: 37,
  ReservesConfig: {
    USDC: strategyUSDC,
    WETH: strategyWETH,
    CBETH: strategyCBETH,
    XOC: strategyXOC,
  },
  ReserveAssets: {
    [eBaseNetwork.base]: {
      USDC: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913", // usdc
      WETH: "0x4200000000000000000000000000000000000006",
      CBETH: "0x2ae3f1ec7f1f5012cfeab0185bfc7aa3cf0dec22",
      XOC: "0xa411c9Aa00E020e4f88Bc19996d29c5B7ADB4ACf",
    },
  },
  EModes: {},
  ChainlinkAggregator: {
    [eBaseNetwork.base]: {
      USDC: "0x7e860098f58bbfc8648a4311b374b1d669a2bc6b",
      WETH: "0x71041dddad3595f9ced3dccfbe3d1f4b0a16bb70",
      CBETH: "0xd7818272b9e248357d13057aab0b417af31e817d",
      XOC: "0xC05D449758E296a1Ad4AE88E6C005F2bff5ef78a",
    },
  },
};

export default AluxConfig;
