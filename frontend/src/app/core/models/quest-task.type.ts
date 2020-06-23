import {ID} from "../base.types";

export type SPQQuestTask = Readonly<{
    uuid: ID,
    sectionUUID: ID,
    title: string,
    subtitle: string,
    url: string,
    text: string,
    serialNumber: number,
    passed: boolean,
    selected: boolean
}>;

export type SPQQuestTaskBrief = Readonly<{
    id: ID,
    title: string,
    subtitle: string,
    serialNumber: number,
    passed: boolean,
    selected: boolean
    // TODO -> Может добавить превью вопроса как на моках ?
}>;

export type SPQQuestFlow = Readonly<{
    id: ID,
    name: string,
    nodes: SPQQuestTaskBrief[],
    currentTaskId: ID
}>;

export type SPQQuestFlowBrief = Readonly<{
    id: ID,
    name: string,
    text: string,
    url: string,
    currentTaskId: ID
}>;
