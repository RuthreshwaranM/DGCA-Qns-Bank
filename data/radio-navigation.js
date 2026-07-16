/* ============================================================
   DGCA EXAM BANK — SUBJECT: Radio Navigation
   ------------------------------------------------------------
   HOW TO ADD A NEW CHAPTER TO THIS SUBJECT
   ------------------------------------------------------------
   1. Copy a PDF's questions and options, paste them below the
      pattern shown in the VDF chapter (registerChapterText call).
   2. Put a "*" right before the letter of the correct option.
   3. Save. Refresh the page. Done.

   Full format reference is at the top of js/parser.js.
   ============================================================ */

registerSubject("radio-navigation", "Radio Navigation");

registerChapterText("radio-navigation", "Basic Principle", "Basic Principle", `
42. VDF for aeronautical use provides service in the frequency range?
a. 108 to 118 MHz.
b. 108 to 136 MHz.
*c. 118 to 136 MHz.
d. 130 to 300 MHz.
Explanation: VDF operates in the VHF comms band, 118–136 MHz.

43. In flight a pilot can improve the range of his transmission with a VDF operator by?
*a. Increasing altitude.
b. Decreasing altitude.
c. Speaking louder.
d. Flying out of clouds.
Explanation: Climbing extends the VHF line-of-sight radio horizon.

44. What is the Q code for a magnetic bearing from a VDF station?
a. QNH.
b. QRE.
*c. QDR.
d. QDM.
Explanation: QDR = magnetic bearing FROM the station to the aircraft.
   `);

