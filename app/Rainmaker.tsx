import React from 'react';

const Rainmaker: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Rainmaker</h1>
        <div className="max-w-2xl mx-auto bg-gray-800 rounded-lg shadow-xl p-8">
          <p className="text-gray-300 text-center">
            Welcome to Rainmaker - Your Web3 Dashboard
          </p>
        </div>
      </div>
    </main>
  );
};

export default Rainmaker;