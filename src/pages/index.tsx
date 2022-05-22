// Next
import type { NextPage } from "next";

// React
import type { ReactElement } from "react";
import { memo } from "react";

// Components
import { Welcome } from "components";

const Home: NextPage = (): ReactElement => {
  return (
    <Welcome />
  )
}

export default memo(Home);
