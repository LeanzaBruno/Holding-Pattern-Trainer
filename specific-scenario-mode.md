# [Use case:](#use-case) 2 - Specific scenario mode 

## [Primary Actor(s)](#primary-actors)
User

## [Secundary Actor(s)](#secundary-actors)
None

## [Description](#description)
This use case is in charge of the **Specific scenario mode**. in this mode, user sets both holding pattern configuration and aircraft's position.

## [Priority](#priority) 
- [x] Vital
- [ ] Useful 
- [ ] Desirable

## [Pre-conditions](#pre-conditions)
None

## [Post-conditions](#post-conditions)
None

## [Dependencies](#dependencies)
[Set holding pattern configuration](set-holding-pattern-config.md)<br>
[Set aircraft's position](set-aircraft-position.md)<br>
[Present scenario](present-scenario.md)<br>
[Show diagram](show-diagram.md)<br>
[Set mode](set-mode.md)

## [Flows](#flows)
### [Normal flow](#normal-flow)
1. The use case [set holding pattern configuration](set-holding-pattern-configuration.md) is invoked in order to let the user set the values of the holding pattern.

2. The use case [set aircraft's position](set-aircraft-position.md) is invoked in order to let the user set the values of the aircraft's position.

3. Use case [present scenario](present-scenario.md) is called in order to present the scenario and options to the user.

4. When the user makes a choice, screen is cleaned.

5. The result is shown with a text message. 

	1. If user chooses the correct option, then a green message appears indicating 

	> Correct!

	2. If user chooses a wrong option, then a red message appears indicating

	> Incorrect!
	>
	> The correct option is [entry type]

6. The use case [Show scenario diagram](show-scenario-diagram.md) is invoked.

7. Two buttons called "Set new scenario" and "Change mode" are shown.

8. User presses "Set new scenario" and use case starts again.

### [Alternate flow](#alternate-flow)
8. User presses "Change mode" and [change mode use case](set-mode.md) is invoked.

Use case finishes if user closes tab or browser at any time of the program execution.
