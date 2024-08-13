import React from 'react';
import EnlistedBotCard from './EnlistedBotCard';

const YourBotArmy = ({ enlistedBots, onDischarge }) => {
  const handleDischarge = (bot) => {
    onDischarge(bot);
  };

  return (
    <div className="container">
      <h2>Your Bot Army</h2>
      <div className="bot-collection">
        {enlistedBots.map((bot) => (
          <EnlistedBotCard key={bot.id} bot={bot} onDischarge={handleDischarge} />
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;