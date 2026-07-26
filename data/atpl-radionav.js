/* ============================================================
   DGCA EXAM BANK — SUBJECT: Technical Specific
   ------------------------------------------------------------
   HOW TO ADD A CHAPTER
   ------------------------------------------------------------
   Copy this pattern for each chapter (see data/radio-navigation.js
   for a fully worked example with real questions):

   registerChapterText("technical-specific", "chapter-id", "Chapter Display Name", `
   1. Question text goes here?
   a. Wrong option
   *b. Correct option
   c. Wrong option
   d. Wrong option
   Explanation: optional.

   2. Next question...
   a. ...
   *b. ...
   c. ...
   d. ...
   `);

   Full format reference (images, multi-line questions, etc.)
   is documented at the top of js/parser.js.
   ============================================================ */

registerSubject("atpl-radionav", "ATPL-RADIO-NAV");

registerChapterText("atpl-radionav", "ch1-basic-radio", "Basic Radio Theory and Propagation", `
1. What is the relationship between frequency and wavelength for a radio wave?
a. Frequency and wavelength are directly proportional
*b. Frequency and wavelength are inversely proportional
c. Frequency and wavelength are unrelated
d. Frequency equals wavelength divided by amplitude
Explanation: Wavelength = speed of light / frequency. As frequency increases, wavelength decreases, and vice versa - the two are inversely proportional for a wave travelling at a constant speed.

2. Which frequency band is used by most NDBs?
a. VHF
*b. LF/MF
c. HF
d. UHF
Explanation: NDBs typically operate in the Low Frequency (LF) and Medium Frequency (MF) bands, roughly 190-1750 kHz, which supports long range ground wave propagation.

3. Which frequency band is used by VOR, ILS localizer, and most air traffic communications?
a. LF
b. MF
c. HF
*d. VHF
Explanation: VOR, the ILS localizer, and most air-ground voice communications operate in the VHF band (30-300 MHz), which offers reliable, relatively interference-free line-of-sight propagation.

4. What is the main characteristic of VHF and higher frequency propagation?
*a. It is essentially line-of-sight and not significantly affected by the ionosphere
b. It always follows the curvature of the earth over long distances
c. It is reflected efficiently by the D layer at all times of day
d. It has no maximum usable range
Explanation: VHF, UHF and higher frequencies pass through the ionosphere rather than being reflected by it, so propagation is essentially line-of-sight, limited by the radio horizon.

5. Which layer of the ionosphere is primarily responsible for the daytime absorption of MF and lower HF signals?
*a. D layer
b. E layer
c. F1 layer
d. F2 layer
Explanation: The D layer forms during daylight hours at the lowest altitude of the ionosphere and absorbs (rather than reflects) MF and lower HF radio waves, which is why MF/HF ground-to-air ranges are often shorter by day.

6. What happens to the D layer of the ionosphere at night?
*a. It disappears, or greatly weakens, due to the absence of solar radiation
b. It becomes thicker and absorbs more signal
c. It splits into two separate layers
d. It merges with the D layer of the opposite hemisphere
Explanation: The D layer is sustained by solar (UV/X-ray) radiation ionising the lower atmosphere. Without sunlight, ions recombine quickly and the D layer largely disappears at night, reducing daytime absorption and allowing HF signals to travel further via the E and F layers.

7. Ground wave propagation is most useful for which type of signal?
*a. Low and Medium Frequency signals following the earth's surface
b. VHF signals reflecting off the F2 layer
c. UHF signals used for satellite communication
d. Millimetre wave signals used by weather radar
Explanation: Ground wave (surface wave) propagation, where the wave follows the curvature of the earth, works best at LF and MF, and is the basis for reliable NDB reception at range, especially over water.

8. What is meant by "sky wave" propagation?
a. A wave that travels in a perfectly straight line to the horizon
*b. A wave that is refracted/reflected back to earth by the ionosphere
c. A wave that only exists above 30,000ft
d. A wave used exclusively for satellite navigation
Explanation: Sky wave propagation occurs when radio energy is refracted back down to earth by the ionosphere, allowing HF signals in particular to be received well beyond the radio horizon.

9. Why can NDB bearings become unreliable at night?
*a. Sky wave signals, refracted by the ionosphere, interfere with the wanted ground wave signal
b. The NDB transmitter power automatically reduces at night
c. Ground wave propagation stops completely after sunset
d. The receiver's sense antenna stops working at night
Explanation: At night, sky wave signals from the same or a distant NDB can be received alongside the ground wave, causing interference that leads to erratic and unreliable ADF bearing indications - a phenomenon often called "night effect".

10. What is "static interference" as it affects NDB/ADF reception?
*a. Interference from natural electrical discharges, such as thunderstorms, that can deflect the ADF needle
b. Interference caused only by nearby VOR transmitters
c. A permanent calibration error in the receiver
d. Interference that only occurs above 25,000ft
Explanation: Thunderstorms and other natural electrical discharges generate strong low frequency radio energy. Because ADF operates in the same LF/MF range, this static can attract the needle away from the correct bearing, particularly near active storms.

11. Which of these best describes "quadrantal error" affecting a radio bearing?
*a. Distortion of radio waves caused by re-radiation from the aircraft structure
b. An error caused only by ionospheric refraction
c. An error that only affects satellite based systems
d. An error caused by incorrect map projection
Explanation: Quadrantal error is caused by radio waves being re-radiated (reflected/re-transmitted) by the metal structure of the aircraft, distorting the apparent direction of arrival; it varies with the aircraft's relative bearing to the station and is greatest in the quadrants roughly 45 degrees off the nose/tail and wingtips.

12. What is the main purpose of amplitude modulation (AM)?
*a. To superimpose the information signal onto a carrier wave by varying the carrier's amplitude
b. To superimpose the information signal onto a carrier wave by varying the carrier's frequency
c. To increase the carrier frequency to improve range
d. To eliminate the need for a carrier wave entirely
Explanation: In amplitude modulation, the amplitude of a constant-frequency carrier wave is varied in step with the information (audio) signal, allowing that information to be recovered by a receiver tuned to the carrier frequency.

13. Which navigation aid uses frequency modulation (FM) rather than amplitude modulation for at least part of its signal?
a. NDB
*b. Glideslope (as part of the overall ILS system, using FM sub-carriers in some VOR/related systems)
c. DME interrogation pulses
d. Secondary radar transponder replies
Explanation: While most classic navigation aids like NDB, VOR's basic carrier, and DME use AM or pulse techniques, FM techniques are used in various sub-systems (for example, some VOR sub-carrier arrangements); understanding AM versus FM helps in appreciating why different aids behave differently in terms of noise immunity.

14. What is the main advantage of pulse modulation, as used by DME and SSR?
*a. It allows accurate timing measurements, which is essential for calculating distance
b. It allows an unlimited number of aircraft to use the same frequency simultaneously with no interference
c. It removes the need for synchronisation between interrogator and transponder
d. It works only at HF frequencies
Explanation: Pulse modulation transmits short bursts of RF energy; because DME and SSR work by measuring the precise time between interrogation and reply pulses, pulse modulation is essential to enable accurate range measurement.

15. What is "attenuation" of a radio signal?
*a. The reduction in signal strength as it travels away from the transmitter
b. The increase in signal strength due to constructive interference
c. A deliberate technique to prevent unauthorised reception
d. The process of converting AM signals into FM signals
Explanation: Attenuation describes the loss of signal strength with distance and due to absorption, scattering, and other factors, and is a key factor limiting the range of any radio transmission.

16. What does "polarization" of a radio wave refer to?
*a. The orientation of the wave's electric field as it propagates
b. The direction the transmitting station is facing
c. The number of times the signal has been amplified
d. The colour coding used on aeronautical charts for that frequency
Explanation: Polarization refers to the orientation (horizontal, vertical, or circular) of the electric field component of the radio wave; matching the polarization of the transmitting and receiving antennas maximises signal strength.

17. VOR and ILS localizer signals are transmitted with which type of polarization?
*a. Horizontal
b. Vertical
c. Circular
d. No specific polarization is used
Explanation: VOR and the ILS localizer use horizontally polarized signals, which is one reason aircraft VHF navigation antennas are typically mounted horizontally.

18. Which of these best describes "line of sight" range limitations at VHF and above?
*a. Range is limited mainly by the curvature of the earth and the height of transmitter and receiver
b. Range is limited only by the transmitter's frequency, regardless of altitude
c. Range increases indefinitely with altitude with no theoretical limit formula
d. Range is unaffected by the height of either station
Explanation: Because VHF/UHF signals travel essentially in straight lines and are not usefully reflected by the ionosphere, achievable range depends on the curvature of the earth and the heights of the transmitting and receiving antennas above the surface - higher altitude generally means greater range.

19. Why does an aircraft flying at high altitude typically receive a VOR station from a greater distance than one flying low?
*a. Because the radio horizon extends further as the receiving aircraft's altitude increases
b. Because VOR power output automatically increases with altitude
c. Because the ionosphere reflects VOR signals more efficiently at altitude
d. Because ground wave range always increases with altitude
Explanation: Since VOR relies on line-of-sight VHF propagation, climbing extends the radio horizon in the same way that climbing a hill lets you see further, increasing the theoretical reception range.

20. What is meant by the term "carrier wave"?
*a. The basic radio frequency wave onto which information is modulated for transmission
b. The specific aircraft carrying the navigation receiver
c. A wave that only exists in HF radio systems
d. The wave used exclusively to carry Morse code identification, separate from voice or data
Explanation: The carrier wave is the underlying continuous radio frequency signal that is modulated (in amplitude, frequency, or by pulses) to carry the actual information, whether that is a VOR bearing signal, a voice transmission, or an aircraft's transponder reply.
`);
