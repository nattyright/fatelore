  
/*
 * Vertical/Horizontal tabs
 */
$( function() {
  //$( "#sheetForm #tabsForm" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
  $( "#sheetForm #tabsForm" ).tabs().addClass( "ui-tabs ui-helper-clearfix" );
  //$( "#sheetForm #tabsForm li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
  $( "#sheetRef #tabsRef" ).tabs().addClass( "ui-tabs ui-helper-clearfix" );
} );


/*
 * Auto-complete skill sesarch
 */
var availableSkills = ['Abduction', 'Abyss of Death', 'Accomplishment is in the Feet', 'Achaemenid Pride', 'Admonishment of the King of Knights', 'Advice for Sailing', 'Aesthetics of the Last Spurt', 'Affection of the Goddess', 'Affection of the Holy Grail', 'Affection of the Sky God', 'Afraid of Your Own Shadow', 'Aiming', 'All Books Must Be Burned', 'All Kinds of Martial Arts (Horse)', 'All Kinds of Specializations', 'All Scholars Must Be Buried', 'All Things in Nature', 'Alluring Euphony', 'Altereactor', 'Ananga', 'Andreias Amarantos', 'Animal Communication', 'Animal Control (Bat)', 'Annihilation Wish', 'Anti-Evil (Unique)', 'Anti-Spirit Combat', 'Appreciation of Blasphemy', 'Appreciation of the Arts', 'Area Crushing', 'Argon Coin', 'Armor is on the Chest', 'Artificial Hero (Fake)', 'Ash of Kama', 'Assault on Sipahi', 'At The Boundary', 'Ath nGabla', 'Atrocious Wildfire', 'Attendant of Iron', 'Aurea Poculum', 'Authority of the Beast', 'Avenger', 'Banditry Abolishment', 'Baptism Rite', 'Baritsu', 'Bath of Fresh Blood', 'Battle Continuation', 'Battle Maneuver (Horse)', 'Battle Retreat', 'Battlefield Provisions', 'Beach Flower', 'Beagalltach', 'Bean Soup Lake', 'Beast Enhancement', 'Beast-Slayer', 'Beautiful Appearance', 'Beautiful Princess', 'Becoming Light in the Abyss', 'Bedchamber of Survival', 'Belt of Bertilak', 'Berserk', 'Bewitching Rosy Cheeks', 'Blank Subscription List', 'Blessing of Martial Arts', 'Blessing of Wisdom', 'Blessing of the Goddess', 'Blocking and Attacking As One', 'Bloodsoaked Recklessness', 'Bloodsucking', 'Bloody Devil', 'Bondage Preference', 'Boundlessness', 'Bow and Arrow Creation', 'Breast Valley', 'Breath of the Red Dragon', 'Broken Tusk', 'Bulletproof Treatment', 'Burnt Bone Tree Peony', 'Call from the Garnier', 'Calm and Collected', 'Calydonian Hunt', 'Cancellation of Magecraft', 'Castle Apparition', 'Charisma', 'Charisma of Absolute Freeze', 'Charisma of Triumphant Return', 'Charisma of Wicked Wisdom', 'Charisma of the Empress', 'Charisma of the Rani', 'Charisma of the Sun', 'Cheerful Model Mystic Code', 'Cheerful Model Mystic Code (Younger Sister)', 'Child of Apollo', 'Child of Nature', 'Chinese Boxing', 'Chinese Martial Arts (Bajiquan)', 'Chinese Martial Arts (Liu He Da Qiang)', 'Chiyogami Manipulation Techniques', 'Cigarette Lion', 'Circuit Connection', 'Civilization Erosion', 'Clairvoyance', 'Clairvoyance (Beast)', 'Clairvoyance (Beauty)', 'Clairvoyance (Darkness)', 'Clairvoyance (Shooter)', 'Clairvoyance (Transcendence)', 'Cloud Shine', "Clown's Laughter", 'Collector', 'Combination', 'Command of Emperor Xuan', 'Concept Improvement', 'Connection to the Root', 'Conquistador', 'Consecration of Eternal Life', 'Consort of the Sun', 'Contradictory Mind', 'Cosmo Reactor', 'Counter Hero', 'Counter Hero (Tale)', 'Crest of the Star', 'Crime Ballet', 'Crimson Gold', 'Crossing Arcadia', 'Crystallized Wisdom', 'Curse Arts', 'Curse Arts (Lyric)', 'Curse Arts (Oracle)', 'Curse of Separation', 'Curse of the Orochi', 'Cursed Layer: Feline Sunshine', 'Dance of Pale Death', 'Dance of Silence', 'Dazzling Journey', 'Dead Count Shapeshifter', 'Delightful Comrades', 'Demon King', 'Demon King of the Sixth Heaven', 'Demon of the Battlefield', 'Demonic Mutation', 'Derisive Heart of Steel', "Detective's Instinct", 'Determination of Steel', 'Devilish Face', 'Diatrekhōn Astēr Lonkhē', 'Discerning Eye', 'Discernment of the Poor', 'Disengage', 'Divine Core of the Goddess', 'Divine Core of the Love God', 'Divine Power', 'Divine Power (JK)', 'Divinity', 'Domina Coronam', 'Door to Paradise', 'Doppelgänger', 'Double Class', 'Double Cross', 'Double Summon', 'Dragon Reactor Core', 'Dragon Witch', 'Dragon-Slayer', 'Dragon-kind Modification', 'Dreamlike Charisma', 'Dromeus Komētēs', 'Egyptian Magecraft', 'Eight Proposals while Shipboard', 'Eine kleine Nachtmusik', 'Elemental', 'Emergency Prerogative', 'Emotional Freezing', 'Emptiness', 'Enchant', 'End of the Spider Thread', 'Ephemeral Dream', 'Ephemeral Sisters', 'Espionage', 'Eternal Arms Mastery', 'Eternal Emperor', 'Evaporation of Reason', 'Evening Bell', 'Evil Eye of the Abyss', 'Executioner', 'Existence Outside the Domain', 'Eye of the Spirits', 'Fairy Contract', 'Fallen Demon', 'Familiar (Dove)', 'Fate Weaver', 'Fate is in Heaven', 'Father-Daughter Bond', 'Fearsome Immortal', 'Feat of the Swallow', 'Feathered Being of the Immortal Realm', 'Fierce Journey', 'Fifth Force', 'Final Eli-chan', 'Firepower Support (Cannon)', 'Five Approaches to Meditation', 'Flame-Colored Kiss', 'Flowers for the Earth', 'Four Gods Divination (Hakuro)', 'Freeshooter', 'Freezing Blizzard', 'Furthest Earth', 'Future Prediction', 'Galactic Meteor Sword', 'Galactic Meteor Sword XEX', 'Galvanism', 'Genji Arms Mastery', 'Gentlemanly Love', 'Giant Beast Hunt', 'Giant Monster Trample', 'Gift of the Saint', 'Glory of Past Days', 'God of Medicine', "God's Resolution", "God's Resolution (Fake)", 'God-King of the Hot Sands', 'God-Slayer', 'Goddess Metamorphosis', 'Golden Rule', 'Golden Rule (Beauty)', 'Golden Rule (Body)', 'Golden Rule (Wealth & Body)', 'Golden Rule (Wicked)', 'Grace of God', 'Grail of Burning Heaven', 'Growth Desire', 'Guardian Beast', 'Guardian Knight', 'Guardian of Troy', 'Half-dead Blood Axe', 'Harp of Healing', 'Hawkeye', 'Heavenly Eye', 'Hero Creation', 'Hero of the Restoration', "Hero's Assistant", 'Heroic Great Principles', 'Hidden Great Crown', 'High-Servant', 'High-Speed Divine Words', 'High-Speed Incantation', 'High-Speed Sutra Chanting', 'Holy Maiden of the Waterside', 'Homunculus', 'Honor of Pirates', 'Honor of Suffering', 'Honor of the Knights of Fianna', 'Huge Scale', 'Human Anatomy Research', 'Human Anatomy Understanding', 'Human Observation', 'Human Order Ascension Ritual', 'Hunter of Uri', 'Hypnotic Radio Waves', 'Illusion Arts', 'Imaginary Around', 'Imperial Privilege', 'Imposing Stance', 'In Sonorous Praise of Love', 'Incarnated Spirit', 'Incarnation of Rage', 'Incitement', 'Independent Action', 'Independent Manifestation', 'Inexhaustible Bale', 'Infantile Regression', 'Infinite Mana Supply', 'Information Erasure', 'Inherent Insight', 'Inherent Wisdom', 'Inn Creation', 'Innocent Kaiju', 'Innocent Monster', 'Innocent Monster (Flame)', 'Innocent Monster (Foreign)', 'Insanity', 'Instant Shadowless Sword', 'Instinct', 'Intersect of Yin-Yang', 'Intoxicating Aroma of Fruits', 'Invictus Spiritus', "It Can't Be Helped", 'Item Construction', 'Item Construction (Fake)', 'Jaguar Eye', 'Jaguar Kick', 'Jaguar Punch', 'Journey of the Flowers', 'Judgment of the Stars', 'Juezhao', 'Justice of the Ends of the World', 'Kamuy Yukar', 'Kill A Man in Ten Steps', "King's Invisible Hand", "King's Reflection", "King's Return", 'Kiss Demon', 'Knight of Owner', 'Knight of the Lake', 'Knight of the White Feather', "Knight's Strategy", "Knight's Tactics", 'Knowledge of Melee Combat', 'Knowledge of the Sowa', 'Kouga-ryuu', 'Labrys of the Abyss', 'Lamenting Exterior', 'Lamplight of the Soul', 'Laws of the Shinsengumi', 'Legend of Dracula', 'Legend of the Crimson Hero', 'Librarian of Knowledge', 'Light of Possibility', 'Lightning Conqueror', "Like There's No One Watching", 'Like a Vain Dream', 'Lineage Excitation', 'Logos Eater', 'Long-Distance Dash', 'Long-Distance Dash (Horse)', 'Loss of Sanity', 'Love Spot', 'Love for the People', 'Lucha Libre', 'Mad Enhancement', 'Madness of the Spirits', 'Magecraft', 'Magic Resistance', 'Magical Healing', 'Magnificent Free Spirit', 'Magus 100-Shot Volley', 'Mahatma', "Maiden's Willpower", 'Man-Slayer', 'Mana Burst', 'Mana Burst (Cage)', 'Mana Burst (Courage)', 'Mana Burst (Flame)', 'Mana Burst (Gem)', 'Mana Burst (Jump)', 'Mana Burst (Lightning)', 'Mana Burst (Pumpkin)', 'Mana Burst (Star)', 'Mana Reversal', 'Mana Tuning', 'Mani Jewel', 'Manifestation of Beauty', 'Marksmanship', 'Martial Force of the Hegemon-King', 'Mask of Concealing Beauty', 'Masochistic Constitution', 'Mass Production', 'May King', 'Meanwhile...', 'Mechanical Doll Illusionary Arts', 'Mechanized Armor', 'Medicine', 'Melt Virus', 'Mental Pollution', 'Mental Pollution (Wicked)', 'Merit of Clermont', 'Midsummer Curse Arts', 'Migraine', "Mind's Eye (Fake)", "Mind's Eye (True)", 'Miracle', 'Mixed-Blood', 'Moderate-load', 'Mona Lisa', 'Monstrous Strength', 'Murder on a Misty Night', 'My Red Mead', 'Mystery-Slayer', 'Mystic Code Seal Release', 'Mystic Eyes', 'Mystic Eyes of Clairvoyance', 'Mystic Eyes of Death Perception', 'Mystic Eyes of Distortion', 'Māra-Pāpīyās', 'Natural Body', 'Natural Demon', 'Nature of a Loyal Soldier', 'Nature of a Rebellious Spirit', 'Nega-Genesis', 'Nega-Saver', 'Nightless Charisma', 'Ninjutsu', 'Now is a Wall of Fragile Snowflakes', 'Numeral of the Saint', 'Numerology', 'Nurse of Steel', 'Oath of Protection', 'Oblivion Correction', 'Omen of the Hegemon-King', 'One Cloaked in Death', 'Oni of Ooe, Riot', "Oni's Head", 'Oni-kind Demon', 'Overload', 'Overload Revised', 'Perfect Form', 'Performance Continuation', 'Perseverance in Old Age', 'Persistence', 'Pheromone', "Philosopher's Stone", 'Pioneer of the Stars', 'Planning', 'Poisoned Blade', 'Poisoned Meal', 'Popcorn Blizzard', 'Potnia Theron', 'Powerless Shell', 'Prayer for the Long Journey', 'Prayer of Faith', "Prelati's Encouragement", 'Presence Concealment', 'Presence Concealment (Shade)', 'Presence Detection', 'Primordial Rune', 'Primordial Rune (Warrior)', 'Projection Magecraft', 'Proof of Friendship', 'Prosperous Business', 'Protection from Arrows', 'Protection from Wind', 'Protection of Andraste', 'Protection of God', 'Protection of Tathāgata', 'Protection of the Dragon God', 'Protection of the Ends of the World', 'Protection of the Faith', 'Protection of the Goddess', 'Protection of the Music God (Fake)', 'Protection of the Scales', 'Protection of the Spirits', 'Protection of the Sun God', 'Protection of the Underworld', 'Pseudonym: Octopus from Another Planet', 'Queen of Victory', "Queen's Body", "Queen's Discipline", 'Quick Draw', "Rear Guard's Pride", 'Reduced Earth', 'Reinstatement of the Radiant Holy Light', "Repulsion For One's Kin", 'Residual Sense of Pain', 'Resistance of Gwalior', 'Resolute Devotion', 'Restraint', 'Revelation', 'Revered Warrior', 'Riding', 'Roar of the War God', 'Robust Health', 'Rosy-cheeked Youth', 'Rosy-cheeked Youth (Lightning)', 'Rousing Brave', 'Ruffian', 'Rune Magecraft', 'Ruthless Warrior of the Turbulent Times', 'Sadistic Charisma', 'Sadistic Constitution', 'Saint', 'Saint Graph Expansion', 'Scapegoat', 'Schwipsig', 'Scourge of God', 'Scream of Fear', 'Scream of the Angel', 'Sea of Life', 'Search for the Unknown', 'Secret of Pedigree', 'Seeking the Truth of Martial Arts', 'Self-Evolution', 'Self-Field Defense', 'Self-Modification', 'Self-Preservation', 'Self-Replenishment (Mana)', 'Self-Seal', 'Self-Suggestion', 'Self-Transformation', 'Sentiments for the Beyond', 'Septem Colles', 'Serpent Bearer', 'Shamanism', 'Shapeshift', 'Shapeshift (Fire Dragon)', 'Shapeshift (Infiltration Specialization)', 'Shapeshift (Lunch)', 'Shield of Rousing Resolution', 'Shining Great Crown', 'Shining Path', 'Shinkage-ryuu', 'Sign of the Red Dragon', 'Sikera Ušum', 'Single-Mindedness', "Six Secret Teachings' Esoteric Art: Lightning Speed", 'Skillful Star', 'Snow Fairy', 'Soul of a Martyr', 'Sovereign of Magical Wands', 'Sphere Boundary', 'Sphere Boundary (Extreme)', 'Spirit Pearl', 'Sprout of the Wise King', 'Stalking', 'Star Basket (Large)', 'Star Basket (Small)', 'Star of Saber', 'Stars for the Sky', 'Steam Engine Output Increase', 'Storyteller', 'Subjugation Tactics', 'Subversive Activities', 'Succeed Phantasm', 'Suigetsu', 'Suit Up', 'Summer Galvanism', 'Supporting Bombardment', 'Supporting Bombardment XEX', 'Supporting Curse Arts', 'Supreme Mystic Code: Volumen Hydrargyrum', 'Surgical Procedure', 'Suspicious Medicine', 'Swan Mystic Code', 'Swordless Capture', 'Swordplay as Swift and Powerful as a Falcon', 'Synthetic Limbs (Mechanical Doll)', 'Tactical Body', "Tactician's Advice", "Tactician's Command", 'Tactics', 'Taoist Techniques', 'Tawrich', 'Teachings of Circe', 'Teachings of Tripitaka', "Tengu's Art of War", 'Territory Creation', 'Tesla Coil', 'The Beauty of Trouble with Women', 'The Book of Five Rings', 'The Diary of Lady Murasaki', 'The End of the Four Nights', 'The Endowed Hero', 'The Globe', "The Little Mermaid's Love", 'Throwing (Dagger)', 'Throwing/Retrieval', 'Timbre of Regality', 'Torrent of Light', 'Torture Technique', 'Tranquil Fig', 'Transfiguration', 'Transparency', 'Trap of Argalia', 'Trash & Crush', 'Treasury of Babylon', 'Triumphant Return of the Sword', 'True Name Discernment', 'Unblessed Birth', 'Uncrowned Martial Arts', 'Unifying the Nation by Force', 'Unwavering Patience', 'Unyielding Will', 'Valor', 'Vengeful Spirit Exorcism', 'Ventriloquism', 'Verse of the Great Poet', 'Veteran', 'Vigorous like the Breaking Bamboo', 'Vinayaka', 'Violation of the Warrior Code', 'Vitrification', 'Voice of Panic', 'Vow of the Holy Maiden', 'Vow to the Goddess', 'Voyage', 'Voyager of the Storm', 'Wail at the Intense Heat', 'Wail of the Falsely Living', 'Wall of Chalk Obscured in Time', "Warrior's War Cry", 'Weak Constitution', 'Weakness (Poison)', 'Wedge for the Capricious', 'Whim of the Goddess', 'White Shaft Spear', 'Wicked Enhancement', 'Wildfire', 'Will of the Daredevil Warrior', 'Wind of Romance', 'Wisdom of Divine Gift', 'Wisdom of Dún Scáith', 'Wisdom of Predicament', 'Wisdom of the Benevolent God', 'Wisdom of the Demon God', 'Wisdom of the Great God', 'Wish of the Child of God', 'Witch Trial', 'Wizard of Menlo Park', 'Workings of the Underworld God', 'Yin-Yang', 'Zarich', '∞ Black Bean Paste'];
$( "#infoHubCSSearch, #infoHubPSSearch" ).autocomplete({
  source: availableSkills,
  select: function( event, ui ) {
    var autocompleteId = $(this).attr('id');
    getSkillInfoFromWiki(ui.item.value, autocompleteId.substring(0, 9) + 'Wiki');
  }
});



