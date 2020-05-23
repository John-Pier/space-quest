import {SPQTypedMap} from "../../../core/base.types";
import {SPQQuestTask, SPQQuestTaskUrlType} from "../../../core/models/quest-task.type";

export const SPQQuestTasks: SPQTypedMap<SPQQuestTask> = {
    1: {
        id: 1,
        type: SPQQuestTaskUrlType.PICTURE,
        url: "https://sun1-86.userapi.com/3FnETLCD9KSIHasrTIRNaOddc7rii_-5KZpZeQ/Xo21o78aGPc.jpg",
        text: "Думатель: каков ответ на главный вопрос жизни, вселенной и всего такого ?",
        answer: 42,
        title: "Test Init Cube Label",
        subtitle: "This is one step",
        serialNumber: 1
    },
    2: {
        id: 2,
        type: SPQQuestTaskUrlType.VIDEO,
        url: "https://www.youtube.com/watch?v=h7dEBvP9G7I",
        text: "Думатель: каков ответ на главный вопрос жизни, вселенной и всего такого ?",
        answer: 42,
        title: "Test second Cube Label",
        subtitle: "This is second step",
        serialNumber: 2
    },
    3: {
        id: 3,
        type: SPQQuestTaskUrlType.PICTURE,
        url: "https://sun1-86.userapi.com/3FnETLCD9KSIHasrTIRNaOddc7rii_-5KZpZeQ/Xo21o78aGPc.jpg",
        text: "Думатель: каков ответ на главный вопрос жизни, вселенной и всего такого ?",
        answer: 42,
        title: "Перед стартом",
        subtitle: "Проспект Ленина 21",
        serialNumber: 3
    },
    4: {
        id: 4,
        type: SPQQuestTaskUrlType.PICTURE,
        url: "https://sun1-86.userapi.com/3FnETLCD9KSIHasrTIRNaOddc7rii_-5KZpZeQ/Xo21o78aGPc.jpg",
        text: "Думатель: каков ответ на главный вопрос жизни, вселенной и всего такого ?",
        answer: 42,
        title: "Дом- рекордсмен",
        subtitle: "Проспект Ленина",
        serialNumber: 4
    },
    5: {
        id: 5,
        type: SPQQuestTaskUrlType.PICTURE,
        url: "https://sun1-86.userapi.com/3FnETLCD9KSIHasrTIRNaOddc7rii_-5KZpZeQ/Xo21o78aGPc.jpg",
        text: "Думатель: каков ответ на главный вопрос жизни, вселенной и всего такого ?",
        answer: 42,
        title: "Семейные узы",
        subtitle: "Молодо- гвардейская 238",
        serialNumber: 5
    },
    6: {
        id: 6,
        type: SPQQuestTaskUrlType.PICTURE,
        url: "https://sun1-86.userapi.com/3FnETLCD9KSIHasrTIRNaOddc7rii_-5KZpZeQ/Xo21o78aGPc.jpg",
        text: "Думатель: каков ответ на главный вопрос жизни, вселенной и всего такого ?",
        answer: 42,
        title: "Артемьев Олег Германович",
        subtitle: "Вопрос о космодромах",
        serialNumber: 6
    }
};
