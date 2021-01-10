import { NextPage } from "next";
import { FC } from "react";
import AdminLayout from "../components/Layout/AdminLayout/AdminLayout";
import ClientLayout from "../components/Layout/ClientLayout/ClientLayout";

type ClientLayoutType = NextPage & { Layout: typeof ClientLayout };
type AdminLayoutType = NextPage & { Layout: typeof AdminLayout };

type PageWithLayoutType = ClientLayoutType | AdminLayoutType;

export default PageWithLayoutType;
