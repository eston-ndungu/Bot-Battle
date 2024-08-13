import React, { useState, useEffect } from 'react';
import BotCard from './BotCard';
import BotSpecs from './BotSpecs';

const BotCollection = ({ onEnlist, enlistedBots }) => {
  const [bots, setBots] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedBot, setSelectedBot] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then((response) => response.json())
      .then((data) => {
        setBots(data);
        setIsLoading(false);
      })
      .catch((error) => {
       // console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  const handleBotClick = (bot) => {
    setSelectedBot(bot);
  };

  const handleBackToListView = () => {
    setSelectedBot(null);
  };

  if (isLoading) {
    return <div>Loading...</div>; // 
  }

  return (
    <div className="container">
      {selectedBot ? (
        <BotSpecs
          selectedBot={selectedBot}
          onEnlist={onEnlist}
          onBackToListView={handleBackToListView}
        />
      ) : (
        <div>
          <h2>Bot Collection</h2>
          <div className="bot-collection">
            {bots.map((bot) => (
              <BotCard
                key={bot.id}
                bot={bot}
                onBotClick={handleBotClick}
                onEnlist={() => onEnlist(bot)}
                isEnlisted={enlistedBots.some((b) => b.id === bot.id)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BotCollection;