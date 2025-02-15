import { usePortfolioStore } from "@/store/usePortfolioStore";

import { ContactViewWithAuth } from "portfolioui/job-jackpot";

export default function Footer() {
  const { portfolio, isLoading } = usePortfolioStore();
  const { personalInfo } = portfolio;

  if (isLoading) {
    return <></>;
  }

  return (
    <ContactViewWithAuth
      email={personalInfo.email}
      phoneNumber={personalInfo.contactNumber}
      gradientColors={["#C71585", "#A95C68 ", "#FFB6C1"]}
    />
  );
}
