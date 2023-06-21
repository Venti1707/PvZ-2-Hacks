# How to edit pp.dat
1. Run the All-In-1-Tools [here](../Tools/All-In-1-Tools.exe)
2. Use the JSON & RTON tab
3. Import your pp.dat file into the RTON section of the "RTON to JSON" section and press "Start"

# What can be edited?
You can view a list of items that can be edited with images [here](https://ernestoam.fandom.com/wiki/Plants_vs._Zombies_2_Hacking_Guide/pp.dat)

If you're unable to view the link, or want a summary:
* Enable Gems
* Edit Name
* Accept Updated Terms
* Edit Coin Count
* Edit Gem Count
* Edit Gauntlet Count
* Edit Mint Count
* Edit Penny Fuel Count
* Edit Perk Progression Count
* Edit which Plants you have
* Edit Events
    * e
* Edit which Zombie almanacs you have
* Edit which worlds you unlocked and which levels you completed (unspecified)
* Edit which Upgrades and World Trophies you have
* Edit which Narration you have seen
* Travel Log Dialog Data (unspecified)
* Edit your Endless Zones
    * wn
    * cl
    * hl
    * pfco
    * l
    * sb
    * hr
    * ts
* Edit which Costumes you have
* Edit Powerups Count
* Edit Treasure Yeti in which level
    * wml
* Edit your Zen Garden
    * p
    * k
    * s
    * rt
* Edit Bought Zen Garden Pots
* Edit Sprout Count
* Edit Boosted Plants
    * p
    * c
    * a
    * b
    * t
* Start from the Zen Garden
* Enable Treasure Yeti
* Edit played mini games
* Edit collected rewards
* Edit your Plant Leveling
    * p
    * l
    * x
    * m
* Edit Penny Pursuit (WIP)
* Edit Calendar
    * cllt & cllst
    * cli

# Note
If you have multiple profiles, make sure you are editing the right one. It should be the one under your player name.

You can change counts to anything you please, but do not go beyond 2147483647 or the game will overflow and numbers will go negative.

Do not add any commas in counts.

# Enable gems
Scroll down until you see a "v". This integer takes care of some version number. Setting it to 8 removes all your gems when you start your profile. (Default is 9) (It could have other side-effects)

# Name
Scroll down until you see a "n". This string takes care of your profile name. Edit it to the name you want if the game won't let you pick it.

# Accept Updated Terms
Scroll down until you see a "v", this is a timestamp of when you created your profile. Setting it to long ago will ask you to accept the updated terms. **DO NOT DELETE THIS NODE OR YOU'LL SOFTLOCK.**

# Edit Coin Count
Scroll down until you see a "c". This integer takes care of the number of coins you have. Edit it to the amount you want.

# Edit Gem Count
Scroll down until you see a "g". This integer takes care of the number of gems you have. Edit it to the amount you want.

# Edit Gauntlet Count
Scroll down until you see a "t". This integer takes care of the number of gauntlets you have. Edit it to the amount you want.

# Edit Mint Count
Scroll down until you see an "m". This integer takes care of the number of mints you have. Edit it to the amount you want.

# Edit Penny Fuel Count
Scroll down until you see a "pf". This integer takes care of the number of fuel you have. Edit it to the amount you want.

# Edit Perk Progression Count
Scroll down until you see a "pt". This integer takes care of the progression number you have. Edit it to the amount you want. Note, Perk Progression will reset to 0 whenever a new Penny's Pursuit week start.

# Edit which Plants you have
Scroll down until you see a "p". Each plant has their own number ID. For a list of plant IDs, click [here](../Internal_IDs/plants.txt). You can also copy from [p.json](pp-dat-json/p.json)

# Edit Events
Scroll down until you see a "tei".

## e
This seems to control the energy you have available. (Default is 80).

## ae
Appears to be a Unix Timestamp of when the event started.

# Edit which Zombie almanacs you have
Scroll down until you see a "kz". Each zombie has their own number ID. For a list of zombie IDs, click [here](../Internal_IDs/zombies.txt). You can also copy from [kz.json](pp-dat-json/kz.json) (Note: not every single zombie in the game's code has a unique ID, so if it's not in the ID list then it doesn't have one.)

# Edit which worlds you unlocked and which levels you completed (unspecified)
Scroll down until you see "wmed", this is a list of all world ids you have unlocked and which level IDs you have beaten. (Still need a Pastebin for the world IDs)

# Edit which Upgrades and World Trophies you have
Scroll down until you see "gf". Each Upgrade and World Trophy has their own number ID. For a list of Upgrade and World Trophy IDs, click [here](../Internal_IDs/game_features.txt). You can also copy from [gf.json](pp-dat-json/gf.json)

# Edit which Narration you have seen
Scroll down until you see "ne". This takes care of each narrative you have seen in-game. For a list of narration IDs, click [here](../Internal_IDs/narrations.txt). You can also copy from [ne.json](pp-dat-json/ne.json)

# Travel Log Dialog Data (unspecified)
Scroll down until you see "ct". This seems to take care of whether the Travel Log's intro dialog has been triggered, as deleting it will cause the Travel Log intro dialog to play.

# Edit your Endless Zones
Scroll down until you see "dri". You will see a list of Endless Zones you have unlocked. Any node that is not listed I have no knowledge of, edit at your own risk. You can also copy from [dri.json](pp-dat-json/dri.json)

## wn
"wn" takes care of the world's Endless Zone, which should otherwise be easy to guess. Do not edit this.
| wn             | World Name (in-game)  |
| :------------: | :-------------------: |
| ```egypt```    | Ancient Egypt         |
| ```pirate```   | Pirate Seas           |
| ```cowboy```   | Wild West             |
| ```iceage```   | Frostbite Caves       |
| ```lostcity``` | Lost City             |
| ```future```   | Far Future            |
| ```dark```     | Dark Ages             |
| ```eighties``` | Neon Mixtape Tour     |
| ```dino```     | Jurassic Marsh        |
| ```beach```    | Big Wave Beach        |
| ```modern```   | Modern Day            |

## cl
"cl" is the current level you are in the Endless Zone. Edit it to the amount you want.

## hl
"hl" is the high score of your Endless Zone. Edit it to the amount you want.

## pfco
"pfco" is the amount of Plant Food you have stored, although setting it higher than your Plant Food slots will yield no extra. Edit it to the amount you want.

## l
"l" is the amount of lawn mowers you have left. But it isn't as simple as setting a number, as each set up actually has their own ID. For a list of lawn mower set up IDs, click [here](https://i.imgur.com/fJkvsFX.png). If you are unable to open the link, here it is:

![Lawnmowers](https://i.imgur.com/fJkvsFX.png)

Any number divisible by 2 will just give you the Game Over screen, and any other odd number after 63 will just repeat the table.

## sb
These are the current plants you have with you in an Endless Zone. For a list of plant IDs, click [here](../Internal_IDs/plants.txt).

## hr
"hr" is a boolean which determines if this level will draw a card. If set to False, it will not. If True, then yes.

## ts
"ts" is likely the last time when you played an Endless Zone. The value is written in Unix Timestamp, you will need to use the [All-In-1-Tool](Tools/All_In_1_Tools.exe) to convert it into the date/time form. It is not necessary to edit this.

# Edit which Costumes you have
Scroll down until you see "cos". Each costume has their own number ID. For a list of costume IDs, click [here](../Internal_IDs/costumes.json). You can also copy from [cos.json](pp-dat-json/cos.json)

# Edit Powerups Count
Scroll down until you see "pr". You will see a list of powerups you have unlocked. "n" takes care of the powerup type, which should otherwise be easy to identify (See the list of GameFeatures [here](../Internal_IDs/game_features.txt)). "i" takes care of the corresponding powerup's count. Edit it to the amount you want. You can also copy from [pr.json](pp-dat-json/pr.json)

# Edit Treasure Yeti in which level
Scroll down until you see "tyi", this controls in which level a Yeti will spawn.

# wml
this is the internal level name.

# Edit your Zen Garden
Scroll down until you see "gpi". You should see a list of plants you have in your Zen Garden. If the node is not present, go to your Zen Garden and plant a sprout. Any node that is not listed I have no knowledge of, edit at your own risk.

## p
This is the plant's ID. For a list of plant IDs, click [here](../Internal_IDs/plants.txt).

## k
The plant's flower pot position. Each position has its own ID, click [here](https://i.imgur.com/XbXxaZF.png) for the flower pot positions. Any other number will not make the plant appear. If you are unable to open the link, here it is:

![Pots](https://i.imgur.com/XbXxaZF.png)

## s
The stage the plant is currently on.

0
Will not make the plant appear.

1
The plant's sprout will be planted upon entering the Zen Garden.

2
The plant sprout is already planted and requires watering.

3
The plant will grow, dropping its boosted seed packet.

4
The plant will start at around 1/3 grown, growing the rest to full size and drop its boosted seed packet.

5
The plant will start at around 2/3 grown, growing the rest to full size and drop its boosted seed packet.

6
The plant is fully grown, but has no seed packet dropped, perhaps due to a glitch. Set "rt" to 21 to have its seed packet already dropped upon entrance.

7
The plant is boosted, but will not boost the plant in-game. Set "rt" to 21, it may cause the seed packets to glitch and not show the boosted one, but it should work if these are set correctly.

## rt
Not entirely sure how it works, but has something to do with making stages 6 and 7 work properly.

Stage 6
If you choose to have it at this stage, make sure you set this integer to 21 or the boosted seed packet will not appear, possibly due to a glitch. Tapping the plant causes it to disappear in the glitched state.

Stage 7
Make sure to also set the "rt" integer to 21 to make the boost work properly. It may glitch the in-game seed packet and cause the boosted seed packet to not be displayed, but it should still boost the plant when planted in-game.

# Edit Bought Zen Garden Pots
Scroll down until you see "upsi". Each flower pot has their own number ID. For a list of flower pot IDs, click [here]((https://i.imgur.com/XbXxaZF.png)). If you are unable to open the link, here it is:

![Pots](https://i.imgur.com/XbXxaZF.png)

# Edit Sprout Count
Scroll down until you see "spr", this integer takes care of the number of sprouts you have. Edit it to the amount you want.

# Edit Boosted Plants
Scroll down until you see "pli". You will see a list of plants which have been boosted. (Note: for some reason this data is duplicated under "pbi", as a backup. You can also copy from [pbi.json](pp-dat-json/pbi.json)) You can also copy from [pli.json](pp-dat-json/pli.json)

## p
This is the plant's ID. For a list of plant IDs, click [here](../Internal_IDs/plants.txt).

## c
Unknown. By default it is always set to 1, but changing it does not seem to do anything.

## a
The type of boost a plant has. However, since First Strike is the only used one, it will always be at 4. For a list of boost IDs, click [here](../Internal_IDs/boosts.txt). (Note: the plant you want to boost must have it under their Boosts in PlantProperties.json, otherwise the boost does nothing.)

## b
Unknown. It is empty by default. Adding a number to it does not seem to do anything.

## t
Unsure, but appears to be a Unix Timestamp of when a plant can next be planted in the Zen Garden. Likely related to the ZenGardenDurationOverrideSeconds in a plant's code in PlantProperties.json.

# Start from the Zen Garden
Scroll down until you see "izg". This boolean is usually set to False, setting it to True will start you off from the Zen Garden.

# Enable Treasure Yeti
Scroll down until you see "mcs", delete this node to remove the treasure yeti if specified. (It could have side-effects)

# Edit played mini games
Scroll down until you see "ap". This controls which mini games you've completed.

# Edit collected rewards
Scroll down until you see "up". This controls which rewards you've collected.

# Edit your Plant Leveling
Scroll down until you see "plis", right click on it, go to Expand, All. You can also copy from [plis.json](pp-dat-json/plis.json)

## p
This is the plant's ID. For a list of plant IDs, click [here](../Internal_IDs/plants.txt).

## l
The current level of a plant. It counts up from 0. For example, 0 equals Lv. 1, 1 equals Lv. 2, and so on.

## x
The number of Seed Packets a plant has. Edit it to the amount you want.

## m
The current Mastery level of a plant. It counts up from 1. For example, 1 equals M 1, 2 equals M 2, you get the idea. Can be modified even though a plant has not reached its max level, but causes the plant's leveling to glitch.

# Edit Penny Pursuit (WIP)
Not sure how this works yet, but removing these values resets Penny Pursuit:
* rid
* rsid
* rzw
* rza
* rzc
* rzd
* rpd0
* rpd1
* rpd1
* rznt
* rzfc

# Edit Calendar

## cllt & cllst
Unsure, but appears to be a Unix Timestamp of when the calendar was last opened.

## cli
This is a list of the rewards of the 3 calendar tabs as resetting it unlocks the rewards again.