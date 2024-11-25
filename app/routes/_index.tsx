import type { MetaFunction } from "@remix-run/node";
import CompanyInfo from "~/pages/companyInfo";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="">
      <CompanyInfo />
    </div>
  );
}
