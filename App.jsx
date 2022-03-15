
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import IPadPro1291 from "./components/IPadPro1291";
import Desktop1 from "./components/Desktop1";
import IPhone1313Pro1 from "./components/IPhone1313Pro1";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/ipad-pro-12-9-1">
          <IPadPro1291 {...iPadPro1291Data} />
        </Route>
        <Route path="/desktop-1">
          <Desktop1 {...desktop1Data} />
        </Route>
        <Route path="/:path(|iphone-13-13-pro-1)">
          <IPhone1313Pro1 {...iPhone1313Pro1Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const nFTList2Data = {
    className: "nft-list-1",
};

const nFTList3Data = {
    className: "nft-list-2",
};

const nFTList4Data = {
    className: "nft-list-3",
};

const nFTList5Data = {
    className: "nft-list-4",
};

const iPadPro1291Data = {
    x3805C48449A948A3Bd8A12A1C45Fa08A11: "/img/3805c484-49a9-48a3-bd8a-12a1c45fa08a-1@1x.png",
    cthulhuClubNft1: "Cthulhu Club NFT",
    copyright: "Copyright © 2022  Cthulhu Club",
    firstcthulhu: "/img/firstcthulhu@1x.png",
    roadmap1: "Roadmap",
    phase01: "Phase 01/",
    phase02: "Phase 02/",
    phase03: "Phase 03/",
    mintOut1111Cth: <>🐙  Mint out 1,111 Cthulhu&#x27;s<br />🐙 Create Cthulhu Website<br />🐙 Create The $CLU Coin!<br />🐙 Create Staking, Breeding and Create “The Dens” to Train your Cthulhus and stake for a multiplier</>,
    deployCthulhuAtt: <>🐙 Deploy Cthulhu Attribute and cosmetic customization<br />🐙 Create Mobile app where you will be able to use your Cthulhu&#x27;s and earn $CLU<br />🐙 Allocate A percent of mint funds towards partnerships marketing and merch drops for Cthulhu holders. Merch drops will be able to buy using $CLU Coins. A percent of merch revenue will be redistributed to holders.</>,
    releaseSneakPeak: <>🐙 Release Sneak peaks of our gen 2 collection<br />🐙 Create an in depth Cthulhu Defi Metaverse <br />🐙 Create Cthulhu NFT Launchpad<br />🐙 Release Roadmap 2.0<br />🐙 Create dating app for single Cthulhu’s to match and breed</>,
    whatIsCthulhuClub: <>What is Cthulhu <br />Club</>,
    cthulhuClubIsDesi: "Cthulhu Club is designed to provide passive income and a safe ecosystem, inside of which investors and community enthusiasts can network with each other to build our community of Cthulhu holders. All praise to our favoruite love-craftian deity!",
    background1: "/img/background-1@1x.png",
    title: "FAQ",
    spanText1: <>How many will be minted? <br /></>,
    spanText2: <>1,111 Female Cthulhu’s will be minted <br /></>,
    spanText3: <><br /></>,
    spanText4: "What is the price? ",
    spanText5: "",
    spanText6: <>Each Cthulhu will cost 1 sol each<br /></>,
    spanText7: "",
    spanText8: "What is the future plan for Cthulhu? ",
    spanText9: "",
    spanText10: <>Please refer to our roadmap for our future partnerships, initiatives and overall plan<br /></>,
    spanText11: "",
    spanText12: "Who is Cthulhu? ",
    spanText13: "",
    spanText14: <>Cthulhu is our favourite, respected diety. Reigning for thousands of years, Cthulhu is the Great Old One that leads our pantheon of Lovecraftian cosmic entities. <br /></>,
    spanText15: <><br /></>,
    spanText16: <>Why did we pick Cthulhu? <br /></>,
    spanText17: <>The reason we chose Cthulhu is, as big fans of his work, we want to spread his stories and work, and in the stories its told that he comes from the sea and takes over the world, much like our nft<br /></>,
    spanText18: <><br /></>,
    spanText19: "",
    nftSneakPeak: <>NFT<br />Sneak Peak</>,
    x1261: "/img/1261@1x.png",
    x2170: "/img/2170@1x.png",
    x2705: "/img/2705@1x.png",
    joinTheClub: "Join the Club",
    telegram: "Telegram",
    discord: "Discord",
    twitter: "Twitter",
    mintNowButton: "/img/mint-now-button@1x.png",
    x3805C48449A948A3Bd8A12A1C45Fa08A12: "/img/3805c484-49a9-48a3-bd8a-12a1c45fa08a-1@1x.png",
    cthulhuClubNft2: "Cthulhu Club NFT",
    place: "Home",
    mint: "Mint",
    roadmap2: "Roadmap",
    faq: "FAQ",
    nFTList1Props: nFTList2Data,
    nFTList2Props: nFTList3Data,
    nFTList3Props: nFTList4Data,
    nFTList4Props: nFTList5Data,
};

const nFTList6Data = {
    className: "nft-list-5",
};

const nFTList7Data = {
    className: "nft-list-6",
};

const nFTList8Data = {
    className: "nft-list-7",
};

const nFTList9Data = {
    className: "nft-list-8",
};

const nFTList10Data = {
    className: "nft-list-9",
};

const buttonDefault2Data = {
    className: "button-default-1",
};

const headline2Data = {
    className: "headline-1",
};

const desktop1Data = {
    whatIsCthulhuClub: <>What is Cthulhu <br />Club</>,
    cthulhuClubIsDesi: "Cthulhu Club is designed to provide passive income and a safe ecosystem, inside of which investors and community enthusiasts can network with each other to build our community of Cthulhu holders. All praise to our favoruite love-craftian deity!",
    background1: "/img/background-1@1x.png",
    roadmap1: "Roadmap",
    phase01: "Phase 01/",
    phase02: "Phase 02/",
    phase03: "Phase 03/",
    mintOut1111Cth: <>🐙  Mint out 1,111 Cthulhu&#x27;s<br />🐙 Create Cthulhu Website<br />🐙 Create The $CLU Coin!<br />🐙 Create Staking, Breeding and Create “The Dens” to Train your Cthulhus and stake for a multiplier</>,
    deployCthulhuAtt: <>🐙 Deploy Cthulhu Attribute and cosmetic customization<br />🐙 Create Mobile app where you will be able to use your Cthulhu&#x27;s and earn $CLU<br />🐙 Allocate A percent of mint funds towards partnerships marketing and merch drops for Cthulhu holders. Merch drops will be able to buy using $CLU Coins. A percent of merch revenue will be redistributed to holders.</>,
    releaseSneakPeak: <>🐙 Release Sneak peaks of our gen 2 collection<br />🐙 Create an in depth Cthulhu Defi Metaverse <br />🐙 Create Cthulhu NFT Launchpad<br />🐙 Release Roadmap 2.0<br />🐙 Create dating app for single Cthulhu’s to match and breed</>,
    faq1: "FAQ",
    spanText1: <>How many will be minted? <br /></>,
    spanText2: <>1,111 Female Cthulhu’s will be minted <br /></>,
    spanText3: <><br /></>,
    spanText4: "What is the price? ",
    spanText5: "",
    spanText6: <>Each Cthulhu will cost 1 sol each<br /></>,
    spanText7: "",
    spanText8: "What is the future plan for Cthulhu? ",
    spanText9: "",
    spanText10: <>Please refer to our roadmap for our future partnerships, initiatives and overall plan<br /></>,
    spanText11: "",
    spanText12: "Who is Cthulhu? ",
    spanText13: "",
    spanText14: <>Cthulhu is our favourite, respected diety. Reigning for thousands of years, Cthulhu is the Great Old One that leads our pantheon of Lovecraftian cosmic entities. <br /></>,
    spanText15: <><br /></>,
    spanText16: <>Why did we pick Cthulhu? <br /></>,
    spanText17: <>The reason we chose Cthulhu is, as big fans of his work, we want to spread his stories and work, and in the stories its told that he comes from the sea and takes over the world, much like our nft<br /></>,
    spanText18: <><br /></>,
    spanText19: "",
    nftSneakPeak: <>NFT<br />Sneak Peak</>,
    x1261: "/img/1261@1x.png",
    x2170: "/img/2170@1x.png",
    x2705: "/img/2705@1x.png",
    x3805C48449A948A3Bd8A12A1C45Fa08A11: "/img/3805c484-49a9-48a3-bd8a-12a1c45fa08a-1@1x.png",
    cthulhuClubNft1: "Cthulhu Club NFT",
    copyright: "Copyright © 2022  Cthulhu Club",
    joinTheClub: "Join the Club",
    telegram: "Telegram",
    discord: "Discord",
    twitter: "Twitter",
    firstcthulhu: "/img/firstcthulhu@1x.png",
    mintNowButton: "/img/mint-now-button@1x.png",
    x3805C48449A948A3Bd8A12A1C45Fa08A12: "/img/3805c484-49a9-48a3-bd8a-12a1c45fa08a-1@1x.png",
    cthulhuClubNft2: "Cthulhu Club NFT",
    place: "Home",
    mint: "Mint",
    roadmap2: "Roadmap",
    faq2: "FAQ",
    nFTList1Props: nFTList6Data,
    nFTList2Props: nFTList7Data,
    nFTList3Props: nFTList8Data,
    nFTList4Props: nFTList9Data,
    nFTList5Props: nFTList10Data,
    buttonDefaultProps: buttonDefault2Data,
    headlineProps: headline2Data,
};

const nFTList11Data = {
    className: "nft-list-10",
};

const nFTList12Data = {
    className: "nft-list-11",
};

const nFTList13Data = {
    className: "nft-list-12",
};

const nFTList14Data = {
    className: "nft-list-13",
};

const nFTList15Data = {
    className: "nft-list-14",
};

const iPhone1313Pro1Data = {
    cthulhuClub: "/img/cthulhu-club-@1x.png",
    line22: "/img/line-22@1x.png",
    nftSneakPeak: <>NFT<br />Sneak Peak</>,
    x1261: "/img/1261@1x.png",
    x2170: "/img/2170@1x.png",
    x2705: "/img/2705@1x.png",
    welcomeToCthulhuClub: "Welcome to Cthulhu Club",
    builtOn: "Built on",
    spanText1: <>How many will be minted? <br /></>,
    spanText2: <>1,111 Female Cthulhu’s will be minted <br /></>,
    spanText3: <><br />What is the price? </>,
    spanText4: "",
    spanText5: <>Each Cthulhu will cost 1 sol each<br /></>,
    spanText6: "What is the future plan for Cthulhu? ",
    spanText7: "",
    spanText8: <>Please refer to our roadmap for our future partnerships, initiatives and overall plan<br /></>,
    spanText9: <><br />Who is Cthulhu? </>,
    spanText10: "",
    spanText11: <>Cthulhu is our favourite, respected diety. Reigning for thousands of years, Cthulhu is the Great Old One that leads our pantheon of Lovecraftian cosmic entities. <br /></>,
    spanText12: <><br />Why did we pick Cthulhu? <br /></>,
    spanText13: <>The reason we chose Cthulhu is, as big fans of his work, we want to spread his stories and work, and in the stories its told that he comes from the sea and takes over the world, much like our nft<br /></>,
    spanText14: <><br /></>,
    spanText15: "",
    x3805C48449A948A3Bd8A12A1C45Fa08A1: "/img/3805c484-49a9-48a3-bd8a-12a1c45fa08a-1@1x.png",
    cthulhuClubNft: "Cthulhu Club NFT",
    place: "Home",
    mint: "Mint",
    roadmap: "Roadmap",
    faq: "FAQ",
    nFTList1Props: nFTList11Data,
    nFTList2Props: nFTList12Data,
    nFTList3Props: nFTList13Data,
    nFTList4Props: nFTList14Data,
    nFTList5Props: nFTList15Data,
};

