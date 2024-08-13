
import React from 'react';

const BotSpecs = ({ selectedBot, onEnlist, onBackToListView }) => {
  const { name, health, damage, armor, bot_class, avatar_url, catchphrase } = selectedBot;

  return (
    <div className="container bot-specs">
      <h2>Bot Specifications</h2>
      <div className="bot-specs-details">
        <img src={avatar_url} alt={name} />
        <h3>{name}</h3>
        <p>Health: {health}</p>
        <p>Damage: {damage}</p>
        <p>Armor: {armor}</p>
        <p>Class: {bot_class}</p>
        <p>Catchphrase: {catchphrase}</p>
      </div>
      {!selectedBot.isEnlisted && (
        <button onClick={() => onEnlist(selectedBot)}>Enlist</button>
      )}
      <button onClick={() => onBackToListView()}>Back to List</button>
    </div>
  );
};

export default BotSpecs;