registerChapterText("radio-navigation", "vdf", "VDF", `
1. What is the approximate maximum theoretical range at which an aircraft at FL130 could receive information from a VDF facility, which is sited 1024 FT above MSL?
*a. 180 NM.
b. 220 NM.
c. 120 NM.
d. 150 NM.
Explanation: Range (NM) ≈ 1.25 × (√h1 + √h2), heights in feet. 1.25 × (√13000 + √1024) = 1.25 × (114.0 + 32.0) ≈ 182 NM ≈ 180 NM.

2. VDF accuracy may be decreased by?
a. Diurnal variation.
*b. Site and propagation errors.
c. Night effect.
d. Costal effect.
Explanation: Site errors (reflections near the antenna) and propagation errors (e.g. coastal refraction, night effect) are the main sources of VDF bearing error.

3. VDF is not affected by the other option listed in this question. The maximum theoretical range at which an aircraft at FL80 can obtain bearing from a ground VDF facility sited 325 FT above MSL is:
a. 158 NM.
b. 107 NM.
c. 114 NM.
*d. 134 NM.
Explanation: 1.25 × (√8000 + √325) = 1.25 × (89.44 + 18.03) ≈ 134 NM.

4. What is the minimum level that an aircraft, at a range of 113 NM, must fly in order to contact the tower on R/T for a VDF bearing from an airport sited 169 FT above MSL?
*a. FL60.
b. FL50.
c. FL80.
d. FL100.
Explanation: 113 = 1.25 × (√h + √169). √169 = 13, so √h ≈ 77.4, h ≈ 5991 ft ≈ FL60.

5. What is the approximate maximum theoretical range at which an aircraft at FL140 could receive information from a VDF facility, which is sited 1050 FT above MSL?
a. 220 NM.
b. 125 NM.
c. 155 NM.
*d. 193 NM.
Explanation: 1.25 × (√14000 + √1050) = 1.25 × (118.3 + 32.4) ≈ 188 NM, closest to 193 NM.

6. An aircraft is "homing" to a radio beacon whilst maintaining a relative bearing of zero. If the magnetic heading increases, the aircraft is experiencing?
a. Right drift.
*b. Left drift.
c. Zero drift.
d. A Wind from the west.
Explanation: To keep RB at zero while being blown left of track, the pilot must keep turning further right (heading increases) — the correction for left drift.

7. What airborne equipment, if any, is required to be fitted in order that a VDF let-down may be flown?
*a. VHF radio
b. VOR
c. None
d. VOR/DME
Explanation: A VDF let-down only needs a standard VHF communication radio in the aircraft — the DF equipment is on the ground.

8. Which of the following is an advantage of ground/DF (VDF) let-down?
*a. It only requires a VHF radio to be fitted to the aircraft.
b. It is pilot interpreted and does not require the assistance of ATC.
c. It does not require any special equipment to be fitted to the aircraft.
d. It does not require any special equipment, apart from a VHF radio, to be installed in the aircraft or on the ground.
Explanation: The key advantage is on the aircraft side — no special airborne DF equipment needed, just the VHF radio already fitted for R/T.

9. In which one of the following circumstances is ground direction finding (VDF) likely to be used to fix an aircraft's position?
a. On first contact with ATC on crossing an international FIR boundary.
b. When contacting ATC to join controlled airspace from the open FIR.
*c. When declaring an emergency on any frequency.
d. When using the emergency VHF frequency 121.5 MHz.
Explanation: VDF is primarily an emergency/backup positioning tool, used whenever an aircraft declares an emergency, on whichever frequency it is working.

10. What is a VDF referenced to?
a. Relative bearing to the aircraft.
b. True north at the aircraft.
*c. Magnetic north at the station.
d. Magnetic north at the aircraft.
Explanation: A standard VDF bearing (QDR/QDM) is referenced to magnetic north at the ground station.

11. A radio beacon has an operational range of 10 nm. By what factor should the transmitter power be increased in order to achieve an operational range of 20 nm.
*a. Four.
b. Eight.
c. Two.
d. Six.
Explanation: Received signal strength follows an inverse-square law with distance, so doubling range requires four times the power.

12. VDF is the abbreviation for?
a. VDF Direction Finder.
b. Very Direction Finder.
c. Very High Frequency Deviation Finding Station.
*d. VHF Direction Finder.
Explanation: VDF = VHF Direction Finder.

13. To provide with the position of the aircraft in the absence of radar, ATC must have at its disposal at least?
*a. Two VDFs at different locations, able to take bearings simultaneously on the transmitted frequency.
b. Three VDFs at different locations, able to take bearing simultaneously on the different frequency.
c. Two co-located VDFs, able to take bearing simultaneously on the transmitted frequency.
d. One VDF able to take bearing simultaneously on different frequencies.
Explanation: A position fix needs two crossing bearings, so at minimum two VDF stations at different sites taking simultaneous bearings on the same transmission.

14. Range of VDF depends on? 1. Line of sight formula. 2. Power of transmitter. 3. Intervening high ground. The combination regrouping all of the correct statements is?
a. 2.
*b. 1, 2 and 3.
c. 1 and 2.
d. 1 and 3.
Explanation: All three factor into usable VDF range: geometric line-of-sight, transmitter power, and terrain/obstacles blocking the path.

15. One of the uses of the VDF is providing aircraft with?
a. Ground speed.
*b. Homing.
c. Altitude.
d. Heading.
Explanation: A VDF service can pass a QDM to the pilot, giving a magnetic heading to steer to home the aircraft to the station.

16. A VDF may be used?
*a. To provide the ATC controller with bearings of aircraft in the absence of radar.
b. In emergency type situations when the aircraft is unable to transmit on VHF.
c. In combination with radar to solve a 180 degree ambiguity.
d. In lieu of ILS for precision approach purposes.
Explanation: The core function of VDF is giving ATC (or the pilot) bearing/position information when radar is not available.

17. What is the effect of multipath signals (coming from the same aircraft) at the Ground VHF Direction Finder Station?
a. It reduces the range at which the ground VDF Direction Finder receives signals from the aircraft.
b. Regardless of the differences in distance travelled by these signals, it results in their extinction of the signals at the Ground VHF Direction Finder station.
c. It may result in an increase in the distance at which Ground Direction Finder station receive signals from the aircraft, if the Ground Station is situated in the skip zone.
*d. They may result in bearing errors.
Explanation: Multiple reflected paths arriving at slightly different angles are a classic cause of VDF bearing error.

18. In flight, a pilot can improve the range of his transmission with a VDF operator by?
a. Speaking louder.
b. Flying out of clouds.
*c. Increasing altitude.
d. Decreasing altitude.
Explanation: VHF is line-of-sight, so climbing higher extends the radio horizon and usable range.

19. An aircraft is "homing" to a radio beacon whilst maintaining a relative bearing of zero. If the magnetic heading decreases, the aircraft is experiencing?
*a. Right drift.
b. Left drift.
c. Zero drift.
d. A wind from the west.
Explanation: A steadily decreasing heading while holding RB at zero is the correction pattern for right drift.

20. Given: Compass heading 270°, Deviation 2°W, Variation 30°E, Relative bearing of VDF station from the aircraft 316°. What is the QDR?
*a. 044°
b. 226°
c. 046°
d. 224°
Explanation: Magnetic heading = 270° − 2°(W) = 268°. Bearing to station = RB + MH = 316° + 268° = 224°. QDR is the reciprocal: 224° + 180° = 044°.

21. VDF measures the bearing of the aircraft with?
a. Reference to the aircraft relative bearing.
*b. Reference to the true and magnetic north at the station.
c. Reference to the true and magnetic north at the aircraft.
d. Reference to the magnetic north at the aircraft.
Explanation: Ground VDF bearings can be expressed as either true (QTE) or magnetic (QDR), both referenced to north at the ground station.

22. The VDF Class B bearing is accurate to within?
a. +/- 1 degrees.
*b. +/- 5 degrees.
c. +/- 3 degrees.
d. +/- 2 degrees.
Explanation: ICAO VDF bearing classes: A = ±2°, B = ±5°, C = ±10°, D = worse than ±10°.

23. When would VDF be used for a position fix?
a. When declaring an emergency on 121.5 MHz.
*b. When the aircraft declares an emergency on any frequency.
c. When first talking to an FIR on crossing an international boundary.
d. When joining controlled airspace from uncontrolled airspace.
Explanation: VDF is used as a backup positioning method whenever an aircraft declares an emergency, on any frequency it happens to be using.

24. What airborne equipment, if any, is required in order that a VDF let-down may be flown?
a. VOR/DME.
*b. VHF Radio.
c. None.
d. VOR.
Explanation: Only a standard VHF communications radio is needed on board.

25. What equipment does an aircraft need when carrying out a VDF let-down?
a. None.
b. VOR.
c. VOR/DME.
*d. VHF Radio.
Explanation: A standard VHF radio is all that's required on the aircraft side.

26. The minimum airborne equipment for operation of a VHF Direction Finder is a?
*a. VHF Transmitter-receiver operating in the 118 MHz to 136 MHz range.
b. VHF compass operating in the 200 khz to 1750 khz range.
c. Cathode ray tube.
d. VHF receiver operating in the 118 MHz to 136 MHz range.
Explanation: The aircraft needs a two-way VHF transceiver in the standard 118–136 MHz comms band; the DF equipment itself is on the ground.

27. Ground direction finding at aerodromes utilizes which frequencies?
a. VHF at civil aerodromes, VHF at military aerodromes.
*b. VHF at civil aerodromes, UHF at military aerodromes.
c. UHF at civil aerodromes, VHF at military aerodromes.
d. UHF at civil aerodromes, UHF at military aerodromes.
Explanation: Civil aerodromes use VHF DF; military aerodromes commonly use UHF DF.

28. The range at which you can obtain a VDF bearing can be influenced by?
a. Intensity of ionization.
b. Surface type.
*c. Aircraft height.
d. Time of day.
Explanation: Since VHF DF range is a line-of-sight function, aircraft height is the dominant factor.

29. What is the purpose of a ground direction finder?
a. To map airfields.
b. To aid ground movements.
*c. To aid ground navigation.
d. To assist planners in the construction of airfield approaches.
Explanation: Ground direction finders exist to provide bearing/positioning assistance for navigation.

30. Which of the following affects VDF range?
a. Coastal refraction.
*b. The height of the transmitter and the receiver.
c. The strength of the pilot's voice when transmitting.
d. Sky wave propagation.
Explanation: VHF DF range is governed by line-of-sight geometry set by the heights of both the ground station and the aircraft.

31. Abnormal long ranges may be experienced on VDF channels, caused by?
a. Efficient VDF antennas.
b. Intermodulation with signals on frequencies close to the one being used by the VDF station.
*c. Super refraction of the signals in the atmosphere.
d. The VDF station using a relay station for communication to the aircraft.
Explanation: Atmospheric ducting/super-refraction can bend VHF signals well beyond the normal geometric line-of-sight range.

32. In VDF service the report "QDR 235, Class C" means?
a. The magnetic bearing from the aircraft to the station is 235 +/- 10 degrees.
b. The magnetic bearing from the station to the aircraft 235 +/- 15 degrees.
c. The true bearing from the station to the aircraft is 235 +/- 10 degrees.
*d. The Magnetic bearing from the station to the aircraft is 235 +/- 10 degrees.
Explanation: QDR = magnetic bearing FROM the station TO the aircraft. Class C accuracy is ±10°.

33. Which Q code would give a magnetic heading to steer (in nil wind) to a VDF station?
*a. QDM.
b. QDR.
c. QUJ.
d. QTE.
Explanation: QDM is the magnetic heading to steer to the station, zero wind.

34. You intercept a QDM with a right crosswind component. Is your intercept heading greater or smaller than it would be without wind influence?
*a. Greater.
b. Smaller.
c. Remains the same.
d. Not enough information to give answer.
Explanation: A right crosswind blows the aircraft left of track, so a larger heading (turned further right) is needed to correct and hold the intercept.

35. If a ground D/F controller passes a bearing thus: "your true bearing is 256 degrees, class Alpha."
*a. QTE accurate to +/- 2 degrees.
b. QTE accurate to +/- 2 degrees.
c. QDR accurate to +/- 2 degrees.
d. QUK accurate to +/- 3 degrees.
Explanation: A true bearing FROM the station is QTE; Class A accuracy is ±2°.

36. What is QTE?
a. Magnetic track to the station.
b. Magnetic track from the station.
*c. True track from the station.
d. True track to the station.
Explanation: QTE is the true bearing of the aircraft FROM the ground station.

37. Which of the following statements regarding VHF Direction Finding (VDF) is most accurate?
a. It is simple and only requires a VHF radio on the ground.
b. It is simple and requires a VHF radio and direction finding equipment in the aeroplane.
c. It is simple and requires a VHF radio on the ground and in the aeroplane.
*d. It uses line of sight propagation.
Explanation: VDF is fundamentally a VHF, line-of-sight service — the one statement unconditionally true of the system.

38. With reference to ground DF, the controller can refuse to give a bearing if?
a. The requesting aircraft is not from a consenting country.
b. The pilot does not use the prescribed terminology.
*c. Conditions are poor and bearing do not fall within the station's classification limits.
d. None of the above.
Explanation: If propagation/site conditions mean the bearing can't meet even the loosest published accuracy class, the controller can decline to pass it.

39. An aircraft receives a class A true bearing from a VDF station. This is?
*a. QTE accurate to +/- 2 degrees.
b. QTE accurate to +/- 2 degrees.
c. QTE accurate to +/- 5 degrees.
d. QTE accurate to +/- 5 degrees.
Explanation: A true bearing is QTE; Class A accuracy is ±2°.

40. At a height of 5000 feet you might expect to receive a VHF signal, from a transmitter located at sea level, at a range of?
a. 88.8 nm.
*b. 88.4 nm.
c. 70.7 nm.
d. 200 km.
Explanation: 1.25 × √5000 = 1.25 × 70.71 ≈ 88.4 NM.

41. A class B bearing has accuracy limits of plus or minus?
a. 2 degrees.
b. 3 degrees.
*c. 5 degrees.
d. 7 degrees.
Explanation: ICAO Class B VDF bearing accuracy is ±5°.

42. VDF for aeronautical use provides service in the frequency range?
a. 108 to 118 MHz.
b. 108 to 136 MHz.
*c. 118 to 136 MHz.
d. 130 to 300 MHz.
Explanation: VDF operates in the VHF comms band, 118–136 MHz.

43. In flight a pilot can improve the range of his transmission with a VDF operator by?
*a. Increasing altitude.
b. Decreasing altitude.
c. Speaking louder.
d. Flying out of clouds.
Explanation: Climbing extends the VHF line-of-sight radio horizon.

44. What is the Q code for a magnetic bearing from a VDF station?
a. QNH.
b. QRE.
*c. QDR.
d. QDM.
Explanation: QDR = magnetic bearing FROM the station to the aircraft.
`);

