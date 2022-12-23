import { useContext } from "react";
import PitchText from "../components/PitchText";
import { PromptContext } from "../context/PromptContext";
import { QueryClientProvider, QueryClient } from "react-query"
import Main from "../components/Main";
import Container from "../components/wrapper/Container";

export default function Home() {
  const queryClient = new QueryClient();

  return (
      <Container className="p-6 md:p-10 overflow-hidden flex flex-col lg:flex-row min-h-full w-screen ">
          <Main />
      </Container>

  )
}
