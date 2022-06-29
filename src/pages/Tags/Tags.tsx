import React, { useState } from 'react';
import { Container } from '../../components/Container';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import { games } from './constants';
import { List } from '../../components/List';
import { Chips } from '../../components/Chips';

export const Tags = () => {
  const [activeGame, setActiveGame] = useState<string>(games[1]);
  const width = useWindowWidth();
  const isSmallScreen = width < 800;

  const changeActiveGame = (newGame: string) => {
    setActiveGame(newGame);
  }

  return (
    <Container>
      {isSmallScreen ? (
        <List
          value={activeGame}
          onChange={changeActiveGame}
          items={games}/>
      ) : (
        <Chips
          activeItem={activeGame}
          items={games}
          onChange={changeActiveGame}/>
      )}
    </Container>
  );
}