registerChapterText("radio-navigation", "ADF", "ADF", `
42. VDF for aeronautical use provides service 
in the frequency range?
a. 108 to 118 MHz.
b. 108 to 136 MHz.
*c. 118 to 136 MHz.
d. 130 to 300 MHz.
Explanation: VDF operates in the VHF comms band, 118–136 MHz.

43. In flight a pilot can improve the range of his transmission with a VDF operator by?
*a. Increasing altitude.
b. Decreasing altitude.
c. Speaking louder.
d. Flying out of clouds.
Explanation: Climbing extends the VHF line-of-sight radio horizon.

44. What is the Q code for a magnetic bearing from a VDF station?
a. QNH.
b. QRE.
*c. QDR.
d. QDM.
Explanation: QDR = magnetic bearing FROM the station to the aircraft.
   `);

registerChapterText("radio-navigation", "VOR", "VOR", `
   42. VDF for aeronautical use provides service in the frequency range?
a. 108 to 118 MHz.
b. 108 to 136 MHz.
*c. 118 to 136 MHz.
d. 130 to 300 MHz.
Explanation: VDF operates in the VHF comms band, 118–136 MHz.

43. In flight a pilot can improve the range of his transmission with a VDF operator by?
*a. Increasing altitude.
b. Decreasing altitude.
c. Speaking louder.
d. Flying out of clouds.
Explanation: Climbing extends the VHF line-of-sight radio horizon.

44. What is the Q code for a magnetic bearing from a VDF station?
a. QNH.
b. QRE.
*c. QDR.
d. QDM.
Explanation: QDR = magnetic bearing FROM the station to the aircraft.
   `);

registerChapterText("radio-navigation", "ILS", "ILS", `
   42. VDF for aeronautical use provides service in the frequency range?
a. 108 to 118 MHz.
b. 108 to 136 MHz.
*c. 118 to 136 MHz.
d. 130 to 300 MHz.
Explanation: VDF operates in the VHF comms band, 118–136 MHz.

43. In flight a pilot can improve the range of his transmission with a VDF operator by?
*a. Increasing altitude.
b. Decreasing altitude.
c. Speaking louder.
d. Flying out of clouds.
Explanation: Climbing extends the VHF line-of-sight radio horizon.

44. What is the Q code for a magnetic bearing from a VDF station?
a. QNH.
b. QRE.
*c. QDR.
d. QDM.
Explanation: QDR = magnetic bearing FROM the station to the aircraft.
   `);

