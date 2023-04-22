# [Use case:](#use-case) 4 - Generate holding pattern config

## [Primary Actor(s)](#primary-actors)
None

## [Secundary Actor(s)](#secundary-actors)
None

## [Description](#description)
This use case generates a random holding pattern configuration. This includes inbound course and turn direction -being a right turn, a *standard* holding pattern; and a left turn, a *non-standard* holding pattern-.
This use case is called when user is on **All random** mode, since in the other two modes, holding patterns configurationconfiguration are fixed.

## [Priority](#priority) 
- [x] Vital
- [ ] Useful 
- [ ] Desirable

## [Pre-conditions](#pre-conditions)
None

## [Post-conditions](#post-conditions)
Holding pattern configuration is set.

## [Dependencies](#dependencies)
None

## [Flows](#flows)
### [Normal flow](#normal-flow)
1. Use case starts when it is invoked by [present random scenario](2.present-random-scenario.md) use case.
2. Inbound course is an **integer number** in the range of **[0, 360)**. It is generated using a library math function that retrieves a random integer number, or a floating point number, then casted.
3. Turn direction is a **boolean value** where **true means standard (right turn)** and **false means non-standard (left turn)**. It is generated using a library math function that retrieves a boolean value.
4. Holding pattern configuration values are set.
5. Use case finishes.
### [Alternate flow](#alternate-flow)
None
