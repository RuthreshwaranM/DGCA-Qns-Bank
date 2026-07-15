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

registerChapterText("radio-navigation", "NDB", "NDB", `
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