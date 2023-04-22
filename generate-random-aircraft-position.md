# Use case: 3 - Generate aircraft's position

## Primary Actor(s)
None

## Secundary Actor(s)
None

## Description
This use case generates a random position for the aircraft.

## Priority
- [x] Vital
- [ ] Useful 
- [ ] Desirable

## [Pre-conditions](#pre-conditions)
User is on **All random** or **Fixed holding pattern** modes.

## Post-conditions
Aircraft's position is set.

## Dependencies
None

## Flows
### Normal flow
1. Use case starts when it is invoked by one of the two modes [previously mentioned](#pre-conditions).
2. The distance from the aircraft to the beacon -VOR/DME or just NDB- is a **floating point number** is the range of **[10, 100]**. It is generated using a library math function that retrieves a random floating point number. 
3. The radial where the aircraft is going to be is an **integer number** in the range of **[0, 360)**. It is generated using a library math function that retrives a random integer or a random floating point number, then casted to integer.
4. Aircraft's position variables are set.
5. Use case finishes.

### Alternate flow
None