registerChapterText("radio-navigation", "Basic Radar", "Basic Radar", `
   42. VDF for aeronautical use provides service in the frequency range?
a. 108 to 118 MHz.
b. 108 to 136 MHz.
*c. 118 to 136 MHz.
d. 130 to 300 MHz.
Explanation: VDF operates in the VHF comms band, 118–136 MHz.

43. In flight a pilot can improve the range of his transmission with a VDF operator by?
*a. Increasing altitude.
b. Decreasing altitude.
c. Speaking louder.
d. Flying out of clouds.
Explanation: Climbing extends the VHF line-of-sight radio horizon.

44. What is the Q code for a magnetic bearing from a VDF station?
a. QNH.
b. QRE.
*c. QDR.
d. QDM.
Explanation: QDR = magnetic bearing FROM the station to the aircraft.
   `);
   
registerChapterText("radio-navigation", "AWR", "AWR", `
   42. VDF for aeronautical use provides service in the frequency range?
a. 108 to 118 MHz.
b. 108 to 136 MHz.
*c. 118 to 136 MHz.
d. 130 to 300 MHz.
Explanation: VDF operates in the VHF comms band, 118–136 MHz.

43. In flight a pilot can improve the range of his transmission with a VDF operator by?
*a. Increasing altitude.
b. Decreasing altitude.
c. Speaking louder.
d. Flying out of clouds.
Explanation: Climbing extends the VHF line-of-sight radio horizon.

44. What is the Q code for a magnetic bearing from a VDF station?
a. QNH.
b. QRE.
*c. QDR.
d. QDM.
Explanation: QDR = magnetic bearing FROM the station to the aircraft.
   `);

