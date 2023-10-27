savedGameTypeID = localStorage.getItem("gameTypeID");
gameTypeID = JSON.parse(savedGameTypeID);



function setN64GameName() {
const gameNameTypeID = 
['../n64-host/n64-alt/1080_Snowboarding_(Japan_USA)_(EnJa).7z',
'../n64-host/n64-alt/3D_Model_RGB_Test_Program_(USA)_(Test_Program).7z',
'../n64-host/n64-alt/40_Winks_(USA)_(StoneAgeGamer_Everdrive_64_ROM)_(Aftermarket)_(Unl).7z',
'../n64-host/n64-alt/AeroFighters_Assault_(USA).7z',
'../n64-host/n64-alt/AeroGauge_(USA).7z',
'../n64-host/n64-alt/Aidyn_Chronicles_-_The_First_Mage_(USA).7z',
'../n64-host/n64-alt/All-Star_Baseball_2000_(USA).7z',
'../n64-host/n64-alt/All-Star_Baseball_2001_(USA).7z',
'../n64-host/n64-alt/All-Star_Baseball_99_(USA).7z',
'../n64-host/n64-alt/All_Star_Tennis_99_(USA).7z',
'../n64-host/n64-alt/Armorines_-_Project_S.W.A.R.M._(USA).7z',
'../n64-host/n64-alt/Army_Men_-_Air_Combat_(USA).7z',
'../n64-host/n64-alt/Army_Men_-_Sarges_Heroes_(USA).7z',
'../n64-host/n64-alt/Army_Men_-_Sarges_Heroes_2_(USA).7z',
'../n64-host/n64-alt/Asteroids_Hyper_64_(USA).7z',
'../n64-host/n64-alt/Automobili_Lamborghini_(USA).7z',
'../n64-host/n64-alt/Banjo-Kazooie_(USA).7z',
'../n64-host/n64-alt/Banjo-Tooie_(USA).7z',
'../n64-host/n64-alt/Bassmasters_2000_(USA).7z',
'../n64-host/n64-alt/Batman_Beyond_-_Return_of_the_Joker_(USA).7z',
'../n64-host/n64-alt/BattleTanx_(USA).7z',
'../n64-host/n64-alt/BattleTanx_-_Global_Assault_(USA).7z',
'../n64-host/n64-alt/Battlezone_-_Rise_of_the_Black_Dogs_(USA).7z',
'../n64-host/n64-alt/Beetle_Adventure_Racing!_(USA)_(EnFrDe).7z',
'../n64-host/n64-alt/Big_Mountain_2000_(USA).7z',
'../n64-host/n64-alt/Bio_F.R.E.A.K.S._(USA).7z',
'../n64-host/n64-alt/Blast_Corps_(USA).7z',
'../n64-host/n64-alt/Blues_Brothers_2000_(USA).7z',
'../n64-host/n64-alt/Body_Harvest_(USA).7z',
'../n64-host/n64-alt/Bomberman_64_(USA).7z',
'../n64-host/n64-alt/Bomberman_64_-_The_Second_Attack!_(USA).7z',
'../n64-host/n64-alt/Bomberman_Hero_(USA).7z',
'../n64-host/n64-alt/Bottom_of_the_9th_(USA).7z',
'../n64-host/n64-alt/Brunswick_Circuit_Pro_Bowling_(USA).7z',
'../n64-host/n64-alt/Buck_Bumble_(USA).7z',
'../n64-host/n64-alt/Bugs_Life_A_(USA).7z',
'../n64-host/n64-alt/Bust-A-Move_2_-_Arcade_Edition_(USA).7z',
'../n64-host/n64-alt/Bust-A-Move_99_(USA).7z',
'../n64-host/n64-alt/California_Speed_(USA).7z',
'../n64-host/n64-alt/Carmageddon_64_(USA).7z',
'../n64-host/n64-alt/Castlevania_(USA).7z',
'../n64-host/n64-alt/Castlevania_-_Legacy_of_Darkness_(USA).7z',
'../n64-host/n64-alt/Chameleon_Twist_(USA).7z',
'../n64-host/n64-alt/Chameleon_Twist_2_(USA).7z',
'../n64-host/n64-alt/Charlie_Blasts_Territory_(USA).7z',
'../n64-host/n64-alt/Chopper_Attack_(USA).7z',
'../n64-host/n64-alt/Clay_Fighter_-_Sculptors_Cut_(USA).7z',
'../n64-host/n64-alt/Clay_Fighter_63_1-3_(USA).7z',
'../n64-host/n64-alt/Command__Conquer_(USA).7z',
'../n64-host/n64-alt/Conkers_Bad_Fur_Day_(USA).7z',
'../n64-host/n64-alt/Cruisn_Exotica_(USA).7z',
'../n64-host/n64-alt/Cruisn_USA_(Europe).7z',
'../n64-host/n64-alt/Cruisn_USA_(USA).7z',
'../n64-host/n64-alt/Cruisn_USA_(USA)_(Wii_Virtual_Console).7z',
'../n64-host/n64-alt/Cruisn_World_(USA).7z',
'../n64-host/n64-alt/CyberTiger_(USA).7z',
'../n64-host/n64-alt/Dark_Rift_(USA).7z',
'../n64-host/n64-alt/Deadly_Arts_(USA).7z',
'../n64-host/n64-alt/Destruction_Derby_64_(USA).7z',
'../n64-host/n64-alt/Diddy_Kong_Racing_(USA)_(EnFr).7z',
'../n64-host/n64-alt/Donald_Duck_-_Goin_Quackers_(USA)_(EnFrDeEsIt).7z',
'../n64-host/n64-alt/Donkey_Kong_64_(USA).7z',
'../n64-host/n64-alt/Doom_64_(USA).7z',
'../n64-host/n64-alt/Dr._Mario_64_(USA).7z',
'../n64-host/n64-alt/Dual_Heroes_(USA).7z',
'../n64-host/n64-alt/Duck_Dodgers_Starring_Daffy_Duck_(USA)_(EnFrEs).7z',
'../n64-host/n64-alt/Duke_Nukem_-_Zero_Hour_(USA).7z',
'../n64-host/n64-alt/Duke_Nukem_64_(USA).7z',
'../n64-host/n64-alt/Earthworm_Jim_3D_(USA).7z',
'../n64-host/n64-alt/Excitebike_64_(USA).7z',
'../n64-host/n64-alt/Extreme-G_(USA).7z',
'../n64-host/n64-alt/Extreme-G_XG2_(USA).7z',
'../n64-host/n64-alt/F-1_World_Grand_Prix_(USA).7z',
'../n64-host/n64-alt/F-Zero_X_(USA).7z',
'../n64-host/n64-alt/F1_Pole_Position_64_(USA)_(EnFrDe).7z',
'../n64-host/n64-alt/FIFA_-_Road_to_World_Cup_98_(USA)_(EnFrDeEsItNlSv).7z',
'../n64-host/n64-alt/FIFA_99_(USA)_(EnFrDeEsItNlPtSv).7z',
'../n64-host/n64-alt/FIFA_Soccer_64_(USA)_(EnFrDe).7z',
'../n64-host/n64-alt/Fighters_Destiny_(USA).7z',
'../n64-host/n64-alt/Fighter_Destiny_2_(USA).7z',
'../n64-host/n64-alt/Fighting_Force_64_(USA).7z',
'../n64-host/n64-alt/filenames.txt',
'../n64-host/n64-alt/Flying_Dragon_(USA).7z',
'../n64-host/n64-alt/Forsaken_64_(USA).7z',
'../n64-host/n64-alt/Fox_Sports_College_Hoops_99_(USA).7z',
'../n64-host/n64-alt/GameBooster_64_(USA)_(v1.1)_(Unl).7z',
'../n64-host/n64-alt/GameShark_Pro_(USA)_(v2.0)_(Unl).7z',
'../n64-host/n64-alt/GameShark_Pro_(USA)_(v3.3)_(Unl).7z',
'../n64-host/n64-alt/Gauntlet_Legends_(USA).7z',
'../n64-host/n64-alt/Gex_3_-_Deep_Cover_Gecko_(USA).7z',
'../n64-host/n64-alt/Gex_64_-_Enter_the_Gecko_(USA).7z',
'../n64-host/n64-alt/Glover_(USA).7z',
'../n64-host/n64-alt/Goemons_Great_Adventure_(USA).7z',
'../n64-host/n64-alt/GoldenEye_007_(USA).7z',
'../n64-host/n64-alt/Golden_Nugget_64_(USA).7z',
'../n64-host/n64-alt/GT_64_-_Championship_Edition_(USA).7z',
'../n64-host/n64-alt/Harvest_Moon_64_(USA).7z',
'../n64-host/n64-alt/Hercules_-_The_Legendary_Journeys_(USA).7z',
'../n64-host/n64-alt/Hexen_(USA).7z',
'../n64-host/n64-alt/Hey_You_Pikachu!_(USA).7z',
'../n64-host/n64-alt/Hot_Wheels_-_Turbo_Racing_(USA).7z',
'../n64-host/n64-alt/Hybrid_Heaven_(USA).7z',
'../n64-host/n64-alt/Hydro_Thunder_(USA).7z',
'../n64-host/n64-alt/Iggys_Reckin_Balls_(USA).7z',
'../n64-host/n64-alt/In-Fisherman_-_Bass_Hunter_64_(USA).7z',
'../n64-host/n64-alt/Indiana_Jones_and_the_Infernal_Machine_(USA).7z',
'../n64-host/n64-alt/Indy_Racing_2000_(USA).7z',
'../n64-host/n64-alt/International_Superstar_Soccer_2000_(USA)_(EnEs).7z',
'../n64-host/n64-alt/International_Superstar_Soccer_64_(USA).7z',
'../n64-host/n64-alt/International_Superstar_Soccer_98_(USA).7z',
'../n64-host/n64-alt/International_Track__Field_2000_(USA).7z',
'../n64-host/n64-alt/Jeopardy!_(USA).7z',
'../n64-host/n64-alt/Jeremy_McGrath_Supercross_2000_(USA).7z',
'../n64-host/n64-alt/Jet_Force_Gemini_(USA).7z',
'../n64-host/n64-alt/John_Romeros_Daikatana_(USA).7z',
'../n64-host/n64-alt/Ken_Griffey_Jr.s_Slugfest_(USA).7z',
'../n64-host/n64-alt/Killer_Instinct_Gold_(USA).7z',
'../n64-host/n64-alt/Kirby_64_-_The_Crystal_Shards_(USA).7z',
'../n64-host/n64-alt/Knife_Edge_-_Nose_Gunner_(USA).7z',
'../n64-host/n64-alt/Knockout_Kings_2000_(USA).7z',
'../n64-host/n64-alt/Kobe_Bryant_in_NBA_Courtside_(USA).7z',
'../n64-host/n64-alt/Legend_of_Zelda_The_-_Majoras_Mask_(USA).7z',
'../n64-host/n64-alt/Legend_of_Zelda_The_-_Majoras_Mask_(USA)_(GameCube).7z',
'../n64-host/n64-alt/Legend_of_Zelda_The_-_Ocarina_of_Time_(USA).7z',
'../n64-host/n64-alt/Legend_of_Zelda_The_-_Ocarina_of_Time_(USA)_(GameCube).7z',
'../n64-host/n64-alt/Legend_of_Zelda_The_-_Ocarina_of_Time_-_Master_Quest_(USA)_(GameCube).7z',
'../n64-host/n64-alt/LEGO_Racers_(USA)_(EnFrDeEsItNlSvNoDaFi).7z',
'../n64-host/n64-alt/Lode_Runner_3-D_(USA).7z',
'../n64-host/n64-alt/Mace_-_The_Dark_Age_(USA).7z',
'../n64-host/n64-alt/Madden_Football_64_(USA).7z',
'../n64-host/n64-alt/Madden_NFL_2000_(USA).7z',
'../n64-host/n64-alt/Madden_NFL_2001_(USA).7z',
'../n64-host/n64-alt/Madden_NFL_2002_(USA).7z',
'../n64-host/n64-alt/Madden_NFL_99_(USA).7z',
'../n64-host/n64-alt/Magical_Tetris_Challenge_(USA).7z',
'../n64-host/n64-alt/Major_League_Baseball_Featuring_Ken_Griffey_Jr._(USA).7z',
'../n64-host/n64-alt/Mario_Golf_(USA).7z',
'../gba/gba-host/n64-alt/mariokart64.z64',
'../n64-host/n64-alt/Mario_Party_(USA).7z',
'../n64-host/n64-alt/Mario_Party_2_(USA).7z',
'../n64-host/n64-alt/Mario_Party_2_(USA)_(Wii_Virtual_Console).7z',
'../n64-host/n64-alt/Mario_Party_3_(USA).7z',
'../n64-host/n64-alt/Mario_Tennis_(USA).7z',
'../n64-host/n64-alt/Mario_Tennis_(USA)_(Wii_Virtual_Console).7z',
'../n64-host/n64-alt/Mega_Man_64_(USA).7z',
'../n64-host/n64-alt/Mia_Hamm_Soccer_64_(USA)_(EnEs).7z',
'../n64-host/n64-alt/Mickeys_Speedway_USA_(Europe)_(EnFrDeEsIt).7z',
'../n64-host/n64-alt/Mickeys_Speedway_USA_(USA).7z',
'../n64-host/n64-alt/Mickey_no_Racing_Challenge_USA_(Japan).7z',
'../n64-host/n64-alt/Micro_Machines_64_Turbo_(USA).7z',
'../n64-host/n64-alt/Midways_Greatest_Arcade_Hits_-_Volume_1_(USA).7z',
'../n64-host/n64-alt/Mike_Piazzas_Strike_Zone_(USA).7z',
'../n64-host/n64-alt/Milos_Astro_Lanes_(USA).7z',
'../n64-host/n64-alt/Mischief_Makers_(USA).7z',
'../n64-host/n64-alt/Mission_-_Impossible_(USA).7z',
'../n64-host/n64-alt/Monaco_Grand_Prix_(USA).7z',
'../n64-host/n64-alt/Monopoly_(USA).7z',
'../n64-host/n64-alt/Monster_Truck_Madness_64_(USA).7z',
'../n64-host/n64-alt/Mortal_Kombat_4_(USA).7z',
'../n64-host/n64-alt/Mortal_Kombat_Mythologies_-_Sub-Zero_(USA).7z',
'../n64-host/n64-alt/Mortal_Kombat_Trilogy_(USA).7z',
'../n64-host/n64-alt/MRC_-_Multi-Racing_Championship_(USA).7z',
'../n64-host/n64-alt/Ms._Pac-Man_-_Maze_Madness_(USA).7z',
'../n64-host/n64-alt/Mystical_Ninja_Starring_Goemon_(USA).7z',
'../n64-host/n64-alt/Nagano_Winter_Olympics_98_(USA).7z',
'../n64-host/n64-alt/Namco_Museum_64_(USA).7z',
'../n64-host/n64-alt/NASCAR_2000_(USA).7z',
'../n64-host/n64-alt/NASCAR_99_(USA).7z',
'../n64-host/n64-alt/NBA_Courtside_2_featuring_Kobe_Bryant_(USA).7z',
'../n64-host/n64-alt/NBA_Hangtime_(USA).7z',
'../n64-host/n64-alt/NBA_in_the_Zone_2000_(USA).7z',
'../n64-host/n64-alt/NBA_in_the_Zone_98_(USA).7z',
'../n64-host/n64-alt/NBA_in_the_Zone_99_(USA).7z',
'../n64-host/n64-alt/NBA_Jam_2000_(USA).7z',
'../n64-host/n64-alt/NBA_Jam_99_(USA).7z',
'../n64-host/n64-alt/NBA_Live_2000_(USA)_(EnFrDeEs).7z',
'../n64-host/n64-alt/NBA_Live_99_(USA)_(EnFrDeEsIt).7z',
'../n64-host/n64-alt/NBA_Showtime_-_NBA_on_NBC_(USA).7z',
'../n64-host/n64-alt/New_Tetris_The_(USA).7z',
'../n64-host/n64-alt/NFL_Blitz_(USA).7z',
'../n64-host/n64-alt/NFL_Blitz_-_Special_Edition_(USA).7z',
'../n64-host/n64-alt/NFL_Blitz_2000_(USA).7z',
'../n64-host/n64-alt/NFL_Blitz_2001_(USA).7z',
'../n64-host/n64-alt/NFL_QB_Club_2001_(USA).7z',
'../n64-host/n64-alt/NFL_Quarterback_Club_2000_(USA).7z',
'../n64-host/n64-alt/NFL_Quarterback_Club_98_(USA).7z',
'../n64-host/n64-alt/NFL_Quarterback_Club_99_(USA).7z',
'../n64-host/n64-alt/NHL_99_(USA).7z',
'../n64-host/n64-alt/NHL_Blades_of_Steel_99_(USA).7z',
'../n64-host/n64-alt/NHL_Breakaway_98_(USA).7z',
'../n64-host/n64-alt/NHL_Breakaway_99_(USA).7z',
'../n64-host/n64-alt/Nightmare_Creatures_(USA).7z',
'../n64-host/n64-alt/Nuclear_Strike_64_(USA).7z',
'../n64-host/n64-alt/Off_Road_Challenge_(USA).7z',
'../n64-host/n64-alt/Ogre_Battle_64_-_Person_of_Lordly_Caliber_(USA).7z',
'../n64-host/n64-alt/Olympic_Hockey_98_(USA).7z',
'../n64-host/n64-alt/Paperboy_(USA).7z',
'../n64-host/n64-alt/Paper_Mario_(USA).7z',
'../n64-host/n64-alt/Penny_Racers_(USA).7z',
'../n64-host/n64-alt/Perfect_Dark_(USA).7z',
'../n64-host/n64-alt/Perfect_Dark_(USA)_(2000-03-22)_(Debug).7z',
'../n64-host/n64-alt/PGA_European_Tour_(USA).7z',
'../n64-host/n64-alt/Pilotwings_64_(USA).7z',
'../n64-host/n64-alt/Pokemon_Puzzle_League_(USA).7z',
'../n64-host/n64-alt/Pokemon_Puzzle_League_(USA)_(Wii_Virtual_Console).7z',
'../n64-host/n64-alt/Pokemon_Snap_(USA).7z',
'../n64-host/n64-alt/Pokemon_Stadium_(USA).7z',
'../n64-host/n64-alt/Pokemon_Stadium_2_(USA).7z',
'../n64-host/n64-alt/Polaris_SnoCross_(USA).7z',
'../n64-host/n64-alt/Powerpuff_Girls_The_-_Chemical_X-Traction_(USA).7z',
'../n64-host/n64-alt/Power_Rangers_-_Lightspeed_Rescue_(USA).7z',
'../n64-host/n64-alt/Quake_(USA).7z',
'../n64-host/n64-alt/Quake_II_(USA).7z',
'../n64-host/n64-alt/Quest_64_(USA).7z',
'../n64-host/n64-alt/Rally_Challenge_2000_(USA).7z',
'../n64-host/n64-alt/Rampage_-_World_Tour_(USA).7z',
'../n64-host/n64-alt/Rampage_2_-_Universal_Tour_(USA).7z',
'../n64-host/n64-alt/Rat_Attack!_(USA)_(EnFrDeEsItNl).7z',
'../n64-host/n64-alt/Rayman_2_-_The_Great_Escape_(USA)_(EnFrDeEsIt).7z',
'../n64-host/n64-alt/Razor_Freestyle_Scooter_(USA).7z',
'../n64-host/n64-alt/Re-Volt_(USA).7z',
'../n64-host/n64-alt/Ready_2_Rumble_Boxing_(USA).7z',
'../n64-host/n64-alt/Ready_2_Rumble_Boxing_-_Round_2_(USA).7z',
'../n64-host/n64-alt/Resident_Evil_2_(USA).7z',
'../n64-host/n64-alt/Roadsters_(USA)_(EnFrEs).7z',
'../n64-host/n64-alt/Road_Rash_64_(USA).7z',
'../n64-host/n64-alt/Robotron_64_(USA).7z',
'../n64-host/n64-alt/Rocket_-_Robot_on_Wheels_(USA).7z',
'../n64-host/n64-alt/RR64_-_Ridge_Racer_64_(USA).7z',
'../n64-host/n64-alt/Rugrats_-_Scavenger_Hunt_(USA).7z',
'../n64-host/n64-alt/Rugrats_in_Paris_-_The_Movie_(USA).7z',
'../n64-host/n64-alt/Rush_2_-_Extreme_Racing_USA_(Europe)_(EnFrDeEsItNl).7z',
'../n64-host/n64-alt/Rush_2_-_Extreme_Racing_USA_(USA).7z',
'../n64-host/n64-alt/S.C.A.R.S._(USA).7z',
'../n64-host/n64-alt/San_Francisco_Rush_-_Extreme_Racing_(USA)_(EnFrDe).7z',
'../n64-host/n64-alt/San_Francisco_Rush_2049_(USA).7z',
'../n64-host/n64-alt/Scooby-Doo!_-_Classic_Creep_Capers_(USA).7z',
'../n64-host/n64-alt/Sesame_Street_-_Elmos_Letter_Adventure_(USA).7z',
'../n64-host/n64-alt/Sesame_Street_-_Elmos_Number_Journey_(USA).7z',
'../n64-host/n64-alt/Shadowgate_64_-_Trials_of_the_Four_Towers_(USA)_(EnEs).7z',
'../n64-host/n64-alt/Shadow_Man_(USA).7z',
'../n64-host/n64-alt/Snowboard_Kids_(USA).7z',
'../n64-host/n64-alt/Snowboard_Kids_2_(USA).7z',
'../n64-host/n64-alt/South_Park_(USA).7z',
'../n64-host/n64-alt/South_Park_-_Chefs_Luv_Shack_(USA).7z',
'../n64-host/n64-alt/South_Park_Rally_(USA).7z',
'../n64-host/n64-alt/SpaceStation_Silicon_Valley_(USA).7z',
'../n64-host/n64-alt/Space_Invaders_(USA).7z',
'../n64-host/n64-alt/Spider-Man_(USA).7z',
'../n64-host/n64-alt/StarCraft_64_(USA).7z',
'../n64-host/n64-alt/Starshot_-_Space_Circus_Fever_(USA)_(EnFrEs).7z',
'../n64-host/n64-alt/Star_Fox_64_(USA).7z',
'../n64-host/n64-alt/Star_Soldier_-_Vanishing_Earth_(USA).7z',
'../n64-host/n64-alt/Star_Wars_-_Rogue_Squadron_(USA).7z',
'../n64-host/n64-alt/Star_Wars_-_Shadows_of_the_Empire_(USA).7z',
'../n64-host/n64-alt/Star_Wars_-_Shadows_of_the_Empire_(USA)_(Aftermarket)_(Unl).7z',
'../n64-host/n64-alt/Star_Wars_Episode_I_-_Battle_for_Naboo_(USA).7z',
'../n64-host/n64-alt/Star_Wars_Episode_I_-_Racer_(USA).7z',
'../n64-host/n64-alt/Star_Wars_Episode_I_-_Racer_(USA)_(Aftermarket)_(Unl).7z',
'../n64-host/n64-alt/Stunt_Racer_64_(USA).7z',
'../n64-host/n64-alt/Supercross_2000_(USA).7z',
'../n64-host/n64-alt/Superman_-_The_New_Superman_Aventures_(USA)_(EnFrEs).7z',
'../n64-host/n64-alt/Super_Bowling_(USA).7z',
'../n64-host/n64-alt/Super_Mario_64_(USA).7z',
'../n64-host/n64-alt/Super_Smash_Bros._(USA).7z',
'../n64-host/n64-alt/Tarzan_(USA).7z',
'../n64-host/n64-alt/Tetrisphere_(USA).7z',
'../n64-host/n64-alt/Tiggers_Honey_Hunt_(USA).7z',
'../n64-host/n64-alt/Tom_and_Jerry_in_Fists_of_Furry_(USA).7z',
'../n64-host/n64-alt/Tom_Clancys_Rainbow_Six_(USA).7z',
'../n64-host/n64-alt/Tony_Hawks_Pro_Skater_(USA).7z',
'../n64-host/n64-alt/Tony_Hawks_Pro_Skater_2_(USA).7z',
'../n64-host/n64-alt/Tony_Hawks_Pro_Skater_3_(USA).7z',
'../n64-host/n64-alt/Top_Gear_Hyper-Bike_(USA).7z',
'../n64-host/n64-alt/Top_Gear_Overdrive_(USA).7z',
'../n64-host/n64-alt/Top_Gear_Rally_(USA).7z',
'../n64-host/n64-alt/Top_Gear_Rally_2_(USA).7z',
'../n64-host/n64-alt/Toy_Story_2_-_Buzz_Lightyear_to_the_Rescue!_(USA).7z',
'../n64-host/n64-alt/Transformers_-_Beast_Wars_Transmetals_(USA).7z',
'../n64-host/n64-alt/Triple_Play_2000_(USA).7z',
'../n64-host/n64-alt/Turok_-_Dinosaur_Hunter_(USA).7z',
'../n64-host/n64-alt/Turok_-_Rage_Wars_(USA).7z',
'../n64-host/n64-alt/Turok_2_-_Seeds_of_Evil_(USA).7z',
'../n64-host/n64-alt/Turok_3_-_Shadow_of_Oblivion_(USA).7z',
'../n64-host/n64-alt/Twisted_Edge_-_Extreme_Snowboarding_(USA).7z',
'../n64-host/n64-alt/V-Rally_Edition_99_(USA).7z',
'../n64-host/n64-alt/Vigilante_8_(USA).7z',
'../n64-host/n64-alt/Vigilante_8_-_2nd_Offense_(USA).7z',
'../n64-host/n64-alt/Virtual_Chess_64_(USA)_(EnFrEs).7z',
'../n64-host/n64-alt/Virtual_Pool_64_(USA).7z',
'../n64-host/n64-alt/Waialae_Country_Club_-_True_Golf_Classics_(USA).7z',
'../n64-host/n64-alt/War_Gods_(USA).7z',
'../n64-host/n64-alt/Wave_Race_64_-_Kawasaki_Jet_Ski_(USA).7z',
'../n64-host/n64-alt/Wayne_Gretzkys_3D_Hockey_(USA).7z',
'../n64-host/n64-alt/Wayne_Gretzkys_3D_Hockey_98_(USA).7z',
'../n64-host/n64-alt/WCW_Backstage_Assault_(USA).7z',
'../n64-host/n64-alt/WCW_Mayhem_(USA).7z',
'../n64-host/n64-alt/WCW_Nitro_(USA).7z',
'../n64-host/n64-alt/WCW_vs._nWo_-_World_Tour_(USA).7z',
'../n64-host/n64-alt/Wetrix_(USA)_(EnFrDeEsItNl).7z',
'../n64-host/n64-alt/Wheel_of_Fortune_(USA).7z',
'../n64-host/n64-alt/WinBack_-_Covert_Operations_(USA).7z',
'../n64-host/n64-alt/Wipeout_64_(USA).7z',
'../n64-host/n64-alt/World_Cup_98_(USA)_(EnFrDeEsItNlSvDa).7z',
'../n64-host/n64-alt/World_Driver_Championship_(USA).7z',
'../n64-host/n64-alt/Worms_Armageddon_(USA)_(EnFrEs).7z',
'../n64-host/n64-alt/WWF_Attitude_(USA).7z',
'../n64-host/n64-alt/WWF_No_Mercy_(USA).7z',
'../n64-host/n64-alt/WWF_War_Zone_(USA).7z',
'../n64-host/n64-alt/WWF_WrestleMania_2000_(USA).7z',
'../n64-host/n64-alt/Xena_-_Warrior_Princess_-_The_Talisman_of_Fate_(USA).7z',
'../n64-host/n64-alt/Yoshis_Story_(USA)_(EnJa).7z',
'../n64-host/n64-alt/smashremix1.2.2.z64.7z',




]

function returnLast(arr) {
    return arr.at(gameTypeID - 3501);
  }
const getGameNameFromAr = returnLast(gameNameTypeID);

gameName = getGameNameFromAr;
}
