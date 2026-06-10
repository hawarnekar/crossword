/* ============================================================
 * Word & Hint Database — one database, multiple subjects
 * ------------------------------------------------------------
 * Each raw list below holds the words of ONE subject; the lists
 * are merged into WORD_DB at the bottom of this file with their
 * subject name attached.
 *
 * Schema of a raw entry: [WORD, topic, subtopic, hints]
 *   hints: array of [difficultyLevel, hintText]
 *   difficultyLevel: 1 = Easy, 2 = Medium, 3 = Hard
 * A word may carry MORE THAN ONE hint at the same level —
 * the generator picks among them, so repeated rounds show
 * different clues for the same answer.
 * Words: A–Z only, max length 15 (grid is 15×15).
 * ============================================================ */

/* ============================================================
 * SUBJECT: Class 10 - Science (NCERT)
 * ============================================================ */
const WORD_DB_SCIENCE = [

  /* ---------- CHEMISTRY · Chemical Reactions and Equations ---------- */
  ["CATALYST", "Chemistry", "Chemical Reactions and Equations", [
    [1, "Substance that speeds up a reaction without being consumed"],
    [1, "Manganese dioxide acts as one when KClO3 is heated"],
    [2, "It alters the rate of a reaction but appears unchanged at the end"],
    [3, "Finely divided nickel plays this role in hydrogenation of oils"]]],
  ["COMBUSTION", "Chemistry", "Chemical Reactions and Equations", [
    [1, "Burning of a fuel in oxygen"],
    [2, "Exothermic oxidation reaction that produces heat and light"],
    [3, "Respiration is often called the 'slow' form of this process"]]],
  ["CORROSION", "Chemistry", "Chemical Reactions and Equations", [
    [1, "Rusting of iron is a common example of this"],
    [2, "Slow eating away of metals by air, moisture or acids"],
    [3, "The green coat on copper and black coat on silver result from it"]]],
  ["RANCIDITY", "Chemistry", "Chemical Reactions and Equations", [
    [1, "Spoiling of oily food, giving bad smell and taste"],
    [2, "Oxidation of fats and oils in food causes this"],
    [3, "Flushing chip packets with nitrogen prevents this condition"]]],
  ["PRECIPITATE", "Chemistry", "Chemical Reactions and Equations", [
    [1, "Insoluble solid formed when two solutions react"],
    [2, "White barium sulphate settling out of solution is one"],
    [3, "Its formation makes a double displacement reaction visible"]]],
  ["OXIDATION", "Chemistry", "Chemical Reactions and Equations", [
    [1, "Gain of oxygen or loss of hydrogen by a substance"],
    [2, "Copper turning black on heating undergoes this change"],
    [3, "In a redox pair, it is the half where electrons are lost"]]],
  ["EXOTHERMIC", "Chemistry", "Chemical Reactions and Equations", [
    [1, "Type of reaction that releases heat"],
    [2, "Adding quicklime to water is this kind of reaction"],
    [3, "Opposite of the reaction type that absorbs energy from surroundings"]]],
  ["DECOMPOSITION", "Chemistry", "Chemical Reactions and Equations", [
    [1, "Reaction in which one compound breaks into simpler substances"],
    [2, "Heating ferrous sulphate crystals causes this type of reaction"],
    [3, "Silver chloride in sunlight shows the 'photo' variety of it"]]],

  /* ---------- CHEMISTRY · Acids, Bases and Salts ---------- */
  ["LITMUS", "Chemistry", "Acids, Bases and Salts", [
    [1, "Natural indicator extracted from lichen"],
    [2, "Purple dye that turns red in acid and blue in base"],
    [3, "This indicator stays purple in distilled water"]]],
  ["ALKALI", "Chemistry", "Acids, Bases and Salts", [
    [1, "A base that dissolves in water"],
    [2, "Sodium hydroxide is a strong example of this"],
    [3, "Soapy-feeling, bitter substance releasing OH- ions in water"]]],
  ["INDICATOR", "Chemistry", "Acids, Bases and Salts", [
    [1, "Substance that shows whether a solution is acidic or basic"],
    [2, "Turmeric and litmus serve this purpose in the lab"],
    [3, "Onion and vanilla are the 'olfactory' kind of this"]]],
  ["PHENOLPHTHALEIN", "Chemistry", "Acids, Bases and Salts", [
    [1, "Synthetic indicator that turns pink in basic solution"],
    [2, "Colourless in acid, pink in base — used in titrations"],
    [3, "Fifteen-letter indicator that loses its pink colour as acid is added"]]],
  ["GYPSUM", "Chemistry", "Acids, Bases and Salts", [
    [1, "Calcium sulphate dihydrate, used to make Plaster of Paris"],
    [2, "Heating it at 373 K drives off water to give Plaster of Paris"],
    [3, "Salt with two molecules of water of crystallisation per CaSO4"]]],
  ["BRINE", "Chemistry", "Acids, Bases and Salts", [
    [1, "Concentrated solution of common salt in water"],
    [2, "Its electrolysis gives NaOH, chlorine and hydrogen"],
    [3, "Starting solution of the chlor-alkali process"]]],
  ["ANTACID", "Chemistry", "Acids, Bases and Salts", [
    [1, "Medicine taken to relieve acidity in the stomach"],
    [2, "Milk of magnesia acts as one by neutralising excess HCl"],
    [3, "A mild base swallowed to neutralise gastric juice"]]],
  ["CRYSTALLISATION", "Chemistry", "Acids, Bases and Salts", [
    [1, "Process of obtaining pure crystals from a solution"],
    [2, "Water of ____ gives blue colour to copper sulphate crystals"],
    [3, "Fifteen-letter separation technique; its 'water' escapes on heating"]]],

  /* ---------- CHEMISTRY · Metals and Non-metals ---------- */
  ["ALLOY", "Chemistry", "Metals and Non-metals", [
    [1, "Homogeneous mixture of two or more metals"],
    [2, "Brass and bronze are examples of this"],
    [3, "Mixing iron with carbon and chromium makes a stainless one"]]],
  ["AMALGAM", "Chemistry", "Metals and Non-metals", [
    [1, "An alloy that contains mercury"],
    [2, "Dentists once filled cavities with this mercury alloy"],
    [3, "Special name for an alloy where one component is liquid at room temperature"]]],
  ["ANODE", "Chemistry", "Metals and Non-metals", [
    [1, "Positive electrode in electrolytic refining"],
    [2, "The impure metal block is made this during refining"],
    [3, "Electrode below which 'mud' of impurities collects"]]],
  ["CATHODE", "Chemistry", "Metals and Non-metals", [
    [1, "Negative electrode in an electrolytic cell"],
    [2, "Pure metal deposits on this electrode during refining"],
    [3, "Thin strip of pure copper plays this role in refining copper"]]],
  ["DUCTILE", "Chemistry", "Metals and Non-metals", [
    [1, "Property of metals to be drawn into thin wires"],
    [2, "Gold is so much this that 100 mg can form a 2 km wire"],
    [3, "Property exploited in making electrical transmission lines"]]],
  ["MALLEABLE", "Chemistry", "Metals and Non-metals", [
    [1, "Property of metals to be beaten into thin sheets"],
    [2, "Silver foil on sweets exists because silver is highly this"],
    [3, "Hammering tests this property; sulphur fails the test"]]],
  ["SONOROUS", "Chemistry", "Metals and Non-metals", [
    [1, "Property of metals to produce ringing sound when struck"],
    [2, "School bells work because metals are this"],
    [3, "Property that makes metals suitable for musical instrument strings"]]],
  ["GANGUE", "Chemistry", "Metals and Non-metals", [
    [1, "Earthy impurities mixed with a mineral ore"],
    [2, "Removed during concentration of the ore"],
    [3, "Sand and rocky matter to be separated before extraction"]]],
  ["AQUAREGIA", "Chemistry", "Metals and Non-metals", [
    [1, "Royal water that dissolves gold (two words, joined)"],
    [2, "Mixture of conc. HCl and HNO3 in 3:1 ratio (two words, joined)"],
    [3, "Fuming liquid that dissolves even platinum (two words, joined)"]]],

  /* ---------- CHEMISTRY · Carbon and its Compounds ---------- */
  ["METHANE", "Chemistry", "Carbon and its Compounds", [
    [1, "Simplest hydrocarbon, CH4"],
    [2, "Major component of biogas and CNG"],
    [3, "First member of the alkane homologous series"]]],
  ["ETHANOL", "Chemistry", "Carbon and its Compounds", [
    [1, "Alcohol present in alcoholic drinks, C2H5OH"],
    [2, "Reacts with sodium to release hydrogen gas"],
    [3, "Heating it at 443 K with conc. H2SO4 gives ethene"]]],
  ["CATENATION", "Chemistry", "Carbon and its Compounds", [
    [1, "Carbon's ability to form bonds with other carbon atoms"],
    [2, "Self-linking property that gives carbon countless compounds"],
    [3, "Property carbon shows strongly but silicon shows weakly"]]],
  ["ISOMERS", "Chemistry", "Carbon and its Compounds", [
    [1, "Compounds with same formula but different structures"],
    [2, "Butane exists as two of these"],
    [3, "They share a molecular formula yet differ in properties"]]],
  ["GRAPHITE", "Chemistry", "Carbon and its Compounds", [
    [1, "Soft form of carbon used in pencil leads"],
    [2, "Carbon allotrope that conducts electricity"],
    [3, "Allotrope with hexagonal layers that slide over each other"]]],
  ["FULLERENE", "Chemistry", "Carbon and its Compounds", [
    [1, "Carbon allotrope shaped like a football, C60"],
    [2, "Cage-like carbon allotrope discovered after diamond and graphite"],
    [3, "Allotrope named after architect Buckminster Fuller"]]],
  ["MICELLE", "Chemistry", "Carbon and its Compounds", [
    [1, "Spherical cluster formed by soap molecules in water"],
    [2, "Structure whose hydrophobic tails trap oily dirt inside"],
    [3, "Why soap solution scatters light — these structures form a colloid"]]],
  ["ESTER", "Chemistry", "Carbon and its Compounds", [
    [1, "Sweet-smelling compound formed from acid and alcohol"],
    [2, "Used in making perfumes and flavouring agents"],
    [3, "Product of esterification; alkali splits it back during saponification"]]],
  ["SAPONIFICATION", "Chemistry", "Carbon and its Compounds", [
    [1, "Reaction used to make soap from fat and alkali"],
    [2, "Heating an ester with NaOH causes this reaction"],
    [3, "Fourteen-letter reverse of esterification, industrially very useful"]]],

  /* ---------- BIOLOGY · Life Processes ---------- */
  ["PHOTOSYNTHESIS", "Biology", "Life Processes", [
    [1, "Process by which green plants make their own food"],
    [2, "Converts CO2 and water into glucose using sunlight"],
    [3, "Process whose 'light' events occur in chlorophyll-bearing organelles"]]],
  ["STOMATA", "Biology", "Life Processes", [
    [1, "Tiny pores on leaves for gas exchange"],
    [2, "Guard cells control the opening and closing of these"],
    [3, "Massive water loss would occur if these pores never closed"]]],
  ["CHLOROPHYLL", "Biology", "Life Processes", [
    [1, "Green pigment in plant leaves"],
    [2, "Pigment that traps light energy for photosynthesis"],
    [3, "Magnesium-containing molecule housed in chloroplasts"]]],
  ["ALVEOLI", "Biology", "Life Processes", [
    [1, "Tiny air sacs in the lungs"],
    [2, "Balloon-like structures where blood exchanges gases"],
    [3, "Their combined surface area is nearly 80 square metres"]]],
  ["NEPHRON", "Biology", "Life Processes", [
    [1, "Basic filtration unit of the kidney"],
    [2, "Each kidney packs about a million of these"],
    [3, "Structure containing the Bowman's capsule and glomerulus"]]],
  ["HAEMOGLOBIN", "Biology", "Life Processes", [
    [1, "Red pigment in blood that carries oxygen"],
    [2, "Iron-containing respiratory pigment in red blood cells"],
    [3, "Its deficiency in blood causes anaemia"]]],
  ["PERISTALSIS", "Biology", "Life Processes", [
    [1, "Wave-like movement of food along the alimentary canal"],
    [2, "Rhythmic muscular contractions that push food down the gut"],
    [3, "This movement happens even if you eat while standing on your head"]]],
  ["XYLEM", "Biology", "Life Processes", [
    [1, "Plant tissue that carries water from roots to leaves"],
    [2, "Vascular tissue whose flow is one-way, driven by transpiration pull"],
    [3, "Conducting tissue made of dead cells at maturity"]]],
  ["PHLOEM", "Biology", "Life Processes", [
    [1, "Plant tissue that transports food from leaves"],
    [2, "Translocation of sucrose happens through this tissue"],
    [3, "Living vascular tissue that moves material up and down using ATP"]]],

  /* ---------- BIOLOGY · Control and Coordination ---------- */
  ["NEURON", "Biology", "Control and Coordination", [
    [1, "Structural and functional unit of the nervous system"],
    [1, "Nerve cell that carries electrical impulses"],
    [2, "Cell with dendrites, a cell body and an axon"],
    [3, "Longest cell in the human body"]]],
  ["SYNAPSE", "Biology", "Control and Coordination", [
    [1, "Gap between two nerve cells"],
    [2, "Junction where chemical messengers cross between neurons"],
    [3, "Point where an electrical impulse becomes a chemical signal"]]],
  ["DENDRITE", "Biology", "Control and Coordination", [
    [1, "Branch of a neuron that receives signals"],
    [2, "Tree-like nerve fibre where information is first acquired"],
    [3, "Impulse travels from this branch toward the cell body, never away"]]],
  ["CEREBELLUM", "Biology", "Control and Coordination", [
    [1, "Brain part that maintains balance and posture"],
    [2, "Hind-brain region that makes cycling and walking smooth"],
    [3, "Damage here makes precise actions like picking up a pencil hard"]]],
  ["REFLEX", "Biology", "Control and Coordination", [
    [1, "Sudden automatic response to a stimulus"],
    [2, "Pulling your hand from a flame is this type of action"],
    [3, "Its 'arc' connects sensory input to muscle via the spinal cord"]]],
  ["AUXIN", "Biology", "Control and Coordination", [
    [1, "Plant hormone that promotes growth of the stem tip"],
    [2, "Hormone that makes shoots bend towards light"],
    [3, "It accumulates on the shady side, making cells there grow longer"]]],
  ["INSULIN", "Biology", "Control and Coordination", [
    [1, "Hormone that lowers blood sugar"],
    [2, "Pancreatic hormone; its shortage causes diabetes"],
    [3, "Hormone injected by some patients before meals"]]],
  ["ADRENALINE", "Biology", "Control and Coordination", [
    [1, "Hormone released during fear or excitement"],
    [2, "The fight-or-flight hormone from glands atop the kidneys"],
    [3, "It speeds the heart and diverts blood to skeletal muscles"]]],
  ["THYROXINE", "Biology", "Control and Coordination", [
    [1, "Hormone made by the thyroid gland"],
    [2, "Iodine is needed to synthesise this hormone"],
    [3, "Its deficiency causes goitre — a swollen neck"]]],

  /* ---------- BIOLOGY · How do Organisms Reproduce ---------- */
  ["BUDDING", "Biology", "How do Organisms Reproduce", [
    [1, "Asexual reproduction seen in yeast and hydra"],
    [2, "A small outgrowth detaches to become a new individual"],
    [3, "Mode of reproduction where the offspring may stay attached and form chains"]]],
  ["FISSION", "Biology", "How do Organisms Reproduce", [
    [1, "Splitting of a single-celled organism into new cells"],
    [2, "Amoeba reproduces by the binary form of this"],
    [3, "Plasmodium performs the 'multiple' version of this process"]]],
  ["SPORE", "Biology", "How do Organisms Reproduce", [
    [1, "Tiny reproductive ball seen in bread mould"],
    [2, "Thick-walled unit in sporangia that grows into a new individual"],
    [3, "Rhizopus spreads by releasing these from blob-like structures"]]],
  ["POLLINATION", "Biology", "How do Organisms Reproduce", [
    [1, "Transfer of pollen from anther to stigma"],
    [2, "Bees, wind and water help plants achieve this"],
    [3, "'Cross' and 'self' are its two types"]]],
  ["ZYGOTE", "Biology", "How do Organisms Reproduce", [
    [1, "Cell formed when male and female gametes fuse"],
    [2, "Single cell from which the embryo develops"],
    [3, "First diploid cell of a new sexually-produced organism"]]],
  ["STAMEN", "Biology", "How do Organisms Reproduce", [
    [1, "Male reproductive part of a flower"],
    [2, "Flower organ made of anther and filament"],
    [3, "Its tip produces the yellowish powder that brushes onto insects"]]],
  ["ANTHER", "Biology", "How do Organisms Reproduce", [
    [1, "Part of the stamen that contains pollen"],
    [2, "Swollen tip of the flower's male organ"],
    [3, "Pollen grains begin their journey to the stigma from here"]]],
  ["STIGMA", "Biology", "How do Organisms Reproduce", [
    [1, "Sticky tip of the carpel that receives pollen"],
    [2, "Landing pad for pollen at the top of the style"],
    [3, "Germinating pollen grows a tube from this surface to the ovary"]]],
  ["PLACENTA", "Biology", "How do Organisms Reproduce", [
    [1, "Disc-like tissue connecting embryo to the mother"],
    [2, "Organ through which the embryo gets nutrition in the uterus"],
    [3, "Villi on this tissue enlarge the area for glucose and oxygen transfer"]]],

  /* ---------- BIOLOGY · Heredity and Evolution ---------- */
  ["GENE", "Biology", "Heredity and Evolution", [
    [1, "Unit of inheritance on a chromosome"],
    [2, "DNA segment that codes for one protein"],
    [3, "Mendel called it a 'factor' before this word existed"]]],
  ["MENDEL", "Biology", "Heredity and Evolution", [
    [1, "Monk who discovered the laws of inheritance"],
    [2, "He experimented on garden pea plants"],
    [3, "His 9:3:3:1 ratio came from a dihybrid cross"]]],
  ["CHROMOSOME", "Biology", "Heredity and Evolution", [
    [1, "Thread-like structure of DNA in the nucleus"],
    [2, "Humans have 23 pairs of these"],
    [3, "The X and Y ones decide the sex of a child"]]],
  ["FOSSIL", "Biology", "Heredity and Evolution", [
    [1, "Preserved remains of ancient organisms"],
    [2, "Ammonite and Archaeopteryx are famous examples"],
    [3, "Deeper layers of earth yield the older ones"]]],
  ["EVOLUTION", "Biology", "Heredity and Evolution", [
    [1, "Gradual change in living organisms over generations"],
    [2, "Darwin explained it through natural selection"],
    [3, "Process generating diversity; not a ladder of 'progress'"]]],
  ["GENOTYPE", "Biology", "Heredity and Evolution", [
    [1, "Genetic makeup of an organism, like Tt or TT"],
    [2, "The pair of letters geneticists write for a trait"],
    [3, "Two organisms can look alike yet differ in this"]]],
  ["PHENOTYPE", "Biology", "Heredity and Evolution", [
    [1, "Observable characteristic of an organism"],
    [2, "Tallness you can actually see in a pea plant"],
    [3, "In Mendel's F2, this showed a 3:1 ratio"]]],
  ["DOMINANT", "Biology", "Heredity and Evolution", [
    [1, "Trait that shows up even with one copy of the gene"],
    [2, "Tallness in Mendel's peas was this kind of trait"],
    [3, "Trait expressed in every F1 plant of a monohybrid cross"]]],
  ["RECESSIVE", "Biology", "Heredity and Evolution", [
    [1, "Trait masked in the presence of a dominant one"],
    [2, "Shortness in Mendel's pea plants was this"],
    [3, "Trait that reappears in one quarter of the F2 generation"]]],

  /* ---------- PHYSICS · Light: Reflection and Refraction ---------- */
  ["MIRROR", "Physics", "Light: Reflection and Refraction", [
    [1, "Smooth surface that reflects light to form images"],
    [1, "You see your face in it every morning"],
    [2, "The concave kind is used by dentists and in torches"],
    [3, "Spherical kinds follow the relation 1/v + 1/u = 1/f"]]],
  ["LENS", "Physics", "Light: Reflection and Refraction", [
    [1, "Transparent material bound by curved surfaces that bends light"],
    [2, "Spectacles correct vision using this optical device"],
    [3, "Its power in dioptres is the reciprocal of focal length in metres"]]],
  ["FOCUS", "Physics", "Light: Reflection and Refraction", [
    [1, "Point where parallel rays meet after reflection"],
    [2, "Point midway between pole and centre of curvature"],
    [3, "A burning paper experiment locates this point of a convex lens"]]],
  ["REFRACTION", "Physics", "Light: Reflection and Refraction", [
    [1, "Bending of light as it passes between media"],
    [2, "Makes a pencil in a glass of water appear broken"],
    [3, "Snell's law governs this phenomenon"]]],
  ["REFLECTION", "Physics", "Light: Reflection and Refraction", [
    [1, "Bouncing back of light from a surface"],
    [2, "Phenomenon whose two angles are always equal"],
    [3, "Laws of this hold for plane and spherical surfaces alike"]]],
  ["CONCAVE", "Physics", "Light: Reflection and Refraction", [
    [1, "Mirror type curved inwards like a spoon's bowl"],
    [2, "Mirror used in car headlights to get parallel beams"],
    [3, "The lens variety of this is always diverging"]]],
  ["CONVEX", "Physics", "Light: Reflection and Refraction", [
    [1, "Mirror type that bulges outwards"],
    [2, "Rear-view mirrors are this type for a wider field of view"],
    [3, "Mirror that always forms erect, diminished, virtual images"]]],
  ["PRISM", "Physics", "Light: Reflection and Refraction", [
    [1, "Triangular glass that splits white light into colours"],
    [2, "Newton used two of these to recombine the spectrum"],
    [3, "Light deviates through its 'angle of deviation' in this solid"]]],
  ["MAGNIFICATION", "Physics", "Light: Reflection and Refraction", [
    [1, "Ratio of image height to object height"],
    [2, "It is negative for real images of mirrors"],
    [3, "For a mirror it equals -v/u"]]],

  /* ---------- PHYSICS · Human Eye and Colourful World ---------- */
  ["RETINA", "Physics", "Human Eye and Colourful World", [
    [1, "Light-sensitive screen at the back of the eye"],
    [2, "Layer with rods and cones where the image forms"],
    [3, "The eye lens must keep the image exactly on this layer"]]],
  ["CORNEA", "Physics", "Human Eye and Colourful World", [
    [1, "Transparent front bulge of the eyeball"],
    [2, "Most refraction of light entering the eye happens here"],
    [3, "The membrane people donate after death to cure blindness"]]],
  ["IRIS", "Physics", "Human Eye and Colourful World", [
    [1, "Coloured muscular diaphragm of the eye"],
    [2, "It controls the size of the pupil"],
    [3, "Dark muscular curtain behind the cornea that gives eyes their colour"]]],
  ["PUPIL", "Physics", "Human Eye and Colourful World", [
    [1, "Small opening that lets light into the eye"],
    [2, "It shrinks in bright light and widens in the dark"],
    [3, "The black hole in the centre regulated by the iris"]]],
  ["MYOPIA", "Physics", "Human Eye and Colourful World", [
    [1, "Defect where nearby objects are clear but distant ones blur"],
    [2, "Near-sightedness, corrected with a concave lens"],
    [3, "Defect where the image forms in front of the retina"]]],
  ["HYPERMETROPIA", "Physics", "Human Eye and Colourful World", [
    [1, "Far-sightedness — distant clear, nearby blurred"],
    [2, "Eye defect corrected using a convex lens"],
    [3, "Defect where the near point shifts beyond 25 cm"]]],
  ["CATARACT", "Physics", "Human Eye and Colourful World", [
    [1, "Eye condition where the lens becomes cloudy"],
    [2, "Milky, opaque eye lens causing vision loss, fixed by surgery"],
    [3, "Common age-related condition; the opaque lens is replaced"]]],
  ["DISPERSION", "Physics", "Human Eye and Colourful World", [
    [1, "Splitting of white light into seven colours"],
    [2, "A prism shows this; raindrops do it to make rainbows"],
    [3, "Happens because each colour bends through a different angle"]]],
  ["TYNDALL", "Physics", "Human Eye and Colourful World", [
    [1, "Effect that makes a light beam visible in a smoky room"],
    [2, "Scattering of light by colloidal particles bears his name"],
    [3, "This effect lets you see sunbeams streaming through a forest canopy"]]],

  /* ---------- PHYSICS · Electricity ---------- */
  ["AMPERE", "Physics", "Electricity", [
    [1, "SI unit of electric current"],
    [2, "One coulomb flowing per second equals one of these"],
    [3, "Unit named after a French scientist, measured by an ammeter"]]],
  ["VOLT", "Physics", "Electricity", [
    [1, "SI unit of potential difference"],
    [2, "One joule of work per coulomb of charge"],
    [3, "Unit honouring the inventor of the first electric cell"]]],
  ["RESISTANCE", "Physics", "Electricity", [
    [1, "Property of a conductor that opposes current flow"],
    [2, "Measured in ohms; it makes wires heat up"],
    [3, "It doubles when a wire's length doubles at fixed thickness"]]],
  ["CURRENT", "Physics", "Electricity", [
    [1, "Flow of electric charge through a conductor"],
    [2, "Conventionally it flows opposite to the electrons"],
    [3, "Rate of flow of charge: I = Q/t"]]],
  ["FUSE", "Physics", "Electricity", [
    [1, "Safety wire that melts when current is too high"],
    [2, "Protective device with a low melting point alloy"],
    [3, "Sacrificial component placed in series with the live wire"]]],
  ["RHEOSTAT", "Physics", "Electricity", [
    [1, "Device used to change current in a circuit"],
    [2, "A variable resistance used in lab circuits"],
    [3, "Component that lets you dim a bulb without switching it off"]]],
  ["COULOMB", "Physics", "Electricity", [
    [1, "SI unit of electric charge"],
    [2, "Charge carried by about six quintillion electrons"],
    [3, "One ampere flowing for one second transfers this much charge"]]],
  ["AMMETER", "Physics", "Electricity", [
    [1, "Instrument that measures electric current"],
    [2, "Always connected in series in a circuit"],
    [3, "Ideal one has zero resistance"]]],
  ["NICHROME", "Physics", "Electricity", [
    [1, "Alloy used in heating elements of irons and heaters"],
    [2, "Nickel-chromium alloy with high resistivity"],
    [3, "It glows but doesn't melt — perfect for electric heaters"]]],

  /* ---------- PHYSICS · Magnetic Effects of Electric Current ---------- */
  ["SOLENOID", "Physics", "Magnetic Effects of Electric Current", [
    [1, "Coil of many turns of insulated wire shaped like a cylinder"],
    [2, "Current through it produces a field like a bar magnet's"],
    [3, "The field inside this coil is uniform and straight"]]],
  ["ELECTROMAGNET", "Physics", "Magnetic Effects of Electric Current", [
    [1, "Magnet made by passing current through a coil with iron core"],
    [2, "Temporary magnet used in cranes to lift scrap iron"],
    [3, "Soft iron inside a solenoid becomes this while current flows"]]],
  ["COMPASS", "Physics", "Magnetic Effects of Electric Current", [
    [1, "Small magnetic needle that points north-south"],
    [2, "Its deflection near a wire revealed magnetism of current"],
    [3, "Tool used to trace magnetic field lines around a bar magnet"]]],
  ["FLEMING", "Physics", "Magnetic Effects of Electric Current", [
    [1, "Scientist whose left-hand rule gives direction of force"],
    [2, "His right-hand rule applies to generators"],
    [3, "Thumb, forefinger and middle finger rules carry his name"]]],
  ["GENERATOR", "Physics", "Magnetic Effects of Electric Current", [
    [1, "Machine that converts mechanical energy to electricity"],
    [2, "Works on the principle of electromagnetic induction"],
    [3, "Slip rings in this device produce alternating current"]]],
  ["ARMATURE", "Physics", "Magnetic Effects of Electric Current", [
    [1, "Rotating coil inside a motor or generator"],
    [2, "Coil wound on a soft iron core that spins in the field"],
    [3, "The part of a motor on which the magnetic force acts"]]],
  ["COMMUTATOR", "Physics", "Magnetic Effects of Electric Current", [
    [1, "Split ring that reverses current direction in a motor"],
    [2, "Device that keeps a DC motor's coil rotating one way"],
    [3, "Without it, a motor coil would just oscillate back and forth"]]],
  ["GALVANOMETER", "Physics", "Magnetic Effects of Electric Current", [
    [1, "Instrument that detects small currents in a circuit"],
    [2, "Its needle deflects to show induced current in experiments"],
    [3, "Shows zero at centre scale and deflects either side of it"]]],

  /* ---------- ENVIRONMENT · Our Environment ---------- */
  ["ECOSYSTEM", "Environment", "Our Environment", [
    [1, "All living and non-living things interacting in an area"],
    [2, "A pond or a forest is a complete example of one"],
    [3, "Its biotic and abiotic components exchange matter and energy"]]],
  ["DECOMPOSER", "Environment", "Our Environment", [
    [1, "Organism that breaks down dead plants and animals"],
    [2, "Bacteria and fungi play this role in nature"],
    [3, "Nature's recycler that returns nutrients to the soil"]]],
  ["HERBIVORE", "Environment", "Our Environment", [
    [1, "Animal that eats only plants"],
    [2, "Primary consumer in a food chain"],
    [3, "Occupies the second trophic level"]]],
  ["CARNIVORE", "Environment", "Our Environment", [
    [1, "Animal that eats other animals"],
    [2, "Lion and tiger belong to this group"],
    [3, "Secondary or tertiary consumer in a food chain"]]],
  ["OZONE", "Environment", "Our Environment", [
    [1, "Gas layer that shields Earth from ultraviolet rays"],
    [1, "Molecule made of three oxygen atoms"],
    [2, "CFCs from refrigerators damage this protective layer"],
    [3, "Its 'hole' over Antarctica alarmed the world in the 1980s"]]],
  ["PRODUCER", "Environment", "Our Environment", [
    [1, "Organism that makes its own food, like green plants"],
    [2, "First trophic level of every food chain"],
    [3, "Autotroph that fixes the sun's energy for the whole chain"]]],
  ["TROPHIC", "Environment", "Our Environment", [
    [1, "Word for each feeding level in a food chain"],
    [2, "Only 10% of energy passes from one such level to the next"],
    [3, "____ level: a food chain rarely has more than four"]]],
  ["BIODEGRADABLE", "Environment", "Our Environment", [
    [1, "Waste that microbes can break down naturally"],
    [2, "Vegetable peels are this type of waste; plastics are not"],
    [3, "Thirteen-letter word for substances enzymes can digest over time"]]],

  /* ---------- ENVIRONMENT · Sources of Energy ---------- */
  ["BIOGAS", "Environment", "Sources of Energy", [
    [1, "Fuel gas made from cow dung and plant waste"],
    [2, "Methane-rich gas produced in a dung-fed plant"],
    [3, "Fuel whose by-product slurry is an excellent manure"]]],
  ["TURBINE", "Environment", "Sources of Energy", [
    [1, "Wheel with blades turned by water, steam or wind"],
    [2, "Rotating machine that drives the generator in power plants"],
    [3, "Falling water from a dam spins this to make electricity"]]],
  ["WINDMILL", "Environment", "Sources of Energy", [
    [1, "Tower with rotating blades that harnesses moving air"],
    [2, "Many of these together form an energy 'farm'"],
    [3, "Works only when air speed is above 15 km/h"]]],
  ["GEOTHERMAL", "Environment", "Sources of Energy", [
    [1, "Energy obtained from heat inside the Earth"],
    [2, "Hot springs are a natural sign of this energy source"],
    [3, "Molten rocks pushed up into hot spots make this power possible"]]],
  ["URANIUM", "Environment", "Sources of Energy", [
    [1, "Heavy element used as fuel in nuclear reactors"],
    [2, "Its nucleus splits to release enormous energy"],
    [3, "Fuel whose fission of one atom releases ten million times more energy than burning carbon"]]],
  ["BIOMASS", "Environment", "Sources of Energy", [
    [1, "Plant and animal waste used as fuel"],
    [2, "Wood, dung cakes and crop residue are this kind of fuel source"],
    [3, "Energy source that is renewable because crops regrow"]]],
  ["PETROLEUM", "Environment", "Sources of Energy", [
    [1, "Dark liquid fossil fuel drilled from underground"],
    [2, "Crude oil refined into petrol, diesel and LPG"],
    [3, "Fossil fuel formed from sea organisms buried for millions of years"]]],
  ["ANEMOMETER", "Environment", "Sources of Energy", [
    [1, "Instrument that measures wind speed"],
    [2, "Spinning cups device installed at wind farms"],
    [3, "Tells engineers whether a site is windy enough for turbines"]]],
];

