savedGameTypeID = localStorage.getItem("gameTypeID");
gameTypeID = JSON.parse(savedGameTypeID);



function setNesGameName() {
const gameNameTypeID = 
['../gba-host/nes-alt/1943_-_The_Battle_of_Midway.nes.zip',
'../gba-host/nes-alt/1999_-_Hore,_Mitakotoka!_Seikimatsu_(Japan).nes.zip',
'../gba-host/nes-alt/A_Boy_and_His_Blob.nes.zip',
'../gba-host/nes-alt/A_Ressha_de_Ikou_(Japan).nes.zip',
'../gba-host/nes-alt/Aa_Yakyuu_Jinsei_Icchokusen_(Japan).nes.zip',
'../gba-host/nes-alt/Abadox.nes.zip',
'../gba-host/nes-alt/Aces_-_Iron_Eagle_3.nes.zip',
'../gba-host/nes-alt/Action_52.nes.zip',
'../gba-host/nes-alt/Action_in_New_York.nes.zip',
'../gba-host/nes-alt/AD&D_Dragon_Strike.nes.zip',
'../gba-host/nes-alt/AD&D_Heroes_of_the_Lance.nes.zip',
'../gba-host/nes-alt/AD&D_Hillsfar.nes.zip',
'../gba-host/nes-alt/Addams_Family_-_Pugsleys_Scavenger_Hunt.nes.zip',
'../gba-host/nes-alt/Advanced_Dungeons_&_Dragons_-_Dragon_Strike.nes.zip',
'../gba-host/nes-alt/Advanced_Dungeons_&_Dragons_-_Heroes_of_the_Lance.nes.zip',
'../gba-host/nes-alt/Advanced_Dungeons_&_Dragons_-_Pool_of_Radiance.nes.zip',
'../gba-host/nes-alt/Adventure_Island_II.nes.zip',
'../gba-host/nes-alt/Adventure_Island_III.nes.zip',
'../gba-host/nes-alt/Adventure_Island.nes.zip',
'../gba-host/nes-alt/Adventures_in_the_Magic_Kingdom.nes.zip',
'../gba-host/nes-alt/Adventures_of_Bayou_Billy.nes.zip',
'../gba-host/nes-alt/Adventures_of_Captain_Comic.nes.zip',
'../gba-host/nes-alt/Adventures_of_Dino_Riki.nes.zip',
'../gba-host/nes-alt/Adventures_of_Lolo_2.nes.zip',
'../gba-host/nes-alt/Adventures_of_Lolo_3.nes.zip',
'../gba-host/nes-alt/Adventures_of_Lolo.nes.zip',
'../gba-host/nes-alt/Adventures_of_Rad_Gravity.nes.zip',
'../gba-host/nes-alt/Adventures_of_Rocky_and_Bullwinkle_and_Friends.nes.zip',
'../gba-host/nes-alt/Adventures_of_Tom_Sawyer.nes.zip',
'../gba-host/nes-alt/Afterburner_II.nes.zip',
'../gba-host/nes-alt/Afterburner.nes.zip',
'../gba-host/nes-alt/Ai_Sensei_no_Oshiete_-_Watashi_no_Hoshi_(Japan).nes.zip',
'../gba-host/nes-alt/Aigiina_no_Yogen_-_From_The_Legend_of_Balubalouk.nes.zip',
'../gba-host/nes-alt/Akumajou_Densetsu.nes.zip',
'../gba-host/nes-alt/Akumajou_Dracula.nes.zip',
'../gba-host/nes-alt/Al_Unser_Jr._Turbo_Racing.nes.zip',
'../gba-host/nes-alt/Aladdin_2.nes.zip',
'../gba-host/nes-alt/Aladdin_3.nes.zip',
'../gba-host/nes-alt/Aladdin.nes.zip',
'../gba-host/nes-alt/Alfred_Chicken.nes.zip',
'../gba-host/nes-alt/Alien_3.nes.zip',
'../gba-host/nes-alt/Alien_Syndrome.nes.zip',
'../gba-host/nes-alt/All-Pro_Basketball.nes.zip',
'../gba-host/nes-alt/All-Star_Softball.nes.zip',
'../gba-host/nes-alt/Alpha_Mission.nes.zip',
'../gba-host/nes-alt/Amagon.nes.zip',
'../gba-host/nes-alt/America_Daitouryou_Senkyo_(Japan).nes.zip',
'../gba-host/nes-alt/America_Oudan_Ultra_Quiz_-_Shijou_Saidai_no_Tatakai_(Japan).nes.zip',
'../gba-host/nes-alt/American_Dream_(Japan).nes.zip',
'../gba-host/nes-alt/American_Gladiators.nes.zip',
'../gba-host/nes-alt/Ankoku_Shinwa_-_Yamato_Takeru_Densetsu_(Japan).nes.zip',
'../gba-host/nes-alt/Antarctic_Adventures.nes.zip',
'../gba-host/nes-alt/Anticipation.nes.zip',
'../gba-host/nes-alt/Aoki_Ookami_to_Shiroki_Mejika_-_Genchou_Hishi_(Japan).nes.zip',
'../gba-host/nes-alt/Arabian_Dream_Sherazaado.nes.zip',
'../gba-host/nes-alt/Arch_Rivals.nes.zip',
'../gba-host/nes-alt/Archon.nes.zip',
'../gba-host/nes-alt/Arctic.nes.zip',
'../gba-host/nes-alt/Argos_no_Senshi_(Japan).nes.zip',
'../gba-host/nes-alt/Argus.nes.zip',
'../gba-host/nes-alt/Arkanoid_2.nes.zip',
'../gba-host/nes-alt/Arkanoid.nes.zip',
'../gba-host/nes-alt/Arkistas_Ring.nes.zip',
'../gba-host/nes-alt/Armadillo.nes.zip',
'../gba-host/nes-alt/Artelius.nes.zip',
'../gba-host/nes-alt/ASO_-_Armored_Scrum_Object.nes.zip',
'../gba-host/nes-alt/Asterix.nes.zip',
'../gba-host/nes-alt/Astro_Fang_-_Super_Machine.nes.zip',
'../gba-host/nes-alt/Astro_Robo_Sasa.nes.zip',
'../gba-host/nes-alt/Astro_Robo.nes.zip',
'../gba-host/nes-alt/Astyanax.nes.zip',
'../gba-host/nes-alt/Athena.nes.zip',
'../gba-host/nes-alt/Athletic_World.nes.zip',
'../gba-host/nes-alt/Atlantis_no_Nazo.nes.zip',
'../gba-host/nes-alt/Attack_Animal_Gakuen_(Japan).nes.zip',
'../gba-host/nes-alt/Attack_of_the_Killer_Tomatoes.nes.zip',
'../gba-host/nes-alt/Aussie_Rules_Footy.nes.zip',
'../gba-host/nes-alt/Babel_no_Tou.nes.zip',
'../gba-host/nes-alt/Baby_Boomer_-_Copy.nes.zip',
'../gba-host/nes-alt/Baby_Boomer.nes.zip',
'../gba-host/nes-alt/Back_to_the_Future_2_&_3.nes.zip',
'../gba-host/nes-alt/Back_to_the_Future.nes.zip',
'../gba-host/nes-alt/Bad_Dudes_vs._Dragon_Ninja.nes.zip',
'../gba-host/nes-alt/Bad_Dudes.nes.zip',
'../gba-host/nes-alt/Bad_News_Baseball.nes.zip',
'../gba-host/nes-alt/Bad_Street_Brawler.nes.zip',
'../gba-host/nes-alt/Baken_Hisshou_Gaku_-_Gate_In_(Japan).nes.zip',
'../gba-host/nes-alt/Bakushou!_Star_Monomane_Shitennou_(Japan).nes.zip',
'../gba-host/nes-alt/Ballblazer.nes.zip',
'../gba-host/nes-alt/Balloon_Fight.nes.zip',
'../gba-host/nes-alt/Baltron.nes.zip',
'../gba-host/nes-alt/Banana.nes.zip',
'../gba-host/nes-alt/Bandai_Golf_-_Challenge_Pebble_Beach.nes.zip',
'../gba-host/nes-alt/Bandit_Kings_of_Ancient_China.nes.zip',
'../gba-host/nes-alt/Barbie.nes.zip',
'../gba-host/nes-alt/Barcode_World.nes.zip',
'../gba-host/nes-alt/Bards_Tale_II_-_The_Destiny_Knight.nes.zip',
'../gba-host/nes-alt/Bards_Tale.nes.zip',
'../gba-host/nes-alt/Barker_Bills_Trick_Shooting.nes.zip',
'../gba-host/nes-alt/Base_Wars.nes.zip',
'../gba-host/nes-alt/Baseball_Fighter.nes.zip',
'../gba-host/nes-alt/Baseball_Simulator_1000.nes.zip',
'../gba-host/nes-alt/Baseball_Star_-_Mezase_Sankanou!!_(Japan).nes.zip',
'../gba-host/nes-alt/Baseball_Stars_2.nes.zip',
'../gba-host/nes-alt/Baseball_Stars.nes.zip',
'../gba-host/nes-alt/Baseball.nes.zip',
'../gba-host/nes-alt/Bases_Loaded_2.nes.zip',
'../gba-host/nes-alt/Bases_Loaded_3.nes.zip',
'../gba-host/nes-alt/Bases_Loaded_4.nes.zip',
'../gba-host/nes-alt/Bases_Loaded.nes.zip',
'../gba-host/nes-alt/Batman_-_Return_of_the_Joker.nes.zip',
'../gba-host/nes-alt/Batman_3.nes.zip',
'../gba-host/nes-alt/Batman_Returns.nes.zip',
'../gba-host/nes-alt/Batman.nes.zip',
'../gba-host/nes-alt/Batsu_&_Terii_(Japan).nes.zip',
'../gba-host/nes-alt/Battle_Baseball.nes.zip',
'../gba-host/nes-alt/Battle_Chess.nes.zip',
'../gba-host/nes-alt/Battle_City.nes.zip',
'../gba-host/nes-alt/Battle_Fleet.nes.zip',
'../gba-host/nes-alt/Battle_Formula.nes.zip',
'../gba-host/nes-alt/Battle_of_Olympus.nes.zip',
'../gba-host/nes-alt/Battle_Stadium_-_Senbatsu_Pro_Yakyuu_(Japan).nes.zip',
'../gba-host/nes-alt/Battle_Storm.nes.zip',
'../gba-host/nes-alt/Battle_Tank.nes.zip',
'../gba-host/nes-alt/Battleship.nes.zip',
'../gba-host/nes-alt/Battletoads_Double_Dragon.nes.zip',
'../gba-host/nes-alt/Battletoads.nes.zip',
'../gba-host/nes-alt/Bayou_Billy.nes.zip',
'../gba-host/nes-alt/Beauty_and_the_Beast.nes.zip',
'../gba-host/nes-alt/Be-Bop-Highschool_-_Koukousei_Gokuraku_Densetsu_(Japan).nes.zip',
'../gba-host/nes-alt/Bee_52.nes.zip',
'../gba-host/nes-alt/Beetlejuice.nes.zip',
'../gba-host/nes-alt/Best_Keiba_-_Derby_Stallion_(Japan).nes.zip',
'../gba-host/nes-alt/Best_of_the_Best_-_Championship_Karate.nes.zip',
'../gba-host/nes-alt/Best_Play_Pro_Yakyuu_90_(Japan).nes.zip',
'../gba-host/nes-alt/Best_Play_Pro_Yakyuu_Special_(Japan).nes.zip',
'../gba-host/nes-alt/Bible_Adventures.nes.zip',
'../gba-host/nes-alt/Bible_Buffet.nes.zip',
'../gba-host/nes-alt/Big_Birds_Hide_&_Speak.nes.zip',
'../gba-host/nes-alt/Big_Nose_Freaks_Out.nes.zip',
'../gba-host/nes-alt/Big_Nose_the_Caveman.nes.zip',
'../gba-host/nes-alt/Bigfoot.nes.zip',
'../gba-host/nes-alt/Bikkuri_Nekketsu_Shin_Kiroku!_-_Harukanaru_Kin_Medal_(Japan).nes.zip',
'../gba-host/nes-alt/Bikkuriman_World_-_Gekitou_Sei_Senshi_(Japan).nes.zip',
'../gba-host/nes-alt/Bill_&_Teds_Excellent_Video_Game_Adventure.nes.zip',
'../gba-host/nes-alt/Binary_Land.nes.zip',
'../gba-host/nes-alt/Bio_Miracle_Bokutte_Upa_(Japan).nes.zip',
'../gba-host/nes-alt/Bionic_Commando.nes.zip',
'../gba-host/nes-alt/Bird_Week.nes.zip',
'../gba-host/nes-alt/Black_Bass_2.nes.zip',
'../gba-host/nes-alt/Black_Bass.nes.zip',
'../gba-host/nes-alt/Blackjack.nes.zip',
'../gba-host/nes-alt/Blades_of_Steel.nes.zip',
'../gba-host/nes-alt/Blaster_Master.nes.zip',
'../gba-host/nes-alt/Blodia_Land_-_Puzzle_Quest.nes.zip',
'../gba-host/nes-alt/Bloody_Warriors_-_Shan-Go_no_Gyakushuu_(Japan).nes.zip',
'../gba-host/nes-alt/Blue_Marlin.nes.zip',
'../gba-host/nes-alt/Blue_Shadow.nes.zip',
'../gba-host/nes-alt/Blues_Brothers.nes.zip',
'../gba-host/nes-alt/Bo_Jackson_Baseball.nes.zip',
'../gba-host/nes-alt/Bokosuka_Wars.nes.zip',
'../gba-host/nes-alt/Bomberman_2.nes.zip',
'../gba-host/nes-alt/Bomberman_Collection.nes.zip',
'../gba-host/nes-alt/Bomberman.nes.zip',
'../gba-host/nes-alt/Bonks_Adventure.nes.zip',
'../gba-host/nes-alt/Booby_Kids.nes.zip',
'../gba-host/nes-alt/Boulder_Dash.nes.zip',
'../gba-host/nes-alt/Boy_and_His_Blob,_A_-_Trouble_on_Blobolonia.nes.zip',
'../gba-host/nes-alt/Bram_Stokers_Dracula.nes.zip',
'../gba-host/nes-alt/Break_Time_-_The_National_Pool_Tour.nes.zip',
'../gba-host/nes-alt/BreakThru.nes.zip',
'../gba-host/nes-alt/Bubble_Bobble_2.nes.zip',
'../gba-host/nes-alt/Bubble_Bobble.nes.zip',
'../gba-host/nes-alt/Bucky_OHare.nes.zip',
'../gba-host/nes-alt/Buggy_Popper.nes.zip',
'../gba-host/nes-alt/Bugs_Bunny_Birthday_Blowout.nes.zip',
'../gba-host/nes-alt/Bugs_Bunny_Crazy_Castle.nes.zip',
'../gba-host/nes-alt/BumpnJump.nes.zip',
'../gba-host/nes-alt/Burai_Fighter.nes.zip',
'../gba-host/nes-alt/Burger_Time.nes.zip',
'../gba-host/nes-alt/Business_Wars_(Japan).nes.zip',
'../gba-host/nes-alt/B-Wings.nes.zip',
'../gba-host/nes-alt/Cabal.nes.zip',
'../gba-host/nes-alt/Cadillac.nes.zip',
'../gba-host/nes-alt/Caesars_Palace.nes.zip',
'../gba-host/nes-alt/California_Games.nes.zip',
'../gba-host/nes-alt/California_Raisins_-_The_Grape_Escape.nes.zip',
'../gba-host/nes-alt/Caltron_6-in-1.nes.zip',
'../gba-host/nes-alt/Capcom_Barcelona_92.nes.zip',
'../gba-host/nes-alt/Captain_America_and_the_Avengers.nes.zip',
'../gba-host/nes-alt/Captain_Ed.nes.zip',
'../gba-host/nes-alt/Captain_Planet_and_The_Planeteers.nes.zip',
'../gba-host/nes-alt/Captain_Saver.nes.zip',
'../gba-host/nes-alt/Captain_Silver.nes.zip',
'../gba-host/nes-alt/Captain_Skyhawk.nes.zip',
'../gba-host/nes-alt/Captain_Tsubasa_(Japan).nes.zip',
'../gba-host/nes-alt/Captain_Tsubasa_Vol._II_-_Super_Striker_(Japan).nes.zip',
'../gba-host/nes-alt/Casino_Kid_2.nes.zip',
'../gba-host/nes-alt/Casino_Kid.nes.zip',
'../gba-host/nes-alt/Castelian.nes.zip',
'../gba-host/nes-alt/Castle_Excellent.nes.zip',
'../gba-host/nes-alt/Castle_of_Deceit.nes.zip',
'../gba-host/nes-alt/Castle_of_Dragon.nes.zip',
'../gba-host/nes-alt/Castlequest.nes.zip',
'../gba-host/nes-alt/Castlevania_2_-_Simons_Quest.nes.zip',
'../gba-host/nes-alt/Castlevania_3_-_Draculas_Curse.nes.zip',
'../gba-host/nes-alt/Castlevania.nes.zip',
'../gba-host/nes-alt/Caveman_Games.nes.zip',
'../gba-host/nes-alt/Chack_n_Pop.nes.zip',
'../gba-host/nes-alt/Challenge_of_the_Dragon.nes.zip',
'../gba-host/nes-alt/Challenger.nes.zip',
'../gba-host/nes-alt/Championship_Bowling.nes.zip',
'../gba-host/nes-alt/Championship_Lode_Runner.nes.zip',
'../gba-host/nes-alt/Championship_Pool.nes.zip',
'../gba-host/nes-alt/Chaos_World.nes.zip',
'../gba-host/nes-alt/Cheetah_Men_II.nes.zip',
'../gba-host/nes-alt/Chessmaster.nes.zip',
'../gba-host/nes-alt/Chester_Field_-_Ankoku_Shin_heno_Chousen_(Japan).nes.zip',
'../gba-host/nes-alt/Chiisana_Obake_-_Acchi_Socchi_Kocchi.nes.zip',
'../gba-host/nes-alt/Chiki_Chiki_Machine_Mou_Race_(Japan).nes.zip',
'../gba-host/nes-alt/Chiller.nes.zip',
'../gba-host/nes-alt/Chip_n_Dale_Rescue_Rangers_2.nes.zip',
'../gba-host/nes-alt/Chip_n_Dale_Rescue_Rangers.nes.zip',
'../gba-host/nes-alt/Chitei_Senkuu_Vazorudaa.nes.zip',
'../gba-host/nes-alt/Choplifter.nes.zip',
'../gba-host/nes-alt/Choujikuu_Yousai_-_Macross.nes.zip',
'../gba-host/nes-alt/Choujin_-_Ultra_Baseball_(Japan).nes.zip',
'../gba-host/nes-alt/Choujin_Sentai_-_Jetman.nes.zip',
'../gba-host/nes-alt/Chubby_Cherub.nes.zip',
'../gba-host/nes-alt/Chuugoku_Janshi_Story_-_Tonpuu_(Japan).nes.zip',
'../gba-host/nes-alt/Chuugoku_Senseijutsu_(Japan).nes.zip',
'../gba-host/nes-alt/Circus_Caper.nes.zip',
'../gba-host/nes-alt/Circus_Charlie.nes.zip',
'../gba-host/nes-alt/City_Adventure_Touch_-_Mystery_of_Triangle_(Japan).nes.zip',
'../gba-host/nes-alt/City_Connection.nes.zip',
'../gba-host/nes-alt/Clash_at_Demonhead.nes.zip',
'../gba-host/nes-alt/Classic_Concentration.nes.zip',
'../gba-host/nes-alt/Cliffhanger.nes.zip',
'../gba-host/nes-alt/Clu_Clu_Land.nes.zip',
'../gba-host/nes-alt/Cobra_Command.nes.zip',
'../gba-host/nes-alt/Cobra_Triangle.nes.zip',
'../gba-host/nes-alt/Cocoron.nes.zip',
'../gba-host/nes-alt/Code_Name_-_Viper.nes.zip',
'../gba-host/nes-alt/Color_A_Dinosaur.nes.zip',
'../gba-host/nes-alt/Columbus_-_Ougon_no_Yoake_(Japan).nes.zip',
'../gba-host/nes-alt/Commando.nes.zip',
'../gba-host/nes-alt/Conan.nes.zip',
'../gba-host/nes-alt/Conflict.nes.zip',
'../gba-host/nes-alt/Conquest_of_the_Crystal_Palace.nes.zip',
'../gba-host/nes-alt/Contra_Force.nes.zip',
'../gba-host/nes-alt/Contra.nes.zip',
'../gba-host/nes-alt/Cool_World.nes.zip',
'../gba-host/nes-alt/Corvette_ZR-1_Challenge.nes.zip',
'../gba-host/nes-alt/Cosmic_Epsilon.nes.zip',
'../gba-host/nes-alt/Cosmic_Wars_(Japan).nes.zip',
'../gba-host/nes-alt/Cosmo_Genesis.nes.zip',
'../gba-host/nes-alt/Cosmo_Police_Galivan.nes.zip',
'../gba-host/nes-alt/Cowboy_Kid.nes.zip',
'../gba-host/nes-alt/Crackout.nes.zip',
'../gba-host/nes-alt/Crash_n_the_Boys_-_Street_Challenge.nes.zip',
'../gba-host/nes-alt/Crazy_Climber.nes.zip',
'../gba-host/nes-alt/Crisis_Force.nes.zip',
'../gba-host/nes-alt/Cross_Fire.nes.zip',
'../gba-host/nes-alt/Crystal_Mines.nes.zip',
'../gba-host/nes-alt/Crystalis.nes.zip',
'../gba-host/nes-alt/Cyberball.nes.zip',
'../gba-host/nes-alt/Cybernoid_-_The_Fighting_Machine.nes.zip',
'../gba-host/nes-alt/Cycle_Race_-_Road_Man.nes.zip',
'../gba-host/nes-alt/Dai_Meiro_-_Meikyuu_no_Tatsujin_(Japan).nes.zip',
'../gba-host/nes-alt/Daiku_no_Gen_San_(Japan).nes.zip',
'../gba-host/nes-alt/Daiku_no_Gen_San_2_-_Akage_no_Dan_no_Gyakushuu_(Japan).nes.zip',
'../gba-host/nes-alt/Daiva_-_Imperial_of_Nirsartia.nes.zip',
'../gba-host/nes-alt/Danny_Sullivans_Indy_Heat.nes.zip',
'../gba-host/nes-alt/Darkman.nes.zip',
'../gba-host/nes-alt/Darkwing_Duck.nes.zip',
'../gba-host/nes-alt/Dash_Galaxy_in_the_Alien_Asylum.nes.zip',
'../gba-host/nes-alt/Dash_Yarou.nes.zip',
'../gba-host/nes-alt/Datach_-_Battle_Rush_-_Build_Up_Robot_Tournament_(Japan).nes.zip',
'../gba-host/nes-alt/Datach_-_Crayon_Shin_Chan_-_Ora_to_Poi_Poi_(Japan).nes.zip',
'../gba-host/nes-alt/Datach_-_Dragon_Ball_Z_-_Gekitou_Tenkaichi_Budou_Kai_(Japan).nes.zip',
'../gba-host/nes-alt/Datach_-_J_League_Super_Top_Players.nes.zip',
'../gba-host/nes-alt/Datach_-_SD_Gundam_-_Gundam_Wars_(Japan).nes.zip',
'../gba-host/nes-alt/Datach_-_Ultraman_Club_-_Supokon_Fight!_(Japan).nes.zip',
'../gba-host/nes-alt/Datach_-_Yuu_Yuu_Hakusho_-_Bakutou_Ankoku_Bujutsu_Kai_(Japan).nes.zip',
'../gba-host/nes-alt/Datsugoku.nes.zip',
'../gba-host/nes-alt/Day_Dreamin_Davey.nes.zip',
'../gba-host/nes-alt/Days_of_Thunder.nes.zip',
'../gba-host/nes-alt/Deadly_Towers.nes.zip',
'../gba-host/nes-alt/Death_Race.nes.zip',
'../gba-host/nes-alt/Deathbots.nes.zip',
'../gba-host/nes-alt/Deblock.nes.zip',
'../gba-host/nes-alt/Deep_Dungeon_3_-_Yuushi_heno_Tabi_(Japan).nes.zip',
'../gba-host/nes-alt/Deep_Dungeon_4_-_Kuro_no_Youjutsushi_(Japan).nes.zip',
'../gba-host/nes-alt/Defender_II.nes.zip',
'../gba-host/nes-alt/Defender_of_the_Crown.nes.zip',
'../gba-host/nes-alt/Defenders_of_Dynatron_City.nes.zip',
'../gba-host/nes-alt/Deja_Vu.nes.zip',
'../gba-host/nes-alt/Demon_Sword.nes.zip',
'../gba-host/nes-alt/Dengeki_-_Big_Bang!_(Japan).nes.zip',
'../gba-host/nes-alt/Densetsu_no_Kishi_-_Elrond.nes.zip',
'../gba-host/nes-alt/Desert_Commander.nes.zip',
'../gba-host/nes-alt/Destination_Earthstar.nes.zip',
'../gba-host/nes-alt/Destiny_of_an_Emperor.nes.zip',
'../gba-host/nes-alt/Devil_Man.nes.zip',
'../gba-host/nes-alt/Devil_World.nes.zip',
'../gba-host/nes-alt/Dezaemon_(Japan).nes.zip',
'../gba-host/nes-alt/Dick_Tracy.nes.zip',
'../gba-host/nes-alt/Die_Hard.nes.zip',
'../gba-host/nes-alt/Digger_-_The_Legend_of_the_Lost_City.nes.zip',
'../gba-host/nes-alt/Dirty_Harry.nes.zip',
'../gba-host/nes-alt/Dizzy_The_Adventurer.nes.zip',
'../gba-host/nes-alt/Dokuganryuu_Masamune_(Japan).nes.zip',
'../gba-host/nes-alt/Don_Doko_Don_2.nes.zip',
'../gba-host/nes-alt/Don_Doko_Don.nes.zip',
'../gba-host/nes-alt/Donald_Duck.nes.zip',
'../gba-host/nes-alt/Donald_Land.nes.zip',
'../gba-host/nes-alt/Donkey_Kong_3.nes.zip',
'../gba-host/nes-alt/Donkey_Kong_Classics.nes.zip',
'../gba-host/nes-alt/Donkey_Kong_Jr._+_Jr._Lesson.nes.zip',
'../gba-host/nes-alt/Donkey_Kong_Jr._Math.nes.zip',
'../gba-host/nes-alt/Donkey_Kong_Jr._no_Sansuu_Asobi_(Japan).nes.zip',
'../gba-host/nes-alt/Donkey_Kong_Jr..nes.zip',
'../gba-host/nes-alt/Donkey_Kong.nes.zip',
'../gba-host/nes-alt/Door_Door.nes.zip',
'../gba-host/nes-alt/Double_Dare.nes.zip',
'../gba-host/nes-alt/Double_Dragon_2_-_The_Revenge.nes.zip',
'../gba-host/nes-alt/Double_Dragon_3_-_The_Sacred_Stones.nes.zip',
'../gba-host/nes-alt/Double_Dragon.nes.zip',
'../gba-host/nes-alt/Double_Dribble.nes.zip',
'../gba-host/nes-alt/Double_Moon_Densetsu_(Japan).nes.zip',
'../gba-host/nes-alt/Double_Strike.nes.zip',
'../gba-host/nes-alt/Dough_Boy.nes.zip',
'../gba-host/nes-alt/Downtown_-_Nekketsu_Koushin_Kyoku_-_Soreyuke_Daiundoukai_(Japan).nes.zip',
'../gba-host/nes-alt/Downtown_-_Nekketsu_Monogatari_(Japan).nes.zip',
'../gba-host/nes-alt/Downtown_Special_-_Kunio-kun_no_Jidaigeki_Dayo_Zenin_Shuugou!_(Japan).nes.zip',
'../gba-host/nes-alt/Dr._Chaos.nes.zip',
'../gba-host/nes-alt/Dr._Jekyll_and_Mr._Hyde.nes.zip',
'../gba-host/nes-alt/Dr._Mario.nes.zip',
'../gba-host/nes-alt/Dragon_Ball_-_Dai_Maou_Fukkatsu_(Japan).nes.zip',
'../gba-host/nes-alt/Dragon_Ball_-_Shen_Long_no_Nazo.nes.zip',
'../gba-host/nes-alt/Dragon_Ball_3_-_Gokuu_Den_(Japan).nes.zip',
'../gba-host/nes-alt/Dragon_Ball_Z_-_Kyoushuu!_Saiya_Jin_(Japan).nes.zip',
'../gba-host/nes-alt/Dragon_Ball_Z_Gaiden_-_Saiya_Jin_Zetsumetsu_Keikaku_(Japan).nes.zip',
'../gba-host/nes-alt/Dragon_Ball_Z_II_-_Gekishin_Freeza!!_(Japan).nes.zip',
'../gba-host/nes-alt/Dragon_Ball_Z_III_-_Ressen_Jinzou_Ningen_(Japan).nes.zip',
'../gba-host/nes-alt/Dragon_Buster_II_-_Yami_no_Fuuin.nes.zip',
'../gba-host/nes-alt/Dragon_Buster.nes.zip',
'../gba-host/nes-alt/Dragon_Fighter.nes.zip',
'../gba-host/nes-alt/Dragon_Ninja.nes.zip',
'../gba-host/nes-alt/Dragon_Power.nes.zip',
'../gba-host/nes-alt/Dragon_Quest_(Japan).nes.zip',
'../gba-host/nes-alt/Dragon_Quest_II.nes.zip',
'../gba-host/nes-alt/Dragon_Quest_III.nes.zip',
'../gba-host/nes-alt/Dragon_Quest_IV.nes.zip',
'../gba-host/nes-alt/Dragon_Scroll_-_Yomigaerishi_Maryuu_(Japan).nes.zip',
'../gba-host/nes-alt/Dragon_Spirit_-_The_New_Legend.nes.zip',
'../gba-host/nes-alt/Dragon_Unit.nes.zip',
'../gba-host/nes-alt/Dragon_Warrior_2.nes.zip',
'../gba-host/nes-alt/Dragon_Warrior_3.nes.zip',
'../gba-host/nes-alt/Dragon_Warrior_4.nes.zip',
'../gba-host/nes-alt/Dragon_Warrior.nes.zip',
'../gba-host/nes-alt/Dragon_Wars_(Japan).nes.zip',
'../gba-host/nes-alt/Dragons_Lair.nes.zip',
'../gba-host/nes-alt/Dream_Master.nes.zip',
'../gba-host/nes-alt/Drop_Zone.nes.zip',
'../gba-host/nes-alt/Duck_Hunt.nes.zip',
'../gba-host/nes-alt/Duck_Tales_2.nes.zip',
'../gba-host/nes-alt/Duck_Tales.nes.zip',
'../gba-host/nes-alt/DuckTales_2.nes.zip',
'../gba-host/nes-alt/DuckTales.nes.zip',
'../gba-host/nes-alt/Dudes_With_Attitude.nes.zip',
'../gba-host/nes-alt/Dungeon_Kid_(Japan).nes.zip',
'../gba-host/nes-alt/Dungeon_Magic_-_Sword_of_the_Elements.nes.zip',
'../gba-host/nes-alt/Dusty_Diamonds_All-Star_Softball.nes.zip',
'../gba-host/nes-alt/Dynablaster.nes.zip',
'../gba-host/nes-alt/Dynamite_Batman.nes.zip',
'../gba-host/nes-alt/Dynamite_Bowl.nes.zip',
'../gba-host/nes-alt/Dynowarz_-_Destruction_of_Spondylus.nes.zip',
'../gba-host/nes-alt/Egypt.nes.zip',
'../gba-host/nes-alt/Elevator_Action.nes.zip',
'../gba-host/nes-alt/Eliminator_Boat_Duel.nes.zip',
'../gba-host/nes-alt/Elite.nes.zip',
'../gba-host/nes-alt/Elysion_(Japan).nes.zip',
'../gba-host/nes-alt/Emo_Yan_no_10_Bai_Pro_Yakyuu_(Japan).nes.zip',
'../gba-host/nes-alt/Erika_to_Satoru_no_Yume_Bouken_(Japan).nes.zip',
'../gba-host/nes-alt/Erunaaku_no_Zaihou_(Japan).nes.zip',
'../gba-host/nes-alt/Esper_Bouken_Tai.nes.zip',
'../gba-host/nes-alt/Esper_Dream_2_-_Aratanaru_Tatakai_(Japan).nes.zip',
'../gba-host/nes-alt/Excitebike.nes.zip',
'../gba-host/nes-alt/Exciting_Boxing.nes.zip',
'../gba-host/nes-alt/Exciting_Rally_-_World_Rally_Championship.nes.zip',
'../gba-host/nes-alt/Exed_Exes.nes.zip',
'../gba-host/nes-alt/Exerion.nes.zip',
'../gba-host/nes-alt/Exodus.nes.zip',
'../gba-host/nes-alt/F1_Circus.nes.zip',
'../gba-host/nes-alt/F-1_Race.nes.zip',
'../gba-host/nes-alt/F-15_City_War.nes.zip',
'../gba-host/nes-alt/F-15_Strike_Eagle.nes.zip',
'../gba-host/nes-alt/F-117A_Stealth_Fighter.nes.zip',
'../gba-host/nes-alt/Famicom_Igo_Nyuumon_(Japan).nes.zip',
'../gba-host/nes-alt/Famicom_Jump_-_Eiyuu_Retsuden_(Japan).nes.zip',
'../gba-host/nes-alt/Famicom_Jump_II_-_Saikyou_no_7_Nin_(Japan).nes.zip',
'../gba-host/nes-alt/Famicom_Meijin_Sen_(Japan).nes.zip',
'../gba-host/nes-alt/Famicom_Shougi_-_Ryuuousen_(Japan).nes.zip',
'../gba-host/nes-alt/Famicom_Wars_(Japan).nes.zip',
'../gba-host/nes-alt/Family_Block.nes.zip',
'../gba-host/nes-alt/Family_Boxing.nes.zip',
'../gba-host/nes-alt/Family_Circuit_(Japan).nes.zip',
'../gba-host/nes-alt/Family_Circuit_91.nes.zip',
'../gba-host/nes-alt/Family_Feud.nes.zip',
'../gba-host/nes-alt/Family_Jockey.nes.zip',
'../gba-host/nes-alt/Family_Mahjong_(Japan).nes.zip',
'../gba-host/nes-alt/Family_Mahjong_II_-_Shanghai_heno_Michi_(Japan).nes.zip',
'../gba-host/nes-alt/Family_Pinball.nes.zip',
'../gba-host/nes-alt/Family_Quiz_(Japan).nes.zip',
'../gba-host/nes-alt/Family_School_(Japan).nes.zip',
'../gba-host/nes-alt/Family_Tennis.nes.zip',
'../gba-host/nes-alt/Famista_89_-_Kaimaku_Han!!_(Japan).nes.zip',
'../gba-host/nes-alt/Famista_90_(Japan).nes.zip',
'../gba-host/nes-alt/Famista_91_(Japan).nes.zip',
'../gba-host/nes-alt/Famista_92_(Japan).nes.zip',
'../gba-host/nes-alt/Famista_93_(Japan).nes.zip',
'../gba-host/nes-alt/Famista_94_(Japan).nes.zip',
'../gba-host/nes-alt/Fantastic_Adventures_of_Dizzy.nes.zip',
'../gba-host/nes-alt/Fantasy_Zone_2_-_The_Teardrop_of_Opa-Opa.nes.zip',
'../gba-host/nes-alt/Fantasy_Zone.nes.zip',
'../gba-host/nes-alt/Faria_-_A_World_of_Mystery_and_Danger!.nes.zip',
'../gba-host/nes-alt/Faxanadu.nes.zip',
'../gba-host/nes-alt/FC_Genjin_-_Freakthoropus_Computerus_(Japan).nes.zip',
'../gba-host/nes-alt/Felix_the_Cat.nes.zip',
'../gba-host/nes-alt/Ferrari_-_Grand_Prix_Challenge.nes.zip',
'../gba-host/nes-alt/Festers_Quest.nes.zip',
'../gba-host/nes-alt/Field_Combat.nes.zip',
'../gba-host/nes-alt/Fighting_Golf.nes.zip',
'../gba-host/nes-alt/Fighting_Road.nes.zip',
'../gba-host/nes-alt/Final_Fantasy_II.nes.zip',
'../gba-host/nes-alt/Final_Fantasy_III.nes.zip',
'../gba-host/nes-alt/Final_Fantasy.nes.zip',
'../gba-host/nes-alt/Final_Lap.nes.zip',
'../gba-host/nes-alt/Final_Mission.nes.zip',
'../gba-host/nes-alt/Fire_Emblem_(Japan).nes.zip',
'../gba-host/nes-alt/Fire_Emblem_Gaiden_(Japan).nes.zip',
'../gba-host/nes-alt/Fire_n_Ice.nes.zip',
'../gba-host/nes-alt/Firehouse_Rescue.nes.zip',
'../gba-host/nes-alt/Fist_of_the_North_Star.nes.zip',
'../gba-host/nes-alt/Flappy.nes.zip',
'../gba-host/nes-alt/Flight_of_the_Intruder.nes.zip',
'../gba-host/nes-alt/Flintstones_-_The_Rescue_of_Dino_&_Hoppy.nes.zip',
'../gba-host/nes-alt/Flintstones_-_The_Surprise_at_Dinosaur_Peak!.nes.zip',
'../gba-host/nes-alt/Flipull_-_An_Exciting_Cube_Game.nes.zip',
'../gba-host/nes-alt/Flying_Dragon_-_The_Secret_Scroll.nes.zip',
'../gba-host/nes-alt/Flying_Hero.nes.zip',
'../gba-host/nes-alt/Flying_Warriors.nes.zip',
'../gba-host/nes-alt/Formation_Z.nes.zip',
'../gba-host/nes-alt/Formula_1_Sensation.nes.zip',
'../gba-host/nes-alt/Formula_One_-_Built_To_Win.nes.zip',
'../gba-host/nes-alt/Foton_-_The_Ultimate_Game_on_Planet_Earth.nes.zip',
'../gba-host/nes-alt/Four_Players_Tennis.nes.zip',
'../gba-host/nes-alt/Frankenstein_-_The_Monster_Returns.nes.zip',
'../gba-host/nes-alt/Freedom_Force.nes.zip',
'../gba-host/nes-alt/Friday_the_13th.nes.zip',
'../gba-host/nes-alt/Front_Line.nes.zip',
'../gba-host/nes-alt/Fudou_Myouou_Den.nes.zip',
'../gba-host/nes-alt/Fun_House.nes.zip',
'../gba-host/nes-alt/Fushigi_no_Umi_no_Nadia_(Japan).nes.zip',
'../gba-host/nes-alt/Fuzzical_Fighter.nes.zip',
'../gba-host/nes-alt/G.I._Joe_-_The_Atlantis_Factor.nes.zip',
'../gba-host/nes-alt/G.I._Joe.nes.zip',
'../gba-host/nes-alt/Galaga.nes.zip',
'../gba-host/nes-alt/Galaxian.nes.zip',
'../gba-host/nes-alt/Galaxy_5000.nes.zip',
'../gba-host/nes-alt/Galg.nes.zip',
'../gba-host/nes-alt/Game_Party.nes.zip',
'../gba-host/nes-alt/Ganbare_Goemon_2_(Japan).nes.zip',
'../gba-host/nes-alt/Ganbare_Goemon_Gaiden_-_Kieta_Ougon_Kiseru_(Japan).nes.zip',
'../gba-host/nes-alt/Ganbare_Goemon_Gaiden_2_-_Tenka_no_Zaihou_(Japan).nes.zip',
'../gba-host/nes-alt/Ganbare_Goemon!_-_Karakuri_Douchuu_(Japan).nes.zip',
'../gba-host/nes-alt/Ganbare_Pennant_Race!_(Japan).nes.zip',
'../gba-host/nes-alt/Garfield_-_A_Week_of_Garfield.nes.zip',
'../gba-host/nes-alt/Gargoyles_Quest_II_-_The_Demon_Darkness.nes.zip',
'../gba-host/nes-alt/Gauntlet_II.nes.zip',
'../gba-host/nes-alt/Gauntlet.nes.zip',
'../gba-host/nes-alt/Gegege_no_Kitarou_-_Youkai_Dai_Makyou_(Japan).nes.zip',
'../gba-host/nes-alt/Gegege_no_Kitarou_2_-_Youkai_Gundan_no_Chousen_(Japan).nes.zip',
'../gba-host/nes-alt/Geimos.nes.zip',
'../gba-host/nes-alt/Gekikame_Ninja_Den_(Japan).nes.zip',
'../gba-host/nes-alt/Gekitotsu_Yonku_Battle_(Japan).nes.zip',
'../gba-host/nes-alt/Gemfire.nes.zip',
'../gba-host/nes-alt/Genghis_Khan.nes.zip',
'../gba-host/nes-alt/Genpei_Touma_Den_-_Computer_Boardgame.nes.zip',
'../gba-host/nes-alt/George_Foremans_KO_Boxing.nes.zip',
'../gba-host/nes-alt/Getsufuu_Maden_(Japan).nes.zip',
'../gba-host/nes-alt/Ghostbusters_2.nes.zip',
'../gba-host/nes-alt/Ghostbusters.nes.zip',
'../gba-host/nes-alt/Ghostsn_Goblins.nes.zip',
'../gba-host/nes-alt/Ghoul_School.nes.zip',
'../gba-host/nes-alt/Gilligans_Island.nes.zip',
'../gba-host/nes-alt/Gimmick!.nes.zip',
'../gba-host/nes-alt/Ginga_Eiyuu_Densetsu_(Japan).nes.zip',
'../gba-host/nes-alt/Ginga_no_Sannin_(Japan).nes.zip',
'../gba-host/nes-alt/Goal!_Two.nes.zip',
'../gba-host/nes-alt/Goal!.nes.zip',
'../gba-host/nes-alt/Godzilla_2_-_War_of_the_Monsters.nes.zip',
'../gba-host/nes-alt/Gold_Medal_Challenge_92.nes.zip',
'../gba-host/nes-alt/Golf_92.nes.zip',
'../gba-host/nes-alt/Golf_Grand_Slam.nes.zip',
'../gba-host/nes-alt/Golf_Ko_Open_(Japan).nes.zip',
'../gba-host/nes-alt/Golf.nes.zip',
'../gba-host/nes-alt/Golgo_13_-_Top_Secret_Episode.nes.zip',
'../gba-host/nes-alt/Gomoku_Narabe_(Japan).nes.zip',
'../gba-host/nes-alt/Goonies_II.nes.zip',
'../gba-host/nes-alt/Goonies.nes.zip',
'../gba-host/nes-alt/Gotcha!_-_The_Sport!.nes.zip',
'../gba-host/nes-alt/Gozonji_-_Yaji_Kita_Chin_Douchuu_(Japan).nes.zip',
'../gba-host/nes-alt/Gradius_2.nes.zip',
'../gba-host/nes-alt/Gradius.nes.zip',
'../gba-host/nes-alt/Grand_Master.nes.zip',
'../gba-host/nes-alt/Great_Battle_Cyber.nes.zip',
'../gba-host/nes-alt/Great_Deal.nes.zip',
'../gba-host/nes-alt/Great_Tank.nes.zip',
'../gba-host/nes-alt/Great_Waldo_Search.nes.zip',
'../gba-host/nes-alt/Greg_Normans_Golf_Power.nes.zip',
'../gba-host/nes-alt/Gremlins_2_-_The_New_Batch.nes.zip',
'../gba-host/nes-alt/Gryzor.nes.zip',
'../gba-host/nes-alt/Guardian_Legend.nes.zip',
'../gba-host/nes-alt/Guerrilla_War.nes.zip',
'../gba-host/nes-alt/Guevara.nes.zip',
'../gba-host/nes-alt/Gumshoe.nes.zip',
'../gba-host/nes-alt/Gun_Hed.nes.zip',
'../gba-host/nes-alt/Gun_Nac.nes.zip',
'../gba-host/nes-alt/Gun_Smoke.nes.zip',
'../gba-host/nes-alt/Gyrodine.nes.zip',
'../gba-host/nes-alt/Gyromite.nes.zip',
'../gba-host/nes-alt/Gyruss.nes.zip',
'../gba-host/nes-alt/Haja_no_Fuuin_(Japan).nes.zip',
'../gba-host/nes-alt/Hammerin_Harry.nes.zip',
'../gba-host/nes-alt/Hana_no_Star_Kaidou.nes.zip',
'../gba-host/nes-alt/Hanjuku_Eiyuu_(Japan).nes.zip',
'../gba-host/nes-alt/Happy_Birthday_Bugs.nes.zip',
'../gba-host/nes-alt/Harlem_Globetrotters.nes.zip',
'../gba-host/nes-alt/Hatris.nes.zip',
'../gba-host/nes-alt/Hayauchi_Super_Igo_(Japan).nes.zip',
'../gba-host/nes-alt/Heavy_Barrel.nes.zip',
'../gba-host/nes-alt/Heavy_Shreddin.nes.zip',
'../gba-host/nes-alt/Hebereke.nes.zip',
'../gba-host/nes-alt/Hector_87.nes.zip',
'../gba-host/nes-alt/Heisei_Tensai_Bakabon_(Japan).nes.zip',
'../gba-host/nes-alt/Hello_Kitty_no_Ohanabatake_(Japan).nes.zip',
'../gba-host/nes-alt/Hello_Kitty_World_(Japan).nes.zip',
'../gba-host/nes-alt/Herakles_no_Eikou_-_Toujin_Makyou_Den_(Japan).nes.zip',
'../gba-host/nes-alt/Herakles_no_Eikou_2_-_Titan_no_Metsubou_(Japan).nes.zip',
'../gba-host/nes-alt/Hi_no_Tori_-_Houou_Hen_-_Gaou_no_Bouken_(Japan).nes.zip',
'../gba-host/nes-alt/High_Speed.nes.zip',
'../gba-host/nes-alt/Highway_Star.nes.zip',
'../gba-host/nes-alt/Hiryuu_no_Ken_Special_-_Fighting_Wars_(Japan).nes.zip',
'../gba-host/nes-alt/Hissatsu_Doujou_Yaburi_(Japan).nes.zip',
'../gba-host/nes-alt/Hissatsu_Shigoto_Nin_(Japan).nes.zip',
'../gba-host/nes-alt/Hitler_no_Fukkatsu_-_Top_Secret_(Japan).nes.zip',
'../gba-host/nes-alt/Hogans_Alley.nes.zip',
'../gba-host/nes-alt/Hokuto_no_Ken_(Japan).nes.zip',
'../gba-host/nes-alt/Hokuto_no_Ken_2_-_Seikimatsu_Kyuuseishu_Densetsu_(Japan).nes.zip',
'../gba-host/nes-alt/Hokuto_no_Ken_3_-_Shin_Seiki_Souzou_Seiken_Restuden_(Japan).nes.zip',
'../gba-host/nes-alt/Hokuto_no_Ken_4_-_Shichisei_Haken_Den_-_Hokuto_Shinken_no_Kanata_he_(Japan).nes.zip',
'../gba-host/nes-alt/Hollywood_Squares.nes.zip',
'../gba-host/nes-alt/Holy_Diver.nes.zip',
'../gba-host/nes-alt/Home_Alone_2_-_Lost_in_New_York.nes.zip',
'../gba-host/nes-alt/Home_Alone.nes.zip',
'../gba-host/nes-alt/Hook.nes.zip',
'../gba-host/nes-alt/Hoops.nes.zip',
'../gba-host/nes-alt/Hostages_-_The_Embassy_Mission.nes.zip',
'../gba-host/nes-alt/Hot_Slot.nes.zip',
'../gba-host/nes-alt/Hototogisu_(Japan).nes.zip',
'../gba-host/nes-alt/Houma_ga_Toki_(Japan).nes.zip',
'../gba-host/nes-alt/Hudson_Hawk.nes.zip',
'../gba-host/nes-alt/Hudsons_Adventure_Island_II.nes.zip',
'../gba-host/nes-alt/Hudsons_Adventure_Island_III.nes.zip',
'../gba-host/nes-alt/Hudsons_Adventure_Island.nes.zip',
'../gba-host/nes-alt/Hunt_for_Red_October.nes.zip',
'../gba-host/nes-alt/Hyakkiyakou_(Japan).nes.zip',
'../gba-host/nes-alt/Hydlide_3_-_Yami_Kara_no_Houmonsha_(Japan).nes.zip',
'../gba-host/nes-alt/Hydlide_Special.nes.zip',
'../gba-host/nes-alt/Hydlide.nes.zip',
'../gba-host/nes-alt/Hyper_Sports.nes.zip',
'../gba-host/nes-alt/I_Can_Remember.nes.zip',
'../gba-host/nes-alt/I_Love_Softball_(Japan).nes.zip',
'../gba-host/nes-alt/Ice_Climber.nes.zip',
'../gba-host/nes-alt/Ice_Hockey.nes.zip',
'../gba-host/nes-alt/Idol_Hakkenden_(Japan).nes.zip',
'../gba-host/nes-alt/Ikari_III_-_The_Rescue.nes.zip',
'../gba-host/nes-alt/Ikari_Warriors_2_-_Victory_Road.nes.zip',
'../gba-host/nes-alt/Ikari_Warriors.nes.zip',
'../gba-host/nes-alt/Ike_Ike!_Nekketsu_Hockey_Bu_-_Subette_Koronde_Dai_Rantou_(Japan).nes.zip',
'../gba-host/nes-alt/Ikinari_Musician.nes.zip',
'../gba-host/nes-alt/Ikki.nes.zip',
'../gba-host/nes-alt/Image_Fight.nes.zip',
'../gba-host/nes-alt/Immortal.nes.zip',
'../gba-host/nes-alt/Impossible_Mission_II.nes.zip',
'../gba-host/nes-alt/Incredible_Crash_Dummies.nes.zip',
'../gba-host/nes-alt/Indiana_Jones_and_the_Last_Crusade.nes.zip',
'../gba-host/nes-alt/Indiana_Jones_and_the_Temple_of_Doom.nes.zip',
'../gba-host/nes-alt/Indora_no_Hikari_(Japan).nes.zip',
'../gba-host/nes-alt/Infiltrator.nes.zip',
'../gba-host/nes-alt/Insector_X.nes.zip',
'../gba-host/nes-alt/International_Cricket.nes.zip',
'../gba-host/nes-alt/Iron_Tank.nes.zip',
'../gba-host/nes-alt/Ironsword_-_Wizards_&_Warriors_2.nes.zip',
'../gba-host/nes-alt/Isolated_Warrior.nes.zip',
'../gba-host/nes-alt/Itadaki_Street_-_Watashi_no_Mise_ni_Yottette_(Japan).nes.zip',
'../gba-host/nes-alt/Ivan_Ironman_Stewarts_Super_Off-Road.nes.zip',
'../gba-host/nes-alt/Jack_Nicklaus_Greatest_18_Holes_of_Major_Championship_Golf.nes.zip',
'../gba-host/nes-alt/Jackal.nes.zip',
'../gba-host/nes-alt/Jackie_Chans_Action_Kung_Fu.nes.zip',
'../gba-host/nes-alt/James_Bond_Jr..nes.zip',
'../gba-host/nes-alt/Jangou_(Japan).nes.zip',
'../gba-host/nes-alt/Jaws.nes.zip',
'../gba-host/nes-alt/Jeopardy!_25th_Anniversary_Edition.nes.zip',
'../gba-host/nes-alt/Jeopardy!_Junior_Edition.nes.zip',
'../gba-host/nes-alt/Jeopardy!.nes.zip',
'../gba-host/nes-alt/Jesus_-_Kyoufu_no_Bio_Monster_(Japan).nes.zip',
'../gba-host/nes-alt/Jetsons_-_Cogswells_Caper!.nes.zip',
'../gba-host/nes-alt/Jigoku_Gokuraku_Maru_(Japan).nes.zip',
'../gba-host/nes-alt/Jikuu_Yuuden_-_Debias_(Japan).nes.zip',
'../gba-host/nes-alt/Jimmy_Connors_Tennis.nes.zip',
'../gba-host/nes-alt/JJ_-_Tobidase_Daisakusen_Part_2.nes.zip',
'../gba-host/nes-alt/Joe_&_Mac.nes.zip',
'../gba-host/nes-alt/John_Elways_Quarterback.nes.zip',
'../gba-host/nes-alt/Jordan_vs._Bird_-_One_on_One.nes.zip',
'../gba-host/nes-alt/Joshua.nes.zip',
'../gba-host/nes-alt/Journey_to_Silius.nes.zip',
'../gba-host/nes-alt/Joust.nes.zip',
'../gba-host/nes-alt/Jungle_Book.nes.zip',
'../gba-host/nes-alt/Jurassic_Park.nes.zip',
'../gba-host/nes-alt/Just_Breed.nes.zip',
'../gba-host/nes-alt/Juuouki.nes.zip',
'../gba-host/nes-alt/Juuryoku_Soukou_Metal_Storm_(Japan).nes.zip',
'../gba-host/nes-alt/Juvei_Quest_(Japan).nes.zip',
'../gba-host/nes-alt/Kanshakudama_Nage_Kantarou_no_Toukaidou_Gojuusan_Tsugi_(Japan).nes.zip',
'../gba-host/nes-alt/Kid_Icarus.nes.zip',
'../gba-host/nes-alt/Kid_Niki_-_Radical_Ninja.nes.zip',
'../gba-host/nes-alt/King_Neptunes_Adventure.nes.zip',
'../gba-host/nes-alt/Kirbys_Adventure.nes.zip',
'../gba-host/nes-alt/Legend_of_Kage.nes.zip',
'../gba/gba-host/nes-alt/Legend_of_Zelda.nes.zip',
'../gba-host/nes-alt/Lion_King.nes.zip',
'../gba-host/nes-alt/Magic_John.nes.zip',
'../gba-host/nes-alt/Mappy.nes.zip',
'../gba-host/nes-alt/Marvels_X-Men.nes.zip',
'../gba-host/nes-alt/Mega_Man_2.nes.zip',
'../gba-host/nes-alt/Mega_Man_3.nes.zip',
'../gba-host/nes-alt/Mega_Man_4.nes.zip',
'../gba-host/nes-alt/Mega_Man_6.nes.zip',
'../gba-host/nes-alt/Metal_Gear.nes.zip',
'../gba-host/nes-alt/Mickey_Mousecapade.nes.zip',
'../gba-host/nes-alt/Mighty_Bomb_Jack.nes.zip',
'../gba-host/nes-alt/Mission_Cobra.nes.zip',
'../gba-host/nes-alt/Nightmare_on_Elm_Street.nes.zip',
'../gba-host/nes-alt/Ninja_Gaiden_2_-_The_Dark_Sword_of_Chaos.nes.zip',
'../gba-host/nes-alt/Ninja_Gaiden_3_-_The_Ancient_Ship_of_Doom.nes.zip',
'../gba-host/nes-alt/Ninja_Gaiden.nes.zip',
'../gba-host/nes-alt/Ninja_Kid.nes.zip',
'../gba-host/nes-alt/Panic_Restaurant.nes.zip',
'../gba-host/nes-alt/Pinball_Quest.nes.zip',
'../gba-host/nes-alt/Popeye.nes.zip',
'../gba-host/nes-alt/Power_Blazer.nes.zip',
'../gba-host/nes-alt/Puss_n_Boots_-_Peros_Great_Adventure.nes.zip',
'../gba-host/nes-alt/Rainbow_Islands_-_The_Story_of_Bubble_Bobble_2.nes.zip',
'../gba-host/nes-alt/Rampage.nes.zip',
'../gba-host/nes-alt/Robocop_2.nes.zip',
'../gba-host/nes-alt/Robocop_3.nes.zip',
'../gba-host/nes-alt/Robocop.nes.zip',
'../gba-host/nes-alt/Rocket_Ranger.nes.zip',
'../gba-host/nes-alt/Rygar.nes.zip',
'../gba-host/nes-alt/Sesame_Street_123.nes.zip',
'../gba-host/nes-alt/Sesame_Street_ABC.nes.zip',
'../gba-host/nes-alt/Sesame_Street_Countdown.nes.zip',
'../gba-host/nes-alt/Shinobi.nes.zip',
'../gba-host/nes-alt/Simpsons_-_Bart_vs._the_Space_Mutants.nes.zip',
'../gba-host/nes-alt/Simpsons_-_Bart_vs._the_World.nes.zip',
'../gba-host/nes-alt/Simpsons_-_Bartman_Meets_Radioactive_Man.nes.zip',
'../gba-host/nes-alt/Snow_Bros.nes.zip',
'../gba-host/nes-alt/Spartan_X.nes.zip',
'../gba-host/nes-alt/Spider-Man_-_Return_of_the_Sinister_Six.nes.zip',
'../gba-host/nes-alt/Spy_vs._Spy.nes.zip',
'../gba-host/nes-alt/Star_Voyager.nes.zip',
'../gba-host/nes-alt/Strider.nes.zip',
'../gba-host/nes-alt/Takahashi_Meijin_no_Bouken_Shima_III_(Japan).nes.zip',
'../gba-host/nes-alt/Teenage_Mutant_Ninja_Turtles_2.nes.zip',
'../gba-host/nes-alt/Thunder_&_Lightning.nes.zip',
'../gba-host/nes-alt/Tiny_Toon_Adventures.nes.zip',
'../gba-host/nes-alt/Toki.nes.zip',
'../gba-host/nes-alt/Untouchables.nes.zip',
'../gba-host/nes-alt/Western_Kids.nes.zip',
'../gba-host/nes-alt/Wrecking_Crew.nes.zip',
'../gba-host/nes-alt/Zelda_II_-_Adventure_of_Link.nes.zip',
'../gba-host/nes-alt/3-D_Battles_of_World_Runner.nes.zip',
'../gba-host/nes-alt/8_Eyes.nes.zip',
'../gba-host/nes-alt/10-Yard_Fight.nes.zip',
'../gba-host/nes-alt/100_Man_$_Kid_-_Maboroshi_no_Teiou_Hen_(Japan).nes.zip',
'../gba-host/nes-alt/110-in-1.nes.zip',
'../gba-host/nes-alt/720.nes.zip',
'/Binaries/Mega_Man_2.nes.zip',
'/Binaries/Contra.nes.zip',
'../gba-host/nes-alt/Dragon_Buster_jp.nes.zip',
'../gba-host/nes-alt/Dragon_Spirit_us.nes.zip',
'../gba-host/nes-alt/Druaga_no_tou_jp.nes.zip',
'../gba-host/nes-alt/Galaxian_jp.nes.zip',
'../gba-host/nes-alt/Mappy_jp.nes.zip',
'../gba-host/nes-alt/pacman_ce.nes.zip',
'../gba-host/nes-alt/Pac_Man_jp.nes.zip',
'../gba-host/nes-alt/Sky_Kid_jp.nes.zip',
'../gba-host/nes-alt/Splatter_House_jp.nes.zip',
'../gba-host/nes-alt/Xevious_jp.nes.zip',
'../gba/gba-host/nes-alt/Dig_Dug_.zip'




]

function returnLast(arr) {
    return arr.at(gameTypeID - 1001);
  }
const getGameNameFromAr = returnLast(gameNameTypeID);

gameName = getGameNameFromAr;
}
