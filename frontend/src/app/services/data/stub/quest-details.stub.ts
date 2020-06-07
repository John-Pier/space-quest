import {SPQTypedMap} from "../../../core/base.types";
import {SPQQuestTask, SPQQuestTaskUrlType} from "../../../core/models/quest-task.type";

export const SPQQuestTasks: SPQTypedMap<SPQQuestTask> = {
    1: {
        id: 1,
        type: SPQQuestTaskUrlType.PICTURE,
        url: "test1.jpg",
        question: "Думатель: каков ответ на главный вопрос жизни, вселенной и всего такого ?",
        title: "Test Init Cube Label",
        subtitle: "This is one step",
        serialNumber: 1
    },
    2: {
        id: 2,
        type: SPQQuestTaskUrlType.VIDEO,
        url: "h7dEBvP9G7I",
        question: "Думатель: каков ответ на главный вопрос жизни, вселенной и всего такого ?",
        title: "Test second Cube Label",
        subtitle: "This is second step",
        serialNumber: 2
    },
    3: {
        id: 3,
        type: SPQQuestTaskUrlType.PICTURE,
        url: "test2.jpg",
        question: "Думатель: каков ответ на главный вопрос жизни, вселенной и всего такого ?",
        title: "Перед стартом",
        subtitle: "Проспект Ленина 21",
        serialNumber: 3
    },
    4: {
        id: 4,
        type: SPQQuestTaskUrlType.PICTURE,
        url: "test1.jpg",
        question: "Думатель: каков ответ на главный вопрос жизни, вселенной и всего такого ?",
        title: "Дом- рекордсмен",
        subtitle: "Проспект Ленина",
        serialNumber: 4
    },
    5: {
        id: 5,
        type: SPQQuestTaskUrlType.PICTURE,
        url: "test2.jpg",
        question: "Думатель: каков ответ на главный вопрос жизни, вселенной и всего такого ?",
        title: "Семейные узы",
        subtitle: "Молодо- гвардейская 238",
        serialNumber: 5
    },
    6: {
        id: 6,
        type: SPQQuestTaskUrlType.PICTURE,
        url: "test2.jpg",
        question: "Думатель: каков ответ на главный вопрос жизни, вселенной и всего такого ?",
        title: "Артемьев Олег Германович",
        subtitle: "Вопрос о космодромах",
        serialNumber: 6
    }
};
