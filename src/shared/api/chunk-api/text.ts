export async function openStream(
    payload: string,
    setChunkData: (arg1: string | CallableFunction) => void,
    setIsLoading : (arg1: boolean) => void,
    allMessage: React.MutableRefObject<string[]>,
    chunkData: string
    ): Promise<void> {
    const decoder = new TextDecoder();
  
    const res = await fetch("http://185.46.8.130/api/v1/chat/send-message", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({message:payload}),
    });
  
    const readableStream = new ReadableStream({
      async start(controller) {
        if (res.status !== 200) {
          const data = {
            status: res.status,
            statusText: res.statusText,
            body: await res.text(),
          }
          console.log(`Error: recieved non-200 status code, ${JSON.stringify(data)}`);
          controller.close();
          return
        }
        function streamAsyncIterator(stream: any) {
          const reader = stream.getReader();
          return {
            next() {
              return reader.read();
            },
            return() {
              reader.releaseLock();
              return {};
            },
            [Symbol.asyncIterator]() {
              return this;
            },
          };
        }
        for await (const chunk of streamAsyncIterator(res.body) as any) {
          decoder.decode(chunk).split('}').map(val => {
            if (val !== ''){
              let data = JSON.parse(val += '}');
              if(data.status === 'content'){
                setChunkData((prevState: string) => prevState + data.value);
              }
            }
          });
        }
        allMessage.current.push(chunkData);
        setIsLoading(false);
        setChunkData("");
      },
    });
  }