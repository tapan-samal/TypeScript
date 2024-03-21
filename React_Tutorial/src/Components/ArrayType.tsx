interface PlayersType {
  players: string[];
}

interface TeamsType {
  teams: {
    team: string;
    players: number;
  }[];
}

const ArrayType = ({
  teamType,
  playerType,
}: {
  teamType: TeamsType;
  playerType: PlayersType;
}) => {
  return (
    <>
      <h2>3. Array Types :</h2>
      <div>
        <h3>Array of String :</h3>
        {playerType.players.map((player) => (
          <p key={player}>{player}</p>
        ))}
      </div>
      <div>
        <h3>Array of Object :</h3>
        {teamType.teams.map((team, index) => (
          <p key={index}>
            {team.team} : {team.players} players
          </p>
        ))}
      </div>
    </>
  );
};

export default ArrayType;