/*
 * Similar servants tab accordion style
 */
 // fill vertial space



$(function() {
    $( "#accordion" ).accordion({
      heightStyle: "fill"
    });
    $( "#accordion" ).accordion({
      collapsible: true
    });
});
//$( "#accordion" ).accordion();
$( "#accordion" ).accordion( "refresh" );





/*
 * Enable jquery-ui components + default settings
 */

$( "#button" ).button();
$( "#button-icon" ).button({
  icon: "ui-icon-gear",
  showLabel: false
});

$( "#radioset" ).buttonset();

$( "#controlgroup" ).controlgroup();

$( "#tabsForm" ).tabs();
$( "#tabsRef" ).tabs();

$( "#dialog" ).dialog({
  autoOpen: false,
  width: 400,
  buttons: [
    {
      text: "Ok",
      click: function() {
        $( this ).dialog( "close" );
      }
    },
    {
      text: "Cancel",
      click: function() {
        $( this ).dialog( "close" );
      }
    }
  ]
});

// Link to open the dialog
$( "#dialog-link" ).click(function( event ) {
  $( "#dialog" ).dialog( "open" );
  event.preventDefault();
});

$( "#datepicker" ).datepicker({
  inline: true
});

$( "#slider" ).slider({
  range: true,
  values: [ 17, 67 ]
});

$( "#progressbar" ).progressbar({
  value: 20
});

$( "#spinner" ).spinner();

$( "#menu" ).menu();

$( "#tooltip" ).tooltip();

$( "#selectmenu" ).selectmenu();

// Hover states on the static widgets
$( "#dialog-link, #icons li" ).hover(
  function() {
    $( this ).addClass( "ui-state-hover" );
  },
  function() {
    $( this ).removeClass( "ui-state-hover" );
  }
);
    

