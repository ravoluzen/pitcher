import { useContext } from "react";
import Input from "../components/Input";
import PitchText from "../components/PitchText";
import { PromptContext } from "../context/PromptContext";
import { QueryClientProvider, QueryClient } from "react-query"
import Nav from "../components/Nav";

export default function Home() {
  const queryClient = new QueryClient();

  return (
      <div className="flex flex-col lg:flex-row h-full w-full bg-gradient-to-tl from-purple-200 to-purple-600">
          <Nav />
          <Input />
          <PitchText />
      </div>

  )
}
