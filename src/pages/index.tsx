// Next
import type { NextPage, GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  let props = {};

  if (locale) {
    props = {
      ...props,
      ...(await serverSideTranslations(locale, ["common"])),
    }
  }

  return {
    props
  }
};

export default memo(Home);
