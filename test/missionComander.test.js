const MissionCommander = require(`./../app/missionComander`)

describe ("1. Prueba de unidad para la clase de MissionCommander ", () => {
    test (`Caso de prueba 1: Creación de un objeto MissionCommander`, () => {
        const myMissionCommander = new MissionCommander ("Woopa")
        expect (myMissionCommander.name).toBe ("Woopa");
    })
})