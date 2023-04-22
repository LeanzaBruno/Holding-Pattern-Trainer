# [Use case:](#use-case) 3 - Fixed holding pattern mode

## [Primary Actor(s)](#primary-actors)
User

## [Secundary Actor(s)](#secundary-actors)
None

## [Description](#description)
This use case represents the *fixed holding pattern mode*. In this mode, user set a fixed holding pattern configuration and only aircraft's position is randomly generated, leaving holding pattern values constant in all scenarios.

## [Priority](#priority) 
- [x] Vital
- [ ] Useful 
- [ ] Desirable

## [Pre-conditions](#pre-conditions)
User chose the fixed holding pattern mode in the modes screen.

## [Post-conditions](#post-conditions)
None

## [Dependencies](#dependencies)
[Set holding pattern configuration](set-holding-pattern-configuration.md)<br>
[Generate aircraft's random position](generate-aircraft-position.md)<br>
[Present scenario](present-scenario.md)

## [Flows](#flows)
### [Normal flow](#normal-flow)
1. The use case [set holding pattern configuration](set-holding-pattern-configuration.md) is invoked in order to let the user set the values of the holding pattern.

2. The use case [generate aircraft's position](generate-aircraft-position.md) is called in order to set a random aircraft's position.

3. Use case [present scenario](present-scenario.md) is called in order to present the scenario and options to the user.

4. Uses presses "Next scenario" and the use case goes again to step 2.

### [Alternate flow](#alternate-flow)
Use case finishes when user closes tab or browser at any time of the normal flow.