/* ============================================================
 * SUBJECT: Class 10 - Social Science (NCERT)
 * ============================================================ */
const WORD_DB_SOCIAL = [

  /* ---------- HISTORY · The Rise of Nationalism in Europe ---------- */
  ["NAPOLEON", "History", "The Rise of Nationalism in Europe", [
    [1, "French emperor whose Civil Code spread across Europe"],
    [2, "His 1804 Code made all citizens equal before the law"],
    [3, "The Congress of Vienna redrew Europe after his defeat"]]],
  ["BISMARCK", "History", "The Rise of Nationalism in Europe", [
    [1, "Prussian chief minister who unified Germany"],
    [2, "Architect of German unification through three wars"],
    [3, "He used the army and bureaucracy, not parliaments, to build a nation"]]],
  ["MAZZINI", "History", "The Rise of Nationalism in Europe", [
    [1, "Italian revolutionary who founded Young Italy"],
    [2, "Genoa-born conspirator exiled for attempting revolution"],
    [3, "Metternich called him the most dangerous enemy of the social order"]]],
  ["GARIBALDI", "History", "The Rise of Nationalism in Europe", [
    [1, "Italian leader famous for his Red Shirts volunteers"],
    [2, "He marched south to liberate the Kingdom of the Two Sicilies"],
    [3, "Sailor-turned-general who handed his conquests to Victor Emmanuel II"]]],
  ["PLEBISCITE", "History", "The Rise of Nationalism in Europe", [
    [1, "Direct vote by all the people of a region on a proposal"],
    [2, "Method by which a region could accept or reject joining a nation"],
    [3, "Avignon joined France through one of these"]]],
  ["CONSERVATISM", "History", "The Rise of Nationalism in Europe", [
    [1, "Belief in preserving monarchy, church and tradition"],
    [2, "Philosophy that dominated the Congress of Vienna in 1815"],
    [3, "Ideology preferring gradual change over revolution"]]],
  ["ZOLLVEREIN", "History", "The Rise of Nationalism in Europe", [
    [1, "Customs union of German states formed in 1834"],
    [2, "Prussian-led union that abolished internal trade barriers"],
    [3, "Economic unification that came decades before the political one"]]],
  ["FRANKFURT", "History", "The Rise of Nationalism in Europe", [
    [1, "German city where the 1848 all-German parliament met"],
    [2, "Its Church of St Paul hosted the National Assembly"],
    [3, "The parliament here offered a crown the Prussian king refused"]]],

  /* ---------- HISTORY · Nationalism in India ---------- */
  ["SATYAGRAHA", "History", "Nationalism in India", [
    [1, "Gandhi's method of non-violent mass protest"],
    [2, "The power of truth — agitation without violence"],
    [3, "Gandhi tested it in South Africa before Champaran"]]],
  ["KHILAFAT", "History", "Nationalism in India", [
    [1, "Movement launched to defend the Ottoman Caliph"],
    [2, "The Ali brothers led it alongside Non-Cooperation"],
    [3, "Issue that briefly united Hindus and Muslims in 1920"]]],
  ["DANDI", "History", "Nationalism in India", [
    [1, "Coastal town where Gandhi broke the salt law"],
    [2, "Destination of the famous march from Sabarmati in 1930"],
    [3, "Gujarat town where Civil Disobedience began"]]],
  ["SWARAJ", "History", "Nationalism in India", [
    [1, "Self-rule — the central demand of the freedom movement"],
    [2, "Tilak declared it his birthright"],
    [3, "The Lahore Congress of 1929 prefixed it with 'Purna'"]]],
  ["CHAMPARAN", "History", "Nationalism in India", [
    [1, "Bihar district of Gandhi's first satyagraha in India"],
    [2, "1917 movement supporting oppressed indigo cultivators"],
    [3, "Where planters forced peasants to grow indigo on a fixed share of land"]]],
  ["ROWLATT", "History", "Nationalism in India", [
    [1, "1919 Act that allowed detention without trial"],
    [2, "The 'Black Act' that sparked a nationwide hartal"],
    [3, "Act whose protests ended in the Jallianwala Bagh tragedy"]]],
  ["BOYCOTT", "History", "Nationalism in India", [
    [1, "Refusal to buy foreign goods as a form of protest"],
    [2, "Strategy paired with swadeshi during the national movement"],
    [3, "Foreign cloth went into bonfires under this strategy"]]],
  ["HARTAL", "History", "Nationalism in India", [
    [1, "Protest by closing shops and stopping work"],
    [2, "April 1919 saw a nationwide one against the Rowlatt Act"],
    [3, "Gandhi's first all-India action took this form"]]],

  /* ---------- HISTORY · Print Culture and the Modern World ---------- */
  ["GUTENBERG", "History", "Print Culture and the Modern World", [
    [1, "Inventor of the printing press"],
    [2, "Strasbourg goldsmith whose first printed book was the Bible"],
    [3, "He modelled his press on the olive press"]]],
  ["MANUSCRIPT", "History", "Print Culture and the Modern World", [
    [1, "Book written by hand"],
    [2, "Text on palm leaf or handmade paper, copied by scribes"],
    [3, "Expensive, fragile texts that the press soon displaced"]]],
  ["VELLUM", "History", "Print Culture and the Modern World", [
    [1, "Parchment made from animal skin"],
    [2, "Luxury printing surface meant for rich buyers"],
    [3, "Material chosen when a book had to last forever"]]],
  ["CALLIGRAPHY", "History", "Print Culture and the Modern World", [
    [1, "Art of beautiful and stylised writing"],
    [2, "Skill prized in Arabic and Persian manuscripts"],
    [3, "Hand art that early printed books tried to imitate"]]],
  ["WOODBLOCK", "History", "Print Culture and the Modern World", [
    [1, "Early printing done with carved wooden blocks"],
    [2, "Printing method that travelled from China to Europe"],
    [3, "Used for textiles and playing cards before movable type"]]],
  ["CHAPBOOK", "History", "Print Culture and the Modern World", [
    [1, "Pocket-size cheap book sold by pedlars"],
    [2, "Penny literature carried about by petty chapmen"],
    [3, "Small books even the poor of England could buy"]]],
  ["CENSORSHIP", "History", "Print Culture and the Modern World", [
    [1, "Official control over what may be printed"],
    [2, "The Vernacular Press Act enabled this in colonial India"],
    [3, "The colonial answer to nationalist newspapers"]]],
  ["ALMANAC", "History", "Print Culture and the Modern World", [
    [1, "Yearly calendar of tides, weather and festivals"],
    [2, "Ritual calendar printed cheaply for common readers"],
    [3, "Battala presses of Calcutta printed plenty of these"]]],

  /* ---------- GEOGRAPHY · Resources and Development ---------- */
  ["ALLUVIAL", "Geography", "Resources and Development", [
    [1, "Fertile soil deposited by rivers"],
    [2, "Soil of the northern plains, ideal for wheat and paddy"],
    [3, "Soil type classified into khadar and bangar"]]],
  ["REGUR", "Geography", "Resources and Development", [
    [1, "Local name for black soil"],
    [2, "Soil considered ideal for growing cotton"],
    [3, "Self-ploughing soil of the Deccan trap region"]]],
  ["LATERITE", "Geography", "Resources and Development", [
    [1, "Soil formed by intense leaching under heavy rain"],
    [2, "Red soil suiting tea and cashew after treatment"],
    [3, "Its name comes from the Latin word for brick"]]],
  ["EROSION", "Geography", "Resources and Development", [
    [1, "Washing away of topsoil by wind and water"],
    [2, "Running water and wind strip fields through this process"],
    [3, "Strip cropping and shelter belts are weapons against it"]]],
  ["GULLY", "Geography", "Resources and Development", [
    [1, "Deep channel cut into soil by running water"],
    [2, "Erosion type that turns farmland into ravines"],
    [3, "The bad lands of the Chambal basin were carved this way"]]],
  ["HUMUS", "Geography", "Resources and Development", [
    [1, "Decayed organic matter that enriches soil"],
    [2, "Dark substance that makes a soil fertile"],
    [3, "Forests add it to soil; leaching strips it away"]]],
  ["FALLOW", "Geography", "Resources and Development", [
    [1, "Farmland left uncultivated to regain fertility"],
    [2, "A field resting for one or more seasons is called this"],
    [3, "Land category counted as 'current' or 'other than current'"]]],
  ["CONTOUR", "Geography", "Resources and Development", [
    [1, "Ploughing along slope lines to slow water flow"],
    [2, "____ ploughing checks erosion on hillsides"],
    [3, "Terrace farming follows these lines of equal height"]]],

  /* ---------- GEOGRAPHY · Agriculture ---------- */
  ["KHARIF", "Geography", "Agriculture", [
    [1, "Crop season that begins with the monsoon"],
    [2, "Paddy, maize and bajra belong to this season"],
    [3, "Season whose harvest comes in September-October"]]],
  ["RABI", "Geography", "Agriculture", [
    [1, "Winter crop season sown from October"],
    [2, "Wheat, gram and mustard belong to it"],
    [3, "Season helped by winter rain from western disturbances"]]],
  ["ZAID", "Geography", "Agriculture", [
    [1, "Short summer cropping season"],
    [2, "Watermelon and cucumber are its typical crops"],
    [3, "Season squeezed between the two main harvests"]]],
  ["MILLETS", "Geography", "Agriculture", [
    [1, "Coarse grains like jowar, bajra and ragi"],
    [2, "Dry-land crops of high nutritional value"],
    [3, "Ragi, rich in iron and calcium, belongs to this group"]]],
  ["JUTE", "Geography", "Agriculture", [
    [1, "Crop known as the golden fibre"],
    [2, "West Bengal crop used for gunny bags and ropes"],
    [3, "Fibre losing its market to synthetic substitutes"]]],
  ["PLANTATION", "Geography", "Agriculture", [
    [1, "Large estate growing a single commercial crop"],
    [2, "Tea and coffee are cultivated this way"],
    [3, "Farming type that bridges agriculture and industry"]]],
  ["SERICULTURE", "Geography", "Agriculture", [
    [1, "Rearing of silkworms to produce silk"],
    [2, "Activity fed by mulberry leaves"],
    [3, "Eleven-letter occupation behind India's silk"]]],
  ["HORTICULTURE", "Geography", "Agriculture", [
    [1, "Cultivation of fruits and vegetables"],
    [2, "India is the world's second largest producer of its produce"],
    [3, "Branch of farming covering mangoes to marigolds"]]],

  /* ---------- GEOGRAPHY · Minerals and Energy Resources ---------- */
  ["BAUXITE", "Geography", "Minerals and Energy Resources", [
    [1, "Ore from which aluminium is extracted"],
    [2, "Clay-like ore mined on the Amarkantak plateau"],
    [3, "Ore formed by decomposition of rocks rich in aluminium silicates"]]],
  ["HEMATITE", "Geography", "Minerals and Energy Resources", [
    [1, "Important red-coloured iron ore"],
    [2, "Most important industrial iron ore by quantity used"],
    [3, "Iron ore slightly lower in metal content than magnetite"]]],
  ["MANGANESE", "Geography", "Minerals and Energy Resources", [
    [1, "Mineral used in making steel and bleaching powder"],
    [2, "Mineral mixed with iron to make steel hard"],
    [3, "Also used for insecticides, paints and colouring glass"]]],
  ["MICA", "Geography", "Minerals and Energy Resources", [
    [1, "Mineral that splits into thin transparent sheets"],
    [2, "Mineral prized by the electrical industry for insulation"],
    [3, "The Koderma belt of Jharkhand leads its production"]]],
  ["LIGNITE", "Geography", "Minerals and Energy Resources", [
    [1, "Low grade brown coal"],
    [2, "Soft coal with high moisture, mined at Neyveli"],
    [3, "Coal variety burnt for power in Tamil Nadu"]]],
  ["ANTHRACITE", "Geography", "Minerals and Energy Resources", [
    [1, "The hardest, highest quality coal"],
    [2, "Coal with the highest carbon content"],
    [3, "Coal variety found in parts of Jammu and Kashmir"]]],
  ["LIMESTONE", "Geography", "Minerals and Energy Resources", [
    [1, "Basic raw material of the cement industry"],
    [2, "Rock composed mainly of calcium carbonate"],
    [3, "Used as flux in blast furnaces when smelting iron"]]],
  ["ALUMINIUM", "Geography", "Minerals and Energy Resources", [
    [1, "Light metal obtained from bauxite"],
    [2, "Metal combining lightness with good conductivity"],
    [3, "Metal of aircraft bodies, won from its ore by electrolysis"]]],

  /* ---------- POLITICAL SCIENCE · Power Sharing ---------- */
  ["BELGIUM", "Political Science", "Power Sharing", [
    [1, "European country sharing power between Dutch and French speakers"],
    [2, "Country whose capital is mostly French-speaking despite a Dutch majority"],
    [3, "Its 'community government' handles culture, education and language"]]],
  ["MAJORITARIAN", "Political Science", "Power Sharing", [
    [1, "Belief that the majority community should rule a country"],
    [2, "Path Sri Lanka chose in 1956, alienating its Tamil citizens"],
    [3, "Twelve-letter route that led an island nation to civil war"]]],
  ["SINHALA", "Political Science", "Power Sharing", [
    [1, "Language declared the only official one in Sri Lanka in 1956"],
    [2, "Language of Sri Lanka's majority community"],
    [3, "The Official Language Act recognising only this angered Tamils"]]],
  ["COALITION", "Political Science", "Power Sharing", [
    [1, "Government formed by an alliance of two or more parties"],
    [2, "Power sharing arrangement after no party wins a majority"],
    [3, "Belgium's governments are typically this, given its many parties"]]],
  ["PRUDENTIAL", "Political Science", "Power Sharing", [
    [1, "Reason for power sharing based on sensible outcomes"],
    [2, "Power sharing reduces conflict — that is this kind of reason"],
    [3, "The 'beneficial consequences' justification, opposed to the moral one"]]],
  ["ETHNIC", "Political Science", "Power Sharing", [
    [1, "Social division based on shared culture and common descent"],
    [2, "Kind of composition that made Brussels' power balance delicate"],
    [3, "A nation's such diversity demands power sharing, the textbook argues"]]],

  /* ---------- POLITICAL SCIENCE · Federalism ---------- */
  ["FEDERALISM", "Political Science", "Federalism", [
    [1, "System where power is divided between centre and states"],
    [2, "India's 'holding together' version of this system"],
    [3, "System with dual objectives: national unity and regional autonomy"]]],
  ["CONCURRENT", "Political Science", "Federalism", [
    [1, "List on which both Centre and states make laws"],
    [2, "Education, forests and marriage appear on this list"],
    [3, "When laws on this list clash, the Union law prevails"]]],
  ["RESIDUARY", "Political Science", "Federalism", [
    [1, "Powers over subjects not mentioned in any list"],
    [2, "Laws on computer software fall under these powers"],
    [3, "Subjects unforeseen by the Constitution makers go here — to the Centre"]]],
  ["PANCHAYAT", "Political Science", "Federalism", [
    [1, "Village level body of rural local government"],
    [2, "Gram ____ — democracy's third tier in villages"],
    [3, "Body answerable to the gram sabha of all village voters"]]],
  ["SARPANCH", "Political Science", "Federalism", [
    [1, "Elected head of a village panchayat"],
    [2, "President of the gram panchayat"],
    [3, "Office elected by the ward members, or panchs"]]],
  ["MUNICIPALITY", "Political Science", "Federalism", [
    [1, "Local government body of a town"],
    [2, "Urban counterpart of the village panchayat"],
    [3, "Its chairperson is the political head of town government"]]],
  ["UNITARY", "Political Science", "Federalism", [
    [1, "System where the central government holds all power"],
    [2, "Sri Lanka's form of government, unlike India's"],
    [3, "System whose sub-units, if any, answer wholly to the centre"]]],

  /* ---------- POLITICAL SCIENCE · Gender, Religion and Caste ---------- */
  ["FEMINIST", "Political Science", "Gender, Religion and Caste", [
    [1, "Person who believes in equal rights for women"],
    [2, "Movements demanding women's equality are called this"],
    [3, "The radical kind demands equality in personal and family life too"]]],
  ["COMMUNALISM", "Political Science", "Gender, Religion and Caste", [
    [1, "Politics built on religious identity"],
    [2, "Belief that followers of one religion form one political community"],
    [3, "Problem that grows sharp when religion enters politics exclusively"]]],
  ["CASTE", "Political Science", "Gender, Religion and Caste", [
    [1, "Hereditary social division of society"],
    [2, "Hierarchy whose extreme form was untouchability"],
    [3, "Identity around which 'vote banks' are often built"]]],
  ["SECULAR", "Political Science", "Gender, Religion and Caste", [
    [1, "Having no official state religion"],
    [2, "The Indian Constitution's stance towards religion"],
    [3, "Word in the Preamble that allows freedom to practise any faith"]]],

  /* ---------- POLITICAL SCIENCE · Political Parties ---------- */
  ["PARTISAN", "Political Science", "Political Parties", [
    [1, "Strongly committed to one party or faction"],
    [2, "Tendency to see politics from only one side"],
    [3, "A party is this by definition, says the textbook"]]],
  ["DEFECTION", "Political Science", "Political Parties", [
    [1, "Changing parties after being elected"],
    [2, "Legislators lose their seat for this under an amendment"],
    [3, "The anti-____ law was meant to end legislature horse-trading"]]],
  ["AFFIDAVIT", "Political Science", "Political Parties", [
    [1, "Sworn statement of a candidate's personal details"],
    [2, "Document declaring a candidate's property and criminal cases"],
    [3, "A Supreme Court order made every candidate file one"]]],
  ["OPPOSITION", "Political Science", "Political Parties", [
    [1, "Parties out of power that check the government"],
    [2, "Role played in the legislature by parties that lost"],
    [3, "Democracy's watchdog benches"]]],
  ["ALLIANCE", "Political Science", "Political Parties", [
    [1, "Group of parties joining hands for elections"],
    [2, "NDA and UPA are examples of this"],
    [3, "A front formed when parties contest together"]]],

  /* ---------- ECONOMICS · Development ---------- */
  ["LITERACY", "Economics", "Development", [
    [1, "Ability to read and write; its rate measures development"],
    [2, "Rate measured for the population aged seven and above"],
    [3, "Component of HDI along with health and per capita income"]]],
  ["PERCAPITA", "Economics", "Development", [
    [1, "Average income per person (two words, joined)"],
    [2, "Total income of a country divided by its population (two words, joined)"],
    [3, "The World Bank ranks countries by this income (two words, joined)"]]],
  ["SUSTAINABILITY", "Economics", "Development", [
    [1, "Using resources so future generations are not harmed"],
    [2, "The question of whether development can last"],
    [3, "Groundwater overuse is a textbook failure of this principle"]]],
  ["HDI", "Economics", "Development", [
    [1, "UN index ranking countries on health, education and income (abbr.)"],
    [2, "Measure published in the Human Development Report (abbr.)"],
    [3, "Index on which Sri Lanka beats India despite lower income (abbr.)"]]],

  /* ---------- ECONOMICS · Sectors of the Indian Economy ---------- */
  ["PRIMARY", "Economics", "Sectors of the Indian Economy", [
    [1, "Sector that produces goods by exploiting natural resources"],
    [2, "Agriculture, fishing and mining form this sector"],
    [3, "Sector also called agriculture and related sector"]]],
  ["SECONDARY", "Economics", "Sectors of the Indian Economy", [
    [1, "Manufacturing sector of the economy"],
    [2, "Sector that turns cotton into cloth and cane into sugar"],
    [3, "Also called the industrial sector"]]],
  ["TERTIARY", "Economics", "Sectors of the Indian Economy", [
    [1, "Service sector of the economy"],
    [2, "Transport, banking and teaching belong here"],
    [3, "Sector contributing the largest share of India's GDP"]]],
  ["GDP", "Economics", "Sectors of the Indian Economy", [
    [1, "Total value of final goods and services made in a year (abbr.)"],
    [2, "Measure that adds up production of all three sectors (abbr.)"],
    [3, "Its 'final goods only' rule avoids double counting (abbr.)"]]],
  ["DISGUISED", "Economics", "Sectors of the Indian Economy", [
    [1, "Hidden unemployment where extra workers add nothing"],
    [2, "Five people doing work that two could do — ____ unemployment"],
    [3, "Underemployment most common on family farms"]]],
  ["ORGANISED", "Economics", "Sectors of the Indian Economy", [
    [1, "Sector with regular jobs, security and benefits"],
    [2, "Sector where the Factories Act and job rules apply"],
    [3, "Formal sector with provident fund and paid leave"]]],
  ["MGNREGA", "Economics", "Sectors of the Indian Economy", [
    [1, "Law guaranteeing 100 days of rural work a year (abbr.)"],
    [2, "The Right to Work scheme enacted in 2005 (abbr.)"],
    [3, "Scheme that must prefer works that help land productivity (abbr.)"]]],

  /* ---------- ECONOMICS · Money and Credit ---------- */
  ["BARTER", "Economics", "Money and Credit", [
    [1, "Exchange of goods directly without money"],
    [2, "System that needs a double coincidence of wants"],
    [3, "System money replaced by becoming the medium of exchange"]]],
  ["COLLATERAL", "Economics", "Money and Credit", [
    [1, "Asset pledged to a lender until a loan is repaid"],
    [2, "Land or livestock offered as security for a loan"],
    [3, "Its absence keeps the poor out of formal credit"]]],
  ["CHEQUE", "Economics", "Money and Credit", [
    [1, "Paper instructing a bank to pay from an account"],
    [2, "Demand deposits make payment by this possible"],
    [3, "Written order that settles a payment without cash"]]],
  ["DEPOSIT", "Economics", "Money and Credit", [
    [1, "Money kept safely with a bank"],
    [2, "Banks pay interest on this"],
    [3, "Its 'demand' form is counted as money"]]],
  ["MONEYLENDER", "Economics", "Money and Credit", [
    [1, "Informal lender, often charging very high interest"],
    [2, "The biggest single source of informal rural credit"],
    [3, "A lender no one supervises — unlike banks under the RBI"]]],
  ["CREDIT", "Economics", "Money and Credit", [
    [1, "A loan — an agreement of goods or money now, repayment later"],
    [2, "It can push a borrower into a debt trap"],
    [3, "Cheap and affordable ____ is crucial for development"]]],
  ["INTEREST", "Economics", "Money and Credit", [
    [1, "Price paid for borrowing money"],
    [2, "Informal lenders charge much higher rates of this"],
    [3, "Part of the 'terms of credit' along with collateral"]]],

  /* ---------- ECONOMICS · Globalisation and the Indian Economy ---------- */
  ["GLOBALISATION", "Economics", "Globalisation and the Indian Economy", [
    [1, "Integration of a country's economy with the world"],
    [2, "Process driven by MNCs and falling trade barriers"],
    [3, "Thirteen-letter interlinking of markets and production"]]],
  ["MULTINATIONAL", "Economics", "Globalisation and the Indian Economy", [
    [1, "Company that owns or controls production in many countries"],
    [2, "Cargill and Ford are examples of this kind of company"],
    [3, "Company that sets up production where costs are lowest"]]],
  ["TARIFF", "Economics", "Globalisation and the Indian Economy", [
    [1, "Tax on imports used as a trade barrier"],
    [2, "Raising it protects producers within the country"],
    [3, "Barrier the WTO presses member nations to lower"]]],
  ["WTO", "Economics", "Globalisation and the Indian Economy", [
    [1, "Global body that frames rules for international trade (abbr.)"],
    [2, "Organisation that pushes countries to liberalise trade (abbr.)"],
    [3, "Body where rich nations' farm subsidies are hotly debated (abbr.)"]]],
  ["LIBERALISATION", "Economics", "Globalisation and the Indian Economy", [
    [1, "Removing government restrictions on trade and investment"],
    [2, "Policy India embraced from 1991"],
    [3, "Fourteen-letter loosening of barriers set by government"]]],
  ["INVESTMENT", "Economics", "Globalisation and the Indian Economy", [
    [1, "Money spent on assets like machines and buildings"],
    [2, "The 'foreign' kind made by MNCs is called FDI"],
    [3, "MNCs bring this along with the latest technology"]]],
  ["SEZ", "Economics", "Globalisation and the Indian Economy", [
    [1, "Industrial zone with tax holidays to attract investors (abbr.)"],
    [2, "Special area with world-class facilities for industry (abbr.)"],
    [3, "Zone where new firms need pay no taxes for an initial period (abbr.)"]]],

  /* ---------- ECONOMICS · Consumer Rights ---------- */
  ["CONSUMER", "Economics", "Consumer Rights", [
    [1, "Person who buys goods or services for personal use"],
    [2, "The movement named after them arose against unfair trade"],
    [3, "Their national 'day' in India falls on 24 December"]]],
  ["ADULTERATION", "Economics", "Consumer Rights", [
    [1, "Mixing inferior substances into food or products"],
    [2, "Malpractice the consumer movement first organised against"],
    [3, "Crime hiding in your groceries — and a twelve-letter answer"]]],
  ["HALLMARK", "Economics", "Consumer Rights", [
    [1, "Certification of purity for gold jewellery"],
    [2, "The BIS stamp to look for on ornaments"],
    [3, "Logo that protects buyers of precious metals"]]],
  ["AGMARK", "Economics", "Consumer Rights", [
    [1, "Certification mark for agricultural products"],
    [2, "Logo on honey and spices assuring quality"],
    [3, "Farm-produce counterpart of the ISI mark"]]],
];

const DIFFICULTY_NAMES = { 1: "Easy", 2: "Medium", 3: "Hard" };

/* ------------------------------------------------------------
 * Merge all subject lists into the single database the app uses.
 * To add a subject: create another raw list above and add a line
 * here with its display name.
 * ------------------------------------------------------------ */
function normalise(raw, subject) {
  return raw.map(([word, topic, subtopic, hints]) => ({
    word: word.toUpperCase(),
    subject,
    topic,
    subtopic,
    hints: hints.map(([level, text]) => ({ level, text })),
  }));
}

const WORD_DB = [
  ...normalise(WORD_DB_SCIENCE, "Class 10 - Science"),
  ...normalise(WORD_DB_SOCIAL, "Class 10 - Social Science"),
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { WORD_DB, DIFFICULTY_NAMES };
}
