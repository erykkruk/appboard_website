import { HtmlLang } from "@/components/layout/html-lang";

import type { JSX, ReactNode } from "react";

export default function GermanLayout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <>
      <HtmlLang locale="de" />
      {children}
    </>
  );
}
