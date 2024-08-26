import { Dispatch, SetStateAction, useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import { ReactComponent as MicSVG } from "../../assets/custom/mic.svg";
import { ReactComponent as MicClosedSVG } from "../../assets/custom/mic-closed.svg";
import { ReactComponent as SearchSVG } from "../../assets/custom/search.svg";

interface IDocumentSearchProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

function DocumentSearch({ search, setSearch }: IDocumentSearchProps) {
  const {
    listening,
    browserSupportsSpeechRecognition,
    finalTranscript
  } = useSpeechRecognition({ clearTranscriptOnListen: true });

  useEffect(() => {
    if (!listening) {
      setSearch(finalTranscript);
    }
  }, [listening]);

  const micClickHandler = () => {
    if (!listening) {
      SpeechRecognition.startListening();
    } else {
      SpeechRecognition.stopListening();
    }
  }

  return (
    <div className="max-w-[60%] mx-auto">
      <div className="relative flex items-center border border-slate-300 rounded-full dark:bg-neutral-900">
        {/* Search Icon */}
        <div className="p-2 ps-5">
          <SearchSVG />
        </div>

        {/* Input Field */}
        <input
          type="text"
          className="flex-grow p-3 text-lg text-gray-900 dark:text-white dark:bg-neutral-900 focus:outline-none"
          placeholder="Search For Any Documents"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Vertical Line */}
        <div className="h-14 mr-4 border-l dark:border-gray-500"></div>
        <div
          onClick={micClickHandler}
          className={`p-2 pe-6 cursor-pointer space-x-2  ${
            !browserSupportsSpeechRecognition
              ? "opacity-50 cursor-not-allowed"
              : "opacity-100 cursor-pointer"
          }`}
        >
          {listening ? <MicSVG /> : <MicClosedSVG />}
        </div>
      </div>
    </div>
  );
}

export default DocumentSearch;
