import React, { useState } from 'react';
import { useContext } from "react";
import { ChunkContext } from "@pages/home/index";
import { openStream } from "@/shared/api";
// Components
import { Button, Form, Input } from '@/shared/ui';
// Model

export const GenerateChatForm = () => {
  const [input, setInput] = useState<string>('');
  const {chunkData, setChunkData, allMesaage, setIsLoading} = useContext(ChunkContext);
  const handleSubmit = (evt) => {
    setChunkData("");
    setIsLoading(true);
    evt.preventDefault();
    allMesaage.current.push(input);
    openStream(input, setChunkData, setIsLoading, allMesaage, chunkData);
  };

  return (
    <Form onSubmit={handleSubmit}>

      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        label="Enter messsage:"
      />

      <Button type="submit">Send</Button>
    </Form>
  );
};