registerChapterText("radio-navigation", "SSR", "SSR", `
1. When Mode C is selected on the aircraft SSR transponder the additional information 
transmitted is: 
a. Altitude based on regional QNH. 
b. Aircraft height based on sub-scale setting. 
c. Height based on QFE. 
*d. Flight level based on 1013.25 hpa. 

2. The ground Secondary Surveillance Radar (SSR) equipment incorporates a transmitter and 
receiver respectively operating in the following frequencies? 
Transmitter Receiver? 
a. 1090 MHz 1030 MHz. 
*b. 1030 MHz 1090 MHz. 
c. 1090 MHz 1090 MHz. 
d. 1030 MHz 1030 MHz. 

3. Why is a secondary radar display screen free of storm clutter? 
*a. The principle of ‘echo’ return is not used in secondary radar 
b. The frequencies employed are too high to give return from moisture sources. 
c. A moving target indicator facility suppresses the display of static or near static returns. 
d. The frequencies employed are too low to give returns form moisture sources. 

4. In order to indicate radio failure the aircraft SSR transponder should be selected to code: 
a. 7700. 
b. 7000. 
c. 7500. 
*d. 7600. 

5. In order to indicate unlawful interference with the planned operation of the flight, the 
aircraft Secondary Surveillance Radar (SSR) transponder should be selected to: 
a. 7600. 
*b. 7500. 
c. 7700. 
d. 7000. 

6. When an aircraft is operating its Secondary Surveillance Radar is Mode C an air traffic 
controller’s presentation gives information regarding the aircraft’s indicated flight level that 
is accurate to within: 
*a. + or – 50 FT 
b. + or – 75 FT 
c. + or – 100 FT 
d. + or – 25 FT 

7. The frequency of an SSR ground transmission is: 
a. 1050 +/- 0.5 MHz. 
b. 1090 +/- 0.3 MHz. 
*c. 1030 +/- 0.2 MHz. 
d. 1120 +/- 0.6 MHz. 

8. The two main design functions of Secondary Surveillance Surveillance Rader (SSR) Mode S 
are: 
a. Collision avoidance using TCAS II and improved long range (HF) communication capability. 
b. Continuous automatic position reporting using Global positioning System (GPS) satellites and 
collision avoidance using TCAS II. 
c. The elimination of ground to air communication and the introduction of automatic 
separation between aircraft using TCAS II. 
*d. Air to ground and ground to air link communication and improved ATC aircraft Surveillance 
capability. 

9. The ATC transponder system, excluding Mode S, contains: 
a. Four modes, each 1024 codes. 
*b. Two modes, each of 4096 codes. 
c. Four modes, each of 4096 codes. 
d. Two modes, each 1024 codes. 

10. A secondary radar can provide up to 4096 different codes. These 4096 codes can be used in? 
*a. All modes. 
b. Mode  A only. 
c. Mode C only. 
d. Mode S. 

11. The code transmitted by a SSR transponder consists of: 
*a. Pulses. 
b. Phase differences. 
c. Frequency differences. 
d. Amplitude differences. 

12. Which of the following Secondary Surveillance Radar (SSR) codes is used to indicate 
transponder malfunction? 
a. 7600. 
b. 4096. 
c. 9999. 
*d. 0000. 

13. Which one of the following Secondary Surveillance Radar (SSR) codes should be used by 
aircraft entering airspace from an area where SSR operation has not been required? 
a. 5000. 
*b. 2000. 
c. 7000. 
d. 0000. 

14. What is the maximum number of usable Secondary Surveillance Radar (SSR) transponder 
codes? 
*a. 4096. 
b. 3600. 
c. 1000. 
d. 7600. 

15. Which of the following equipment’s works on the interrogator/transponder principle? 
a. Global Positioning System(GPS)  
b. Airborne Weather Radar (AWR) 
*c. Secondary Surveillance Radar (SSR)  
d. Aerodrome Surface Movement Radar. 

16. In order to indicate an emergency situation, the aircraft Secondary Surveillance Radar (SSR) 
transponder should be set to: 
a. 7600. 
b. 7500. 
c. 7000. 
*d. 7700. 

17. The selection of code 2000 on an aircraft SSR transponder indicates: 
*a. Entry into airspace from an area where SSR operation has not been required. 
b. Unlawful interference with the planned operation of the flight. 
c. An emergency. 
d. Transponder malfunction. 

18. Most aeroplanes are fitted with a transponder which is an essential aspect of …….. Radar? 
a. Primary. 
b. Precision approach. 
c. Security surveillance. 
*d. Secondary surveillance. 

19. Secondary surveillance radar (SSR) information is? 
a. Not displayed on a screen but received by fax at the radar controller’s station. 
*b. Displayed on the same screen as primary radar screen. 
c. Displayed on a screen next to the primary radar screen. 
d. Not mandatory for aircraft operating in controlled airspace. 

20. The selection of code 7500 on a an aircraft SSR transponder indicates: 
*a. Unlawful interference with the planned operation of the flight. 
b. An emergency. 
c. Transponder malfunction. 
d. Radio communication failure. 

21. The selection of code 7600 on an aircraft SSR transponder indicates: 
a. An emergency. 
b. Unlawful interference with the planned operation of the flight. 
*c. Radio communication failure. 
d. Transponder malfunction. 

22. The selection of code 7700 on an aircraft SSR transponder indicate: 
a. Radio communication failure. 
*b. An emergency. 
c. Transponder malfunction. 
d. Unlawful interference with the planned operation of the flight. 

23. Mode A or C garbling may occur to? 
*a. Two or more aircraft in the same direction from the interrogator with a difference in slant 
range of less than 1.7 nm. 
b. Two or more aircraft in different directions form the interrogator with a difference in slant 
tange of less than 1.7 nm. 
c. Two or more aircraft in the same direction from the ground station with a difference in slant 
range of less than 1.7 nm. 
d. Two or more aircraft in different directions from the ground station with a difference in slant 
range of less than 1.7 nm. 

24.  A TCAS II equipped aircraft will have mode S because? 
a. The datalink is required to transmit relative position. 
b. Mode S transmit a 3D position. 
c. True altitude is obtained from mode S. 
*d. The datalink is required to co-ordinate evasive manoeuvres. 

25. How does a Mode S interrogator identify aircraft? 
*a. A 24 bit identifier, giving over 16 million combination. 
b. The four letter SELECAL code. 
c. The P3 pulse. 
d. An eight bit identifier, which gives 212 unique combinations. 

26. Garbling in Mode A and C may occur? 
a. Two or more aircraft in different direction from the interrogator with a difference in slant 
range of less than 1.7 nm. 
b. Two or more aircraft in the same direction from the ground station with a difference in slant 
range of less than 1.7 nm. 
c. Two or more aircraft in different direction from the ground station with a difference in slant 
range of less than 1.7 nm. 
*d. Two or more aircraft in the same direction from the interrogator with a difference is slant  
range of less than 1.7 nm. 

27. Which statement with respect to interrogation modes is correct? 
a. Mode S only all-call will trigger transponder replies of all A/C/S transponder. 
b. Mode S Selective will trigger replies of all mode S Transponder. Mode A/C transponders are 
suppressed. 
c. Intermode A/C/S all call and intermode A/C only all call, differ in the pulse spacing used 
between the P1 and P3 pulses. 
*d. Mode S Broadcast will transmit information to all mode S transponders. 

28. The accuracy of SSR height as displayed to the air traffic controller is  
a. +/- 25 feet. 
*b. +/- 50 feet. 
c. +/- 75 feet. 
d. +/- 100 feet. 

29. Why do clouds not appear on the secondary radar screens. 
a. Too low a frequency. 
b. Too high a frequency. 
*c. The transmit and receive signals are on different frequencies. 
d. They do not provide an echo by returning signals. 

30. SSR is not affected by weather clutter because? 
a. The frequencies used penetrates clouds. 
*b. It uses different frequencies for transmission and reception. 
c. The equipment uses a moving target indicator. 
d. The wavelength is too short to be reflected from cloud droplets. 

31. What most affects the range available from secondary surveillance radar? 
a. The RPP. 
b. The transmission power of the aircraft interrogator. 
c. The transmission power of the ground interrogator. 
*d. The height of the aircraft and the height of the ground interrogator. 

32. The spacing between two pulses transmitted by a SSR interrogator decides? 
*a. What mode is used. 
b. The ATC code to be sent to the aircraft.  
c. The identification of the SSR. 
d. What service may be provided by the SSR. 

33. With regard to SSR? 
a. The interrogator is on the ground and the transponder is on the ground. 
*b. The interrogator is on the ground and the transponder is in the aircraft. 
c. The interrogator is in the aircraft and the transponder is on the ground. 
d. The interrogator is in the aircraft and the transponder is in the aircraft.  

34. Why is the effect of returns from storms not a problem with SSR? 
a.  
The PRF is jittered. 
b. The frequency is too high. 
*c. SSR does not use the echo principle. 
d. By the use of MTI to remove stationary and slow moving returns. 

35. SSR in ATC use? 
a. Replaces primary radar. 
b. Uses primary techniques. 
*c. Is complementary to primary radar. 
d. Suffers from greater attenuation than primary radar, due to the higher frequencies used. 

36. When both SSR and primary radar is presented on the controller’s display? 
a. Altitude information is presented for all targets. 
b. The SSR information is more accurate is bearing and distance. 
*c. The primary radar information is more accurate in bearing and distance. 
d. The primary radar information is superfluous. 

37. With SSR interrogation and responses signals? 
a. Are separated by 63 MHz. 
b. Are at variable frequencies set by the controller but are always 63 MHz apart. 
c. Must be set by the pilot but are always 63 MHz apart. 
*d. Are standard frequencies separated by 60 MHz. 

38. What SSR modes are frequently used by ATC. 
a. Mode C and mode D. 
b. Mode A and mode B. 
*c. Mode A and mode C. 
d. Mode A, mode B and mode C. 

39. Data transmission and exchange is conducted on? 
a. Mode A. 
b. Mode D. 
c. Mode C. 
*d. Mode S. 

40. A mode S transponder will? 
a. Not respond to interrogation on mode A. 
*b. Respond normally to mode A or C interrogations. 
c. Respond to mode A interrogation but not to mode C. 
d. Not respond to modes A or C because it is on a different frequency. 

41. Which of the following statements regarding Mode S is most accurate? 
a. Mode S and Mode A/C transponders us different frequencies in operation. 
b. Mode S is used to assist GPS calculations. 
c. Mode S transponders are used with the radio altimeter. 
*d. Mode S transponders reduce R/T traffic and also provide the aircraft with a datalink facility. 

42. When a Mode C interrogation is responded to, vertical position of the aircraft is encoded 
and transmitted. This vertical position is referred to? 
*a. 1013.2 hpa. 
b. Area QNH. 
c. The sub-scale setting on the altimeter. 
d. Any of the above as directed by ATC. 

43. Selection of Mode C on the SSR provides ATC information based on? 
a. Aircraft height above QFE. 
*b. Aircraft pressure altitude. 
c. Aircraft height above the surface. 
d. Aircraft altitude as indicated on the captain’s altimeter. 

44. The SSR code for a total radio failure is? 
a. 7500. 
*b. 7600. 
c. 7500 puls mode c. 
d. 7600 puls mode c. 

45. The SSR conspicuity code is . 
*a. 7000. 
b. 2000. 
c. 0033. 
d. 7600. 

46. What are the frequency used for interrogation and response for SSR? 
a. 1090 MHz for interrogation from the ground, 1030 MHz for response from aircraft. 
b. 1090 MHz for interrogation from the ground, 1090 MHz for response from aircraft. 
c. 1030 MHz for interrogation from the ground, 1030 MHz for response from aircraft. 
*d. 1030 MHz for interrogation from the ground, 1090 MHz for response from aircraft. 

47. With normal SSR Mode A coding the aircraft replies by sending back a train of 12 pulses 
contained between 2 framing pulses with? 
*a. Up to 4096 codes in 4 boxes. 
b. Up to 2048 codes in 4 boxes. 
c. Up to 4096 codes in 12 boxes. 
d. Up to 4096 codes in 8 boxes. 

48. What SSR Mode A code should be selected when entering European airspace from an area 
where no code has been allocated? 
a. 0000 
*b. 2000. 
c. 7000. 
d. 7500. 

49. A radar which employs an interrogator/transponder technique is? 
a. Primary radar. 
b. Doppler radar. 
*c. Secondary radar. 
d. Continuous wave a radar. 

50. What information may be displayed on a ATC radar screen connected only to a primary 
radar system? 
a. Aircraft altitude. 
*b. Aircraft positions only. 
c. Aircraft positions and SSR code. 
d. Aircraft positions, SSR code and altitude. 

51. “Fruiting” is caused by? 
a. Aeroplanes in close proximity responding to the same interrogator. 
b. Doppler effect on targets moving radially towards or away from the SSR. 
c. An aeroplane’s transponder responding to side lobes or reflection of the interrogation 
signal. 
*d. Aeroplanes at range responding to interrogations from another ATC SSR units. 

52. Garbling is caused by? 
*a. Aeroplanes in close proximity responding to the interrogator. 
b. Doppler effect on targets moving radially towards or away from the SSR. 
c. An aeroplane’s transponder responding to side lobes or reflection of the interrogations 
signal. 
d. Aeroplanes at range responding to interrogations from another ATC SSR units. 

53. On a typical computer generated SSR display the following data on a particular flight will be 
shown? 
a. Squawk code, flight level, true heading, aeroplanes callsign. 
b. Squawk code, magnetic heading, ground speed, aeroplane callsign. 
*c. Squawk code, flight level, ground speed, aeroplanes callsign. 
d. Destination, flight level, ground speed, aeroplane callsign. 

54. When the ATC transponder “IDENT” button is pressed by the pilot? 
a. Mode A will automatically be selected. 
b. The controller will be urged to identify the aeroplanes. 
c. The aeroplane’s identification will be sent to all SSR within range. 
*d. The aeroplane’s echo on the controller’s display will flash or “fill in”. 

55. In the SSR response, the operation of the transponder ident button? 
a. Sends out a special pulse in the X position in the pulse train. 
b. Sends out a special pulse before the normal pulse train. 
*c. Sends out a special pulse after the normal pulse train. 
d. Transmit the aeroplane’s registration or flight number as a data sequence. 
   `);   

