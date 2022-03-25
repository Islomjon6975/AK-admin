import { ReactComponent as Ilban } from "../assets/icons/sidebar1.svg";
import { ReactComponent as User } from "../assets/icons/user.svg";
import { ReactComponent as Ak } from "../assets/icons/ak.svg";
import { ReactComponent as Bank } from "../assets/icons/mamuriyat.svg";
import { ReactComponent as Nft } from "../assets/icons/nft.svg";
import { ReactComponent as Setting } from "../assets/icons/setting.svg";
import { Generic } from "../component/Generic";
import Home from "../component/Home";
import MemberDetalist from "../component/MemberDetails";
import Minting from "../component/MemberDetails/Minting";
import Market from "../component/MemberDetails/Market";
import Lend from "../component/MemberDetails/Lend";
import BuySell from "../component/BuySell";
import Buy from "../component/BuySell/Buy";
import Sell from "../component/BuySell/Sell";
import TokenManagment from "../component/TokenManagment";
import PullManagment from "../component/PullManagement";
import AssetManagment from "../component/AssetManagment";
import NftCurrentManagment from "../component/NftCurrent";
import { SideAPR } from "../component/SideAPR";
import Transactions from "../component/Transactions";
import NftRegister from "../component/NftRegister";
import OperationSettings from "../component/Settings/ OperationSetting";
import AdminSetting from "../component/Settings/AdminSetting";
import MemberTable from "../component/MemberTable";
import { PulllPraduct } from "../component/PullPraduct/Amount";

export const data = [
  {
    id: 1,
    title: "일반",
    Icon: Ilban,
    hidden: false,
    Child: [{ id: 1, title: "대시보드", params: "", element: <Home /> }],
  },

  {
    id: 2,
    title: "회원관리",
    Icon: User,
    hidden: false,
    Child: [
      { id: 2, title: "회원형황", params: "members", element: <MemberTable /> },
      {
        id: 3,
        title: "회원상세",
        params: "/memberDetails",
        element: <MemberDetalist />,
        child: [
          {
            id: 1,
            path: "minting",
            com: <Minting />,
          },
          {
            id: 2,
            path: "market",
            com: <Market />,
          },
          {
            id: 3,
            path: "lend",
            com: <Lend />,
          },
        ],
      },

      {
        id: 4,
        title: "Transactions",
        params: "transactions",
        element: <Transactions />,
      },
    ],
  },
  {
    id: 3,
    title: "토근관리",
    Icon: Ak,
    hidden: false,
    Child: [
      {
        id: 4,
        title: "토근괸리",
        params: "token_managment",
        element: <TokenManagment />,
      },
      {
        id: 5,
        title: "풀 관리",
        params: "pull_managment",
        element: <PullManagment />,
      },
      {
        id: 6,
        title: "APR 관리",
        params: "apr_managment",
        element: <SideAPR />,
      },
      { id: 7, title: "풀 생성", params: "pull_praduct", element: <PulllPraduct /> },
    ],
  },
  {
    id: 4,
    title: "자산관리",
    Icon: Bank,
    hidden: false,
    Child: [
      {
        id: 8,
        title: "스왑 관리",
        params: "asset_management",
        element: <AssetManagment />,
      },
      {
        id: 9,
        title: "Buy/Sell",
        params: "/buy",
        element: <BuySell />,
        child: [
          {
            id: 1,
            path: "buy",
            com: <Buy />,
          },
          {
            id: 2,
            path: "sell",
            com: <Sell />,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "NFT 관리",
    Icon: Nft,
    hidden: false,
    Child: [
      {
        id: 10,
        title: "NFT 등록",
        params: "nft_register",
        element: <NftRegister />,
      },
      {
        id: 11,
        title: "NFT 현황",
        params: "nft_current",
        element: <NftCurrentManagment />,
      },
    ],
  },
  {
    id: 6,
    title: "성정",
    Icon: Setting,
    hidden: false,
    Child: [
      {
        id: 12,
        title: "운영 설정",
        params: "setting",
        element: <OperationSettings />,
      },
      {
        id: 13,
        title: "관리자 설정",
        params: "admin_setting",
        element: <AdminSetting />,
      },
    ],
  },
];
