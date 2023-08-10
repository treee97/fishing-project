"use client";
//next-auth
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
//next-themes
import { ThemeProvider } from "next-themes";

const Provider = ({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session | undefined;
}) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </SessionProvider>
  );
};

export default Provider;