registerChapterText("radio-navigation", "DME", "DME", `
   
1. A DME station is located 1000 feet above MSL. An aircraft flying at FL 370, 15 NM away from the DME station, will have a DME reading of? 
a. 14 NM. 
b. 15 NM. 
*c. 16 NM. 
d. 17 NM. 

2. Which of the following will give the most accurate calculation of aircraft ground speed? 
a. An ADF sited on the flight route. 
*b. A DME station sited on the flight route. 
c. A VOR station sited on the flight route. 
d. A DME station sited across the flight route. 

3. In which situation will speed indications on an airborne Distance Measuring Equipment (DME) most closely represent the groundspeed of an aircraft flying at FL400? 
*a. When tracking directly towards the station at a range of 100 NM or more. 
b. When passing abeam the station and within 5 NM of it. 
c. When overhead the station, with no change of heading at transit. 
d. When tracking directly away from the station at a range of 10 NM. 

4. The time taken for the transmission of an interrogation pulse by a Distance Measuring 
Equipment (DME) to travel to the ground transponder and return to the airborne receiver 
was 2000 microsecond. The Slant range from the ground transponder was? 
*a. 165 NM. 
b. 186 NM. 
c. 296 NM. 
d. 330 NM. 

5. The time taken for the transmission of an interrogation pulse by a Distance Measuring 
Equipment (DME) to travel to the ground transponder and return to the airborne receiver 
was 3000 microsecond. The slant range from the ground transponder was? 
a. 186 NM. 
*b. 243 NM. 
c. 296 NM. 
d. 330 NM. 

6. A DME station is located 7000 feet above MSL. An aircraft flying at FL 430, 20 NM away from 
the DME station, will have a DME reading of? 
a. 15 NM. 
b. 17 NM. 
*c. 20.88 NM. 
d. 21.35 NM. 

7. An aircraft DME receiver does not lock on its own transmission reflected from the ground 
because: 
a. DME transmits twin pulses. 
*b. They are not on the receiver frequency. 
c. The pulse recurrence rates are varied. 
d. DME uses the UHF band. 

8. A DME (Distance Measuring Equipment) operates within the following frequencies: 
a. 108 to 118 MHz. 
b. 329 to 335 MHz. 
c. 962 to 1213 kHz. 
*d. 962 to 1213 MHz. 

9. A DME is located at MSL. An aircraft passing vertically above the station at flight level FL 360 
will obtain a DME range of approximately? 
a. 7 NM. 
b. 11 NM. 
*c. 6 NM. 
d. 8 NM. 

10. During a flight at FL 210, a pilot does not receive any DME distance indication form a DME 
station located approximately 220 NM away. The reason for this is that the? 
*a. Aeroplane is below the ‘line of sight’ altitude. 
b. Aeroplane is circling around the station. 
c. Altitude is too high. 
d. Range of a DME system is always less than 200 NM. 

11. A typical frequency employed in Distance Measuring Equipment (DME) is: 
a. 10 MHz. 
*b. 1000 MHz. 
c. 100 MHZ. 
d. 100 GHZ. 

12. For a conventional DME facility ‘Beacon saturation’ will occur whenever the number of 
simultaneous interrogations exceeds: 
*a. 100. 
b. 200. 
c. 60. 
d. 80. 

13. On a DME, display counters rotating throughout their range indicates: 
a. Airborne equipment failure. 
*b. The airborne receiver is conducting a range search. 
c. Ground equipment failure. 
d. The airborne equipment is conducting a frequency search. 

14. The aircraft DME receiver is able to accept replies to its own transmissions and reject replies 
to other aircraft interrogations because: 
a. Pulse pairs are amplitude modulated with the aircraft registration. 
*b. Pulse pairs are discreet to a particular aircraft. 
c. Aircraft interrogations signals and transponder responses are 63 MHz removed from each 
other. 
d. Transmission frequencies are 63 MHz different for each aircraft. 

15. The aircraft DME receiver cannot lock on to interrogations signals reflected from the ground 
because: 
*a. Aircraft transmitter and DME ground station are transmitting on different frequencies. 
b. Reflection are subject to Doppler frequency shift. 
c. DME transmit twin pulses. 
d. DME pulse recurrence rates are varied. 

16. The design requirements for DME stipulate that, at a range of 100 NM, the maximum 
systematic error should not exceed: 
*a. + or -1.5 NM. 
b.  + or -3 NM. 
c. + or -0.25 NM. 
d. + or -1.25 NM. 

17. Distance Measuring Equipment (DME) uses radar principles to measure distance? 
a. Horizontally. 
b. Vertically. 
*c. Slant range. 
d. Plan range. 

18. ICAO specifications are that range errors indicated by Distance Measuring Equipment (DME) 
should not exceed: 
a. + or -0.5 NM or 3 % of the distance measured whichever is the greater. 
*b. + or -0.25 NM or 1.25 % of the distance measured. 
c. + or -1.25 NM or 0.25 % of the distance measured. 
d. + or -0.25 NM or 3 % of the distance measured whichever is the greater. 

19. What is the maximum distance between VOR and DME/TACAN ground installations if they 
are to have the same morse code identifier? 
*a. 600 m. 
b. 2000 m. 
c. 60 m. 
d. 300 m. 

20. A DME in tracking mode subsequently experiences a reduction in signal strength will switch 
the equipment in the first instance to: 
*a. Memory mode. 
b. Search mode. 
c. Standby mode. 
d. Signal controlled search. 

21. Of what use, if any, is a military TACAN station to civil aviation? 
a. It is of no use to civil aviation. 
b. It can provide a DME distance and magnetic bearing. 
*c. It can provide DME distance. 
d. It can provide a magnetic bearing. 

22. A DME that has difficulty obtaining a “lock-on”? 
(note: PRF=Pulse recurrence frequency, PPS= pulse per second) 
a. Stays in search mode without a reduction in PRF. 
b. Stays in search mode but reduces PRF to max. 60 PPS after 100 seconds. 
c. Alternates search mode with periods of memory mode lasting 10 seconds. 
*d. Stays in search mode but reduces PRF to max. 60 PPs after 15000 pulse pairs have been 
transmitted. 

23. A VOR and DME are co-located. You want to identify the DME by listening to the callsign. 
Having heard the same callsign 4 times in 30 seconds the? 
a. DME callsign was not transmitted, the distance information is sufficient proof of correct 
operation. 
b. DME callsign is the one with the lower pitch that was broadcast several times VOR and DME 
call signs were the same and broadcast with the same pitch. 
c. The VOR IDENT is transmitted three times followed by the DME IDENT transmitted once. 
*d. DME callsign is the one with the higher pitch that was broadcast only once. 

24. Which one is the most correct statements regarding the range of the DME system? 
a. Operates on the principle of phase comparison. 
*b. Range within “line of sight “ and maximum 200 nm. 
c. Operates on VHF. 
d. Has unlimited range due to ground wave propagation. 

25. The indicated range from a DME station is? 
*a. Slant range. 
b. Ground range only if the beacon is co-located with a VOR. 
c. 0 when passing overhead the station. 
d. Ground range. 

26. Regarding the DME system, which one of the following statements is true? 
a. The DME measures the phase difference between the reference and the variable signals to 
calculate the distance. 
b. DME operates in the VHF frequency band. 
*c. The transponder reply carrier frequency differs by 63 MHz from that of the interrogation 
signal. 
d. When passing overhead the DME station the DME will indicate 0. 

27. An aircraft passes overhead a DME station at 12000 ft above the station. At that time the 
DME reading will be? 
a. FLAG/OFF, the aircraft is within the cone of silence. 
*b. Approximately 2 nm. 
c. Fluctuating and not significant. 
d. 0 nm. 

28. When flying 6000ft above a ground level, the DME indicates 5 nm. What is the horizontal 
distance from the aircraft to overhead the DME? 
*a. 4.9 nm. 
b. 4.3 nm. 
c. 4.6 nm. 
d. 5.2 nm. 

29. Distance Measuring Equipment (DME) operates in the? 
a. UHF band and uses one frequency. 
b. VHF band and uses the principle of phase comparison. 
*c. UHF band and uses two frequencies. 
d. SHF and uses the frequencies modulation techniques. 

30. An aircraft at FL 300, with a groundspeed of 300 kts, is about to pass overhead a DME 
station at MSL. The dame receiver is capable of determining ground speed. One minute 
before the overhead, DME speed and distance indication respectively are? 
a. 300 kts and 5 nm. 
b. Less than 300 kts and 5 nm. 
c. 300 kts and 7 nm. 
*d. Less than 300 kts and 7 nm. 

31. The selection of the DME frequency for a ILS/DME installation is as follows? 
a. The pilot has to insert the channel number and also the X or Y. 
b. When an ILS/DME is flown then the selection of the DME has always to be done manually. 
c. The DME frequency has to be selected by the pilot. 
*d. The DME frequency is paired with the localiser frequency so only the localiser frequency is 
set. 

32. A fix obtained by rho-rho navigation is based on information from two? 
a. NDBs. 
b. VDFs. 
*c. DMEs. 
d. VORs. 

33. The reason for using different frequencies for the airborne and ground equipment of DME is? 
a. To avoid second trace returns when a DME is more than 200 nm away. 
b. That more DME frequencies are available from different beacons. 
c. That side lobes can be suppressed by the Side Lobe Suppressor (SLS). 
*d. To prevent that DME interrogation pulse pairs from being received by the aircraft after reflection on the earth’s surface. 

34. DME is a …..Radar which, provides …… Distances between the aircraft and a ground …..? 
a. Primary, slant, transponder. 
b. Secondary, earth, transponder. 
*c. Secondary, slant, transponder. 
d. Primary, accurate, transponder. 

35. DME pulses are transmitted as pulse pairs. This is done? 
a. To increase the range. 
b. To prevent lock onto the ground. 
c. So that pulses are square and easily identified. 
*d. So that any radar emissions do not interfere with the DME equipment. 

36. By using a random PRF the airborne DME can? 
a. Recognize a beacon’s reply among a mass of ground returns. 
b. Prevent interference from random transmissions. 
*c. Distinguish between its own replies and those replies triggered by other aircraft. 
d. Reduce the effect of weather interference. 

37. The aircraft DME receiver is able to accept replies to its transmission and reject replies to 
other aircraft interrogators because? 
a. Pulse pairs are amplitude modulated with the aircraft registration. 
b. Transmission frequencies are 63MHz different for each aircraft. 
c. Aircraft interrogation signals and the transponder response signals are 63MHz removed from each other. 
*d. The time interval between pulse pairs is unique to that aircraft. 

38. What happens when a DME in the search mode fails to achieve lock-on? 
a. It stays in the search mode at 150 PPPS. 
b. It stays in the search mode, but reduces to 60 pulse-pairs per second (PPPS) after 100 seconds. 
*c. It stays in the search mode, but reduces to 60 pulse-pairs per second (PPPS) after 15000 pulse pairs. 
d. It alternates between search and memory modes every 10 seconds. 

39. Groundspeed measurement using DME equipment’s is most accurate when flying? 
*a. From the station at long range. 
b. Towards the station at short range. 
c. Directly over the station. 
d. Past the station at short range. 

40. When in tracking mode, the DME airborne interrogator operates at? Note: PRR = Pulse 
Recurrence Rate. 
a. A PRR of 2700 PPS (Pulse Per Second). 
b. A PRR of 150 PPS. 
*c. A PRR variable between 5 and 25 PPS. 
d. A PRR fixed at a rate selected from the range 5 to 25 PPS. 

41. The DME ground transponder has a PRF of? 
*a. 2700 pulse per second. 
b. 27 pulse per second. 
c. 150 pulse per second. 
d. 1500 pulse per second. 

42. DME is a secondary radar operating in the (I)….. band using frequencies between (II)….? 
a. (i) UHF     (ii) 960 to 1215 GHz. z. 
b. (i) SHF       (ii) 960 to 1215 GH
*c. (i) UHF     (ii) 920 to 1215 GHz.
d. (i) SHF      (ii) 960 to 1215 GHz.
  
43. DME uses (i) …….radar principles in the (ii) …….. Band? 
a. (i) primary      (ii) UHF. 
b. (i) primary         (ii) SHF. 
*c. (i) secondary     (ii) UHF. 
d. (i) secondary     (ii) SHF. 

44. Aircraft position 34 degrees 15 minutes N 098 degrees E, magnetic variation 28 degrees W, 
FL280. PTV VOR/DME position 36 degrees 12’N 098 degrees E, magnetic variation 13 
degrees E. in order to read the most accurate ground speed given by the DME receiver from 
his present position, the pilot must fly on which PTC radial? 
*a. 167 degrees. 
b. 332 degrees. 
c. Aircraft will note receive DME information from PTC due to the line of sight. 
d. 193 degrees. 

45. Aircraft position 36 degrees 15 minutes S 178 degrees E, magnetic variation 21 degrees W, 
FL310. UEB VOR/DME position 36 degrees 15 minutes S 178 degrees W, magnetic variation 
21 degrees E. in order to read the most accurate ground speed given by the DME receiver 
from his present position, the pilot must fly on which UEB radial? 
a. 069 degrees. 
b. 111 degrees. 
c. 249 degrees. 
*d. 291 degrees. 

46. What are the DME frequencies? 
a. 960 to 1090 MHz. 
b. 1030 to 1090 MHz. 
c. 690 to 1215 MHz. 
*d. 960 to 1215 MHz. 

47. In a certain VORTAC installation the VOR station is identified as “STN” and the DME station is 
identified as “STZ”. This means that the distance between the two beacons is in excess of ? 
a. 100 m. 
b. 300 m. 
*c. 600 m. 
d. 2000 m. 

48. The nominal maximum coverage of a DME station is? 
a. 190 nm at 20 000 feet. 
b. 215 nm at 25 000 feet. 
*c. 210 nm at 30 000 feet. 
d. 230 nm at 30 000 feet. 

49. Ground DME responders responds at a frequency? 
a. 63 MHz higher than the interrogation signal. 
b. 63 MHz lower than the interrogation signal. 
c. The same as the interrogation signal. 
*d. 63 MHz different from the interrogation signal, above or below. 

50. If a DME beacon becomes saturated by interrogations it? 
a. Replies to the nearest 100 aircraft. 
b. Adjusts its PRF to cope with all aircraft. 
c. Switches off its identification. 
*d. Adjusts the gain to reply to the 100 strongest signals. 

51. The reason for using different frequencies for transmitting and receiving in the DME system 
is to? 
a. Avoid the reception in the aircraft of signals referring to the other aircraft. 
*b. Prevent self-triggering of the receiving equipment by the transmitter. 
c. Prevent overload of the system. 
d. Permit more channels in the system. 
   `);

registerChapterText("radio-navigation", "GNSS-GPS", "GNSS-GPS", `
42. VDF for aeronautical use provides service in the frequency range?
a. 108 to 118 MHz.
b. 108 to 136 MHz.
*c. 118 to 136 MHz.
d. 130 to 300 MHz.
Explanation: VDF operates in the VHF comms band, 118–136 MHz.

43. In flight a pilot can improve the range of his transmission with a VDF operator by?
*a. Increasing altitude.
b. Decreasing altitude.
c. Speaking louder.
d. Flying out of clouds.
Explanation: Climbing extends the VHF line-of-sight radio horizon.

44. What is the Q code for a magnetic bearing from a VDF station?
a. QNH.
b. QRE.
*c. QDR.
d. QDM.
Explanation: QDR = magnetic bearing FROM the station to the aircraft.
   `);