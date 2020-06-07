import {ID} from "../base.types";

export enum SPQQuestTaskUrlType {
    VIDEO = "video",
    PICTURE = "picture"
}

export type SPQQuestTask = Readonly<{
    id: ID,
    title: string,
    subtitle: string,
    type: SPQQuestTaskUrlType
    url: string,
    question: string,
    serialNumber: number
}>;

export type SPQQuestTaskBrief = Readonly<{
    id: ID,
    title: string,
    subtitle: string,
    serialNumber: number
    // TODO -> Может добавить превью вопроса как на моках ?
}>;

export type SPQQuestFlow = Readonly<{
    id: ID,
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
