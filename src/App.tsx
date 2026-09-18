import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';

export default function App() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt) return;
    setLoading(true);
    try {
      // Access key safely from Vite environment variable
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error('API Key missing. Set VITE_GEMINI_API_KEY in repository Secrets.');
      }

      const ai = new GoogleGenAI({ apiKey });
      const result = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      setResponse(result.text || 'No response generated.');
    } catch (error: any) {
      setResponse(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">React + Gemini (Static Frontend)</h1>
      <div className="w-full max-w-xl flex flex-col gap-4">
        <textarea
          className="w-full p-4 rounded bg-slate-800 text-white border border-slate-700"
          rows={4}
          placeholder="Ask Gemini anything..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          onClick={handleGenerate}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded font-semibold disabled:opacity-50"
        >
          {loading ? 'Generating...' : 'Send Request'}
        </button>
        {response && (
          <div className="p-4 bg-slate-800 rounded border border-slate-700 mt-4 whitespace-pre-wrap">
            {response}
          </div>
        )}
      </div>
    </div>
  );
}
