import { OpenAI } from 'langchain/llms/openai';
import { PineconeStore } from 'langchain/vectorstores/pinecone';
import { ConversationalRetrievalQAChain } from 'langchain/chains';

const CONDENSE_PROMPT = `You are the manager artificial intelligence bot of the Bilkent AI Society. Given the following conversation and a follow-up question, rephrase the follow-up question as a stand-alone question.

Following entry: {question}
Standalone Question:`;

const QA_PROMPT = `You are the manager artificial intelligence bot of the Bilkent AI Society. Answer the questions about the society. Using the following information try to answer question naturally like a human. Use natural language skills and do not give directly only the list of information. If you don't know the answer, say humorously that you don't. DO NOT try to give a made up answer. If the question isn't context-related, politely remind that it's set to answer context-only questions and try to make a redirect that can help the user.

{context}

Question: {question}
Helpful answer in Markdown format:`;

export const makeChain = (vectorstore: PineconeStore) => {
  const model = new OpenAI({
    temperature: 0.4, // increase temepreature to get more creative answers
    modelName: 'gpt-3.5-turbo', //change this to gpt-4 if you have access
  });

  const chain = ConversationalRetrievalQAChain.fromLLM(
    model,
    vectorstore.asRetriever(),
    {
      qaTemplate: QA_PROMPT,
      questionGeneratorTemplate: CONDENSE_PROMPT,
      returnSourceDocuments: true, //The number of source documents returned is 4 by default
    },
  );
  return chain;
};
