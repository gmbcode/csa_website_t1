'use client'

import { useState } from "react";
import question from "../data/potd.json";

const UploadPage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [output, setOutput] = useState<string | null>(null);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const getLanguage = (filename: string) => {
    const ext = filename.split(".").pop();
    const languageMap: { [key: string]: { lang: string; version: string } } = {
      py: { lang: "python", version: "3.10.0" },
      cpp: { lang: "cpp", version: "10.2.0" },
      java: { lang: "java", version: "15.0.2" },
    };
    return languageMap[ext as string] || "";
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!selectedFile) {
      alert("Please upload a file first!");
      return;
    }

    const reader = new FileReader();
    reader.onload = async (e) => {
      const code = e.target?.result;
      if (typeof code !== "string") return;

      const languageData = getLanguage(selectedFile.name);
      if (!languageData) {
        alert("Unsupported file type!");
        return;
      }

      try {
        const response = await fetch("https://emkc.org/api/v2/piston/execute", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            language: languageData.lang,
            version: languageData.version,
            files: [{ content: code }],
          }),
        });
        const result = await response.json();

        if (result.run) {
          const stdout = result.run.stdout || "";
          const stderr = result.run.stderr || "";
          setOutput(stdout + (stderr ? `\nError:\n${stderr}` : ""));
        } else {
          setOutput("Execution failed: No valid output");
        }
      } catch (error) {
        console.error("Execution error:", error);
        setOutput("Error executing code");
      }
    };
    reader.readAsText(selectedFile);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Problem Of The Day</h1>
      <div className="bg-gray-900 p-6 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-xl font-semibold mb-4">💻 Question:</h2>
        <p className="text-gray-300">{question.Question}</p>
        <h3 className="text-xl font-semibold mb-4">Input Format:</h3>
        <p className="text-gray-300">{question["Input Format"]}</p>
        <h3 className="text-xl font-semibold mb-4">Output Format:</h3>
        <p className="text-gray-300">{question["Output Format"]}</p>
        <h3 className="text-xl font-semibold mb-4">Example:</h3>
        <pre className="bg-black text-green-400 font-mono p-4 rounded-lg shadow-inner border border-gray-700 whitespace-pre-wrap">
          {question.Example}
        </pre>
        <h3 className="text-xl font-semibold mb-4">Explanation:</h3>
        <p className="text-gray-300">{question.Explanation}</p>

        <form onSubmit={handleSubmit} className="mt-6">
          <label className="block mb-2 text-sm font-medium">Upload your solution:</label>
          <input
            type="file"
            accept=".cpp,.py,.java"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-300 border border-gray-600 rounded-lg cursor-pointer bg-gray-700 focus:outline-none"
          />
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold"
          >
            Submit Code
          </button>
        </form>

        {selectedFile && (
          <p className="text-green-400 mt-3">Selected file: {selectedFile.name}</p>
        )}
{output && (
          <div className="mt-6 bg-gray-700 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Execution Output:</h3>
            <pre className="text-green-400 whitespace-pre-wrap">{output}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadPage;
