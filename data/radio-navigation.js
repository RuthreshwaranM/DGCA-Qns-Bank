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

registerChapterText("radio-navigation", "Basic-Principle-ASSIGNMENT", "Basic-Principle-ASSIGNMENT", `
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

registerChapterText("radio-navigation", "vdf-ASSIGNMENT", "VDF-ASSIGNMENT", `
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

registerChapterText("radio-navigation", "ADF-ASSIGNMENT", "ADF-ASSIGNMENT", `
1. A radio beacon has an operational range of 10 NM. By what factor should the transmitter power 
be increased in order to achieve an operational range of 20 NM. 
a. Six. 
b. Eight. 
c. Two. 
*d. Four. 

2. Night effect’ which causes loss of signal and fading, resulting in bearing  errors from NDB 
transmissions, is due to: 
*a. Skywave distortion of the null position and is maximum at dawn and dusk. 
b. Interference from other transmissions and is maximum at dusk when east of the NDB. 
c. Static activity increasing at night particularly in the lower frequency band. 
d. The effect of the Aurora Borealis. 

3. Quadrantal errors associated with aircraft Automatic Direction Finding (ADF) equipment are 
caused by: 
a. Skywave/ground wave contamination. 
*b. Signal bending by the aircraft metallic surfaces. 
c. Signal bending caused by electrical interference from aircraft wiring. 
d. Misalignment of the loop aerial. 

4. An aeroplane is tracking away from an NDB maintaining track 020 degrees with 5 degrees 
starboard (right) drift. The relative bearing indicator (RBI) should indicate a bearing of? 
*a. 185 degrees relative. 
b. 175 degrees relative. 
c. 180 degrees relative. 
d. 015 degrees relative. 

5. What is the wavelength of an NDB transmitting on 365 khz? 
a. 8.2 m. 
b. 82 m. 
*c. 822 m. 
d. 8200 m. 

6. Which of the following is likely to have the greatest effect on ADF accuracy? 
*a. Interference from other NDBs, particularly at night. 
b. Frequency drift at the ground station. 
c. Interference from other NDBs, particularly during day. 
d. Mutual interference between aircraft aerials. 

7. There are two NDBs, one 20 NM inland, and the other 50 NM inland from the coast. Assuming 
that the error caused by coastal refraction is the same for both propagation, the extent of the 
error in a position line plotted by an aircraft that is over water will be? 
a. The same from both beacons when the aircraft is on a relative bearing of 180° and 360°. 
b. Greater from the beacon that is 20 NM inland. 
c. The same from both beacons when the aircraft is on a relative bearing of 090° and 270°. 
*d. Greater from the beacon that is 50 NM inland. 

8. Errors caused by the effect of coastal refraction on bearings at lower altitudes are maximum 
when the NDB is: 
*a. Inland and the bearing crosses the coast at an acute angle. 
b. Near the coast and the bearing crosses the coast right angles. 
c. Inland and the bearing crosses the coast at right angles. 
d. Near the coast and the bearing crosses the coast at an acute angle. 

9. An aeroplane is tracking towards an NDB maintaining track 120 degrees with 15 degrees 
starboard (right) drift. The relative bearing indicator (RBI) should indicate a nearing of? 
a. 105 degrees relative. 
b. 345 degrees relative. 
*c. 015 degrees relative. 
d. 135 degrees relative. 

10. What is the wavelength of an NDB transmitting on 375 khz? 
*a. 800 m 
b. 8000 m 
c. 8 m 
d. 80 m 

11. An aeroplane is tracking away from an NDB maintaining track 120 degrees with 15 degrees 
starboard (right) drift. The relative bearing indicator (RBI) should indicate a bearing of? 
a. 180 degrees relative. 
b. 015 degrees relative. 
*c. 195 degrees relative. 
d. 175 degrees relative. 

12. ADF bearing by an aeroplane by day within the published protection range should be accurate to 
within a maximum error of: 
a. +/-2°. 
*b. +/-5°. 
c. +/-10°. 
d. +/-2.5°. 

13. Which of the following is the ICAO allocated frequency band for ADF receivers? 
*a. 200 - 1750 
b. 255 - 455 
c. 300 – 3000 
d. 200 - 2000 

14. In order to obtain an ADF bearing the: 
*a. Signal must be received by both the sense and loop aerials. 
b. Sense aerial must be tuned separately. 
c. Mode selector should be switched to ‘loop’ 
d. BFO switch must be selected to ‘ON’. 

15. Factors liable to affect most NDB/ADF system performance and reliability include: 
a. Static interference – station interference – latitude error. 
b. Height error – station interference – mountain effect. 
c. Coastal refraction – lane slip – mountain effect. 
*d. Static interference – night effect- absence of failure warning system. 

16. Which one of the following disturbances is most likely to cause the greatest inaccuracy in ADF 
bearings? 
a. Coastal effect. 
b. Quadrantal error. 
c. Precipitation interference. 
*d. Local thunderstorm activity. 

17. The BFO selector or an ADF receiver is used to : 
*a. Hear the IDENT of some NDB stations radiating a continuous wave signal. 
b. Stop loop rotation. 
c. Hear the IDENT and must always be switched ON. 
d. Find the loop ‘null’ position. 

18. An NDB transmits a signal pattern in the horizontal plane which is: 
*a. Omnidirectional. 
b. Bi-lobal circular. 
c. A cardioids balanced at 30 Hz. 
d. A beam rotating at 30 Hz. 

19. What actually happens in the ADF receiver when the BFO position is selected? 
a. The BFO circuit is activated. 
*b. The BFO circuit imposes a tone onto the carrier wave to make the NDB’s ident audible. 
c. The BFO circuit activated, and the receiver accepts only A1A modulated signals. 
d. The BFO circuit oscillates at an increased frequency in order to allow identification of A2A 
NDB’s. 

20. An NDB is on a relative bearing of 316 degrees from an aircraft, Given: compass heading 270. 
Deviation = 2W. variation at the aircraft = 30E. Variation at the station = 28E. Calculate the true 
bearing of the NDB from the aircraft? 
a. 072 degrees. 
b. 252 degrees. 
c. 074 degrees. 
*d. 254 degrees. 

21. A VOR and an NDB are co-located. An aircraft equipped with an RMI is flying away from the 
beacons on a radial of 090 degrees through an area where magnetic variation is changing 
rapidly. Which statement is correct? 
a. The VOR needle moves, the ADF needle does not. 
b. Both VOR and ADF needles move. 
c. Neither the VOR nor the NDB needle move. 
*d. The ADF needle moves, the VOR needle does not. 

22. An NDB is on a relative bearing of 316 degrees from the aircraft. Given: compass heading 265 
degrees. At aircraft Deviation = 3W. Variation=36E. At station Variation=34E. calculate the true 
bearing of the NDB from the aircraft? 
*a. 254 degrees. 
b. 252 degrees. 
c. 074 degrees. 
d. 072 degrees. 

23. What is the wavelength of an NDB transmitting on 375 khz? 
a. 8 m. 
b. 8000 m. 
c. 80 m. 
*d. 800 m. 

24. Which of the following is likely to have the greatest effect on ADF accuracy? 
a. Frequency drift at the ground station. 
*b. Interference from other NDBs, particularly at night. 
c. Interference from other NDBs, particularly during the day. 
d. Mutual interference between aircraft aerials. 

25. You are on a magnetic heading of 055 degrees, and your ADF indicates a relative bearing of 325 
degrees. The QDM is? 
*a. 020 degrees. 
b. 235 degrees. 
c. 200 degress. 
d. 055 degress. 

26. Given: W/V (T) = 230/20 kts. Variation = 6E. TAS = 80 kts. What relative bearing from an NDB 
should be maintained in order to achieve an outbound course of 257 (M) from overhead the 
beacon? 
a. 008 degrees. 
b. 352 degrees. 
c. 172 degrees. 
*d. 188 degrees. 

27.  On the QDR of 075 degrees, (in the vicinity of the station) with magnetic heading of 295 
degrees, the relative bearing n the ADF indicator is? 
a. 040 degrees. 
b. 220 degrees. 
*c. 320 degrees. 
d. 140 degrees. 

28. A VOR and an NDB are co-located. You cross the VOR radical of 240 on a heading of 360(M). In 
the vicinity of the station you should read an ADF bearing of? 
a. 300 
b. 120 
c. 240 
*d. 60 

29. What does ADF stand for? 
*a. Automatic Direction Finding. 
b. Airport Direction Finding. 
c. Airbrone Direction Finding. 
d. Aeroplane Direction Finding. 

30. The quadrantal error of an ADF? 
*a. Is caused by the refraction from the aircraft’s fuselage and is compensated for. 
b. Is caused by interference from sky waves. 
c. Is caused by aircraft magnetism and varies with the deviation as shown on the deviation table. 
d. May be caused by interference of VORs within range of the ADF receiver and cannot be 
compensated for. 

31. Night effect in an ADF may cause? 
a. Noise in the received EM-wave, which hardly will be noticed by the pilots looking at the RMI. 
*b. Fluctuating indications of the needle on the rim. 
c. A constant error in the indicated heading. 
d. No bearing error because of the built-in compensator unit. 

32. The reading of the RMI bearing is 300 degrees. At the tip of the needle. The magnetic variation 
at the DR position is 24W, the magnetic variation at the NDB is 22W and deviation is -2 degrees. 
The compass heading is 020 degrees. The true bearing is? 
a. 294 degrees. 
b. 094 degrees. 
c. 272 degrees. 
*d. 274 degrees. 

33. With regard to the range of NDBs and the accuracy of the bearing they provide it can be stated 
that in general at night? 
a. The range increases and the accuracy decreases. 
*b. The range and the accuracy both decrease. 
c. The range and the accuracy both increase. 
d. The range decreases and the accuracy increases. 

34. Which statements with respect to the range of an NDB? 
*a. With propagation over sea the range will be greater than the range with propagation over land  
b. In order to double the range of an NDB, the transmission power should be increased by a factor 
of 16. 
c. The range depends on the altitude of the aircraft. 
d. During the night the range of an NDB will decrease due to the interference of the direct and 
earth reflected waves. 

35. Allocated frequencies for NDB are? 
a. 19 Hz to 17500 Hz. 
b. 1.90 khz to 17.50 khz. 
*c. 190 khz to 1750 khz. 
d. 1900 khz to 17500 khz. 

36. ADF is the abbreviation for? 
*a. Automatic Direction Finder. 
b. Automatic Direction Finder. 
c. Airport Direction Finder. 
d. Airport Direction Finding.  

37. The ADF indication in the cockpit is a? 
a. True bearing on an RMI. 
b. Relative bearing on an RMI. 
*c. Relative bearing on a fixed card. 
d. Magnetic heading on a fixed card indicator. 

38. NDB is the abbreviation for? 
*a. Non Directional Beacon. 
b. Night Directional Beacon. 
c. Non Directional Bearing. 
d. Navigation director Beacon. 

39. Concerning ADF and NDB? 
a. NDB is a locator and ADF is an en route nav-aid. 
b. ADF is a ground equipment and NDB can be a ground equipment or an airborne equipment. 
c. ADF is a civilian equipment whereas NDB is a military equipment used by civilians too. 
*d. NDB is a ground equipment, and ADF is an airborne equipment. 

40. What causes the so called ‘’night effect’’? 
*a. A change in the direction of the plane of the polarisation due to reflection in the ionosphere. 
b. The difference in velocity of the EM waves over land and over sea at night. 
c. The absence of the surface wave at distances larger than the skip distance. 
d. Interference between the ground and space waves. 

41. Which statements about the errors and effect on NDB radio signals is correct? 
a. Shore line effects may cause a huge bearing error due to reflection of the radio signals onto 
steep coasts. 
b. Lightning during atmospheric disturbances may cause a reduction of the signal strength that 
may result in only slight bearing error. 
c. Night effect is a result of interference of the surface wave and the space wave causing a 
reduction is range. 
*d. The mountain effect is caused by reflections onto steep slopes of mountainous terrain which 
may cause big error in the bearing. 

42. If a failed RMI rose is stuck on 090 degrees, and the ADF pointer indicates 225 degrees, the 
relative bearing to the station will be? 
a. 225 degrees. 
b. 315 degrees. 
c. Impossible to read, due to the RMI failure. 
*d. 135 degrees. 

43. If a failed RMI rose is stuck on 090 and the ADF pointer indicates 225, the relative bearing of the 
station will be? 
a. 225 degrees. 
b. 315 degrees. 
*c. Impossible to read, due to the RMI failure. 
d. 135 degrees. 
   `);

registerChapterText("radio-navigation", "VOR-ASSIGNMENT", "VOR-ASSIGNMENT", `
1. A VOR is sited at position A (45°00’N, 010°00’E). An aircraft is located at position B (44°00’N, 
010°00’E). Assuming that the magnetic variation at A is 10°W and at B is 15°W, the aircraft is on 
VOR radial: 
a. 195°. 
*b. 190°. 
c. 185°. 
d. 180°. 

2. An RMI indicates aircraft heading. To convert the RMI bearing of NDBs and VORs to true bearing 
the correct combination for the application of magnetic variation is: 
a. NDB: beacon position.        VOR: beacon position. 
b. NDB: beacon position.        VOR: aircraft position.
*c. NDB: aircraft position.       VOR: beacon position.  
d. NDB: aircraft position.        VOR: aircraft position. 

3. An aircraft is flying on the true track 090° towards a VOR station located near the equator. 
Where the magnetic variation is 15°E. The variation at the aircraft position is 8°E. 
The aircraft is on VOR radial? 
*a. 255° 
b. 278° 
c. 262° 
d. 285° 

4. Given:  
Magnetic heading 280°. 
VOR radial 090°. 
What hearing should be selected on the Omni-bearing selector in order to centralise the VOR 
deviation needle with a ‘’TO’’ indication? 
*a. 270°. 
b. 280°. 
c. 100°. 
d. 090°.  

5. A VOR is sited at position 58°00’N 073°00’W where the magnetic variation equals 32°W. 
An aircraft is located at position 56°00’N 073°00’W where the magnetic variation equals 28°W. 
The aircraft is on VOR radial? 
a. 208 
*b. 212 
c. 360 
d. 180 

6. The principle used in VOR bearing measurements is. 
*a. Phase comparison. 
b. Envelope matching. 
c. Beat frequency discrimination. 
d. Difference in depth of modulation. 

7. A VOR is sited at position A (35°00’N, 020°00’E). An aircraft is located at position B (34°00’N, 
020°00’E). Assuming that the magnetic variation at A is 15°W and at B is 20°W, the aircraft is on 
VOR radial: 
*a. 195°. 
b. 175°. 
c. 185°. 
d. 180°. 

8. A radial is the …… (I) bearing ……..(II) a VOR ground station? 
a. Magnetic    To.      
b. Relative        From.      
*c. Magnetic         From. 
d. True            From.     

9. Tuned to a VOR station, with OBS needle central, the instrument reads 140 degrees with FROM 
indicated. Relative to the VOR station the receiver is in the? 
a. Northwest sector. 
b. Northeast or southeast sector, depending on the heading of the aircraft when the reading is taken. 
c. Southwest sector. 
*d. Southeast sector. 

10. The VOR to obtain CDI (Course Deviation Indicator) indications in the correct sense when 
tracking towards a VOR on radial 255 degrees, the pilot should set on the OBS (Omni bearing 
selector)? 
*a. 075 degrees with TO indicated. 
b. 235 degrees with FROM indicated. 
c. 055 degrees with FROM indicated. 
d. 235 degrees with TO indicated. 

11. In order to obtain CDI (Course Deviation Indicator) indications in the correct sense when 
tracking towards a VOR on radial 235 degrees, the pilot set on the OBS (Omni bearing selector)? 
a. 235 degrees with FROM indicated. 
*b. 055 degrees with TO indicated. 
c. 055 degrees with FROM indicated. 
d. 235 degrees with TO indicated. 

12. A VOR is sited at position A (35°00’N, 020°00’E). An aircraft is located at position B (34°00’N, 
020°00’E). Assuming that the magnetic variation at A is 15°E and at B is 20°E, the aircraft is on 
VOR radial: 
*a. 165° 
b. 195° 
c. 160° 
d. 180° 

13. The VOR system is limited to about 1° of accuracy. One degree at 250 NM represents a width of: 
a. 2.0 NM. 
b. 2.5 NM. 
*c. 4.4 NM. 
d. 3.0 NM. 

14. The VOR system is limited to about 1° of accuracy. One degree at 300 NM represents a width of: 
*a. 5.2NM 
b. 4.0 NM. 
c. 4.5 NM. 
d. 3.0 NM. 

15. The two signals transmitted by a conventional VOR ground station are 180° out of phase on 
magnetic: 
a. East. 
b. West. 
c. North. 
*d. South. 

16. The two signals transmitted by a conventional VOR ground station are 270° out of phase on 
magnetic: 
*a. West. 
b. East. 
c. South. 
d. North. 

17. Which frequency band is used by VOR transmission? 
a. UHF. 
*b. VHF. 
c. SHF. 
d. HF. 

18. Transmission from VOR facilities may be adversely affected by: 
a. Static interference. 
b. Night effect. 
*c. Uneven propagation over irregular ground surfaces. 
d. Quadrantal error. 

19. If VOR bearing information is used beyond the published protection range, errors could be 
caused by: 
*a. Interference from other transmitter. 
b. Noise from precipitation static exceeding the signal strength of the transmitter. 
c. Sky wave interference from the same transmitter. 
d. Sky wave interference from distant transmitters on the same frequency. 

20. An aircraft is 100 NM, from a VOR facility. Assuming no error when using a deviation indicator 
where 1 dot = 2° deviation, how many dots deviation from the centre line of the instrument will 
represents the limits of the airway boundary? (Assume that the airway is 10 NM wide) 
*a. 1.5. 
b. 1.15. 
c. 1.7. 
d. 2.5. 

21. The two signals transmitted by a conventional VOR ground station are is phase on magnetic: 
a. East. 
*b. North. 
c. South. 
d. West. 

22. An airway 12 NM wide is to defined by two VORs each having a resultant bearing accuracy of 
plus or minus 5.5°. In order to ensure accurate track guidance within the airway limits the maximum distance apart 
for the transmitter is approximately? 
a. 50 NM. 
b. 165 NM. 
c. 210 NM. 
*d. 124 NM. 

23. An aeroplane flying on a heading of 280 degrees magnetic is on a bearing of 180 degrees 
magnetic from of VOR. 
The bearing to the VOR that should be selected on the OMNI bearing selector to centralise the 
VOR/ILS deviation needle is? 
*a. 360. 
b. 270. 
c. 180. 
d. 90. 

24. An aeroplane flying on a heading of 280 degrees magnetic is on a bearing of 180 degrees 
magnetic form of VOR. 
The bearing from the VOR that should be selected on the OMNI bearing selector to centralise 
the VOR/ILS deviation needle is? 
a. 90. 
*b. 180. 
c. 270. 
d. 360. 

25. Given: 
VOR station N66° E025°, variation 20°E: 
Estimated position of an aircraft N56° E025°, variation 25°E. 
What VOR radial is the aircraft on? 
*a. 160° 
b. 345° 
c. 165° 
d. 195° 

26. An airway 10 NM wide is to be defined by two VORs each having a resultant bearing accuracy of 
plus or minus 5.5°. 
In order to ensure accurate track guidance within the airway limits the maximum distance apart 
for the transmitter is approximately? 
a. 50 NM. 
*b. 105 NM. 
c. 165 NM. 
d. 210 NM. 

27. What is the maximum distance between VOR and DME/TACAN ground installations if they are to 
have the same morse code identifier? 
a. 2000 m. 
b. 60 m. 
c. 300 m. 
*d. 600 m. 

28. In order to plot a bearing from a VOR station, a pilot needs to know the magnetic variation: 
a. At the aircraft location. 
*b. At the VOR. 
c. At the halfway point between the aircraft and the station. 
d. At both the VOR and aircraft. 

29. An aircraft is required to approach a VOR station via the 244° radial. In order to obtain correct 
sense indications, the deviation indicator should be set to: 
a. 064° with the FROM flag showing. 
*b. 064° with the TO flag showing. 
c. 244° with the FROM flag showing. 
d. 244° with the TO flag showing. 

30. Which of the following statements concerning the variable, or directional, signal of a 
conventional VOR is correct? 
a. The transmitter varies the amplitude of the variable signal by 30Hz each time it rotates. 
*b. The rotation of the variable signal at a rate 30 times per second gives it the characteristics of a 
30Hz amplitude modulation. 
c. The transmitter changes the frequency of the variable signal by 30Hz either side of the allocated 
frequency each time it rotates. 
d. The receives adds 30 Hz to the variable signal before combining it with the reference signal 

31. The maximum theoretical range at which an aircraft at FL230 may receive signals from a VOR 
facility sited at mean sea level is: 
*a. 190 NM. 
b. 230 NM. 
c. 170 NM. 
d. 151 NM. 

32. If an aircraft files along a VOR radial it will follow a: 
a. Rhumb line track. 
b. Line of constant bearing. 
*c. Great circle track. 
d. Constant magnetic track. 

33. A VOR and NDB are co-located. An aeroplane fitted with a RMI is flying away from the beacons 
on a radial of 090 degrees. The variation is changing rapidly. 
Which of the following statements is true? 
a. The ADF needle will not move, but the VOR needle will move as the variation changes. 
*b. The VOR needle will not move, but the ADF needle will move as the variation changes. 
c. Both the VOR needle and the ADF needle will move as the variation changes. 
d. Neither the VOR needle nor the ADF needle will move. 

34. The two signals transmitted by a conventional VOR ground station are 90° out of phase on 
magnetic: 
a. South. 
*b. East. 
c. West. 
d. North. 

35. An aircraft is flying on a heading of 270°(M). The VOR OBS is also set to 270°with the full left 
deflection and FROM flag displayed. In which sector is the aircraft from the VOR ground station? 
a. SW. 
*b. NW. 
c. SE. 
d. NE. 

36. An Omni-bearing selector (OBS) shows full deflection to the left when within range of a 
serviceable VOR. What angular deviation are you from the selected radial? 
*a. 10° or more. 
b. Less than 10°. 
c. 1.5° or more. 
d. 2.5 or more. 

37. An aircraft is on radial 120 with a magnetic heading of 300°, the track selector  
(OBS) reads: 330 The indications on the Course Deviation Indicator (CDI) are ‘fly’: 
*a. Left with ‘TO’ showing. 
b. Right with ‘TO’ showing. 
c. Right with ‘FROM’ showing. 
d. Left with ‘FROM’ showing. 

38. Given: 
Course Deviation Indicator (CDI) for a VOR is selected to 090°. 
From/To indicator indicates “TO”. 
CDI needle is deflected halfway to the right. 
On what radial is the aircraft? 
a. 85. 
b. 265. 
c. 95. 
*d. 275. 

39. The frequency range of a VOR receiver is: 
a. 108 to 111.95MHz. 
*b. 108 to 117.95MHz. 
c. 118 to 135.95MHz. 
d. 108 to 135.95MHz. 

40. If the reference phase differs 30° with the variable phase the radial from the VOR station will be: 
*a. 030°. 
b. 330°. 
c. 210°. 
d. 150°. 

41. The captain of an aircraft flying at FL100 wishes to obtain weather information at the 
destination airfield from the airfield’s VOR. At what maximum theoretical range will it be 
possible to obtain this information? 
a. 123 km. 
b. 12.3 NM. 
*c. 125 NM. 
d. 1230 km. 

42. You are on a compass heading of 090 degrees on the 255 radial from a VOR. You set the course 
190 degrees on your OBS. The deviation bar will show? 
a. Full scale defection right with a ”FROM” indication. 
b. Full scale deflection left with a “TO” indication. 
c. Full scale deflection right with a “TO” indication. 
*d. Full scale deflection left with a “FROM” indication. 

43. In order to measure the radial from a VOR, the aircraft receiver? 
*a. Measures the phase difference between the reference phase end the variable phase of the 
signal. 
b. Measure the time difference between sending the interrogation signal and receiving the 
transporter signal. 
c. Uses the pulse technique to determine the radial. 
d. Measures the amplitude difference between the reference signal and the variable signal.

44. An OBS is set to 048 with a TO flag showing. The VOR deviation bar is showing full right 
deflection. Approximately what radial are you on? 
a. 058 degrees. 
*b. 238 degrees. 
c. 218 degrees. 
d. 038 degrees. 

45. The OBS is set to 235 degrees. “TO” appears in the window. The needle is close to half scale left 
deflection. The VOR radial is approximately? 
a. 230 degrees. 
b. 060 degrees. 
c. 240 degrees. 
*d. 050 degrees. 

46. Your aircraft is heading 075(M). The OBS is set to 025. The VOR indications are “TO” with the 
needle showing right deflection. Relative to the station, you are situated in a quadrant defined 
by the radials? 
a. 025 degrees and 115 degrees. 
*b. 205 degrees and 295 degrees. 
c. 295 degrees and 025 degrees. 
d. 115 degrees and 205 degrees. 

47. Given: Course Deviation Indicator (CDI) for a VOR is elected to 090 degrees. From/To indicator 
indicates ”TO”. CDI needle is deflected halfway to the right. On what radial is the aircraft? 
a. 85. 
b. 95. 
*c. 275. 
d. 265. 

48. The maximum theoretical range at which an aircraft at FL230 can receive signals from a VOR 
facility sited at MSL is? 
*a. 190 nm. 
b. 170 nm. 
c. 230 nm. 
d. 151 nm. 

49. Two aircraft are located on (arbitrary) different radials but at equal distances from a VOR 
station. 
Which statement is true. 
a. At a certain moment of time the phase of the reference signals is equal and the phases of the 
variable signals is equal for both. 
b. At a certain moment of time. Both the phase of the reference signals and the phase of the 
variable signals are equals for the both aircraft. 
c. At a certain moment of time, both the phase of the reference signals and the phase of the 
variable signals are unequal for both aircraft. 
*d. At a certain moment of time the phase of the reference signals is equal and the phases of the 
variable signals is unequal for both. 

50. Unless otherwise specified a radial is? 
*a. The magnetic great circle direction from the beacon. 
b. The true great circle direction from the beacon. 
c. The magnetic great circle direction to the beacon. 
d. The true great circle direction to the beacon. 

51. In the VOR receiver the radial is determined by measurement of the? 
a. Time difference between the reception of the variable signal and the reference signal. 
b. Doppler shift on the reference signal. 
c. Phase of the variable signal. 
*d. Phase difference between the variable signal and the reference signal. 

52. Which of the following statements about the scalloping (path deflection) of VOR radials, in 
relation to the accuracy of navigation using a VOR/DME RNAV system is correct? 
*a. Scalloping has a negative effect on the accuracy of navigation. 
b. Scalloping has a positive effect on the accuracy of navigation. 
c. Scalloping has no effect on the accuracy of navigation because the accuracy is independent of 
VOR or DME measurements. 
d. Scalloping has no effect on the accuracy of navigation because it only results in the movement 
of the needle of the Course Deviation Indicator. 

53. Which statements is true about use of the Doppler VOR? 
*a. The Doppler effect is used to create a signal, which is received by the aircraft’s VOR receiver as a 
frequency modulated signal. 
b. The Doppler effect is used to create a signal, which is received by the aircraft’s VOR receiver as 
an amplitude modulated signal 
c. By using Doppler effect it is also possible to determine the aircraft’s approach speed to the VOR. 
d. By using Doppler effect it is also possible to determine the range of the aircraft from the VOR. 
station more accurately. 

54. Given: 
Aircraft heading 160°(M), 
Aircraft is on radial 240° from a VOR, 
Selected course on HIS is 250°. 
The HIS indication are deviation bar? 
*a. Behind the aeroplane symbol with the FROM flag showing. 
b. Behind the aeroplane symbol with the TO flag showing. 
c. Ahead of the aeroplane symbol with the FROM flag showing. 
d. Ahead of the aeroplane symbol with the TO flag showing. 

55. Given: 
Aircraft heading 045° (M), 
Aircraft is on radial 080° from a VOR. 
Selected course on HIS is 090°. 
The HIS indication are deviation bar? 
*a. Behind the aeroplane symbol with the FROM flag showing. 
b. Behind the aeroplane symbol with the TO flag showing. 
c. Ahead of the aeroplane symbol with the FROM flag showing. 
d. Ahead of the aeroplane symbol with the TO flag showing. 

56. An RMI slaved to a remote indicating compass has gone unserviceable and is locked on to a 
reading of 090°. The tail of the VOR pointer shows 135°. The available information from the VOR 
is: 
*a. Radial 135°, relative bearing unknown. 
b. Radial unknown, relative bearing 225°. 
c. Radial unknown, relative bearing 045°. 
d. Radial 315°, relative bearing unknown. 

57. Apart from radials and distances from VOR/DME stations, what information is required by the 
VOR/DME Area Navigation computer in order to calculate the wind? 
a. True airspeed from the Air Data Computer. 
b. Heading from the aircraft compass system. 
c. Vertical speed from the air data computer. 
*d. Heading from the aircraft compass system and true airspeed form the Air Data Computer. 
 
   `);

registerChapterText("radio-navigation", "ILS-ASSIGNMENT", "ILS-ASSIGNMENT", `
1. The amplitude modulation and the colour of an outer marker (OM) is: 
a. 3000 Hz, blue. 
b. 1300 Hz, blue. 
*c. 400 Hz, blue. 
d. 400 Hz, amber. 

2. A Category 1 instrument Landing System (ILS) ground installation provides accurate guidance 
from coverage limit down to: 
*a. 200 feet above the runway threshold. 
b. 50 feet above ILS reference point. 
c. Runway surface. 
d. 200 feet above the inner marker. 

3. The reasons why are pre take-off holding areas are sometimes further from the active runway 
when ILS Category 2 and 3 landing procedures are in progress than during good weather 
operation is: 
a. Heavy precipitation may disturb guidance signals. 
b. To increase distance from the runway during offset approach operations. 
*c. Aircraft manoeuvring near the runway may disturb guidance signals. 
d. To increase aircraft separation in very reduced visibility conditions. 

4. An aircraft tracking to intercept the Instrument Landing System (ILS) localiser inbound on the 
approach side, outside the published ILS coverage angle. 
a. Will not normally receive signals. 
*b. May receive false course indications. 
c. Will receive signals without identification coding. 
d. Can except signals to give correct indications. 

5. The MIDDLE MARKER of an Instrument Landing System (ILS) facility is identified audibly and 
visually by a series of: 
*a. Alternate dots and dashes and an amber light flashing. 
b. Two dashes per second and a blue light flashing. 
c. Dots and a white light flashing. 
d. Dashes and an amber light flashing. 

6. The OUTER MARKER of an Instrument Landing System (ILS) facility transmit on a frequency of: 
a. 200 MHz and is modulated by alternate dot/dash in Morse. 
b. 75 MHz and is modulated by alternate dot/dash in Morse. 
c. 300 MHz and is modulated by Morse at two dashes per second. 
*d. 75 MHz and is modulated by Morse at two dashes per second. 

7. What approximate rate of decent is required in order to maintain a 3° glide path at a 
groundspeed of 120 kt? 
a. 550 FT/MIN. 
*b. 600 FT/MIN. 
c. 800 FT/MIN. 
d. 950 FT/MIN. 

8. The outer marker of an ILS with a 3° glide slope is located 4.6 NM from the threshold. Assuming 
a glide slope height of 50 FT above the threshold, the approximate height of an aircraft passing 
the outer marker is: 
a. 1400 FT. 
b. 1350 FT. 
*c. 1450 FT. 
d. 1300 FT. 

9. What is the colour sequence when passing over an Outer, Middle and Inner Marker beacon? 
*a. Blue – amber – White. 
b. Amber – White – Green. 
c. White – Amber – Blue. 
d.  Blue – Green – White. 

10. What is the approximate angular coverage of reliable navigation information for a 3° ILS gilde 
path out to a distance of 10 NM. 
*a. 1.35° above the horizontal to 5.25° above the horizontal and 8° each side of the localiser centreline. 
b. 0.45 above the horizontal to 1.75° above the glide path and 8° each side of the localiser centreline. 
c. 0.7° above and below the glide path and 2.5° each side of the localiser centreline. 
d. 3° above and below the glide path and 10° each side of the localiser centreline. 

11. ILS is subject to false glide paths resulting from. 
a. Spurious signals reflected by nearby obstacles. 
*b. Multiple lobes of radiation patterns in the vertical plane. 
c. Back-scattering of antennas. 
d. Ground returns ahead of the antennas. 

12. An aircraft carrying out an ILS approach is receiving more 90 Hz than 150 Hz modulation notes 
from both the localiser and glide path transmitters. The ILS indication will show: 
a. Fly left and fly down. 
*b. Fly right and fly down. 
c. Fly right and fly up. 
d. Fly left and fly up. 

13. An aircraft carrying out a 3° glide path ILs approach experiences a reduction in groundspeed 
from 150kt at the marker to 120 kt over the threshold. The effect of the change in groundspeed 
on the aircraft’s rate of descent will be a decrease of approximately. 
a. 250 FT/MIN. 
b. 50 FT/MIN. 
*c. 150 FT/MIN. 
d. 100 FT/MIN. 

14. The principle of operation of an ILS localiser transmitter is based on two overlapping lobes that 
are transmitted on (i) ……….. frequencies and carry different (ii)……………. 
*a. (i) The same (ii) Modulation frequencies. 
b. (i) The same (ii) Phases. 
c. (i) The same (ii) modulation frequencies. 
d. (i) The same (ii) Phases. 

15. In which frequency band does an ILS glide slope transmit? 
a. VHF. 
b. SHF. 
*c. UHF. 
d. EHF. 

16. Assuming a five dot display, what does each of the dots on either side of the ILs localizer cockpit 
display represent: 
*a. 0.5 degrees. 
b. 1.5 degrees. 
c. 2.5 degrees. 
d. 2.0 degrees. 

17. Outer marker transmit on 75 MHz and has an aural frequency of: 
a. 1300 Hz. 
*b. 400 Hz. 
c. 2000 Hz. 
d. 3000 Hz. 

18. Every 10 Kt decrease in groundspeed, on a 3° ILS glide path, will require an approximate: 
a. Increase in the aircraft’s rate of descent of 50 FT/MIN. 
*b. Decrease in the aircraft’s rate of descent of 50 FT/MIN. 
c. Decrease in the aircraft’s rate of decent of 100 FT/MIN. 
d. Increase in the aircraft’s rate of descent of 100 FT/MIN. 

19. Instrument Landing System (ILS) Glide Paths provide azimuth coverage (i)….. °each side of the 
localiser centre-line to a distance of (ii) …….. NM from the threshold. 
a. (i) 25 (ii) 17. 
b. (i) 35 (ii) 25. 
c. (i) 5   (ii) 8. 
*d. (i) 8   (ii) 10. 

20. The rate of descent required to maintain a 3.25° glide slope at a groundspeed of 140 kt is 
approximately: 
*a. 800 FT/MIN. 
b. 850 FT/MIN. 
c. 670 FT/MIN. 
d. 700 FT/MIN. 

21. Where, in relation to the runway, is the ILs localiser transmitting aerial normally situated? 
*a. At the approach end of the runway about 300 m from touchdown on the Centreline. 
b. On the non-approach end of the runway about 300 m from the runway on the extended 
centreline. 
c. At the non-approach end about 150 m to one side of the runway and 300 m along the extended 
centreline. 
d. At the approach end about 150 m to one side of the runway and 300 m from touchdown. 

22. A Cat III ILS glide path transmitter provides reliable guidance information down to: 
a. A maximum height of 200 ft above the runway. 
b. A maximum height of 100 ft above the runway. 
c. A maximum height of 50 ft above the runway. 
*d. The surface of the runway. 

23. Which of the following is an ILS localiser frequency? 
a. 108.25 MHz. 
*b. 109.15 MHz. 
c. 110.20 MHZ. 
d. 112.10 MHz. 

24. What approximate rate of descent is required in order to maintain a 3° glide path at a 
groundspeed of 90 kt? 
*a. 450 FT/MIN. 
b. 400 FT/MIN. 
c. 600 FT/MIN. 
d. 700 FT/MIN. 

25. The heading rose of an HSI is frozen on 200°. 
Lined up on the ILS of runway 25, the localiser needle will be? 
a. Left of centre. 
b. Right of centre. 
c. Centred with the ‘fail’ flag showing. 
*d. Centred. 

26. What are the modulation frequencies of the two overlapping lobes that are used on an ILS 
approach? 
*a. 90 Hz        150 Hz. 
b. 63 MHz     123 MHz. 
c. 75 KHz      135 Khz. 
d. 328 MHz   335 MHz. 

27. Full scale deflection of the localiser needle indicates that the aircraft is approximately? 
*a. 2.5 degrees offset from the localiser centreline. 
b. 10 degrees offset from the localiser centreline. 
c. 1.25 degrees offset from the localiser centreline. 
d. 5 degrees offset from the localiser centreline. 

28. On an ILS approach, the localiser needle is fully over to the left. How much deflection does this 
indicate? 
*a. 2.5 degrees. 
b. 0.7 degrees. 
c. 5 degrees. 
d. 10 degrees. 

29. False beams on the ILS glide path are? 
a. Only found below the correct glide slope. 
b. Only found if more that 10 degrees left or right of localiser centreline. 
c. Only found if flying the back beam ILS approach. 
*d. Only found above the correct glide slope. 

30. According to the ILS coverage areas as defined in ICAO Annex 10, in which of the following 
situations will the pilot be guaranteed a reliable signal from the localiser? 
a. 19 nm from touchdown inbound and 13 degrees displaced from the localiser centreline. 
b. 27 nm from touchdown inbound and 8 degrees displaced from the localiser centreline. 
c. 10 nm from touchdown inbound and 38 degrees displaced from the localiser centreline.   
*d. 20 nm from touchdown inbound and 8 degrees displaced from the localiser centreline. 

31. What is measured in order to establish aircraft position in relation to the localiser beam on an 
ILS? 
a. The difference in phase between the 90 Hz and the 150 Hz modulations. 
*b. The difference in depth between the 90 Hz and the 150 Hz modulations. 
c. The difference in time between the 90 Hz and the 150 Hz modulations. 
d. The bearing to the localiser antenna found by means of a loop aerial. 

32. Which of the following alternatives is correct regarding audio and visual signals in the cockpit 
when passing overhead the middle marker? 
a. Audio: 74 MHz 2 dots per second. Visual: Blue light flashes. 
*b. Audio: 1300 Hz alternating dots and dashes. Visual: Amber light flashes. 
c. Audio: 400 Hz, 2 dashes per second, Visual: Blue light flashes. 
d. Audio: 3000 Hz alternating dots and dashes. Visual: Amber light flashes. 

33. If you are flying a back course ILS, you are flying a? 
a. Non precision approach on the precision approach runway. 
b. Precision approach on the reciprocal runway of the precision approach runway. 
*c. Non precision approach on the reciprocal runway of the precision approach runway. 
d. Precision approach on the precision approach runway. 

34. Full deflection on a glide slope indicator indicates that the aircraft is? 
*a. 0.7 degrees above or below the correct glide path. 
b. 1.25 degrees above or below the correct glide path. 
c. 2.5 degrees above or below the correct glide path. 
d. 0.5 degrees above or below the correct glide path. 

35. Assuming a five dot display on the either side of the ILS localiser cockpit display. What is the 
angular displacement of the aircraft from the localiser centreline when the CDI is deflected 2 
dots to the right? 
*a. 1.0 degrees to the left. 
b. 1.0 degrees to the right. 
c. 2.0 degrees to the left. 
d. 2.0 degrees to the right. 

36. Which of the following correctly describes the Instrument Landing Systems (ILS) localiser 
radiation pattern? 
*a. Two overlapping lobes on the same VHF carrier frequency. 
b. Two overlapping lobes on the same UHF carrier frequency. 
c. Two overlapping lobes on different radio carrier frequencies but with the same modulation. 
d. A pencil beam comprising a series of smaller beams each carrying different modulation. 

37. According to ICAO 8168, what is regarded as the maximum safe deviation below the glide path 
during ILS approaches? 
a. One quarter scale deflection. 
b. Full scale deflection. 
c. Three quarters scale deflection. 
*d. Half scale deflection. 

38. One of the possible disturbances of the ILS signals is “scalloping”, which statement is correct? 
a. Scalloping are minor changes of bends, which can be followed by the aircraft. 
b. Scalloping are major changed or bends, which cannot be followed by the aircraft. 
c. Scalloping are rapid changed or bends, which can be followed by the aircraft. 
*d. Scalloping causes rapid indicator changers from side to side of the intended approach path, 
which cannot be following by the aircraft. 

39. An ILS marker beacon operates in the? 
*a. VHF band. 
b. UHF band. 
c. LF/MF band. 
d. HF band. 

40. If the (angular) displacement of an aircraft (with respect to the localiser centreline) doubles, 
(e.g. From 1 degrees to 2 degrees) measured difference in the depth of modulation? 
*a. Doubles. 
b. Remains unchanged. 
c. Is halved. 
d. Increases fourfold. 

41. Concerning the localiser principle of operation in an ILS system, the difference in depth of 
modulation (DDM)? 
a. Decrease with respect to the angular displacement form the centreline. 
*b. Increase linearly with respect to the angular displacement from the centreline. 
c. Decreases proportionally with respect to the angular displacement from the centreline. 
d. Increase linearly with respect to the distance from the centreline. 

42. The ILS market identified audibly by a series by a series of two dashes per second is the? 
*a. Outer marker. 
b. Middle marker. 
c. Inner marker. 
d. Locator. 

43. The ILS receiver of an aircraft flying down the exact runway centreline will receive? 
*a. 90 Hz and 150 Hz lobes at equal depth. 
b. No modulated sign because the left and right lobes cancel each other along the centreline. 
c. The same frequency modulated signal from both lobes with the maximum of magnitude. 
d. The maximum magnitude of the difference between the 90Hz and the 150 Hz amplitudes. 

44. The back CRS of an ILS may give? 
a. Precision approach guidance for the reciprocal of the main approach runway. 
b. Non-precision guidance for the main approach runway. 
c. Precision approach guidance for the main approach runway. 
*d. Non-precision guidance for the reciprocal of the main approach runway. 

45. The ILS marker identified by a series of alternate dots and dashes is the? 
*a. Middle marker. 
b. Inner marker. 
c. Outer marker. 
d. Locator. 

46. “Beam bends” in the ILS approach path are? 
a. Curves in the normal approach because of noise abatement. 
b. Curves in the glide path that are visible on the indicator, but change too fats to be followed by 
large aircraft. 
c. Curved approaches made with the aid of the instrument landing system. 
*d. Slight curves that can be followed by large aircraft. 

47. 108.35 MHz can only be? 
*a. An ILS frequency. 
b. A VOR frequency. 
c. An ATC frequency. 
d. A NDB frequency. 

48. ILS transmitters use the? 
*a. UHF and VHF bands. 
b. VHF, UHF, and HF bands. 
c. VHF band only. 
d. UHF band only. 

49. Concerning the localiser principle of operation in an ILs, the needle of the aircraft indicator is 
centred when the difference in depth of modulation (DDM) is? 
*a. Null. 
b. More than 150 Hz. 
c. Maximum. 
d. Less than 90 Hz. 

50. An ILS receiver? 
*a. Measures the difference is depth of modulation of the transmitted signals. 
b. Measures the phase difference of the transmitted signals. 
c. Measures the difference in frequency of modulation of the transmitted signals. 
d. Measures the phase rotation of the two transmitted signals. 
   `);

registerChapterText("radio-navigation", "Basic-Radar-ASSIGNMENT", "Basic-Radar-ASSIGNMENT", `
1. The minimum range of a primary radar, using the pulse technique, is determined by the 
(i)………the maximum unambiguous range by the (ii)…………… 
*a. (i) pulse length.         (ii) pulse recurrence frequency.            
b. (i) Transmission frequency.    (ii) transmitter power output. 
c. (i) Pulse length.                (ii) Length of the time base.
d. (i) Transmission frequency.     (ii) pulse recurrence frequency. 

2. Which of the following statements is correct concerning the use in primary radar of continuous 
wave transmissions as compared with pulse transmissions? 
a. A smaller common transmitter and receiver aerial can be used. 
b. It is less effective in short range radars but more effective in long range radars. 
*c. It eliminates the minimum target reception range. 
d. The equipment required is more complex in continuous wave radar but this is offset by greater 
reliability and accuracy. 

3. A Primary radar operates on the principle of: 
a. Transponder interrogation. 
*b. Pulse technique. 
c. Phase comparison. 
d. Continuous wave transmission. 

4. The main factor which determines the minimum range that can be measured by a pulsed radar 
is pulse: 
*a. Length. 
b. Amplitude. 
c. Repetition rate. 
d. Frequency. 

5. Ignoring pulse length, the maximum pulse repetition frequency (PRF) that can be used by a 
primary radar facility to detect targets unambiguously to a range of 200 NM is? (pps = Pulse per 
second) 
a. 308 pps. 
b. 375 pps. 
*c. 405 pps. 
d. 782 pps. 

6. The maximum range of primary radar depends on: 
a. Wave length. 
b. Frequency. 
c. Pulse length. 
*d. Pulse recurrence frequency. 

7. For any given circumstances, in order to double the effective range of a primary radar the power 
output must be increased by a factor of: 
a. 2. 
b. 4. 
c. 8. 
*d. 16. 

8. The prime factor in determining the maximum  unambiguous range of a primary radar is the: 
a. Power output. 
*b. Pulse recurrence rate. 
c. Size of parabolic receiver aerial. 
d. Height of the transmitter above the ground. 

9. Which of the following types of radar systems are most suited for short range operation? 
*a. Primary continuous wave. 
b. Centimetric pulse. 
c. Millimetric pulse. Secondary continuous wave. 
d. kilometric pulse

10. In which frequency band do most airborne weather, and ground based ATC, radar systems 
operate? 
a. UHF. 
b. EHF. 
c. VHF. 
*d. SHF. 

11. In relation to radar systems that use pulse technology, the term ‘pulse Recurrence Rate (RPP)’ 
signifies the: 
*a. Number of pulses per second. 
b. Delay after which the process re-starts. 
c. The number of cycles per second. 
d. Ratio of pulse period to pulse width. 

12. In a primary radar using pulse technique, pulse length determines: 
a. Target discrimination. 
b. Maximum measurable range. 
*c. Minimum measurable range. 
d. Beam width. 

13. In a primary radar using pulse technique, pulse recurrence frequency/ pulse recurrence rate 
determines: 
*a. Maximum theoretical range. 
b. Target discrimination. 
c. Minimum range. 
d. Beam width. 

14. In a primary radar using pulse technique, the ability to discriminate between targets in azimuth 
is a factor of: 
a. Aerial rotation rate. 
b. Pulse Recurrence Rate (PRR). 
c. Pulse length. 
*d. Beam width. 

15. Which of the following radar equipment’s operate by means of the pulse technique? 1. Aerodrome Surface Movement Radar. 2. Airborne Weather Radar. 3. Secondary Surveillance Radar (SSR). 4. Aerodrome Surveillance (approach) Radar. 
*a. 1,2,3 and 4. 
b. 1,2 and 4 only. 
c. 2,3 and 4 only. 
d. 2 and 4 only. 

16. Assuming sufficient transmission power, the maximum range of a ground radar with a pulse 
repetition frequency of 450 pulses per second is: (Given: velocity of light is 300 000 km/second) 
a. 666 km. 
b. 1333 km. 
c. 150 km. 
*d. 333 km. 

17. Complete the following statement. Aircraft Surface movement Radar operates on frequencies in 
the (i) ………. Band employing an antenna that rotates at approximately (ii) ……revolutions per 
minute; it is (iii) ……. Possible to determine the type of aircraft from the return on the radar 
screen. 
a. (i) EHF      (ii) 30       (iii) never. 
*b. (i) SHF      (ii) 60       (iii) sometimes. 
c. (i) SHF      (ii) 10       (iii) always.   
d. (i) EHF      (ii) 100     (iv) never. 

18. The maximum pulse repletion frequency (PRF) that can be used by a primary radar facility in 
order to detect targets unambiguously at a range of 50 NM is?  (pps= Pulses second) 
a. 3240 pps. 
b. 610 pps. 
*c. 1620 pps. 
d. 713 pps. 

19. Ignoring pulse length and fly-back, a radar facility designed to have a maximum unambiguous 
range of 50 km will have a PRF(pulse per second) of: 
*a. 3000. 
b. 6000. 
c. 167. 
d. 330. 

20. Which combination of characteristics gives best screen picture in a primary search radar? 
a. Long pulse length and wide beam. 
*b. Short pulse length and narrow beam. 
c. Long pulse length and narrow beam. 
d. Short pulse length and wide beam. 

21. The maximum range obtainable from an ATC Long Range Surveillance Radar is approximately. 
*a. 300 NM. 
b. 200 NM. 
c. 100 NM. 
d. 400 NM. 

22. On which of the following radar displays is it possible to get an indication of the shape, and to 
some extent the type, of the aircraft generating the return? 
a. Secondary Surveillance Radar (SSR). 
b. Aerodrome Surveillance (approach) Radar. 
*c. Aerodrome Surface Movement Radar (ASMR). 
d. Airborne Weather Radar (AWR). 

23. Which of the following equipment’s uses primary radar principles? 
a. Secondary Surveillance Radar (SSR). 
b. Distance Measuring Equipment (DME). 
*c. Airborne weather Radar (AWR). 
d. Global positioning System (GPS). 

24. Comparing a parabolic reflector with a flat plate antenna of the same size. 
a. The parabolic reflector generates less side lobes than the flat plate antenna. 
b. The parabolic reflector has a considerably smaller beam width. 
*c. The flat plate antenna generates less side lobes than the parabolic reflector. 
d. The flat plate antenna has a considerably smaller beam width. 

25. The theoretical maximum range for an Airborne Weather Radar is determined by the: 
a. Transmission power. 
b. Size of the aerial. 
c. Transmission frequency. 
*d. Pulse recurrence frequency. 

26. The advantage of the use of slotted antennas in modern radar technology is to: 
*a. Virtually eliminate lateral lobes and as a consequence concentrate more energy in the main 
beam. 
b. Simultaneously transmit weather and mapping beams. 
c. Have a wide beam and as a consequence better target detection. 
d. Eliminate the need for azimuth slaving. 
   `);
   
registerChapterText("radio-navigation", "AWR-ASSIGNMENT", "AWR-ASSIGNMENT", `
1. Airborne weather radar system use a wavelength of approximately 3 cm in order to: 
a. Transmit at a higher pulse repetition frequency for extended range. 
b. Obtain optimum use of the Cosecant squared beam. 
c. Detect the smaller cloud formations as well as large. 
*d. Detect the larger water droplets. 

2. The ISO-ECHO facility of an airborne weather radar is provided in order to: 
*a. Detect areas of possible severe turbulence in cloud. 
b. Give an indication of cloud tops. 
c. Inhibit unwanted ground returns. 
d. Extend the mapping range. 

3. In the MAPPING MODE the airborne weather radar utilizes a: 
a. Fan shaped beam effective up to a range of 150 NM. 
*b. Fan shaped beam effective up to a maximum of 50 NM to 60 NM range. 
c. Pencil beam to a maximum range of 60 NM. 
d. Pencil beam effective from zero to 150 NM. 

4. Which of the following cloud types is most readily detected by airborne weather radar when 
using the ‘weather beam’? 
a. Cirrocumulus. 
*b. Cumulus. 
c. Stratus. 
d. Altostratus. 

5. In which mode of operation does the aircraft weather radar use a cosecant radiation 
pattern? 
a. CONTOUR. 
b. WEATHER. 
*c. MAPPING. 
d. MANUAL. 

6. In an Airborne Weather Radar that has a colour cathode ray tube (CRT) the areas of greatest 
turbulence are indicated on the screen by: 
*a. Colour zones being closet together. 
b. Blank iso-echo areas where there is no colour. 
c. Large area of flashing red colour. 
d. Iso-echo areas, which are, coloured black. 

7. Which of the following is a complete list of airborne weather radar antenna stabilisation 
axes? 
a. Roll, pitch and yaw. 
b. Pitch and yaw. 
*c. Roll and pitch. 
d. Roll and yaw. 

8. In an Airborne Weather radar that has a colour ray tube (CRT) increasing severity of rain and 
turbulence is generally shown by a change of colour from. 
*a. Green to yellow to red. 
b. Yellow to amber to blue. 
c. Green to red to black. 
d. Yellow to orange to red. 

9. A frequency of 10 GHz is considered to be the optimum for use in an airborne weather radar 
system because:  
a. Greater detail can be obtained at the more distant ranges of the smaller water droplets. 
*b. The larger water droplets will give good echoes and the antenna can be kept relatively small. 
c. Static interference is minimized. 
d. Less power output is required in the mapping mode. 

10. In general the operation of airborne weather radar equipment on the ground is: 
*a. Only permitted with certain precautions, to safeguard health of personnel and to protect 
equipment. 
b. Permitted anywhere 
c. Totally prohibited. 
d. Unrestrictedly permitted in aerodrome maintenance areas. 

11. The pencil shaped beam of an airborne weather radar is used in preference to the mapping 
mode for the determination of ground features. 
a. Beyond 100 NM because insufficient antenna tilt angle is available with the Mapping mode. 
b. Beyond 150 NM because the wider beam gives better definition. 
c.  
When approaching coast-lines in polar regions. 
*d. Beyond 50 to 60 NM because more power can be concentrated in the narrower beam. 

12. A weather radar, set to the 100 NM scale, shows a squall at 50 NM, by changing the scale 50 
NM, the return on the radar screen should. 
a. Increase in area and appear nearer to the bottom of the screen. 
*b. Increase in area and move to the top of the screen 
c. Decrease in area but not change in position on the screen 
d. Decrease in area and move to the top of the screen 

13. In weather radar the use of a cosecant beam in ‘Mapping’ mode enables. 
a. Better reception of echoes on contrasting terrain such as ground to sea. 
b. A greater radar range to be achieved. 
c. Higher definition echoes to be produced giving a clearer picture. 
*d. Scanning of a larger ground zone producing echoes whose signal are practically independent 
of distance. 

14. In Airborne Weather Radar (AWR), the main factor which determine whether a cloud will be 
detected are: 
*a. Size of the water drops and the wavelength/frequency used. 
b. Range from cloud and the wavelength/frequency used. 
c. Size of the water droplets and the diameter of the scanner. 
d. Rotational speed of radar scanner and the range from cloud. 

15. In order to ascertain whether a cloud return on an Aircraft Weather Radar (AWR) is at or 
above the height of the aircraft, the tilt control should be set to? 
*a. 2.5° up. 
b. 0°. 
c. 2.5° down. 
d. 5°up. 

16. When switching on the weather radar, after start-up, a signal very bright line appears on the 
screen. This means that the? 
a. Transmitter is faulty. 
b. Scanner is not rotating. 
*c. Scanner of the cathode ray tube is faulty. 
d. Receiver is faulty. 

17. Which of the following lists phenomena that CANNOT be detected by weather radar? 
a. Dry hail, clear air turbulence. 
*b. Snow; clear air turbulence. 
c. Clear air turbulence; turbulence in cloud with precipitation 
d. Snow, turbulence in clouds with precipitation. 

18. The “gain” control knob of an AWR adjusts? 
a. The power level of the transmitted energy is made dependent on the selected range. 
b. The brightness of the display. 
c. The automatic gain control of the AWR is activated. 
*d. The receiver sensitivity in order to achieve optimum target acquisition. 

19. Airborne Weather Radars are generally based on the use of?        
a. Secondary radar in the SHF band. 
b. Primary radar in the UHF band. 
*c. Primary radar in the SHF band. 
d. Secondary radar in the VHF band. 

20. In the MAPPING MODE the airborne weather radar utilizes a? 
a. Fan shaped beam effective up to a range of 150 nm. 
*b. Fan shaped beam effective up to a maximum range of 50 nm to 60 nm. 
c. Pencil beam effective from zero to 150nm. 
d. Pencil beam effective to a maximum range of 60 nm. 

21. In Airborne Weather Radar (AWR) the main factors that determine whether or not a cloud 
will be detected are? 
a. Range to the cloud, wavelength/frequency used. 
b. Size of the water droplets and the diameter of the radar scanner. 
*c. Size of the water droplets, and the wavelength/ frequency used. 
d. Rotational speed of the radar scanner, range from cloud. 

22. In order to ascertain whether a cloud return on an Aircraft Weather Radar (AWR) is at or 
above the height of the aircraft, the tilt control should be set to (assume a beam width of d 
degrees)? 
a. 2.5 degrees down. 
*b. 2.5 degrees up. 
c. 5 degrees up. 
d. 0 degrees. 

23. In an Airborne Weather Radar the area of greater turbulence are usually indicated on the 
screen by? 
*a. Colour zones of red or magenta. 
b. Black area where there is no colour. 
c. Colour zones of green or yellow. 
d. Area which are coloured black. 

24. To improve the detection of precipitation area(s) in e.g. Thunderstorms, in which the top of 
the cloud lies at or slightly above the level of flight? 
*a. The tilting setting should be lower when the aircraft climbs to a higher altitude. 
b. The tilting setting should be higher when the aircraft climbs to a higher altitude. 
c. The tilting setting should be higher when the selected range decreases. 
d. The tilting setting should be lower when the selected range increases. 

25. Which statements relating to the stabilization system of airborne weather radar antennae is 
true? 
a. They are stabilized with respect to the pitch, roll and yaw axes. 
b. They are stabilized with respect to the yaw axis, but not with respect to the pitch and roll 
axes. 
*c. They are stabilized with respect to the pitch and roll axes but not with respect to the yaw 
axis. 
d. The pilot can choose the axes of stabilization with the system’s stabilization selector switch. 

26. Airborne Weather Radar has been primarily developed to detect? 
a. Areas of wind shear and severe aircraft icing. 
b. Areas of severe clear air turbulence. 
*c. The kinds of precipitation, which are usually accompanied by turbulence. 
d. All kinds of frozen precipitation such as hail, snow and graupel. 

27. The antennae of modern airborne weather radars are stabilized by means of? 
a. Mercury switches. 
*b. Inputs from the aircraft’s attitude system. 
c. Artificial gravity switches. 
d. Feedback from the antenna accelerometers. 

28. The heaviest turbulence is likely to be encountered? 
*a. Where the area of heaviest precipitation is closest to the edge of the thunderstorm cell. 
b. About half way between two thunderstorms cells. 
c. In the way core of a thunderstorm cell. 
d. In the area of heaviest precipitation. 

29. The pictures in the diagram are showing an aircraft’s position with respect to some 
thunderstorm cells and the image pilot is getting from the radar. To detect this “blind alley” 
the pilot should? 
a. Select the cosecant square beam from better alley detection. 
b. Switch over from normal to x mode. 
c. Initiate a sleep climb. 
*d. Increase the range setting of the radar. 

30. In which frequency band do most Airborne Weather Radars operate? 
a. VHF 
b. UHF 
*c. SHF 
d. EHF 

31. The theoretical maximum range for an airborne weather radar is determined by the? 
a. Pulse length. 
b. Beam width. 
*c. Pulse repetition frequency. 
d. Carrier wave frequency. 

32. On the airborne weather radar display in WX mode, different colours are used? 
a. To display ground height differences. 
b. To display echoes from other aircraft. 
*c. To display different intensity of precipitation. 
d. To display clouds, indicating difference levels of visibility. 

33. The airborne weather radar (AWR) cannot detect? 
*a. Snow. 
b. Wet hail. 
c. Dey hail. 
d. Moderate rain. 

34. Which of the following list of phenomena are least likely to be detect by airborne weather 
radar? 
a. Clear air turbulence. 
*b. Precipitation. 
c. Turbulence in cloud that has precipitation. 
d. Wet snow and turbulence in cloud that has precipitation. 

35. While using the AWR in the weather mode, the strongest returns on the screen indicate? 
a. Areas of severe icing. 
b. Areas of probable windshear. 
*c. Areas of high concentration of large water droplets. 
d. Areas of severe turbulence. 

36. On a colour airborne weather radar, a bright red echo indicates? 
a. Strong rising air currents. 
b. An area of extreme turbulence. 
c. An area of strong windshear. 
*d. Heavy concentrate of liquid/solid water. 

37. The ISO-ECHO feature of an airborne weather radar can be used to detect? 
a. CAT. 
b. Wake turbulence. 
c. Turbulence is cloud. 
*d. Area of possible turbulence in cloud. 

38. Airborne weather uses a particularly high frequency radar signal, at 9 to 12 GHz, in order to? 
*a. Get good return from droplets of water and other sorts of precipitation. 
b. Get the most accurate range and bearing information. 
c. Make it possible to present a colour display of the weather situation. 
d. All of the answers in this question are correct. 

39. An airborne weather radar, with a beam width of 4 degrees in azimuth, is being used in the 
mapping mode. At what maximum range will it be able to detect a 1 nm wide opening in a 
sea cliff? 
a. 4 nm. 
*b. 15 nm. 
c. 45 nm. 
d. 60 nm. 

40. The tilt angle on the AWR at which an active cloud just disappears from the screen is 4 
degrees up. If the beam width is 5 degrees and the range to the cloud is 40nm use the 1 : 60 
rule  to calculate the approximate height of the cloud relative to the  aircraft? 
a. 4000 ft above. 
b. 4000 ft below. 
*c. 6000 ft above. 
d. 6000 ft below. 

41. An aircraft flying at 25 000 feet is equipped with AWR. The beam width is 5 degrees. With 
the radar tilted 3.5 degrees up, the radar is showing top of a cloud return at 105 nm. The 
approximate height of the cloud is. 
a. 14 300 ft. 
b. 25 600 ft. 
c. 30 300 ft. 
*d. 35 600 ft. 

42. The airborne weather radar is using a 5 degrees beam. The cloud is detected at a range of 
60nm. If the scanner is tilted up to 5 degrees, the cloud disappears. Using trigonometry to 
determine the height of the tops of the cloud, in relation to the aeroplanes cruising level, 
select the nearest answer from the following? 
*a. 15900 ft above the aircraft. 
b. 15900 ft below the aircraft. 
c. 31900 ft below the aircraft. 
d. 31900 ft below the aircraft. 

43. What frequency is typical chosen for AWR system? 
a. 9375 khz. 
b. 93.75 Mhz (93 decimal 5 khz). 
*c. 9.375 GHz (9 decimal 375 GHz). 
d. 93.75 GHz (93 decimal 75 GHz). 

44. The cosecant squared beam is used for mapping in the AWR because? 
a. It allows cloud detection to be effected while mapping. 
b. A greater range can be achieved. 
*c. A larger area of ground in illuminated by the beam. 
d. A wider beam is produced in azimuth to give a greater coverage. 

45. On a weather radar, the greatest turbulences is likely in an area where targets are? 
a. Coloured red. 
b. Coloured magneta. 
c. Show a clearly defined hole. 
*d. Show a rapid gradient of change from magenta to yellow. 

46. Weather radar is used by the pilot to assist in the? 
a. Detection of other aircraft through clouds. 
*b. Detection and avoidance of potentially turbulent cloud cells. 
c. Detection and avoidance of turbulence. 
d. Detection and determination of a route through active cloud cell formations. 

47. The stabilisation of the weather radar aerial is effective? 
a. For up to +/- 5 degrees in pitch and roll. 
*b. For up to +/- 20 degrees of combined pitch and roll. 
c. For up to +/- 30 degrees of combined pitch and roll. 
d. For up to +/- 40 degrees of combined pitch and roll. 

48. A height ring is used? 
a. As a range marker. 
b. As a zero point for range measurement. 
*c. To determine that weather radar is functioning. 
d. To determine the exact aeroplane height above the surface. 

49. A side lobe from an aerial of a weather radar may produce an echo on the screen known as a 
“height ring”. The pilot can use this? 
a. Aa a range marker. 
b. To determine the aeroplane’s height above the surface. 
c. As a zero point for range measurement. 
*d. To determine that the weather radar is functioning. 

50. The ISO-ECHO circuits is incorporated in the AWR? 
*a. To display areas of turbulence. 
b. To allow ground mapping. 
c. To alert pilots to the presence of cloud. 
d. To allow simultaneous mapping and detection of clouds. 

51. When the airborne weather radar is operating in its primary mode, to detect precipitation? 
a. The radar beam is a cosecant beam. 
*b. The radar beam is pencil shaped. 
c. Maximum tilt on the aerial will often be used. 
d. The range will be limited, compared to the range obtainable in the ground mapping mode. 

52. Airborne weather radars use a frequency of approximately 9 GHz because? 
a. The frequency penetrates clouds quite easily enabling good mapping of ground feature in 
the mapping mode. 
b. The short wavelength allows signals to be reflected from cloud water droplets of all sizes. 
*c. The wavelength is such that reflections are obtained only from the larger water droplets. 
d. It has a short wavelength, so producing higher frequency returns. 

53. The use of AWR on the ground is? 
a. Not permitted. 
b. Permitted provided reduced power is used. 
*c. Permitted provided special precautions, to safeguard personnel and equipment. 
d. Only permitted to assist movement in low visibility conditions. 

54. In an AWR with a colour CRT area of greater turbulence are indicated by? 
a. Iso-echo area coloured black. 
b. Large areas of flashing red. 
c. Iso-echo areas with no colour. 
*d. Most rapid change of colour. 

55. AWR contour mode is used for? 
*a. Identifying area of maximum turbulence within a cloud. 
b. Identifying rain bearing clouds. 
c. Short range mapping. 
d. Long range mapping. 
    `);

registerChapterText("radio-navigation", "SSR-ASSIGNMENT", "SSR-ASSIGNMENT", `
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

registerChapterText("radio-navigation", "DME-ASSIGNMENT", "DME-ASSIGNMENT", `
   
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

registerChapterText("radio-navigation", "GNSS-GPS-ASSIGNMENT", "GNSS-GPS-ASSIGNMENT", `
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

registerChapterText("radio-navigation", "Properties-of-Radio-Waves-OXFORD", "Properties-of-Radio-Waves-OXFORD", `
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

registerChapterText("radio-navigation", "Radio-Propagation-Theory-OXFORD", "Radio-Propagation-Theory-OXFORD", `
42. VDF for aeronautical use provides service in the frequency range?
[image: oxford_img1.jpg]
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

registerChapterText("radio-navigation", "Modulation-OXFORD", "Modulation-OXFORD", `
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

registerChapterText("radio-navigation", "Antennae-OXFORD", "Antennae-OXFORD", `
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

registerChapterText("radio-navigation", "Doppler-Radar-Systems-OXFORD", "Doppler-Radar-Systems-OXFORD", `
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

registerChapterText("radio-navigation", "VHF-Direction-Finder-(VDF)-OXFORD", "VHF-Direction-Finder-(VDF)-OXFORD", `
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

registerChapterText("radio-navigation", "Automatic-Direction-Finder-(ADF)-OXFORD", "Automatic-Direction-Finder-(ADF)-OXFORD", `
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

registerChapterText("radio-navigation", "VHF-Omni-directional-Range-(VOR)-OXFORD", "VHF-Omni-directional-Range-(VOR)-OXFORD", `
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

registerChapterText("radio-navigation", "Instrument-Landing-System-(ILS)-OXFORD", "Instrument-Landing-System-(ILS)-OXFORD", `
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

registerChapterText("radio-navigation", "Microwave-Landing-System-(MLS)-OXFORD", "Microwave-Landing-System-(MLS)-OXFORD", `
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

registerChapterText("radio-navigation", "Radar-Principles-OXFORD", "Radar-Principles-OXFORD", `
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

registerChapterText("radio-navigation", "Ground-Radar-OXFORD", "Ground-Radar-OXFORD", `
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


registerChapterText("radio-navigation", "Airborne-Weather-Radar-OXFORD", "Airborne-Weather-Radar-OXFORD", `
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

registerChapterText("radio-navigation", "Secondary-Surveillance-Radar-(SSR)-OXFORD", "Secondary-Surveillance-Radar-(SSR)-OXFORD", `
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

registerChapterText("radio-navigation", "Distance-Measuring-Equipment-(DME)-OXFORD", "Distance-Measuring-Equipment-(DME)-OXFORD", `
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

registerChapterText("radio-navigation", "Area-Navigation-Systems-(RNAV)-OXFORD", "Area-Navigation-Systems-(RNAV)-OXFORD", `
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

registerChapterText("radio-navigation", "Electronic-Flight-Information-System-(EFIS)-OXFORD", "Electronic-Flight-Information-System-(EFIS)-OXFORD", `
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

registerChapterText("radio-navigation", "Global-Navigation-Satellite-System-(GNSS)-OXFORD", "Global-Navigation-Satellite-System-(GNSS)-OXFORD", `
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

registerChapterText("radio-navigation", "Revision-Questions-OXFORD", "Revision-Questions-OXFORD", `
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

