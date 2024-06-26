import React from "react";
import Image from "next/image";

interface FightResult {
  season: string;
  team: string;
  result: string;
  opponent: string;
  bout: string;
  date: string;
  billing: string;
  duration: string;
  weight: string;
}

const fightResults: FightResult[] = [
  {
    season: "March 2023",
    team: "MFN 11",
    result: "Loss",
    opponent: "Neeraj Panghal",
    bout: "Guillotine Choke",
    date: "31-03-2023",
    billing: "Main Card",
    duration: "Round 3",
    weight: "Lightweight",
  },
  {
    season: "March 2024",
    team: "MFN 14",
    result: "Win",
    opponent: "Mohammad Azim Mokhlis",
    bout: "Unanimous Decision",
    date: "9-03-2024",
    billing: "Main Card",
    duration: "Round 3",
    weight: "Lightweight",
  },
];

const FighterProfile: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Fighter Profile Section */}
      <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 p-6 rounded-md shadow-lg w-full mb-8">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">
          Fight Stats
        </h2>
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between items-center">
          <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 p-2">
            <span className="font-semibold">Name:</span>
            <span className="text-white">Owais Yaqoob</span>
          </div>
          <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 p-2">
            <span className="font-semibold">Nationality:</span>
            <span className="flex items-center text-white">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg"
                alt="India"
                width={24}
                height={16}
                className="mr-2"
              />
              India
            </span>
          </div>
          <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 p-2">
            <span className="font-semibold">Position:</span>
            <span className="text-white">Lightweight</span>
          </div>
          <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 p-2">
            <span className="font-semibold">Born:</span>
            <span className="text-white">Kashmir, India</span>
          </div>
          <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 p-2">
            <span className="font-semibold">Profile:</span>
            <span className="text-white">Pro</span>
          </div>
          <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 p-2">
            <span className="font-semibold">Pro MMA Record:</span>
            <span className="text-white">1-1-0 (Win-Loss-Draw)</span>
          </div>
          <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 p-2">
            <span className="font-semibold">Current Streak:</span>
            <span className="text-white">1 Win - 1 Loss</span>
          </div>
          <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 p-2">
            <span className="font-semibold">Fighting out of:</span>
            <span className="text-white">Kashmir, India</span>
          </div>
          <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 p-2">
            <span className="font-semibold">Regional Rankings:</span>
            <p className="text-sm text-white">
              Owais Yaqoob is the 72nd ranked of 80 active Asia South Pro
              Lightweights.
            </p>
          </div>
          <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 p-2">
            <span className="font-semibold">MFN Seasons:</span>
            <span className="text-white">March 2023, 2024</span>
          </div>
        </div>
      </div>

      {/* PRO RESULT Section */}
      <div className="p-6 rounded-md shadow-lg w-full">
        <h2 className="text-xl md:text-3xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          PRO RESULT
        </h2>
        <div className="bg-gray-900 rounded-md shadow-lg w-full overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-purple-500">
              <tr>
                <th className="text-white py-2 px-4">SEASON</th>
                <th className="text-white py-2 px-4">TEAM</th>
                <th className="text-white py-2 px-4">RESULTS</th>
                <th className="text-white py-2 px-4">OPPONENTS</th>
                <th className="text-white py-2 px-4">BOUT</th>
                <th className="text-white py-2 px-4">DATE</th>
                <th className="text-white py-2 px-4">BILLING</th>
                <th className="text-white py-2 px-4">DURATION</th>
                <th className="text-white py-2 px-4">WEIGHT</th>
              </tr>
            </thead>
            <tbody>
              {fightResults.map((result, index) => (
                <tr key={index} className="border-b border-purple-500">
                  <td className="text-white py-2 px-4">{result.season}</td>
                  <td className="text-white py-2 px-4">{result.team}</td>
                  <td className="text-white py-2 px-4">{result.result}</td>
                  <td className="text-white py-2 px-4">{result.opponent}</td>
                  <td className="text-white py-2 px-4">{result.bout}</td>
                  <td className="text-white py-2 px-4">{result.date}</td>
                  <td className="text-white py-2 px-4">{result.billing}</td>
                  <td className="text-white py-2 px-4">{result.duration}</td>
                  <td className="text-white py-2 px-4">{result.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FighterProfile;
