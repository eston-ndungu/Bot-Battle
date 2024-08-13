import React from 'react';

const BotCard = ({ bot, onBotClick, onEnlist, isEnlisted }) => {
  const {  name, health, damage, armor, bot_class, avatar_url, catchphrase } = bot;

  return (
    <div className={`bot-card ${isEnlisted ? 'enlisted' : ''}`}>
      <img src={avatar_url} alt={name} />
      <h3>{name}</h3>
      <p>Health: {health}</p>
      <p>Damage: {damage}</p>
      <p>Armor: {armor}</p>
      <p>Class: {bot_class}</p>
      <p>Catchphrase: {catchphrase}</p> 
      {!isEnlisted && <button onClick={() => onBotClick(bot)}>View Details</button>}
      <button onClick={() => onEnlist(bot)}>
        {isEnlisted ? 'Enlisted' : 'Enlist'}
      </button>
    </div>
  );
};

export default BotCard;