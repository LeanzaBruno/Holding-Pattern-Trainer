# [Use case:](#use-case) 1 - Set mode

## [Primary Actor(s):](#primary-actors)
User

## [Secundary Actor(s):](#secundary-actors)
None

## [Description](#description)
This use case sets the mode of the trainer. The modes are:

+ **All random** Both aircraft's position and holding pattern configuration are random. Thus every new scenario has a different holding pattern configuration (inbound course and turn direction) and aircraft's location. 
+ **Fixed holding pattern** User can set the holding pattern configuration and only aircraft's position is random generated.
+ **Set specific scenario** User can set both holding pattern configuration and aircraft's position.

A scenario is an specific situation of the aircraft for a specific holding pattern configuration.

Every scenario includes:
- Aircraft's position:
	+ Radial,
	+ Distance.
	+ Flight level

- Holding pattern configuration:
	+ Standard or no standard,
	+ Inbound course.


## [Priority](#priority)
- [x] Vital
- [ ] Useful 
- [ ] Desirable

## [Pre-conditions](#pre-conditions)
None

## [Post-conditions](#post-conditions)
Trainer mode is set.

## [Dependencies](#dependencies)
None

## [Flows](#flows)
### [Normal flow](#normal-flow)
1. Use case starts at the beginning of the program or when user pushed the "Change mode" button.
2. User chose one of the three modes.
	1. If user choose **"All random"** mode, use case [all random mode](all-random-mode.md) is invoked.
	2. If user choose **"Fixed holding pattern"** mode, use case [fixed holding pattern mode](fixed-holding-pattern-configuration-mode.md) is invoked.
	3. If user choose **"Set specific scenario"** mode, use case [specific scenario](specific-scenario-mode.md) is invoked.
3. Use case finishes.

### [Alternate flow](#alternate-flow)
Use case finishes when user closes the trainer tab or browser at any time of the program execution.
