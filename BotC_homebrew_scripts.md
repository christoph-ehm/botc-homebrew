# Homebrew Character guidelines

## good characters

- allow for bluffability
- obtained info should only concern the game state if the player can freely choose what info they get. (e.g. the Artist or Gossip violates this principle)
- should not be able to confirm more than 1 player
- strong (info) characters must be repudiable, therefore cannot be confirmed by their own ability (e.g. the Gambler violates this principle)
- confirmed players cannot nominate/vote or have lost their ability
- any player can at most associate one character with one player due to their ability.

## Fabled

- plural: Fabled
- Fabled characters helps the story teller to make a game or the script fairer and more accessible
- Fabled characters are created to make the game easier or more balanced

## Loric

- Lorics are created to add tension, challenges or increase the difficulty for all or specific players.
- this is the reason why the original game wants you to declare Lorics that you use.

## Jinxes

Common reasons for Jinxes can be grouped in:

- changes the functionality of other characters
- interacts with other players and their properties
- revealing too much info
- balancing conditions for character effects (when violated)
- affects ending conditions (e.g. causing deaths), winning conditions (e.g. changing alignment) or their triggers

More specific reasons: 

- characters that get or give **foreign abilities** (which make players know too much or not enough)
- characters which add behaviour **conditions** (what happens if the player cannot know the condition?)
- when **rewards** of a character become **too easy** or **too hard** to achieve, **too powerful** or almost **useless** under (unusual) circumstances (Demons that don't kill)
  - could be fixed by defining the ability such that another rule is added (Demons must choose an alive player every night, even if their ability would not wake), if the achievement is otherwise impossible
- creating or removing characters with **setup effects**
  - defining characters without setup effects can help avoid jinxes
  - sometimes, the omitted setup effect is only problematic for characters which are added or removed on night 1 → Town Planner fixes this by treating night 1 as setup time as well
- characters that change the **alignment or character** of 1 player (without swapping) in the setup or during the game (Cult Leader, Goon, Ogre)
  - minions and Demons should not automatically or easily turn from evil to good except if there are circumstances which prevent that the converted minion or demon kill the demon
  - too many evil players are unfair
  - copied Demon characters (Scarlet Woman, Imp) may be problematic when they can resurrect
- characters which **break or whose condition does not trigger** while the effect of another character is used (dead Mastermind when killed by Vigormortis)
- **night sheet order** (two characters mutually interact with each other's night actions)
  - these would be fixable by redefining the night rules of the game
- characters which **change game rules or alter abilities** towards other characters (Magician, Poppy Snitch)
  - characters that prevent Demon kills or minions to work
- characters that **may not be known** by some players, whose knowledge would lead to instant-win/lose (Heretic, Damsel, Atheist)
- abilities that allow good players to **choose properties as targets** instead of players. (Courtier)
- characters that are **too powerful** (**Grimoire-seeing or -altering** abilities, characters with **too many abilities**, characters that decide the **win/lose**)
  - good characters which interact with or get evil **characters or character types**
  - interacting with or **influencing public knowledge** or **story teller** (rather than private one)
  - these better become evil characters or Travellers

Finally, in some cases, Jinxes are thought to make an interaction more interesting (less boring), e.g. the Cerenovous with the Goblin.

It's recommended to edit the character definition (e.g. the Mathematician) or general game rules, if it does not conflict with only unusual ideas. Otherwise, whenever a new character is added, new Jinxes must be added. This is dumb.

# Script Guidelines

- contains sufficient info characters for identifying the evil players of a 15 player game, 2 different characters who can validate other characters
- for each weak info character, there should be a protection character
- evil players should be able to repudiate any ping of being evil or an evil character. (By repudiating the ping player or by bluffing a character that explains the contradiction.)
- every character can be repudiated, info can be repudiated by the info of other characters
  - this allows evil players to defend themselve when there is a ping on them
  - Characters cannot be proven or strictly confirmed with only one ability (e.g. in Bad Moon Rising, the Demon kills per night can vary such that the Gossip or Gambler claim can be repudiated)
- covert characters have another character that they could bluff
- bonus: players don't confirm easily as there are multiple reasons for an ability's event to occur

# Dear Dictator

Focuses on guessing Alignment and character type. Theme is political power or tyranny. Outsiders can be good or evil.

- Townsfolk
  - Dowser
  - [(Mayor)]
  - (Princess) (interesting with the Dictator)
  - [(King)] (replaced by Bodyguard)
  - [(Choirboy)] (replaced by Bodyguard)
  - [(Steward)] (replaced by Bodyguard)
  - Bodyguard
  - Pope
  - (Magician) (fits to the Punk, Sickener, Sectarian, Terminator, Dictator; a lighter version of the Poppy Grower)
  - [(Cult Leader)]
  - Instigator
  - Antifascist (useful against the Dictator and the Loan Shark)
  - Psychic (interacts with Dowser, King, Pope, Steward, Sectarian, Samurai, Faustian, Exorcist, Punk, drunk minions, demons, travellers)
  - Sectarian (interacts well with Anarchist and player state effects such as the Instigator)
  - Samurai*
  - [(Alsaahir)*]
  - [(Artist)*]
  - Blabber* (Gossip, repudiated by Samurai characters)
  - Faustian*
  - (Juggler)*
  - (Exorcist)*
  - Balloonatic (interesting with the Warmonger and Sinister Fog)

- Outsider
  - [Prosecutor]
  - [Politician]
  - Sickener (interacts well with characters who would not notice to be sick)
  - Anarchist
  - Romantic
  - Punk (interacts with the *-Townsfolk)
  - Traitor (interesting interaction with the Warmonger/Dictator)
  - Fan (interesting with the Dictator)

- Minion
  - [Brute] (replaces the Devil's Advocate, for the Prosecutor)
  - Whisperer [fits to Sickener, Punk]
  - Jailer [fits to Dictator]
  - Sinister Fog (fits to Dictator, highly destructive with Warmonger)
  - Tracker
  - Centralist (everyone gets a quota of 1 nomination, allows dead players to nominate an evil Twin Demon even if dead)
  - Terminator (fits to Centralist, Punk, Samurai (who can kill the Terminator), interesting with Dictator)

- Demon
  - (Lleech)
  - Loan Shark
  - Shredder
  - Warmonger

- Traveller
  - Wanderer
  - Sleepwalker (mainly useful with Samurai)
  - [(Bishop)] (allows the team to nominate/execute players with gut feelings when you cannot rely on abilities, even when the good team has lost useful abilities.)
  - (Voudon) (fits to Sinister Fog. The consequences of Voudon allow to infer who is dead or alive. If Voudon is in play, nobody can waste vote tokens)
  - Vice  (interacts with Pope, Instigator, Samurai/Shredder, Sectarian or with potentially any optional rule or with anyone via the Apatheist)
  - Putschist (impairs impartiality of the Story Teller)
  - Double Agent (fits to the Vice)

- Jinxes
  - Pope / Shredder: The Pope-protected player cannot be chosen for assassination (except if a Demon assassinates the self-protected Pope).
  - Pope / Punk: The Punk cannot get the Pope token.
  - Sectarian / Romantic: The Sectarian *might* learn that the Romantic is in play.
  - Anarchist / Samurai: A Samurai player can only kill an Anarchist when the Samurai has another character that only counts as Outsider this game.
  - Centralist / Terminator: If the Terminator nominates and executes the Demon player when dead, the Terminator's winning condition triggers nevertheless.
  - Warmonger / Anarchist: If the Warmonger chooses the Anarchist player, the Anarchist registers as good (otherwise evil).
  - Dictator / Anarchist: The Anarchist *might* register as good to Dictator.
  - Repairman / Toy Maker: Evil may see each other if 3 ≥ good Townsfolk are in play.

- Fabled
  - (Ferryman)
  - (Toy Maker)
  - Apatheist
  - Spoiler
  - Fantasist
  - Repairman (because of the many outsiders that could become evil)

- Loric
  - Dictator
  - Shopkeeper
  - (Hindu) (useful due to Dictator, Warmonger, Shredder)
  - (Gardener) (required for Warmonger)

# Wicked Wizardry

The wizard is actually the ultimate bluffing weapon. Any inconsistencies or insights can be explained away by claiming the Wizard that changed the game.

- Townsfolk
  - (Alchemist) (can be Wizard too)
  - Genie*
  - Murderer* (integrating a wish-based condition?)
  - Pastor*
  - Blabber*
  - Faustian*
  - Patroness (similar to Physician but helps against wishes or any kind of player state changes)
  - Forensic
  - Smartypants (replaces Librarian, Washerwoman and Investigator)
  - Survivor* (gets rewarded with information for double-claiming another player's character)
  - Logician
  - Kindergardener
  - Maniac (uses a deranged Demon ability and may register as Demon player)
  - Balloonatic
  - Village Gargoyle
  - Mentalist

- Outsider
  - Witcher
  - Wicked
  - [Hermit]
  - Bipartisan (when used by a Tyrant, the Story Teller decides before the game who may reach the final day and who not, reaching the final day with the Tyrant will make the evil team win)
  - Punk (when interacting with *-abilities, it can trigger the Punk, interesting with the President as ability)
  - Conspirator
  - Buddha* (can be a Wizard or a demon or a double character)

- Minion
  - (Wizard)*
  - Executioner
  - Agitator (similar to the Executioner)
  - Sorcerer* (replaces various Minions which affect or inspect 1 player or character per cycle)
  - President (replaces the Saint in Combination with the Alchemist)
  - Tyrant (turns every Townsfolk into an Outsider)

- Demon
  - Hydra (transfers the demon character when deadly executed)
  - Twin Demon (two demon players, 1 of which is good or evil, benefits of the Slayer or Faustian)
  - Ker (kills players mainly if their ability detected actual properties of the Ker player)
  - Steelfzkin (fits to the President, you have to guess 1 player as Demon with a special ballot)

- Traveller
  - Ambivalent (can be Wizard too)
  - Prevaricator (can be Wizard too)
  - Double Agent (can be Wizard too)
  - Care Worker
  - [(Bishop)] (allows for winning by social reading, for situations where a team is helpless, e.g. with a Tyrant)
  - Guardian (like a Scapegoat which protects a player from the Sorcerer or evil wishes or prevents players from killing the President or the Demon in a false moment)
  - Spellcaster (can define effects of nominations)

- Fabled
  - Spoiler
  - Superhero
  - Probationer (in order to restrict the Hydra, Twin Demon, Punk, Buddha)
  - Fantasist (in order to restrict the Wishes)
  - (Ferryman)

- Loric
  - Stranger (allows for getting clean info when wishes break havoc)
  - Quine (less strong than the Stranger but more mysterious)
  - Introvert
  - Dazzler
  - (Hindu) (people can get the Wizard when they die! Or they turn into a Traveller who can kill the Hydra.)

- Jinxes
  - Alchemist / Tyrant: If the Alchemist has the Tyrant ability, the Alchemist is an Outsider, not a Townsfolk.
  - Alchemist / President: If the Alchemist has the President ability, the Alchemist is an Outsider, not a Townsfolk.
  - Alchemist / Executioner: If the Alchemist has the Executioner ability, the evil Executioner is also in play.
  - Murderer / Punk: If the Murderer satisfies the condition by targeting the Punk, the Punk is assassinated.
  - Faustian / Twin Demon: The Faustian acts on both Twin Demons independently.
  - Faustian / Maniac: The Faustian replaces 1 choice of the Maniac if it does *not* kill the Faustian target.
  - Tyrant / Bipartisan: If the Bipartisan is used by the Tyrant, it is declared and each Townsfolk player gets an independent anti or normal state.
  - Hydra / Murderer: The Murderer *character* may register as Slayer character to the Hydra.
  - Hydra / Faustian: The Faustian *character* may register as Slayer character to the Hydra.
  - Steelfzkin / Witcher: Steelfzkin related jinxes are hidden from abilities and cannot interact (including this jinx).
  - Steelfzkin / Maniac: If the Steelfzkin is in play, the Maniac dies if the Maniac is guessed as a Demon (no matter their Demon ability).

# What's Your Alignment?

Introduces the neutral Alignment. With Lover and Mafia Boss from Anna.

- Townsfolk
  - [(Philosopher)]
  - [Village Gargoyle] (you are demon-killed and pass a Townsfolk character to a player when your Team loses majority)
  - Carnival Reveller
  - (Cult Leader)
  - (Snake Charmer)
  - (Village Idiot)
  - Bodyguard
  - [(Seamstress)] (somewhat duplicate with the Loric Stranger)
  - [Dowser]
  - (Noble)
  - (Shugenja)  (replaces the Seamstress)
  - (Lycanthrope)
  - (Bounty Hunter)
  - Murderer (Slayer)
  - Hairdresser
  - Adulterator (works with the Prosecutor)
  - (Pacifist) (works with the Prosecutor)
  - Demonologist
  - Ponerologist
  - Esoteric

- Outsider
  - Prosecutor (Ogre)
  - Lover (Modifikation: Auswahl des Dämons erzeugt kein neutrales Alignment mehr sondern nimmt das vorhandene)
  - Aristocrat
  - (Goon)
  - (Moonchild)
  - Activist

- Minion
  - (Mezepheles)
  - (Godfather)
  - Frustrater (alternative of the Devil's Advocate, for bluffing the Prosecutor)
  - Gnostic
  - Populist
  - Identity Thief

- Demon
  - Mafia Boss (Modifikation: die rekrutierte Person lernt den Mafiaboss nicht kennen)
  - Epidemon
  - Hydra
  - Nimp

- Traveller
  - (Harlot)
  - (Beggar)
  - Fact Checker
  - Psychotherapist
  - Influencer

- Jinx
  - In all abilities: Evil players may refer to neutral players with good character. Good players may refer to neutral players with evil character.
  - Ponerologist / Lover: Each change of the alignment shared with the Lover only counts as 1 change.
  - Gnostic / Cult Leader: The Gnostic's winning condition is not used, if the Cult Leader ends the game.
  - Epidemon / Bodyguard: Epidemon only gets to know the VIP if they are the VIP.
  - Mafia Boss / Aristocrat: Both Characters cannot be in play together.
  - Hydra / Murderer: The Murderer *character* may register as Slayer character to the Hydra.
  - Nimp / Snake Charmer: If the Snake Charmer swaps with the Nimp, they learn the player chosen by the Nimp on night 1.
  - Repairman / Aristocrat / Lover: If the Aristocrat or Lover is in play, the Repairman allows for 1 more evil player who can also be neutral.

- Fabled
  - (Ferryman)
  - (Doomsayer)
  - (Duchess)
  - Repairman
  - Alien

- Loric
  - Town Planner (Alignment is initiated sequentially at night)
  - Quine
  - Stranger


# Casual on the Homebrewer

The casual Homebrew script that nobody asks for.

- problems with Beginner's 101 version
  - Virgin without Drunk (or any other fake-Townsfolk such as Punk or Spy)
  - Grimoire interaction of Widow

- Townsfolk
  - (Nightwatchman)
  - (Fool)
  - (Savant) (erlaubt Story Teller Spielinformationen mit persönliche Infos zu den Spielenden zu verknüpfen, um das gegenseitige Kennenlernen zu motivieren)
  - Smartypants
  - Carnival Reveller
  - Psychic
  - Hair Dresser
  - Demographer
  - Mentalist
  - Commentator
  - (Monk)
  - (Soldier)
  - Sleuth
  - Biologist

- Outsiders
  - Rookie
  - Big Shot
  - (Snitch)
  - (Recluse)

- Minions
  - Bully
  - Crimson Boy
  - Brainformer
  - (Wraith)

- Demons
  - (Imp)
  - Monstro
  - Lleedh
  - Ker (überlässt Story Teller die Verantwortung für Kills)

- Jinxes
  - Rookie / Monstro: If the Rookie executes the player with Monstro, they are not assassinated and don't die.
  - Rookie / Leedh: If the Rookie moves the Lleedh to another player, the host remains the same.

- Traveller
  - Care Worker
  - (Apprentice)
  - Time Eater
  - Juror
  - (Bishop) (wenn die Informationen nicht reichen Social Read)

- Fabled
  - Apatheist
  - (Revoluationary)
  - Fair Player

- Lorics
  - Supervisor
  - (Storm Catcher)
  - (Hindu)


# Medieval Mischief

Focuses on rules, truth and the supernatural, with prominently placed religious tones.

- Townsfolk
  - Theist
  - Prophet
  - Genie
  - Crusader
  - Vampire Hunter
  - Dowser
  - Vagrant
  - Brainwasher
  - Sleuth
  - Prodigy (gets stronger if more Townsfolk abilities are on the script)
  - Mute
  - Mummer
  - Actor

- Outsider
  - Conspirator
  - Wicked
  - Romantic
  - Traitor
  - Werwolf Alpha (can find the Romantic)
  - Impersonator

- Minion
  - Sinister Fog (fits to Redeemer and Saboteur)
  - Mephisto
  - Poltergeist (registers as characters whose actual players are alchemists meanwhile)
  - Angel of Death
  - Mad Virologist (Black Mage)
  - Plague

- Demon
  - Vampire (creates Minions throughout the game, interesting with Preacher, Exorcist)
  - Satan
  - Tormon
  - Chameon (an imp who may change minions to good characters, fits to Vampire)
  - [Titan] (can change/create Demon characters)

- Fabled
  - Ferryman
  - Probationer (reasonable for the Vampire and Satan)
  - Spoiler
  - Illusionist (for Mephisto when the Story Teller cannot use the Grimoire anymore)
  - Croupier
  - Fantasist

- Loric
  - Redeemer
  - Shopkeeper

- Traveller
  - Double Agent (interacts well with a Vagrant)
  - Juror
  - Censor
  - Spellcaster
  - Suppressor (works well with the Redeemer)

# For Life or Death

Mechanisms about life, death and accountability. Slightly Horror-Themed.

- Townsfolk
  - Physician
  - Frankenstein
  - Attorney
  - Samurai
  - Pope
  - Copycat
  - Puppeteer
  - Soulkeeper
  - Arrester
  - Survivor
  - Hairdresser
  - Robber
  - Forensic
  - Shaman
  - Necrophage
  - Muezzin

- Outsider (max 5 due to Clan Boss)
  - Daimyō
  - Wicked
  - Death Gargoyle
  - Werwolf Alpha
  - Siamese Twin
  - [Prosecutor]

- Minion
  - Angel of Death
  - Clan Boss
  - Mad Virologist (Black Mage)
  - Brute (Red Mage)
  - Cyborg
  - Terminator

- Demon
  - Shredder (can assassinate a player)
  - Armagon
  - Ankou
  - Ghoul (fits to Ankou)
  - Eye Zero (resurrection can also fit to Ankou)

- Traveller
  - (Voudon) (useful with the Immortal or Saboteur when players don't know about the death state of players)
  - Guardian (replaces the Scapegoat)
  - (Bone Collector)
  - Care Worker
  - [Travel Agent]
  - Suppressor (works well with the Immortal and Saboteur)

- Fabled
  - Spoiler
  - Superhero
  - Platitudinarian
  - Apatheist (for players who covertly register as alive)

- Loric
  - Nightmare
  - Immortal (fits to unconscious states: Saboteur, Brute)
  - Saboteur
  - (Hindu)

# Scientific Myths

A modern mythological Sci-Fi world. This script comes with several crazy player states and defects.

- Townsfolk
  - Village Gargoyle
  - Paranoid
  - Imbecile
  - Model
  - Therapist
  - Physician
  - Psychatrist
  - Drug Pusher
  - Clown
  - Gourmet
  - Detective
  - Actor
  - (Alchemist)
  - Demographer
  - Clairvoyant
  - Biologist

- Outsider
  - Schizo
  - Nihilist
  - Witcher
  - Limpet (fits to the Model)
  - Pinocchio (similar to a negated Gossip but covertly)
  - Buddha

- Minion
  - Voodoo Master
  - Hacker (fits to the Clairvoyant, Witcher, Kala)
  - Glitcher
  - Neurohacker
  - Medusa
  - Spin Doctor (originally Boffin)

- Demon
  - Kala
  - Neurex
  - Ouroboros (kills by turning players into Farmers/Vagrants, fits to Physician and Pinocchio)
  - Titan  (all evil players wants to spare Outsiders to avoid additional good demons)
  - Gilorax (fits to character-swapping abilities such as the Ghoul, Snake Charmer, Titan, Kala, and the atheist)

- Fabled
  - Spoiler
  - Superhero
  - Croupier
  - Micromanager (the Story Teller(s) surveil(s) every private talk)
  - Illusionist

- Loric
  - Town Planner (replaces the Gardener, for Kala, also gives challenging characters to experienced players)
  - Immortal (fits to unconscious state: Medusa and Inspector)
  - Inspector
  - Shopkeeper

- Traveller
  - Vice
  - Ambivalent
  - Censor
  - Petrifier
  - (Matron) (like the Micromanager, helps a lot with validating behaviour conditions (from a story teller point of view) by preventing private talks)
  - Suppressor (fits to the Immortal and Inspector)

- Jinxes
  - Alchemist / Spin Doctor: If the Alchemist has the Spin Doctor ability, they are an Outsider, not a Townsfolk.

# It Follows

Alternative names: Imppreposterous Syncretastrophy, Synaesthetic Ideology

Alignment, Level changes and Metagaming included.

- Townsfolk
  - Existentialist: you choose any Townsfolk character according to Whale Buffet (beyond the script). If it is already in play, you are drunk. Any number of this can be in play. (Opposite to Philosopher)
  - meta-gaming characters: Farmer, High Priestess
  - Witness: you learn the character of the player who kills/executes you
  - Neurotic: you learn the category (defense, info, effects, attack+other) or script-related area (left, right, townsfolk+demon, outsider+minion) of the characters of players who nominate you.
  - Arbitrator: when there was a tie yesterday, you learn how many evil players were validly nominated.
  - Educator: once per game, choose 1 player to turn them into a good character. However, if this character is already in play, the chosen player gets drunk.
  - Warrior: the game may only end if only players of 1 alignment remain alive, even if you are dead. This means, the game may continue when 2 players are left.
  - Hercules: if you are the last alive player of your alignment at dawn, your team wins.
  - Extorted: You start knowing the Demon but if you tell it anyone (including the evil or having an evil character), vote for or nominate the Demon, your team loses the game (even if dead). The Demon knows you.
  - Renegade: You have a demon character (you register like a Demon) who kills only by choosing players or automatically and neither sees the Grimoire nor gets crisp character info of alive players.
  - Theorist: You have an ability and learn about 2 characters. If it is drunk, character 1 is in play. Else character 2. It may be any character, often a demon or minion with a good character.
  - Hero: If you die from the Demon, the story teller replaces the Demon, the Demon gets drunk, and the Story Teller gets to choose the demon kills such that it balances the game.
  - Statistician: You learn the number of abilities for some "categories" that are in play. (Protection, attack, info, effects, winning altering.)
  - Rationalist
  - something with odd or even number of alive evil players or alive evil characters.
  - Other good players (excluding you) may not be fewer than other evil players (excluding). (If a good player would be killed when alive goods are less than alive evils, they could be protected or make an evil die instead.)
  - choose a player (not yourself) whose nomination cannot succeed the next day.
  - if minions execute you, you don't die.
  - Players may nominate again if nobody has died today after the execution.
  - You learn the character+alignment of at most 1 player per day who you saved from being executed.
  - Hunger-Striker: You are executed (by yourself) as soon as only evil/no evil voted in a nomination. (alternative: you die at night)

- Outsider
  - Palingetic: you get a new character instead of dying but you always register as dead towards the ending condition, nominating and voting.
  - Sinner: When you die, you get a character+alignment associated with the losing/disadvantaged team
  - Aristocrat
  - Cheater (Fremdgänger): Players who interact with you are dysinformed (get false info) tonight.
  - You may vote only one time. If you do, all non-Demon voters/all good voters die.
  - You have the alignment of the last nominated player.
  - Hooligan: You have the alignment of the recent drunk (not poisoned) player
  - When you die, choose someone to copy their alignment (as long as it does not surpass ≤ 40% evil).
  - Anyone who nominates you, fails at any nominating and voting after it until dusk. (Already the vote for the current nomination will not work)
  - Unstable: If you survive the nomination of an evil player, at night, the Demon dies and turns you into the new evil demon.

- Minion
  - Hoodoo: You add a (hidden) Loric to the game that only you know
  - Jinx: You add a (hidden) Jinx to the game that only you know
  - Interferer: One or all players kill an alive (otherwise dead) neighbour instead of any player they would have killed (whenever they attack, execute or kill)
    - if it is only 1, you might choose who.
  - Forger (Fälscher): Each night, choose two players. Both players register as being the other player. (e.g. if one of them is killed, the other dies instead.)
  - Amoralist: When the game ends, *alive* players win if they lose & lose if they win, even if you died. The Demon sees the Grimoire. Dead players learn the Demon.
    - The Demon only wins by swapping characters with someone else
  - Cynic (everything that is "evil" is interpreted as "good" instead)
  - ???
    - e.g. choose 1 good player at night 1 for who this happens. They don't learn about this until you tell them.
    - Minions cannot change the character of the Demon into a non-Demon, as long as this ability holds. (E.g. the Pit-Hag.)
  - Crush (Schwarm): players think you are a good player with good character.
  - Colluder: Before night 1: choose 3 characters. (The number of bluffs.) Those characters may only be in play together or are not in play together.
  - Trickster: someone who fakes Lorics or Fables to be in play (but the Fabled or Lorics are actually poisoned, ineffective). Maybe, it also allows the Story Teller to fake public deaths, e.g. with the Doomsayer.
  - Your vote is only counted after the last vote has been counted  (the player's vote is subtracted again when the player doesn't raise their arm after the last vote has been counted)
  - Choose a player each night. Any changes to them are negated until dusk (if they would receive protection, they lose it. If they would die, they get +1 life)
  - You can send forged property signals to 1 player each night (for example a character or alignment change or that the player has been chosen by an ability or is informed due to some ability).
  - the Demon acts again if no-one has died tonight

- Demon
  - Poobah: choose a known or official Demon character. The Story Teller declares ≤ 4 Demons that could be in play. Others cannot. At each day and each night, you may choose to suspend actions for your Demon ability and get any 1 non-Demon as foreground character to play (i.e. suppressing actions for the Demon background character).
  - Psykyll: choose 2 or 3 players who get deranged. If no-one dies from those players, 1 of the deranged players dies instead at dawn.
  - Follower: 2 players start being haunted. Each night, a haunted player ("you") has to choose another player to be haunted. If this player already is haunted, you die, otherwise you get haunted again if the player (you chose) has died. Evil players know who are haunted. You register as a different in-play character to different players.
  - Gamorra: Each day, curse 1 player. If a player (even including the Demon) points at a cursed player at night, one of both dies. The curse of a player only goes away if the cursed player has died. (Therefore, it can only go away for dead players when they die again, e.g. after resurrection.) (A player who cannot wake at night should be more likely to die than one who does.) The Demon may also choose themself in which case the Demon never dies. Minions are less likely to die than good characters. Players who do not point, might die when they get info of a cursed player.
  - Cheese Touch: Each night, choose 1 player to re-kill. [At day, touch a player to swap characters with them.] You swap characters with players who kill or detect you. When the game ends, you lose, even if dead. [0 minions]
    - a good Cheese Touch tries to re-kill a dead player who detects the Demon (e.g. Sage, Ravenskeeper)
    - an evil Cheese Touch tries to be killed or detected by an alive player (e.g. Golem)
  - Svandal: any travellers are hidden, evil and are like Minions (they can be executed with a nomination or exiled by a call for exile, but the call for exile would always fail for non-travellers). However, travellers might be declared. You have a Traveller character but register as Demon to all game rules. Day-time mechanisms now are decided at night. (E.g. the Gunslinger or the Gangster who kills a neighbour who was nominated (or exile-called) yesterday and you + the other neighbour voted for it.)
  - Serial Killer: You have the Murderer character but your ability refreshes whenever you kill. You don't die from your ability.
    - effectively, the Serial Killer gets to know a condition which triggers deaths. This could be voting, nominating, saying a special word (or phrase). It might require the target to do it or the Demon.

- other
  - Certain characters can kill only certain players or characters

- Lorics
  - Pope
  - Town Planner
  - TV Moderator: each of 3 groups of players have reserved game actions that others don't have
  - Duelist: The nominee for execution duels their nominator. The loser is executed.
  - Pagan: If a Heretic is in play, all other good players know it and lose their character. (original Idea from the Internet but where it is listed as a Townsfolk character.)
  * the good and the evil players are known from the start, randomly distributed and equal in number. Everything happens publicly. No private talks. At night, abilities get information about others. Some abilities attack at day, some at night. Some characters can only be killed by some characters.
    - players might choose a character to play. Otherwise, both teams have the same set of characters.
    - characters kill only once per game
    - one character can choose 1 player per night to see their character. This can be used for communication and reconnaissance.
    - a character who can kill only the neighbour(s)
    - a character who can kill only the most far away player(s)
  * everyone has the same character in addition (which is declared)
  * everyone gets a new character (of Level 1?) instead of dying
    - game ends, if ≥ 2/3 of players are evil or if no demon character is in play anymore. (Or based on reaching a certain level.)
  * evil minions and demons get an additional Townsfolk character who gets info about evil players, instead of Minion Info or Demon Info
    - Clockmaker
    - Chef
    - Noble
    - Shugenja
    - Investigator
    - Magician
    - Flower Girl
    - High Priestess
    - Towns Crier
    - Ogre (1 player gets your start alignment if your chosen player has opposite alignment)
  * Every person plays multiple or N players (all of who you know)
    - you get 1 point for each player's win at the end
    - alignment changes
  * Everyone has multiple or N lives
    - Every player gets to know how many lives they have when it changes.
  * Everyone has multiple or N *characters* (not just abilities)
  * Everyone gets N-times a new character instead of dying
    - of the same character type
    - of a different character type → Demon lives only once, except if someone else gets Demon before.
  * Noone knows their alignment, only another player person who is in their team and one who isn't
  * Everyone has a Level. (Level System)
    - instead of killing, there are points?
  * There are N alignments