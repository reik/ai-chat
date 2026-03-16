import { type CoreMessage, streamText } from "ai";
import { useChat } from "@ai-sdk/react";
import { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState<CoreMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const newMessages: CoreMessage[] = [
      ...messages,
      { content: input, role: "user" },
    ];
    setMessages(newMessages);
    setInput("");

    const result = await streamText({
      model: undefined,
      messages: newMessages,
    });

    let fullResponse = "";
    for await (const delta of result.textStream) {
      fullResponse += delta;
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: fullResponse,
        },
      ]);
    }
    setIsLoading(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div>
      {messages.map((m, i) => (
        <div key={i}>
          {m.role}: {m.content as string}
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={handleInputChange}
          disabled={isLoading}
        />
      </form>
    </div>
  );
}
