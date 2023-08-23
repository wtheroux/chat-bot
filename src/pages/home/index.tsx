import React, {createContext, useState, useRef} from 'react';
// Styles
import './style.css';
// Components
import { Title } from '@/shared/ui';
import { Header } from '@/widgets/header';
import { GenerateChatForm, GenerateChatView } from '@features/generate-message/'

export const ChunkContext = createContext(null);

export const HomePage: React.FC = () => {
    const [chunkData, setChunkData] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const allMesaage = useRef<string[]>(["Hello! I'm BOT"]);
  
  return(
  <div className="homepage">
    <Header />
    <Title>Bot Chat</Title>
    <ChunkContext.Provider
        value={{
            chunkData,
            setChunkData,
            allMesaage,
            isLoading,
            setIsLoading
        }}>
            <GenerateChatView />
            <GenerateChatForm />
    </ChunkContext.Provider> 
  </div>
  );
}