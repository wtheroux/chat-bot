import React from 'react';
// Components
import {
    Message,
    ChatBlock
} from '@/shared/ui';
import { useContext } from "react";
import { ChunkContext } from "@pages/home/index";

export const GenerateChatView = () => {
    const {chunkData, isLoading, allMesaage} = useContext(ChunkContext);

  return (
    <ChatBlock>

      {(() => {
        if (allMesaage.current.length > 0) {
          return allMesaage.current.map((item: string, index: number) => <Message key={index}>{item}</Message>);
        }
      })()}
      {isLoading ? <Message>{chunkData}</Message> : <></>}
    </ChatBlock >
  );
};