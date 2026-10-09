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
  - (Princess) (interesting with the Fascist)
  - [(King)] (replaced by Bodyguard)
  - [(Choirboy)] (replaced by Bodyguard)
  - [(Steward)] (replaced by Bodyguard)
  - Bodyguard
  - Pope
  - (Magician) (fits to the Punk, Sickener, Sectarian, Terminator, Fascist; a lighter version of the Poppy Grower)
  - [(Cult Leader)]
  - Instigator
  - Antifascist (useful against the Fascist and the Loan Shark)
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
  - Traitor (interesting interaction with the Warmonger/Fascist)
  - Fan (interesting with the Fascist)

- Minion
  - [Brute] (replaces the Devil's Advocate, for the Prosecutor)
  - Whisperer [fits to Sickener, Punk]
  - Jailer [fits to Fascist]
  - Sinister Fog (fits to Fascist, highly destructive with Warmonger)
  - Tracker
  - Equalizer (everyone gets a quota of 1 nomination, allows dead players to nominate an evil Twin Demon even if dead)
  - Terminator (fits to Equalizer, Punk, Samurai (who can kill the Terminator), interesting with Fascist)

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
  - Equalizer / Terminator: If the Terminator nominates and executes the Demon player when dead, the Terminator's winning condition triggers nevertheless.
  - Warmonger / Anarchist: If the Warmonger chooses the Anarchist player, the Anarchist registers as good (otherwise evil).
  - Fascist / Anarchist: The Anarchist *might* register as good to Fascist.
  - Repairman / Toy Maker: Evil may see each other if 3 ≥ good Townsfolk are in play.

- Fabled
  - (Ferryman)
  - (Toy Maker)
  - Apatheist
  - Spoiler
  - Fantasist
  - Repairman (because of the many outsiders that could become evil)

- Loric
  - Fascist
  - Shopkeeper
  - (Hindu) (useful due to Fascist, Warmonger, Shredder)
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


# Abbey of Abstinence

A script inspired by Trouble Brewing without drunkenness and without alternative winning conditions, only misregistration. The idea is to make the game less intimidating, easier to pick up and more skill-based.

It also combines more social deduction with logic due to the higher amount of player choosing abilities.

- Townsfolk

  - Adventurer (Each night*, learn the players that were chosen by the Demon (even if they didn't die))
  - (replaces the Mayor) (Once per game, choose a player who will be executed and killed instead of you (once).)
  - (replaces the Virgin) (If a Townsfolk nominates and executes you, they get executed instead)
  - (each night, learn which neighbors lied yesterday.)
  - (replaces the Undertaker) (You start choosing a player: when they die, learn their character & choose an alive player.)
  - Psychic (Each night, learn 1 or 2 players who got info related to you. 1 might be false.)
  - (replaces the Empath) (Each night, learn whether your neighbors have equal alignment)
  - (replaces the Dreamer) (Each night, choose a player: Learn two characcter *types* of them, one is correct.)
  - (replaces the Mathematician) (Each night, choose a player: learn if their ability has worked abnormally.)
  - (You might wish to die (once) intead of someone else. (You don't choose who you protect.))
  - (Monk)
  - (Chef)
  - Smartypants

- Outsider

  - (Recluse)
  - (Mutant) (replaces the Drunk)
  - Rookie (replaces the Slayer)
  - Big Shot (replaces the Saint)

- Minion

  - Brainformer (replaces Scarlet Womand and Baron)
  - Identity Thief (replaces the Spy)
  - Favorite (replaces the Spy) (The Story Teller tries to answer all your questions truly)
  - Diabolo (replaces the Poisoner) (Each night, choose 2 players: the 1st registers as the 2nd.)

- Demon

  - (Imp)
  - (Po)

- Traveller

  - (Gunslinger)
  - (Thief)
  - (Bureaucrat)
  - (Scapegoat)
  - (Each night, choose 1 player: they cannot nominate (if not the final day).)


# Casual on the Homebrewer

The casual Homebrew script that nobody asks for.

- problems with Beginner's 101 version
  - Virgin without Drunk (or any other fake-Townsfolk such as Punk or Spy)
  - Grimoire interaction of Widow

- feedback:
  - Einbezug von Gender ist diskriminierend. Ein gebluffter Demographer hat behauptet, eine weibliche Person wäre böse, dann wurden die einzigen offen weiblichen Personen angegriffen.
    - zugleich gab es eine Person, die fälschlicherweise als ein Geschlecht zugeordnet wurde
  - difficult communication at night
    - joker, specific night message. Instead talk to Joker before the first night.
      - same with Crimson Boy who can be a Joker.
    - Care Worker
  - weak Smartypants sees the only outsider
  - Lleedh is difficult to story-tell well and should be removed
  - Commentator is difficult to story-tell and could be replaced
  - Joker braucht womöglich mehr Beschränkung.
  - Verständnis-Schwierigkeiten:
    - Doppelgänger → wie killt der?
    - Formulierung des Psychic
    - Formulierung des Hairdresser (Fähigkeit verändert??)
    - Lleedh → ability works abnormally (but only within poisoned boundaries)
    - Monstro → Unterschied zu Lil' Monsta geht unter
  - manche Figuren haben komplizierte Edge-Cases
  - Quizmaster sollte vor dem Dämon killen
  - fehlende Regelungen mit Travellers
  - Psychic macht keinen Sinn, wenn es nicht mindestens 3 Figuren gibt, die andere nachts sehen. Solche sind:
    - Sleuth
    - Biologist
    - Mentalist
    - Smartypants

- Townsfolk
  - (Nightwatchman) / Doppelgänger
  - (Fool) / Joker
  - [(Savant)] (erlaubt Story Teller Spielinformationen mit persönliche Infos zu den Spielenden zu verknüpfen, um das gegenseitige Kennenlernen zu motivieren)
  - Smartypants
  - Carnival Reveller
  - Psychic
  - Hair Dresser
  - Demographer
  - Mentalist
  - Hero
  - (Monk) / Quizmaster
  - (Soldier) / Champion
  - Sleuth
  - Biologist
  - Darling

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
  - [Lleedh]
  - Ker (überlässt Story Teller die Verantwortung für Kills)

- Jinxes
  - Rookie / Monstro: If the Rookie executes the player with Monstro, they are not assassinated and don't die.
  - Rookie / Leedh: If the Rookie moves the Lleedh to another player, the host remains the same & alive.

- Traveller
  - Care Worker
  - (Apprentice)
  - Time Eater
  - Juror
  - (Bishop) (wenn die Informationen nicht reichen Social Read)

- Fabled
  - Commentator
  - Apatheist
  - (Revoluationary)
  - Fair Player

- Lorics
  - Supervisor
  - (Storm Catcher)
  - (Hindu)

# Outside Of Count

Maximum outsider modifications and many outsiders

- Townsfolk
  - (Librarian) (allows for detecting Outsiders)
  - (Investigator) (fits to Librarian)
  - (Virgin) (allows for detecting Townsfolk)
  - (Professor) (allows for detecting Townsfolk)
  - (Balloonist) (increases outsider count)
  - (Philosopher) (may choose an outsider too)
  - (Savant)
  - (Grandmother)
  - (Preacher)
  - (Magician)
  - (Sage)
  - (Amnesiac) (You learn the number of Outsiders in play, You get any Townsfolk ability but which interacts with outsiders instead: e.g. Empath, Towns Crier)
  - Samurai

- Outsider
  - (Golem)
  - (Hermit)
  - (Lunatic)
  - (Barber)
  - (Saint)
  - (Goon)

- Minion
  - (Marionette) (may think to be an outsider without being one)
  - (God Father)
  - (Baron)
  - (Xaan)
  - (Boffin) (may give the Demon an outsider character, Lunatic interaction??)

- Demons
  - (Fang Gu)
  - (Kazali)
  - (Lord of Typhon)
  - (Vigormortis)

- Fabled
  - Sentinel

- Lorics
  - Pope

# Row to Success (Serie zum Sieg)

Various homebrew abilities that concern player rows

- getting row info (about a player or the row property)
- comparing the row of players
- getting notification of row changes
- killing 1 or more players of a row
- state effects on players of a row (e.g. 1 player of each alive row is poisoned)
- rows with dead+alive players, rows with alive players, rows with dead players

- Townsfolk
  - Cartographer
  - Dowser

- Loric
  - Localist

# Visiting the Vizier (Visite beim Wizier)

- Townsfolk
  - (Pacifist)
  - (Farmer)
  - (Sailor)
  - (Courtier)
  - (Sage)
  - (Snaker Charmer)
  - (Undertaker)
  - (Cannibal)
  - (Juggler)
  - (Ravenkeeper)
  - (Lycanthrope)
  - (Virgin)
  - (Princess)
  - Sectarian

- Outsiders
  - (Barber)
  - (Lunatic) (or Goon but which is too many evil with Lord of Typhon)
  - (Zealot)
  - (Drunk) (a Drunk with Sectarian is like a Lunatci who believes to be a minion)

- Minions
  - (Vizier)
  - (Pit-Hag) (or Mastermind)
  - (Cerenovus) (nice with Vizier) (or Marionette)
  - (Organ Grinder)
  - [(Goblin)]

- Demons
  - (Vortox) (requireds drunkness abilities)
  - (Lord of Typhon) (too weak with only Vortox)
  - (Imp) (nice with the Lunatic)

- Travellers
  - (Butcher) (makes sense when abilities protect from death by execution) (or Bishop)
  - (Voudon)
  - (Cackle Jack)
  - (Judge) (similar to Cerenovus)
  - (Gun Slinger)
  - (Gnome) (quite useless later on)

- Loric
  - (Gardener) (or Kazali as alternative)

# Demeaning Demeanors

If the Hermit tells others to be the Drunk, good loses.

- Townsfolk

  - [Samurai]
  - (Empath)
  - (Acrobat)
  - (Minstrel)
  - (Virgin)
  - Vagrant (-0 or -1 outsiders, might unknowingly have a traveller ability)
  - Faustian (like Lycanthrope + Gambler)
  - (Philosopher)

- Outsider

  - (Hermit)
  - (Drunk)
  - (Saint)
  - (Mutant)

- Minion

  - [Clan Boss]
  - (Cerenovus)
  - Brainformer (like Baron + Scarlet Woman)
  - [(Baron)]
  - [(Witch)]

- Demon

  - (No Dashii)
  - (Vigormortis)

- Traveller

  - Gun Slinger
  - Gnome
  - Butcher
  - Judge
  - Scapegoat

# Scallywag Scourge

Many abilities which can break the Roolz

- Townsfolk
  - (Pixie)
  - (Banshee)
  - Crusader
  - you have an outsider ability. You can vote and nominate once per day, even if dead. [+1 outsider]
  - learn the alignment of executed players (they don't need to die)
  - a minion gets an unknown outsider ability
  - (Magician)
  - when you die choose 1 player: if good they get your character
  - [(Alchemist)]
  - [-0 or -1 outsiders]
  - (Engineer)
  - Theist (players can break rules arbitrarily but only those who do, lose the game)
  - Each night, choose 1 player (different from last night): if an evil chooses them tonight, they choose another one instead. (including the Marionette)
  - the day ends after your nomination
  - If there is a tie at day, no-one dies at night

- Outsider
  - (Mutant)
  - (Zealot)
  - (Butler)
  - (Golem)
  - (Klutz)
  - (Moonchild)
  - You lose. (unless you died)

- Minion
  - (Cerenovus)
  - (Baron)
  - (Marionette)
  - Bully
  - Equalizer

- Demons
  - (Al-Hadikhia)
  - each night*, kill 1 player. Outsiders are drunk townsfolk instead.
  - [(Leviathan)]
  - executions or nominations allow you to kill one more time. / Nominations are limited per day / 
  - Epidemon (each night*, choose 1 player to get the evil demon and you die.)

- Traveller
  - (Gunslinger)
  - (Butcher)
  - (Voodon)

- Fabled
  - (Doomsayer)
  - (Duchess)

# Killing Harmony

- Townsfolk
  - (Clockmaker)
  - (Chef)
  - (Shugenja)
  - (Artist)
  - (Knight)
  - (Grandmother)
  - (Seamstress)
  - (Fortune Teller)/(Savant)
  - (Virgin)
  - (Undertaker)
  - (Princess)
  - (Pacifist)
  - (Minstrel)
  - (Mayor)

- Outsiders
  - (Drunk)
  - (Saint)
  - (Mutant)
  - (Klutz)

- Minions
  - (Mastermind)
  - (Marionette)
  - Executioner (If no-one executes more than you, your team must win)
  - (Scarlet Woman)

- Demons
  - (Vortox)
  - Legionatic
  - (Pukka)
  - Each night*, choose 1 player to kill, even if dead.

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
  - Existentialist
  - meta-gaming characters: Farmer, High Priestess
  - Witness
  - Neurotic
  - Arbitrator
  - Educator
  - Warrior
  - Hercules
  - Extorted/Ambassador
  - Renegade
  - Theorist: You have an ability AND learn 2 characters. If your ability is drunk, character 1 is in play. Else character 2. It may be any character, often a demon or minion with a good character.
  - Balancer
  - Statistician
  - Rationalist
  - Hunger-Striker

- Outsider
  - Palingenesist
  - Sinner
  - Amoralist
  - Hooligan
  - Unstable

- Minion
  - Interferer
  - Cynic
  - Crush (Schwarm)
  - Colluder/Diabolo
  - Mind Forger

- Demon
  - Poobah
  - Psykyll
  - Follower
  - Gamorra
  - Serial Killer