import Providers from "@/utils/provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Nav } from "./_components/nav";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import theme from "@/lib/themeConfig";
import { ConfigProvider } from "antd";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "全国中小学网上一对一辅导_火花教育官网",
  description: "全国中小学网上一对一辅导_火花教育官网",
};
function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>
        {/* ant-design 组件引入 */}
        <ConfigProvider theme={theme}>
          <StyledComponentsRegistry>
            <Nav />
            <Providers>{children}</Providers>
          </StyledComponentsRegistry>
        </ConfigProvider>
      </body>
    </html>
  );
}

export default RootLayout;
