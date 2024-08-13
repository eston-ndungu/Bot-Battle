import React from 'react';

const EnlistedBotCard = ({ bot, onDischarge }) => {
  const {  name, health, damage, armor, bot_class, avatar_url, catchphrase } = bot;

  const handleXClick = () => {
    onDischarge(bot);
  };

  return (
    <div className="enlisted-bot-card">
      <img src={avatar_url} alt={name} />
      <h3>{name}</h3>
      <p>Health: {health}</p>
      <p>Damage: {damage}</p>
      <p>Armor: {armor}</p>
      <p>Class: {bot_class}</p>
      <p>Catchphrase: {catchphrase}</p>
      <button className="red-button" onClick={handleXClick}>X</button> 
    </div>
  );
};

export default EnlistedBotCard;