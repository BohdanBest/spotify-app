"use client";
import React, { useState } from "react";
import { Database } from "@/types.db";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

interface Props {
  children: React.ReactNode;
}
const SupabaseProvider: React.FC<Props> = ({ children }) => {
  const [supabaseClient, setSupabaseClient] = useState(() =>
    createClientComponentClient<Database>()
  );

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  );
};

export default SupabaseProvider;
