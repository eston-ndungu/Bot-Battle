import React, { useState, useEffect } from 'react';
import YourBotArmy from './components/YourBotArmy';
import BotCollection from './components/BotCollection';
import BotSpecs from './components/BotSpecs';
import './styles.css';

const App = () => {
  const [enlistedBots, setEnlistedBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setEnlistedBots(data.filter((bot) => bot.isEnlisted));
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleEnlist = (bot) => {
    if (enlistedBots.some((b) => b.id === bot.id)) {
      setEnlistedBots(enlistedBots.filter((b) => b.id !== bot.id));
    } else {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };

  const handleDischarge = (bot) => {
    fetch(`http://localhost:3000/bots/${bot.id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(() => {
        setEnlistedBots(enlistedBots.filter((b) => b.id !== bot.id));
      })
      .catch((error) => {
        console.error('Error discharging bot:', error);
      });
  };

  return (
    <div>
      <h1>Welcome to Bot Battlr</h1>
      <YourBotArmy enlistedBots={enlistedBots} onDischarge={handleDischarge} />
      <BotCollection onEnlist={handleEnlist} enlistedBots={enlistedBots} />
      {selectedBot && (
        <BotSpecs
          selectedBot={selectedBot}
          onEnlist={handleEnlist}
          onBackToListView={() => setSelectedBot(null)}
        />
      )}
    </div>
  );
};

export default App;
