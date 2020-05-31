import {SPQQuestFlow, SPQQuestTaskBrief} from "../../../core/models/quest-task.type";

export const SPQStubQuestTaskBriefs: SPQQuestTaskBrief[] = [
    {
        id: "1",
        title: "Test Init Cube Label",
        subtitle: "This is one step",
        serialNumber: 1
    },
    {
        id: "2",
        title: "Test second Cube Label",
        subtitle: "This is second step",
        serialNumber: 2
    },
    {
        id: "3",
        title: "Перед стартом",
        subtitle: "Проспект Ленина 21",
        serialNumber: 3
    },
    {
        id: "4",
        title: "Дом- рекордсмен",
        subtitle: "Проспект Ленина",
        serialNumber: 4
    },
    {
        id: "5",
        title: "Семейные узы",
        subtitle: "Молодо- гвардейская 238",
        serialNumber: 5
    },
    {
        id: 6,
        title: "Артемьев Олег Германович",
        subtitle: "Вопрос о космодромах",
        serialNumber: 6
    }
];

export const SPQStubQuestFlow: SPQQuestFlow = {
    id: "test-flow-id",
    nodes: SPQStubQuestTaskBriefs,
    currentTaskId: 6
};
